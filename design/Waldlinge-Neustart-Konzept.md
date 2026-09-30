# Waldlinge Konzept für eine illustrierte Homepage mit Scrollanimationen

Stand 30. September 2026. Dieses Konzept beschreibt den vollständigen Neustart mit neuem Raster und einer überwiegend illustrierten Waldwelt. Es basiert auf der aktuellen Browseranalyse von Mind Robotics und Numa sowie der vom Nutzer bestätigten szenischen Richtung von Every Last Drop. Der vorhandene Homepageentwurf bleibt archiviert. In diesem Schritt entstehen weder neue generierte Bilder noch Änderungen am Websitecode.

## Leitidee

**Ein Wald, der mit euch wächst.**

Scrollen führt vom lichten Waldrand über neugierige Entdeckungen und gemeinsames Spielen bis zu einer geborgenen Lichtung. Die Landschaft entwickelt sich über die ganze Homepage. Wiederkehrende Bäume, ein heller Weg und einzelne Pflanzen verbinden die Kapitel. Texte bekommen innerhalb dieser Welt ruhige, gut lesbare Flächen. Wenige echte Fotos und der Vereinsfilm vermitteln den tatsächlichen Waldlinge-Alltag.

Kinder tauchen nur an zwei bis drei Stellen als kleine Rückenfiguren auf, vollständig sichtbar und ohne erkennbare Gesichter. Der Wald trägt die Geschichte. Abenteuer entsteht durch Entdecken, Ausprobieren und Gemeinschaft.

## Referenzanalyse

Beide Seiten wurden im Codex In-app Browser aufgerufen und tatsächlich gescrollt. Die Desktopaufnahmen haben 1280 × 720 CSS-Pixel. Numa wurde zusätzlich bei 390 × 844 aufgenommen. Die sieben hier ausgewählten Dateien wurden nach dem Speichern erneut geöffnet. Die Prüfung betrifft diese Zustände, keinen vollständigen Funktionstest beider Websites.

### Mind Robotics

