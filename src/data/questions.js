export const AGREEMENT_SCALE = [
  { value: 1, label: 'Vůbec nesouhlasím' },
  { value: 2, label: 'Spíše nesouhlasím' },
  { value: 3, label: 'Něco mezi' },
  { value: 4, label: 'Spíše souhlasím' },
  { value: 5, label: 'Zcela souhlasím' },
];

export const FREQUENCY_SCALE = [
  { value: 1, label: 'Téměř nikdy' },
  { value: 2, label: 'Zřídka' },
  { value: 3, label: 'Někdy' },
  { value: 4, label: 'Často' },
  { value: 5, label: 'Téměř vždy' },
];

export const TRAITS = {
  openness: {
    label: 'Otevřenost změně',
    short: 'Otevřenost',
    low: 'Dáváte přednost ověřeným a konkrétním postupům.',
    high: 'Přirozeně hledáte nové souvislosti, nápady a možnosti.',
  },
  conscientiousness: {
    label: 'Systematičnost',
    short: 'Systematičnost',
    low: 'Víc spoléháte na pružnost než na pevnou strukturu.',
    high: 'Přirozeně vytváříte řád, plán a dotažení.',
  },
  extraversion: {
    label: 'Sociální energie',
    short: 'Energie',
    low: 'Energii čerpáte spíše z klidu a promyšlené práce.',
    high: 'Energii získáváte z kontaktu, aktivity a viditelného vlivu.',
  },
  agreeableness: {
    label: 'Kooperativnost',
    short: 'Kooperativnost',
    low: 'Přirozeně zpochybňujete a jdete přímo k věci.',
    high: 'Přirozeně hledáte porozumění, spolupráci a shodu.',
  },
  stability: {
    label: 'Emoční stabilita',
    short: 'Stabilita',
    low: 'Napětí a nejistotu prožíváte intenzivněji.',
    high: 'Pod tlakem si obvykle udržíte odstup a klid.',
  },
};

export const SKILLS = {
  leadership: {
    label: 'Leadership',
    cardLabel: 'Vedení',
    description: 'Směr, priority a rozhodování v nejistotě.',
    quest: 'Na začátku příští směny pojmenujte týmu tři priority a vysvětlete jejich důvod.',
  },
  communication: {
    label: 'Komunikace',
    cardLabel: 'Komunikace',
    description: 'Jasnost, naslouchání a náročné rozhovory.',
    quest: 'V jednom důležitém rozhovoru nejprve shrňte, čemu jste porozuměl/a, a teprve potom reagujte.',
  },
  coaching: {
    label: 'Koučování',
    cardLabel: 'Koučování',
    description: 'Otázky, rozvoj samostatnosti a následná dohoda.',
    quest: 'U jednoho problému dnes neporaďte jako první. Položte tři otevřené otázky a nechte řešení formulovat druhého.',
  },
  emotional: {
    label: 'Emoční inteligence',
    cardLabel: 'Emoce',
    description: 'Vnímání emocí, empatie a regulace vlastní reakce.',
    quest: 'Před náročným rozhovorem si napište: co cítím, co může cítit druhý a jaký výsledek potřebuji.',
  },
  delegation: {
    label: 'Delegování',
    cardLabel: 'Delegování',
    description: 'Předání výsledku, pravomoci a odpovědnosti.',
    quest: 'Delegujte jeden celý výsledek: popište hranice, pravomoc, kontrolní bod a potom práci nepřebírejte zpět.',
  },
  execution: {
    label: 'Realizace',
    cardLabel: 'Realizace',
    description: 'Dotažení, rytmus kontroly a odstraňování překážek.',
    quest: 'Vyberte jeden rozpracovaný úkol a určete jediný další krok, vlastníka a konkrétní termín kontroly.',
  },
  influence: {
    label: 'Spolupráce a vliv',
    cardLabel: 'Vliv',
    description: 'Důvěra, práce se stakeholdery a získávání podpory.',
    quest: 'Před dalším návrhem si zmapujte, co je důležité pro tři klíčové lidi, a upravte argumentaci jejich perspektivě.',
  },
  adaptability: {
    label: 'Adaptabilita',
    cardLabel: 'Adaptace',
    description: 'Učení ze zkušenosti a pružná změna postupu.',
    quest: 'Po jedné náročné situaci udělejte pětiminutovou reflexi: co fungovalo, co ne a co příště zkusíte jinak.',
  },
};

