// One-time helper to mint a Spotify refresh token for the "now playing" widget.
//
// Setup:
//   1. Create an app at https://developer.spotify.com/dashboard
//   2. Add http://127.0.0.1:8888/callback as a Redirect URI in the app settings.
//   3. Put SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local
//   4. Run: node scripts/get-spotify-token.mjs
//
// It opens the Spotify consent screen, catches the redirect, and prints the
// refresh token to paste into .env.local as SPOTIFY_REFRESH_TOKEN.

import http from 'http';
import { readFileSync } from 'fs';

// Minimal .env.local reader so this works without extra dependencies.
function loadEnv() {
  try {
    for (const line of readFileSync('.env.local', 'utf8').split('\n')) {
      const match = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
      if (match) process.env[match[1]] ??= match[2];
    }
  } catch {
    // no .env.local yet — fall back to whatever is already in the environment
  }
}

loadEnv();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = 'http://127.0.0.1:8888/callback';
const scope = 'user-read-currently-playing user-read-playback-state';

if (!clientId || !clientSecret) {
  console.error('Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local first.');
  process.exit(1);
}

const authUrl =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope,
    redirect_uri: redirectUri,
  });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, redirectUri);
  const code = url.searchParams.get('code');
  if (!code) {
    res.end('No code in callback. Close this and try again.');
    return;
  }

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  const data = await tokenRes.json();
  if (data.refresh_token) {
    console.log('\nRefresh token:\n' + data.refresh_token + '\n');
    console.log('Paste it into .env.local as SPOTIFY_REFRESH_TOKEN.');
    res.end('Done. Refresh token printed in your terminal — you can close this tab.');
  } else {
    console.error('Something went wrong:', data);
    res.end('Failed. Check the terminal for details.');
  }
  server.close();
});

server.listen(8888, () => {
  console.log('Open this URL, approve access, and come back to the terminal:\n');
  console.log(authUrl + '\n');
});
