#!/usr/bin/env bash
# Flags AI tells in a post draft, using the lists in content/human-writing.md.
# Usage: content/check-post.sh content/posts/linkedin/2026-10-15-slug.md
# Only checks the text under "## Post" / "## Final" / "## Options" / "## Hook options".
set -euo pipefail
file="$1"
rules="$(dirname "$0")/human-writing.md"

body=$(awk '/^## (Post|Final|Options|Hook options)/{on=1;next} /^## /{on=0} on' "$file")
fail=0

flag() { echo "  $1"; fail=1; }

grep -n -e '—' -e '–' <<<"$body" | sed 's/^/  dash: /' && fail=1
grep -n -e '→' -e '⇒' -e '➡' <<<"$body" | sed 's/^/  arrow: /' && fail=1
grep -n ';' <<<"$body" | sed 's/^/  semicolon: /' && fail=1

terms=$(awk '/^## Banned (words|phrases)/{on=1;next} /^## /{on=0} on && /^- /{sub(/^- /,"");print}' "$rules")
# Parody exception: a post can list banned phrases it uses on purpose, in its frontmatter:
#   parody: thrilled to, excited to share
allow=$(awk '/^parody:/{sub(/^parody:[ ]*/,"");print;exit}' "$file" | tr ',' '\n' | sed 's/^ *//;s/ *$//' | tr 'A-Z' 'a-z')
while IFS= read -r t; do
  [ -z "$t" ] && continue
  grep -qxF -- "$t" <<<"$allow" && continue
  if grep -qiF -- "$t" <<<"$body"; then
    # whole-word match for single words, substring for phrases
    if [[ "$t" == *" "* || "$t" == *"?"* || "$t" == *":"* ]] || grep -qiwF -- "$t" <<<"$body"; then
      flag "banned: \"$t\""
    fi
  fi
done <<<"$terms"

if [ $fail -eq 0 ]; then echo "clean: $file"; else echo "fix the above in $file"; exit 1; fi
