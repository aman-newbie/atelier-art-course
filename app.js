
'use strict';
/* ============================================================
   ATELIER — CURRICULUM DATA
   This is the entire content model. Everything renders from
   this object, so extending the platform later means adding
   data here, not rewriting markup.
   ============================================================ */

const CURRICULUM = [...CURRICULUM_1, ...CURRICULUM_2, ...CURRICULUM_3];

const QUOTES = [
  "The page doesn't know how many you've thrown away.",
  "Construction first. Likeness is what construction looks like from the outside.",
  "You're not behind. You're early in something that takes years for everyone.",
  "A confident wrong line teaches you more than a hesitant right one.",
  "Seeing is the whole problem. The hand just needs to catch up.",
  "Nobody's first thousand drawings are good. That's not a warning, it's the schedule."
];

/* ============================================================
   STATE
   ============================================================ */
const STATE = {
  theme:'dark',
  route:{view:'home', pathId:null, moduleId:null, tab:'overview'},
  completed:new Set(),
  favorites:new Set(),
  checklist:{},
  quizAnswers:{},
  notes:{},
  resourcesOpened:{},
  recentlyVisited:[],
  searchQuery:'',
  fontScale:1,
  xp:0,
  storageBackend:'none',
  streak:0,
  lastVisitDate:null,
  unlockedAchievements:new Set()
};

function getLivePaths(){
  return CURRICULUM.filter(p=>p.status==='live');
}
function getAllLiveModules(){
  const out = [];
  getLivePaths().forEach(path=>{ path.modules.forEach(m=>{ if(!m.stub) out.push({m, path}); }); });
  return out;
}
const TOTAL_LIVE_MODULES = getAllLiveModules().length;

/* ============================================================
   ICONS (inline SVG strings — no external icon library)
   ============================================================ */
const ICONS = {
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 15l6-6M11 6l1-1a4 4 0 015 5l-1 1M13 18l-1 1a4 4 0 01-5-5l1-1"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
  arrowLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
  chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>',
  stamp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  warmup:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v4M4.9 4.9l2.8 2.8M2 12h4M4.9 19.1l2.8-2.8M12 18a6 6 0 100-12 6 6 0 000 12z"/></svg>',
  daily:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  weekly:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>',
  challenge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/></svg>',
  empty:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>',
  toastCheck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>',
  flame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c1 4-4 5-4 9a4 4 0 008 0c0-2-1-3-1-5 2 1 3 3 3 5a6 6 0 01-12 0c0-5 4-6 6-9z"/></svg>',
  note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v6h6M9 13h6M9 17h6"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 4l14 8-14 8V4z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="5" y="4" width="5" height="16" rx="1"/><rect x="14" y="4" width="5" height="16" rx="1"/></svg>',
  shuffle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h3l10 12h5M14 6h5v5M3 18h3l4-4.5M14 18h5v-5"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>'
};

/* Small decorative construction-guide SVGs, thematically tied to content */
const DECOR = {
  ellipse:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="45" cy="45" rx="34" ry="14" transform="rotate(-18 45 45)"/><line x1="12" y1="45" x2="78" y2="45" stroke-dasharray="2 3" transform="rotate(-18 45 45)"/></svg>',
  box:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 30 L55 20 L80 32 L45 42 Z"/><path d="M20 30 L20 62 L45 74 L45 42"/><path d="M80 32 L80 62 L45 74"/></svg>',
  eye:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><path d="M10 45 Q45 15 80 45 Q45 75 10 45 Z"/><circle cx="45" cy="45" r="12"/></svg>',
  grid:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><line x1="0" y1="30" x2="90" y2="30"/><line x1="0" y1="60" x2="90" y2="60"/><line x1="30" y1="0" x2="30" y2="90"/><line x1="60" y1="0" x2="60" y2="90"/></svg>',
  lines:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><line x1="10" y1="20" x2="80" y2="30"/><line x1="10" y1="45" x2="80" y2="40"/><line x1="10" y1="70" x2="80" y2="55"/></svg>',
  vanish:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><line x1="80" y1="20" x2="10" y2="10"/><line x1="80" y1="20" x2="10" y2="45"/><line x1="80" y1="20" x2="10" y2="80"/><circle cx="80" cy="20" r="2" fill="currentColor"/></svg>',
  spark:'<svg class="mcard-deco" viewBox="0 0 90 90" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 70 L70 20 M20 20 L70 70"/></svg>'
};
const MODULE_DECOR = {m1:'spark', m2:'grid', m3:'lines', m4:'ellipse', m5:'eye', m6:'grid', m7:'box'};

const TOTAL_MAPPED_MODULES = CURRICULUM.reduce((sum,p)=> sum + (p.modules ? p.modules.length : p.moduleCount), 0);

/* ============================================================
   ACHIEVEMENTS
   Every condition reads directly off real state — no busywork
   counters invented just to have something to unlock.
   ============================================================ */
function pathFullyComplete(pathId){
  const path = CURRICULUM.find(p=>p.id===pathId);
  if(!path || !path.modules) return false;
  const real = path.modules.filter(m=>!m.stub);
  if(!real.length) return false;
  return real.every(m=>STATE.completed.has(m.id));
}
function totalQuizCorrect(){
  let n = 0;
  getAllLiveModules().forEach(({m})=>{
    if(!m.quiz) return;
    const ans = STATE.quizAnswers[m.id] || {};
    m.quiz.forEach((q,qi)=>{ if(ans[qi]===q.correct) n++; });
  });
  return n;
}

const ACHIEVEMENTS = [
  {id:'first-mark', title:'First Mark', desc:'Complete your first module.', check:s=>s.completed.size>=1},
  {id:'foundations-grad', title:'Foundations Graduate', desc:'Complete every Foundations module.', check:()=>pathFullyComplete('foundations')},
  {id:'perspective-grad', title:'Perspective Graduate', desc:'Complete every Perspective & Construction module.', check:()=>pathFullyComplete('perspective')},
  {id:'portrait-grad', title:'Portrait Graduate', desc:'Complete every Head & Portrait module.', check:()=>pathFullyComplete('portrait')},
  {id:'century', title:'Century Club', desc:'Earn 100 XP.', check:s=>s.xp>=100},
  {id:'five-hundred', title:'500 Club', desc:'Earn 500 XP.', check:s=>s.xp>=500},
  {id:'thousand', title:'1000 Club', desc:'Earn 1,000 XP.', check:s=>s.xp>=1000},
  {id:'quiz-sharp', title:'Sharp', desc:'Answer 20 quick-check questions correctly.', check:()=>totalQuizCorrect()>=20},
  {id:'three-day', title:'3-Day Streak', desc:'Come back three days in a row.', check:s=>s.streak>=3},
  {id:'week-strong', title:'Week Strong', desc:'Come back seven days in a row.', check:s=>s.streak>=7},
  {id:'month-strong', title:'Thirty Days In', desc:'Come back thirty days in a row.', check:s=>s.streak>=30},
  {id:'curator', title:'Curator', desc:'Bookmark 3 modules.', check:s=>s.favorites.size>=3},
  {id:'reflective', title:'Reflective Practice', desc:'Write your first note.', check:s=>Object.values(s.notes).some(t=>t&&t.trim().length>0)}
];

function computeUnlocked(){
  return new Set(ACHIEVEMENTS.filter(a=>a.check(STATE)).map(a=>a.id));
}

function checkAchievements(){
  const current = computeUnlocked();
  const fresh = [...current].filter(id=>!STATE.unlockedAchievements.has(id));
  if(fresh.length){
    fresh.forEach(id=>STATE.unlockedAchievements.add(id));
    const a = ACHIEVEMENTS.find(x=>x.id===fresh[0]);
    if(a) showToast('Achievement unlocked: ' + a.title);
    saveProgress();
  }
}

/* ============================================================
   PRACTICE CENTER — prompt library
   Every prompt maps to a drill already taught in a live module,
   so nothing here asks for a skill that hasn't been introduced.
   ============================================================ */
