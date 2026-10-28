"""Daily product-design job sweep.

Pulls design roles posted in the last ~24h from LinkedIn (guest search), YC
startup jobs, remote job boards and company hiring pages (Greenhouse, Lever,
Ashby), drops senior/unrelated titles, fetches each LinkedIn ad's text, and
writes candidates.json with the snippets needed to judge remote / visa /
language fit.

Usage: python3 daily_job_search.py OUT_DIR
"""
import datetime as dt
import html
import json
import re
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import quote

OUT = Path(sys.argv[1] if len(sys.argv) > 1 else "job_search_out")
OUT.mkdir(parents=True, exist_ok=True)
NOW = dt.datetime.now(dt.timezone.utc)
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130 Safari/537.36")

RELEVANT = re.compile(r"product design|\bux\b|\bui\b|ui/|/ui|user experience|interaction design|"
                      r"design engineer|web design|visual design|product designer|ux/ui|ui/ux", re.I)
NOT_FIT = re.compile(r"senior|\bsr\.?\b|lead|principal|staff|head|director|manager|graphic|game|motion|"
                     r"brand|interior|mechanical|electrical|civil|hardware|structural|industrial|fashion|"
                     r"instructional|architect|pcb|rtl|asic|analog|chip|silicon|\bcad\b|hvac|piping|"
                     r"packag|soc\b|turbine|transformer|plastics|harness|trims|tank", re.I)
# Countries where an on-site/hybrid ad is almost never in English or rarely sponsors juniors.
SKIP_ONSITE = re.compile(r"India|Pakistan|Bangladesh|Nigeria|Brazil|Argentina|Colombia|Mexico|France|"
                         r"Quebec|Québec|Montreal|Japan|China|Korea|Türkiye|Turkey|Egypt", re.I)
SNIPPET_WORDS = ["visa", "sponsor", "relocat", "right to work", "work permit", "authori", "eligib",
                 "remote", "hybrid", "on-site", "onsite", "anywhere", "worldwide", "based in", "reside",
                 "fluent", "language", "english", "years"]


def get(url, timeout=40):
    r = subprocess.run(["curl", "-sSL", "-m", str(timeout), "-A", UA, url],
                       capture_output=True, text=True, errors="ignore")
    return r.stdout


def get_json(url):
    try:
        return json.loads(get(url))
    except Exception:
        return None


def age_hours(when):
    if when is None:
        return None
    if when.tzinfo is None:
        when = when.replace(tzinfo=dt.timezone.utc)
    return round((NOW - when).total_seconds() / 3600, 1)


def iso(s):
    try:
        return dt.datetime.fromisoformat(str(s).replace("Z", "+00:00"))
    except Exception:
        return None


def snippets(text):
    out = []
    for word in SNIPPET_WORDS:
        for m in list(re.finditer(word, text, re.I))[:2]:
            out.append(text[max(0, m.start() - 110):m.end() + 110])
    return list(dict.fromkeys(out))[:14]


def clean(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s or ""))).strip()


def keep(title):
    return bool(RELEVANT.search(title)) and not NOT_FIT.search(title)


jobs = {}


def add(source, title, company, location, posted_hours, url, **extra):
    if not keep(title) or posted_hours is None or posted_hours > 30:
        return
    key = (company.lower().strip(), re.sub(r"\W+", "", title.lower()))
    if key in jobs and jobs[key]["posted_hours_ago"] <= posted_hours:
        return
    jobs[key] = dict(source=source, title=title, company=company, location=location,
                     posted_hours_ago=posted_hours, url=url, **extra)


# LinkedIn guest search: last 24h, entry to mid-senior, remote + visa/relocation queries.
LI = "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search"
li_queries = []
for kw in ["product designer", "ui ux designer", "ux designer", "design engineer"]:
    for loc in ["Worldwide", "EMEA", "European Union", "United Kingdom", "Asia Pacific", "Africa",
                "United States", "Canada", "Australia"]:
        for start in (0, 25):
            li_queries.append(f"{LI}?keywords={quote(kw)}&location={quote(loc)}&f_TPR=r86400"
                              f"&f_WT=2&f_E=1%2C2%2C3%2C4&start={start}")
