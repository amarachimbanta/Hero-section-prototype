---
name: humor-post
description: Funny LinkedIn posts about design work. Logs and analyses screenshots of humor posts that took off (mine and other people's), then drafts new humor posts in my voice. Use when I ask for a funny post, a humor post, a meme idea, or to log/analyse screenshots in content/humor/.
---

# Humor post

## Read first
1. `content/human-writing.md`: hard rules. No em dashes, no AI words, no AI patterns.
2. `content/voice.md`: who I am.
3. `content/humor.md`: humor rules, formats, swipe file, my results, patterns.
4. The last ~10 files in `content/posts/linkedin/`: don't repeat a joke or format, and keep humor to 1 post in 3.

## Mode A: log screenshots
Use when there are images in `content/humor/swipe/` or `content/humor/mine/` that aren't in a table in `content/humor.md` yet, or when I attach a screenshot in chat.
1. Open each new image (Read shows images).
2. Note: who posted, the first line, the format (match a row in *Formats*, or add a new format), reaction/comment/repost counts **only if visible**.
3. Say in one or two plain sentences why it worked: who would tag whom, what's the relatable bit, where the joke lands.
4. Add a row to *Swipe file* (other people) or *My humor posts* (mine).
5. Once there are 5 or more rows, rewrite *Patterns I'm seeing*: what the top performers share (length, format, visual or not, topic, where the punchline sits). Compare my posts against them and say what to try next.
6. If I attached a screenshot in chat and it isn't in the folder, log it with File = `(chat, not saved)` and remind me to upload the image.

## Mode B: write a humor post
1. **Source**: a real moment I give you, or something real from `design/projects/*.md` (a bug, a revision, a decision that took too long). Ask me for a real moment if there's nothing true to work from. Never invent an anecdote.
2. **Pick a format** that's working in the swipe file (or from *Formats* if the file is still thin). Say which and why in one line.
3. Write **3 versions**, each a different format or angle. 20 to 120 words each.
4. **Visual** for each: meme layout, annotated screenshot, mock UI, or text only. Be exact (what's in the image, what the annotation says). If it's a mock UI, offer to build it as HTML in this repo so I can screenshot it.
5. **Funny check**, for each version:
   - Would a designer tag a coworker on this? If not, cut it.
   - Does the joke land in the first two lines or the image?
   - Is it punching at the work or me, not at a named person or company?
   - Is there a lesson or moral tacked on the end? Delete it.
6. **Human pass** against the *Banned patterns* in `content/human-writing.md`.
7. Save to `content/posts/linkedin/YYYY-MM-DD-<slug>.md` with `pillar: humor`, using the `/linkedin-post` template. Put the strongest version under `## Post` and the other two under `## Options` (the checker reads both).
8. Run `content/check-post.sh <file>` until clean. Then show me.
