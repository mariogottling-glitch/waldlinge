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

Die Desktopseite umfasst bei 1440 × 900 etwa 5.4 Tausend Pixel und zeigt im Hauptinhalt zunächst rund 370 Wörter. Aufgeklappte Details verlängern sie nach Bedarf. Keine künstlich verlängerten Pin-Strecken, kein Scrollzwang, keine Vollbildhöhe für jeden Abschnitt.

## Bewegung

- Der natürliche Dokumentfluss ist der Kamerapfad. Kronen, Stamm und Wurzeln haben zusammenhängende tatsächliche Seitenpositionen.
- Die Kronen bewegen sich leicht nach außen und oben, wenn der Einstieg verlassen wird.
- Ein einzelner Vogel gleitet über den Übergang zur Kindergartenvorstellung. Seine Bewegung folgt dem Scrollfortschritt und lässt sich zurückscrollen.
- Die Werteillustrationen erscheinen gestaffelt; eine Lupe und Farne verändern beim Alltag sanft ihre Position und Drehung.
- Originalfotos und kurze Inhaltsgruppen werden zurückhaltend eingeblendet. Die Elterninformationen bleiben ruhig.
- Native Browsernavigation und scrollbar; keine Übernahme des Mausrads. Der Bewegungsbutton und `prefers-reduced-motion` schalten Animationen ab, erhalten aber den statischen Baumrahmen und sämtliche Inhalte.

Die Baumrinde besteht aus Adobe-Passagen mit spiegelgleichen Übergängen. Keine vollständige Waldgrafik und keine Kindergruppe wird wiederholt. Maskierte Überlappungen verbinden Krone, Rinde und Wurzeln. Die Illustrationen werden lokal geladen; die Homepage ruft Adobe nicht auf.

## Master-Prompt für weitere Motive

Zeitgemäße hochwertige botanische Gouacheillustration für einen einladenden Waldkindergarten in Bornheim. Ein lichter europäischer Sommerwald mit Eichen, natürlichen grau-braunen Stämmen, gedämpftem Salbei-, Moos- und tiefem Waldgrün. Feine organische Konturen, zurückhaltende trockene Pinseltextur, weiches Tageslicht, eigenständiger redaktioneller Stil. Ruhig und familienfreundlich, mit Raum für Neugier, Erforschen und Geborgenheit. Kein nostalgisches Kinderbuch, keine Herbstfarben, kein Neon, keine Schrift. Kinder nur sparsam, von hinten und ohne sichtbare Gesichter. Ein klar definiertes Motiv pro Ausgabe. Freigestellte Einzelmotive mit Abstand zu den Rändern; zusammengehörige Baumteile dürfen an den technisch benötigten Anschlusskanten enden. Die seitlichen Website-Bäume werden bewusst angeschnitten, der zentrale Textraum bleibt frei.

Die vier konkret verwendeten Adobe-Motive und ihre finalen Ausgaben sind in `public/images/ASSETS.md` dokumentiert.
