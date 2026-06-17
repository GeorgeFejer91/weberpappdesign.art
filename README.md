# weberpappdesign.art

Minimalistische statische Website fuer WEBER PAPPDESIGN.

## Inhalt

- `assets/box-images/hero.svg` und `assets/box-images/box-01.svg` bis `box-09.svg`: die aus der PDF-Quelle extrahierten Produktbilder als einzelne SVG-Assets.
- `assets/part-2.mp4`: Teil 2 als optimiertes MP4.
- HTML/CSS: Produkttext, Preistabelle, Kontakt und Impressumszeilen als echte Courier-Textstruktur.
- `CNAME`: GitHub-Pages-Domain `weberpappdesign.art`.

Die PDF-Schrift wurde mit `pdffonts` und `pdftohtml` identifiziert: der eingebettete TrueType-Subset heisst `NQCISD+Courier`, also ist die Schriftfamilie `Courier`. Die Website nutzt deshalb Courier als erste Schrift im Stack.

Die Medien werden mit einer kleinen statischen Fit-Logik aus ihren nativen Breiten/Hoehen gesetzt. Das ist von [ASCILINE](https://github.com/YusufB5/ASCILINE)s Auto-Scaling-Prinzip inspiriert: die Ausgabehoehe wird aus dem Quellseitenverhaeltnis abgeleitet, damit Bilder und Video nicht gestreckt werden. ASCILINE selbst ist nicht eingebunden, weil GitHub Pages keinen Python/FastAPI/WebSocket-Backendprozess ausfuehrt.

## Lokal testen

```bash
python -m http.server 8000
```

Danach im Browser oeffnen: `http://localhost:8000`
