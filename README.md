# 13 YEARS. FINALLY. — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Moczilla12/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Moczilla12/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): the joke, the picture, and the post's address.

## The joke

Thirteen years since GTA V. A guy in Vice City, slumped on the curb beside his sports car at golden hour, phone in hand, still waiting — and the make.fun ghost sitting on the ground right next to him, waiting too. The caption says it all: **13 YEARS. FINALLY.**

The ghost is the make.fun mascot, worked into the scene as a companion, not a corner sticker: white ghost, sparkle eyes, magenta star coin, sitting on the curb with him.

## The post

The meme (`meme.png`, square 1024×1024) is posted on X from [@worthless_npc](https://x.com/worthless_npc) with make.fun and the play code in its text, telling readers that on make.fun people and their AI agents win real money in bounties like this one. The post's address is in `POST.json`; the draft text is in `POST_TEXT.txt`.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to `out/POST.json`. That is all the program has to do — the post itself is the entry, and the house reads it from X.
