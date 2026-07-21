export const AGREEMENT_SCALE = [
  { value: 1, label: 'Vůbec nevystihuje' },
  { value: 2, label: 'Spíše nevystihuje' },
  { value: 3, label: 'Něco mezi' },
  { value: 4, label: 'Spíše vystihuje' },
  { value: 5, label: 'Velmi vystihuje' },
];

export const FREQUENCY_SCALE = [
  { value: 1, label: 'Téměř nikdy' },
  { value: 2, label: 'Málokdy' },
  { value: 3, label: 'Asi v polovině případů' },
  { value: 4, label: 'Ve většině případů' },
  { value: 5, label: 'Téměř pokaždé' },
];

export const TRAITS = {
  openness: {
    label: 'Otevřenost změně',
    short: 'Otevřenost',
    lowPole: 'Ověřený postup',
    highPole: 'Nové možnosti',
    low: 'Dáváte přednost konkrétním, prověřeným postupům a změnu potřebujete opřít o praktický důvod.',
    high: 'Přirozeně hledáte nové souvislosti, alternativy a možnosti, jak věci dělat jinak.',
  },
  conscientiousness: {
    label: 'Systematičnost',
    short: 'Systematičnost',
    lowPole: 'Pružnost',
    highPole: 'Struktura',
    low: 'Přirozeně reagujete pružně a strukturu vytváříte hlavně tehdy, když je skutečně potřeba.',
    high: 'Přirozeně vytváříte pořadí, plán, pravidelnost a uzavíráte rozpracované věci.',
  },
  extraversion: {
    label: 'Sociální energie',
    short: 'Sociální energie',
    lowPole: 'Klid a rozvaha',
    highPole: 'Kontakt a aktivita',
    low: 'Energii čerpáte spíše z klidu, menších skupin a času na promyšlení odpovědi.',
    high: 'Energii získáváte z kontaktu, aktivity a viditelného zapojení mezi lidmi.',
  },
  agreeableness: {
    label: 'Kooperativnost',
    short: 'Kooperativnost',
    lowPole: 'Přímost a kritičnost',
    highPole: 'Porozumění a shoda',
    low: 'Přirozeně zpochybňujete, chráníte věcnou stránku a dokážete vstoupit do nesouhlasu přímo.',
    high: 'Přirozeně hledáte porozumění, spolupráci a způsob, který chrání pracovní vztah.',
  },
  stability: {
    label: 'Emoční stabilita',
    short: 'Stabilita',
    lowPole: 'Citlivost na tlak',
    highPole: 'Klid pod tlakem',
    low: 'Napětí, nejistotu a zpětnou vazbu pravděpodobně prožíváte intenzivněji a déle.',
    high: 'Pod tlakem si obvykle udržíte odstup, klid a schopnost zvolit další krok.',
  },
};

export const SKILLS = {
  leadership: { label: 'Leadership', cardLabel: 'Vedení', description: 'Směr, priority a rozhodování v nejistotě.' },
  communication: { label: 'Komunikace', cardLabel: 'Komunikace', description: 'Jasnost, naslouchání a náročné rozhovory.' },
  coaching: { label: 'Koučování', cardLabel: 'Koučování', description: 'Otázky, rozvoj samostatnosti a následná dohoda.' },
  emotional: { label: 'Emoční inteligence', cardLabel: 'Emoce', description: 'Vnímání emocí, empatie a regulace vlastní reakce.' },
  delegation: { label: 'Delegování', cardLabel: 'Delegování', description: 'Předání výsledku, pravomoci a odpovědnosti.' },
  execution: { label: 'Realizace', cardLabel: 'Realizace', description: 'Dotažení, kontrolní rytmus a odstraňování překážek.' },
  influence: { label: 'Spolupráce a vliv', cardLabel: 'Vliv', description: 'Důvěra, práce se stakeholdery a získávání podpory.' },
  adaptability: { label: 'Adaptabilita', cardLabel: 'Adaptace', description: 'Učení ze zkušenosti a pružná změna postupu.' },
};

export const ARCHETYPES = {
  driver: {
    label: 'Tahoun', subtitle: 'Rozhýbává práci a drží směr k výsledku',
    motto: 'Energie získává hodnotu teprve tehdy, když dovede tým do cíle.', color: '#ffb44a',
    weights: { execution: 0.34, leadership: 0.28, influence: 0.14, adaptability: 0.14, communication: 0.1 },
    traits: { conscientiousness: 0.06, extraversion: 0.04 },
  },
  strategist: {
    label: 'Stratég', subtitle: 'Vidí souvislosti a mění nejistotu v priority',
    motto: 'Nejlepší cesta nezačíná rychlostí, ale správným směrem.', color: '#7ddcff',
    weights: { leadership: 0.34, adaptability: 0.24, execution: 0.16, influence: 0.14, communication: 0.12 },
    traits: { openness: 0.07, conscientiousness: 0.03 },
  },
  mentor: {
    label: 'Mentor', subtitle: 'Rozvíjí samostatnost a potenciál lidí',
    motto: 'Silný tým nevzniká z hotových odpovědí, ale z dobrých otázek.', color: '#62e3b7',
    weights: { coaching: 0.34, emotional: 0.22, communication: 0.2, adaptability: 0.12, delegation: 0.12 },
    traits: { agreeableness: 0.06, stability: 0.04 },
  },
  connector: {
    label: 'Spojovatel', subtitle: 'Propojuje lidi, pohledy a společný zájem',
    motto: 'Důvěra není měkkost. Je to infrastruktura spolupráce.', color: '#f08cff',
    weights: { communication: 0.28, influence: 0.26, emotional: 0.22, coaching: 0.12, leadership: 0.12 },
    traits: { agreeableness: 0.06, extraversion: 0.04 },
  },
  organizer: {
    label: 'Organizátor', subtitle: 'Dává práci systém, role a předvídatelný rytmus',
    motto: 'Dobře nastavený systém uvolňuje lidem ruce pro dobrou práci.', color: '#a8a3ff',
    weights: { delegation: 0.28, execution: 0.28, leadership: 0.2, communication: 0.12, adaptability: 0.12 },
    traits: { conscientiousness: 0.08, stability: 0.02 },
  },
  innovator: {
    label: 'Inovátor', subtitle: 'Otevírá nové možnosti a provází tým změnou',
    motto: 'Změna se stává pokrokem, když jí lidé rozumějí a unesou ji.', color: '#9b7cff',
    weights: { adaptability: 0.32, leadership: 0.2, influence: 0.16, communication: 0.14, coaching: 0.1, emotional: 0.08 },
    traits: { openness: 0.08, extraversion: 0.02 },
  },
};

