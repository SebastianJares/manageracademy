# Manager Academy — manažerský profil

Interaktivní sebereflexní aplikace pro účastníky Manažerské akademie. Propojuje:

- osobnostní pracovní tendence;
- osm pozorovatelných manažerských dovedností;
- situační úsudek v realistických provozních situacích;
- výslednou kartu manažera, detailní interpretaci a konkrétní rozvojový plán.

## Důležité vymezení

Tato verze je rozvojový a sebereflexní nástroj. **Není psychologickou diagnostikou, validovaným psychometrickým testem ani podkladem pro nábor, povýšení či hodnocení zaměstnanců.** Pro takové použití by bylo nutné odborné ověření reliability, validity, norem, férovosti a podmínek administrace.

Podrobný základ konstrukce a plán validace je v [docs/METODIKA.md](docs/METODIKA.md).

## Funkce

- úvodní obrazovka s jediným tlačítkem „Spustit“;
- 3 části a celkem 98 položek;
- 30 položek pracovních tendencí, 48 behaviorálních položek a 20 situačních dilemat;
- průběžné ukládání do `localStorage`;
- šest srozumitelných manažerských rolí: Tahoun, Stratég, Mentor, Spojovatel, Organizátor a Inovátor;
- osm dovedností v rozsahu 0–100 a herních statistikách 8–20;
- vektorové mini-scény vysvětlující každou roli;
- stažení výsledné karty jako PNG;
- detailní rozbor silných stránek, rozvojových míst, kombinovaných rizik a shody zdrojů;
- samostatná analýza HTML s možností tisku do PDF;
- čtyřtýdenní plán a literatura navázaná na hlavní rozvojovou prioritu;
- koncept `.eml` pro desktopový Outlook s kartou i analýzou v příloze;
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
npm run publish:pages
```

## Nasazení

GitHub Pages publikuje kořen větve `main`. Příkaz `npm run publish:pages` sestaví Vite aplikaci a zkopíruje produkční `index.html`, `assets` a faviconu do kořene repozitáře. Workflow na každém pushi znovu spouští testy a kontrolní build.

## Soukromí

Všechna jména, odpovědi i výsledky se ukládají pouze do prohlížeče uživatele. Aplikace nemá server ani analytiku. Outlook koncept se vytvoří lokálně a uživatel musí jeho otevření a odeslání sám potvrdit. Vymazání dat je dostupné na stránce výsledku.
