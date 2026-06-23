#!/usr/bin/env bash
set -euo pipefail
cd /Users/beemo/bmo_hermes_dashboard
python3 scripts/update_l2m_market.py >/dev/null
if git diff --quiet -- data/l2m_market.json; then
  exit 0
fi
git add data/l2m_market.json
git commit -m "Update L2M market snapshot" >/dev/null
git push origin main >/dev/null
