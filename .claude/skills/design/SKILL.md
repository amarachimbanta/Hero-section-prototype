---
name: design
description: Plan and build a design end to end: architecture (goal, concept, structure, tokens, motion, states) then the full build (HTML/CSS/JS or Figma), QA, and a breakdown with post ideas. Use when I ask to design, build, prototype, plan, critique, break down or case-study a design.
---

# Design: architecture → build → breakdown

Follow `design/DESIGN.md` (my principles, tokens and quality bar). Each project gets one file: `design/projects/<slug>.md`, using the template in DESIGN.md. It is the single source of truth: architecture, build log and breakdown live together.

## Pick the entry point
- **New design** → start at Phase 1.
- **Existing design to explain or critique** → read the code/Figma, fill the project file from what's there, jump to Phase 4.
- **Changes to an existing project** → read its project file, update architecture first, then build.

## Phase 1: Architecture (stop and confirm with me)
1. Goal, audience, the one action the page must drive.
2. **The idea**: the single concept the design hangs on, in one sentence.
3. Structure: sections / components tree, content for each.
4. Tokens: reuse `design/DESIGN.md` tokens; list any new ones.
5. Motion & interaction: what moves, why, timings; reduced-motion version.
6. States: loading, empty, hover, focus, error, mobile.
7. Write all of this into the project file, then **show me a summary and wait for a go** before building.

## Phase 2: Build
- **Code** (default): plain HTML/CSS/JS, no build step, no dependencies unless I ask. Tokens as CSS custom properties on `:root`. Semantic markup.
- **Figma** (if I give a Figma link or ask for Figma): use the Figma MCP tools; load the `/figma-use` and `/figma-generate-design` skills first; reuse library components via `search_design_system`.
- Build section by section in the order of the architecture. Log notable decisions in the project file as you go.

## Phase 3: QA
Run the page in a browser (Playwright/Chromium is installed) and screenshot desktop (1440) and mobile (390). Check against the quality bar in DESIGN.md. Fix what fails, then note what you checked.

## Phase 4: Breakdown
Fill the *Breakdown* section of the project file: key decisions (why / alternative rejected), details worth showing, honest trade-offs, what I'd test next, and **5 post ideas** tagged with a pillar and platform (LinkedIn / X / both). `/linkedin-post` and `/x-post` read from this.
