// gta6-meme-x-01 — v2 "CALLING IN SICK ON GTA 6 DAY."
//
// This program is not the entry. The entry is the X post: the meme
// (meme.png) posted from a public account with make.fun and the play code
// in its text. All this program does is deliver the post's address to the
// house — it reads POST.json from the repository root and writes it into
// /output, where the gate picks it up.
//
// Run it locally like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(botDir, 'POST.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(postPath, 'utf8'));
} catch {
  fail('POST.json is not valid JSON.');
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string') {
  fail('POST.json has no url string.');
}

// The post must be a real X status address. The placeholder the repo ships
// (an all-zero status id) is not one, so replace it with the address of the
// post that carries the meme before submitting.
let address: URL;
try {
  address = new URL(url);
} catch {
  fail('POST.json url is not a valid URL.');
}
const hostOk =
  address.protocol === 'https:' &&
  /^(www\.|mobile\.)?(x|twitter)\.com$/.test(address.hostname);
const pathOk = /^\/[^/]+\/status\/\d+$/.test(address.pathname);
if (!hostOk || !pathOk) {
  fail('POST.json url is not an X post address; replace the placeholder with the real post.');
}

// The shape check above accepts the all-zero placeholder id, so the program
// still runs locally with it — but the house refuses a placeholder address,
// so this is only a warning, not an error.
const statusId = address.pathname.split('/').pop() ?? '';
if (/^0+$/.test(statusId)) {
  console.warn('Warning: POST.json still holds the placeholder address; replace it with the real post before submitting.');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, 'POST.json'));
console.log(`Wrote ${join(outDir, 'POST.json')} -> ${url}`);
