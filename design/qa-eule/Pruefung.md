# Eule am linken Stamm – Prüfung vom 1. Oktober 2026

- Desktop 1440 × 900: Eule neben der Elternüberschrift, im Vordergrund durch den tatsächlichen linken Baum verdeckt. Kopf und Körper bilden eine saubere gemeinsame Figur. `desktop-peek.jpg` zeigt den Seitenkontext.
- Dieselbe Scrollstrecke vorwärts und rückwärts: bei Elternoberkante 824px endet die Eulenlage bei x = −16px vollständig außerhalb des Bildes; bei Elternoberkante 104px liegt sie wieder bei x = 24px und schaut hervor. Keine Deckkraftblende. Beleg `desktop-hidden.jpg`.
- Mobile Eintrittsphase bei 390px Breite: vor dem Abschnitt Eulenende x = −52px, während des Eintritts x = 21,23px, in der hervorschauenden Pose x = 50px. Der Baum liegt vor der Eule (Ebene 2 vor Ebene 1).
- 320, 390, 700, 960 und 1440px Breite: kein horizontaler Überlauf und keine defekten Bilder. Die neuen Grafiken bleiben am linken Rand; die Elternüberschrift, Links und FAQ sind lesbar. Screenshots für 320, 390 und 960px gespeichert.
- Bewegung reduzieren: Scrolltransformation entfernt, Kopf ohne Transformation, vollständige ruhige hervorschauende Pose erhalten. Wieder einschalten funktioniert. Natürliche Kopfbewegung und Verdeckung in der Vorschau überprüft.
- Browserkonsole: keine Warnungen oder Fehler. Kopfzyklus nutzt dieselbe Sichtbarkeits- und Tab-Pausierung wie die übrigen Naturbewegungen.
- Produktionsbuild und Formatprüfung erfolgreich; alle vier vorhandenen Sites-Prüfungen erfolgreich. Erforderliche Buildausgaben vorhanden.

Neue Bildproduktion und Bildbearbeitung ausschließlich Adobe. Eine Firefly-Generierung, keine Variantenserie. Zwei finale lokale transparente PNG-Lagen, dokumentiert in `public/images/ASSETS.md`.
