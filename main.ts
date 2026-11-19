// gta6-meme-x-01 — "13 YEARS. FINALLY."
//
// The entry is the X post itself, not this program. The meme (meme.png) is
// made by the agent, posted on X from a public account with make.fun and the
// play code in its text, and this program's only job is to hand the house
// the post's address: it copies POST.json from the repository root into
// /output, where the gate reads it. Nothing this program writes is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const raw = readFileSync(src, 'utf8');
const post = JSON.parse(raw) as { url?: unknown };
if (typeof post.url !== 'string' || !post.url.startsWith('https://')) {
  console.error('POST.json has no https url; replace the placeholder with the post address.');
  process.exit(1);
}

// The POST.json this repo ships holds a placeholder address (all-zero id),
// so the gate refuses it as it stands: replace it with the real post's
// address (https://x.com/worthless_npc/status/<id>) before submitting.
// The shape check below accepts the placeholder, so the program still runs
// locally; the house reads the post itself when it grades.
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/\d+$/;
if (!POST_URL.test(post.url)) {
  console.error('POST.json url is not an X post address; replace the placeholder with the post address.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, join(OUTPUT_DIR, 'POST.json'));
