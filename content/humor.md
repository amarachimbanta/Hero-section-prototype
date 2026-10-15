# Humor playbook (LinkedIn)

Skill: `/humor-post` · Screenshots: `content/humor/swipe/` (other people) and `content/humor/mine/` (my own) · Drafts: `content/posts/linkedin/` with `pillar: humor`

Funny posts get shared because people tag a coworker ("this is literally you"). That's where the momentum comes from: comments and reposts, not likes. The goal is a post a designer, PM or founder sends to someone on their team.

Still follows `content/human-writing.md`. No em dashes, no AI words.

## My winning formula (start here)
Built from my best humor post: the designer vs client concrete meme, **15,631 impressions, 430 reactions, 62 comments, 15 reposts**. That's about 3x the reach of my job hunt post. Use this structure first, and only switch formats when there's a reason.

1. **The meme is the punchline.** A two-panel labelled meme, ideally a short video. Panel 1: someone doing careful, skilled work, labelled "Designer". Panel 2: something that wrecks it without a care, labelled "*Client". Motion keeps people on the post longer, which LinkedIn rewards.
2. **The caption names the situation in one line.** "This happens when you give your client the liberty to make decisions on your design." It sets up the meme. It doesn't retell it.
3. **One spicy line that starts a friendly fight between two groups.** "It's only in design that everyone has a say! Why is it not so in development?" Designers agree, developers push back, both comment. Rivalry between jobs, never a named person or company.
4. **Universal design pain.** Every designer has had this exact client. That's what makes people tag a coworker and repost (15 reposts).
5. **Short.** About 35 words of caption. The meme does the work.

**Caption template**
```
[One line naming the situation, starting with "This happens when" or "When"]

[One line that compares design to another job, or asks why it's only like this in design]
```

**Groups that make a good friendly fight:** design vs development, design vs marketing, designers vs PMs, designers vs stakeholders, product design vs graphic design, designers vs "can you just make it pop" people. Keep it playful. The other side should laugh too.

**Meme formats that fit this formula** (two panels, careful work vs the thing that ruins it, or expectation vs what happened):
- Workers carefully laying tiles / someone walks straight across them.
- A perfectly stacked Jenga tower / one hand pulling the bottom block.
- A chef plating a fine dish / someone pouring ketchup on it.
- Someone painting a road line perfectly straight / a car driving through the wet paint.
Find the real video or image on a meme site, add the two labels, and keep it under 15s.

## Mix
- **80% product design humor**: Figma, stakeholders, design reviews, handoff, dev QA, client feedback, portfolios, the job hunt as a designer.
- **20% general LinkedIn humor**: procrastination, work life, and parodies of LinkedIn itself.
- The 20% widens who sees me. The 80% is why the right people follow.

## Rules
- Punch at the work, the process, or myself. Never at a named client, coworker or company.
- It has to be true. Exaggerate a real moment, don't invent one. Specific beats clever.
- The joke lands in the first two lines or the visual. No warm-up paragraph.
- Keep it short: 20 to 120 words. A funny post with a lesson tacked on dies.
- One joke per post. Don't stack three bits.
- Leave a little room for people to add their own version in the comments.
- Don't explain the joke. No "lol", no "😂", no "IYKYK".
- Parody exception: a LinkedIn parody can use a banned phrase on purpose ("thrilled to announce"). List it in the draft's frontmatter as `parody: thrilled to` so `check-post.sh` lets it through. Everything else still has to pass.
- Max 1 humor post in 3. It works best mixed in with real build posts.

## Formats that travel on LinkedIn
Fill in which of these actually work for me as the swipe file grows.

