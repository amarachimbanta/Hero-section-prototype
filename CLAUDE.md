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
| `content/voice.md` | My voice, shared by both platforms. **Read before writing any post.** | n/a |
| `content/linkedin.md` | LinkedIn rules | `/linkedin-post` |
| `content/x.md` | X rules | `/x-post` |
| `content/posts/{linkedin,x}/` | Drafts and published posts: `YYYY-MM-DD-slug.md` | n/a |
| `index.html`, `styles.css`, `app.js` | Frontrunner hero prototype (`design/projects/frontrunner-hero.md`) | n/a |

## Flow
`/design` → project file with *Post ideas* → `/linkedin-post` and `/x-post` draft from those ideas.

## Rules
- Writing: `content/voice.md` + the platform file win over generic "best practice".
- Never invent metrics, clients or results; pull facts from the code, project file or Figma.
- Check recent posts before drafting so hooks and topics don't repeat.
- Code: no build step, no dependencies unless I ask. Respect `prefers-reduced-motion`.
