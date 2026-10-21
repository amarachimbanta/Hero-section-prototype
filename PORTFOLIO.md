# Design Portfolio — Build Brief

> The single source of truth for building my design portfolio.
> Every section of the site starts here: what it is, how it should behave on every screen, and how it gets from Figma to live code.

---

## 1. Purpose

This portfolio is a showcase of my design work, built as a real, responsive website instead of a static PDF. It should feel like the work itself: considered, clear, and crafted down to the last pixel.

It has one job: **help the right person understand, in under a minute, how I think and what I can build.**

## 2. Who it's for

| Visitor | What they need to find fast |
|---|---|
| Hiring managers & recruiters | Who I am, the kind of work I do, how to contact me |
| Design leads | Process, reasoning, and craft inside each case study |
| Founders & clients | Outcomes: what changed because of the design |

## 3. How we build it: one set at a time

The portfolio is built **set by set** (a set is one section or page, e.g. the Hero, About, Case Studies, Contact).

For every set:

1. **I paste the Figma link** for that set (web frame and mobile frame).
2. **Claude reviews the design** and confirms layout, type, spacing, colours, and assets.
3. **Nothing is built until I say "start."**
4. Claude builds the set as responsive code, matching Figma as closely as possible.
5. I review on desktop, tablet, and mobile, then we refine.
6. The approved set is committed and pushed to GitHub before moving to the next one.

### Set tracker

| # | Set | Figma (web) | Figma (mobile) | Status |
|---|---|---|---|---|
| 1 | _To be shared_ | — | — | Waiting for Figma |
| 2 | | | | |
| 3 | | | | |

_Status options: Waiting for Figma → In review → Building → Ready for feedback → Done_

## 4. Responsive design rules

Every set has a **web** version and a **mobile** version in Figma. Tablet is built from both, so the layout never breaks between them.

| Device | Width | Source of truth |
|---|---|---|
| Mobile | 0 – 767px | Mobile Figma frame |
| Tablet | 768 – 1023px | Adapted from web + mobile (stacked or 2-column) |
| Desktop | 1024px and up | Web Figma frame |
| Large desktop | 1440px and up | Web frame, content capped at a max width and centered |

**Non-negotiables**

- **Mobile-first CSS**: base styles for mobile, scaled up with `min-width` media queries.
- **Fluid, not fixed**: type and spacing use `clamp()` so they scale smoothly between breakpoints.
- **No horizontal scrolling** at any width, ever.
- **Touch-friendly**: tap targets at least 44 × 44px on mobile and tablet.
- **Images**: responsive (`srcset` / `sizes`), compressed, and lazy-loaded below the fold.
- **Navigation**: full nav on desktop, collapses to a menu on mobile.

## 5. Design system

Pulled from Figma as each set is shared, then stored as CSS variables so every set stays consistent.

| Token | Value |
|---|---|
| Primary font | _From Figma_ |
| Secondary font | _From Figma_ |
| Colour palette | _From Figma_ |
| Spacing scale | _From Figma_ |
| Corner radius | _From Figma_ |
| Shadows / effects | _From Figma_ |

## 6. Quality bar

A set is only **done** when:

- [ ] It matches the Figma design on desktop and mobile
- [ ] It looks intentional on tablet (not just "not broken")
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Text has enough colour contrast (WCAG AA)
- [ ] Images have alt text; the page works with a keyboard
- [ ] It loads fast (Lighthouse performance 90+)

## 7. Tech stack

| Part | Tool | Role |
|---|---|---|
| Design | **Figma** | Source of truth for every set |
| Code | HTML, CSS, JavaScript | The site itself, responsive by default |
| Version control | **GitHub** | Every approved set is committed and pushed |
| Backend / data | **Supabase** | Case-study content, contact-form messages, and media storage as needed |
| Hosting | _To be decided_ | Where the live portfolio is published |

## 8. About me

_Filled in from my Figma designs and my own words. Placeholders until then._

- **Name:** _[Your name]_
- **Role:** _[e.g. Product Designer]_
- **One-line intro:** _[How you'd introduce yourself in one sentence]_
- **Focus areas:** _[e.g. product design, design systems, interaction design]_
- **Contact:** _[Email / LinkedIn / Dribbble / Behance]_

---

**Next step:** paste the Figma link for the first set. Claude will review it and wait for "start" before building.
