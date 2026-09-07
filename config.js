/* ============================================================
   ATELIER CONFIG — Ask a Doubt (Gemini API key)
   ============================================================
   This powers the "Ask a doubt" chat button with Google's Gemini
   API, which has a genuine free tier (no card required to start).

   HOW TO SET THIS UP (5 minutes):
   1. Go to https://aistudio.google.com/apikey and sign in with any
      Google account.
   2. Click "Create API key" and copy it.
   3. Paste it below, replacing 'PASTE_YOUR_GEMINI_KEY_HERE'.
   4. IMPORTANT — this is a public repo, so this key is visible to
      anyone. Lock it down in Google Cloud Console:
      https://console.cloud.google.com/apis/credentials
        -> click your key -> "Application restrictions" ->
           "Websites" -> add your GitHub Pages URL
           (e.g. https://aman-newbie.github.io/*)
      This stops the key from working on any other domain, even if
      someone copies it out of this file.
   5. Commit this file. The "Ask a doubt" button will start working
      once GitHub Pages redeploys (usually under a minute).

   If the model name below ever starts failing with a "model not
   found" error, Google renames these fairly often — check
   https://ai.google.dev/gemini-api/docs/models for the current
   free-tier "flash" model name and update geminiModel to match.
   ============================================================ */
window.ATELIER_CONFIG = {
  geminiApiKey: 'AQ.Ab8RN6JDBCU1OuhwuaEjOcNYBTToT0bbcTAUWIcobQ9iR0BRVw',
  geminiModel: 'gemini-2.5-flash'
};