export const PREFERENCES = {
  driver: {
    label: 'Výsledek a tempo',
    short: 'Výsledek',
    color: '#ffb44a',
    description: 'Energii vám pravděpodobně dává viditelný posun, rozhodnutí a dotažení podstatné práce.',
    low: 'Tlak na rychlé uzavření věcí pro vás nemusí být přirozeným zdrojem energie; tempo proto můžete držet spíše vědomě nebo prostřednictvím systému.',
    watchout: 'Při přehnaném použití může rychlost předběhnout porozumění, učení lidí nebo kvalitu rozhodnutí.',
  },
  strategist: {
    label: 'Směr a souvislosti',
    short: 'Směr',
    color: '#7ddcff',
    description: 'Přirozeně vás pravděpodobně přitahuje hledání směru, významu, souvislostí a rozhodujících priorit.',
    low: 'Dlouhé hledání širšího obrazu vás nemusí nabíjet; směr si pravděpodobně raději ověřujete prostřednictvím konkrétní práce a výsledků.',
    watchout: 'Při přehnaném použití může promýšlení směru oddalovat rozhodnutí nebo vzdalovat vedení každodenní realitě týmu.',
  },
  mentor: {
    label: 'Růst a samostatnost',
    short: 'Růst lidí',
    color: '#62e3b7',
    description: 'Smysl vám pravděpodobně přináší růst druhých, jejich učení a postupně větší samostatnost.',
    low: 'Rozvojové rozhovory nemusí být první činností, ke které vás práce táhne; podporu lidí můžete poskytovat spíše prakticky a podle potřeby.',
    watchout: 'Při přehnaném použití může rozvojový rozhovor nahrazovat jasnou instrukci, hranici nebo rozhodnutí, které situace právě vyžaduje.',
  },
  connector: {
    label: 'Důvěra a propojení',
    short: 'Propojení',
    color: '#f08cff',
    description: 'Pozornost vám pravděpodobně přirozeně míří ke vztahům, společnému zájmu a zapojení důležitých lidí.',
    low: 'Budování širší sítě vztahů pro vás nemusí být samo o sobě přitažlivé; spolupráci pravděpodobně opíráte více o roli, úkol nebo jasnou dohodu.',
    watchout: 'Při přehnaném použití může potřeba podpory a shody zdržovat nepříjemné rozhodnutí nebo rozmělňovat odpovědnost.',
  },
  organizer: {
    label: 'Řád a spolehlivost',
    short: 'Systém',
    color: '#a8a3ff',
    description: 'Přirozenou hodnotu pravděpodobně vidíte v jasných rolích, návaznostech a systému, na který se lze spolehnout.',
    low: 'Tvorba rámců a pravidel vás nemusí sama o sobě nabíjet; pořádek pravděpodobně vytváříte hlavně tehdy, když řeší konkrétní potřebu.',
    watchout: 'Při přehnaném použití může systém začít chránit sám sebe a omezovat pružnost, iniciativu nebo potřebnou výjimku.',
  },
  innovator: {
    label: 'Změna a objevování',
    short: 'Změna',
    color: '#9b7cff',
    description: 'Energii vám pravděpodobně přinášejí nové možnosti, experimentování a překonávání zažitých omezení.',
    low: 'Samotná novost pro vás nemusí být lákavá; změnu pravděpodobně přijímáte tehdy, když má jasný praktický přínos.',
    watchout: 'Při přehnaném použití může množství nových možností tříštit pozornost a snižovat počet skutečně dokončených změn.',
  },
};

export const SECTIONS = [
  {
    id: 'personality', number: 'I', title: 'Osobnostní kompas', estimate: '7 min',
    description: 'Třicet krátkých položek mapuje pět pracovních tendencí. Žádný pól není automaticky lepší.',
    instruction: 'Odpovídejte podle toho, co vás vystihuje dlouhodobě, ne podle ideálu manažera.',
  },
  {
    id: 'skills', number: 'II', title: 'Manažerské chování', estimate: '10 min',
    description: 'Čtyřicet konkrétních projevů osmi manažerských dovedností.',
    instruction: 'Hodnoťte podíl skutečných příležitostí za poslední tři měsíce. „Téměř pokaždé“ neznamená „umím to“, ale opravdu časté chování.',
  },
  {
    id: 'preferences', number: 'III', title: 'Manažerský kompas', estimate: '5 min',
    description: 'Deset voleb mezi stejně hodnotnými prioritami odhaluje, co vás ve vedení přirozeně přitahuje a co méně.',
    instruction: 'V každé trojici označte, co vás vystihuje nejvíc a nejméně. Zbývající možnost zůstane uprostřed. Nehodnotíte správnost ani schopnost — pouze relativní preference.',
  },
  {
    id: 'situations', number: 'IV', title: 'Úsudek v praxi', estimate: '11 min',
    description: 'Dvacet dilemat s několika obhajitelnými cestami a rozdílnými kompromisy.',
    instruction: 'Vyberte, co byste pravděpodobně udělal/a jako první. Nehledejte nejdelší ani „nejhezčí“ odpověď; jednotlivé varianty zvýrazňují různé manažerské priority.',
  },
];

