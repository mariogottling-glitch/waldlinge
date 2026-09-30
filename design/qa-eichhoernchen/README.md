# Eichhörnchen: visuelle und funktionale Prüfung

Geprüft am 1. Oktober 2026 im lokalen In-App-Browser auf `http://localhost:4173/`.

- Vier getrennte Pfotenlagen, eigenständiger Schwanz und Körper. Bei Scrollstand 540px und 563px bleibt die Begleiterhöhe auf dem Desktop bei 270px, während sich die einzelnen Gelenkmatrizen deutlich ändern. Die beiden tatsächlichen Browseraufnahmen `desktop-pose-a.jpg` und `desktop-pose-b.jpg` zeigen verschiedene Griffphasen.
- Ohne weitere Eingabe bleibt die zweite Pose unverändert. Nach 23px Zurückscrollen sind alle beobachteten Pfoten- und Schwanztransformationen exakt wieder bei der ersten Pose. Messwerte: `gait-observations.json`.
- Mobile Kletterpose bei 390 × 844px: `mobile-390.jpg`. Am Seitenende erreicht die Figur den Waldboden; ihre Unterkante liegt bei 798.7px in einem 844px hohen Viewport. Aufnahme: `mobile-wurzeln.jpg`.
- Bewegungsreduktion entfernt die Scroll- und Gelenktransformationen und setzt die Figur statisch an den oberen Stamm. Aus- und Einschalten hält den Scrollstand bei 5747px. Der Browser lädt keinen YouTube-Iframe; die vorhandene Filmzustimmung bleibt erhalten.
- Bei 320, 390, 700, 960 und 1440px Breite: alle sechs verwendeten Bildebenen geladen, keine horizontale Überbreite. Figurbreite 65px auf kleinen, 115px bei 960px und 140px bei 1440px. Messwerte: `responsive-observations.json`.
- Browserkonsole ohne Warnungen oder Fehler. Die finale Grafik entstand ausschließlich mit Adobe; verworfene Zwischenvarianten sind nicht eingebunden.
- `pnpm run build`, `pnpm run format:check` und alle vier bestehenden `pnpm run test:sites`-Prüfungen erfolgreich. Die drei erforderlichen Sites-Builddateien wurden erzeugt. Kein physischer Mobilgerätetest; OS-Bewegungsreduktion ist im vorhandenen Medienpfad und in CSS berücksichtigt, der manuelle Schalter wurde im Browser geprüft.
