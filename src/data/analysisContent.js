export const ROLE_DETAILS = {
  driver: {
    overview: 'Pravděpodobně přirozeně převádíte záměr do pohybu, držíte tempo a všímáte si toho, co brání výsledku. Lidé u vás obvykle vědí, že práce má mít konkrétní výstup.',
    underPressure: 'Pod tlakem můžete zrychlit natolik, že převezmete řešení, zkrátíte diskusi nebo zaměníte naléhavost za skutečnou prioritu.',
    strengths: ['energie k realizaci', 'ochota rozhodnout', 'zaměření na výsledek'],
    watchouts: ['přebírání práce za tým', 'příliš mnoho naléhavých priorit', 'menší prostor pro učení lidí'],
  },
  strategist: {
    overview: 'Pravděpodobně hledáte souvislosti, ujasňujete směr a snažíte se chránit tým před prací, která nepřispívá k cíli. Než se rozběhnete, potřebujete vědět proč a kam.',
    underPressure: 'Pod tlakem můžete zůstávat příliš dlouho v analýze, měnit směr bez dostatečného překladu do praxe nebo podcenit potřebu rychlého dočasného rozhodnutí.',
    strengths: ['práce s prioritami', 'vidění souvislostí', 'rozhodování podle dopadu'],
    watchouts: ['analýza místo akce', 'příliš abstraktní komunikace', 'časté změny směru'],
  },
  mentor: {
    overview: 'Pravděpodobně vidíte vedení jako rozvoj samostatnosti. Místo okamžité rady dáváte prostor přemýšlení, zpětné vazbě a převzetí odpovědnosti.',
    underPressure: 'Pod tlakem můžete buď sklouznout k hotovým radám, nebo naopak vést dlouhý rozvojový rozhovor ve chvíli, kdy situace vyžaduje jasný pokyn a rychlé rozhodnutí.',
    strengths: ['rozvoj lidí', 'kvalitní otázky', 'podpora samostatnosti'],
    watchouts: ['koučování bez dohody', 'váhání s přímým vedením', 'přílišná trpělivost s opakovaným problémem'],
  },
  connector: {
    overview: 'Pravděpodobně rychle vnímáte vztahy, různé pohledy a místa, kde chybí důvěra nebo společné porozumění. Umíte získávat podporu bez pouhého opírání se o funkci.',
    underPressure: 'Pod tlakem můžete chránit vztah na úkor jasnosti, příliš dlouho hledat shodu nebo nést emoce týmu místo toho, abyste pojmenovali odpovědnost.',
    strengths: ['budování důvěry', 'propojování perspektiv', 'cit pro atmosféru'],
    watchouts: ['vyhýbání se konfliktu', 'konsenzus za každou cenu', 'nejasné hranice'],
  },
  organizer: {
    overview: 'Pravděpodobně vytváříte systém, ve kterém jsou vidět role, termíny a odpovědnosti. Přinášíte týmu předvídatelnost a snižujete chaos v každodenní práci.',
    underPressure: 'Pod tlakem můžete přidávat kontrolu, proces a podrobnosti právě ve chvíli, kdy lidé potřebují více pravomoci nebo jednodušší pravidlo.',
    strengths: ['řád a návaznosti', 'spolehlivé dotažení', 'jasné rozdělení práce'],
    watchouts: ['mikromanagement', 'proces před účelem', 'nižší tolerance k improvizaci'],
  },
  innovator: {
    overview: 'Pravděpodobně rychle vidíte nové možnosti, učíte se ze zkušenosti a dokážete zpochybnit postup, který přestal dávat smysl. Změna je pro vás spíše příležitost než hrozba.',
    underPressure: 'Pod tlakem můžete otevírat další varianty dříve, než je dokončená předchozí změna, nebo podcenit, kolik vysvětlení a stability potřebuje zbytek týmu.',
    strengths: ['učení a přehodnocení', 'hledání alternativ', 'energie pro změnu'],
    watchouts: ['mnoho změn najednou', 'nedotažené experimenty', 'únava týmu ze změn'],
  },
};

