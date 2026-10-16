# CN Farbkarten: Vorlage

Instagram-Posts im Format 1080 × 1440 (3:4), vier Stile:
`muster` (Stoffmuster), `lexikon`, `musterbuch`, `still`. 18 Farben: Erd-, Blau- und Rottöne.

**Neue Farbe anlegen:** in `karte.html` im Block `FARBEN` einen Eintrag ergänzen
(Name, Artikel, Stoff, Textur, Hex-Farbe, Definition, zwei passende Farben)
und in `NUM` eine Nummer vergeben.
Texturen: `suede` (Wildleder), `cord`, `leather` (Glattleder), `linen` (Leinen),
`wool` (Wolle), `herringbone` (Fischgrat), `twill` (Kammgarn), `denim`, `knit` (Strick), `velvet` (Samt), `flat` (glatt).

**Ansehen:** `karte.html?s=lexikon&c=tabak` im Browser öffnen.

**Alle Bilder erzeugen:** `node render.js <pfad>/karte.html <ausgabeordner>`
(braucht Node.js und Playwright). Oder einfach Claude bitten: „Neue Farbkarte: …“.

Die Texturen werden per Code gezeichnet; es sind keine Fotos fremder Marken enthalten.