const PRACTICE_PROMPTS = [
  {cat:'Lines', text:'Draw 30 confident straight lines of varying length using the ghosting method.'},
  {cat:'Lines', text:'Fill a page with superimposed lines, aiming to land exactly on each previous pass.'},
  {cat:'Lines', text:'Draw a spiral from the center outward in one continuous, confident stroke.'},
  {cat:'Lines', text:'Draw ten lines connecting random dot pairs, ghosting each one before committing.'},
  {cat:'Ellipses', text:'Draw 20 ellipses through a grid of boxes, touching all four edges each time.'},
  {cat:'Ellipses', text:'Draw a cylinder from three different angles using ellipse ends.'},
  {cat:'Ellipses', text:'Practice ellipses at five different degrees, from nearly flat to nearly circular.'},
  {cat:'Ellipses', text:'Draw through the same ellipse five times without lifting your pencil.'},
  {cat:'Shapes', text:'Simplify five objects in the room into 3\u20135 basic shapes each.'},
  {cat:'Shapes', text:'Draw ten silhouette thumbnails of random objects in under five minutes.'},
  {cat:'Shapes', text:'Pick one object and draw it three ways: mostly circles, mostly rectangles, mostly triangles.'},
  {cat:'Shapes', text:'Squint at a reference photo until detail disappears, then draw only the shapes left.'},
  {cat:'Forms', text:'Draw a sphere, cube, cylinder, and cone from imagination with cross-contour lines.'},
  {cat:'Forms', text:'Construct a simple mug from a cylinder plus a handle.'},
  {cat:'Forms', text:'Build a simple robot or lamp from three combined basic forms.'},
  {cat:'Forms', text:'Draw the same basic form from five different angles in one sitting.'},
  {cat:'Observation', text:'Do a five-minute blind contour drawing of your own hand.'},
  {cat:'Observation', text:'Draw the negative space around a chair instead of the chair itself.'},
  {cat:'Observation', text:'Sight-measure a still life of three objects before drawing a single line.'},
  {cat:'Observation', text:'Copy a reference image upside-down, then compare it to the subject right-side up.'},
  {cat:'Warm-up', text:'Two minutes of loose scribbling with absolutely no goal.'},
  {cat:'Warm-up', text:'Draw the same simple object twice: once in writing grip, once in overhand grip.'},
  {cat:'Warm-up', text:'Draw fifty small circles as fast as you can while staying controlled.'},
  {cat:'Warm-up', text:'Trace ten imaginary lines in the air before drawing any of them for real.'}
];

/* ============================================================
   HELPERS
   ============================================================ */
function findModule(moduleId){
  for(const path of CURRICULUM){
    if(!path.modules) continue;
    const m = path.modules.find(mm=>mm.id===moduleId);
    if(m) return m;
  }
  return null;
}
function findPathOfModule(moduleId){
  return CURRICULUM.find(p=>p.modules && p.modules.some(m=>m.id===moduleId));
}
function getNextIncompleteModule(){
  return getAllLiveModules().find(({m})=>!STATE.completed.has(m.id)) || null;
}
function getChecklistProgress(moduleId){
  const m = findModule(moduleId);
  if(!m || !m.checklist) return 0;
  const checked = STATE.checklist[moduleId] ? STATE.checklist[moduleId].size : 0;
  return Math.round((checked / m.checklist.length) * 100);
}

/* ============================================================
   PERSISTENCE
   Three layers, tried in order, so this does the right thing
   wherever it ends up running:
   1. window.storage — active when this file is being viewed
      inside Claude; survives reloads there.
   2. localStorage — active when the file is opened directly in
      a real browser (double-clicked, or hosted). Not available
      inside Claude's preview, which is exactly why layer 1
      exists first rather than assuming this one.
   3. In-memory only, with Export/Import as the reliable manual
      backup — always works, everywhere, no exceptions.
   ============================================================ */
const STORAGE_KEY = 'atelier-progress-v1';

function serializeState(){
  const checklistOut = {};
  Object.entries(STATE.checklist).forEach(([k,v])=>{ checklistOut[k] = [...v]; });
  const resOpenOut = {};
  Object.entries(STATE.resourcesOpened).forEach(([k,v])=>{ resOpenOut[k] = [...v]; });
  return {
    completed:[...STATE.completed],
    favorites:[...STATE.favorites],
    checklist:checklistOut,
    quizAnswers:STATE.quizAnswers,
    notes:STATE.notes,
    resourcesOpened:resOpenOut,
    recentlyVisited:STATE.recentlyVisited,
    xp:STATE.xp,
    theme:STATE.theme,
    fontScale:STATE.fontScale,
    streak:STATE.streak,
    lastVisitDate:STATE.lastVisitDate,
    unlockedAchievements:[...STATE.unlockedAchievements],
    savedAt:new Date().toISOString()
  };
}

function applyState(data){
  if(!data) return;
  STATE.completed = new Set(data.completed || []);
  STATE.favorites = new Set(data.favorites || []);
  STATE.checklist = {};
  Object.entries(data.checklist || {}).forEach(([k,v])=>{ STATE.checklist[k] = new Set(v); });
  STATE.quizAnswers = data.quizAnswers || {};
  STATE.notes = data.notes || {};
  STATE.resourcesOpened = {};
  Object.entries(data.resourcesOpened || {}).forEach(([k,v])=>{ STATE.resourcesOpened[k] = new Set(v); });
  STATE.recentlyVisited = data.recentlyVisited || [];
  STATE.xp = data.xp || 0;
  if(data.theme) STATE.theme = data.theme;
  if(typeof data.fontScale === 'number') STATE.fontScale = data.fontScale;
  STATE.streak = data.streak || 0;
  STATE.lastVisitDate = data.lastVisitDate || null;
  STATE.unlockedAchievements = new Set(data.unlockedAchievements || []);
}

function todayKey(){
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function updateStreak(){
  const today = todayKey();
  if(STATE.lastVisitDate === today) return; /* already counted today */
  const yesterday = new Date(Date.now() - 86400000);
  const yKey = yesterday.getFullYear() + '-' + String(yesterday.getMonth()+1).padStart(2,'0') + '-' + String(yesterday.getDate()).padStart(2,'0');
  STATE.streak = (STATE.lastVisitDate === yKey) ? STATE.streak + 1 : 1;
  STATE.lastVisitDate = today;
  saveProgress();
}

async function loadProgress(){
  const TEST_KEY = '__atelier_storage_selftest__';
  try{
    if(typeof window.storage !== 'undefined'){
      await window.storage.set(TEST_KEY, 'ok', false);
      const test = await window.storage.get(TEST_KEY, false);
      if(test && test.value === 'ok'){
        STATE.storageBackend = 'claude';
        const r = await window.storage.get(STORAGE_KEY, false);
        if(r && r.value) applyState(JSON.parse(r.value));
        return;
      }
    }
  }catch(e){ /* window.storage present but not actually working here — fall through to localStorage */ }
  try{
    localStorage.setItem(TEST_KEY, 'ok');
    const test = localStorage.getItem(TEST_KEY);
    localStorage.removeItem(TEST_KEY);
    if(test === 'ok'){
      STATE.storageBackend = 'local';
      const raw = localStorage.getItem(STORAGE_KEY);
      if(raw) applyState(JSON.parse(raw));
      return;
    }
  }catch(e){ /* localStorage present but blocked — common in some in-app mobile browsers */ }
  STATE.storageBackend = 'none'; /* neither backend actually round-tripped — in-memory + export/import still work regardless */
}

async function persistNow(){
  const payload = JSON.stringify(serializeState());
  if(STATE.storageBackend === 'claude'){
    try{ await window.storage.set(STORAGE_KEY, payload, false); return; }
    catch(e){ /* fall through to localStorage below */ }
  }
  try{ localStorage.setItem(STORAGE_KEY, payload); }
  catch(e){ /* in-memory state still holds this session regardless */ }
}
let saveTimer = null;
function saveProgress(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persistNow, 400);
  updateStorageStatus();
}

function updateStorageStatus(){
  const el = document.getElementById('storageStatus');
  if(!el) return;
  const labels = {
    claude:'Progress saves automatically here.',
    local:'Progress saves automatically in this browser.',
    none:'Not saving automatically on this device \u2014 use Export below before closing.'
  };
  el.textContent = labels[STATE.storageBackend] || '';
}


