# Design: architecture & build

One file for *how I design* (principles, system, process) and *how I build* (stack, conventions, QA).
Skill: `/design` · Projects: `design/projects/<slug>.md`

---

## 1. Principles
- **One idea per design.** If I can't say it in a sentence, it isn't ready to build.
- **Motion carries proof, not decoration.** Things move to show the product working.
- **Make it a toy.** If people can poke it, they stay.
- **Reduced motion is a first-class design,** not a fallback.
- **Real content.** No lorem ipsum; numbers and copy should be believable.
- TODO: add my own

## 2. System (tokens)
Seeded from the Frontrunner hero (`styles.css`). Promote tokens here when they repeat across projects.

| Token | Value | Use |
|---|---|---|
| `--black` | `#080a09` | Primary text, headlines |
| `--body` | `#4b5563` | Body copy |
| `--muted` | `#8b9490` | Secondary text, labels |
| `--line` | `#e9edeb` | Borders, dividers |
| `--green` / `--g1` / `--g2` | `#16a34a` / `#22c55e` / `#0a9d49` | Brand, success, active |
| `--blue` / `--amber` / `--violet` | `#5b8def` / `#f0ad3d` / `#9b7cf0` | Data series, categories |
| `--dash-bg` | `#f4f6f5` | Product surfaces |
| `--dark` | `#0c0e0d` | Dark surfaces |
| `--r` | `14px` | Card radius |

**Type:** Inter 400–900 for UI; Caveat 700 for handwritten accents only.
**Spacing:** TODO: pick a scale (e.g. 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64).
**Motion:** TODO: standard durations and easing (e.g. 150ms UI, 400ms entrance, `cubic-bezier(.2,.8,.2,1)`).

## 3. Architecture (plan before building)
Every project file answers these before any code:
1. **Goal & audience**: who it's for, the one action it drives.
2. **The idea**: one sentence.
3. **Structure**: sections → components, with real content.
4. **Tokens**: reused vs. new.
5. **Motion & interaction**: what, why, timing, reduced-motion version.
6. **States**: hover, focus, loading, empty, error, mobile.

## 4. Build
- **Stack:** plain HTML / CSS / JS. No build step, no dependencies unless needed. Open `index.html` and it works.
- **Files:** `index.html` (markup), `styles.css` (tokens on `:root`, then layout, then components), `app.js` (behaviour, no globals leaking).
- **CSS:** custom properties for every colour/radius; mobile-first; `prefers-reduced-motion` block for every animation.
- **JS:** `requestAnimationFrame` for animation; pause when the tab is hidden; no layout thrash.
- **Accessibility:** semantic elements, visible focus, decorative layers `aria-hidden="true"`, contrast AA.
- **Figma:** components from the library first; auto layout everywhere; tokens as variables.

## 5. Quality bar (QA checklist)
- [ ] Reads in 5 seconds: headline, idea, CTA
- [ ] Looks right at 1440, 1024, 390
- [ ] Reduced-motion version is complete and good-looking
- [ ] Keyboard: every interactive element reachable with visible focus
- [ ] No console errors; smooth (no jank) on a mid laptop
- [ ] Content is real and believable

## 6. Project file template (`design/projects/<slug>.md`)
```md
# <Project name>
Status: architecture | building | shipped · Source: <paths / Figma link>

## Architecture
### Goal & audience
### The idea
### Structure
### Tokens (new)
### Motion & interaction
### States

## Build log
- YYYY-MM-DD: what was built, decisions made

## QA
- [ ] checklist from DESIGN.md §5

## Breakdown
### Key decisions
| Decision | Why | Alternative rejected |
|---|---|---|
### Details worth showing
### Trade-offs & what I'd test next
### Post ideas
1. [pillar · platform] …
```
