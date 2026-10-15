---
name: x-post
description: Draft an X (Twitter) post or thread from my design work. Use when I ask for a tweet, X post, thread, or to turn a design or LinkedIn post into X content.
---

# X post / thread

## Read first
1. `content/voice.md`: who I am.
2. `content/x.md`: platform rules.
3. The last ~10 files in `content/posts/x/` and `content/posts/linkedin/`: don't repeat yourself; repurposing is fine if the angle is new.

## Steps
1. **Source**: the design/topic I gave you, a LinkedIn draft to repurpose, or the latest `design/projects/*.md`.
2. **Decide the shape**:
   - one detail or one idea → **single post**
   - a process, a list of decisions, or a full project → **thread** (4–8 posts)
   Say which and why in one line.
3. **Single**: write 3 versions (≤ 280 chars each, count them) and mark the strongest.
   **Thread**: write 2 options for post 1, then the full thread. Each post ≤ 280 chars and makes sense on its own.
4. **Visual** for post 1 (and any others): clip/GIF/screenshot, crop, length.
5. Save to `content/posts/x/YYYY-MM-DD-<slug>.md` (template below), `status: draft`.

## Check before showing me
- [ ] Every post ≤ 280 characters
- [ ] Post 1 stands alone and earns the click
- [ ] No link in post 1; ≤ 1 hashtag
- [ ] Every claim traceable to real work; no banned words

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
