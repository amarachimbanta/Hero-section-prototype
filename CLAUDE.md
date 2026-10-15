# CLAUDE.md

This repo holds my design work **and** the system I use to write about it on X and LinkedIn.

## Who I am
- Product / web designer. I build working prototypes (HTML/CSS/JS, Figma) and share the thinking behind them.
- Goal: post daily; every post shows real work, not generic advice.

## Repo map
| Path | What it is | Skill |
|---|---|---|
| `design/DESIGN.md` | How I design and build: principles, tokens, architecture, build conventions, QA | `/design` |
| `design/projects/<slug>.md` | One file per project: architecture + build log + breakdown + post ideas | `/design` |
| `content/human-writing.md` | **Hard rules:** no em dashes, no AI words or patterns. Every post must pass it. | n/a |
| `content/check-post.sh` | Run on any draft: flags dashes, arrows, semicolons, banned words and phrases | n/a |
| `content/voice.md` | My voice, shared by both platforms. **Read before writing any post.** | n/a |
| `content/linkedin.md` | LinkedIn rules | `/linkedin-post` |
| `content/x.md` | X rules | `/x-post` |
| `content/humor.md` | LinkedIn humor: rules, formats, swipe file of screenshots, my results | `/humor-post` |
| `content/humor/{swipe,mine}/` | Screenshots of humor posts that took off (others' / mine) | `/humor-post` |
| `content/posts/{linkedin,x}/` | Drafts and published posts: `YYYY-MM-DD-slug.md` | n/a |
| `index.html`, `styles.css`, `app.js` | Frontrunner hero prototype (`design/projects/frontrunner-hero.md`) | n/a |

## Flow
`/design` makes a project file with *Post ideas*. `/linkedin-post` and `/x-post` draft from those ideas.

## Rules
- Posts must sound human. Follow `content/human-writing.md` and run `content/check-post.sh` on every draft until it's clean. No em dashes, ever.
- Writing: `content/voice.md` + the platform file win over generic "best practice".
- Never invent metrics, clients or results; pull facts from the code, project file or Figma.
- Check recent posts before drafting so hooks and topics don't repeat.
- Code: no build step, no dependencies unless I ask. Respect `prefers-reduced-motion`.
