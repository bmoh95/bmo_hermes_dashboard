#!/usr/bin/env bash
set -euo pipefail
cd /Users/beemo/bmo_hermes_dashboard
python3 scripts/update_l2m_market.py >/dev/null
python3 scripts/update_daily_fortunes.py >/dev/null
if git diff --quiet -- data/l2m_market.json data/daily_fortunes.json index.html fortune-history.html assets/daily-fortunes.js assets/styles.css scripts/update_daily_fortunes.py scripts/publish_l2m_market.sh; then
  exit 0
fi
git add data/l2m_market.json data/daily_fortunes.json index.html fortune-history.html assets/daily-fortunes.js assets/styles.css scripts/update_daily_fortunes.py scripts/publish_l2m_market.sh
git commit -m "Update dashboard snapshots" >/dev/null
git push origin main >/dev/null
