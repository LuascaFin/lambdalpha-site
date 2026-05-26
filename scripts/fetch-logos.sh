#!/usr/bin/env bash
# Scarica i loghi (campo "src") definiti in data/data.js e li salva in
# assets/logos/ con il nome del campo "logo".
# Eseguire dalla root del progetto:  bash scripts/fetch-logos.sh
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p assets/logos

command -v node >/dev/null || { echo "Serve Node.js"; exit 1; }
command -v curl >/dev/null || { echo "Serve curl"; exit 1; }

# Estrae righe "logo<TAB>src" da data/data.js usando Node
node -e '
  const d = require("./data/data.js");
  const all = [...(d.portfolio||[]), ...(d.funds||[])].filter(x => !x.hidden && x.src);
  for (const x of all) console.log(x.logo + "\t" + x.src);
' | while IFS=$'\t' read -r logo src; do
  out="assets/logos/$logo"
  if curl -fsSL --retry 2 "$src" -o "$out"; then
    echo "ok   $logo"
  else
    echo "FAIL $logo  ($src)"
  fi
done

echo "Fatto. Loghi in assets/logos/"