function exportProgress(){
  const blob = new Blob([JSON.stringify(serializeState(), null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'atelier-progress-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Progress file downloaded.');
}

function importProgressFile(file){
  const reader = new FileReader();
  reader.onload = (e)=>{
    try{
      const data = JSON.parse(e.target.result);
      applyState(data);
      saveProgress();
      navigateHome();
      showToast('Progress restored from file.');
    }catch(err){
      showToast('That file could not be read as an Atelier progress export.');
    }
  };
  reader.readAsText(file);
}

/* ============================================================
   RENDERING
   ============================================================ */
function renderApp(){
  renderSidebar();
  const route = STATE.route;
  if(route.view === 'module'){
    renderModule(route.pathId, route.moduleId, route.tab);
  } else if(route.view === 'search'){
    // search results were already rendered directly by handleSearch
  } else if(route.view === 'practice'){
    renderPractice();
  } else if(route.view === 'achievements'){
    renderAchievements();
  } else if(route.view === 'bookmarks'){
    renderBookmarks();
  } else if(route.view === 'dashboard'){
    renderDashboard();
  } else {
    renderHome();
  }
  updateChrome();
}

function updateChrome(){
  document.getElementById('xpValue').textContent = STATE.xp;
  document.documentElement.setAttribute('data-theme', STATE.theme);
  document.getElementById('themeToggle').setAttribute('aria-pressed', String(STATE.theme === 'light'));
  document.documentElement.style.setProperty('--font-scale', STATE.fontScale);
}

function renderSidebar(){
  const nav = document.getElementById('sideNav');
  let html = '';

  const unlockedCount = computeUnlocked().size;
  html += '<div class="side-section" style="margin-bottom:var(--sp-5)">';
  html += '<span class="side-label">Tools</span><ul>';
  html += `<li><button class="side-module-item ${STATE.route.view==='dashboard'?'active':''}" data-view="dashboard">
    <span class="tool-icon">${ICONS.chart}</span><span style="flex:1">Dashboard</span>
  </button></li>`;
  html += `<li><button class="side-module-item ${STATE.route.view==='practice'?'active':''}" data-view="practice">
    <span class="tool-icon">${ICONS.shuffle}</span><span style="flex:1">Practice Center</span>
  </button></li>`;
  html += `<li><button class="side-module-item ${STATE.route.view==='achievements'?'active':''}" data-view="achievements">
    <span class="tool-icon">${ICONS.stamp}</span><span style="flex:1">Achievements</span><span class="m-num">${unlockedCount}/${ACHIEVEMENTS.length}</span>
  </button></li>`;
  html += `<li><button class="side-module-item ${STATE.route.view==='bookmarks'?'active':''}" data-view="bookmarks">
    <span class="tool-icon">${ICONS.star}</span><span style="flex:1">Bookmarks</span>${STATE.favorites.size?`<span class="m-num">${STATE.favorites.size}</span>`:''}
  </button></li>`;
  html += '</ul></div>';

  if(STATE.recentlyVisited.length){
    html += '<div class="side-section" style="margin-bottom:var(--sp-5)">';
    html += '<span class="side-label">Recently viewed</span><ul>';
    STATE.recentlyVisited.forEach(id=>{
      const m = findModule(id);
      if(!m) return;
      const path = findPathOfModule(id);
      const isActive = STATE.route.moduleId === id;
      html += `<li><button class="side-module-item ${isActive?'active':''}" data-path="${path.id}" data-module="${id}">
        <span class="m-num">${m.plate}</span><span style="flex:1">${m.title}</span>
      </button></li>`;
    });
    html += '</ul></div>';
  }

  CURRICULUM.forEach(path=>{
    if(path.status === 'live'){
      html += `<div class="side-path-group">
        <div class="side-path-header"><span class="path-dot"></span>${path.title}</div>
        <ul class="side-module-list">`;
      path.modules.forEach((m)=>{
        const isActive = STATE.route.moduleId === m.id;
        const isDone = STATE.completed.has(m.id);
        html += `<li><button class="side-module-item ${isActive?'active':''}" data-path="${path.id}" data-module="${m.id}">
          <span class="m-num">${m.plate}</span>
          <span style="flex:1">${m.title}</span>
          ${isDone ? `<span class="m-check">${ICONS.check}</span>` : ''}
        </button></li>`;
      });
      html += '</ul></div>';
    } else {
      html += `<div class="side-path-group">
        <div class="side-path-header"><span class="path-dot soon"></span>${path.title}</div>
        <div class="side-locked"><span>${path.moduleCount} modules</span><span>soon</span></div>
      </div>`;
    }
  });

  nav.innerHTML = html;
}

function renderHome(){
  const livePaths = getLivePaths();
  const allLive = getAllLiveModules();
  const doneCount = allLive.filter(({m})=>STATE.completed.has(m.id)).length;
  const quote = QUOTES[new Date().getDate() % QUOTES.length];
  const next = getNextIncompleteModule();

  let html = `
  <div class="hero">
    <div class="eyebrow">A complete, honestly-scoped drawing path</div>
    <h1>From your first line to <em>professional</em> fundamentals.</h1>
    <p class="hero-sub">${livePaths.length} arc${livePaths.length===1?'':'s'} (${allLive.length} modules) are fully built and live right now, with every resource checked by hand instead of recalled from memory. The rest of the roadmap below is real and correctly ordered &mdash; it is simply not written yet.</p>
    <div class="hero-row">
      <button class="btn btn-primary" id="continueBtn">${ICONS.target} ${STATE.completed.size===0 ? 'Start here: ' + (next ? next.m.title : 'Mindset & Introduction') : (next ? 'Continue: ' + next.m.title : 'Everything live is complete')}</button>
      <button class="btn btn-ghost" id="jumpFoundations">View Foundations</button>
    </div>
    <div class="stat-strip">
      <div class="stat"><b>${doneCount}/${TOTAL_MAPPED_MODULES}</b><span>Modules complete</span></div>
      <div class="stat"><b>${STATE.xp}</b><span>XP earned</span></div>
      <div class="stat"><b>${STATE.streak}${STATE.streak>0?' <svg class="streak-flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c1 4-4 5-4 9a4 4 0 008 0c0-2-1-3-1-5 2 1 3 3 3 5a6 6 0 01-12 0c0-5 4-6 6-9z"/></svg>':''}</b><span>Day streak</span></div>
      <div class="stat"><b>${allLive.length}</b><span>Modules live now</span></div>
    </div>
  </div>

  <div class="quote-card"><p>&ldquo;${quote}&rdquo;</p><cite>Studio note</cite></div>

  <div class="pathmap-wrap">
    <div class="pathmap-head">
      <h2>The full route</h2>
      <p>Click an open module below. Locked arcs show what is coming, and in what order.</p>
    </div>
    <div class="pathmap">`;

  CURRICULUM.forEach(path=>{
    const isOpen = path.status === 'live';
    const doneInPath = isOpen ? path.modules.filter(m=>STATE.completed.has(m.id)).length : 0;
    const allDone = isOpen && doneInPath === path.modules.length;
    html += `<button class="station ${isOpen?'is-open':''} ${allDone?'is-done':''}" data-path-jump="${path.id}">
      <div class="station-rail">
        <div class="station-node">${String(path.order).padStart(2,'0')}</div>
        <div class="station-line"></div>
      </div>
      <div class="station-body">
        <div class="station-top">
          <span class="station-title">${path.title}</span>
          <span class="tag ${isOpen?'open':''}">${isOpen ? 'Available now' : 'Coming next'}</span>
        </div>
        <p class="station-desc">${path.desc}</p>
        <div class="station-modcount">${isOpen ? `${doneInPath}/${path.modules.length} modules complete` : `${path.moduleCount} modules planned &mdash; ${path.sample.join(', ')}`}</div>
      </div>
    </button>`;
  });

  html += '</div></div>';

  let seenFirstModule = false;
  livePaths.forEach(path=>{
    html += `<div id="grid-${path.id}" style="margin-bottom:var(--sp-8)"><h2 style="font-size:26px;margin-bottom:var(--sp-4)">${path.title} modules</h2><div class="module-grid">`;
    path.modules.forEach(m=>{
      const isDone = STATE.completed.has(m.id);
      const isStartHere = STATE.completed.size===0 && !seenFirstModule;
      if(isStartHere) seenFirstModule = true;
      const pct = isDone ? 100 : getChecklistProgress(m.id);
      html += `<button class="mcard ${isStartHere?'start-here':''}" data-path="${path.id}" data-module="${m.id}">
        ${DECOR[MODULE_DECOR[m.id]] || ''}
        <div class="mcard-top">
          <span class="plate-id">PLATE ${m.plate}</span>
          ${isDone ? `<span class="stamp">${ICONS.stamp} Mastered</span>` : ''}
          ${isStartHere ? `<span class="stamp start-stamp">${ICONS.target} Start here</span>` : ''}
        </div>
        <h3>${m.title}</h3>
        <p class="mcard-hook">${m.hook || 'Coming shortly &mdash; being built to the same bar as Module 1.'}</p>
        <div class="mcard-meta">
          <span class="meta-chip">${ICONS.clock} ${m.studyTime || '&mdash;'}</span>
          <span class="meta-chip">${ICONS.target} ${m.difficulty || 'Beginner'}</span>
        </div>
        <div class="mcard-progress"><div class="mcard-progress-fill" style="width:${pct}%"></div></div>
      </button>`;
    });
    html += '</div></div>';
  });

  document.getElementById('main').innerHTML = html;
}

function renderModule(pathId, moduleId, tab){
  tab = tab || 'overview';
  const path = CURRICULUM.find(p=>p.id===pathId);
  if(!path){
    navigateHome();
    showToast('Couldn\u2019t find that module \u2014 back to the start.');
    return;
  }
  const m = path.modules.find(mm=>mm.id===moduleId);

  if(!m || m.stub){ renderComingSoonModule(path); return; }

  STATE.recentlyVisited = [moduleId, ...STATE.recentlyVisited.filter(id=>id!==moduleId)].slice(0,5);

  const isFav = STATE.favorites.has(moduleId);
  const isDone = STATE.completed.has(moduleId);
  const checklistTotal = m.checklist ? m.checklist.length : 0;
  const checklistDone = STATE.checklist[moduleId] ? STATE.checklist[moduleId].size : 0;
  const missingPrereqs = (m.prereq||[]).map(id=>findModule(id)).filter(pm=>pm && !STATE.completed.has(pm.id));
  const idx = path.modules.findIndex(mm=>mm.id===moduleId);
  const prev = idx > 0 ? path.modules[idx-1] : null;
  const next = idx < path.modules.length-1 ? path.modules[idx+1] : null;
  const checkedSet = STATE.checklist[moduleId] || new Set();

  const html = `
  <div class="breadcrumb">
    <button data-nav-home>Atelier</button> ${ICONS.chevronRight}
    <button data-path-jump="${pathId}">${path.title}</button> ${ICONS.chevronRight}
    <span>${m.title}</span>
  </div>

  <div class="module-head">
    <div class="status-banner ${isDone?'is-complete':'is-progress'}">
      ${isDone
        ? `${ICONS.stamp} <span>Marked complete</span>`
        : `${ICONS.target} <span>Not complete yet &mdash; ${checklistDone}/${checklistTotal} checklist items checked. Finish the <b>Mastery</b> tab to mark it done.</span>`}
    </div>
    ${(!isDone && missingPrereqs.length) ? `
    <div class="status-banner is-prereq-warning">
      ${ICONS.empty} <span>Skipping ahead? ${missingPrereqs.map(pm=>pm.title).join(', ')} ${missingPrereqs.length>1?'aren\u2019t':'isn\u2019t'} marked complete yet. This will likely make more sense once ${missingPrereqs.length>1?'those are':'that is'} done \u2014 nothing here is locked, just worth knowing.</span>
    </div>` : ''}
    <div class="module-head-top">
      <div>
        <h1>${m.title}</h1>
        <p class="module-hook">${m.hook}</p>
      </div>
      <button class="fav-btn" data-fav="${moduleId}" aria-pressed="${isFav}" aria-label="Toggle favorite">${ICONS.star}</button>
    </div>
    <div class="meta-row">
      <div class="meta-item"><span>Difficulty</span><b>${m.difficulty}</b></div>
      <div class="meta-item"><span>Study time</span><b>${m.studyTime}</b></div>
      <div class="meta-item"><span>Practice time</span><b>${m.practiceTime}</b></div>
      <div class="meta-item"><span>Prerequisite</span><b>${m.prereq.length ? m.prereq.map(id=>findModule(id).title).join(', ') : 'None &mdash; start here'}</b></div>
    </div>
  </div>

  <div class="tabs" role="tablist">
    <button class="tab" role="tab" aria-controls="tabpanel" data-tab="overview" aria-selected="${tab==='overview'}">Overview</button>
    <button class="tab" role="tab" aria-controls="tabpanel" data-tab="practice" aria-selected="${tab==='practice'}">Practice</button>
    <button class="tab" role="tab" aria-controls="tabpanel" data-tab="resources" aria-selected="${tab==='resources'}">Resources</button>
    <button class="tab" role="tab" aria-controls="tabpanel" data-tab="mastery" aria-selected="${tab==='mastery'}">Mastery</button>
    <button class="tab" role="tab" aria-controls="tabpanel" data-tab="notes" aria-selected="${tab==='notes'}">Notes</button>
  </div>

  <div class="tabpanel" id="tabpanel" role="tabpanel">${renderTabContent(m, tab, checkedSet)}</div>

  <div class="module-nav">
    ${prev ? `<button class="nav-link-card" data-path="${pathId}" data-module="${prev.id}"><span>${ICONS.arrowLeft} Previous</span><b>${prev.title}</b></button>` : '<span></span>'}
    ${next ? `<button class="nav-link-card next" data-path="${pathId}" data-module="${next.id}"><span>Next ${ICONS.chevronRight}</span><b>${next.title}</b></button>` : '<span></span>'}
  </div>`;

  document.getElementById('main').innerHTML = html;
}

function renderComingSoonModule(path){
  document.getElementById('main').innerHTML = `
    <div class="breadcrumb"><button data-nav-home>Atelier</button> ${ICONS.chevronRight} <span>${path.title}</span></div>
    <div class="empty-state">
      ${ICONS.empty}
      <h2 style="font-family:var(--font-display);font-size:26px;margin-bottom:8px;">This module is not written yet</h2>
      <p>It is being built to the same bar as Module 1 &mdash; full content, hand-checked resources, no filler.</p>
    </div>`;
}

function renderPractice(){
  document.getElementById('main').innerHTML = `
  <div class="breadcrumb"><button data-nav-home>Atelier</button> ${ICONS.chevronRight} <span>Practice Center</span></div>
  <div class="hero">
    <div class="eyebrow">No decision fatigue</div>
    <h1>Warm up, then <em>go</em>.</h1>
    <p class="hero-sub">A random prompt pulled from the drills already taught in Foundations, and a plain timer. Nothing to configure.</p>
  </div>

  <div class="prompt-card" id="promptCard">
    <span class="prompt-category" id="promptCategory">Ready</span>
    <p class="prompt-text" id="promptText">Press "New prompt" for a warm-up pulled from what you've already learned.</p>
  </div>
  <button class="btn btn-primary" id="newPromptBtn" style="margin-bottom:var(--sp-7)">${ICONS.shuffle} New prompt</button>

  <div class="timer-station">
    <div class="timer-display" id="timerDisplay">05:00</div>
    <div class="timer-presets" role="group" aria-label="Timer duration">
      <button data-mins="2">2 min</button>
      <button data-mins="5" class="active">5 min</button>
      <button data-mins="10">10 min</button>
      <button data-mins="20">20 min</button>
    </div>
    <div class="timer-controls">
      <button id="timerStart" class="btn btn-primary">${ICONS.play} Start</button>
      <button id="timerPause" class="btn btn-ghost">${ICONS.pause} Pause</button>
      <button id="timerReset" class="btn btn-ghost">Reset</button>
    </div>
  </div>

  <h2 style="font-size:20px;margin:var(--sp-8) 0 var(--sp-3)">Quick refresher</h2>
  <p class="hero-sub" style="margin-bottom:var(--sp-4)">A random question from something you've already studied &mdash; recall fades faster than it feels like it should. Doesn't affect your module progress either way.</p>
  <div id="refresherWrap" style="max-width:520px">
    <button class="btn btn-primary" id="newRefresherBtn">${ICONS.shuffle} Get a refresher question</button>
  </div>`;
  resetTimer();
  refresherState = null;
}

function renderAchievements(){
  const current = computeUnlocked();
  let html = `
  <div class="breadcrumb"><button data-nav-home>Atelier</button> ${ICONS.chevronRight} <span>Achievements</span></div>
  <div class="hero">
    <div class="eyebrow">${current.size}/${ACHIEVEMENTS.length} unlocked</div>
    <h1>Small, honest milestones.</h1>
    <p class="hero-sub">Every one of these reads directly off real progress &mdash; modules finished, XP earned, days returned, notes written. Nothing here is busywork.</p>
  </div>
  <div class="module-grid">`;
  ACHIEVEMENTS.forEach(a=>{
    const unlocked = current.has(a.id);
    html += `<div class="mcard achievement-card ${unlocked?'unlocked':'locked'}">
      <div class="mcard-top">
        <span class="plate-id">${unlocked?ICONS.stamp:ICONS.lock}</span>
        ${unlocked?'<span class="stamp">Unlocked</span>':''}
      </div>
      <h3>${a.title}</h3>
      <p class="mcard-hook">${a.desc}</p>
    </div>`;
  });
  html += '</div>';
  document.getElementById('main').innerHTML = html;
}

function renderDashboard(){
  const livePaths = getLivePaths();
  const unlockedIds = computeUnlocked();
  const correctCount = totalQuizCorrect();
  let attemptedCount = 0;
  getAllLiveModules().forEach(({m})=>{
    if(m.quiz) attemptedCount += Object.keys(STATE.quizAnswers[m.id]||{}).length;
  });

  let html = `
  <div class="breadcrumb"><button data-nav-home>Atelier</button> ${ICONS.chevronRight} <span>Dashboard</span></div>
  <div class="hero">
    <div class="eyebrow">Your progress, in one place</div>
    <h1>Dashboard</h1>
  </div>

  <h2 style="font-size:20px;margin-bottom:var(--sp-4)">Progress by arc</h2>
  <div class="dash-arc-list">`;
  livePaths.forEach(path=>{
    const real = path.modules.filter(m=>!m.stub);
    const done = real.filter(m=>STATE.completed.has(m.id)).length;
    const pct = real.length ? Math.round((done/real.length)*100) : 0;
    html += `<button class="dash-arc-row" data-path-jump="${path.id}">
      <div class="dash-arc-top"><span>${path.title}</span><span class="dash-arc-count">${done}/${real.length}</span></div>
      <div class="mcard-progress"><div class="mcard-progress-fill" style="width:${pct}%"></div></div>
    </button>`;
  });
  html += `</div>

  <div class="dash-stat-grid">
    <div class="dash-stat-card">
      <span class="dash-stat-label">Quiz accuracy</span>
      <span class="dash-stat-value">${attemptedCount ? Math.round((correctCount/attemptedCount)*100)+'%' : '\u2014'}</span>
      <span class="dash-stat-sub">${correctCount}/${attemptedCount} correct on first attempt</span>
    </div>
    <div class="dash-stat-card">
      <span class="dash-stat-label">Achievements</span>
      <span class="dash-stat-value">${unlockedIds.size}/${ACHIEVEMENTS.length}</span>
      <span class="dash-stat-sub">${ACHIEVEMENTS.filter(a=>unlockedIds.has(a.id)).slice(-2).map(a=>a.title).join(', ') || 'None yet'}</span>
    </div>
    <div class="dash-stat-card">
      <span class="dash-stat-label">Notes written</span>
      <span class="dash-stat-value">${Object.values(STATE.notes).filter(t=>t&&t.trim().length>0).length}</span>
      <span class="dash-stat-sub">across all modules</span>
    </div>
  </div>

  <h2 style="font-size:20px;margin:var(--sp-7) 0 var(--sp-4)">Recently viewed</h2>`;

  const recent = STATE.recentlyVisited.map(id=>findModule(id)).filter(Boolean);
  if(!recent.length){
    html += `<div class="empty-state">${ICONS.empty}<p>Nothing viewed yet this session.</p></div>`;
  } else {
    html += '<div class="module-grid">' + recent.map(m=>{
      const path = findPathOfModule(m.id);
      const isDone = STATE.completed.has(m.id);
      return `<button class="mcard" data-path="${path.id}" data-module="${m.id}">
        ${DECOR[MODULE_DECOR[m.id]] || ''}
        <div class="mcard-top"><span class="plate-id">PLATE ${m.plate}</span>${isDone?`<span class="stamp">${ICONS.stamp} Mastered</span>`:''}</div>
        <h3>${m.title}</h3>
        <p class="mcard-hook">${m.hook}</p>
      </button>`;
    }).join('') + '</div>';
  }

  document.getElementById('main').innerHTML = html;
}

function renderBookmarks(){
  const favModules = [...STATE.favorites].map(id=>({m:findModule(id), path:findPathOfModule(id)})).filter(x=>x.m);
  let html = `
  <div class="breadcrumb"><button data-nav-home>Atelier</button> ${ICONS.chevronRight} <span>Bookmarks</span></div>
  <div class="hero">
    <div class="eyebrow">Saved for later</div>
    <h1>Bookmarks</h1>
    <p class="hero-sub">Tap the star on any module to save it here.</p>
  </div>`;
  if(!favModules.length){
    html += `<div class="empty-state">${ICONS.empty}<p>Nothing bookmarked yet.</p></div>`;
  } else {
    html += '<div class="module-grid">' + favModules.map(({m,path})=>`
      <button class="mcard" data-path="${path.id}" data-module="${m.id}">
        ${DECOR[MODULE_DECOR[m.id]] || ''}
        <div class="mcard-top"><span class="plate-id">PLATE ${m.plate}</span></div>
        <h3>${m.title}</h3>
        <p class="mcard-hook">${m.hook}</p>
      </button>`).join('') + '</div>';
  }
  document.getElementById('main').innerHTML = html;
}

function renderTabContent(m, tab, checkedSet){
  if(tab === 'overview'){
    return `<div class="prose">
      <h4>Why this matters</h4>
      ${m.whyItMatters.map(p=>`<p>${p}</p>`).join('')}
      <h4>The core idea</h4>
      ${m.coreIdea.map(p=>`<p>${p}</p>`).join('')}
      <h4>Where beginners go wrong</h4>
      <ul class="mistake-list">${m.mistakes.map(x=>`<li>${x}</li>`).join('')}</ul>
      <div class="tip-card">
        <h4>Professional habits</h4>
        <ul>${m.proTips.map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`;
  }
  if(tab === 'practice'){
    const blocks = [
      {icon:'warmup', label:'Warm-up', text:m.practice.warmup},
      {icon:'daily', label:'Daily practice', text:m.practice.daily},
      {icon:'weekly', label:"This week's assignment", text:m.practice.weekly},
      {icon:'challenge', label:'Stretch challenge', text:m.practice.challenge}
    ];
    return `<div class="practice-grid">${blocks.map(b=>`
      <div class="practice-block">
        <div class="practice-block-head">
          <div class="practice-icon">${ICONS[b.icon]}</div>
          <h4>${b.label}</h4>
        </div>
        <p>${b.text}</p>
      </div>`).join('')}</div>`;
  }
  if(tab === 'resources'){
    return `<div class="res-note">Every resource below was checked against a live search today rather than recalled from memory. Links can still change after the fact &mdash; if one is dead, that is useful to know, so flag it and it gets swapped.</div>
    ${m.resources.map((r,ri)=>{
      const ytId = r.videoId || getYouTubeId(r.url);
      const opened = STATE.resourcesOpened[m.id] && STATE.resourcesOpened[m.id].has(ri);
      return `
      <div class="res-card">
        <span class="res-type">${r.type}</span>
        <div class="res-body">
          <div class="res-title">${r.url ? `<a href="${r.url}" target="_blank" rel="noopener" data-res-open="${m.id}" data-res-index="${ri}">${r.title}</a>` : r.title}</div>
          <div class="res-creator">${r.creator}</div>
          <div class="res-why">${r.why}</div>
          <div class="res-badges">
            ${r.verified ? `<span class="res-verified">${ICONS.toastCheck} Checked</span>` : ''}
            ${opened ? `<span class="res-opened">${ICONS.check} Opened</span>` : ''}
          </div>
          ${ytId ? `
          <div class="video-embed-wrap" data-yt-id="${ytId}" data-res-module="${m.id}" data-res-idx="${ri}">
            <img src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg" alt="" loading="lazy">
            <button class="video-play-btn" aria-label="Play video inline" data-yt-id="${ytId}" data-res-module="${m.id}" data-res-idx="${ri}">${ICONS.play}</button>
          </div>` : ''}
        </div>
      </div>`;
    }).join('')}`;
  }
  if(tab === 'mastery'){
    const total = m.checklist.length;
    const done = checkedSet.size;
    const quizState = STATE.quizAnswers[m.id] || {};
    const hasQuiz = m.quiz && m.quiz.length > 0;
    const quizAnsweredCount = Object.keys(quizState).length;
    const quizCorrectCount = hasQuiz ? m.quiz.reduce((n,q,qi)=> n + (quizState[qi]===q.correct?1:0), 0) : 0;
    const quizDone = !hasQuiz || quizAnsweredCount >= m.quiz.length;
    const alreadyComplete = STATE.completed.has(m.id);

    const quizHtml = hasQuiz ? `
      <h4>Quick check <span class="quiz-progress">${quizAnsweredCount}/${m.quiz.length} answered${quizAnsweredCount>0 ? ' \u00b7 '+quizCorrectCount+' correct' : ''}</span></h4>
      <p class="prose" style="margin-bottom:var(--sp-4);font-size:14px;color:var(--text-muted);">These test whether the ideas actually landed, not whether you clicked play. Answer every one \u2014 right or wrong \u2014 to unlock module completion below.</p>
      <div class="quiz-list">
        ${m.quiz.map((q,qi)=>{
          const answered = quizState.hasOwnProperty(qi);
          const selected = quizState[qi];
          return `<div class="quiz-card">
            <p class="quiz-question">${q.q}</p>
            <div class="quiz-options">
              ${q.options.map((opt,oi)=>{
                let cls = 'quiz-option';
                if(answered && oi===q.correct) cls += ' correct';
                else if(answered && oi===selected) cls += ' incorrect';
                return `<button class="${cls}" data-quiz-module="${m.id}" data-quiz-q="${qi}" data-quiz-opt="${oi}" ${answered?'disabled':''}>${opt}</button>`;
              }).join('')}
            </div>
            ${answered ? `<p class="quiz-explain">${q.explain}</p>` : ''}
          </div>`;
        }).join('')}
      </div>` : '';

    return `
    <p class="prose" style="margin-bottom:var(--sp-5)">Check a line only once you can do it on a blank page, not once it sounds familiar. That is what &ldquo;complete&rdquo; means here.</p>
    ${quizHtml}
    <h4 style="font-family:var(--font-body);font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--text-faint);margin:var(--sp-6) 0 var(--sp-3);font-weight:600;">Mastery checklist</h4>
    <div class="checklist" role="group" aria-label="Mastery checklist">
      ${m.checklist.map((item,i)=>`
        <button class="check-item" role="checkbox" aria-checked="${checkedSet.has(i)}" data-check-module="${m.id}" data-check-index="${i}">
          <span class="check-box">${ICONS.check}</span>
          <span class="check-text">${item}</span>
        </button>`).join('')}
    </div>
    <div class="mastery-cta">
      <p>${done}/${total} checked.${m.nextStep ? ' Next up: ' + m.nextStep : ''}</p>
      ${alreadyComplete
        ? `<button class="btn btn-primary" data-complete-module="${m.id}">${ICONS.check} Marked complete</button>`
        : quizDone
          ? `<button class="btn btn-primary" data-complete-module="${m.id}">Mark module complete (+50 XP)</button>`
          : `<button class="btn btn-primary" disabled title="Answer every quick-check question above first">Answer all ${m.quiz.length} quiz questions to unlock</button>`
      }
    </div>`;
  }
  if(tab === 'notes'){
    const text = STATE.notes[m.id] || '';
    return `<p class="prose" style="margin-bottom:var(--sp-4)">Private notes for this module &mdash; what clicked, what didn't, what to revisit. Saved with the rest of your progress.</p>
    <textarea id="notesArea" class="notes-textarea" placeholder="Write anything..." data-module="${m.id}">${escapeHtml(text)}</textarea>
    <div class="notes-status" id="notesStatus">${text ? 'Saved' : ''}</div>`;
  }
  return '';
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigateHome(){
  flushNotesSave();
  STATE.route = {view:'home', pathId:null, moduleId:null, tab:'overview'};
  renderApp();
  window.scrollTo({top:0, behavior:'auto'});
}
function navigateView(view){
  flushNotesSave();
  STATE.route = {view, pathId:null, moduleId:null, tab:'overview'};
  renderApp();
  window.scrollTo({top:0, behavior:'auto'});
  closeMobileSidebar();
}
function navigateModule(pathId, moduleId, tab){
  flushNotesSave();
  STATE.route = {view:'module', pathId, moduleId, tab: tab || 'overview'};
  renderApp();
  window.scrollTo({top:0, behavior:'auto'});
  closeMobileSidebar();
  closeMobileSearch();
}
function openPathOnHome(pathId){
  const path = CURRICULUM.find(p=>p.id===pathId);
  if(!path) return;
  if(path.status !== 'live'){
    showToast(path.title + ' isn\u2019t built yet \u2014 five other arcs are live now.');
    return;
  }
  navigateHome();
  requestAnimationFrame(()=>{
    document.getElementById('grid-' + pathId)?.scrollIntoView({behavior:'smooth', block:'start'});
  });
  closeMobileSidebar();
}
function closeMobileSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('show');
  document.getElementById('menuBtn').setAttribute('aria-expanded','false');
}

function closeMobileSearch(){
  document.getElementById('topbarSearchBox').classList.remove('mobile-search-open');
  document.getElementById('mobileSearchToggle').setAttribute('aria-expanded','false');
}

/* ============================================================
   ACTIONS
   ============================================================ */
function toggleChecklistItem(moduleId, index){
  if(!STATE.checklist[moduleId]) STATE.checklist[moduleId] = new Set();
  const set = STATE.checklist[moduleId];
  if(set.has(index)){ set.delete(index); }
  else { set.add(index); STATE.xp += 10; }
  STATE.route.tab = 'mastery';

  const m = findModule(moduleId);
  const justAutoCompleted = m && m.checklist && set.size === m.checklist.length && !STATE.completed.has(moduleId);
  if(justAutoCompleted){
    STATE.completed.add(moduleId);
    STATE.xp += 50;
  }

  saveProgress();
  renderApp();
  if(justAutoCompleted) showToast('Every box checked \u2014 module marked complete. +50 XP.');
  checkAchievements();
}
function completeModule(moduleId){
  if(STATE.completed.has(moduleId)) return;
  const m = findModule(moduleId);
  if(m && m.quiz && m.quiz.length){
    const answeredCount = Object.keys(STATE.quizAnswers[moduleId] || {}).length;
    if(answeredCount < m.quiz.length){
      showToast('Answer every quiz question first \u2014 that\u2019s what unlocks this.');
      renderApp();
      return;
    }
  }
  STATE.completed.add(moduleId);
  STATE.xp += 50;
  STATE.route.tab = 'mastery';
  saveProgress();
  renderApp();
  showToast('Module marked complete. +50 XP.');
  checkAchievements();
}
function toggleFavorite(moduleId){
  if(STATE.favorites.has(moduleId)) STATE.favorites.delete(moduleId);
  else STATE.favorites.add(moduleId);
  saveProgress();
  renderApp();
  checkAchievements();
}
function answerQuiz(moduleId, qIndex, oIndex){
  if(!STATE.quizAnswers[moduleId]) STATE.quizAnswers[moduleId] = {};
  if(STATE.quizAnswers[moduleId].hasOwnProperty(qIndex)) return;
  STATE.quizAnswers[moduleId][qIndex] = oIndex;
  const m = findModule(moduleId);
  const q = m.quiz[qIndex];
  if(oIndex === q.correct) STATE.xp += 5;
  STATE.route.tab = 'mastery';
  saveProgress();
  renderApp();
  checkAchievements();
}

/* Escape user-typed text before it goes back into innerHTML — the notes
   textarea is the one place raw, unpredictable user input gets rendered
   as HTML, and unescaped <, >, or & can corrupt or truncate the field. */
function escapeHtml(str){
  return String(str==null?'':str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

/* Pulls the 11-character video ID out of a youtube.com/watch or youtu.be
   link so it can be embedded inline. Returns null for anything else
   (course pages, tool sites, articles) — those stay as plain links. */
function getYouTubeId(url){
  if(!url) return null;
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

/* Honest framing matters here: this proves a link was clicked and a tab
   opened. It does not, and cannot, prove the person actually watched or
   read anything there. It's shown as "Opened", never as "Watched" or
   "Completed", and nothing else in the app treats it as a stronger signal
   than that. */
function markResourceOpened(moduleId, index){
  if(!STATE.resourcesOpened[moduleId]) STATE.resourcesOpened[moduleId] = new Set();
  if(STATE.resourcesOpened[moduleId].has(index)) return;
  STATE.resourcesOpened[moduleId].add(index);
  saveProgress();
  if(STATE.route.view === 'module' && STATE.route.tab === 'resources'){
    document.getElementById('tabpanel').innerHTML = renderTabContent(findModule(moduleId), 'resources', new Set());
  }
}

let notesSaveTimer = null;
function handleNotesInput(moduleId, value){
  STATE.notes[moduleId] = value;
  const status = document.getElementById('notesStatus');
  if(status) status.textContent = 'Saving\u2026';
  clearTimeout(notesSaveTimer);
  notesSaveTimer = setTimeout(()=>{
    saveProgress();
    checkAchievements();
    const s = document.getElementById('notesStatus');
    if(s) s.textContent = 'Saved';
  }, 600);
}
function flushNotesSave(){
  clearTimeout(notesSaveTimer);
  clearTimeout(fpNotesSaveTimer);
  clearTimeout(saveTimer);
  persistNow();
}

/* ============================================================
   FLOATING VIDEO PLAYER — draggable, survives tab/module navigation
   (it lives outside #main, so re-rendering the page never touches it)
   ============================================================ */
let fpModuleId = null;
let fpNotesSaveTimer = null;

function openFloatingPlayer(ytId, moduleId, resIdx, title){
  const fp = document.getElementById('floatingPlayer');
  fpModuleId = moduleId;
  document.getElementById('fpTitle').textContent = title || 'Video';
  document.getElementById('fpVideo').innerHTML =
    `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" title="${escapeHtml(title||'Embedded video player')}" frameborder="0" allow="accelerated-video; autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  document.getElementById('fpNotesArea').value = STATE.notes[moduleId] || '';
  document.getElementById('fpNotesStatus').textContent = '';
  fp.classList.remove('minimized');
  const minBtn = document.getElementById('fpMinBtn');
  minBtn.textContent = '–'; minBtn.setAttribute('aria-label','Minimize player');
  fp.hidden = false;

  // First open in this session: place it in a sensible corner instead of at (0,0).
  if(!fp.style.left && !fp.style.top){
    const w = fp.offsetWidth || 340;
    fp.style.left = Math.max(12, window.innerWidth - w - 20) + 'px';
    fp.style.top = Math.max(12, window.innerHeight - 360) + 'px';
  }
  clampFloatingPlayerToViewport();
}
function closeFloatingPlayer(){
  const fp = document.getElementById('floatingPlayer');
  document.getElementById('fpVideo').innerHTML = ''; // drop the iframe so playback actually stops
  fp.hidden = true;
  clearTimeout(fpNotesSaveTimer);
  persistNow();
  fpModuleId = null;
}
function clampFloatingPlayerToViewport(){
  const fp = document.getElementById('floatingPlayer');
  if(fp.hidden) return;
  const rect = fp.getBoundingClientRect();
  let left = rect.left, top = rect.top;
  left = Math.min(Math.max(left, 4), window.innerWidth - rect.width - 4);
  top = Math.min(Math.max(top, 4), window.innerHeight - 44); // keep at least the header on-screen
  fp.style.left = left + 'px';
  fp.style.top = top + 'px';
}
function handleFloatingNotesInput(value){
  if(!fpModuleId) return;
  STATE.notes[fpModuleId] = value;
  const status = document.getElementById('fpNotesStatus');
  if(status) status.textContent = 'Saving…';
  // keep the main Notes tab in sync live, in case it's open behind the player
  const mainArea = document.getElementById('notesArea');
  if(mainArea && mainArea.dataset.module === fpModuleId) mainArea.value = value;
  clearTimeout(fpNotesSaveTimer);
  fpNotesSaveTimer = setTimeout(()=>{
    saveProgress();
    checkAchievements();
    const s = document.getElementById('fpNotesStatus');
    if(s) s.textContent = 'Saved';
    const ms = document.getElementById('notesStatus');
    if(ms && mainArea && mainArea.dataset.module === fpModuleId) ms.textContent = 'Saved';
  }, 600);
}
function initFloatingPlayerDrag(){
  const fp = document.getElementById('floatingPlayer');
  const header = document.getElementById('fpHeader');
  let dragging = false, offsetX = 0, offsetY = 0;

  header.addEventListener('pointerdown', (e)=>{
    if(e.target.closest('.fp-btn')) return; // don't start a drag from the buttons
    dragging = true;
    const rect = fp.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    header.setPointerCapture(e.pointerId);
  });
  header.addEventListener('pointermove', (e)=>{
    if(!dragging) return;
    let left = e.clientX - offsetX;
    let top = e.clientY - offsetY;
    const rect = fp.getBoundingClientRect();
    left = Math.min(Math.max(left, 4), window.innerWidth - rect.width - 4);
    top = Math.min(Math.max(top, 4), window.innerHeight - 44);
    fp.style.left = left + 'px';
    fp.style.top = top + 'px';
  });
  const endDrag = ()=>{ dragging = false; };
  header.addEventListener('pointerup', endDrag);
  header.addEventListener('pointercancel', endDrag);
  window.addEventListener('resize', clampFloatingPlayerToViewport);
}

/* ============================================================
   PRACTICE CENTER — prompt + timer
   ============================================================ */
let lastPromptIndex = -1;
function newPrompt(){
  let i;
  do{ i = Math.floor(Math.random()*PRACTICE_PROMPTS.length); }while(i===lastPromptIndex && PRACTICE_PROMPTS.length>1);
  lastPromptIndex = i;
  const p = PRACTICE_PROMPTS[i];
  const catEl = document.getElementById('promptCategory');
  const textEl = document.getElementById('promptText');
  if(catEl) catEl.textContent = p.cat;
  if(textEl) textEl.textContent = p.text;
}

/* Spaced-review pool: any quiz question the person has already answered
   (right or wrong) is fair game to resurface here. Answering it again in
   this context is standalone practice — it never touches STATE.quizAnswers
   or module completion, on purpose, so replaying it can't be used to farm
   XP through the completion gate. */
let refresherState = null;
function pickRefresherPool(){
  const pool = [];
  getAllLiveModules().forEach(({m})=>{
    if(!m.quiz) return;
    const answered = STATE.quizAnswers[m.id] || {};
    m.quiz.forEach((q,qi)=>{
      if(answered.hasOwnProperty(qi)) pool.push({m, q, qi});
    });
  });
  return pool;
}
function renderRefresherQuestion(){
  const wrap = document.getElementById('refresherWrap');
  if(!wrap) return;
  const pool = pickRefresherPool();
  if(!pool.length){
    wrap.innerHTML = `<div class="empty-state" style="padding:var(--sp-6) var(--sp-4)">${ICONS.empty}<p>Answer a quiz question in any module first, then come back here \u2014 refreshers are pulled from things you've actually already studied.</p></div>`;
    return;
  }
  const pick = pool[Math.floor(Math.random()*pool.length)];
  refresherState = {moduleId: pick.m.id, qi: pick.qi, answered: false};
  wrap.innerHTML = `
    <div class="quiz-card">
      <p class="res-creator" style="margin-bottom:var(--sp-3)">From: ${pick.m.title}</p>
      <p class="quiz-question">${pick.q.q}</p>
      <div class="quiz-options" id="refresherOptions">
        ${pick.q.options.map((opt,oi)=>`<button class="quiz-option" data-refresher-opt="${oi}">${opt}</button>`).join('')}
      </div>
      <p class="quiz-explain" id="refresherExplain" style="display:none"></p>
    </div>
    <button class="btn btn-ghost" id="newRefresherBtn" style="margin-top:var(--sp-4)">${ICONS.shuffle} Another one</button>`;
}
function answerRefresher(oi){
  if(!refresherState || refresherState.answered) return;
  refresherState.answered = true;
  const m = findModule(refresherState.moduleId);
  const q = m.quiz[refresherState.qi];
  document.querySelectorAll('#refresherOptions .quiz-option').forEach((btn,idx)=>{
    btn.disabled = true;
    if(idx===q.correct) btn.classList.add('correct');
    else if(idx===oi) btn.classList.add('incorrect');
  });
  const explainEl = document.getElementById('refresherExplain');
  if(explainEl){ explainEl.textContent = q.explain; explainEl.style.display = 'block'; }
}

let timerInterval = null, timerSeconds = 300, timerRunning = false;
function updateTimerDisplay(){
  const el = document.getElementById('timerDisplay');
  if(!el) return;
  const m = Math.floor(Math.max(timerSeconds,0)/60).toString().padStart(2,'0');
  const s = Math.max(timerSeconds,0)%60;
  el.textContent = m + ':' + String(s).padStart(2,'0');
}
function setTimerPreset(mins, btn){
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = mins*60;
  updateTimerDisplay();
  document.querySelectorAll('.timer-presets button').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
}
function startTimer(){
  if(timerRunning || timerSeconds<=0) return;
  timerRunning = true;
  timerInterval = setInterval(()=>{
    timerSeconds--;
    updateTimerDisplay();
    if(timerSeconds<=0){
      clearInterval(timerInterval);
      timerRunning = false;
      playChime();
      showToast("Time's up. Nice work.");
    }
  }, 1000);
}
function pauseTimer(){ clearInterval(timerInterval); timerRunning=false; }
function resetTimer(){
  pauseTimer();
  const activeBtn = document.querySelector('.timer-presets button.active');
  const mins = activeBtn ? parseInt(activeBtn.dataset.mins,10) : 5;
  timerSeconds = mins*60;
  updateTimerDisplay();
}
function playChime(){
  try{
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime+0.6);
    o.start();
    o.stop(ctx.currentTime+0.6);
  }catch(e){ /* audio unavailable — silent, the toast still shows */ }
}

/* ============================================================
   SEARCH
   ============================================================ */
function handleSearch(query){
  const q = query.trim().toLowerCase();
  if(!q){ STATE.route.view = STATE.route.moduleId ? 'module' : 'home'; renderApp(); return; }
  const matches = [];
  CURRICULUM.forEach(path=>{
    if(!path.modules) return;
    path.modules.forEach(m=>{
      if(m.stub) return;
      const resText = (m.resources||[]).map(r=>r.title+' '+r.creator).join(' ');
      const checklistText = (m.checklist||[]).join(' ');
      const hay = (m.title + ' ' + (m.hook||'') + ' ' + resText + ' ' + checklistText).toLowerCase();
      if(hay.includes(q)) matches.push({path, m});
    });
  });
  renderSearchResults(matches, query);
}

function renderSearchResults(matches, query){
  let html = `<div class="hero"><div class="eyebrow">Search</div><h1 style="font-size:32px;">${matches.length} result${matches.length===1?'':'s'} for &ldquo;${escapeHtml(query)}&rdquo;</h1></div>`;
  if(matches.length === 0){
    html += `<div class="empty-state">${ICONS.empty}<p>No matches. All live arcs are searchable &mdash; the rest is mapped but not written yet.</p></div>`;
  } else {
    html += '<div class="module-grid">' + matches.map(({path,m})=>`
      <button class="mcard" data-path="${path.id}" data-module="${m.id}">
        ${DECOR[MODULE_DECOR[m.id]] || ''}
        <div class="mcard-top"><span class="plate-id">PLATE ${m.plate}</span></div>
        <h3>${m.title}</h3>
        <p class="mcard-hook">${m.hook}</p>
      </button>`).join('') + '</div>';
  }
  document.getElementById('main').innerHTML = html;
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer = null;
function showToast(msg){
  const el = document.getElementById('toast');
  el.innerHTML = `${ICONS.toastCheck}<span>${msg}</span>`;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), 3200);
}

/* ============================================================
   EVENTS
   ============================================================ */
function initEvents(){
  document.body.addEventListener('click', (e)=>{
    const homeBtn = e.target.closest('[data-nav-home]');
    if(homeBtn){ navigateHome(); return; }

    const viewBtn = e.target.closest('[data-view]');
    if(viewBtn){ navigateView(viewBtn.dataset.view); return; }

    const pathJump = e.target.closest('[data-path-jump]');
    if(pathJump){ openPathOnHome(pathJump.dataset.pathJump); return; }

    const tabBtn = e.target.closest('.tab');
    if(tabBtn){
      flushNotesSave();
      STATE.route.tab = tabBtn.dataset.tab;
      const m = findModule(STATE.route.moduleId);
      document.getElementById('tabpanel').innerHTML = renderTabContent(m, STATE.route.tab, STATE.checklist[STATE.route.moduleId] || new Set());
      document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-selected', String(t===tabBtn)));
      return;
    }

    const checkItem = e.target.closest('[data-check-module]');
    if(checkItem){ toggleChecklistItem(checkItem.dataset.checkModule, parseInt(checkItem.dataset.checkIndex,10)); return; }

    const completeBtn = e.target.closest('[data-complete-module]');
    if(completeBtn){ completeModule(completeBtn.dataset.completeModule); return; }

    const favBtn = e.target.closest('[data-fav]');
    if(favBtn){ toggleFavorite(favBtn.dataset.fav); return; }

    const quizOpt = e.target.closest('[data-quiz-module]');
    if(quizOpt){
      answerQuiz(quizOpt.dataset.quizModule, parseInt(quizOpt.dataset.quizQ,10), parseInt(quizOpt.dataset.quizOpt,10));
      return;
    }

    const playBtn = e.target.closest('.video-play-btn');
    if(playBtn){
      const ytId = playBtn.dataset.ytId;
      const modId = playBtn.dataset.resModule;
      const resIdx = parseInt(playBtn.dataset.resIdx,10);
      const m = findModule(modId);
      const title = (m && m.resources[resIdx]) ? m.resources[resIdx].title : 'Video';
      openFloatingPlayer(ytId, modId, resIdx, title);
      markResourceOpened(modId, resIdx);
      return;
    }

    const fpCloseBtn = e.target.closest('#fpCloseBtn');
    if(fpCloseBtn){ closeFloatingPlayer(); return; }

    const fpMinBtn = e.target.closest('#fpMinBtn');
    if(fpMinBtn){
      const fp = document.getElementById('floatingPlayer');
      const minimized = fp.classList.toggle('minimized');
      fpMinBtn.textContent = minimized ? '▢' : '–';
      fpMinBtn.setAttribute('aria-label', minimized ? 'Restore player' : 'Minimize player');
      return;
    }

    const resLink = e.target.closest('[data-res-open]');
    if(resLink){
      markResourceOpened(resLink.dataset.resOpen, parseInt(resLink.dataset.resIndex,10));
      // no return/preventDefault — the link still opens normally in a new tab
    }

    const newPromptBtn = e.target.closest('#newPromptBtn');
    if(newPromptBtn){ newPrompt(); return; }

    const newRefresherBtn = e.target.closest('#newRefresherBtn');
    if(newRefresherBtn){ renderRefresherQuestion(); return; }

    const refresherOpt = e.target.closest('[data-refresher-opt]');
    if(refresherOpt){ answerRefresher(parseInt(refresherOpt.dataset.refresherOpt,10)); return; }

    const presetBtn = e.target.closest('.timer-presets button');
    if(presetBtn){ setTimerPreset(parseInt(presetBtn.dataset.mins,10), presetBtn); return; }

    const timerStartBtn = e.target.closest('#timerStart');
    if(timerStartBtn){ startTimer(); return; }

    const timerPauseBtn = e.target.closest('#timerPause');
    if(timerPauseBtn){ pauseTimer(); return; }

    const timerResetBtn = e.target.closest('#timerReset');
    if(timerResetBtn){ resetTimer(); return; }

    const continueBtn = e.target.closest('#continueBtn');
    if(continueBtn){
      const next = getNextIncompleteModule();
      if(next) navigateModule(next.path.id, next.m.id);
      return;
    }

    const jumpFound = e.target.closest('#jumpFoundations');
    if(jumpFound){ document.getElementById('grid-foundations')?.scrollIntoView({behavior:'smooth'}); return; }

    // module/path buttons (cards, sidebar items, nav prev/next) — check last, broadest match
    const modBtn = e.target.closest('[data-module]');
    if(modBtn){ navigateModule(modBtn.dataset.path, modBtn.dataset.module); return; }
  });

  document.body.addEventListener('input', (e)=>{
    if(e.target.id === 'notesArea'){
      handleNotesInput(e.target.dataset.module, e.target.value);
      if(e.target.dataset.module === fpModuleId){
        const fpArea = document.getElementById('fpNotesArea');
        if(fpArea) fpArea.value = e.target.value;
      }
    }
    if(e.target.id === 'fpNotesArea'){
      handleFloatingNotesInput(e.target.value);
    }
  });
  document.body.addEventListener('blur', (e)=>{
    if(e.target.id === 'notesArea' || e.target.id === 'fpNotesArea') flushNotesSave();
  }, true);
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState === 'hidden') flushNotesSave();
  });
  window.addEventListener('pagehide', flushNotesSave);

  document.getElementById('searchInput').addEventListener('input', (e)=>handleSearch(e.target.value));
  document.getElementById('homeLink').addEventListener('click', (e)=>{ e.preventDefault(); navigateHome(); });

  document.getElementById('themeToggle').addEventListener('click', ()=>{
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    saveProgress();
    updateChrome();
  });

  document.getElementById('fontUp').addEventListener('click', ()=>{
    STATE.fontScale = Math.min(1.25, +(STATE.fontScale + 0.075).toFixed(3));
    updateChrome(); saveProgress();
  });
  document.getElementById('fontDown').addEventListener('click', ()=>{
    STATE.fontScale = Math.max(0.875, +(STATE.fontScale - 0.075).toFixed(3));
    updateChrome(); saveProgress();
  });

  document.getElementById('exportBtn').addEventListener('click', exportProgress);
  document.getElementById('importBtn').addEventListener('click', ()=>document.getElementById('importFile').click());
  document.getElementById('importFile').addEventListener('change', (e)=>{
    if(e.target.files[0]) importProgressFile(e.target.files[0]);
    e.target.value = '';
  });
  document.getElementById('resetBtn').addEventListener('click', ()=>{
    if(confirm('Clear all progress on this device? This cannot be undone unless you exported a backup file first.')){
      STATE.completed = new Set();
      STATE.favorites = new Set();
      STATE.checklist = {};
      STATE.xp = 0;
      STATE.recentlyVisited = [];
      STATE.quizAnswers = {};
      STATE.notes = {};
      STATE.resourcesOpened = {};
      STATE.streak = 0;
      STATE.lastVisitDate = null;
      STATE.unlockedAchievements = new Set();
      saveProgress();
      navigateHome();
      showToast('Progress reset.');
    }
  });

  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', ()=>{
    const open = sidebar.classList.toggle('open');
    backdrop.classList.toggle('show', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  backdrop.addEventListener('click', closeMobileSidebar);

  const mobileSearchToggle = document.getElementById('mobileSearchToggle');
  const topbarSearchBox = document.getElementById('topbarSearchBox');
  mobileSearchToggle.addEventListener('click', ()=>{
    const open = topbarSearchBox.classList.toggle('mobile-search-open');
    mobileSearchToggle.setAttribute('aria-expanded', String(open));
    if(open) document.getElementById('searchInput').focus();
  });

  initFloatingPlayerDrag();

  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', ()=>{ scrollTopBtn.classList.toggle('show', window.scrollY > 500); });
  scrollTopBtn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
  scrollTopBtn.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){ closeMobileSidebar(); closeMobileSearch(); }
  });
}

