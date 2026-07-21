# Manager Academy — manažerský profil

Interaktivní sebereflexní aplikace pro účastníky Manažerské akademie. Propojuje:

- osobnostní pracovní tendence;
- osm pozorovatelných manažerských dovedností;
- situační úsudek v realistických provozních situacích;
- výslednou kartu manažerské „postavy“ a dlouhodobé levelování.

## Důležité vymezení

Tato verze je rozvojový a sebereflexní nástroj. **Není psychologickou diagnostikou, validovaným psychometrickým testem ani podkladem pro nábor, povýšení či hodnocení zaměstnanců.** Pro takové použití by bylo nutné odborné ověření reliability, validity, norem, férovosti a podmínek administrace.

Podrobný základ konstrukce a plán validace je v [docs/METODIKA.md](docs/METODIKA.md).

## Funkce

- úvodní obrazovka s jediným tlačítkem „Spustit“;
- 3 části a celkem 60 položek;
- průběžné ukládání do `localStorage`;
- šest srozumitelných manažerských rolí: Tahoun, Stratég, Mentor, Spojovatel, Organizátor a Inovátor;
- osm dovedností v rozsahu 0–100 a herních statistikách 8–20;
- vektorové mini-scény vysvětlující každou roli;
- stažení výsledné karty jako PNG;
- historie opakovaných měření, XP a úrovně;
- export uživatelských dat do JSON;
- respektování `prefers-reduced-motion` a responzivní rozhraní.

## Lokální spuštění

```bash
npm install
npm run dev
```

## Kontroly

```bash
npm test
npm run build
```

## Nasazení

Repozitář obsahuje workflow pro GitHub Pages. Po zapnutí Pages se aplikace sestaví a nasadí z větve `main` pomocí GitHub Actions.

## Soukromí

V MVP se všechna jména, odpovědi i výsledky ukládají pouze do prohlížeče uživatele. Aplikace nemá server ani analytiku. Vymazání dat je dostupné na stránce výsledku.

