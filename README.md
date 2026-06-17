# weberpappdesign.art

Minimalistische statische Website fuer WEBER PAPPDESIGN.

## Inhalt

- `assets/part-1.svg`: Teil 1 als SVG mit in Pfade umgewandelter Schrift.
- `assets/part-2.mp4`: Teil 2 als optimiertes MP4.
- `assets/part-3.svg`: Teil 3 als SVG mit in Pfade umgewandelter Schrift und anklickbaren E-Mail-Bereichen.
- `CNAME`: GitHub-Pages-Domain `weberpappdesign.art`.

Die sichtbare Typografie der SVGs ist nicht als Webfont gesetzt, sondern als Vektorpfad exportiert. Dadurch bleibt die originale Schriftform im Browser erhalten.

Die Medien werden mit einer kleinen statischen Fit-Logik aus ihren nativen Breiten/Hoehen gesetzt. Das ist von [ASCILINE](https://github.com/YusufB5/ASCILINE)s Auto-Scaling-Prinzip inspiriert: die Ausgabehoehe wird aus dem Quellseitenverhaeltnis abgeleitet, damit Bilder und Video nicht gestreckt werden. ASCILINE selbst ist nicht eingebunden, weil GitHub Pages keinen Python/FastAPI/WebSocket-Backendprozess ausfuehrt.

## Lokal testen

```bash
python -m http.server 8000
```

Danach im Browser oeffnen: `http://localhost:8000`
