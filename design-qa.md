# Waldlinge Main Page Design QA

Stand: 30. September 2026.

## Vergleichsgrundlage

Der Nutzer hat die erste Adobe-Firefly-Waldillustration für einen neuen funktionierenden Main-Page-Entwurf gewählt. Sie ist ein Bildmotiv, kein vollständiges Website-Mockup. Der Seitenrahmen baut auf dem bereits freigegebenen Desktopziel auf; die neue Waldreise und zusätzliche Originalinhalte sind beauftragte Erweiterungen. Ein pixelgleicher Nachbau einer vollständigen neuen Seitenvorlage wird deshalb nicht behauptet.

- Visuelle Stilquelle: `public/images/waldreise-firefly-original.png`, 2688 × 1536 Pixel.
- Bestehende Layoutbasis: `design/waldlinge-verfeinert-desktop.png`, 1122 × 1402 Pixel.
- Gerenderter Desktop-Einstieg: `design/qa-waldreise/desktop-1440.jpg`.
- Gerenderte Waldreise: `design/qa-waldreise/journey-01-1440.jpg` und `journey-03-1440.jpg`.
- Mobile Ansichten: `design/qa-waldreise/mobile-390.jpg` und `journey-mobile-320.jpg`.
- Browser: Codex In-app Browser. Desktop 1440 × 900 CSS-Pixel; Mobil 390 × 844 und 320 × 800 CSS-Pixel. Browser-Screenshots sind JPEG in Viewportgröße. Die Stilquelle wird proportional als vollständiges Bild mit object-fit contain angezeigt, nicht auf eine Website-Viewportgröße verzerrt.

Die Originalillustration und die Desktopaufnahme der Waldreise wurden gemeinsam in einem Vergleichseingang geöffnet. Farben, Figuren, Komposition und Bildgrenzen bleiben erhalten. Die geringere Deckkraft im ersten Kapitel und volle Wirkung im letzten Kapitel sind beabsichtigte Animation. Der vollständige Einstieg und die beiden mobilen Ansichten wurden zusätzlich im Browser visuell geprüft. Ein engerer Detailausschnitt war für die gut lesbaren Überschriften, Konturen und Kapiteltexte nicht nötig.

## Prüfergebnis der Gestaltung

- Typografie: bestehende lokal eingebundene Lora und Source Sans 3, klarer Abstand zwischen Überschriften und Lesetext, keine abgeschnittenen Texte in den geprüften Breiten.
- Abstand und Rhythmus: großzügiger fotografischer Einstieg, getrennte Originallogos, ruhig gehaltene Waldreise, danach Werte, Ortsinformationen, Alltag, Film, Originalfotos, Gemeinschaft, Geschichte, FAQ und Kontakt. Mobil Text vor dem Hero-Bild und konsistent mittige Ausrichtung.
- Farben: warmes Creme, Waldgrün, gedämpftes Gold und Salbei. Die ausgewählte erste Waldillustration wurde nicht erneut umgefärbt.
- Bildqualität: Originalfotos und Originallogos bleiben erhalten. Die erste Adobe-Illustration wird vollständig in ihrem Seitenverhältnis angezeigt. Sechs neue transparente Adobe-Icons ersetzen die früheren handgezeichneten SVG-Illustrationen. Es gibt keine fehlenden Bilder in den geprüften Browserzuständen.
- Inhalt: Quellen und Übernahme sind in `design/Inhalte-Mainpage.md` dokumentiert. Unbestätigte Betriebszeiten, Kapazität, Gebühren und Personalzahlen bleiben aus öffentlichen Texten heraus. Direkte Kontaktwege und Links auf die ausführlichen Originalseiten sind vorhanden.

## Prüfhistorie

1. P2: Die erste Waldreise-Fassung hatte bei 1440 × 900 einen zu hohen Bildbereich, wodurch der untere Szenenabschluss am Viewportrand lag. Korrektur: Bildhöhe von maximal 62svh auf 54svh begrenzt. Danach wurden Anfangs- und Schlusskapitel erneut aufgenommen; Überschrift, Illustration, Kapiteltext und Weiterführung passen in die Szene.
2. P2: Kapitelanker lagen zu weit im Scrollabschnitt und konnten das letzte Kapitel nahe dem Auslaufen der gehaltenen Szene öffnen. Korrektur: Positionen anhand der tatsächlichen Scrollstrecke statt fester Abschnittsprozente. Ergebnis: Kapitel 03 wurde per Link erreicht und zeigte „Dazugehören“ mit Fortschritt 0,729, während die Szene noch vollständig sichtbar blieb.

