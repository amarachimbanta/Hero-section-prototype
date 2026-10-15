# Frontrunner — animated hero
Source: `index.html`, `styles.css`, `app.js`

## The problem
SaaS heroes show a screenshot under the headline. For an AI-agent product, a screenshot can't show the one thing that matters: that the agents are *working*.

## The idea
Draw the dashboard as a factory floor: packets of light carry agent work through the UI and change real numbers as they go.

## Key decisions
| Decision | Why | Alternative rejected |
|---|---|---|
| Hero stays static, dashboard moves | Headline stays readable; motion lives where the proof is | Animated headline / background |
| Traces only in the gutters between cards | Feels like wiring under the floor, never covers content | Lines drawn over the cards |
| Numbers really accumulate | Looks different every visit; rewards ~20s of attention | Looping GIF / video |
| Click a sidebar item to dispatch a job | Turns the hero into a toy, and people play with toys | Hover-only |
| `prefers-reduced-motion` → static, fully populated | Accessible, and still a good screenshot | Just pausing mid-animation |

## Details worth showing
- A packet entering a stat card: card rings green, counter ticks up.
- "$482K" ticking up as a new bar grows in Pipeline Growth.
- The return CRM sync along the bottom gutter, "84 accounts" growing.
- Hovering a sidebar item and its whole route lighting up.

## Trade-offs & what I'd test next
- Motion competes with the CTA. Test click-through on the CTA with and without the dashboard animating.
- The 7° scroll tilt may feel gimmicky on small screens; check it on mobile.
- No dependencies keeps it fast, but makes complex sequencing harder to maintain.

## Post ideas
1. [build-log] "A screenshot can't prove your agents work. So I made the dashboard run itself."
2. [principle] Motion should carry proof, not decoration: why the headline stays still.
3. [before → after] Static screenshot vs. self-running dashboard, side by side.
4. [principle] Make the hero a toy: click-to-dispatch and why play beats explanation.
5. [process] Designing for `prefers-reduced-motion` first: the static version has to be good too.
