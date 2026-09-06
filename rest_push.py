#!/usr/bin/env python3
"""Push the full local tree (git HEAD) to aman-newbie/atelier-art-course-2 main
via the GitHub REST git-data API. Usage: rest_push.py <PAT> [repo]
The sandbox git proxy always authenticates as the arena bot, so REST with a
user PAT is the only reliable write channel."""
import base64, json, os, subprocess, sys, time, urllib.request

PAT = sys.argv[1] if len(sys.argv) > 1 else os.environ["GIT_PAT"]
REPO = sys.argv[2] if len(sys.argv) > 2 else "atelier-art-course-2"
OWNER = "aman-newbie"
BASE = f"https://api.github.com/repos/{OWNER}/{REPO}"

def api(method, path, payload=None):
    req = urllib.request.Request(BASE + path, method=method)
    req.add_header("Authorization", "Bearer " + PAT)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("User-Agent", "rest-push")
    data = None
    if payload is not None:
        data = json.dumps(payload).encode()
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, data=data, timeout=60) as r:
            body = r.read().decode()
            return r.status, (json.loads(body) if body else {})
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        try:
            return e.code, json.loads(body)
        except Exception:
            return e.code, {"message": body[:200]}

# 1. files from git HEAD
files = subprocess.check_output(["git", "ls-tree", "-r", "--name-only", "HEAD"],
                                cwd=os.path.dirname(os.path.abspath(__file__))).decode().splitlines()
print(f"pushing {len(files)} files")

# 2. blobs
shas = {}
for f in files:
    raw = subprocess.check_output(["git", "show", f"HEAD:{f}"], cwd=os.path.dirname(os.path.abspath(__file__)))
    code, d = api("POST", "/git/blobs", {"content": base64.b64encode(raw).decode(), "encoding": "base64"})
    if code != 201:
        print("BLOB FAIL", f, code, d.get("message")); sys.exit(1)
    shas[f] = d["sha"]
    print("blob", f, "ok", flush=True)

# 3. trees (subdirs first)
def tree_for(paths):
    items = []
    for p in paths:
        name = os.path.basename(p) if "/" not in p else p.split("/")[-1]
        mode = "100644"
        items.append({"path": name, "mode": mode, "type": "blob", "sha": shas[p]})
    code, d = api("POST", "/git/trees", {"tree": items})
    if code != 201:
        print("TREE FAIL", code, d.get("message")); sys.exit(1)
    return d["sha"]

dirs = {}
for f in files:
    if "/" in f:
        dirs.setdefault(f.rsplit("/", 1)[0], []).append(f)
dirsha = {}
# deepest first
for d in sorted(dirs, key=lambda x: -x.count("/")):
    children = []
    for f in dirs[d]:
        name = f.rsplit("/", 1)[1]
        children.append({"path": name, "mode": "100644", "type": "blob", "sha": shas[f]})
    for sub in dirsha:
        if sub.startswith(d + "/"):
            children.append({"path": sub.rsplit("/", 1)[1], "mode": "040000", "type": "tree", "sha": dirsha[sub]})
    code, resp = api("POST", "/git/trees", {"tree": children})
    if code != 201:
        print("SUBTREE FAIL", d, code, resp.get("message")); sys.exit(1)
    dirsha[d] = resp["sha"]
    print("tree", d, "ok", flush=True)

root_items = []
for f in files:
    if "/" not in f:
        root_items.append({"path": f, "mode": "100644", "type": "blob", "sha": shas[f]})
for d, s in dirsha.items():
    if "/" not in d:
        root_items.append({"path": d, "mode": "040000", "type": "tree", "sha": s})
code, resp = api("POST", "/git/trees", {"tree": root_items})
if code != 201:
    print("ROOT TREE FAIL", code, resp.get("message")); sys.exit(1)
root_sha = resp["sha"]; print("root tree", root_sha, "ok")

# 4. current main head
code, d = api("GET", "/git/ref/heads/main")
if code != 200:
    print("REF FAIL", code, d.get("message")); sys.exit(1)
parent = d["object"]["sha"]
print("parent", parent)

# 5. commit
commit = {
    "message": "Import Atelier Art Course (9 live arcs, 96 modules) + continue arc authoring",
    "tree": root_sha,
    "parents": [parent],
    "author": {"name": "aman-newbie", "email": "aman-newbie@users.noreply.github.com", "date": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())},
    "committer": {"name": "aman-newbie", "email": "aman-newbie@users.noreply.github.com", "date": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())},
}
code, d = api("POST", "/git/commits", commit)
if code != 201:
    print("COMMIT FAIL", code, d.get("message")); sys.exit(1)
commit_sha = d["sha"]; print("commit", commit_sha)

# 6. update main
code, d = api("PATCH", "/git/refs/heads/main", {"sha": commit_sha, "force": False})
if code != 200:
    print("REF UPDATE FAIL", code, d.get("message")); sys.exit(1)
print("PUSH OK -> main =", commit_sha)
