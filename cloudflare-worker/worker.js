// Atelier Gemini proxy — keeps the real Gemini API key as a server-side
// secret (set in the Cloudflare dashboard, never in any repo). The site
// calls THIS worker; this worker calls Gemini and hands the answer back.

const ALLOWED_ORIGIN = 'https://aman-newbie.github.io';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: { message: 'Method not allowed' } }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    const origin = request.headers.get('Origin');
    if (origin !== ALLOWED_ORIGIN) {
      return new Response(JSON.stringify({ error: { message: 'Forbidden origin' } }), {
        status: 403,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: { message: 'Invalid JSON body' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    const model = body.model || 'gemini-3.6-flash';
    const contents = body.contents;
    const cfg = body.config || {};

    if (!contents) {
      return new Response(JSON.stringify({ error: { message: 'Missing "contents" in request body' } }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${env.GEMINI_API_KEY}`;

    const geminiPayload = {
      contents,
      generationConfig: {
        maxOutputTokens: cfg.maxOutputTokens || 400,
        temperature: cfg.temperature ?? 0.6,
      },
    };
    if (cfg.systemInstruction) {
      geminiPayload.systemInstruction = { parts: [{ text: cfg.systemInstruction }] };
    }

    let geminiResp;
    try {
      geminiResp = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiPayload),
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: { message: 'Could not reach Gemini: ' + e.message } }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    const data = await geminiResp.text();
    return new Response(data, {
      status: geminiResp.status,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
    });
  },
};
