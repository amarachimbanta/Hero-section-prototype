---
name: linkedin-post
description: Draft a LinkedIn post from my design work. Use when I ask for a LinkedIn post, a daily post for LinkedIn, a caption, or to turn a design or X thread into a LinkedIn post.
---

# LinkedIn post

## Read first
1. `content/human-writing.md`: **hard rules.** No em dashes, no AI words, no AI patterns. Breaking one means the draft isn't done.
2. `content/voice.md`: who I am (overrides generic advice).
3. `content/linkedin.md`: platform rules.
4. The last ~10 files in `content/posts/linkedin/`: don't repeat a hook, pillar or topic.

## Steps
1. **Source**: the design/topic I gave you. If nothing, use the latest `design/projects/*.md` and its *Post ideas* section.
2. **Facts**: pull from code, README, the project file or Figma (use the Figma tools for a figma.com link). Note the 1 to 3 most interesting *decisions*.
3. Pick one idea + pillar. Say which in one line.
4. **3 hook options**, each from a different angle (a specific detail, something that went wrong, an outcome).
5. **Full post** with the strongest hook.
6. **Visual**: what to record or screenshot, how to crop, first frame.
7. **Human pass**: reread every line against the *Banned patterns* in `content/human-writing.md` and rewrite anything that sounds like a template. Read it out loud in your head; if I wouldn't say it to a friend, change it.
8. Save to `content/posts/linkedin/YYYY-MM-DD-<slug>.md` (template below), `status: draft`.
9. Run `content/check-post.sh <file>`. Fix everything it flags and run it again until it says `clean`. Only then show me the draft.

## Check before showing me
- [ ] `check-post.sh` says clean
- [ ] No banned pattern from `content/human-writing.md` (contrasts, rule of three, one-word lines, colon setups, broetry)
- [ ] Hook works on its own before the "see more" cut
- [ ] Every claim traceable to real work
- [ ] One idea, readable on a phone, 120 to 250 words
- [ ] Ends on a plain statement unless a question is genuinely needed; 3 hashtags max

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
