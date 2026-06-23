#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WATCH_PATH = Path.home() / ".hermes" / "scripts" / "l2m_antharas_unified_dynamic_market_watch.py"
OUT = ROOT / "data" / "l2m_market.json"

spec = importlib.util.spec_from_file_location("l2m_watch", WATCH_PATH)
assert spec and spec.loader
watch = importlib.util.module_from_spec(spec)
spec.loader.exec_module(watch)


def run_watch() -> dict:
    proc = subprocess.run([sys.executable, str(WATCH_PATH), "--json"], check=True, capture_output=True, text=True, timeout=600)
    return json.loads(proc.stdout)


def item_to_row(item: dict) -> dict:
    baseline = item.get("dealBaseline", {}) or {}
    return {
        "kind": watch.item_kind_label(item),
        "enchant": f"+{item.get('enchantLevel')}",
        "name": watch.engine.display_name(item),
        "price": f"{watch.engine.fmt_price(item.get('salePrice'))}다이아",
        "note": f"중앙 {watch.engine.fmt_price(baseline.get('median'))} • {watch.short_label(item.get('dealLabel', '저가'))}",
        "raw": {
            "itemId": item.get("itemId"),
            "itemName": item.get("itemName"),
            "enchantLevel": item.get("enchantLevel"),
            "salePrice": item.get("salePrice"),
            "category": item.get("_categoryLabel"),
            "dealLabel": item.get("dealLabel"),
            "median": baseline.get("median"),
        },
    }


def main() -> int:
    data = run_watch()
    groups = watch.grouped_items_by_grade([r for r in data.get("results", []) if not r.get("error")], field="matches")
    output = {
        "server": "안타라스",
        "checkedAt": data.get("checkedAt"),
        "errors": data.get("errors", []),
        "groups": {
            "common": [item_to_row(x) for x in groups.get("일반", [])],
            "uncommon": [item_to_row(x) for x in groups.get("고급", [])],
            "rare": [item_to_row(x) for x in groups.get("희귀", [])],
            "heroic": [item_to_row(x) for x in groups.get("영웅", [])],
            "legendary": [item_to_row(x) for x in groups.get("전설", [])],
        },
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