/* ============================================================
   ERROR BOUNDARY
   If anything throws — a bad navigation state, a data mismatch,
   anything I haven't anticipated — this is what stands between
   that and a fully frozen page with nothing but a console error
   only a developer would ever see.
   ============================================================ */
function showRecoveryBanner(detail){
  if(document.getElementById('recoveryBanner')) return; // don't stack multiple
  const banner = document.createElement('div');
  banner.id = 'recoveryBanner';
  banner.className = 'recovery-banner';
  banner.innerHTML = `
    <span>${ICONS.empty} Something broke on this page${detail ? ' (' + detail + ')' : ''}. Your saved progress is unaffected.</span>
    <button id="recoveryHomeBtn">Back to home</button>`;
  document.body.appendChild(banner);
  document.getElementById('recoveryHomeBtn').addEventListener('click', ()=>{
    banner.remove();
    try{ navigateHome(); }
    catch(e){ location.reload(); }
  });
}
window.addEventListener('error', (e)=>{
  console.error('Atelier error:', e.error || e.message);
  showRecoveryBanner(e.message ? String(e.message).slice(0,60) : '');
});
window.addEventListener('unhandledrejection', (e)=>{
  console.error('Atelier promise error:', e.reason);
  showRecoveryBanner();
});

/* ============================================================
   INIT
   ============================================================ */
async function init(){
  STATE.theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  await loadProgress();
  updateStreak();
  initEvents();
  renderApp();
  updateStorageStatus();
  checkAchievements();
  if(STATE.storageBackend === 'none'){
    setTimeout(()=>showToast('This browser won\u2019t save progress automatically \u2014 use Export progress below before closing.'), 900);
  }
}

document.addEventListener('DOMContentLoaded', init);
