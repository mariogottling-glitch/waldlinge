# Bildnachweise und Status

- `waldlinge-logo.webp`: Original-Logo von https://waldlinge.org/wp-content/gdprpatron/hts/waldlinge_org/wp_content/uploads/2019/10/waldlinge_logo_512_png.png, abgerufen am 23.09.2026, für den beauftragten Relaunch verwendet. Keine neue Logoerfindung.
- `forest-hero.webp`, `forest-hero-mobile.webp`: KI-generiertes Konzeptmotiv, vier Kinder mit Rucksäcken auf einem sonnigen Waldweg, links dunkler Wald als Texthintergrund. Kein Foto des tatsächlichen Kindergartens.
- `forest-discovery.webp`: KI-generiertes Konzeptmotiv einer Kinderhand mit Tannenzapfen im Moos. Kein Foto des tatsächlichen Kindergartens.
- `botanical.webp`: KI-generierte botanische Aquarellillustration mit transparentem Hintergrund.

Die KI-Assets wurden mit dem integrierten ImageGen-Werkzeug für dieses Projekt erstellt. WebP-Dateien sind größenoptimierte Ableitungen. Quelldateien bleiben lokal, werden aber nicht in den Produktionsbuild aufgenommen. Das Hilfsskript `scripts/optimize-images.py` benötigt diese PNG-Quelldateien und Pillow; ein normaler Website-Build nutzt ausschließlich die eingecheckten WebP-Dateien und benötigt kein Python.

- `waldlinge-film.jpg`: Offizielles YouTube-Vorschaubild zu „Waldlinge Bornheim e.V.“, https://www.youtube.com/watch?v=9mYhH0tuum4, vom Nutzer zur Einbindung bereitgestellt. Quelle: https://i.ytimg.com/vi/9mYhH0tuum4/hqdefault.jpg, abgerufen am 23.09.2026. Lokal gespeichert, damit vor Aktivierung kein YouTube-Aufruf erforderlich ist.

## Originalmaterial, ergänzt am 29.09.2026

Die folgenden Originalfotos stammen aus der Galerie auf https://waldlinge.org/wer-wir-sind/ und werden auf ausdrücklichen Nutzerwunsch übernommen. WebP-Ableitungen sind nur verkleinert/komprimiert, nicht generativ verändert.
- `waldlinge-baumwurzel.webp`: https://waldlinge.org/wp-content/gallery/impressionen/Kind-auf-Baumwurzel-web.jpg
- `waldlinge-werkeln.webp`: https://waldlinge.org/wp-content/gallery/impressionen/Kinder-mit-Werkzeug-web.jpg
- `waldlinge-bollerwagen.webp`: https://waldlinge.org/wp-content/gallery/impressionen/Bollerwagen-im-Wald-web.jpg
- `wildnisschule-logo.webp`: https://waldlinge.org/wp-content/uploads/2022/01/logos-natur-wildnisschule-gross-1024x346.jpg
- `artgerecht-logo.webp`: aktuelle offizielle Logodatei https://www.artgerecht-projekt.de/wp-content/themes/artgerechtproject/media/2020_ARTgerecht_Logo_final.png. Diese Gestaltung unterscheidet sich von der älteren, ins Gruppenfoto eingebauten Version.

Der Hero bleibt auf Nutzerwunsch vorerst das generierte Konzeptmotiv. `forest-discovery.webp` ist nicht mehr auf der Seite eingebunden. Die Beschriftungen zu Kooperation und Schulung wurden aus dem bisherigen Startseitenbild übernommen; sie behaupten keine Zertifizierung.

## Adobe Illustrationen vom 30. September 2026

- `waldreise-firefly-original.png`: erste Adobe-Firefly-Stilprobe, ausdrücklich vom Nutzer für den Main-Page-Entwurf ausgewählt. Unveränderte Illustration eines lichten Birkenwalds mit entdeckenden Kindern. Konzeptillustration, keine Abbildung des tatsächlichen Kindergartens. Adobe-Ausgabe: https://photoshop-api.adobe.io/v2/short-url/urn:aaid:ps:US:1105da92-c6a6-4bad-a1e2-f118eff824e1. Lokal gespeichert; Produktionsseite ruft Adobe nicht auf.
- `adobe-values/nature.png`, `pace.png`, `community.png`, `shelter.png`, `discovery.png`, `growth.png`: sechs individuell mit Adobe Firefly generierte und über Adobe freigestellte Icons. Motive: Lupe mit Blatt, Schnecke, zugewandte Figuren, Dach mit Herz, Ast mit Schaukel und zwei Pflanzen. Transparentes PNG, jeweils 1024 × 1024. Keine handgezeichneten SVG-Ersatzillustrationen.

Alle in diesem Entwurf neu erstellten Grafiken stammen ausschließlich von Adobe. Das bestehende Hero-Konzeptfoto wurde auf ausdrücklichen Projektwunsch erhalten. Für den ersten Entwurf wird die hochauflösende Originalillustration lokal und verzögert geladen; kleinere Ausgabevarianten sind eine spätere Performance-Verfeinerung.
