# Prüfung des Baumreise-Entwurfs

30. September 2026. Tatsächlich gerenderte lokale Seite im Codex In-app Browser, native Navigation und Scrollen. Kein Screenshotsimulat und keine nachträgliche Bildbearbeitung der Browseraufnahmen.

## Darstellung und Inhalt

- Die abgelehnte Waldinsel und die Birken haben keine Verwendung mehr in den aktiven Dateien `ForestHome.jsx`, `useForestMotion.js` und `forest-home.css`.
- Zwei freigestellte Adobe-Eichenrahmen reichen über den gesamten Inhalt bis zu den Wurzeln. Die Mitte bleibt frei. Überlappungen der Rahmen mit Footertext wurden beseitigt; auf Handys liegt unter den Rechtslinks ein eigener kleiner Freiraum für den Waldboden.
- Kindergarten und Werte wurden zusammengeführt. Wiederholte Fließtexte und eigenständige lange Spielgruppen-/Fotosektionen entfallen. Drei Alltagseinträge, Gemeinschaftsdetails und sechs Elternantworten sind aufklappbar.
- Erhalten: Kinder ab drei Jahren bis Schuleintritt, Gründung im Januar 2020, Elterninitiative, Bedürfnisse und individuelles Tempo, Bauwagen am SSV Merten, pädagogisches Team, Elternbeteiligung, Gründungsgeschichte, Originallogos, Spielgruppe, Vereinsfilm, Kontaktwege, Rechtslinks und Kita-Navigator mit Hinweis zur Vormerkung.
- Keine unbestätigten Betriebszeiten, Gebühren oder Kapazitäten. Fotografische Einblicke stammen aus den vorhandenen Originalaufnahmen. Neue Grafiken ausschließlich Adobe.

## Browserprüfung

Breiten 320, 390, 700, 960 und 1440 Pixel wurden geprüft. `document.documentElement.scrollWidth - innerWidth` blieb -15 Pixel (normaler Scrollbalken), kein horizontales Überlaufen. 320-Pixel-Hauptbutton darf zweizeilig werden und bleibt vollständig bedienbar. Alle geladenen Bilder haben eine gültige natürliche Breite.

- Desktop 1440 × 900: etwa 5395 Pixel Gesamthöhe. Hauptinhalt zunächst 369 sichtbare Wörter. Die Informationen werden bei Bedarf aufgeklappt.
- Hero, Übergang mit Vogel, Werte, Alltag und Wurzeln wurden visuell angesehen.
- Vogelflug bei nativem Scrollen: bei Scrollposition 450 Pixel sichtbar, Transformationsmatrix und Drehung verändern sich gegenüber Position 900 Pixel. Kronen folgen ebenfalls dem Scrollfortschritt.
- Hauptnavigation springt unterhalb der fixierten Kopfzeile zum gewünschten Abschnitt.
- Handy-Menü öffnet; Link zu Elternfragen schließt es wieder.
- Alltagseintrag öffnet und schließt. FAQ öffnet die passende Antwort, `aria-expanded` aktualisiert sich.
- Filmvorschau und integrierte Zustimmung: kein iframe vor Bestätigung. Escape schließt die Zustimmung. Bestätigung erzeugt genau einen iframe; „Video schließen“ entfernt ihn wieder.
- Bewegungsbutton entfernt alle GSAP-Transformationen und erhält den statischen Baumrahmen. Wiedereinschalten funktioniert. Ein beim Test entdeckter Rücksprung wurde korrigiert: Beide Umschaltrichtungen halten Scrollposition 5594 Pixel unverändert.
- Die Systempräferenz `prefers-reduced-motion` wird im Hook und Stylesheet berücksichtigt; keine Animation wird benötigt, um Inhalt zu erreichen.

Die finale Prüfung betrifft Browserdarstellung und Interaktionen. Es wurde kein physisches iOS-/Android-Gerät und kein Screenreader benutzt. Core Web Vitals sind nicht gemessen. Die vollständige Seite lädt ihre Illustrationen lokal und benötigt keine Adobe-Verbindung.

## Projektprüfungen

- Produktionsbuild erfolgreich; `dist/client/index.html`, `dist/server/index.js` und `dist/.openai/hosting.json` werden erzeugt.
- Formatprüfung erfolgreich.
- Alle vier vorhandenen Sites-Worker-Tests erfolgreich.
- Archivbranch und früheres ZIP bleiben erhalten; kein Deployment durchgeführt.

## Dokumentierte Ansichten

1. `01-baumkronen-desktop.jpg`: neuer Einstieg bei 1440 × 900.
2. `02-vogelflug-desktop.jpg`: Übergang bei Scrollposition 450 Pixel.
3. `03-waldalltag-desktop.jpg`: Originalfoto, Lupe, Farne und kompakte Alltagseinträge.
4. `04-mobile-390.jpg`: Einstieg bei 390 × 844.
5. `05-mobile-320.jpg`: schmalste geprüfte Ansicht.
6. `06-waldboden-desktop.jpg`: Kontakt und Wurzeln.
7. `07-waldboden-mobile.jpg`: getrennte Telefon-/Kontaktlinks und freie Rechtslinks oberhalb der Wurzeln, Bewegung reduziert.
