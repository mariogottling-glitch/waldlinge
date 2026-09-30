# Waldlinge: von den Kronen zu den Wurzeln

Aktuelle Entwurfsrichtung vom 30. September 2026. Ersetzt die Waldinsel und die wiederholten Birkenbilder des ersten Neustarts. Archivbranch und ZIP des früheren Websiteentwurfs bleiben erhalten.

## Die Idee

Die Homepage ist ein heller Raum zwischen zwei großen Eichen. Im Einstieg blickt man in ihre ausladenden Kronen. Beim Scrollen folgt man der Rinde und erreicht im Footer die Wurzeln. Die Illustrationen gehören zum gesamten Seitenraum; sie werden nicht als einzelne dekorative Sektionen wiederholt. In der Mitte bleiben Lesbarkeit und Orientierung erhalten.

Warmes Cremeweiß, Sommergrün, moosige Rinde und feine handgemalte Textur. Keine Birken, kein Herbstgelb, keine überladene Collage. Anschnitt der großen Rahmenbäume ist ausdrücklich erwünscht. Einzelmotive bleiben freigestellt und vollständig sichtbar. Neue Grafiken ausschließlich Adobe Firefly und Adobe-Bearbeitung.

## Referenzbeobachtung

[motionsites.ai](https://www.motionsites.ai/) wurde im Browser angesehen. Die Sammlung enthält Bild- und Video-Vorschauen; kostenpflichtige Prompts und Quelltexte wurden nicht freigeschaltet oder übernommen.

- „Golden Portal“: große seitliche Bildmassen rahmen ein lesbares Zentrum. Kleine Vögel erzeugen Tiefe. Übertragbare Idee: ein eigener atmosphärischer Bildraum mit wenigen beweglichen Akzenten. Dokumentierte Referenzansicht: `scroll-references/motionsites/golden-portal.jpg`.
- „Nature Portfolio“: im sichtbaren Vorschauvideo dominieren große Naturfotografien und kurze Beschriftungen. Übertragbare Idee: echte Bildmomente tragen Information, während Text zurücktritt.
- Every Last Drop, Mind Robotics und Numa bleiben die zuvor bestätigten Bewegungsreferenzen. Die Waldlinge übernehmen das Prinzip einer zusammenhängenden Reise, ohne deren Assets oder Gestaltung zu kopieren.

Die fremden Beispiele wurden als Gestaltungshinweise betrachtet. Ihre konkrete Implementierung wurde nicht durch Quellcodeinspektion verifiziert. GSAP und ScrollTrigger sind die eigene Umsetzung dieses Prototyps.

## Weniger Text, mehr Zusammenhang

1. **Einstieg:** eine klare Botschaft, ein Hauptbutton und zwei kurze Sprunglinks. Kronen um den freien Textraum.
2. **Kindergarten und Haltung:** ein kurzer Absatz, Altersrahmen und Gründung, drei unterschiedliche Werteicons sowie die beiden Originallogos.
3. **Waldalltag:** großes Originalfoto, ein kurzer Einstieg und drei aufklappbare Alltagseinträge. Bauwagen am SSV Merten als konkreter Ortsbezug.
4. **Gemeinschaft:** Originalfoto und kurze Vorstellung. Elternbeteiligung, gewaltfreie Kommunikation und Geschichte in einem aufklappbaren Detail.
5. **Vereinsfilm:** originales lokales Titelbild und integrierte Zustimmung. YouTube erst nach Bestätigung.
6. **Für Eltern:** sechs aufklappbare Antworten; Waldspielgruppe direkt daneben statt eines eigenen langen Kapitels.
7. **Kennenlernen und Ankommen:** Kontakt, Kita-Navigator und vollständige Footerinformationen. Wurzeln als Ende der Reise, mit Freiraum für lesbare Kontaktdaten.

Die Desktopseite umfasst bei 1440 × 900 etwa 5.6 Tausend Pixel und zeigt im Hauptinhalt zunächst rund 320 Wörter. Aufgeklappte Details verlängern sie nach Bedarf. Keine künstlich verlängerten Pin-Strecken, kein Scrollzwang, keine Vollbildhöhe für jeden Abschnitt.

## Bewegung

- Der natürliche Dokumentfluss ist der Kamerapfad. Kronen, Stamm und Wurzeln haben zusammenhängende tatsächliche Seitenpositionen.
- Die Kronen bewegen sich leicht nach außen und oben, wenn der Einstieg verlassen wird.
- Ein einzelner Vogel fliegt über den Übergang zur Kindergartenvorstellung. Seine Route folgt dem Scrollfortschritt und lässt sich zurückscrollen. Sein Körper und zwei getrennte Flügelebenen stammen aus Adobe; ein eigener Zyklus von 0,64 Sekunden animiert den echten Flügelschlag auch bei stillstehender Seite.
- Kronen und Eichenzweige bewegen sich unabhängig von der Scrollroute im Wind. Farne reagieren mit langsamem Wiegen. Kleine Schmetterlinge flattern bei der Entdeckungsszene und kurz vor dem Waldboden.
- Diese kontinuierlichen Bewegungen laufen nur im zugehörigen sichtbaren Abschnitt. Ein verborgener Browser-Tab pausiert alle laufenden Naturzyklen. Der dokumentgebundene Kamerapfad bleibt davon unabhängig.
- Die Werteillustrationen erscheinen gestaffelt; eine Lupe und Farne verändern beim Alltag sanft ihre Position und Drehung.
- Originalfotos und kurze Inhaltsgruppen werden zurückhaltend eingeblendet. Die Elterninformationen bleiben ruhig.
- Native Browsernavigation und scrollbar; keine Übernahme des Mausrads. Der Bewegungsbutton und `prefers-reduced-motion` schalten Animationen ab, erhalten aber den statischen Baumrahmen und sämtliche Inhalte.

Die Baumrinde besteht aus Adobe-Passagen mit spiegelgleichen Übergängen. Keine vollständige Waldgrafik und keine Kindergruppe wird wiederholt. Maskierte Überlappungen verbinden Krone, Rinde und Wurzeln. Die Illustrationen werden lokal geladen; die Homepage ruft Adobe nicht auf.

## Master-Prompt für weitere Motive

Zeitgemäße hochwertige botanische Gouacheillustration für einen einladenden Waldkindergarten in Bornheim. Ein lichter europäischer Sommerwald mit Eichen, natürlichen grau-braunen Stämmen, gedämpftem Salbei-, Moos- und tiefem Waldgrün. Feine organische Konturen, zurückhaltende trockene Pinseltextur, weiches Tageslicht, eigenständiger redaktioneller Stil. Ruhig und familienfreundlich, mit Raum für Neugier, Erforschen und Geborgenheit. Kein nostalgisches Kinderbuch, keine Herbstfarben, kein Neon, keine Schrift. Kinder nur sparsam, von hinten und ohne sichtbare Gesichter. Ein klar definiertes Motiv pro Ausgabe. Freigestellte Einzelmotive mit Abstand zu den Rändern; zusammengehörige Baumteile dürfen an den technisch benötigten Anschlusskanten enden. Die seitlichen Website-Bäume werden bewusst angeschnitten, der zentrale Textraum bleibt frei.

Die vier konkret verwendeten Adobe-Motive und ihre finalen Ausgaben sind in `public/images/ASSETS.md` dokumentiert.

## Überarbeitung vom 1. Oktober: Leben und Leseführung

Die Kindergartenbeschreibung und geprüfte Fakten stehen zusammen auf einer zurückhaltenden Fläche. Drei kurze Werte bilden eine gemeinsame Inhaltsgruppe. Gemeinschaft, Waldspielgruppe und FAQ erhalten klare Grenzen statt verstreuter Zusatzzeilen. Überschriften bleiben als Orientierung; dekorative Slogans werden durch kurze Abschnittsbezeichnungen ersetzt. Ortsbezug ist am Originalfoto befestigt. Film, Anmeldung, Kontakte und wesentliche aufklappbare Originalinformationen bleiben erhalten.

Zusätzliche Naturgrafiken: Adobe-Firefly-Körper- und Flügellayer aus dem bisherigen Vogel sowie ein neuer Eichenzweig und Schmetterling. Das freigestellte Flügelmotiv wird als Vorder- und Hinterflügel an zwei Schulterpunkten bewegt. Nur die Flügel drehen im Flügelschlag, der Körper bleibt als eigene Ebene stabil. Kronen und Farne haben getrennte Ebenen für Scrollbewegung und Wind, um konkurrierende Transformationen zu vermeiden.

Responsive Bewegungslogik gilt ausdrücklich auch unter 960px. Eine stets aktive Basisbedingung verhindert, dass GSAP bei gleichzeitig falscher Desktop- und Reduced-Motion-Bedingung die mobile Animation überspringt. Die ruhige Ansicht erhält alle Grafiken und Inhalte.

## Weiterer Feinschliff: Vordergrund und Hintergrund

Die Vogellage gehört jetzt zur zusammenhängenden Waldkulisse, zwischen Wolken und Bäumen. Sein Start liegt hinter dem linken Stamm; die Flugbahn geht über die vollständige Browserbreite und endet hinter dem rechten Baum. Kein Überblenden auf freier Fläche. Der Scrollbereich reicht vom Eintritt der Kindergartenvorstellung bis zu deren oberem Viertel; eine geklammerte Startposition sorgt auf kleinen Bildschirmen für einen verdeckten Start bei Scrollstand null. Sein Höhenanker wird anhand des tatsächlichen Abschnitts nachgemessen, wenn sich das Layout ändert.

Die Eichenzweige wachsen von maximal 285 auf 420px, auf 390px breiten Smartphones von 140 auf rund 191px. Transparente Blattkanten rahmen die vorhandenen Inhaltsflächen. Eine einzige neue freigestellte Adobe-Wolkengruppe ergänzt drei weit auseinander liegende Hintergrundstellen. Unterschiedliche Größe und Deckkraft sowie langsame Zyklen von 18 bis 24 Sekunden halten den Hintergrund zurückhaltend. Inhalte, Scrollstrecke, Filmzustimmung und Elterninfos werden nicht erweitert.

## Eichhörnchen: eine Begleitung am Stamm

Ein einzelnes Eichhörnchen klettert am rechten Baum von der Krone zu den Wurzeln. Körper, Schwanz, Vorder- und Hinterbeine sind eigene freigestellte Adobe-Grafiken. Vier Gelenke greifen paarweise gegenläufig nach, der Schwanz gleicht die Bewegung aus und der Körper bewegt sich leicht mit. Der Rhythmus folgt direkt der Dokumentstrecke: ein Zyklus je 90px auf großen und 60px auf kleinen Bildschirmen. Es hält beim Anhalten seine Griffpose und folgt beim Zurückscrollen denselben Schritten rückwärts.

Eine native Sticky-Lage hält den Begleiter während des Lesens am Seitenrand. Der Baum läuft im natürlichen Dokumentfluss dahinter weiter. Beim Eintritt des Footers löst sich die Figur aus dieser Höhe und erreicht die Wurzeln. Keine zusätzlichen Texte, keine angehängte Sektion und kein Eingriff ins Mausrad. Auf Mobilgeräten misst die Figur 65px in der Breite. Als rein dekoratives Element liegt sie außerhalb der Bedien- und Leseflächen; bei Bewegungsreduktion bleibt sie ohne Kletterbewegung am oberen Stamm.
