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
(The `/swipe` skill sorts any screenshot and sends humor ones here.)
Use when there are images in `content/humor/swipe/` or `content/humor/mine/` that aren't in a table in `content/humor.md` yet, or when I attach a screenshot in chat.
1. Open each new image (Read shows images).
2. Note: who posted, the first line, the format (match a row in *Formats*, or add a new format), reaction/comment/repost counts **only if visible**.
3. Say in one or two plain sentences why it worked: who would tag whom, what's the relatable bit, where the joke lands.
4. Add a row to *Swipe file* (other people) or *My humor posts* (mine).
5. Once there are 5 or more rows, rewrite *Patterns I'm seeing*: what the top performers share (length, format, visual or not, topic, where the punchline sits). Compare my posts against them and say what to try next.
6. If I attached a screenshot in chat and it isn't in the folder, log it with File = `(chat, not saved)` and remind me to upload the image.

## Mode B: write a humor post
1. **Source**: a real moment I give you, or something real from `design/projects/*.md` (a bug, a revision, a decision that took too long). A universal design pain every designer has lived (like the client walking all over the design) also counts. Never invent a personal anecdote ("yesterday my client said...") that didn't happen.
2. **Keep the mix**: check the last few humor drafts. 80% product design, 20% general LinkedIn humor (see *Mix* in `content/humor.md`).
3. **Start from *My winning formula*** in `content/humor.md` (labelled meme + one-line situation + friendly fight between jobs). At least 1 of the 3 versions must use it. The other 2 can try other formats from the table, to keep testing. Say which formats and why in one line.
4. **Build each version visual first, caption second.**
   - **Visual:** say exactly what it is. For a meme: what's in panel 1 and panel 2 (or the video), the exact label text, image or video, and where to find something like it. For a mock UI or annotated screenshot: what's on screen and the exact text. Offer to build mock UIs as HTML in this repo so I can screenshot them.
   - **Caption:** follow the caption template in the formula. One line naming the situation, one line that starts the friendly fight or asks the question. 15 to 60 words. Only go longer for a story-style humor post (like the job hunt one), and then follow the *Anatomy* in `content/swipe.md`.
5. Write **3 versions** this way, each a different angle on the same real moment or three different moments.
6. **Funny check**, for each version:
   - Would a designer tag a coworker on this? If not, cut it.
   - Does the joke land in the first two lines or the image?
   - Is it punching at the work or me, not at a named person or company?
   - Is there a lesson or moral tacked on the end? Delete it.
   - Does the visual still get a laugh with no caption? If not, rework the visual, not the caption.
   - Would someone on the *other* side of the friendly fight (a developer, a PM) laugh too, or just get annoyed? Aim for laugh.
7. **Human pass** against the *Banned patterns* in `content/human-writing.md`.
8. Save to `content/posts/linkedin/YYYY-MM-DD-<slug>.md` with `pillar: humor`, using the `/linkedin-post` template. Put the strongest version under `## Post` and the other two under `## Options` (the checker reads both). If a version parodies LinkedIn speak on purpose, add `parody: <phrase>` to the frontmatter.
9. Run `content/check-post.sh <file>` until clean. Then show me.
