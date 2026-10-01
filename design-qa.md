# Designprüfung · fotografische Waldmomente

Stand: 1. Oktober 2026. Abgeschlossene Sicht- und Funktionsprüfung des Fotoentwurfs.

## Vergleichsgrundlage

Quelle: bestehender freigegebener Waldreise-Entwurf, vor den Fotoänderungen aufgenommen: `design/photo-references/source-welcome-1440.jpg` und `source-alltag-1440.jpg`. Ergänzende Art Direction: `design/Waldlinge-Fotografie.md`, Pinterest- und Behance-Aufnahmen in demselben Ordner. Keine exakte Nachbildung eines fremden Designs.

Implementierung: `http://localhost:4173/`, Screenshots `implementation-welcome-1440.jpg`, `implementation-alltag-1440.jpg`, `implementation-community-1440.jpg`, `implementation-welcome-390.jpg` im Referenzordner.

Finale Nachweise: `implementation-final-welcome-1440.jpg`, `implementation-alltag-fixed-1440.jpg`, `implementation-community-fixed-1440.jpg`, `implementation-welcome-fixed-390.jpg`, `implementation-alltag-390.jpg`, `implementation-community-390.jpg`, `implementation-welcome-320.jpg`, `implementation-welcome-700.jpg` und `implementation-welcome-960.jpg`.

Desktop: 1440 × 900 CSS-Pixel, Screenshot 1440 × 900 Pixel, DPR 1. Quelle und Umsetzung in einem gemeinsamen Bildeingang geöffnet, gleiche Ankerzustände `#kindergarten` bzw. `#alltag`. Mobile: 390 × 844 CSS-Pixel und Bildpixel, DPR 1, zusätzliche Umbruchprüfung. Keine Dichtenormalisierung erforderlich. Animierte Tierposen unterscheiden sich zeitabhängig und sind keine Layoutabweichung.

Beabsichtigte Änderungen: Kindergartenvorstellung als Text-Foto-Raster; größere fotografische Präsenz; ein kleines Naturfund-Detail; Matschküche plus kompakte Originalaufnahme. Dies folgt dem aktuellen Auftrag. Waldrahmen, Inhaltsreihenfolge, Schriften, Grundfarben, Logos und Funktionen bleiben die Vergleichsgrundlage.

## Befunde und Iterationen

1. [P2] Farn verdeckte einen Teil der Originalbildunterschrift im Waldalltag. Quelle: freie Unterschrift in `source-alltag-1440.jpg`; erste Umsetzung: `implementation-alltag-1440.jpg`. Fix: Farn innerhalb der unteren Bildzone positionieren, `.photo-fern` mit größerem Bodenabstand. Nachher: `implementation-alltag-fixed-1440.jpg`, Schrift und Herkunftshinweis wieder frei.
2. [P2, behoben] Eichhörnchen ragte auf 390px in die Vorstellungszeile. Beleg: `implementation-welcome-390.jpg`. Fix: auf kleinen Displays kleiner und weiter am rechten Stamm platzieren, keine Verringerung der Lesetextbreite. Nachher: `implementation-welcome-fixed-390.jpg`, Tier nur am Stamm, alle Zeilen frei.
3. [P2, behoben] Gemeinschaftstitel brach bei 1440px ungünstig in drei Zeilen, während das zusätzliche Foto mehr Platz benötigt. Beleg: `implementation-community-1440.jpg`. Fix: nur diese Überschrift auf maximal 46px begrenzen; Schriftfamilie und Hierarchie erhalten. Nachher: `implementation-community-fixed-1440.jpg`, ausgewogener zweizeiliger Titel neben vollständiger fotografischer Handlung.

Zweiter Vergleich: Quelle und korrigierter Waldalltag sowie mobile Vorher-/Nachher-Aufnahmen und Gemeinschaftsaufnahmen jeweils zusammen in einem Bildeingang geöffnet. Keine neuen P0/P1/P2-Befunde. Zusätzlich Pinterest-Motivboard, Behance-Fotoaufteilung und finaler Kindergartenbereich zusammen angesehen: Motivfamilien und fotografische Präsenz nachvollziehbar übertragen, Farbpalette und eigene Kompositionen eigenständig.

