#!/usr/bin/env bash
# Scarica i loghi in assets/logos/ usando il nome del campo "logo" di data/data.js.
# Fonte per ogni voce:
#   - se "src" e valorizzato e NON e Clearbit  -> usa "src"
#     (loghi legacy ospitati su lambdalpha.com)
#   - altrimenti (src vuoto, o Clearbit ormai dismesso) -> favicon Google ricavata
#     dal dominio del campo "url":
#       https://www.google.com/s2/favicons?domain=<dominio>&sz=128
# Le voci senza un dominio valido restano col fallback testuale (gestito da app.js).
# Ripetibile: rilancialo quando aggiungi voci a data/data.js.
# Eseguire dalla root del progetto:  bash scripts/fetch-logos.sh
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p assets/logos

command -v node >/dev/null || { echo "Serve Node.js"; exit 1; }
command -v curl >/dev/null || { echo "Serve curl"; exit 1; }

# Estrae righe "logo<TAB>url_effettivo" da data/data.js usando Node.
node -e '
  const d = require("./data/data.js");
  // manualLogo: true  -> file fornito a mano, non scaricare/sovrascrivere
  const all = [...(d.portfolio||[]), ...(d.lpFunds||[]), ...(d.coinvestors||[])]
    .filter(x => !x.hidden && x.logo && !x.manualLogo);
  for (const x of all) {
    let url = x.src;
    const isClearbit = url && url.includes("clearbit");
    if (!url || isClearbit) {
      let domain = "";
      try { domain = new URL(x.url).hostname.replace(/^www\./, ""); } catch (e) {}
      if (!domain) { continue; }   // nessun dominio: salta (resta fallback testuale)
      url = "https://www.google.com/s2/favicons?domain=" + domain + "&sz=128";
    }
    console.log(x.logo + "\t" + url);
  }
' | while IFS=$'\t' read -r logo src; do
  out="assets/logos/$logo"
  tmp="$(mktemp)"
  if curl -fsSL --retry 2 --max-time 30 "$src" -o "$tmp" && [ -s "$tmp" ]; then
    mv "$tmp" "$out"
    echo "ok   $logo"
  else
    rm -f "$tmp"
    echo "FAIL $logo  ($src)"
  fi
done

echo "Fatto. Loghi in assets/logos/"
