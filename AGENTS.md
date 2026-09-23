# Prototype Instructions

## Waldlinge project decisions

- Approved target: design/waldlinge-verfeinert-desktop.png, also supplied by the user as a screenshot. Ignore any editor toolbar in the screenshot.
- Warm cream, deep forest green, restrained gold, subtle organic image edges. Avoid busy collages and excessive illustration.
- Responsive public website, not a simulated mobile app. Mobile hero uses text above the image; verify 320–1440px widths.
- Repository: https://github.com/mariogottling-glitch/waldlinge.git. User requests keeping this repository updated with completed changes. Commit and push authorized project work; never force-push or overwrite unrelated changes.
- Generated photography is concept imagery pending replacement with approved real kindergarten photographs. Do not claim it documents this actual kindergarten.
- Keep unconfirmed operating hours, capacity, fees and staff counts out of public copy. Legal links point to the existing site until legal content for the new hosting is supplied.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

- Nutzer wünscht den offiziellen Vereinsfilm https://www.youtube.com/watch?v=9mYhH0tuum4 auf der Startseite. Lokales Vorschaubild; YouTube erst nach aktivem Klick laden.
- Die drei Werte erhalten zarte botanische Icons im natürlichen, transparent geschichteten Salbeigrün der Blattillustration: Blattzweig, Keimling und verbundene Zweige. Keine kräftigen Piktogramme oder dekorativen Kreise.