export const ARCHETYPES = {
  driver: {
    label: 'Tahoun',
    subtitle: 'Rozhýbává práci a drží směr k výsledku',
    motto: 'Energie získává hodnotu teprve tehdy, když dovede tým do cíle.',
    color: '#ffb44a',
    weights: { execution: 0.34, leadership: 0.28, influence: 0.14, adaptability: 0.14, communication: 0.1 },
    traits: { conscientiousness: 0.06, extraversion: 0.04 },
  },
  strategist: {
    label: 'Stratég',
    subtitle: 'Vidí souvislosti a mění nejistotu v priority',
    motto: 'Nejlepší cesta nezačíná rychlostí, ale správným směrem.',
    color: '#7ddcff',
    weights: { leadership: 0.38, adaptability: 0.24, execution: 0.14, influence: 0.12, communication: 0.12 },
    traits: { openness: 0.07, conscientiousness: 0.03 },
  },
  mentor: {
    label: 'Mentor',
    subtitle: 'Rozvíjí samostatnost a potenciál lidí',
    motto: 'Silný tým nevzniká z hotových odpovědí, ale z dobrých otázek.',
    color: '#62e3b7',
    weights: { coaching: 0.38, emotional: 0.24, communication: 0.2, adaptability: 0.1, delegation: 0.08 },
    traits: { agreeableness: 0.06, stability: 0.04 },
  },
  connector: {
    label: 'Spojovatel',
    subtitle: 'Propojuje lidi, pohledy a společný zájem',
    motto: 'Důvěra není měkkost. Je to infrastruktura spolupráce.',
    color: '#f08cff',
    weights: { communication: 0.3, influence: 0.26, emotional: 0.22, coaching: 0.12, leadership: 0.1 },
    traits: { agreeableness: 0.06, extraversion: 0.04 },
  },
  organizer: {
    label: 'Organizátor',
    subtitle: 'Dává práci systém, role a předvídatelný rytmus',
    motto: 'Dobře nastavený systém uvolňuje lidem ruce pro dobrou práci.',
    color: '#a8a3ff',
    weights: { delegation: 0.3, execution: 0.28, leadership: 0.2, communication: 0.12, adaptability: 0.1 },
    traits: { conscientiousness: 0.08, stability: 0.02 },
  },
  innovator: {
    label: 'Inovátor',
    subtitle: 'Otevírá nové možnosti a provází tým změnou',
    motto: 'Změna se stává pokrokem, když jí lidé rozumějí a unesou ji.',
    color: '#9b7cff',
    weights: { adaptability: 0.34, leadership: 0.2, influence: 0.16, communication: 0.14, coaching: 0.08, emotional: 0.08 },
    traits: { openness: 0.08, extraversion: 0.02 },
  },
};

export const SECTIONS = [
  {
    id: 'personality',
    number: 'I',
    title: 'Osobnostní kompas',
    description: 'Jaké pracovní tendence jsou vám přirozené. Neexistuje nejlepší profil – každá tendence má výhodu i riziko.',
    instruction: 'Odpovídejte podle toho, jací jste obvykle, ne podle toho, jací byste chtěli být.',
    estimate: '5 min',
  },
  {
    id: 'skills',
    number: 'II',
    title: 'Manažerské dovednosti',
    description: 'Jak často v posledních třech měsících používáte konkrétní manažerské chování.',
    instruction: 'Myslete na skutečné situace. Pokud se něco děje jen občas, zvolte „někdy“.',
    estimate: '7 min',
  },
  {
    id: 'situations',
    number: 'III',
    title: 'Rozhodování v praxi',
    description: 'Osm manažerských situací bez dokonale čistého řešení.',
    instruction: 'Vyberte, co byste nejspíš udělal/a jako první – ne co zní nejlépe v učebnici.',
    estimate: '5 min',
  },
];

