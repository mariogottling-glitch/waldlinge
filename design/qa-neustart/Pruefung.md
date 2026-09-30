# Erster funktionierender Waldwelt-Entwurf

Stand: 30. September 2026. Grundlage ist das bestätigte Konzept in `design/Waldlinge-Neustart-Konzept.md`. Der frühere Entwurf bleibt unter Archivbranch `codex/archive-waldlinge-2026-09-30` und im lokalen Archiv-ZIP erhalten.

## Umgesetzt

- Vollständig neue Startseite mit neuem Raster, warmer Papierfläche, groß gesetzten Lora-Überschriften und überwiegend illustrierten Waldkapiteln.
- Eine gemeinsame, am Desktop haftende Szene begleitet Einstieg, Kennenlernen, Werte und Waldalltag. Der vollständige Wald wandert auf die andere Seite; Farne kommen als Vordergrund hinzu; Birken, Entdeckungsicons und Schaukel bilden die folgenden Szenen. Die Hauptbewegung folgt dem Scrollstand direkt und reversibel. Keine erzwungene Scrollrichtung oder automatisch abgespielte Filmsequenz.
- Originalfotos, Originallogos, Elterninitiative, Gründungsgeschichte, Standort/Bauwagen, bedürfnisorientierte Begleitung, Waldspielgruppe, Kontaktwege und Anmeldung sind eingebunden. Unbestätigte Betriebszeiten, Gebühren, Kapazitäten und Personalzahlen werden nicht behauptet.
- Drei neue freigestellte Adobe-Motive und die vorhandenen sechs Adobe-Icons. Nur zwei kleine illustrierte Kinder, beide von hinten. Originalaufnahmen ergänzen diese Bildwelt. Herkunft in `public/images/ASSETS.md`.
- Mobile Komposition ohne dauerhaft haftende Kulisse: zentrierte Texte und vollständig platzierte Illustrationen mit sanfter Bewegung. Die Geräteeinstellung für reduzierte Bewegung wird berücksichtigt. Ein zusätzlicher Schalter im Footer zeigt alle Inhalte und statische Illustrationen ohne Animation.

## Verifiziert im In-App-Browser

| Prüfung | Ergebnis |
| --- | --- |
| Desktop 1440 × 900 | Einstieg, wandernder Wald, sich aufbauende Werte und Abenteuerszene visuell angesehen; vollständige Baumkronen, Figuren und Farne. Pflanzen von den lesbaren Textbereichen weg positioniert. |
| Mobile 390 × 844 | Einstieg visuell angesehen: Text und Illustration mittig, CTA erreichbar, vollständige Waldkomposition. |
| Breiten 320, 390, 700, 960, 1440 | Keine horizontale Überbreite; keine fehlgeschlagenen bereits geladenen Bilder. Diese Breitenkontrolle ergänzt die visuellen Ansichten, sie ist kein vollständiger visueller Test jedes Seitenabschnitts an jeder Breite. |
| Scrollen und Kapitellinks | Wald per Scroll bewegt; Links zu Kindergarten, Waldalltag, Eltern und Einstieg geprüft. Direkte Sprünge landen mit Abstand unter dem Header. |
| Mobiles Menü | Geöffnet; Elternlink schließt das Menü und erreicht die Elterninformationen. |
| FAQ | Anmeldung geöffnet; `aria-expanded` und sichtbarer Antwortbereich stimmen überein. Kita-Navigator bleibt verlinkt. |
| Vereinsfilm | Vor Klick und während der Zustimmung kein YouTube-Frame. Zurück und Escape schließen die Zustimmung. Erst Bestätigung erzeugt den Frame; Schließen entfernt ihn wieder. Nach Austausch des Titelbilds erneut Zustimmung und Zurück geprüft. |
| Bewegung reduzieren | Schalter getestet: bewegliche Szene ausgeblendet, statische Bilder sichtbar, Rückkehr zur animierten Ansicht funktioniert. Statischer Desktop-Einstieg visuell angesehen. Die automatische Systemeinstellung wurde im Code berücksichtigt, im Browser nicht separat emuliert. |
| Originalfoto und Filmvorschau | Foto-/Illustrationsübergang und lokales Titelbild visuell geprüft. Das Filmtitelbild ist ein vorhandenes Originalfoto; die Wiedergabe bleibt der offizielle Vereinsfilm. |
| Browsermeldungen | Beim geprüften Desktop-Einstieg keine Warnungen oder Fehler gemeldet. Kein Anspruch auf eine vollständige externe Video- oder Netzwerkprüfung. |

## Aufnahmen

- `01-einstieg-desktop.jpg`: animierter Einstieg in Ausgangsposition.
- `02-waldreise-desktop.jpg`: Wald auf der linken Seite, freies Textfeld rechts und zusätzliche Farnebene.
- `03-entdeckungen-desktop.jpg`: Entdeckungen während des Szenenaufbaus.
- `04-abenteuer-desktop.jpg`: Birken, Schaukel und Farne im Waldalltag.
- `05-mobile-390.jpg`: mobiler Einstieg.
- `06-filmzustimmung-mobile.jpg`: integrierte Zustimmung ohne YouTube-Frame.
- `07-ohne-bewegung-desktop.jpg`: vollständiger statischer Einstieg.
- `08-film-desktop.jpg`: Film mit lokalem Originalfoto als Titelbild.
- `09-echte-einblicke-desktop.jpg`: Übergang von Illustration zu Originalaufnahme.

## Technische Prüfung und Grenzen

Produktionsbuild und Formatprüfung erfolgreich; die vier vorhandenen Sites-Tests sind bestanden. `dist/client/index.html`, `dist/server/index.js` und `dist/.openai/hosting.json` bleiben vorhanden. Die Hosting-Dateien und Worker-Logik wurden nicht umgebaut.

Dieser Stand ist ein erster funktionierender Entwurf. Keine Veröffentlichung vorgenommen. Keine vollständige Prüfung auf realen iOS-/Android-Geräten, kein Screenreader-Audit und keine gemessenen Ladezeit- oder Core-Web-Vitals-Ergebnisse. Mit älteren oder langsameren Geräten sollte die Bewegung vor Veröffentlichung nochmals überprüft werden. Die neue Anwendung nutzt GSAP 3.15.0 mit ScrollTrigger, native Scrollbewegung und echte HTML-Inhalte; kein WebGL, kein Lenis und keine handgezeichneten SVG-Ersatzgrafiken.
