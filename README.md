# Frontrunner — animated hero prototype

A working prototype of the Frontrunner hero section. The section itself is static;
the **dashboard underneath runs itself**. Work is emitted from the sidebar, routed
through a stat card, written into Agent Activity, lands in Pipeline Growth, and
syncs back into Accounts — closing the loop.

Open `index.html` in a browser. No build step, no dependencies.

---

## The idea

Most SaaS heroes put a screenshot under the headline. A screenshot of an agent
product is the one thing it can't show: that the agents are *working*.

The headline promises a **revenue factory**. So the dashboard is drawn as a factory
floor — the gutters between the cards carry faint circuit traces, and a packet of
light moves down a trace every couple of seconds. Every packet is one unit of agent
work, and it changes real state as it travels:

| Stage | What the viewer sees |
|---|---|
| **Sidebar** | The originating agent (Accounts / Prospects / Campaigns / Inbox / Settings) lights up |
| **Stat card** | The packet enters the card, the card rings green, the counter ticks up |
| **Agent Activity** | A new row slides in at the top, "just now", older rows age |
| **Pipeline Growth** | `$482K` ticks up, a new bar grows, "+$14K today" increments |
| **Return trace** | A CRM sync runs along the bottom gutter back into Accounts, and "84 accounts" grows |

Nothing is a looping GIF. The numbers are genuinely accumulating, which is why the
dashboard looks different every time you land on it — and why it keeps rewarding
attention for the ~20s a visitor actually spends above the fold.

## Interactions

- **Hover a sidebar item** → its route lights up end to end, so the viewer can trace
  where that agent's work goes.
- **Click a sidebar item** → dispatches that job immediately. The hero becomes a toy,
  and toys get played with.
- **Scroll** → the dashboard rotates up to meet the viewer (subtle, 7°).
- **`prefers-reduced-motion`** → all motion is dropped; the dashboard renders as a
  normal, fully-populated static screenshot.

## How it works

| File | |
|---|---|
| `index.html` | Markup for the hero and the dashboard |
| `styles.css` | All styling; the flow layer sits *behind* the cards so traces only show in the gutters |
| `app.js` | Routing, packets, and state (no dependencies) |

The routes are not hand-drawn paths. On load, `buildRoutes()` measures the live
layout, finds the gutters (beside the sidebar, above the stat row, between the rows,
along the bottom), and generates an orthogonal, rounded trace through them for each
job type. Packets ride the trace with `getPointAtLength`, and a stage fires when the
packet's head enters that element's box — so the animation stays correct at any width
and survives edits to the card layout.

The dashboard is authored at a fixed 1120px and scaled to fit, so the composition is
pixel-identical at every breakpoint.

## Notes for review

- Nav reads Product / How it works / **Integrations** / Pricing — "How it works"
  appeared twice in the source design, so the duplicate is filled in here. Easy to revert.
- Fonts are Inter + Caveat from Google Fonts (the wordmark is an approximation of the
  real script mark — drop in the actual logo SVG for the pitch).
- Pacing knobs live at the top of `app.js`: emit interval (`2400ms`), packet duration
  (`3000ms`), and the `JOBS` table that defines what each agent does and what it's worth.