export const personalityQuestions = [
  { id: 'p01', section: 'personality', trait: 'extraversion', text: 'Ve skupině se přirozeně ujímám slova.' },
  { id: 'p02', section: 'personality', trait: 'agreeableness', text: 'Snadno si všimnu, když se někdo necítí dobře.' },
  { id: 'p03', section: 'personality', trait: 'conscientiousness', text: 'Úkoly obvykle dokončuji s předstihem nebo včas.' },
  { id: 'p04', section: 'personality', trait: 'stability', text: 'V náročných situacích si většinou zachovám klid.' },
  { id: 'p05', section: 'personality', trait: 'openness', text: 'Baví mě hledat neobvyklá řešení a nové souvislosti.' },
  { id: 'p06', section: 'personality', trait: 'extraversion', reverse: true, text: 'Při větších setkáních zůstávám spíše v pozadí.' },
  { id: 'p07', section: 'personality', trait: 'agreeableness', reverse: true, text: 'Problémy druhých mě obvykle příliš nezajímají.' },
  { id: 'p08', section: 'personality', trait: 'conscientiousness', reverse: true, text: 'Často nechávám věci rozpracované a přecházím k dalším.' },
  { id: 'p09', section: 'personality', trait: 'stability', reverse: true, text: 'I menší komplikace mě dokážou dlouho rozhodit.' },
  { id: 'p10', section: 'personality', trait: 'openness', reverse: true, text: 'Dávám přednost zavedenému postupu, i když existuje prostor zkusit něco nového.' },
  { id: 'p11', section: 'personality', trait: 'extraversion', text: 'Kontakt s lidmi mi obvykle dodává energii.' },
  { id: 'p12', section: 'personality', trait: 'agreeableness', text: 'Než člověka posoudím, snažím se pochopit jeho pohled.' },
  { id: 'p13', section: 'personality', trait: 'conscientiousness', text: 'Vyhovuje mi, když mají věci jasnou strukturu a pořadí.' },
  { id: 'p14', section: 'personality', trait: 'stability', text: 'Pod tlakem dokážu oddělit emoce od dalšího kroku.' },
  { id: 'p15', section: 'personality', trait: 'openness', text: 'Rád/a pracuji s abstraktními nápady a budoucími možnostmi.' },
  { id: 'p16', section: 'personality', trait: 'extraversion', reverse: true, text: 'Po intenzivní komunikaci potřebuji výrazně delší čas o samotě.' },
  { id: 'p17', section: 'personality', trait: 'agreeableness', reverse: true, text: 'Když nesouhlasím, vztah a způsob podání pro mě nejsou podstatné.' },
  { id: 'p18', section: 'personality', trait: 'conscientiousness', reverse: true, text: 'Pořádek v úkolech řeším až ve chvíli, kdy nastane problém.' },
  { id: 'p19', section: 'personality', trait: 'stability', reverse: true, text: 'Před důležitým rozhodnutím mě obavy často zablokují.' },
  { id: 'p20', section: 'personality', trait: 'openness', reverse: true, text: 'Diskuse o možnostech bez okamžitého praktického využití mě rychle unaví.' },
].map((question) => ({ ...question, scale: AGREEMENT_SCALE }));

