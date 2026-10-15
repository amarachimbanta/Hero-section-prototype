---
name: linkedin-post
description: Draft a LinkedIn post from my design work. Use when I ask for a LinkedIn post, a daily post for LinkedIn, a caption, or to turn a design or X thread into a LinkedIn post.
---

# LinkedIn post

## Read first
1. `content/voice.md`: who I am (overrides generic advice).
2. `content/linkedin.md`: platform rules.
3. The last ~10 files in `content/posts/linkedin/`: don't repeat a hook, pillar or topic.

## Steps
1. **Source**: the design/topic I gave you. If nothing, use the latest `design/projects/*.md` and its *Post ideas* section.
2. **Facts**: pull from code, README, the project file or Figma (use the Figma tools for a figma.com link). Note the 1–3 most interesting *decisions*.
3. Pick one idea + pillar. Say which in one line.
4. **3 hook options**: contrarian, specific detail, outcome.
5. **Full post** with the strongest hook.
6. **Visual**: what to record or screenshot, how to crop, first frame.
7. Save to `content/posts/linkedin/YYYY-MM-DD-<slug>.md` (template below), `status: draft`.

## Check before showing me
- [ ] Hook survives the "…see more" cut
- [ ] Every claim traceable to real work
- [ ] One idea, readable on a phone, 120–250 words
- [ ] Ends with a question or takeaway; ≤ 3 hashtags; no banned words

## Template
```md
---
date: YYYY-MM-DD
platform: linkedin
status: draft   # draft | scheduled | posted
pillar: build-log
source: <path or link>
---
## Hook options
1.
2.
3.
## Post

## Visual
```