## Pflichtflächen

- Typografie: Lora für Überschriften, Source Sans 3 für Lesetext, keine neuen Schriften; tatsächliche Browser-Schriftfamilien geprüft. Originalcopy erhalten. Die kleineren Titel im neuen Raster sind absichtlich angepasst. Neue Bildtexte und Herkunftslabels frei lesbar. Bei 320px erwarteter zweizeiliger Umbruch von „Weniger vorgeben“, ohne Abschneiden oder Überlauf.
- Abstände und Raster: fotografische Ergänzung in bestehenden Abschnitten, keine zusätzliche Galerie. Neue Bildrundungen sind organisch und rechteckig; Fotoformate bleiben unbeschnitten. Mobile Reihenfolge Text vor Foto, mittige Ausrichtung.
- Farben: bestehendes Creme, Wald- und Salbeigrün erhalten. Firefly-Fotos sommerlich, natürliche Grüntöne und gedämpfte Kleidung. Keine zusätzliche bunte oder herbstliche Fläche.
- Bildqualität: Adobe-Originale und proportionale Endfassungen visuell geprüft; Kinderhandlungen, Hände, Zapfen und Matschküche plausibel, keine Logos oder Fremdassets. Originalaufnahmen separat sichtbar. Neue PNGs lokal geladen, keine CSS/SVG-Ersatzkunst.
- Inhalt: bestätigte Fakten, Kontakt, Anmeldung und Film erhalten. Jedes neue Foto als KI-Konzeptfoto gekennzeichnet; einmal ausdrücklich keine tatsächlichen Waldlinge-Kinder. Keine neuen Betriebszahlen oder Aussagen aus den generierten Szenen.

Fokussierte Prüfung: Die Abschnittsaufnahmen sind bereits gezielte Inhaltsansichten ohne Browserrahmen. Der kleine Fotoeinsatz und beide Herkunftslabels werden in der 390px-Waldalltagaufnahme gesondert sichtbar; alle drei Adobe-Originale und proportionale Endausgaben wurden zusätzlich in Bildvorschauen geprüft. Weitere Ausschnitte sind für diese klaren, wenig dichten Komponenten nicht erforderlich.

## Umsetzungskontrolle

- Desktop- und Mobile-Aufnahmen nach allen Korrekturen erneut verglichen; keine offenen P0/P1/P2-Befunde.
- 320, 390, 700, 960 und 1440px geprüft. Kein horizontaler Dokumentüberlauf und keine abgeschnittenen Texte. Alle neuen Fotoseitenverhältnisse entsprechen ihren Originalen (Differenz unter 0.0001).
- Waldalltag-Aufklappbereich und FAQ geöffnet und geschlossen. Film war vom früheren Besuch noch geöffnet; zunächst geschlossen, dann die Zustimmungsansicht getestet: kein YouTube-iframe vor Bestätigung, Escape stellt die lokale Vorschau wieder her. Kein Video wurde für diese Prüfung neu gestartet.
- Bewegungsreduktion ein-/ausgeschaltet: alle Fotogruppen vollständig sichtbar (Deckkraft 1); normale Bewegung anschließend wiederhergestellt. Bildhöhen werden von bestehender Waldrahmen- und Scrollmessung übernommen.
- Browserkonsole: keine Warnungen oder Fehler. Alle drei neuen Fotos geladen, lokale URLs und Lazy Loading geprüft.
- Finaler Build, Formatierung und vier bestehende Sites-Prüfungen erfolgreich. Erforderliche Ausgabe: `dist/client/index.html`, `dist/server/index.js`, `dist/.openai/hosting.json`. Hostingdateien und Testquellen unverändert.

Restliche Grenzen: Keine Messung einer langsamen Mobilfunkverbindung und keine neue Prüfung sämtlicher externer Ziele. Die neuen lokalen PNGs umfassen insgesamt ca. 3.8 MB und werden erst in Sichtnähe geladen. Dies ist ein erster fotografischer Konzeptentwurf; spätere freigegebene Originalfotografie kann die markierten KI-Bilder ersetzen.

final result: passed
