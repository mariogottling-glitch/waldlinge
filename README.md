# Waldlinge – Website-Relaunch

Responsive Website für den Waldkindergarten Waldlinge Bornheim e.V., auf Grundlage des freigegebenen Entwurfs in `design/waldlinge-verfeinert-desktop.png`.

## Entwicklung

Node.js 24 und pnpm 11.25.0 empfohlen.

```sh
pnpm install --frozen-lockfile
pnpm dev -- --host 127.0.0.1 --port 4173
pnpm build
pnpm test:sites
pnpm format:check
```

Die statisch hostbaren Dateien liegen nach dem Build in `dist/client`. Der mitgelieferte Worker und das Sites-Paket bleiben für eine mögliche spätere Veröffentlichung erhalten. Der GitHub-Workflow prüft Formatierung, Build und Worker-Tests bei Pushes und Pull Requests; er veröffentlicht die Website nicht automatisch.

## Enthalten

- Responsive Startseite mit eigener mobiler Bild-/Textanordnung.
- Funktionierende Sprungnavigation, Mobilmenü mit Escape und Fokus-Rückgabe.
- Waldalltag, Gemeinschaft, zugängliche aufklappbare Elternfragen, Anmeldeweg und Kontakt.
- Lokal eingebundene Lora und Source Sans 3, Phosphor-Icons, optimierte WebP-Dateien.
- Designkonzept in `Design.md`, Abnahmeprüfung in `design-qa.md`.

Inhalte stehen in `src/App.jsx`, Gestaltung und Bildschirmgrößen in `src/styles.css`.

## Vor der Veröffentlichung auf der Vereinsdomain

1. Texte und aktuelle Aufnahmeinformationen mit dem Verein bestätigen.
2. Generierte Fotomotive durch freigegebene tatsächliche Kindergartenfotos ersetzen oder ihren illustrativen Einsatz redaktionell ausdrücklich festlegen. Die aktuellen Bilder dokumentieren nicht den realen Betrieb.
3. Impressum und Datenschutz für den konkreten Betreiber und das gewählte Hosting übernehmen/aktualisieren. Derzeit führen die Links auf die bestehende Website. Diese Seiten und die Geschichte müssen bei einem Austausch der bestehenden Domain erhalten bleiben, damit keine Links ins Leere führen.
4. Alte URLs sichern, passende Weiterleitungen anlegen, Sicherung und Rückkehrmöglichkeit vorbereiten.

Es gibt keine Formulare mit vorgetäuschtem Versand, keine Analyse- oder Drittanbieter-Embeds und keine Behauptungen zu ungeprüften Betreuungszeiten, Kosten, freien Plätzen oder Teamgrößen. Kontakt funktioniert über E-Mail-Links, Anmeldung über den externen Kita-Navigator.

## Assets und Quellen

Siehe `public/images/ASSETS.md`. Schriften: Fontsource / SIL Open Font License. Icons: Phosphor / MIT. Bibliothekslizenzen liegen in den jeweiligen Paketen.

Repository: https://github.com/mariogottling-glitch/waldlinge

Der GitHub-Stand wird mit abgeschlossenen Änderungen synchronisiert. Eine Veröffentlichung auf `waldlinge.org` ist ein eigener Schritt und bisher nicht erfolgt.