export const SKILL_GUIDES = {
  leadership: {
    high: 'Umíte převést širší cíl do priorit, rozhodnout i s neúplnými informacemi a vysvětlit, co je nyní důležité.',
    low: 'Směr nebo rozhodnutí mohou zůstávat příliš dlouho nejasné. Tým pak spotřebovává energii hádáním priorit nebo čekáním na rozhodnutí.',
    overuse: 'Při přehnaném použití se jasný směr může změnit v direktivnost a lidé přestanou přinášet vlastní úsudek.',
    firstStep: 'Na příští poradě formulujte tři priority, jednu věc, kterou teď dělat nebudete, a důvod tohoto rozhodnutí.',
    plan: [
      'Týden 1: Po každé poradě si ověřte, zda každý umí vlastními slovy říct tři priority.',
      'Týden 2: U jednoho odkládaného rozhodnutí napište kritéria, termín a rozhodněte s dostupnými daty.',
      'Týden 3: Vysvětlete týmu nejen co se mění, ale také proč, co zůstává a kdo rozhoduje.',
      'Týden 4: Požádejte dva lidi o příklad situace, kdy jim váš směr pomohl a kdy byl nejasný.',
    ],
    readings: [
      { type: 'Kniha', title: 'The Leadership Challenge', author: 'James Kouzes, Barry Posner', why: 'Praktický rámec důvěryhodného vedení a práce se společným směrem.', url: 'https://www.leadershipchallenge.com/' },
      { type: 'Studie', title: 'First-Time Manager Challenges', author: 'Center for Creative Leadership', why: 'Bezplatný výzkumný přehled přechodu od vlastní práce k vedení druhých.', url: 'https://www.ccl.org/wp-content/uploads/2026/02/leadership-challenges-first-time-managers-research-paper-center-for-creative-leadership.pdf' },
    ],
  },
  communication: {
    high: 'Dokážete naslouchat, přizpůsobit sdělení druhému člověku a vstoupit do náročného rozhovoru dříve, než problém naroste.',
    low: 'Důležitá sdělení mohou zůstat jednostranná nebo příliš nepřímá. Rizikem je domnělá shoda, kterou si každá strana vyloží jinak.',
    overuse: 'Silná potřeba vše vysvětlit může rozhovor prodlužovat nebo zakrýt jednoduché očekávání a rozhodnutí.',
    firstStep: 'V jednom náročném rozhovoru použijte pořadí: pozorovatelný fakt, dopad, pohled druhého, jasná dohoda.',
    plan: [
      'Týden 1: U důležitých zadání si nechte vlastními slovy zopakovat výsledek a termín.',
      'Týden 2: Každý den v jednom rozhovoru nejprve shrňte pohled druhého a až potom reagujte.',
      'Týden 3: Veďte jeden odkládaný rozhovor pomocí faktu, dopadu, otázky a očekávání.',
      'Týden 4: Zeptejte se tří lidí, co ve vaší komunikaci bývá jasné a co musí domýšlet.',
    ],
    readings: [
      { type: 'Kniha', title: 'Difficult Conversations, 3rd Edition', author: 'Douglas Stone, Bruce Patton, Sheila Heen', why: 'Struktura náročných rozhovorů bez obrannosti a zbytečné eskalace.', url: 'https://www.penguinrandomhouse.com/books/722989/difficult-conversations-by-douglas-stone-bruce-patton-and-sheila-heen-foreword-by-roger-fisher/' },
      { type: 'Zdroj', title: 'Active Listening: A Key Skill for Leaders', author: 'Center for Creative Leadership', why: 'Krátký rámec naslouchání, ověřování a porozumění.', url: 'https://www.ccl.org/articles/leading-effectively-articles/coaching-others-use-active-listening-skills/' },
    ],
  },
  coaching: {
    high: 'Pomáháte lidem přemýšlet, formulovat vlastní řešení a převzít konkrétní další krok místo závislosti na vašich odpovědích.',
    low: 'Podpora může často přicházet ve formě hotové rady. Krátkodobě je to rychlé, dlouhodobě ale může udržovat závislost týmu na manažerovi.',
    overuse: 'Koučovací otázky nejsou vhodné pro každou chvíli; při riziku, neznalosti nebo krizi je potřeba také jasná instrukce.',
    firstStep: 'U příštího problému položte před vlastní radou tři otázky: Co už víš? Jaké máš možnosti? Co uděláš jako první?',
    plan: [
      'Týden 1: V každém 1:1 položte alespoň jednu otázku, na kterou opravdu neznáte odpověď.',
      'Týden 2: Nahraďte jednu automatickou radu otázkou „Co už jste zkusil/a?“',
      'Týden 3: Rozvojový rozhovor uzavřete krokem, vlastníkem a termínem návratu.',
      'Týden 4: Rozlište tři režimy: instrukce pro nováčka, společné řešení, koučování zkušeného člověka.',
    ],
    readings: [
      { type: 'Kniha', title: 'The Coaching Habit', author: 'Michael Bungay Stanier', why: 'Sedm praktických otázek pro manažera, který chce méně radit a více rozvíjet.', url: 'https://www.mbs.works/books/' },
      { type: 'Standard', title: 'ICF Core Competencies 2025', author: 'International Coaching Federation', why: 'Přesný přehled naslouchání, dohody, otázek a podpory růstu.', url: 'https://coachingfederation.org/credentialing/coaching-competencies/icf-core-competencies/' },
    ],
  },
  emotional: {
    high: 'Všímáte si emočních signálů, umíte regulovat vlastní reakci a zachovat respekt i ve chvíli, kdy je rozhovor nepříjemný.',
    low: 'Silná emoce nebo tlak mohou zúžit pozornost na úkol a oslabit schopnost vnímat dopad na lidi. To může zvyšovat obrannost a snižovat otevřenost.',
    overuse: 'Empatie bez hranic může vést k přebírání emocí druhých nebo k odkládání nutné odpovědnosti.',
    firstStep: 'Před náročným rozhovorem si napište: co cítím, co jsou fakta, co může prožívat druhý a jaký výsledek potřebuji.',
    plan: [
      'Týden 1: Třikrát denně stručně pojmenujte vlastní emoci, spouštěč a potřebný další krok.',
      'Týden 2: V napjatém rozhovoru udělejte před reakcí jednu vědomou pauzu a ověřovací otázku.',
      'Týden 3: Oddělte empatii od souhlasu: uznejte dopad a současně držte očekávání.',
      'Týden 4: Požádejte blízkého kolegu o zpětnou vazbu, jak působíte pod tlakem.',
    ],
    readings: [
      { type: 'Kniha', title: 'Emotional Agility', author: 'Susan David', why: 'Práce s emocemi bez jejich potlačování ani automatického následování.', url: 'https://www.susandavid.com/book/' },
      { type: 'Studie', title: 'Emotional Intelligence: Theory, Findings, and Implications', author: 'Mayer, Salovey, Caruso', why: 'Původní ability model vnímání, porozumění a řízení emocí.', url: 'https://aec6905spring2013.wordpress.com/wp-content/uploads/2013/01/mayersaloveycaruso-2004.pdf' },
    ],
  },
  delegation: {
    high: 'Předáváte výsledek spolu s pravomocí, hranicemi a kontrolním bodem a dokážete odolat nutkání řídit každý krok.',
    low: 'Úkoly mohou zůstávat u vás nebo se vracet při první komplikaci. Tým pak získává méně zkušenosti a manažer zůstává úzkým hrdlem.',
    overuse: 'Předání bez ověření připravenosti, zdrojů a hranic není delegování, ale odložení odpovědnosti.',
    firstStep: 'Delegujte jeden celý výsledek a výslovně ujasněte: účel, hranice, pravomoc, dostupnou podporu a kontrolní bod.',
    plan: [
      'Týden 1: Sepište úkoly, které musí zůstat vám, a ty, na kterých se může učit někdo další.',
      'Týden 2: U jednoho úkolu delegujte výsledek, nikoli pouze jednotlivé kroky.',
      'Týden 3: Při komplikaci se nejprve zeptejte na návrh řešení; úkol si neberte automaticky zpět.',
      'Týden 4: Vyhodnoťte, zda byly jasné pravomoci, zdroje a okamžik eskalace.',
    ],
    readings: [
      { type: 'Kniha', title: 'Turn the Ship Around!', author: 'L. David Marquet', why: 'Praktický příběh přechodu od řízení lidí k předávání kontroly a odpovědnosti.', url: 'https://davidmarquet.com/books/turn-the-ship-around-book/' },
      { type: 'Kniha', title: 'Multipliers', author: 'Liz Wiseman', why: 'Jak manažer zesiluje úsudek a schopnosti lidí místo toho, aby se stal jediným řešitelem.', url: 'https://thewisemangroup.com/books/multipliers/' },
    ],
  },
  execution: {
    high: 'Udržujete pozornost na podstatné práci, uzavíráte dohody konkrétním vlastníkem a termínem a odstraňujete překážky mimo dosah týmu.',
    low: 'Naléhavé drobnosti mohou vytlačovat důležité úkoly a dohody mohou zůstávat bez vlastníka nebo kontrolního rytmu.',
    overuse: 'Silné zaměření na výkon může přehlížet dlouhodobou kapacitu, učení nebo kvalitu vztahů.',
    firstStep: 'Vyberte tři nejdůležitější výsledky týdne a ke každému napište vlastníka, další krok a datum kontroly.',
    plan: [
      'Týden 1: Zaveďte jeden viditelný seznam tří týmových priorit a rozpracovanou práci omezte.',
      'Týden 2: Každou dohodu uzavřete vlastníkem, dalším krokem a termínem kontroly.',
      'Týden 3: Odstraňte jednu opakovanou překážku, kterou tým bez vaší autority vyřešit nemůže.',
      'Týden 4: Zrušte nebo odložte jednu činnost s malou hodnotou a vyhodnoťte dopad.',
    ],
    readings: [
      { type: 'Kniha', title: 'High Output Management', author: 'Andrew S. Grove', why: 'Manažerská páka, rytmus práce, 1:1 a řízení výstupu týmu.', url: 'https://www.penguinrandomhouse.com/books/72467/high-output-management-by-andrew-s-grove-former-chairman-and-ceo-of-intel/' },
      { type: 'Kniha', title: 'The 4 Disciplines of Execution', author: 'McChesney, Covey, Huling', why: 'Práce s několika prioritami, vedoucími ukazateli a pravidelnou odpovědností.', url: 'https://www.franklincovey.com/the-4-disciplines/' },
    ],
  },
  influence: {
    high: 'Zjišťujete zájmy druhých, budujete důvěru předem a dokážete získat podporu i bez přímé formální autority.',
    low: 'Dobrá myšlenka může zůstat bez podpory, protože nebyli včas zapojeni důležití lidé nebo argumentace neodpovídá jejich potřebám.',
    overuse: 'Příliš mnoho času věnovaného mapování podpory může zpomalit jasné rozhodnutí nebo působit politicky.',
    firstStep: 'Před příštím návrhem si zmapujte tři klíčové lidi: jejich zájem, obavu, potřebný důkaz a vhodný okamžik zapojení.',
    plan: [
      'Týden 1: U jednoho záměru zmapujte podporovatele, váhající a možné odpůrce.',
      'Týden 2: Před formální poradou si ověřte argumenty ve dvou krátkých individuálních rozhovorech.',
      'Týden 3: Stejný záměr vysvětlete jednou přes dopad na výkon a podruhé přes dopad na lidi.',
      'Týden 4: Vyhodnoťte, kde jste použil/a vztah, data, společný cíl nebo formální autoritu.',
    ],
    readings: [
      { type: 'Kniha', title: 'Influence Without Authority', author: 'Allan Cohen, David Bradford', why: 'Získávání spolupráce tam, kde nelze jednoduše vydat pokyn.', url: 'https://www.wiley.com/en-us/Influence+Without+Authority%2C+3rd+Edition-p-9781119347710' },
      { type: 'Zdroj', title: 'The Core Leadership Skills You Need', author: 'Center for Creative Leadership', why: 'Praktický rámec komunikace, vlivu, sebeuvědomění a učící se agility.', url: 'https://www.ccl.org/articles/leading-effectively-articles/fundamental-4-core-leadership-skills-for-every-career-stage/' },
    ],
  },
  adaptability: {
    high: 'Aktivně vyhledáváte zpětnou vazbu, měníte názor při nových informacích a převádíte zkušenost do dalšího experimentu.',
    low: 'Osvědčený postup může zůstávat beze změny i poté, co se proměnily podmínky. Zpětná vazba pak přichází pozdě nebo pouze při problému.',
    overuse: 'Časté přehodnocování může týmu brát stabilitu a vést k rozpracování mnoha změn bez dotažení.',
    firstStep: 'Po jedné náročné situaci proveďte desetiminutovou reflexi: co zachovat, co změnit a jaký malý experiment udělat příště.',
    plan: [
      'Týden 1: Po dvou důležitých situacích napište krátké „zachovat–změnit–vyzkoušet“.',
      'Týden 2: Požádejte o zpětnou vazbu na oblast, ve které se považujete za silného manažera.',
      'Týden 3: Otestujte jednu změnu v malém rozsahu a předem určete, podle čeho ji vyhodnotíte.',
      'Týden 4: Jednu nefunkční praktiku ukončete a jednu fungující vědomě standardizujte.',
    ],
    readings: [
      { type: 'Kniha', title: 'Think Again', author: 'Adam Grant', why: 'Jak přehodnocovat vlastní přesvědčení a zůstat otevřený novým důkazům.', url: 'https://adamgrant.net/book/think-again/' },
      { type: 'Kniha', title: 'Immunity to Change', author: 'Robert Kegan, Lisa Lahey', why: 'Proč dobrý úmysl často nestačí ke změně chování a jak odhalit skryté závazky.', url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=37206' },
    ],
  },
};
