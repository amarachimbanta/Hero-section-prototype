---
name: linkedin-post
description: Draft a daily LinkedIn post from my design work. Use when I ask for a LinkedIn post, a daily post, a caption, or "write about this design".
---

# LinkedIn post

## Inputs
- A topic, a design (file, folder, screenshot, Figma link), or nothing. If nothing, pick the most recent unposted work in this repo.
- Optional format from `linkedin/voice.md` (build log, before → after, teardown, principle, process).

## Steps
1. Read `linkedin/voice.md`. Follow it over any generic advice.
2. List `linkedin/posts/` and skim the last ~10 posts so you don't repeat a hook, format or topic.
3. Gather facts from the source: code, README, design files, Figma (use the Figma tools for a figma.com link). Note the 1–3 most interesting *decisions*, not features.
4. Pick one idea and a format. Say which in one line.
5. Write **3 hook options** (different angles: contrarian, specific detail, outcome).
6. Write the **full post** using the strongest hook.
7. Suggest a **visual**: what to screenshot/record, crop, and what the first frame should show.
8. Save to `linkedin/posts/YYYY-MM-DD-<slug>.md` using the template below, with `status: draft`.

## Checklist before showing me
- [ ] Hook under ~12 words, no throat-clearing
- [ ] Every claim traceable to the actual work; no invented metrics
- [ ] One idea, readable on a phone
- [ ] Ends with a question or takeaway
- [ ] ≤ 3 hashtags, none of my banned words

## Template
```md
---
date: YYYY-MM-DD
status: draft   # draft | scheduled | posted
format: build-log
source: <path or link to the design>
---

## Hook options
1.
2.
3.

## Post


## Visual
```