for kw in ["product designer visa sponsorship", "ux designer visa sponsorship", "product designer relocation"]:
    for loc in ["United Kingdom", "European Union", "Ireland", "Netherlands", "Germany", "Portugal", "Spain",
                "Singapore", "Australia", "United Arab Emirates", "Saudi Arabia", "Canada", "United States"]:
        li_queries.append(f"{LI}?keywords={quote(kw)}&location={quote(loc)}&f_TPR=r86400&f_E=1%2C2%2C3%2C4")

li_cards = {}
for q in li_queries:
    page = get(q, 30)
    for card in page.split("<li>")[1:]:
        def grab(p):
            m = re.search(p, card, re.S)
            return clean(m.group(1)) if m else ""
        url = grab(r'class="base-card__full-link[^"]*"\s+href="([^"?]+)')
        if not url:
            continue
        jid = url.rsplit("-", 1)[-1]
        when = iso(grab(r'<time[^>]*datetime="([^"]+)"'))
        hours = age_hours(when)
        # Card dates are day-precise; "N hours ago" text is more exact.
        rel = grab(r"<time[^>]*>(.*?)</time>")
        m = re.match(r"(\d+)\s+(minute|hour|day)", rel)
        if m:
            n = int(m.group(1))
            hours = {"minute": n / 60, "hour": n, "day": n * 24}[m.group(2)]
        li_cards[jid] = dict(title=grab(r'base-search-card__title">(.*?)</h3>'),
                             company=grab(r'base-search-card__subtitle">.*?>(.*?)</a>'),
                             location=grab(r'job-search-card__location">(.*?)</span>'),
                             hours=hours, url=f"https://www.linkedin.com/jobs/view/{jid}")
    time.sleep(1)

for jid, c in li_cards.items():
    if not keep(c["title"]) or c["hours"] is None or c["hours"] > 30:
        continue
    if SKIP_ONSITE.search(c["location"]):
        continue
    page = get(f"https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/{jid}", 30)
    m = re.search(r"show-more-less-html__markup[^>]*>(.*?)</div>", page, re.S)
    text = clean(m.group(1)) if m else ""
    seniority = re.search(r"Seniority level\s*</h3>\s*<span[^>]*>\s*(.*?)\s*</span>", page, re.S)
    add("LinkedIn", c["title"], c["company"], c["location"], c["hours"], c["url"],
        seniority=seniority.group(1).strip() if seniority else "",
        evidence=snippets(text))
    time.sleep(1)

# YC startup jobs (design). The page lists each role's visa policy.
yc = get("https://www.ycombinator.com/jobs/role/design")
m = re.search(r'data-page="([^"]+)"', yc)
if m:
    found = []

    def walk(o):
        if isinstance(o, dict):
            if "title" in o and "companyName" in o:
                found.append(o)
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)
    walk(json.loads(html.unescape(m.group(1))))
    for o in found:
        created = str(o.get("createdAt", ""))
        hours = 0 if re.search(r"hour|minute", created) else (24 if created in ("1 day", "about 1 day") else None)
        add("YC", o["title"], o["companyName"], o.get("location", ""), hours,
            "https://www.ycombinator.com" + o.get("url", ""), visa=o.get("visa", ""),
            evidence=[f"YC visa field: {o.get('visa', '')}", f"posted {created} ago"])

# Remote boards.
d = get_json("https://remotive.com/api/remote-jobs?category=design")
for j in (d or {}).get("jobs", []):
    add("Remotive", j["title"], j["company_name"], j["candidate_required_location"],
        age_hours(iso(j["publication_date"])), j["url"])
for q in ["product designer", "ux designer", "ui designer", "design engineer"]:
    d = get_json(f"https://himalayas.app/jobs/api/search?q={quote(q)}&sort=recent")
    for j in (d or {}).get("jobs", []):
        add("Himalayas", j["title"], j["companyName"], ", ".join(j.get("locationRestrictions") or []) or "Worldwide",
            age_hours(dt.datetime.fromtimestamp(j["pubDate"], dt.timezone.utc)),
            j.get("applicationLink") or j.get("guid"), seniority=", ".join(j.get("seniority") or []))
d = get_json("https://remoteok.com/api?tag=design")
for j in (d or [])[1:]:
    add("RemoteOK", j.get("position", ""), j.get("company", ""), j.get("location", "") or "Worldwide",
        age_hours(iso(j.get("date"))), j.get("url", ""))
