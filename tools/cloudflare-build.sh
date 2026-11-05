#!/usr/bin/env bash
# Build fuer Cloudflare Pages (Git-Integration): kopiert nur die Website-Dateien nach dist/,
# ohne .git, Doku (*.md), scripts/, tools/, vercel.json und Punktdateien.
# Cloudflare-Einstellung: Build-Befehl "bash tools/cloudflare-build.sh", Ausgabe "dist".
set -euo pipefail
rm -rf dist && mkdir dist
git ls-files | grep -vE '\.md$|^scripts/|^tools/|^vercel\.json$|^\.' | xargs -d '\n' cp --parents -t dist
echo "dist/ fertig: $(find dist -type f | wc -l) Dateien"
