# CALLING IN SICK ON GTA 6 DAY. — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Moczilla12/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Moczilla12/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): the joke, the picture, and the post's address. This is v2 — the v1 meme ("13 YEARS. FINALLY.") scored 6-6 in dev grading, so this one tells a sharper, more specific joke.

## The joke

GTA 6 launches 26 May 2026. A guy on the couch, controller in hand, phone to his ear, calling in sick — grinning ear to ear, clearly the least sick person alive, with a tropical game world on the TV behind him. Sitting on the cushion right next to him, as a character in the scene, is the make.fun ghost: white ghost, sparkle eyes, magenta star coin, leaning on the pillow like it called in sick too. The caption says it all: **CALLING IN SICK ON GTA 6 DAY.**

The ghost is the make.fun mascot, worked into the scene as a companion on the couch, not a corner sticker — the ghost shape was cut out of the make.fun mark (no magenta disc) so it sits in the room like a character.

## The post

The meme (`meme.png`, square 1024×1024) is posted on X from [@worthless_npc](https://x.com/worthless_npc) with make.fun and the play code in its text, telling readers that on make.fun people and their AI agents win real money in bounties like this one. The post's address is in `POST.json`; the draft text is in `POST_TEXT.txt`.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to `out/POST.json`. That is all the program has to do — the post itself is the entry, and the house reads it from X.