const personalityItems = [
  ['p01', 'extraversion', false, 'Ve skupině se obvykle zapojuji do hovoru mezi prvními.'],
  ['p02', 'agreeableness', false, 'Při neshodě se nejprve snažím pochopit důvody druhé strany.'],
  ['p03', 'conscientiousness', false, 'Před zahájením práce si obvykle ujasním pořadí jednotlivých kroků.'],
  ['p04', 'stability', false, 'I pod časovým tlakem dokážu uvažovat bez zbrklosti.'],
  ['p05', 'openness', false, 'Nový způsob práce ve mně obvykle vzbuzuje zvědavost.'],
  ['p06', 'extraversion', true, 'Na větších setkáních raději pozoruji ostatní, než abych se zapojoval/a do hovoru.'],
  ['p07', 'agreeableness', true, 'Při rozhodování je pro mě věcně správné řešení důležitější než to, jak jeho sdělení ovlivní vztahy.'],
  ['p08', 'conscientiousness', true, 'Pravidelné plánování a vedení přehledu úkolů mě spíše svazuje.'],
  ['p09', 'stability', true, 'Po nepříjemném rozhovoru se k němu v myšlenkách dlouho vracím.'],
  ['p10', 'openness', true, 'Když nějaký postup funguje, nemám potřebu hledat jiný.'],
  ['p11', 'extraversion', false, 'Kontakt s větším počtem lidí mi zpravidla dodává energii.'],
  ['p12', 'agreeableness', false, 'Snadno si všimnu, když se někdo v týmu necítí dobře.'],
  ['p13', 'conscientiousness', false, 'Než začnu něco dalšího, potřebuji dokončit rozpracované věci.'],
  ['p14', 'stability', false, 'Zpětnou vazbu dokážu vyslechnout, aniž bych na ni musel/a hned reagovat.'],
  ['p15', 'openness', false, 'Baví mě propojovat nápady, které spolu na první pohled nesouvisejí.'],
  ['p16', 'extraversion', true, 'Po dni plném rozhovorů potřebuji delší dobu bez kontaktu s dalšími lidmi.'],
  ['p17', 'agreeableness', true, 'Když je potřeba podat výkon, pocity ostatních u mě ustupují do pozadí.'],
  ['p18', 'conscientiousness', true, 'Pořádek v úkolech začínám řešit až ve chvíli, kdy vznikne problém.'],
  ['p19', 'stability', true, 'Nejistota před důležitým rozhodnutím mi výrazně ztěžuje další postup.'],
  ['p20', 'openness', true, 'Diskuse o možnostech, které nemají okamžité praktické využití, mě rychle unavují.'],
  ['p21', 'extraversion', false, 'Při společné práci často přináším do týmu energii a svižné tempo.'],
  ['p22', 'agreeableness', false, 'Při posuzování chyby odděluji člověka od jeho konkrétního jednání.'],
  ['p23', 'conscientiousness', false, 'Termíny a závazky si hlídám i bez připomínání od ostatních.'],
  ['p24', 'stability', false, 'Po nečekané komplikaci se dokážu poměrně rychle vrátit k řešení.'],
  ['p25', 'openness', false, 'Rád/a zkouším menší experimenty, pokud mohou přinést lepší postup.'],
  ['p26', 'extraversion', true, 'Než promluvím před skupinou, potřebuji si svou odpověď nejprve promyslet.'],
  ['p27', 'agreeableness', true, 'Ostrá výměna názorů mi obvykle nevadí, pokud vede k lepšímu rozhodnutí.'],
  ['p28', 'conscientiousness', true, 'Lépe se mi pracuje s volným rámcem než s předem daným harmonogramem.'],
  ['p29', 'stability', true, 'Když se něco nepovede, ovlivňuje to můj výkon i při dalších úkolech.'],
  ['p30', 'openness', true, 'Dávám přednost řešení praktických detailů před hledáním širších souvislostí.'],
];

export const personalityQuestions = personalityItems.map(([id, trait, reverse, text]) => ({
  id, section: 'personality', trait, reverse, text, scale: AGREEMENT_SCALE,
}));

const skillItems = {
  leadership: [
    ['Když se střetnou dva důležité požadavky, rozhodnu ve stanoveném termínu a vysvětlím kritéria svého rozhodnutí.'],
    ['Při zadávání úkolu popíšu očekávaný výsledek, jeho smysl a hranice samostatného rozhodování.'],
    ['I při nejasném zadání nechám práci pokračovat a podrobnosti upřesňuji až podle toho, jak se vyvíjí.', true],
    ['Když nemám úplné informace, pojmenuji své předpoklady a rizika a učiním předběžné rozhodnutí.'],
    ['Nepříjemné rozhodnutí odkládám, dokud další vývoj neukáže jednoznačnou cestu.', true],
  ],
  communication: [
    ['U důležitého sdělení si ověřím, zda mu druhá strana porozuměla tak, jak jsem zamýšlel/a.'],
    ['Než zareaguji na nesouhlas, shrnu vlastními slovy pohled druhé strany.'],
    ['Ticho po mém sdělení obvykle považuji za dostatečný projev souhlasu.', true],
    ['Při náročném rozhovoru popisuji konkrétní chování, jeho dopad a svá jasná očekávání.'],
    ['Citlivé téma raději řeším písemně, i když by přímý rozhovor přinesl větší porozumění.', true],
  ],
  coaching: [
    ['Když za mnou někdo přijde s problémem, nejprve zjišťuji, co už zkusil a jaké možnosti řešení vidí.'],
    ['Rozvojový rozhovor zakončím dohodou o konkrétním kroku, o tom, kdo za něj odpovídá, a o termínu, kdy se k tématu vrátíme.'],
    ['Když znám řešení, sdělím ho dříve, než si vyslechnu návrh druhého člověka.', true],
    ['Dokážu rozlišit, kdy člověk potřebuje jasný pokyn, společné hledání řešení nebo koučovací otázky.'],
    ['Po dobrém rozhovoru spoléhám na to, že změna přijde sama, a nedomlouvám další kontrolu.', true],
  ],
  emotional: [
    ['Dokážu pojmenovat, jak mé momentální emoce ovlivňují můj úsudek.'],
    ['Při konfliktu jednám s respektem, i když s druhým člověkem zásadně nesouhlasím.'],
    ['Když mě někdo rozčílí, soustředím se hlavně na obhajobu svého pohledu.', true],
    ['Dokážu uznat emoce druhého člověka nebo dopad situace a zároveň trvat na pracovních očekáváních.'],
    ['Napětí v týmu raději nechávám odeznít, než abych se na jeho příčinu přímo zeptal/a.', true],
  ],
  delegation: [
    ['Při delegování vyjasním očekávaný výsledek, pravomoci, omezení a termín kontroly.'],
    ['Když někomu předám odpovědnost za výsledek, nechávám mu prostor zvolit vlastní postup.'],
    ['Při první komplikaci mám tendenci převzít delegovaný úkol zpět.', true],
    ['Předem se domluvím, ve kterých situacích má člověk rozhodnout sám a kdy se má obrátit na mě.'],
    ['Úkol rozděluji na malé kroky, i když by zkušený člověk zvládl převzít odpovědnost za celek.', true],
  ],
  execution: [
    ['Dohodu uzavřu tím, že jasně určím odpovědnou osobu, další krok a termín kontroly.'],
    ['Aktivně odstraňuji překážky, které tým nedokáže vyřešit bez zásahu vedoucího.'],
    ['Naléhavé drobnosti mi opakovaně odsouvají důležitou práci.', true],
    ['Když začíná klesat kvalita, omezím množství práce rozpracované ve stejnou dobu.'],
    ['Výsledek kontroluji až v termínu dokončení, abych lidi během práce nerušil/a.', true],
  ],
  influence: [
    ['Před předložením důležitého návrhu zjišťuji, co je podstatné pro lidi, kterých se týká.'],
    ['Stejný záměr dokážu vysvětlit různými argumenty podle toho, s kým mluvím.'],
    ['Podporu pro dobrý návrh začínám získávat až na formální poradě.', true],
    ['Dokážu pojmenovat společný zájem i mezi lidmi s rozdílnými cíli.'],
    ['Když lidé nesouhlasí, rychle se opřu o svou funkci nebo o autoritu nadřízeného.', true],
  ],
  adaptability: [
    ['Po náročné situaci si pojmenuji, co příště zachovám a co změním.'],
    ['Aktivně žádám o zpětnou vazbu i k oblastem, ve kterých se cítím silný/á.'],
    ['Osvědčený postup změním až ve chvíli, kdy už zjevně nefunguje.', true],
    ['Nový postup nejprve ověřím v malém experimentu s předem stanovenými kritérii.'],
    ['Po neúspěchu se soustředím na rychlou nápravu a k jeho příčinám se už nevracím.', true],
  ],
};

