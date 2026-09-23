# Bildnachweise und Status

- `waldlinge-logo.webp`: Original-Logo von https://waldlinge.org/wp-content/gdprpatron/hts/waldlinge_org/wp_content/uploads/2019/10/waldlinge_logo_512_png.png, abgerufen am 23.09.2026, für den beauftragten Relaunch verwendet. Keine neue Logoerfindung.
- `forest-hero.webp`, `forest-hero-mobile.webp`: KI-generiertes Konzeptmotiv, vier Kinder mit Rucksäcken auf einem sonnigen Waldweg, links dunkler Wald als Texthintergrund. Kein Foto des tatsächlichen Kindergartens.
- `forest-discovery.webp`: KI-generiertes Konzeptmotiv einer Kinderhand mit Tannenzapfen im Moos. Kein Foto des tatsächlichen Kindergartens.
- `botanical.webp`: KI-generierte botanische Aquarellillustration mit transparentem Hintergrund.

Die KI-Assets wurden mit dem integrierten ImageGen-Werkzeug für dieses Projekt erstellt. WebP-Dateien sind größenoptimierte Ableitungen. Quelldateien bleiben lokal, werden aber nicht in den Produktionsbuild aufgenommen. Das Hilfsskript `scripts/optimize-images.py` benötigt diese PNG-Quelldateien und Pillow; ein normaler Website-Build nutzt ausschließlich die eingecheckten WebP-Dateien und benötigt kein Python.