for tag in ["ux", "ui", "product-designer"]:
    d = get_json(f"https://jobicy.com/api/v2/remote-jobs?count=100&tag={tag}")
    for j in (d or {}).get("jobs", []):
        add("Jobicy", j["jobTitle"], j["companyName"], j.get("jobGeo", ""), age_hours(iso(j["pubDate"])),
            j["url"], seniority=j.get("jobLevel", ""))
d = get_json("https://www.workingnomads.com/api/exposed_jobs/")
for j in d or []:
    add("WorkingNomads", j["title"], j["company_name"], j.get("location", ""), age_hours(iso(j["pub_date"])), j["url"])
rss = get("https://weworkremotely.com/categories/remote-design-jobs.rss")
for item in rss.split("<item>")[1:]:
    def tag(k):
        m = re.search(rf"<{k}>(.*?)</{k}>", item, re.S)
        return clean((m.group(1) if m else "").replace("<![CDATA[", "").replace("]]>", ""))
    company, _, role = tag("title").partition(": ")
    try:
        when = dt.datetime.strptime(tag("pubDate"), "%a, %d %b %Y %H:%M:%S %z")
    except ValueError:
        when = None
    add("WeWorkRemotely", role, company, tag("region"), age_hours(when), tag("link"))

# Company hiring pages: first_published (Greenhouse) / createdAt (Lever) / publishedAt (Ashby).
GREENHOUSE = ("gitlab remotecom canonical duckduckgo grafanalabs hotjar contentful mozilla wikimedia elastic "
              "airtable figma vercel webflow intercom datadog cloudflare stripe gusto discord coinbase okta twilio "
              "hubspot dropbox reddit pinterest affirm robinhood monzo wise revolut n26 bolt deliveryhero "
              "hellofresh doist toggl zapier sourcegraph mattermost posthog clickup miro typeform glovo").split()
LEVER = "netlify spotify palantir binance kraken outreach whoop plaid eventbrite".split()
ASHBY = ("deel linear ramp notion supabase cursor anthropic openai replit lovable raycast cal.com clerk resend "
         "dub mercury vanta retool modal sanity framer pitch n8n elevenlabs synthesia").split()


def greenhouse(co):
    d = get_json(f"https://boards-api.greenhouse.io/v1/boards/{co}/jobs") or {}
    for j in d.get("jobs", []):
        if keep(j["title"]):
            full = get_json(f"https://boards-api.greenhouse.io/v1/boards/{co}/jobs/{j['id']}") or {}
            when = iso(full.get("first_published") or "")
            add(f"Greenhouse:{co}", j["title"], co, j["location"]["name"], age_hours(when), j["absolute_url"],
                evidence=snippets(clean(html.unescape(full.get("content", "")))))


def lever(co):
    d = get_json(f"https://api.lever.co/v0/postings/{co}?mode=json")
    for j in d if isinstance(d, list) else []:
        add(f"Lever:{co}", j["text"], co, j["categories"].get("location", ""),
            age_hours(dt.datetime.fromtimestamp(j["createdAt"] / 1000, dt.timezone.utc)), j["hostedUrl"],
            evidence=snippets(clean(j.get("descriptionPlain", "") + " " + j.get("additionalPlain", ""))))


def ashby(co):
    d = get_json(f"https://api.ashbyhq.com/posting-api/job-board/{co}") or {}
    for j in d.get("jobs", []):
        loc = j.get("location", "") + (" (remote)" if j.get("isRemote") else "")
        add(f"Ashby:{co}", j["title"], co, loc, age_hours(iso(j.get("publishedAt", ""))), j["jobUrl"],
            evidence=snippets(clean(j.get("descriptionPlain", ""))))


with ThreadPoolExecutor(8) as pool:
    list(pool.map(greenhouse, GREENHOUSE))
    list(pool.map(lever, LEVER))
    list(pool.map(ashby, ASHBY))

result = sorted(jobs.values(), key=lambda j: j["posted_hours_ago"])
(OUT / "candidates.json").write_text(json.dumps(result, indent=1, ensure_ascii=False))
print(f"{len(li_cards)} LinkedIn cards scanned; {len(result)} candidate roles from the last 30h "
      f"-> {OUT / 'candidates.json'}")