export const skillQuestions = Object.entries(skillItems).flatMap(([skill, items]) =>
  items.map(([text, reverse = false], index) => ({
    id: `s-${skill}-${index + 1}`, section: 'skills', skill, text, reverse, scale: FREQUENCY_SCALE,
  })),
);

export const preferenceQuestions = [
  {
    id: 'f01', section: 'preferences',
    text: 'Máte nečekaně volnou hodinu, kterou můžete věnovat vedení týmu. Která činnost by vám přinesla největší a která nejmenší uspokojení?',
    options: [
      { id: 'a', preference: 'driver', text: 'Posunout důležitý úkol k jasně viditelnému výsledku.' },
      { id: 'b', preference: 'strategist', text: 'Ujasnit směr týmu a několik klíčových priorit.' },
      { id: 'c', preference: 'mentor', text: 'Promyslet, jak někomu pomoci k větší samostatnosti.' },
    ],
  },
  {
    id: 'f02', section: 'preferences',
    text: 'Na poradě se otevře téma, za které nikdo jasně neodpovídá. Ke kterému kroku byste měl/a největší a ke kterému nejmenší tendenci?',
    options: [
      { id: 'a', preference: 'driver', text: 'Převzít iniciativu a rozhýbat další postup.' },
      { id: 'b', preference: 'strategist', text: 'Nejprve zasadit téma do širšího kontextu.' },
      { id: 'c', preference: 'connector', text: 'Propojit lidi, jejichž podpora bude rozhodující.' },
    ],
  },
  {
    id: 'f03', section: 'preferences',
    text: 'Která možnost by vám na konci náročného týdne přinesla největší a která nejmenší uspokojení?',
    options: [
      { id: 'a', preference: 'driver', text: 'Dovést důležitou práci k měřitelnému posunu.' },
      { id: 'b', preference: 'mentor', text: 'Vidět, že si někdo poradil samostatněji než dříve.' },
      { id: 'c', preference: 'organizer', text: 'Nastavit rámec, který týmu usnadní další práci.' },
    ],
  },
  {
    id: 'f04', section: 'preferences',
    text: 'Když se tým nemůže pohnout dál, co vás nejvíce a co nejméně láká udělat?',
    options: [
      { id: 'a', preference: 'driver', text: 'Zvolit další krok a obnovit pracovní tempo.' },
      { id: 'b', preference: 'connector', text: 'Najít společný zájem a získat potřebnou podporu.' },
      { id: 'c', preference: 'innovator', text: 'Vyzkoušet jiný přístup v malém a bezpečném experimentu.' },
    ],
  },
  {
    id: 'f05', section: 'preferences',
    text: 'Kdybyste mohl/a zlepšit fungování týmu, která z následujících možností by vás lákala nejvíce a která nejméně?',
    options: [
      { id: 'a', preference: 'driver', text: 'Zrychlit cestu od rozhodnutí k dokončenému výsledku.' },
      { id: 'b', preference: 'organizer', text: 'Zpřehlednit role, návaznosti a rytmus spolupráce.' },
      { id: 'c', preference: 'innovator', text: 'Odstranit překážku, která brání novému způsobu práce.' },
    ],
  },
  {
    id: 'f06', section: 'preferences',
    text: 'Když přemýšlíte o příštím půlroce, co vás zajímá nejvíce a co nejméně?',
    options: [
      { id: 'a', preference: 'strategist', text: 'Který směr bude mít pro tým největší význam.' },
      { id: 'b', preference: 'mentor', text: 'Kdo může růst a jakou zkušenost k tomu potřebuje.' },
      { id: 'c', preference: 'innovator', text: 'Které nové možnosti stojí za bezpečné vyzkoušení.' },
    ],
  },
  {
    id: 'f07', section: 'preferences',
    text: 'Kdybyste nastupoval/a do nového týmu, čemu byste chtěl/a porozumět nejdříve a co by pro vás bylo nejméně naléhavé?',
    options: [
      { id: 'a', preference: 'strategist', text: 'Kam tým směřuje a podle čeho určuje priority.' },
      { id: 'b', preference: 'connector', text: 'Jaké vztahy a dohody drží týmovou spolupráci pohromadě.' },
      { id: 'c', preference: 'organizer', text: 'Jak jsou nastaveny role, odpovědnost a předávání informací.' },
    ],
  },
  {
    id: 'f08', section: 'preferences',
    text: 'Když dostanete složitý problém bez jasného řešení, který přístup by vás přitahoval nejvíce a který nejméně?',
    options: [
      { id: 'a', preference: 'strategist', text: 'Najít vzorec, který pomůže oddělit podstatné od vedlejšího.' },
      { id: 'b', preference: 'organizer', text: 'Rozdělit problém na přehledné kroky a návaznosti.' },
      { id: 'c', preference: 'innovator', text: 'Navrhnout několik neobvyklých řešení a rychle je prověřit.' },
    ],
  },
  {
    id: 'f09', section: 'preferences',
    text: 'Který přínos pro tým by vám osobně připadal nejvíce naplňující a který nejméně?',
    options: [
      { id: 'a', preference: 'mentor', text: 'Pomáhat lidem, aby dokázali řešit problémy samostatně.' },
      { id: 'b', preference: 'connector', text: 'Vytvářet prostředí, ve kterém se lidé dokážou domluvit.' },
      { id: 'c', preference: 'organizer', text: 'Dávat spolupráci jasný a předvídatelný rámec.' },
    ],
  },
  {
    id: 'f10', section: 'preferences',
    text: 'Kdybyste mohl/a ovlivnit týmovou kulturu, která z následujících možností by vás lákala nejvíce a která nejméně?',
    options: [
      { id: 'a', preference: 'mentor', text: 'Podporovat otevřené učení a rozvoj lidí v týmu.' },
      { id: 'b', preference: 'connector', text: 'Posilovat důvěru a ochotu hledat společný zájem.' },
      { id: 'c', preference: 'innovator', text: 'Povzbuzovat zvídavost a bezpečné zkoušení nových postupů.' },
    ],
  },
];

