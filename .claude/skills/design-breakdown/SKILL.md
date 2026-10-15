---
name: design-breakdown
description: Turn a design or prototype into a structured breakdown (problem, idea, decisions, trade-offs) that feeds LinkedIn posts and case studies. Use when I ask to "break down", "explain", "case study" or "review" a design.
---

# Design breakdown

One breakdown = a week of posts. Each section below can become its own post.

## Steps
1. Study the design: read the code / README, or pull the Figma frame and screenshot. If you can, run it and look at it.
2. Fill in the template. Be specific: name elements, values, timings, colours.
3. Critique honestly: what's weak, what you'd test next. Don't flatter.
4. Finish with **Post ideas**: 5 one-line post angles, each tagged with a format from `linkedin/voice.md`.
5. Save to `linkedin/breakdowns/<slug>.md`.

## Template
```md
# <Design name>
Source: <path / link>

## The problem
What the design has to do and for whom.

## The idea
The one concept the design hangs on, in one sentence.

## Key decisions
| Decision | Why | Alternative rejected |
|---|---|---|

## Details worth showing
Small moments (motion, copy, states) that would make a good clip or screenshot.

## Trade-offs & what I'd test next

## Post ideas
1. [format] …
```
