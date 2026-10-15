# CLAUDE.md

This repo holds my design work **and** the system I use to write about it on X and LinkedIn.

## Who I am
- **Amarachi Mbanta.** In any post screenshot, my name means it's my post. Any other name is someone else's post that moved, used to compare mine against.
- Product / web designer. I build working prototypes (HTML/CSS/JS, Figma) and share the thinking behind them.
- Goal: post daily; every post shows real work, not generic advice.

## Repo map
| Path | What it is | Skill |
|---|---|---|
| `design/DESIGN.md` | How I design and build: principles, tokens, architecture, build conventions, QA | `/design` |
| `design/portfolio.md` | My Behance portfolio: every project, facts, business angle, post angles. "Write me a post on X" = a project here | `/portfolio-post` |
| `design/projects/<slug>.md` | One file per project: architecture + build log + breakdown + post ideas | `/design` |
| `content/human-writing.md` | **Hard rules:** no em dashes, no AI words or patterns. Every post must pass it. | n/a |
| `content/check-post.sh` | Run on any draft: flags dashes, arrows, semicolons, banned words and phrases | n/a |
| `content/voice.md` | My voice, shared by both platforms. **Read before writing any post.** | n/a |
| `content/linkedin.md` | LinkedIn rules | `/linkedin-post` |
| `content/x.md` | X rules, the unsolicited build formula, X swipe log, mine vs theirs | `/x-post`, `/swipe` |
| `content/x-swipe/{others,mine}/` | Screenshots of X posts | `/swipe` |
| `content/swipe.md` | Posts that took off (non-humor): anatomy, structures, swipe log, my posts, what's missing in mine | `/swipe` |
| `content/swipe/{others,mine}/` | Screenshots of those posts | `/swipe` |
| `content/design-content.md` | Design posts: the value rule (every post has a business angle), post shapes, swipe log, mine vs theirs | `/linkedin-post`, `/swipe` |
| `content/design-swipe/{others,mine}/` | Screenshots of design posts that moved / mine | `/swipe` |
| `content/humor.md` | LinkedIn humor: rules, formats, swipe file of screenshots, my results | `/humor-post` |
| `content/humor/{swipe,mine}/` | Screenshots of humor posts that took off (others' / mine) | `/humor-post` |
| `content/posts/{linkedin,x}/` | Drafts and published posts: `YYYY-MM-DD-slug.md` | n/a |
| `index.html`, `styles.css`, `app.js` | Frontrunner hero prototype (`design/projects/frontrunner-hero.md`) | n/a |

## Flow
`/design` makes a project file with *Post ideas*. `/linkedin-post` and `/x-post` draft from those ideas, using the structures in `content/swipe.md`. `/swipe` keeps that file learning from screenshots.

## Rules
- Posts must sound human. Follow `content/human-writing.md` and run `content/check-post.sh` on every draft until it's clean. No em dashes, ever.
- Every post brings value. Design posts must answer "so what for the business?" without invented numbers. Position me as valuable, not selling.
- Writing: `content/voice.md` + the platform file win over generic "best practice".
- Never invent metrics, clients or results; pull facts from the code, project file or Figma.
- Check recent posts before drafting so hooks and topics don't repeat.
- Code: no build step, no dependencies unless I ask. Respect `prefers-reduced-motion`.
