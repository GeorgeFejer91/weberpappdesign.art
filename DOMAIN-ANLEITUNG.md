# Domain mit GitHub Pages verbinden

Diese Schritte verbinden `weberpappdesign.art` mit der GitHub-Pages-Seite.

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
10. Warten, bis GitHub die DNS-Pruefung abgeschlossen hat. Das kann wenige Minuten bis 24 Stunden dauern.
11. Sobald verfuegbar, `Enforce HTTPS` aktivieren.

Die Datei `CNAME` ist bereits im Repository enthalten. Dadurch bleibt die Custom Domain auch nach spaeteren Deployments gesetzt.