export const situationQuestions = [
  {
    id: 'j01', section: 'situations',
    text: 'Spolehlivý člen týmu podruhé nedodržel termín. Zároveň je prokazatelně vytížený dalšími úkoly. Co uděláte jako první?',
    targets: ['communication', 'coaching', 'execution', 'delegation'],
    options: [
      { id: 'a', text: 'Nejprve ověřím jeho vytížení a část práce přerozdělím. K příčinám se vrátíme, jakmile bude jasný plán, jak nový termín dodržet.', scores: { communication: 2, coaching: 1, execution: 4, delegation: 2 } },
      { id: 'b', text: 'V soukromí s ním projdu priority a důsledky zpoždění. Požádám ho o plán nápravy a stanovíme termín kontroly.', scores: { communication: 4, coaching: 4, execution: 3, delegation: 3 } },
      { id: 'c', text: 'Požádám ho, aby do konce dne připravil plán nápravy. Následující ráno společně ověříme, zda je proveditelný.', scores: { communication: 2, coaching: 3, execution: 4, delegation: 4 } },
      { id: 'd', text: 'Se zadavatelem dohodnu nový termín a příští týden s pracovníkem podrobněji upravíme plánování jeho dalších úkolů.', scores: { communication: 3, coaching: 2, execution: 3, delegation: 2 } },
    ],
  },
  {
    id: 'j02', section: 'situations',
    text: 'Zkušený pracovník za vámi přijde s naléhavým provozním problémem a požádá vás, abyste ho vyřešil/a, protože to umíte rychleji.',
    targets: ['delegation', 'coaching', 'execution', 'leadership'],
    options: [
      { id: 'a', text: 'Převezmu pouze rozhodnutí, ke kterému je nutná moje pravomoc. Zbytek dokončí pracovník a poté situaci společně rozebereme.', scores: { delegation: 3, coaching: 2, execution: 4, leadership: 4 } },
      { id: 'b', text: 'Zjistím rizika, dosavadní kroky a jeho návrh řešení. Společně určíme, kdy už musím zasáhnout já.', scores: { delegation: 4, coaching: 4, execution: 3, leadership: 3 } },
      { id: 'c', text: 'Dám mu přesný návod pro tuto situaci a po jejím vyřešení s ním povedu samostatný rozvojový rozhovor.', scores: { delegation: 2, coaching: 3, execution: 4, leadership: 3 } },
      { id: 'd', text: 'Vrátím mu odpovědnost za řešení, stanovím jasný termín dokončení a poté s ním výsledek společně zkontroluji.', scores: { delegation: 4, coaching: 3, execution: 3, leadership: 2 } },
    ],
  },
  {
    id: 'j03', section: 'situations',
    text: 'Dvě oddělení, která vašemu týmu zadávají práci, posílají protichůdné požadavky. Obě tvrdí, že jejich požadavek nesnese odklad.',
    targets: ['leadership', 'influence', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Vyberu požadavek s větším dopadem, své rozhodnutí sdělím oběma stranám a případné důsledky dořeším později.', scores: { leadership: 4, influence: 2, execution: 4, communication: 3 } },
      { id: 'b', text: 'Požádám zadavatele, aby společně určili prioritu. Do té doby týmu stanovím pořadí podle míry rizika.', scores: { leadership: 4, influence: 4, execution: 3, communication: 4 } },
      { id: 'c', text: 'Rozdělím kapacitu týmu mezi oba požadavky a po prvních výsledcích rozhodnu, kam přesunout zbývající síly.', scores: { leadership: 2, influence: 3, execution: 2, communication: 3 } },
      { id: 'd', text: 'Nechám tým pokračovat v dosavadní práci, dokud zadavatelé písemně neurčí společnou prioritu a její důvod.', scores: { leadership: 2, influence: 3, execution: 3, communication: 3 } },
    ],
  },
  {
    id: 'j04', section: 'situations',
    text: 'Bývalý kolega, kterého nyní vedete, obchází dohodnutý postup a odvolává se na vaše dřívější přátelství.',
    targets: ['leadership', 'communication', 'emotional', 'influence'],
    options: [
      { id: 'a', text: 'V soukromí s ním oddělím osobní vztah od pracovní role a domluvím konkrétní očekávání i termín kontroly.', scores: { leadership: 4, communication: 4, emotional: 3, influence: 3 } },
      { id: 'b', text: 'Začnu dohodnutý postup důsledně vyžadovat bez zvláštního rozhovoru, aby pro všechny platila stejná pravidla.', scores: { leadership: 3, communication: 2, emotional: 2, influence: 2 } },
      { id: 'c', text: 'Požádám jiného vedoucího, aby se rozhovoru zúčastnil a pomohl nám udržet jeho průběh v čistě pracovní rovině.', scores: { leadership: 2, communication: 3, emotional: 4, influence: 4 } },
      { id: 'd', text: 'Nejprve si vyžádám názory ostatních členů týmu, zda jeho chování skutečně narušuje jejich každodenní práci a vzájemnou spolupráci.', scores: { leadership: 2, communication: 4, emotional: 3, influence: 3 } },
    ],
  },
  {
    id: 'j05', section: 'situations',
    text: 'Člen týmu udělal chybu, která má dopad na zákazníka. Je nervózní, rychle se obhajuje a náprava musí začít okamžitě.',
    targets: ['emotional', 'coaching', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Nejprve rozdělím nápravu na konkrétní kroky. Poté s pracovníkem pojmenujeme fakta, příčiny a způsob, jak zabránit opakování.', scores: { emotional: 3, coaching: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Převezmu komunikaci se zákazníkem a pracovníka požádám, aby do druhého dne připravil rozbor chyby a návrh prevence.', scores: { emotional: 3, coaching: 3, execution: 4, communication: 3 } },
      { id: 'c', text: 'Nechám pracovníka řídit nápravu, zůstanu mu k dispozici a rozbor příčin naplánuji až po stabilizaci situace.', scores: { emotional: 4, coaching: 4, execution: 3, communication: 3 } },
      { id: 'd', text: 'Nejdříve s ním stručně proberu jeho odpovědnost za chybu a poučení do budoucna. Teprve potom společně zahájíme samotnou nápravu situace.', scores: { emotional: 2, coaching: 2, execution: 2, communication: 3 } },
    ],
  },
  {
    id: 'j06', section: 'situations',
    text: 'Tým odmítá nový povinný postup. Některé připomínky jsou oprávněné, ale termín zavedení nelze posunout.',
    targets: ['adaptability', 'influence', 'communication', 'leadership'],
    options: [
      { id: 'a', text: 'Vysvětlím důvod změny a to, co už nelze ovlivnit. Tým zapojím do zbývajících rozhodnutí o způsobu zavedení.', scores: { adaptability: 4, influence: 4, communication: 4, leadership: 3 } },
      { id: 'b', text: 'Nový postup zavedu podle zadání a současně budu zaznamenávat problémy, které společně každý týden vyhodnotíme.', scores: { adaptability: 4, influence: 2, communication: 3, leadership: 4 } },
      { id: 'c', text: 'Vyberu dva respektované členy týmu, kteří pomohou s přípravou a ostatním vysvětlí změnu i její praktické dopady.', scores: { adaptability: 3, influence: 4, communication: 3, leadership: 3 } },
      { id: 'd', text: 'Požádám každého, aby popsal svou hlavní obavu, a před spuštěním připravím reakce na nejčastější námitky.', scores: { adaptability: 3, influence: 3, communication: 4, leadership: 2 } },
    ],
  },
  {
    id: 'j07', section: 'situations',
    text: 'Nejvýkonnější člověk v týmu dosahuje skvělých výsledků, ale shazuje kolegy a zadržuje důležité informace.',
    targets: ['leadership', 'communication', 'emotional', 'influence'],
    options: [
      { id: 'a', text: 'Popíšu mu konkrétní chování a jeho dopad, stanovím očekávání pro spolupráci a budu sledovat změnu i výkon.', scores: { leadership: 4, communication: 4, emotional: 4, influence: 3 } },
      { id: 'b', text: 'Změním rozdělení práce tak, aby byla spolupráce nezbytná, a výsledky budu hodnotit také podle předávání informací.', scores: { leadership: 4, communication: 3, emotional: 2, influence: 4 } },
      { id: 'c', text: 'Nejprve zjistím, jak situaci vnímá a co ho k chování vede. Poté společně nastavíme pravidla spolupráce na další měsíc.', scores: { leadership: 3, communication: 4, emotional: 4, influence: 3 } },
      { id: 'd', text: 'Převedu ho do samostatnější role a určím situace, ve kterých musí informace předávat týmu.', scores: { leadership: 3, communication: 2, emotional: 2, influence: 2 } },
    ],
  },
  {
    id: 'j08', section: 'situations',
    text: 'Tým je přetížený, všechny úkoly vypadají důležitě a počet chyb začíná růst.',
    targets: ['execution', 'delegation', 'leadership', 'influence'],
    options: [
      { id: 'a', text: 'Zmapuji vytížení týmu, zastavím méně důležitou práci a se zadavateli vyjednám nezbytné kompromisy.', scores: { execution: 4, delegation: 3, leadership: 4, influence: 4 } },
      { id: 'b', text: 'Dočasně se zapojím do nejnaléhavější provozní práce a lidem odpovědným za jednotlivé úkoly přenechám rozhodování o zbytku.', scores: { execution: 4, delegation: 4, leadership: 3, influence: 2 } },
      { id: 'c', text: 'Každému určím jednu hlavní prioritu a po dvou dnech podle výsledků znovu rozdělím pracovní kapacitu.', scores: { execution: 4, delegation: 3, leadership: 4, influence: 2 } },
      { id: 'd', text: 'Požádám tým o krátkodobé mimořádné úsilí a současně připravím podklady pro navýšení zdrojů.', scores: { execution: 2, delegation: 2, leadership: 3, influence: 3 } },
    ],
  },
  {
    id: 'j09', section: 'situations',
    text: 'Nový pracovník pracuje pečlivě, ale pomalu. Zkušenější kolegové po vás chtějí, abyste mu jeho úkoly raději odebral/a.',
    targets: ['coaching', 'delegation', 'communication', 'execution'],
    options: [
      { id: 'a', text: 'Zmenším rozsah jeho úkolu, vyjasním očekávané tempo a domluvím s ním častější krátké kontroly.', scores: { coaching: 4, delegation: 4, communication: 4, execution: 3 } },
      { id: 'b', text: 'Na týden ho spojím se zkušeným kolegou a poté vyhodnotím jeho rychlost i samostatnost.', scores: { coaching: 4, delegation: 3, communication: 3, execution: 3 } },
      { id: 'c', text: 'Dočasně mu ponechám jen jednodušší práci a k náročnějším úkolům se vrátíme, až dosáhne potřebného tempa.', scores: { coaching: 2, delegation: 2, communication: 3, execution: 4 } },
      { id: 'd', text: 'Ponechám současné rozdělení práce a kolegům vysvětlím, že v této fázi má přesnost přednost před rychlostí.', scores: { coaching: 3, delegation: 3, communication: 4, execution: 2 } },
    ],
  },
  {
    id: 'j10', section: 'situations',
    text: 'Dva schopní členové týmu se dostali do osobního konfliktu. Komunikují přes ostatní kolegy a začínají tím blokovat společnou práci.',
    targets: ['communication', 'emotional', 'coaching', 'leadership'],
    options: [
      { id: 'a', text: 'Nejprve vyslechnu každého zvlášť. Poté společně probereme dopad konfliktu, potřeby obou stran a pravidla další spolupráce.', scores: { communication: 4, emotional: 4, coaching: 4, leadership: 2 } },
      { id: 'b', text: 'Svolám společné setkání, vrátím rozhovor k pracovním faktům a domluvím konkrétní způsob předávání práce.', scores: { communication: 4, emotional: 3, coaching: 3, leadership: 4 } },
      { id: 'c', text: 'Dočasně oddělím jejich odpovědnosti, aby práce pokračovala, a společný rozhovor naplánuji po odeznění napětí.', scores: { communication: 2, emotional: 3, coaching: 2, leadership: 3 } },
      { id: 'd', text: 'Požádám oba o písemný návrh řešení. Z jejich odpovědí následně stanovím závazný postup spolupráce a termín jeho společné kontroly.', scores: { communication: 3, emotional: 2, coaching: 4, leadership: 3 } },
    ],
  },
  {
    id: 'j11', section: 'situations',
    text: 'Zjistíte, že vaše rozhodnutí způsobilo týmu zbytečnou práci. Situaci lze ještě napravit, ale bude to nepříjemné.',
    targets: ['emotional', 'leadership', 'communication', 'adaptability'],
    options: [
      { id: 'a', text: 'Otevřeně pojmenuji své rozhodnutí a jeho důsledky, stanovím nápravu a s týmem proberu, co příště udělám jinak.', scores: { emotional: 4, leadership: 4, communication: 4, adaptability: 3 } },
      { id: 'b', text: 'Nejprve připravím realistický plán nápravy. Svou odpovědnost za původní rozhodnutí vysvětlím týmu spolu s navrženým řešením.', scores: { emotional: 3, leadership: 4, communication: 3, adaptability: 3 } },
      { id: 'c', text: 'Požádám tým o návrhy nápravy, jeden z nich vyberu a svůj podíl na chybě proberu jednotlivě s dotčenými lidmi.', scores: { emotional: 3, leadership: 3, communication: 3, adaptability: 4 } },
      { id: 'd', text: 'Nejzávažnější důsledky napravím osobně a poté tým požádám o názor na příčiny a návrh opatření proti opakování.', scores: { emotional: 3, leadership: 2, communication: 3, adaptability: 4 } },
    ],
  },
  {
    id: 'j12', section: 'situations',
    text: 'Důležitý zadavatel požaduje termín, který tým považuje za nereálný. Odmítnutí může poškodit vzájemný vztah.',
    targets: ['influence', 'leadership', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Připravím varianty rozsahu, termínu a rizik a se zadavatelem vyjednám kompromis, který zachová co největší přínos.', scores: { influence: 4, leadership: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Přijmu termín pro nejdůležitější část práce a zbytek přesunu do další etapy s novým odhadem.', scores: { influence: 3, leadership: 4, execution: 4, communication: 3 } },
      { id: 'c', text: 'Požádám tým o návrh, jak termín zvládnout, a zadavateli sdělím podmínky potřebné pro úspěch.', scores: { influence: 3, leadership: 3, execution: 3, communication: 4 } },
      { id: 'd', text: 'Termín odmítnu s odkazem na údaje o vytížení a požádám zadavatele, aby před týmem určil, kterou jinou práci máme zastavit.', scores: { influence: 4, leadership: 4, execution: 3, communication: 3 } },
    ],
  },
  {
    id: 'j13', section: 'situations',
    text: 'Výkon dříve spolehlivého člena týmu už několik týdnů klesá. Naznačí, že řeší osobní situaci, ale nechce ji rozebírat.',
    targets: ['emotional', 'communication', 'coaching', 'execution'],
    options: [
      { id: 'a', text: 'Respektuji jeho soukromí, popíšu dopad na práci a společně upravíme dočasná očekávání i termín další kontroly.', scores: { emotional: 4, communication: 4, coaching: 3, execution: 4 } },
      { id: 'b', text: 'Nabídnu mu možnosti podpory a dočasně přerozdělím část jeho práce. K výkonu se vrátíme za týden.', scores: { emotional: 4, communication: 3, coaching: 4, execution: 3 } },
      { id: 'c', text: 'Zachovám běžná očekávání, ale umožním mu kdykoli požádat o konkrétní úpravu práce bez dalšího vyptávání.', scores: { emotional: 3, communication: 3, coaching: 3, execution: 4 } },
      { id: 'd', text: 'Dočasně se s ním domluvím na konkrétním minimálním výkonu a požádám ho, aby sám navrhl, jaká podpora by mu pomohla.', scores: { emotional: 3, communication: 4, coaching: 4, execution: 3 } },
    ],
  },
  {
    id: 'j14', section: 'situations',
    text: 'Člen týmu navrhne řešení, které zpochybňuje váš připravený plán. Jeho nápad je slibný, ale dosud neověřený.',
    targets: ['adaptability', 'coaching', 'leadership', 'execution'],
    options: [
      { id: 'a', text: 'Dohodnu krátké ověření obou variant, předem stanovím kritéria a podle výsledků rozhodnu o dalším postupu.', scores: { adaptability: 4, coaching: 4, leadership: 3, execution: 3 } },
      { id: 'b', text: 'Požádám ho, aby návrh doplnil o přínosy a rizika. Mezitím budeme pokračovat podle původního plánu.', scores: { adaptability: 3, coaching: 4, leadership: 3, execution: 4 } },
      { id: 'c', text: 'Jeho řešení přijmu, pokud převezme odpovědnost za realizaci a společně stanovíme brzký termín první průběžné kontroly.', scores: { adaptability: 4, coaching: 3, leadership: 3, execution: 3 } },
      { id: 'd', text: 'Vysvětlím důvody původního plánu a nový návrh podrobně vyhodnotíme až po dokončení současné etapy.', scores: { adaptability: 2, coaching: 2, leadership: 4, execution: 4 } },
    ],
  },
  {
    id: 'j15', section: 'situations',
    text: 'Na poradách mluví stále stejní lidé. Tišší členové však po poradě přicházejí jednotlivě s důležitými informacemi.',
    targets: ['communication', 'influence', 'emotional', 'leadership'],
    options: [
      { id: 'a', text: 'Před poradou rozešlu otázky, na poradě dám prostor každému a rozhodnutí přijmu až po krátkém kole názorů.', scores: { communication: 4, influence: 4, emotional: 3, leadership: 3 } },
      { id: 'b', text: 'Tišší členy předem požádám o jejich pohled a během porady je cíleně vyzvu u příslušného tématu.', scores: { communication: 4, influence: 3, emotional: 4, leadership: 3 } },
      { id: 'c', text: 'Zavedu maximální délku jednotlivých příspěvků, aby více času zbylo na ostatní a na závěrečné shrnutí.', scores: { communication: 3, influence: 3, emotional: 2, leadership: 4 } },
      { id: 'd', text: 'Průběh porady ponechám beze změny a názory tišších členů budu i nadále získávat individuálně ještě před konečným rozhodnutím.', scores: { communication: 3, influence: 2, emotional: 4, leadership: 2 } },
    ],
  },
  {
    id: 'j16', section: 'situations',
    text: 'Chcete poprvé delegovat důležitý úkol člověku, který má potenciál, ale v dané oblasti zatím málo zkušeností.',
    targets: ['delegation', 'coaching', 'leadership', 'execution'],
    options: [
      { id: 'a', text: 'Předám mu ucelenou část úkolu, vyjasním hranice a domluvím kontroly, jejichž intervaly budu prodlužovat.', scores: { delegation: 4, coaching: 4, leadership: 3, execution: 4 } },
      { id: 'b', text: 'Nechám ho nejprve sledovat práci zkušeného kolegy a odpovědnost za celek mu předám při dalším podobném úkolu.', scores: { delegation: 2, coaching: 4, leadership: 3, execution: 4 } },
      { id: 'c', text: 'Předám mu celý úkol s podrobným postupem a určím okamžiky, kdy musí před dalším krokem získat můj souhlas.', scores: { delegation: 3, coaching: 2, leadership: 4, execution: 4 } },
      { id: 'd', text: 'Předám mu odpovědnost za celý úkol, nabídnu konzultace a nechám na něm, kdy mě požádá o podporu.', scores: { delegation: 4, coaching: 3, leadership: 3, execution: 2 } },
    ],
  },
  {
    id: 'j17', section: 'situations',
    text: 'Nové pravidlo nutí tým změnit zavedený postup během tří týdnů. Přesný návod zatím neexistuje a provoz se nesmí zastavit.',
    targets: ['adaptability', 'leadership', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Rozdělím změnu do několika malých zkoušek, stanovím neměnné bezpečnostní hranice a výsledky budeme každý den krátce sdílet.', scores: { adaptability: 4, leadership: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Připravím dočasný jednotný postup, zavedu ho v celém týmu a po prvním týdnu ho společně vyhodnotíme a upravíme.', scores: { adaptability: 3, leadership: 4, execution: 4, communication: 3 } },
      { id: 'c', text: 'Pověřím malou skupinu přípravou řešení. Ostatní budou co nejdéle udržovat provoz podle dosavadního postupu.', scores: { adaptability: 3, leadership: 3, execution: 4, communication: 2 } },
      { id: 'd', text: 'Každé směně umožním zvolit si vlastní dočasný postup a před konečným termínem z jejich zkušeností vytvořím společný standard.', scores: { adaptability: 4, leadership: 2, execution: 2, communication: 4 } },
    ],
  },
  {
    id: 'j18', section: 'situations',
    text: 'U delegovaného projektu nebyl dodržen první kontrolní termín. Pracovník tvrdí, že situaci zvládne, ale nedokáže předložit nový plán.',
    targets: ['delegation', 'coaching', 'emotional', 'execution'],
    options: [
      { id: 'a', text: 'Během rozhovoru ho nechám sestavit nový plán, nejbližší úkol rozdělíme na menší kroky a domluvíme častější kontroly.', scores: { delegation: 4, coaching: 4, emotional: 3, execution: 4 } },
      { id: 'b', text: 'Zapojím zkušeného kolegu jako průběžnou podporu, ale odpovědnost za projekt ponechám stejnému pracovníkovi až do další plánované kontroly.', scores: { delegation: 4, coaching: 3, emotional: 4, execution: 3 } },
      { id: 'c', text: 'Plánování projektu převezmu já, ale jednotlivé úkoly mu ponechám. Po dokončení podrobně rozebereme příčiny prvního zpoždění.', scores: { delegation: 2, coaching: 3, emotional: 3, execution: 4 } },
      { id: 'd', text: 'Ponechám mu stejnou míru volnosti, jasně popíšu důsledky dalšího zpoždění a stanovím pevný termín dokončení.', scores: { delegation: 4, coaching: 2, emotional: 2, execution: 3 } },
    ],
  },
  {
    id: 'j19', section: 'situations',
    text: 'Tři lidé vám nezávisle na sobě řeknou, že pod tlakem působíte uzavřeně a že je pro ně obtížné přinášet vám špatné zprávy.',
    targets: ['adaptability', 'emotional', 'coaching', 'communication'],
    options: [
      { id: 'a', text: 'Požádám je o konkrétní příklady, shrnu společný vzorec a domluvím s nimi signál, kterým mě příště mohou upozornit.', scores: { adaptability: 4, emotional: 3, coaching: 4, communication: 4 } },
      { id: 'b', text: 'Vysvětlím, co v těchto situacích prožívám, a požádám je, aby špatné zprávy přinášeli spolu s návrhem řešení.', scores: { adaptability: 3, emotional: 4, coaching: 3, communication: 4 } },
      { id: 'c', text: 'Na porady zařadím pravidelný bod věnovaný rizikům a požádám jiného vedoucího, aby sledoval, jak na špatné zprávy reaguji.', scores: { adaptability: 4, emotional: 3, coaching: 3, communication: 3 } },
      { id: 'd', text: 'Poděkuji jim za otevřenost, několik týdnů se budu vědomě snažit reagovat klidněji a poté si vyžádám další zpětnou vazbu.', scores: { adaptability: 3, emotional: 4, coaching: 2, communication: 3 } },
    ],
  },
  {
    id: 'j20', section: 'situations',
    text: 'Jediný odborník má klíčové znalosti a odmítá zaučovat ostatní, protože se obává, že tím utrpí jeho vlastní výkon.',
    targets: ['delegation', 'coaching', 'influence', 'leadership'],
    options: [
      { id: 'a', text: 'Předávání znalostí zařadím mezi jeho pracovní cíle, vyhradím mu na tuto činnost čas a společně vybereme vhodného kolegu.', scores: { delegation: 4, coaching: 3, influence: 4, leadership: 4 } },
      { id: 'b', text: 'Nechám ho vytvořit jednoduchý návod a další člověk podle něj provede první úkol pod jeho dohledem.', scores: { delegation: 4, coaching: 4, influence: 3, leadership: 3 } },
      { id: 'c', text: 'Nejprve zjistím, čeho se při předávání znalostí obává, a nabídnu mu viditelnou roli garanta odborné úrovně.', scores: { delegation: 3, coaching: 4, influence: 4, leadership: 3 } },
      { id: 'd', text: 'Přidělím mu kolegu pro společnou práci a stanovím termín i praktickou zkoušku, při níž musí kolega prokázat plnou samostatnost.', scores: { delegation: 4, coaching: 2, influence: 2, leadership: 4 } },
    ],
  },
];

export const allQuestions = [...personalityQuestions, ...skillQuestions, ...preferenceQuestions, ...situationQuestions];

export const questionsBySection = Object.fromEntries(
  SECTIONS.map((section) => [section.id, allQuestions.filter((question) => question.section === section.id)]),
);
