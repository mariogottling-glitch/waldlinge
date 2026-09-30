# Prototype Instructions

## Waldlinge project decisions

- Historische Layoutreferenz: design/waldlinge-verfeinert-desktop.png. Seit der Korrektur vom 30.09.2026 ist ein vollständiger neuer Seitenentwurf auf Grundlage des Waldreise-Konzepts beauftragt; das alte Layout ist keine verbindliche Gesamtvorlage mehr.
- Warm cream, deep forest green, restrained gold, subtle organic image edges. Avoid busy collages and excessive illustration.
- Responsive public website, not a simulated mobile app. Mobile hero uses text above the image; verify 320–1440px widths.
- Repository: https://github.com/mariogottling-glitch/waldlinge.git. User requests keeping this repository updated with completed changes. Commit and push authorized project work; never force-push or overwrite unrelated changes.
- Generated photography is concept imagery pending replacement with approved real kindergarten photographs. Do not claim it documents this actual kindergarten.
- Keep unconfirmed operating hours, capacity, fees and staff counts out of public copy. Legal links point to the existing site until legal content for the new hosting is supplied.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Nutzer wünscht den offiziellen Vereinsfilm https://www.youtube.com/watch?v=9mYhH0tuum4 auf der Startseite. Lokales Vorschaubild; YouTube erst nach aktivem Klick laden.
- Die Blattillustration ist nur eine Stilreferenz. Die drei Werte brauchen inhaltlich unterschiedliche Icons: Natur entdecken (Lupe mit Blatt), Im eigenen Tempo (Schnecke), Gemeinschaft leben (zugewandte Figuren). Gemeinsamer Stil: feine organische Konturen, transparente salbeigrüne Farbflächen und sparsame warme Akzente. Keine drei Blattvarianten.
- Video-Hinweis nicht dauerhaft als Absatz unter dem Film anzeigen. Erst Klick auf die Vorschau öffnet eine ruhige integrierte Zustimmungsansicht; YouTube lädt erst nach Bestätigung. Zurück und Escape schließen diese Ansicht.
- Auch im Waldalltag-Bereich statt Nummern passende Illustrationen derselben Icon-Familie einsetzen: Geborgenheit (Dach mit Herz), spielerisches Entdecken (Ast mit Schaukel), gemeinsames Wachsen (zwei Pflanzen).
- Originalfotos der bestehenden Waldlinge-Website im Inhaltsbereich verwenden. Hero-Bild vorerst ausdrücklich unverändert lassen. Natur- und Wildnisschule sowie artgerecht als separate, gut lesbare Originallogos direkt unter dem Einstieg zeigen.
- Mobile Ansicht bis 700px durchgehend mittig ausrichten: Überschriften, Fließtexte, Icons, Bildunterschriften, CTA-Bereiche, FAQ-Texte, Menüeinträge und Footer. FAQ-Schaltsymbole bleiben am rechten Rand bedienbar.

## Neue Konzeptphase vom 30. September 2026

- Pinterest-Pinnwand https://de.pinterest.com/glttgling/waldlinge-homepage/ (geteilt als https://pin.it/1inhi2h8v) ist eine zusätzliche fotografische Stilreferenz. Gewünscht ist eine Mischung aus Illustration und realistisch wirkenden Fotos. Referenzmotive: neugierige Kinder auf Augenhöhe, Farn und Naturfundstücke, Matschküche und gemeinsames Spielen. Neue Adobe-Firefly-Fotos mit gedämpftem Sommergrün und weichem natürlichem Waldlicht ergänzen die Originalaufnahmen; sie sind ausdrücklich als Konzeptbilder zu kennzeichnen und zeigen keine tatsächlichen Waldlinge-Kinder. Pinterest-Fotos werden nicht übernommen oder identisch nachgebaut.