Keine verbleibenden P0/P1/P2-Befunde im geprüften Entwurf.

## Interaktionen und technische Prüfung

- Breiten 320, 375, 390, 700, 768, 1024 und 1440: keine horizontalen Überläufe; keine fehlerhaft geladenen Bilddateien.
- Mobiles Menü öffnen, Link zu Für Eltern, Menü schließt nach Navigation.
- FAQ zur Anmeldung öffnen: Antwort und Kita-Navigator-Link sichtbar.
- Filmvorschau öffnen: Zustimmungsansicht sichtbar, kein YouTube-iframe vorhanden. Escape schließt und führt den Fokus zurück zum Vorschauknopf. Die bestehende Zustimmungsbestätigung erzeugt erst danach den Frame; das tatsächliche externe Video wurde in dieser Prüfung nicht abgespielt.
- Desktop: Startseitenlink, Waldreise-Link, Kapitel 03 und Weiterführung zum Kindergarten getestet.
- Browserprotokoll: keine Fehlermeldungen; normale Entwicklungsservermeldungen.
- Produktionsbuild erfolgreich. Vier vorhandene Sites-Tests erfolgreich; erwartete Ausgaben unter dist/client, dist/server und dist/.openai vorhanden.

Reduzierte Bewegung ist in CSS und JavaScript berücksichtigt: keine gehaltene Scrollsequenz, vollständiges statisches Motiv und alle Kapitel im Seitenfluss. Die Betriebssystempräferenz wurde im Browser nicht aktiv umgeschaltet; diese Variante wurde am Code geprüft, nicht als separat gerenderter Zustand verifiziert. Kein Versandbackend oder neues Kontaktformular wurde eingerichtet.

## Späterer Feinschliff

- P3: Die unveränderte erste Adobe-Illustration ist etwa 8 MB groß und wird verzögert geladen. Für Veröffentlichung sind kleinere Adobe-Ausgaben und Messungen auf langsameren Verbindungen sinnvoll. Der Entwurf wird derzeit lokal geprüft; eine Performancefreigabe für Produktion wird nicht behauptet.
- Die Waldreise verwendet in diesem ersten Entwurf das vollständige ausgewählte Bild mit Scrollfortschritt, sanfter vertikaler Bewegung und Kapitelübergängen. Eine echte Parallaxkomposition mit separat animierten Baum- und Pflanzenlagen erfordert weitere passende Adobe-Assets und ist noch nicht Bestandteil dieses Entwurfs.

final result: passed

## Ergänzung: Pinterest-Konzeptfotos

Am 30.09.2026 wurde die Nutzer-Pinnwand „Waldlinge Homepage“ mit 21 Pins im Browser angesehen. Drei Adobe-Firefly-Motive greifen fotografische Stimmung und Themen auf: Farnwedel zeigen, gemeinsam an einer Matschküche arbeiten und ein Kinderkreis. Gedämpfte Grün- und Cremetöne, natürliche Texturen und weiches Waldlicht passen zur vorhandenen Illustration. Die neue Bildreihe steht zwischen den illustrierten Alltagswerten und dem offiziellen Film. Hero, Originalfotos, Logos und bestehende Inhalte bleiben erhalten.

- Desktopansicht: `design/qa-waldreise/pinterest-photos-desktop-1440.jpg`, 1440 × 1000. Drei großzügige, unten ausgerichtete Fotografien mit kurzen Bildunterschriften.
- Mobile Ansicht: `design/qa-waldreise/pinterest-photos-mobile-390.jpg`, 390 × 844. Fotos untereinander, Texte und Bildunterschriften mittig.
- Browserprüfung bei 320, 390, 700, 768, 1024 und 1440 Pixeln: keine horizontalen Überläufe, alle drei Fotos geladen; Seitenverhältnisse der Originale bleiben erhalten. Es gibt keinen zusätzlichen CSS-Beschnitt.
- Adobe-Verkleinerungen wurden vor Einbindung visuell geprüft. Ein sichtbarer Hinweis und Alternativtexte kennzeichnen die synthetischen Konzeptbilder. Sie dokumentieren keine tatsächlichen Waldlinge-Kinder.
- Neue Fotos nutzen denselben bestehenden Reveal-Mechanismus und werden verzögert geladen. Reduzierte Bewegung bleibt durch die bestehende CSS-Regel berücksichtigt.
- Produktionsbuild inklusive Sites-Ausgaben erfolgreich. Die drei neuen PNGs benötigen zusammen rund 5,1 MB; eine abschließende Performancefreigabe für Veröffentlichung ist weiterhin offen.

Keine neuen P0/P1/P2-Befunde in dieser Erweiterung.