[Originalseite](https://www.mindrobotics.com/)

| Schritt | Beobachtung und Zustand | Folgerung für Waldlinge |
| --- | --- | --- |
| 1 Einstieg | Großer illustrierter Roboterarm, sehr große Wortmarke, wenige Farben und viel freie Fläche. Starkes Anfangsbild, bewusster Beschnitt am Viewportrand. | Wenige große Hauptmotive und klare Typografie. Figuren und zentrale Waldlinge-Grafiken bleiben vollständig komponiert. |
| 2 Aussage | Die Hand begleitet den Übergang zur Aussage. Wörter und farbige Kapseln erscheinen versetzt. Visuell zusammenhängend; im Aufbau vorübergehend noch nicht vollständig lesbar. | Bild und Text gemeinsam inszenieren, danach einen ausreichend langen ruhigen Lesebereich anbieten. |
| 3 Spätere Welt | Eine illustrierte Fabrik füllt den Bildschirm. Eine kompakte Erklärung liegt auf der Szene. Gleiche Bildsprache wie im Einstieg. | Inhalte innerhalb einer zusammenhängenden Waldwelt platzieren. |

![Mind Schritt 1 Einstieg](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/mind-01-start.jpg)

![Mind Schritt 2 Aussage mit wanderndem Motiv](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/mind-03-story.jpg)

![Mind Schritt 3 illustrierte Fabrikszene](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/mind-05-later.jpg)

Direkt beobachtete Technik: drei Canvas-Elemente, Next-Static-Skriptdateien und CSS-Klassen für gehaltene Szenen. Der öffentliche Code enthält `useScroll`, Canvas-2D-Code und in einem weiteren Chunk `WebGLRenderer`. Das sind Hinweise auf scrollabhängige DOM-Bewegung und Canvas/WebGL. Die vollständige Zuordnung aller Effekte zu Bibliotheken wurde nicht rekonstruiert. GSAP ist hier nicht bestätigt. Eine Scroll-Bildsequenz wird ebenfalls nicht behauptet: die zunächst gefundenen Wörter `frames` und `webp` gehörten im geprüften Ausschnitt zu allgemeinen Keyframes bzw. Bildkonfiguration.

### Numa

[Originalseite](https://numa.uprock.pro/)

| Schritt | Beobachtung und Zustand | Folgerung für Waldlinge |
| --- | --- | --- |
| 4 Bildübergang | Das große Einstiegsbild verändert beim Scrollen Form und Größe. Text wird im Übergang unscharf. Das Hauptbild wird Teil einer größeren Gruppe runder Bildmotive. Flüssiger Wechsel von einem Motiv zur Bildwelt. | Ein Motiv über mehrere Zustände weiterführen. Waldlinge verwendet Form- und Ebenenübergänge mit scharfen Lesetexten. |
| 5 Produkt und Merkmale | Ein freigestelltes Produkt steht auf viel Weißraum. Danach bewegen sich Überschrift und Merkmalskarten horizontal. Zwischenzustände zeigen angeschnittene Inhalte. | Naturfundstücke führen zu pädagogischen Aussagen. Wesentliche Texte bleiben vollständig ohne horizontales Freiscrollen lesbar. |
| 6 Mobil | Hauptmotiv, mittige Texte und CTA stehen in einem hohen Bildrahmen. Hauptaktion klar erreichbar; Text liegt teilweise über detailreichem Foto. | Eigenständige mobile Komposition, ruhige Cremefläche hinter Text und klare Aktion. |

![Numa Schritt 4 Einstieg](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/numa-01-start.jpg)

![Numa Schritt 4 aufgebaute Bildwelt](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/numa-04-benefits.jpg)

![Numa Schritt 5 horizontale Merkmalsfolge](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/numa-06-features.jpg)

![Numa Schritt 6 mobile Komposition](D:/Arbeit/Codeyx/Waldlinge/design/scroll-references/numa-07-mobile.jpg)

Direkt beobachtete Technik: Taptop-Nennung im Footer, mehrere `position: sticky`-Container und transformierte DOM-Elemente. Lenis 1.3.8 sowie Lottie-Player und Lottie-Interactivity werden geladen; ein `lottie-player`-Element ist vorhanden. Im untersuchten DOM gibt es keine Canvas-Elemente. In der untersuchten öffentlichen `main.min.js` ist GSAP/ScrollTrigger nicht bestätigt; das beweist keine generelle Abwesenheit in anderen Ressourcen.

### Erkenntnis und Prüfgrenzen

Die starke Wirkung entsteht durch choreografierte Zustände: Anfangsbild, nachvollziehbare Veränderung, daraus entstehendes nächstes Kapitel. Großzügiger Leerraum und ein begrenztes Motivvokabular machen die Bewegung verständlich. Waldlinge erhält dieselbe Verbindung von Bild und Handlung, übersetzt in eine warme botanische Welt.

Sichtbare Risiken sind vorübergehend angeschnittene Texte, Unschärfe beim Lesen und Textkontrast über Fotos. Tastaturführung, Screenreader, reduzierte Bewegung, vollständige Kontrastwerte und schwache Verbindungen wurden bei den Referenzen nicht geprüft. Daraus wird keine Barrierefreiheitsfreigabe abgeleitet. Mind wurde nicht separat mobil geprüft; die Rückkehr-Aufnahme ist ein Desktopzustand.

## Bildsprache und neues Raster

Zeitgemäße botanische Illustration mit sanften transparenten Farbflächen, dezenter Gouache- und Aquarelltextur und wenigen präzisen Konturen. Keine Sepiawirkung oder alte Papierpatina. Sommerlicher Mischwald mit Birken, weichen Baumkronen, Farn, Moos und einem hellen Weg. Licht, räumliche Staffelung und gut erkennbare Formen geben Tiefe.

| Gestaltung | Vorgesehene Richtung |
| --- | --- |
| Hintergrund | Papiercreme `#F5F2E9`, deckend hinter Lesetexten |
| Hauptfarbe | Waldgrün `#274536` für Orientierung und Schrift |
| Pflanzen | Moos `#849B78`, Salbei `#CED9C4` |
| Akzent | Lichtgold `#D4BC82`, sparsame lehmfarbene Details |
| Typografie | Vorhandene lokale Lora für warme große Überschriften, Source Sans 3 für klare Navigation und Lesetext |
| Komposition | Große offene Landschaft, wechselnde ruhige Textinseln, wenige Entdeckungsdetails |
| Menschen | Kleine Rückenfiguren, gedeckte Kleidung, vollständig sichtbare Körper; keine frontalen gesichtslosen Menschen |
| Fotografie | Wenige authentische Einblicke und Film, Illustration bleibt Hauptsprache |

Desktop bekommt ein neues 12-Spalten-Raster mit maximal etwa 1280 Pixeln Inhaltsbreite und 64–96 Pixeln Außenabstand bei 1440 Pixeln. Landschaften nutzen den verfügbaren Bildschirmraum. Textinseln belegen vier bis fünf Spalten und ungefähr 55–65 Zeichen je Zeile. Ihre Position wechselt gezielt zwischen links, rechts und Mitte. Pro Zustand bestimmen ein Textmotiv und ein Bilddetail den Fokus.

Im neuen Einstieg stehen Waldlinge-Logo, kompakte Navigation und Kontaktaktion über einer lichten illustrierten Landschaft mit freier Textfläche. Das alte Raster und fotografische Hero sind keine verbindliche Vorlage. Originalmarken bleiben korrekt. Natur- und Wildnisschule sowie artgerecht erhalten eine gut lesbare ruhige Zeile beim Einstieg.

Mobil gilt eine Spalte mit 20–24 Pixeln Rand und mittigen Texten. Die Bildwelt wird neu komponiert, statt nur das Desktopbild zu verkleinern. Vordergrundmotive und kleine Figuren bleiben vollständig. Die Wirkung einer hochwertigen Agenturwebsite ist ein Qualitätsziel für Komposition, individuelle Assets und Bewegungspräzision, keine Kosten- oder Aufwandszusage.

## Storyboard über die ganze Homepage

Die Scrollanteile sind Planungsannahmen. Die tatsächliche Strecke wird am ersten Bewegungsprototyp abgestimmt.

| Kapitel | Bild und Aussage | Bewegung | Zweck |
| --- | --- | --- | --- |
| 1 Ankommen 0–12 % | Lichter Waldrand mit Birken und Farn. „Kleine Schritte. Große Welt.“ Kennenlernen-CTA. | Ferne Bäume erscheinen zuerst, Pflanzen folgen, ein heller Weg entsteht. | Sofort verstehen, wer die Waldlinge sind. |
| 2 Dem Weg folgen 12–25 % | Blick in die Tiefe, eine kleine Rückenfigur. „Draußen wird Neugier groß.“ | Pflanzen verschieben sich, Bäume öffnen den Weg zur Lichtung. | Natur als Lernraum vermitteln. |
| 3 Kleine Wunder 25–40 % | Blatt, Farn und Fundstück. Natur entdecken, Im eigenen Tempo, Gemeinschaft leben. | Ein Fundstück bewegt sich in die freie Fläche und wird Kapitelmotiv. Werte erscheinen nacheinander und ruhen danach. | Pädagogische Haltung verstehen. |
| 4 Abenteuer im Alltag 40–56 % | Ast mit Schaukel, Wurzel, Balancierstamm. „Ich kann das. Auf meine Weise.“ | Wenige Elemente kommen versetzt hinzu. Höchstens zwei Kinder von hinten geben Maßstab. | Spielerisches Lernen zeigen. |
| 5 Gemeinsam geborgen 56–70 % | Offene Lichtung mit angedeutetem Bauwagen. „Ein Ort, an dem wir dazugehören.“ | Bäume bilden einen ruhigen Rahmen. Eine kurze reale Foto- und Filmphase entsteht innerhalb der Reise. | Vertrauen in den tatsächlichen Kindergarten aufbauen. |
| 6 Gut begleitet 70–88 % | Viel Creme, wenige Pflanzen, klare Elterninformationen. | Bewegung wird ruhig. FAQ, Waldspielgruppe und Anmeldung stehen im normalen Seitenfluss. | Praktische Fragen beantworten. |
| 7 Willkommen 88–100 % | Weite Schlusslichtung. „Vielleicht beginnt euer Weg hier.“ Kontakt, Navigator und Footer. | Landschaft ergibt ein vollständiges ruhiges Schlussbild. | Einen klaren nächsten Schritt ermöglichen. |

Anfang und Ende benachbarter Kapitel passen räumlich zusammen. Weg, Pflanzen und Baumgruppen bleiben wiedererkennbar. Die Welt beginnt nicht nach jeder Sektion neu. Ruhige Informationsbereiche gehören zur Reise.

## Die drei stärksten Animationsmomente

**Der Wald öffnet sich.** Zwei entfernte Baumgruppen verschieben sich leicht gegeneinander. Nahe Farne bewegen sich etwas stärker; der Weg wird frei. Staffelung und eine sehr kleine Gesamtvergrößerung erzeugen Tiefe.

**Aus einem Fundstück wird eine Geschichte.** Ein Blatt oder Farn erscheint am Weg, wandert in eine freie Bildfläche und wird zum Motiv für Natur entdecken. Die Landschaft bleibt sichtbar. Bild und pädagogische Aussage wachsen aus derselben Szene.

**Aus Abenteuer wird Geborgenheit.** Schaukel, Stamm und Pflanzen finden zu einer Lichtung zusammen. Ein heller Bereich öffnet sich für reale Waldlinge-Einblicke. Derselbe Pflanzenrahmen führt anschließend zu Elterninfos und Kontakt.

Diese Bewegungen reagieren direkt auf Scrollfortschritt und laufen beim Zurückscrollen passend rückwärts. Die Seite wartet nicht auf das Ende eines zeitgesteuerten Films. Kleine Blattbewegungen bleiben optional.

## Regeln für Bewegung und Bedienung

Pro erzählerischem Kapitel sind etwa 20–25 % Aufbau, 50–60 % ruhiger Lesebereich und anschließend die Brücke zur nächsten Szene vorgesehen. Nur ausgewählte Szenen werden kurz gehalten. Die Homepage bleibt vertikal lesbar und besitzt direkte Anker zu Konzept, Alltag, Für Eltern und Kontakt. Keine erzwungenen Snap-Punkte oder horizontale Suche nach wesentlichen Informationen.

Erste Bewegungsrichtwerte: ferne Ebenen 8–20 px, mittlere 25–50 px, nahe Pflanzen 45–80 px je Übergang. Gesamtzoom maximal ungefähr 4–5 %. Das sind Startannahmen für einen Prototyp. Text erscheint als ganze Zeile oder kurze Wortgruppe und bleibt danach scharf und still. Hauptaktionen bewegen sich nicht während ihrer Bedienung.

Mobil werden die gehaltenen Strecken verkürzt oder durch normalen Seitenfluss ersetzt. Bei reduzierter Bewegung erscheint das vollständige Motiv statisch. Inhalte und Kontaktwege hängen nie vom Animationsfortschritt ab. Ankersprünge zeigen direkt den zur Zielposition passenden Szenenzustand.

## Empfohlene Umsetzungstechnik

Für diese Waldwelt reicht zunächst React mit echten HTML-Inhalten und separat positionierten Bildlagen. Eine vollständig in WebGL gerenderte Homepage ist dafür keine Voraussetzung. Komplexere Darstellung kommt erst hinzu, wenn der Pilot einen konkreten sichtbaren Vorteil zeigt.

**GSAP mit ScrollTrigger** ist die empfohlene Steuerung für scrollgebundene Timelines, kurze gehaltene Szenen und Kapitelübergänge. `gsap.matchMedia()` unterstützt unterschiedliche Setups nach Bildschirmgröße und Bewegungspräferenz. Dies ist eine Empfehlung für Waldlinge und keine Behauptung über den vollständigen Stack der Referenzen. [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

Jedes Kapitel erhält eine eigene Timeline; ein gemeinsamer Szenenrahmen hält Palette, Ebenenordnung und Wegführung zusammen. Änderungen der Fenstergröße, Ankersprünge und nachgeladene Bilder müssen passende Zustände behalten. Aufbau vor allem über `transform` und `opacity`; Adobe-Pfadassets können durch Masken schrittweise sichtbar werden. Es werden keine dekorativen Ersatzillustrationen aus Code gezeichnet. Text bleibt außerhalb von Canvas und Bilddateien.

Lenis ist bei Numa erkennbar, bei Waldlinge zunächst optional. Zuerst natives Scrollen mit guter Bewegung; zusätzliche Glättung muss sich bei Touch, Tastatur und Ankern bewähren. `prefers-reduced-motion` steuert die gesondert zu prüfende statische Variante. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

Performanceplanung: nahe benötigte Szenen vorladen, feste Bildabmessungen gegen Layoutsprünge, responsive Ausgabegrößen, weit entfernte Animationen pausieren. Als erste Budgetziele gelten unter etwa 1,5 MB für das Anfangsmotiv und möglichst unter 5 MB zusätzliche Bildübertragung für die Reise. Diese Werte müssen mit echten Adobe-Ausgaben gemessen werden und sind keine bereits erreichten Kennzahlen.

## Grafiken und Adobe-Produktion

Alle neuen Bilder, Grafiken, Freistellungen und Bearbeitungen ausschließlich mit Adobe. Jede Motivgruppe wird vollständig ausgearbeitet und mit 8–12 % Abstand zu allen Dateirändern geliefert. Transparenz wird geprüft. Referenzwerke werden nicht übernommen.

| Assetfamilie | Einsatz |
| --- | --- |
| Ferne Bäume | Zwei bis drei weiche Tiefenlagen mit gleicher Perspektive |
| Birken und Baumkronen | Zwei bis drei vollständige mittlere Gruppen mit offenen Textflächen |
| Farn, Moos und Gräser | Drei wiederverwendbare Vordergrundgruppen |
| Waldweg | Verbindendes helles Adobe-Asset mit abgestimmten Übergängen |
| Rückenfiguren | Zwei bis drei kleine Figuren, sparsam verwendet |
| Fundstücke | Blatt, Farn und ein kleines Naturdetail |
| Spiel- und Schutzort | Schaukel-/Stammgruppe und Bauwagenlichtung als Konzeptillustration, keine behauptete genaue Ortsabbildung |
| Pädagogische Icons | Lupe mit Blatt, Schnecke, zugewandte Figuren, Dach mit Herz, Ast mit Schaukel, zwei Pflanzen; bestehende Adobe-Icons prüfen und nötige Anpassungen nur mit Adobe |

Zuerst entsteht **eine Leitkomposition**: Waldrand, Weg, Pflanzen und freie Textfläche. Sie legt Palette, Dichte und Perspektive fest. Danach werden passende getrennte Ebenen für den ersten kurzen Scrollprototyp produziert. Eine Masterkomposition garantiert keine perfekten Einzellagen; Freistellung und Ergänzungen werden in Adobe geprüft. Die übrigen Kapitel folgen erst nach dem Stil- und Bewegungstest. Im aktuellen Konzeptschritt werden keine Bildcredits eingesetzt.

## Inhalte und Vertrauen

Die vorhandene Inhaltsübersicht bleibt Grundlage: Waldlinge Bornheim e.V., Ortsbezug und Bauwagen, bedürfnisorientierte Begleitung, Elterninitiative, Geschichte, Waldalltag, Spielgruppe, Kontakt und Anmeldung. Keine erfundenen Betriebszeiten, Plätze, Gebühren, Personalzahlen oder Bewertungen. Originallogos und Rechtslinks bleiben korrekt.

Der Vereinsfilm behält die lokale Vorschau. Klick öffnet eine integrierte Zustimmung; erst Bestätigung lädt YouTube. Zurück und Escape schließen sie. Echte Fotos sind als Einblicke in die tatsächlichen Waldlinge zugeordnet. Synthetische Bildmotive sind Konzeptmaterial.

## Master Prompt für den visuellen Entwurf

Entwickle eine vollständig neue öffentliche Homepage für den Waldkindergarten Waldlinge Bornheim. Leitidee: Ein Wald, der mit euch wächst. Die Seite wird überwiegend von einer zusammenhängenden illustrierten Waldwelt getragen. Scrollen führt vom lichten Waldrand über Naturentdeckungen und gemeinsames Spielen zur geborgenen Lichtung. Übernimm von Mind Robotics die starke Hauptillustration und die Kontinuität, von Numa die nachvollziehbare Veränderung eines Hauptmotivs zwischen Kapiteln und von Every Last Drop den scrollgesteuerten Szenenaufbau. Entwickle eine eigene warme botanische Bildsprache.

Nutze Papiercreme, Waldgrün, gedämpftes Moos und Salbei, sehr sparsames Lichtgold. Sommerliche, zeitgemäße Illustration mit feiner Aquarell- und Gouachetextur, gut erkennbaren Formen, viel Licht und freier Textfläche. Kinder nur selten als kleine Rückenfiguren ohne sichtbare Gesichter. Vollständige freigestellte Motive mit Abstand zu allen Dateirändern. Neue Bilder ausschließlich über Adobe.

Plane ein neues 12-Spalten-Raster und eine eigenständige mittige Mobilkomposition. Verbinde sieben Kapitel: Ankommen, Dem Weg folgen, Kleine Wunder, Abenteuer im Alltag, Gemeinsam geborgen, Gut begleitet und Willkommen. Ein heller Weg, konsistente Baumgruppen und wiederkehrende Pflanzen ziehen sich über die ganze Seite. Bild und Inhalt entstehen gemeinsam aus der Szene. Texte bleiben beim Lesen scharf und still. Wenige echte Originalfotos und der Vereinsfilm zeigen den tatsächlichen Kindergarten.

Zeige vor dem vollständigen Build den Einstieg, ersten Szenenaufbau und Lichtungsübergang. Definiere dafür Bildlagen sowie Anfangs-, Mittel- und Endzustand. Plane natives Scrollen, kurze gehaltene Szenen, direkte Informationsanker und eine statische Bewegungsvariante. Nutze richtige Inhalte, Kontaktwege und Filmzustimmung. Der archivierte Entwurf bleibt als eigene Version erhalten.

## Nächster Arbeitsschritt

Eine Adobe-Leitkomposition für den neuen Einstieg und danach ein kurzer Bewegungsprototyp vom Waldrand zur ersten Entdeckung. Er prüft Stil, sichtbar zunehmende Waldtiefe und angenehmes Lesen. Erst anschließend werden die übrigen Kapitel produziert. Die aktuelle Aufgabe liefert dieses Konzept; der vorhandene Websiteentwurf bleibt unangetastet.