const skillItems = {
  leadership: [
    ['Převádím širší cíle na několik srozumitelných priorit pro tým.'],
    ['Když se střetnou dva důležité požadavky, dokážu rozhodnout a vysvětlit proč.'],
    ['Lidem říkám nejen co mají udělat, ale také jaký je očekávaný výsledek a smysl.'],
    ['Nepříjemná rozhodnutí odkládám, dokud je neudělá někdo jiný.', true],
  ],
  communication: [
    ['Ověřuji si, zda jsme důležité sdělení pochopili stejně.'],
    ['Při vysvětlování přizpůsobím množství detailu konkrétnímu člověku.'],
    ['Než začnu reagovat, dokážu shrnout pohled druhého vlastními slovy.'],
    ['Náročné rozhovory odsouvám, protože čekám, že se situace vyřeší sama.', true],
  ],
  coaching: [
    ['Když člověk přinese problém, nejdříve se ptám, co už zkusil a jaké vidí možnosti.'],
    ['Dokážu chvíli snést ticho a nedoplnit člověku okamžitě vlastní řešení.'],
    ['Rozvojový rozhovor uzavírám konkrétním krokem a termínem návratu.'],
    ['Pod časovým tlakem dávám hotová řešení i tam, kde by člověk mohl přijít na vlastní.', true],
  ],
  emotional: [
    ['Všímám si změn v tónu, energii nebo chování lidí, nejen jejich slov.'],
    ['Dokážu pojmenovat, jak moje momentální emoce ovlivňuje rozhodování.'],
    ['Při konfliktu udržím respekt, i když s druhým zásadně nesouhlasím.'],
    ['Když mě někdo rozčílí, přestávám vnímat jeho perspektivu.', true],
  ],
  delegation: [
    ['Při delegování vyjasním výsledek, hranice rozhodování a kontrolní bod.'],
    ['Náročnost úkolu přizpůsobuji zkušenosti a připravenosti konkrétního člověka.'],
    ['Po předání úkolu nechávám člověku prostor zvolit vlastní postup.'],
    ['Při prvním náznaku komplikace si delegovaný úkol beru zpět.', true],
  ],
  execution: [
    ['Pravidelně vracím pozornost týmu k několika skutečně důležitým úkolům.'],
    ['Dohody uzavírám jasným vlastníkem, dalším krokem a termínem.'],
    ['Aktivně odstraňuji překážky, které tým sám odstranit nemůže.'],
    ['Naléhavé drobnosti mi opakovaně vytlačují důležitou práci.', true],
  ],
  influence: [
    ['Před důležitým návrhem si zjišťuji, co je podstatné pro zúčastněné lidi.'],
    ['Budování vztahů a důvěry věnuji čas i tehdy, když zrovna nic nepotřebuji.'],
    ['Stejný záměr dokážu vysvětlit různými argumenty podle publika.'],
    ['Když lidé nesouhlasí, rychle se opřu o svou funkci nebo vyšší autoritu.', true],
  ],
  adaptability: [
    ['Po náročné situaci si vyhodnotím, co příště zopakuji a co změním.'],
    ['Když se objeví nové informace, dokážu upravit svůj původní názor.'],
    ['Aktivně žádám o zpětnou vazbu i na věci, ve kterých se cítím silný/á.'],
    ['Osvědčený postup měním až ve chvíli, kdy už zjevně nefunguje.', true],
  ],
};

export const skillQuestions = Object.entries(skillItems).flatMap(([skill, items]) =>
  items.map(([text, reverse = false], index) => ({
    id: `s-${skill}-${index + 1}`,
    section: 'skills',
    skill,
    text,
    reverse,
    scale: FREQUENCY_SCALE,
  })),
);

