---
name: pitch
description: Write a tailored, non-generic pitch to a founder or hiring manager for a specific job or company. Use when I paste a job description, a job link, a company name or a founder's profile and ask for a pitch, cold message, cold email, DM, cover note, application answer or follow-up.
---

# Pitch

## Read first
1. `pitch/playbook.md`: the one rule, the 5 parts, lengths, research checklist, never-write list.
2. `pitch/profile.md`: my proof bank and the private context (never mention years of experience).
3. `content/human-writing.md` and `content/voice.md`.
4. `design/portfolio.md` for project links and details.
5. The *Pitch log* in `pitch/playbook.md`: have I pitched this company before?

## Steps
1. **Read the job.** From the pasted JD, link or screenshot, pull out: company, role, the top 3 must-haves (in their words), the product, and anything that hints at their stage or pain ("first designer", "scale our design system", "improve activation").
2. **Research the company and the person.** Use the tools available: The Hog (`research_company`, `get_linkedin_company`, `list_linkedin_company_posts`, `get_linkedin_profile`, `list_linkedin_profile_posts`, `search_web`, `scrape_web_page`), WebFetch, or WebSearch. Find:
   - the **signal**: funding, launch, milestone, new market, hiring push, a recent founder post. Write the source link and date.
   - who to send it to (founder, head of product, design lead), if not given.
   If a tool fails, say so and carry on with what's there. **Never invent a signal.** No recent signal: lead with the product observation.
3. **Look at their product.** Open their site or app. Note one specific gap or opportunity related to the role. Say exactly what and where.
4. **Pick the proof.** 1 or 2 rows from `pitch/profile.md` that match the must-haves. Use the exact numbers. Link the one matching Behance project.
5. **Write**, following the 5 parts and the length for the channel:
   - If I named a channel, write that. Otherwise give a **LinkedIn DM** and a **cold email**, plus a **300-character connection note**.
   - 2 versions of the opening line: one leading with the signal, one with the product observation.
   - **Follow-up 1** (day 4, adds something new) and **follow-up 2** (day 10, graceful close).
   - If it's an application form, write the cover note or answer the form's questions directly.
6. **The generic test.** Swap their company name for a competitor's. Does the message still work? If yes, it's generic: rewrite parts 1 and 2 until it doesn't. Then check against the never-write list.
7. **Show me** a short research summary first (signal + source, product observation, why this proof), then the messages.
8. **Save** to `pitch/pitches/YYYY-MM-DD-<company>.md` (template below). Run `content/check-post.sh` on it until clean. Add a row to the *Pitch log* with status `drafted`.
9. When I tell you I sent it, got a reply, or got an interview, update the status in the log.

## Template
```md
---
date: YYYY-MM-DD
company: <name>
role: <role>
person: <name, role, link>
channel: <linkedin-dm | email | connection-note | application>
status: drafted   # drafted | sent | replied | interview | offer | no-reply
job: <link or "pasted">
---
## Research
- Signal: <fact> (<source link>, <date>)
- Product observation: <what, where>
- Their must-haves: <1, 2, 3>
- Proof chosen: <row from profile.md> because <why>

## Final
<the main message>

## Options
<other opening line, other channels, connection note>

## Follow-ups
1. Day 4:
2. Day 10:
```
