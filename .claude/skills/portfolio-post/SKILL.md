---
name: portfolio-post
description: Write a LinkedIn or X post about a project from my portfolio (Behance). Use when I say "write me a post on [project]", name a portfolio project (Base360, NavEase, Nexera ERP, PleniX, Agrixa, Shopwithme, Hisense, Cycle Diary), or ask for a post about my portfolio or my work.
---

# Portfolio post

"Write me a post on X" means a project in `design/portfolio.md`. The post shows the work *and* brings value with a business angle.

## Read first
1. `design/portfolio.md`: the project's facts, business angle, post angles, and *Facts from me*.
2. `content/human-writing.md`, `content/voice.md`.
3. Platform: `content/linkedin.md` + `content/design-content.md` + `content/swipe.md` (LinkedIn, the default), or `content/x.md` (if I say X or tweet).
4. Recent posts in `content/posts/` so the project, angle and hook don't repeat.

## Steps
1. **Find the project.** Match the name loosely (e.g. "the ERP" = Nexera ERP, "the Lagos app" = NavEase). If I just say "my portfolio", pick the project with the most unused post angles and say which.
2. **Check the facts.** List what the post needs (the problem, the user, one decision, an outcome). Use only what's in `design/portfolio.md` or what I've told you.
   - If something important is missing, **ask me up to 3 short questions** in one message, or ask for screenshots of the case study slides. Don't fill gaps with guesses.
   - If I say "just write it", write it with what's there and mark anything I need to check with `[check]`.
3. **Pick one angle.** For edge-case work (empty states, errors, "the options don't fit"), use the proven **Figma vs real life** shape from `/linkedin-post`. Otherwise pick one from the project's post angles (or a new one) and a **shape** from `content/design-content.md` (LinkedIn) or a formula from `content/x.md` (X). Say which in one line.
4. **Write it** following `/linkedin-post` or `/x-post` (hooks, full post, visual, human pass, checklist). The value check matters most here: what does a founder or hiring manager learn, and what's the business reason?
5. **Visual:** name the exact slide or screen from the Behance case study to use, or the prototype clip (NavEase has a 3:50 video). One image that tells the story beats a carousel of every screen.
6. **Link:** the Behance link goes in the first comment (LinkedIn) or a reply (X), never in the post body.
7. Save to `content/posts/<platform>/YYYY-MM-DD-<project>-<slug>.md` with `source:` set to the Behance link, then run `content/check-post.sh` until clean.
8. **Update `design/portfolio.md`:** add any new facts I gave you under *Facts from me*, and note under the project which angle was used and when, so it isn't reused too soon.
