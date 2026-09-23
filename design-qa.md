# Design QA – Waldlinge

final result: passed

## Ziel und Nachweise

- Quelle: `design/waldlinge-verfeinert-desktop.png` (1122 × 1402 px); entspricht dem zusätzlich vom Nutzer angehängten Entwurf, ohne dessen Editorleiste.
- Umsetzung: http://127.0.0.1:4173/, Startseite, helles Theme, Menü und FAQ geschlossen.
- Desktop: Browserviewport 1440 × 1800 CSS-Pixel, devicePixelRatio 1; das Browserwerkzeug liefert 1425 × 1781 Bildpixel. Vergleich beider Darstellungen proportional auf maximal 720 × 900 Pixel normalisiert, ohne Strecken. Der schmale Scrollbalken ist Browserinfrastruktur.
- Gesamtvergleich: `design/qa/comparison-desktop.jpg`, Quelle links / Implementierung rechts.
- Fokussierter Vergleich für Logo, Schrift und Aktionen: `design/qa/comparison-hero.jpg`.
- Browserbelege: `design/qa/desktop-final.png`, `desktop-full.png`, `mobile-390.png`, `mobile-320.png`, `tablet-768.png`.
- Mobil: 390 × 844 bzw. 320 × 844 CSS-Pixel. Die generierte Mobilvorschau ist eine Anordnungsreferenz, keine pixelgenaue Vorlage; ihre zu breiten Seitenränder wurden gemäß Design.md korrigiert.

## Befunde und Korrekturen

1. **P2, behoben:** Bei 320 Pixeln erzeugte `body { min-width: 320px }` zusammen mit dem Windows-Scrollbalken einen 15-Pixel-Überlauf. Mindestbreite entfernt. Nachprüfung: Clientbreite und Scrollbreite beide 305 Pixel; Screenshot `mobile-320.png` zeigt vollständige Navigation und Buttons.
2. **P2, behoben:** Im Tablet-Hero lag die helle Schrift stellenweise vor hellem Waldlicht. Für 701–959 Pixel steht der Text jetzt auf Creme oberhalb des Fotos. Der erneut erfasste Screenshot `tablet-768.png` bestätigt sichere Lesbarkeit und die richtige Bildfolge.
3. **P3, verbessert:** Heroabschluss im ersten Desktopstand zu flach/asymmetrisch. Dezente beidseitige Rundung ergänzt; nach Änderung im Gesamt- und Detailvergleich geprüft.

## Fünf Gestaltungsebenen

- **Schrift:** Lokal geladene Lora Variable und Source Sans 3 Variable im Browser bestätigt. Überschriften, Text und Handlungsangebote haben die vorgesehene Hierarchie. Die echte Schrift hat leicht andere Proportionen als die generierten Buchstaben; Desktopüberschriften wirken geringfügig kompakter. Kein abgeschnittener Text.
- **Abstände/Layout:** Heller Header, großer Fotoeinstieg, ruhiger Wertebereich, organischer Bild-/Textabschnitt stimmen strukturell überein. Unterhalb des Entwurfsausschnitts werden die vereinbarten Inhalte zu Alltag, Gemeinschaft, Elternfragen und Kontakt fortgesetzt. Mobil einspaltig und mit großen Bedienflächen.
- **Farben:** Creme, Waldgrün, Salbei und Ocker folgen dem freigegebenen System. Goldene Buttons tragen dunkle Schrift. Tablet-/Mobiltext liegt auf einer ruhigen, deckenden Fläche.
- **Bilder:** Original-Logo statt generierter Nachzeichnung; individuell erzeugte Wald- und Zapfenmotive mit passenden Blickrichtungen und Farben. Motivdetails unterscheiden sich naturgemäß vom Konzeptbild. WebP-Optimierung und separater mobiler Ausschnitt; botanisches Rasterasset statt selbstgezeichneter Ersatzillustration. Alle Bilder erfolgreich geladen.
- **Inhalte:** Leitidee und Inhalte des Entwurfs umgesetzt. Keine erfundenen Öffnungszeiten, freien Plätze, Bewertungen oder Teamzahlen. Kontakt und Kita-Navigator erreichbar. Vor Livegang bleiben redaktionelle Bestätigung und Bildfreigabe erforderlich.

## Funktionale Prüfung

- Mobilmenü öffnen, Escape schließen und Fokus zurück zum Menübutton: bestanden.
- Menüpunkt „Für Eltern“ führt zu `#eltern`, schließt Menü und setzt Fokus auf den Abschnitt: bestanden.
- FAQ Anmeldung per Klick öffnen und per Enter schließen, `aria-expanded` und Sichtbarkeit synchron: bestanden.
- Alle internen Sprungziele vorhanden; keine leeren Handlungsangebote.
- Externe Anmeldung als externer Link mit Hinweis auf neuen Tab, E-Mail-Kontakt ohne vorgetäuschten Versand.
- Breiten 320, 375, 390, 700, 768, 959, 960, 1024, 1440 geprüft. Dekoratives Blatt ragt absichtlich in den geclippten Abschnittsrand; kein Seitenscroll durch dieses Asset.
- Browserkonsole bei der Prüfung ohne Fehler; Schriften und alle Bildassets geladen.
- Produktionsbuild bestanden. Vier Worker-/Packaging-Tests bestanden.

## Grenzen und spätere Verfeinerung

- Kein vollständiges WCAG-Audit, kein physischer iOS-/Android-Gerätetest und noch kein eigenständiger Test bei 200 Prozent Browserzoom. Die bisherigen Prüfungen erfolgten im Chromium-basierten In-App-Browser.
- Fotomotive sind generierte Konzeptbilder. Vor Veröffentlichung Umgang damit festlegen oder echte freigegebene Bilder einsetzen.
- Impressum, Datenschutz und die ausführliche Geschichte sind derzeit auf der bestehenden Website verlinkt. Beim Domainwechsel müssen diese Ziele erhalten oder migriert werden.
- Optionaler P3-Feinschliff: finale Originalfotos, exakte typografische Größenabstimmung mit dem Verein.

## Abschluss

- [x] Quelle und Browserdarstellung gemeinsam visuell verglichen.
- [x] Erkannte P2-Probleme behoben und erneut erfasst.
- [x] Wesentliche Interaktionen und schmale Darstellung geprüft.
- [x] Keine offenen P0/P1/P2-Befunde im geprüften Umfang.

## Ergänzung: Vereinsfilm (23.09.2026)

- Offizieller Film nach dem Wertebereich, lokales Vorschaubild und ausdrückliche Aktivierung vor dem YouTube-iframe.
- Aktivieren, Schließen und Fokus-Rückgabe im Browser geprüft. Vor Aktivierung ist kein iframe vorhanden.
- Breiten 320, 390, 768 und 1440 px: kein horizontaler Überlauf. Mobile Videokarte visuell geprüft.
- Einschränkung: YouTube-nocookie liefert HTTP 200, der iframe bleibt im integrierten Browser jedoch leer. Tatsächliche eingebettete Wiedergabe muss in einem normalen Browser bzw. auf dem Zielhosting geprüft werden. Direkter YouTube-Link bleibt verfügbar.
- Produktionsbuild und alle vier Sites-Tests erfolgreich.
