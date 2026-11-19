// gta6-meme-x-01 — v3 "13 YEARS. STILL 99%."
//
// The entry is not this program. The entry is the X post: the meme
// (meme.png) posted from a public account, with make.fun and the play code
// in its text. This program has exactly one job — carry the post's address
// from the repository to the house. It reads POST.json at the repo root,
// checks that it really is an X status address, and writes it to /output
// where the gate reads it.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postFile = join(botDir, 'POST.json');
const raw = readFileSync(postFile, 'utf8');

let post: { url?: unknown };
try {
  post = JSON.parse(raw) as { url?: unknown };
} catch {
  console.error('POST.json is not valid JSON.');
  process.exit(1);
}

const url = post.url;
if (typeof url !== 'string' || url.length === 0) {
  console.error('POST.json has no url string.');
  process.exit(1);
}

// It has to be an X status address: https://x.com/<handle>/status/<digits>
// (twitter.com counts too). Anything else is a mistake in the file.
// The v3 meme stacks three jokes: a man who waited 13 years (his beard
// reaches his lap), a GTA VI download stuck at 99%, and the make.fun ghost
// beside him on the couch, already paid. The post is the entry; this file
// only hands the house its address.
const match = url.match(/^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/([^/]+)\/status\/(\d+)$/);
if (match === null) {
  console.error('POST.json url is not an X post address.');
  process.exit(1);
}
const [, handle, statusId] = match;
if (handle.length === 0) {
  console.error('POST.json url has no account handle.');
  process.exit(1);
}
if (statusId === '0'.repeat(statusId.length)) {
  console.warn('Warning: POST.json still holds the all-zero placeholder; swap in the real post address before submitting.');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), raw, 'utf8');
console.log(`Wrote ${join(outputDir, 'POST.json')} -> https://x.com/${handle}/status/${statusId}`);