- Zunächst Master-Prompt und Konzept ausarbeiten, bevor ein neuer visueller Entwurf beginnt. Die zunächst angenommene Erweiterungsrichtung wurde vom Nutzer ausdrücklich korrigiert: eine vollständig neue Seite entwickeln. Das Hero-Bildmaterial bleibt vorerst unverändert, seine Einbettung darf neu gestaltet werden.
- Gewünschte Wirkung: hochwertige, einladende Homepage mit sanften Naturfarben, Vertrauen und einer beim Scrollen zunehmend entstehenden Waldwelt. Themen: Kinder, Entdeckung, Entwicklung, Abenteuer und Geborgenheit.
- Neue Grafiken und Bilder in diesem Projekt ausschließlich mit dem Adobe-Plugin erstellen oder bearbeiten. Keine andere Bildgenerierung als Ersatz. Bestehende Originalfotos und Originallogos bleiben gültige Quellen.
- Behance und Dribbble als Webdesign-Referenzen, Pinterest als Illustrationsreferenz recherchieren. Fremde Werke dienen als Inspiration und werden nicht als Website-Assets übernommen.
- Die zehn mitgelieferten Bilder sind Stilreferenzen, keine Layoutfreigabe: Aquarell, lichte Baumkronen, Mischwald, Pflanzen und neugierige Kinder. Bilder 7 und 8 zeigen dasselbe Motiv. Neue Richtung und Master-Prompt stehen in design/Waldreise-Konzept.md.
- Stilfeedback zur ersten Adobe-Probe: sommerlich und stärker grün, weniger Gelb-Braun; gedämpfte Farben statt knalliger Buntheit. Reduzierte, eigenständige zeitgemäße Illustration statt nostalgischer Kinderbuchanmutung. Jede neue Grafik als vollständig sichtbare, mittig platzierbare, freigestellte Komposition mit transparentem Hintergrund und Abstand zu allen Bildrändern erstellen; keine angeschnittenen Bäume, Figuren oder Pflanzen.
- Auswahl für den ersten funktionierenden Main-Page-Entwurf: Nutzer bevorzugt die erste Adobe-Firefly-Waldillustration gegenüber der reduzierten Kindergruppe. Die ursprüngliche Waldillustration bleibt eine Stilreferenz. Die nachträglich angehängte Aquarell-Scrollsektion wurde auf Nutzerwunsch zurückgenommen; das bestehende Hero-Foto bleibt erhalten. Neue Inhalte berücksichtigen die Original-Homepage. Sommergrün und vollständige Freistellung bleiben Richtlinien für weitere neue Einzelmotive, sind aber keine Anweisung, die ausgewählte Originalillustration erneut zu verändern.

## Korrektur: vollständiger Neuentwurf

- Nutzer wollte keine zusätzliche Aquarellsektion auf der bisherigen Seite. Diese Sektion und die eigenständige KI-Fotogalerie entfallen. Die gesamte Homepage wird als zusammenhängender neuer Entwurf gestaltet: heller typografischer Einstieg mit separat platziertem bestehendem Hero-Foto, Ortsvorstellung, Werte, fotografische Entdeckungskapitel, Film, echte Einblicke und Elterninformationen. Neue KI-Fotos werden in die inhaltlichen Kapitel integriert. Keine aquarellartige Hintergrundfärbung als angehängter Effekt. Bestehende Kontakt- und Inhaltsregeln bleiben gültig.

## Neustart nach Archivierung

- Die aktuelle Homepage ist auf ausdrücklichen Nutzerwunsch unter Commit `aa9bf99` gesichert: lokales ZIP `design/archive/waldlinge-vor-neustart-2026-09-30.zip` mit allen versionierten Dateien sowie Archivbranch `codex/archive-waldlinge-2026-09-30`. Der Archivstand soll erhalten bleiben.
- Neuer Auftrag: vollständig von vorne beginnen, neues Raster und eine neue Version. Die Seite soll überwiegend aus sanften Illustrationen zu Wald, Erforschen und Abenteuer bestehen. Kinder nur sparsam andeuten, meist von hinten und ohne sichtbare Gesichter. Hochwertige räumliche Scrollbewegung und sich zunehmend aufbauende Szenen sind zentrale Gestaltungsziele.
- Frühere Festlegungen zum alten Raster, zur fotografischen Dominanz oder zum Beibehalten des alten Hero auf der neuen Version sind keine verbindliche Vorlage für diesen Neustart. Inhaltsrichtigkeit, Originallogos, Filmzustimmung, mobile Bedienbarkeit und ausschließlich Adobe für neue Bilder bleiben gültig.
- Vor weiterer Bildproduktion drei Scrollreferenzen vergleichen: Firewatch (gestaffelte Waldkulisse), Every Last Drop (scrollgesteuerter Szenenaufbau) und The Boat (illustrierte Erzählung mit bewegten Ebenen). Zuerst die gewünschte Bewegungsrichtung vom Nutzer auswählen lassen; bis dahin keine weiteren Bildgenerierungscredits einsetzen und den archivierten Entwurf nicht umbauen.
