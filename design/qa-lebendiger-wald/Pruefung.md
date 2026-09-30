# Prüfung: lebendiger Wald, 1. Oktober 2026

## Ergebnis

- Produktionsbuild, Formatprüfung und alle vier vorhandenen Sites-Tests bestanden. Die erforderlichen Übergabedateien `dist/client/index.html`, `dist/server/index.js` und `dist/.openai/hosting.json` sind vorhanden.
- Browserkonsole ohne Warnungen oder Fehler beim abschließenden Durchlauf.
- Layoutbreiten 320, 390, 700, 960 und 1440px geprüft. Keine horizontale Überbreite, keine fehlenden geladenen Bilder.
- Desktop 1440 × 900: rund 5554px Dokumenthöhe und zunächst 319 sichtbare Wörter im Hauptinhalt. Vorher rund 369 Wörter. Mobile 390px: rund 6591px. Aufgeklappte Antworten verlängern die Seite nach Bedarf.

## Bewegung

- Bei unveränderter Scrollposition 450px ändern sich die 3D-Matrizen des Vogelflügels deutlich zwischen Auf- und Abschlag. Der Körper bleibt eine eigene Ebene. Zwei Schultergelenke, Flügelschlagzyklus 0,64 Sekunden.
- Auf Mobile bei unverändertem Scrollstand 422px unterschiedliche Flügelstellungen bestätigt. Die stets aktive GSAP-Basisbedingung korrigiert den zuvor fehlenden Animationsstart unter 960px.
- Kronen-Windbewegung am Einstieg sowie wechselnde Farn- und Schmetterlingsstellungen bei stillstehender Entdeckungsszene bestätigt. Scrollposition und Flugroute sind unabhängig von den Naturzyklen.
- Beim Lesen der mobilen Elterninformationen bleibt die Flügelstellung über zwei zeitlich getrennte Messungen identisch: der nicht sichtbare Flugabschnitt pausiert.
- Bewegungsschalter setzt die Naturzyklen zurück; die vollständige statische Baumgestaltung bleibt sichtbar. Wieder einschalten erhält die Scrollposition. Systempräferenz `prefers-reduced-motion` wird in der Bewegungslogik berücksichtigt.

## Bedienung und Inhalt

- Waldalltag-Details öffnen und schließen; wesentliche Zusatzinformationen bleiben zugänglich.
- Mobiles Menü öffnen, „Für Eltern“ wählen: Menü schließt, Zielabschnitt öffnet. FAQ zum Anmelden zeigt korrekt die Antwort, ohne Überbreite bei 320px.
- Desktop-FAQ öffnet mit `aria-expanded=true` und sichtbarer Antwort und lässt sich wieder schließen.
- Filmvorschau öffnet die integrierte Zustimmung; davor und dabei keine YouTube-iframe. Escape schließt die Zustimmung und stellt die lokale Vorschau wieder her.
- Footer-Daten und rechtliche Links bleiben frei von Illustration. Desktop-Legalbereich endet rund 3px vor dem dekorativen Farnbereich; Mobile hat einen eigenen Waldbodenraum.
- Neue Bilddateien ausschließlich über Adobe erstellt/bearbeitet. Originalfotos und Originallogos bleiben Quellen; keine neue Fotografie eines tatsächlichen Kindes behauptet.

## Browseraufnahmen

Unveränderte JPEG-Captures: Einstieg, Vogelflug, gebündelte Kindergarteninfos, mobiler Vogelflug, 320px-Einstieg, mobile Eltern-FAQ und Desktop-Waldboden. Keine Bildmontage oder Bildbearbeitung.
