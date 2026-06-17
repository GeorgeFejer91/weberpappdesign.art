# Domain mit GitHub Pages verbinden

Diese Schritte verbinden `weberpappdesign.art` mit der GitHub-Pages-Seite.

GitHub Pages ist im Repository bereits fuer Branch `main` und Ordner `/ (root)` aktiviert. Aktuell ist die Custom Domain noch nicht aktiv, damit die Seite direkt ueber die GitHub-Pages-Adresse erreichbar bleibt.

1. Beim Domain-Anbieter die DNS-Verwaltung fuer `weberpappdesign.art` oeffnen.
2. Fuer die Hauptdomain vier A-Records anlegen:

| Typ | Name/Host | Wert |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

3. Optional fuer IPv6 vier AAAA-Records anlegen:

| Typ | Name/Host | Wert |
| --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

4. Optional `www.weberpappdesign.art` weiterleiten:

| Typ | Name/Host | Wert |
| --- | --- | --- |
| CNAME | www | GeorgeFejer91.github.io |

5. In GitHub das Repository `GeorgeFejer91/weberpappdesign.art` oeffnen.
6. `Settings` > `Pages` oeffnen.
7. Unter `Build and deployment` als Source `Deploy from a branch` waehlen.
8. Branch `main` und Ordner `/ (root)` auswaehlen, dann speichern.
9. Unter `Custom domain` exakt `weberpappdesign.art` eintragen und speichern.
10. Lokal im Repository eine Datei `CNAME` mit exakt diesem Inhalt anlegen:

```text
weberpappdesign.art
```

11. Die Datei committen und nach GitHub pushen.
12. Warten, bis GitHub die DNS-Pruefung abgeschlossen hat. Das kann wenige Minuten bis 24 Stunden dauern.
13. Sobald verfuegbar, `Enforce HTTPS` aktivieren.

Die Datei `CNAME` erst dann hinzufuegen, wenn `weberpappdesign.art` wirklich auf GitHub Pages zeigen soll. Ohne diese Datei bleibt die Seite unter der Standardadresse `https://georgefejer91.github.io/weberpappdesign.art/` erreichbar.

Quelle fuer die DNS-Werte: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