export const situationQuestions = [
  {
    id: 'j01',
    section: 'situations',
    text: 'Spolehlivý člen týmu podruhé nestihl termín. Tvrdí, že měl příliš mnoho jiné práce. Co uděláte jako první?',
    options: [
      { id: 'a', text: 'V soukromí projdu fakta, dopad a priority; nechám ho navrhnout nápravu a domluvíme kontrolní bod.', scores: { communication: 4, coaching: 4, emotional: 3, execution: 3 } },
      { id: 'b', text: 'Dokončím úkol sám/sama, aby nevznikl další problém, a rozhovor nechám na klidnější dobu.', scores: { execution: 1, delegation: 0, coaching: 0 } },
      { id: 'c', text: 'Na nejbližší poradě zdůrazním před celým týmem, že termíny musí platit pro všechny.', scores: { leadership: 1, emotional: 0, communication: 0 } },
      { id: 'd', text: 'Tentokrát situaci přejdu; dva případy ještě nemusí znamenat skutečný problém.', scores: { leadership: 0, execution: 0 } },
    ],
  },
  {
    id: 'j02',
    section: 'situations',
    text: 'Zkušený pracovník přinese naléhavý provozní problém a řekne: „Vyřešte to prosím za mě, vy to umíte rychleji.“',
    options: [
      { id: 'a', text: 'Převezmu řešení. V naléhavé situaci je vždy nejdůležitější rychlost.', scores: { execution: 2, delegation: 0, coaching: 0 } },
      { id: 'b', text: 'Zeptám se na riziko, co už zkusil a jaký navrhuje další krok; zasáhnu jen v části, kde je má autorita skutečně nutná.', scores: { delegation: 4, coaching: 4, execution: 4, leadership: 3 } },
      { id: 'c', text: 'Řeknu, že je to jeho práce, a pošlu ho pryč bez další diskuse.', scores: { delegation: 2, communication: 0, emotional: 0 } },
      { id: 'd', text: 'Dám mu přesný postup krok za krokem a budu průběžně kontrolovat každou část.', scores: { execution: 2, delegation: 1, coaching: 1 } },
    ],
  },
  {
    id: 'j03',
    section: 'situations',
    text: 'Dvě nadřízená oddělení posílají vašemu týmu protichůdné priority. Lidé nevědí, čemu se věnovat.',
    options: [
      { id: 'a', text: 'Týmu řeknu, ať se snaží zvládnout obojí, dokud se vedení neshodne.', scores: { leadership: 0, execution: 1 } },
      { id: 'b', text: 'Srovnám dopady a kapacitu, vyjednám rozhodnutí s oběma zadavateli a do té doby stanovím týmu dočasnou prioritu.', scores: { leadership: 4, influence: 4, execution: 4, communication: 3 } },
      { id: 'c', text: 'Vyberu požadavek výše postaveného člověka bez dalšího ověřování.', scores: { leadership: 2, influence: 0 } },
      { id: 'd', text: 'Počkám, až se konflikt projeví ve výsledcích; pak bude jasné, co bylo důležitější.', scores: { leadership: 0, execution: 0 } },
    ],
  },
  {
    id: 'j04',
    section: 'situations',
    text: 'Bývalý kolega, kterého nyní vedete, opakovaně obchází dohodnutý postup a odkazuje na vaše dřívější přátelství.',
    options: [
      { id: 'a', text: 'Promluvím s ním mezi čtyřma očima, oddělím osobní vztah od pracovní role a jasně popíšu očekávání i následky.', scores: { leadership: 4, communication: 4, emotional: 4 } },
      { id: 'b', text: 'Budu přísnější než k ostatním, aby nikdo nemohl říct, že mu nadržuju.', scores: { leadership: 1, emotional: 0 } },
      { id: 'c', text: 'Nechám to být, pokud jsou jeho výsledky zatím dobré.', scores: { leadership: 0, execution: 1 } },
      { id: 'd', text: 'Požádám svého nadřízeného, aby mu pravidlo vysvětlil místo mě.', scores: { leadership: 0, communication: 1 } },
    ],
  },
  {
    id: 'j05',
    section: 'situations',
    text: 'Člen týmu udělal chybu, která zasáhla zákazníka. Je viditelně nervózní a okamžitě se obhajuje.',
    options: [
      { id: 'a', text: 'Nejprve zajistím nápravu pro zákazníka, potom oddělím fakta od viny a společně určím prevenci opakování.', scores: { emotional: 4, coaching: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Zdůrazním, že chyby jsou nepřijatelné; tlak mu pomůže příště dávat větší pozor.', scores: { execution: 1, emotional: 0, coaching: 0 } },
      { id: 'c', text: 'Ujistím ho, že se nic neděje, aby se uklidnil, a chybu opravím sám/sama.', scores: { emotional: 2, execution: 1, coaching: 0 } },
      { id: 'd', text: 'Pošlu písemné upozornění bez rozhovoru, abych měl/a situaci formálně podchycenou.', scores: { communication: 1, emotional: 0 } },
    ],
  },
  {
    id: 'j06',
    section: 'situations',
    text: 'Tým odmítá nový pracovní postup. Část připomínek je oprávněná, ale zavedení změny je povinné.',
    options: [
      { id: 'a', text: 'Řeknu, že změna je rozhodnutá a další diskuse jen zdržuje.', scores: { leadership: 2, influence: 0, adaptability: 0 } },
      { id: 'b', text: 'Zjistím konkrétní obavy, oddělím neměnné části od těch ovlivnitelných a zapojím tým do způsobu zavedení.', scores: { adaptability: 4, influence: 4, communication: 4, leadership: 3 } },
      { id: 'c', text: 'Budu změnu odkládat, dokud s ní nebude většina lidí souhlasit.', scores: { emotional: 2, leadership: 0, execution: 0 } },
      { id: 'd', text: 'Zavedu postup přesně podle zadání a případné problémy budu řešit až potom.', scores: { execution: 2, adaptability: 1 } },
    ],
  },
  {
    id: 'j07',
    section: 'situations',
    text: 'Nejvýkonnější člověk v týmu dosahuje skvělých výsledků, ale shazuje kolegy a zadržuje informace.',
    options: [
      { id: 'a', text: 'Jeho výsledky jsou pro tým klíčové, proto nejdřív počkám, zda si vztahy nesednou samy.', scores: { leadership: 0, emotional: 0, execution: 2 } },
      { id: 'b', text: 'Jasně popíšu pozorované chování a jeho dopad, nastavím očekávání spolupráce a budu sledovat změnu stejně jako výkon.', scores: { leadership: 4, communication: 4, emotional: 3, influence: 3 } },
      { id: 'c', text: 'Přesunu ho na samostatnou práci, aby měl s ostatními co nejméně kontaktu.', scores: { execution: 2, coaching: 0, influence: 0 } },
      { id: 'd', text: 'Na poradě vyzvu tým, aby si problémy s jeho chováním vyříkal otevřeně.', scores: { communication: 1, emotional: 0 } },
    ],
  },
  {
    id: 'j08',
    section: 'situations',
    text: 'Tým je přetížený. Všechny úkoly vypadají důležitě a lidé začínají dělat chyby.',
    options: [
      { id: 'a', text: 'Přidám se naplno do operativy, dokud se backlog nesníží.', scores: { execution: 2, leadership: 1, delegation: 0 } },
      { id: 'b', text: 'Zviditelním kapacitu, zastavím nebo odložím méně hodnotnou práci, rozdělím odpovědnosti a eskaluji nutné kompromisy.', scores: { leadership: 4, execution: 4, delegation: 4, influence: 3 } },
      { id: 'c', text: 'Požádám všechny o mimořádné úsilí; až nápor skončí, společně si odpočineme.', scores: { influence: 1, execution: 1, emotional: 0 } },
      { id: 'd', text: 'Nechám každého, aby si priority nastavil sám podle svého úsudku.', scores: { delegation: 2, leadership: 0, execution: 0 } },
    ],
  },
];

export const allQuestions = [...personalityQuestions, ...skillQuestions, ...situationQuestions];

export const questionsBySection = Object.fromEntries(
  SECTIONS.map((section) => [section.id, allQuestions.filter((question) => question.section === section.id)]),
);
