# Frontrunner: animated hero
Status: shipped · Source: `index.html`, `styles.css`, `app.js`, `README.md`

## Architecture
### Goal & audience
SaaS buyers landing on an AI-agent GTM product. The one action: **Start building**.

### The idea
The dashboard is a factory floor: packets of light carry agent work through the UI and change real numbers as they go.

### Structure
- Nav: wordmark, Product / How it works / Integrations / Pricing, Login, "Start building"
- Hero: headline ("Build your Revenue factory"), subcopy, CTA (static)
- Dashboard: sidebar (Accounts, Prospects, Campaigns, Inbox, Settings) → stat cards → Agent Activity → Pipeline Growth, with a flow layer behind the cards

### Tokens (new)
None beyond the system in `design/DESIGN.md` §2 (this project seeded it).

### Motion & interaction
- A packet travels a trace every couple of seconds: sidebar → stat card → Agent Activity → Pipeline Growth → CRM sync back to Accounts.
- Hover a sidebar item: its route lights end to end. Click: dispatches that job now.
- Scroll: dashboard rotates up to meet the viewer (7°).
- Reduced motion: all motion dropped; a fully populated static dashboard.

### States
Hover / click on sidebar; reduced-motion static state. TODO: check mobile layout and keyboard focus on sidebar items.

## Build log
- Built as plain HTML/CSS/JS, no dependencies. Flow layer sits *behind* the cards so traces only show in the gutters.

## QA
- [ ] Re-run against the DESIGN.md §5 checklist (mobile 390, keyboard focus not yet verified)

## Breakdown
### Key decisions
| Decision | Why | Alternative rejected |
|---|---|---|
| Hero stays static, dashboard moves | Headline stays readable; motion lives where the proof is | Animated headline / background |
| Traces only in the gutters | Feels like wiring under the floor, never covers content | Lines drawn over the cards |
| Numbers really accumulate | Looks different every visit; rewards ~20s of attention | Looping GIF / video |
| Click a sidebar item to dispatch a job | Turns the hero into a toy | Hover-only |
| Reduced motion → static, fully populated | Accessible, and still a good screenshot | Pausing mid-animation |

### Details worth showing
- A packet entering a stat card: card rings green, counter ticks up.
- "$482K" ticking up as a new bar grows in Pipeline Growth.
- The return CRM sync along the bottom gutter, "84 accounts" growing.
- Hovering a sidebar item and its whole route lighting up.

### Trade-offs & what I'd test next
- Motion competes with the CTA: test CTA click-through with and without animation.
- The 7° scroll tilt may feel gimmicky on small screens.
- No dependencies keeps it fast but makes complex sequencing harder to maintain.

### Post ideas
1. [build-log · both] "A screenshot can't prove your agents work. So I made the dashboard run itself." *(LinkedIn drafted 2026-10-15)*
2. [principle · LinkedIn] Motion should carry proof, not decoration: why the headline stays still.
3. [before → after · X] Static screenshot vs. self-running dashboard, side-by-side clip.
4. [principle · X thread] Make the hero a toy: click-to-dispatch and why play beats explanation.
5. [process · both] Designing the reduced-motion version first.