| Format | Shape | Design-world example |
|---|---|---|
| **Client feedback, translated** | Quote the feedback, then what it actually meant | "Can it pop more?" = "I don't like the colour but won't say which" |
| **Expectation vs reality** | Two images or two lines side by side | The Dribbble shot vs. the shipped screen with the cookie banner on top |
| **The annotated screenshot** | A real screenshot with handwritten notes | My Figma file called `final_FINAL_v7_use-this-one` |
| **Fake job description / spec** | Formal format, absurd content | "Senior designer. Must make the logo bigger. 10 years Figma experience." |
| **The tiny tragedy** | One small, painfully relatable moment told straight | Spent 3 hours on a micro-interaction. Nobody noticed. The PM noticed the typo. |
| **Me explaining X to Y** | Explaining a design idea to an audience that won't get it | Explaining "white space" to a stakeholder who wants three more CTAs |
| **The list nobody asked for** | Numbered list of honest, slightly petty truths | "Phrases that mean the design review is going badly" |
| **LinkedIn parody** | Formal LinkedIn announcement voice for a tiny or embarrassing thing, plus a "milestone" image | "Thrilled to announce I finally renamed all my Figma layers. Frame 2847 is now Header." |
| **Labelled meme (my best)** | Two panels or a short video: careful work, then something wrecking it, with job labels | Workers smoothing concrete = "Designer". Dog running through it = "*Client". **15.6k impressions.** |
| **Mock UI** | A fake interface that makes the joke | A modal: "Are you sure you want to add another stakeholder?" [Cancel] [Cancel] |

## Swipe file
Logged by `/humor-post` from screenshots. One row per screenshot. Reactions/comments only if visible in the screenshot, never guessed.

| Date added | File | Who | Format | Hook (first line) | Why it worked | Reactions / comments |
|---|---|---|---|---|---|---|
| 2026-10-15 | `swipe/2026-10-15-magali-de-reu-task-42-days.png` | Magali De Reu (writes for coaches and founders) | LinkedIn parody | "thrilled to announce the task i'd been putting off for 42 days took 4 minutes to complete" | Takes the "thrilled to announce" voice and points it at a universal, slightly shameful truth everyone has lived. The exact numbers (42 days, 4 minutes) make it real. The whole joke is in one line, all lowercase, so it feels like a shrug, not a performance. The LinkedIn "celebrating a milestone" card with a sleeping cartoon lands the punchline a second time. Easy to tag someone and easy to comment "me with my taxes". | 1,885 reactions, 339 comments, 9 reposts (about 3 weeks old). Lots of comments for the reactions, so people replied with their own version. |

## My humor posts
| Date | File | Format | Hook | Reactions / comments / reposts | What I'd change |
|---|---|---|---|---|---|
| ~2026-09-15 (1mo) | `mine/2026-09-15-designer-vs-client-concrete.png` | Labelled meme (video) + friendly fight between jobs | "This happens when you give your client the liberty to make decisions on your design." | 430 / 62 / 15, **15,631 impressions** (my best) | Nothing big, it worked. Test next time: cut the caption to the second line only, and drop the "!" so the question sounds curious, not annoyed. One meme per post, so don't add a second image. |
| ~2026-10-01 | `../swipe/mine/2026-10-01-still-job-hunting.png` | LinkedIn parody (hook only, then an honest post) | "I'm excited to announce... I'm still job hunting 😂🙈" | 88 / 66 / 12, 5,267 impressions | Drop the "..." and emojis so it's deadpan. Show a clip of my work instead of the borrowed celebration image, or keep the image and add the clip as a second post. Full notes in `content/swipe.md`. |

## Patterns I'm seeing
Updated by `/humor-post` once there are 5+ screenshots. What the winners have in common.

Early notes (3 posts so far, 1 from someone else, 2 mine, not a firm pattern yet):
- **The visual does the most work.** My concrete meme got 3x the reach of my text-heavy job hunt post. Magali's one-liner leaned on the LinkedIn celebration card.
- **Design-specific beats general.** My best post is pure product design humor. Keep the 80%.
- **A friendly fight between jobs drives comments.** Design vs development gives both sides a reason to reply.
- **Short captions.** My best had about 35 words. Magali's had 17.
- **Meme first, value post second.** Felix Lee posted the serious version of my concrete meme ("Designers are paid to reason", 20 reposts). Plan a value follow-up for every meme that hits. See `content/design-content.md`.
- One line can be the whole post.
- Lowercase and deadpan reads as human and confident.
- Exact, slightly odd numbers make a joke believable.
- LinkedIn's own built-in "celebration" cards double as the visual.

Product design versions of the Magali format to try:
- "thrilled to announce the button the client said 'feels off' was 1px misaligned and they were right"
- "excited to share that after 6 rounds of feedback we're going with v1"
- "happy to announce I renamed 312 Figma layers today. no one will ever know"
