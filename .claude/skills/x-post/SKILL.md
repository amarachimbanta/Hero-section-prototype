---
name: x-post
description: Draft an X (Twitter) post or thread from my design work. Use when I ask for a tweet, X post, thread, or to turn a design or LinkedIn post into X content.
---

# X post / thread

## Read first
1. `content/human-writing.md`: **hard rules.** No em dashes, no AI words, no AI patterns. Breaking one means the draft isn't done.
2. `content/voice.md`: who I am.
3. `content/x.md`: platform rules, the mix, **Formula 1: The unsolicited build**, the swipe log and *Mine vs theirs*.
4. The last ~10 files in `content/posts/x/` and `content/posts/linkedin/`: don't repeat yourself; repurposing is fine if the angle is new.

## Steps
1. **Source**: the design/topic I gave you, a LinkedIn draft to repurpose, or the latest `design/projects/*.md`.
2. **Pick the formula.** For a design post, consider the unsolicited build first: is there a product I like with a real gap I could build for? If yes, plan it (the product, the gap, the screenshot of the gap, what to build) and offer to build it with `/design`. Otherwise use a single post or thread.
3. **Decide the shape**:
   - one detail or one idea: **single post**
   - a process, a list of decisions, or a full project: **thread** (4 to 8 posts)
   Say which and why in one line.
4. **Single**: write 3 versions (280 or fewer chars each, count them) and mark the strongest.
   **Thread**: write 2 options for post 1, then the full thread. Each post 280 or fewer chars and makes sense on its own.
5. **Visual** for post 1 (and any others): clip/GIF/screenshot, crop, length.
6. **Human pass**: reread every line against the *Banned patterns* in `content/human-writing.md` and rewrite anything that sounds like a template. Read it out loud in your head; if I wouldn't say it to a friend, change it.
7. Save to `content/posts/x/YYYY-MM-DD-<slug>.md` (template below), `status: draft`.
8. Run `content/check-post.sh <file>`. Fix everything it flags and run it again until it says `clean`. Only then show me the draft.

## Check before showing me
- [ ] `check-post.sh` says clean
- [ ] No banned pattern from `content/human-writing.md` (contrasts, rule of three, one-word lines, colon setups, broetry)
- [ ] Every post 280 or fewer characters
- [ ] Post 1 stands alone and earns the click
- [ ] No link in post 1; 1 hashtag max
- [ ] Every claim traceable to real work
- [ ] Gives something (a build, a lesson, a laugh). No asks
- [ ] Has one line people would quote or repost

## Template
```md
---
date: YYYY-MM-DD
platform: x
type: single   # single | thread
status: draft
pillar: build-log
source: <path or link>
---
## Options
1.
2.
## Final

## Visual
```
