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

export const SECTIONS = [
  {
    id: 'personality', number: 'I', title: 'Osobnostní kompas', estimate: '7 min',
    description: 'Třicet krátkých položek mapuje pět pracovních tendencí. Žádný pól není automaticky lepší.',
    instruction: 'Odpovídejte podle toho, co vás vystihuje dlouhodobě, ne podle ideálu manažera.',
  },
  {
    id: 'skills', number: 'II', title: 'Manažerské chování', estimate: '10 min',
    description: 'Čtyřicet osm konkrétních projevů osmi manažerských dovedností.',
    instruction: 'Hodnoťte podíl skutečných příležitostí za poslední tři měsíce. „Téměř pokaždé“ neznamená „umím to“, ale opravdu časté chování.',
  },
  {
    id: 'situations', number: 'III', title: 'Úsudek v praxi', estimate: '11 min',
    description: 'Dvacet dilemat s několika obhajitelnými cestami a rozdílnými kompromisy.',
    instruction: 'Vyberte, co byste pravděpodobně udělal/a jako první. Nehledejte nejdelší ani „nejhezčí“ odpověď; jednotlivé varianty zvýrazňují různé manažerské priority.',
  },
];

const personalityItems = [
  ['p01', 'extraversion', false, 'Ve skupině se obvykle zapojuji do hovoru mezi prvními.'],
  ['p02', 'agreeableness', false, 'Při neshodě se snažím nejprve pochopit důvody druhé strany.'],
  ['p03', 'conscientiousness', false, 'Před zahájením práce si obvykle ujasním pořadí kroků.'],
  ['p04', 'stability', false, 'I při časovém tlaku dokážu uvažovat bez zbrklosti.'],
  ['p05', 'openness', false, 'Nový způsob práce ve mně obvykle vzbudí zvědavost.'],
  ['p06', 'extraversion', true, 'Na větších setkáních raději pozoruji, než abych vstupoval/a do hovoru.'],
  ['p07', 'agreeableness', true, 'Při rozhodování chráním věcnou správnost, i když způsob podání může vztah zhoršit.'],
  ['p08', 'conscientiousness', true, 'Pravidelné plánování a evidence úkolů mě spíše svazují.'],
  ['p09', 'stability', true, 'Po nepříjemném rozhovoru se k němu v myšlenkách dlouho vracím.'],
  ['p10', 'openness', true, 'Když postup funguje, nemám potřebu hledat jiný.'],
  ['p11', 'extraversion', false, 'Kontakt s větším množstvím lidí mi zpravidla dodává energii.'],
  ['p12', 'agreeableness', false, 'Snadno si všimnu, že se někdo v týmu necítí dobře.'],
  ['p13', 'conscientiousness', false, 'Rozpracované věci potřebuji uzavírat dříve, než otevřu další.'],
  ['p14', 'stability', false, 'Zpětnou vazbu dokážu vyslechnout, aniž bych musel/a okamžitě reagovat.'],
  ['p15', 'openness', false, 'Baví mě propojovat nápady, které spolu na první pohled nesouvisejí.'],
  ['p16', 'extraversion', true, 'Po dni plném rozhovorů potřebuji výrazný čas bez dalšího kontaktu.'],
  ['p17', 'agreeableness', true, 'Když je potřeba výkon, pocity zúčastněných jdou u mě stranou.'],
  ['p18', 'conscientiousness', true, 'Pořádek v úkolech řeším hlavně ve chvíli, kdy začne vznikat problém.'],
  ['p19', 'stability', true, 'Nejistota před důležitým rozhodnutím mi výrazně ztěžuje další krok.'],
  ['p20', 'openness', true, 'Diskuse o možnostech bez okamžitého praktického využití mě rychle unaví.'],
  ['p21', 'extraversion', false, 'Při společné práci často přináším viditelnou energii a tempo.'],
  ['p22', 'agreeableness', false, 'Při posuzování chyby odděluji člověka od jeho konkrétního jednání.'],
  ['p23', 'conscientiousness', false, 'Termíny a závazky si hlídám i bez připomínání zvenčí.'],
  ['p24', 'stability', false, 'Po nečekané komplikaci se dokážu poměrně rychle vrátit k řešení.'],
  ['p25', 'openness', false, 'Rád/a zkouším malý experiment, pokud může přinést lepší postup.'],
  ['p26', 'extraversion', true, 'Než promluvím před skupinou, potřebuji si odpověď nejprve promyslet.'],
  ['p27', 'agreeableness', true, 'Ostrá výměna názorů mi obvykle nevadí, pokud vede k lepšímu rozhodnutí.'],
  ['p28', 'conscientiousness', true, 'Lépe se mi pracuje s volným rámcem než s předem daným harmonogramem.'],
  ['p29', 'stability', true, 'Když se něco nepovede, ovlivňuje to můj výkon i v dalších úkolech.'],
  ['p30', 'openness', true, 'Dávám přednost praktickému detailu před hledáním širších souvislostí.'],
];

export const personalityQuestions = personalityItems.map(([id, trait, reverse, text]) => ({
  id, section: 'personality', trait, reverse, text, scale: AGREEMENT_SCALE,
}));

const skillItems = {
  leadership: [
    ['Na začátku období označím několik priorit, podle kterých má tým volit mezi úkoly.'],
    ['Když se dva důležité požadavky střetnou, rozhodnu v dohodnutém čase a vysvětlím kritéria.'],
    ['U zadání popíšu očekávaný výsledek, jeho smysl a hranice rozhodování.'],
    ['Nejasné zadání nechám běžet a upřesňuji ho až podle toho, kam se práce vyvine.', true],
    ['Při neúplných informacích pojmenuji předpoklady, rizika a dočasné rozhodnutí.'],
    ['Nepříjemné rozhodnutí odložím, dokud další vývoj neukáže jednoznačnou cestu.', true],
  ],
  communication: [
    ['U důležitého sdělení si ověřím, jak mu druhá strana porozuměla.'],
    ['Množství detailu a způsob vysvětlení přizpůsobím zkušenosti konkrétního člověka.'],
    ['Než odpovím na nesouhlas, shrnu vlastními slovy pohled druhé strany.'],
    ['Ticho po mém sdělení obvykle považuji za dostatečný znak souhlasu.', true],
    ['Náročný rozhovor opírám o pozorovatelná fakta, dopad a jasné očekávání.'],
    ['Citlivé téma raději pošlu písemně, i když by přímý rozhovor přinesl více porozumění.', true],
  ],
  coaching: [
    ['Když člověk přinese problém, nejprve zjišťuji, co už zkusil a jaké vidí možnosti.'],
    ['Dokážu ponechat chvíli ticha, aniž bych okamžitě doplnil/a vlastní řešení.'],
    ['Rozvojový rozhovor uzavřu konkrétním krokem, vlastníkem a termínem návratu.'],
    ['Když znám řešení, sdělím ho dříve, než si vyslechnu návrh druhého.', true],
    ['Rozlišuji, kdy člověk potřebuje instrukci, společné řešení nebo koučovací otázky.'],
    ['Po dobrém rozhovoru spoléhám, že změna přijde sama, bez dalšího kontrolního bodu.', true],
  ],
  emotional: [
    ['Všímám si změn v tónu, energii a chování lidí, nejen obsahu jejich slov.'],
    ['Dokážu pojmenovat, jak moje momentální emoce ovlivňuje úsudek.'],
    ['Při konfliktu udržím respekt, i když s druhým zásadně nesouhlasím.'],
    ['Když mě někdo rozčílí, soustředím se hlavně na obhajobu svého pohledu.', true],
    ['Dokážu uznat emoci nebo dopad a současně držet pracovní očekávání.'],
    ['Napětí v týmu raději nechám odeznít, než abych se na něj přímo zeptal/a.', true],
  ],
  delegation: [
    ['Při delegování vyjasním výsledek, pravomoc, hranice a kontrolní bod.'],
    ['Náročnost úkolu přizpůsobím zkušenosti člověka v dané konkrétní činnosti.'],
    ['Po předání výsledku nechávám člověku prostor zvolit vlastní postup.'],
    ['Při první komplikaci mám tendenci převzít delegovaný úkol zpět.', true],
    ['Předem domluvím, v jaké situaci má člověk rozhodnout sám a kdy má eskalovat.'],
    ['Úkol rozdělím na malé kroky, i když by zkušený člověk zvládl odpovědnost za celek.', true],
  ],
  execution: [
    ['Pravidelně vracím pozornost týmu k několika skutečně důležitým výsledkům.'],
    ['Dohodu uzavřu jasným vlastníkem, dalším krokem a termínem kontroly.'],
    ['Aktivně odstraňuji překážky, které tým bez mé role odstranit nemůže.'],
    ['Naléhavé drobnosti mi opakovaně vytlačují důležitou práci.', true],
    ['Omezuji množství současně rozpracované práce, když začíná klesat kvalita.'],
    ['Kontrolu výsledku nechávám až na konečný termín, abych lidi během práce nerušil/a.', true],
  ],
  influence: [
    ['Před důležitým návrhem zjišťuji, co je podstatné pro zúčastněné lidi.'],
    ['Vztahům a důvěře věnuji čas i tehdy, když zrovna nic nepotřebuji.'],
    ['Stejný záměr dokážu vysvětlit různými argumenty podle publika.'],
    ['Podporu pro dobrý návrh začnu řešit až na formální poradě.', true],
    ['Dokážu pojmenovat společný zájem i mezi lidmi s rozdílnými cíli.'],
    ['Když lidé nesouhlasí, opřu se rychle o svou funkci nebo autoritu nadřízeného.', true],
  ],
  adaptability: [
    ['Po náročné situaci si určím, co příště zachovám a co změním.'],
    ['Když se objeví nové informace, dokážu upravit svůj původní názor.'],
    ['Aktivně žádám o zpětnou vazbu i na věci, ve kterých se cítím silný/á.'],
    ['Osvědčený postup měním až ve chvíli, kdy už zjevně nefunguje.', true],
    ['Nový postup nejprve ověřím malým experimentem s předem určeným měřítkem.'],
    ['Po neúspěchu se soustředím na rychlou nápravu a k reflexi příčin se už nevracím.', true],
  ],
};

export const skillQuestions = Object.entries(skillItems).flatMap(([skill, items]) =>
  items.map(([text, reverse = false], index) => ({
    id: `s-${skill}-${index + 1}`, section: 'skills', skill, text, reverse, scale: FREQUENCY_SCALE,
  })),
);

export const situationQuestions = [
  {
    id: 'j01', section: 'situations',
    text: 'Spolehlivý člen týmu podruhé nestihl termín. Současně má objektivně mnoho jiné práce. Co uděláte jako první?',
    targets: ['communication', 'coaching', 'execution', 'delegation'],
    options: [
      { id: 'a', text: 'Zkontroluji kapacitu a přerozdělím část práce; k příčinám se vrátíme, až bude termín zajištěn.', scores: { communication: 2, coaching: 1, execution: 4, delegation: 2 } },
      { id: 'b', text: 'V soukromí porovnáme priority a dopad; pracovník navrhne obnovu plánu a určíme kontrolní bod.', scores: { communication: 4, coaching: 4, execution: 3, delegation: 3 } },
      { id: 'c', text: 'Požádám o plán nápravy do konce dne a následující ráno společně ověříme jeho proveditelnost.', scores: { communication: 2, coaching: 3, execution: 4, delegation: 4 } },
      { id: 'd', text: 'Domluvím nový termín se zadavatelem a příští týden upravíme plánování celé pracovní agendy.', scores: { communication: 3, coaching: 2, execution: 3, delegation: 2 } },
    ],
  },
  {
    id: 'j02', section: 'situations',
    text: 'Zkušený pracovník přinese naléhavý provozní problém a žádá, abyste ho vyřešil/a, protože to umíte rychleji.',
    targets: ['delegation', 'coaching', 'execution', 'leadership'],
    options: [
      { id: 'a', text: 'Převezmu pouze rozhodnutí vyžadující mou pravomoc; pracovník dokončí zbytek a potom situaci rozebereme.', scores: { delegation: 3, coaching: 2, execution: 4, leadership: 4 } },
      { id: 'b', text: 'Zjistím riziko, dosavadní kroky a jeho návrh; společně určíme hranici, za kterou zasáhnu já.', scores: { delegation: 4, coaching: 4, execution: 3, leadership: 3 } },
      { id: 'c', text: 'Dám mu přesný postup pro tuto situaci a po vyřešení domluvím samostatný rozvojový rozhovor.', scores: { delegation: 2, coaching: 3, execution: 4, leadership: 3 } },
      { id: 'd', text: 'Vrátím mu odpovědnost s tím, že řešení očekávám do stanoveného času a potom ho společně zkontrolujeme.', scores: { delegation: 4, coaching: 3, execution: 3, leadership: 2 } },
    ],
  },
  {
    id: 'j03', section: 'situations',
    text: 'Dvě nadřízená oddělení posílají týmu protichůdné priority a obě tvrdí, že jejich požadavek nesnese odklad.',
    targets: ['leadership', 'influence', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Zvolím požadavek s vyšším dopadem, sdělím rozhodnutí oběma stranám a následky dořeším později.', scores: { leadership: 4, influence: 2, execution: 4, communication: 3 } },
      { id: 'b', text: 'Svolám krátké rozhodnutí se zadavateli a do té doby stanovím týmu dočasnou prioritu podle rizika.', scores: { leadership: 4, influence: 4, execution: 3, communication: 4 } },
      { id: 'c', text: 'Rozdělím kapacitu mezi oba požadavky a po prvním výsledku ověřím, kam přesunout zbývající síly.', scores: { leadership: 2, influence: 3, execution: 2, communication: 3 } },
      { id: 'd', text: 'Nechám tým pokračovat v současné práci, dokud zadavatelé nedodají společné písemné rozhodnutí a jeho důvod.', scores: { leadership: 2, influence: 3, execution: 3, communication: 3 } },
    ],
  },
  {
    id: 'j04', section: 'situations',
    text: 'Bývalý kolega, kterého nyní vedete, obchází dohodnutý postup a odkazuje na vaše dřívější přátelství.',
    targets: ['leadership', 'communication', 'emotional', 'influence'],
    options: [
      { id: 'a', text: 'Promluvím s ním soukromě, oddělím osobní vztah od role a domluvím konkrétní očekávání i kontrolu.', scores: { leadership: 4, communication: 4, emotional: 3, influence: 3 } },
      { id: 'b', text: 'Začnu důsledně vyžadovat postup bez zvláštního rozhovoru, aby pravidla působila stejně pro všechny.', scores: { leadership: 3, communication: 2, emotional: 2, influence: 2 } },
      { id: 'c', text: 'Požádám jiného vedoucího, aby byl u rozhovoru a pomohl udržet pracovní rámec bez osobní roviny.', scores: { leadership: 2, communication: 3, emotional: 4, influence: 4 } },
      { id: 'd', text: 'Nejdříve si vyžádám zpětnou vazbu týmu, zda jeho chování skutečně narušuje práci i ostatním.', scores: { leadership: 2, communication: 4, emotional: 3, influence: 3 } },
    ],
  },
  {
    id: 'j05', section: 'situations',
    text: 'Člen týmu udělal chybu s dopadem na zákazníka. Je nervózní, rychle se obhajuje a náprava musí začít okamžitě.',
    targets: ['emotional', 'coaching', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Nejdříve rozdělím kroky nápravy, potom společně oddělíme fakta, příčiny a prevenci dalšího výskytu.', scores: { emotional: 3, coaching: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Převezmu komunikaci se zákazníkem a pracovníka požádám, aby do zítřka připravil rozbor a návrh prevence.', scores: { emotional: 3, coaching: 3, execution: 4, communication: 3 } },
      { id: 'c', text: 'Nechám pracovníka vést nápravu, zůstanu mu k dispozici a kontrolu příčin domluvím po stabilizaci situace.', scores: { emotional: 4, coaching: 4, execution: 3, communication: 3 } },
      { id: 'd', text: 'Nejprve s ním krátce proberu odpovědnost za chybu, aby náprava nezačala bez jasného poučení a dostupných podkladů.', scores: { emotional: 2, coaching: 2, execution: 2, communication: 3 } },
    ],
  },
  {
    id: 'j06', section: 'situations',
    text: 'Tým odmítá nový povinný postup. Některé připomínky jsou oprávněné, ale termín zavedení se neposune.',
    targets: ['adaptability', 'influence', 'communication', 'leadership'],
    options: [
      { id: 'a', text: 'Vysvětlím neměnné části a důvod změny; tým zapojím do těch rozhodnutí, která ještě ovlivnit může.', scores: { adaptability: 4, influence: 4, communication: 4, leadership: 3 } },
      { id: 'b', text: 'Spustím postup podle zadání a současně zavedu krátký seznam problémů, které budeme týdně upravovat.', scores: { adaptability: 4, influence: 2, communication: 3, leadership: 4 } },
      { id: 'c', text: 'Vyberu dva respektované členy týmu, aby pomohli připravit zavedení a vysvětlili změnu ostatním.', scores: { adaptability: 3, influence: 4, communication: 3, leadership: 3 } },
      { id: 'd', text: 'Nechám každého popsat hlavní obavu a před spuštěním připravím odpověď na nejčastější námitky.', scores: { adaptability: 3, influence: 3, communication: 4, leadership: 2 } },
    ],
  },
  {
    id: 'j07', section: 'situations',
    text: 'Nejvýkonnější člověk v týmu dosahuje skvělých výsledků, ale shazuje kolegy a zadržuje informace.',
    targets: ['leadership', 'communication', 'emotional', 'influence'],
    options: [
      { id: 'a', text: 'Popíšu konkrétní chování a dopad, nastavím očekávání spolupráce a budu sledovat změnu stejně jako výkon.', scores: { leadership: 4, communication: 4, emotional: 4, influence: 3 } },
      { id: 'b', text: 'Změním rozdělení práce tak, aby byla spolupráce nezbytná, a výsledky budu hodnotit také podle předávání informací.', scores: { leadership: 4, communication: 3, emotional: 2, influence: 4 } },
      { id: 'c', text: 'Nejprve zjistím jeho pohled a motivaci, potom s ním společně vytvoříme pravidla spolupráce pro další měsíc.', scores: { leadership: 3, communication: 4, emotional: 4, influence: 3 } },
      { id: 'd', text: 'Přesunu ho do samostatnější role a současně určím povinné body, ve kterých musí informace předávat týmu.', scores: { leadership: 3, communication: 2, emotional: 2, influence: 2 } },
    ],
  },
  {
    id: 'j08', section: 'situations',
    text: 'Tým je přetížený, všechny úkoly vypadají důležitě a množství chyb začíná růst.',
    targets: ['execution', 'delegation', 'leadership', 'influence'],
    options: [
      { id: 'a', text: 'Zviditelním kapacitu, zastavím méně hodnotnou práci a se zadavateli vyjednám nutné kompromisy.', scores: { execution: 4, delegation: 3, leadership: 4, influence: 4 } },
      { id: 'b', text: 'Dočasně se zapojím do nejkritičtější operativy a vedoucím úkolů předám rozhodování o zbytku práce.', scores: { execution: 4, delegation: 4, leadership: 3, influence: 2 } },
      { id: 'c', text: 'Každému určím jedinou hlavní prioritu a po dvou dnech podle výsledků přerozdělím další kapacitu.', scores: { execution: 4, delegation: 3, leadership: 4, influence: 2 } },
      { id: 'd', text: 'Požádám tým o krátkodobé mimořádné úsilí a současně připravím podklady pro navýšení zdrojů.', scores: { execution: 2, delegation: 2, leadership: 3, influence: 3 } },
    ],
  },
  {
    id: 'j09', section: 'situations',
    text: 'Nový pracovník pracuje pomalu, ale pečlivě. Zkušenější kolegové chtějí, abyste mu úkoly raději odebral/a.',
    targets: ['coaching', 'delegation', 'communication', 'execution'],
    options: [
      { id: 'a', text: 'Zmenším rozsah úkolu, vyjasním standard rychlosti a domluvím častější krátké kontrolní body.', scores: { coaching: 4, delegation: 4, communication: 4, execution: 3 } },
      { id: 'b', text: 'Přidělím mu zkušeného kolegu na společné směny a po týdnu vyhodnotíme rychlost i samostatnost.', scores: { coaching: 4, delegation: 3, communication: 3, execution: 3 } },
      { id: 'c', text: 'Dočasně mu ponechám jednodušší práci a náročnější úkoly vrátím, až bude dosahovat potřebného tempa.', scores: { coaching: 2, delegation: 2, communication: 3, execution: 4 } },
      { id: 'd', text: 'Nechám současné rozdělení a kolegům vysvětlím, že přesnost má v této fázi přednost před rychlostí.', scores: { coaching: 3, delegation: 3, communication: 4, execution: 2 } },
    ],
  },
  {
    id: 'j10', section: 'situations',
    text: 'Dva schopní členové týmu se dostali do osobního konfliktu a začínají přes prostředníky blokovat společnou práci.',
    targets: ['communication', 'emotional', 'coaching', 'leadership'],
    options: [
      { id: 'a', text: 'Nejprve vyslechnu každého zvlášť, potom povedu společný rozhovor o dopadu, potřebách a pravidlech práce.', scores: { communication: 4, emotional: 4, coaching: 4, leadership: 2 } },
      { id: 'b', text: 'Svolám společné setkání, vrátím rozhovor k pracovním faktům a domluvím konkrétní způsob předávání práce.', scores: { communication: 4, emotional: 3, coaching: 3, leadership: 4 } },
      { id: 'c', text: 'Dočasně oddělím jejich odpovědnosti, aby práce pokračovala, a rozhovor naplánuji po odeznění napětí.', scores: { communication: 2, emotional: 3, coaching: 2, leadership: 3 } },
      { id: 'd', text: 'Požádám je, aby každý písemně navrhl řešení, a z návrhů potom stanovím závazný pracovní postup včetně termínu kontroly.', scores: { communication: 3, emotional: 2, coaching: 4, leadership: 3 } },
    ],
  },
  {
    id: 'j11', section: 'situations',
    text: 'Zjistíte, že vaše vlastní rozhodnutí způsobilo týmu zbytečnou práci. Výsledek lze ještě napravit, ale bude to nepříjemné.',
    targets: ['emotional', 'leadership', 'communication', 'adaptability'],
    options: [
      { id: 'a', text: 'Pojmenuji své rozhodnutí i dopad, stanovím nápravu a po dokončení s týmem rozeberu, co změním příště.', scores: { emotional: 4, leadership: 4, communication: 4, adaptability: 3 } },
      { id: 'b', text: 'Nejdříve připravím realistický plán nápravy a odpovědnost za původní rozhodnutí vysvětlím spolu s řešením.', scores: { emotional: 3, leadership: 4, communication: 3, adaptability: 3 } },
      { id: 'c', text: 'Požádám tým o varianty nápravy, jednu vyberu a vlastní podíl proberu individuálně s dotčenými lidmi.', scores: { emotional: 3, leadership: 3, communication: 3, adaptability: 4 } },
      { id: 'd', text: 'Klíčový dopad opravím osobně a potom požádám tým o nezávislý pohled na příčiny a potřebnou pojistku.', scores: { emotional: 3, leadership: 2, communication: 3, adaptability: 4 } },
    ],
  },
  {
    id: 'j12', section: 'situations',
    text: 'Důležitý zadavatel žádá termín, který tým považuje za nereálný. Odmítnutí může poškodit vztah.',
    targets: ['influence', 'leadership', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Připravím varianty rozsahu, času a rizika a se zadavatelem vyjednám, který kompromis chrání nejvyšší hodnotu.', scores: { influence: 4, leadership: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Přijmu termín pro nejdůležitější část a zbytek označím jako následnou etapu s novým odhadem.', scores: { influence: 3, leadership: 4, execution: 4, communication: 3 } },
      { id: 'c', text: 'Požádám tým o vlastní návrh, jak termín zvládnout, a zadavateli sdělím podmínky potřebné pro úspěch.', scores: { influence: 3, leadership: 3, execution: 3, communication: 4 } },
      { id: 'd', text: 'Termín odmítnu s kapacitními daty a požádám zadavatele, aby před celým týmem určil, kterou jinou práci máme zastavit.', scores: { influence: 4, leadership: 4, execution: 3, communication: 3 } },
    ],
  },
  {
    id: 'j13', section: 'situations',
    text: 'Výkon dříve spolehlivého člověka několik týdnů klesá. Naznačí, že řeší osobní situaci, ale nechce ji rozebírat.',
    targets: ['emotional', 'communication', 'coaching', 'execution'],
    options: [
      { id: 'a', text: 'Respektuji soukromí, popíšu pracovní dopad a společně upravíme dočasná očekávání i datum další kontroly.', scores: { emotional: 4, communication: 4, coaching: 3, execution: 4 } },
      { id: 'b', text: 'Nabídnu dostupnou podporu a dočasně přerozdělím část práce; výkon znovu otevřu za jeden týden.', scores: { emotional: 4, communication: 3, coaching: 4, execution: 3 } },
      { id: 'c', text: 'Zachovám běžná očekávání, ale dám mu možnost kdykoliv přijít a požádat o konkrétní úpravu práce bez dalšího vyptávání.', scores: { emotional: 3, communication: 3, coaching: 3, execution: 4 } },
      { id: 'd', text: 'Domluvím dočasné měřitelné minimum a nabídnu, aby vhodný způsob podpory navrhl především on sám.', scores: { emotional: 3, communication: 4, coaching: 4, execution: 3 } },
    ],
  },
  {
    id: 'j14', section: 'situations',
    text: 'Člen týmu navrhne řešení, které zpochybňuje váš již připravený plán. Jeho nápad je slibný, ale neověřený.',
    targets: ['adaptability', 'coaching', 'leadership', 'execution'],
    options: [
      { id: 'a', text: 'Domluvím malý test obou variant, předem stanovím kritéria a podle výsledku potvrdím další postup.', scores: { adaptability: 4, coaching: 4, leadership: 3, execution: 3 } },
      { id: 'b', text: 'Nechám ho nápad dopracovat do rizik a přínosů; mezitím pokračujeme podle připraveného plánu.', scores: { adaptability: 3, coaching: 4, leadership: 3, execution: 4 } },
      { id: 'c', text: 'Přijmu jeho řešení, pokud za realizaci převezme odpovědnost a stanoví rychlý kontrolní bod.', scores: { adaptability: 4, coaching: 3, leadership: 3, execution: 3 } },
      { id: 'd', text: 'Vysvětlím důvody původního plánu a nový návrh zařadím do podrobného vyhodnocení po dokončení celé této etapy.', scores: { adaptability: 2, coaching: 2, leadership: 4, execution: 4 } },
    ],
  },
  {
    id: 'j15', section: 'situations',
    text: 'Na poradách mluví stále stejní lidé. Tišší členové přitom po poradě přinášejí důležité informace jednotlivě.',
    targets: ['communication', 'influence', 'emotional', 'leadership'],
    options: [
      { id: 'a', text: 'Před poradou pošlu otázky, během ní dám každému prostor a rozhodnutí uzavřu až po krátkém kole názorů.', scores: { communication: 4, influence: 4, emotional: 3, leadership: 3 } },
      { id: 'b', text: 'Požádám tišší členy předem o jejich pohled a na poradě je vyzvu ve chvíli, kdy je téma relevantní.', scores: { communication: 4, influence: 3, emotional: 4, leadership: 3 } },
      { id: 'c', text: 'Zavedu pravidlo maximální délky příspěvku, aby hlasitější lidé nechali více času ostatním i závěrečnému shrnutí.', scores: { communication: 3, influence: 3, emotional: 2, leadership: 4 } },
      { id: 'd', text: 'Ponechám poradu dynamickou a tišší pohledy budu dál sbírat individuálně před konečným rozhodnutím.', scores: { communication: 3, influence: 2, emotional: 4, leadership: 2 } },
    ],
  },
  {
    id: 'j16', section: 'situations',
    text: 'Chcete poprvé delegovat důležitý úkol člověku, který má potenciál, ale v této oblasti zatím málo zkušeností.',
    targets: ['delegation', 'coaching', 'leadership', 'execution'],
    options: [
      { id: 'a', text: 'Předám menší ucelenou část, vyjasním hranice a domluvím častější kontroly, které budu postupně ředit.', scores: { delegation: 4, coaching: 4, leadership: 3, execution: 4 } },
      { id: 'b', text: 'Nechám ho nejprve stínovat zkušeného kolegu a odpovědnost za celek mu předám při dalším podobném úkolu.', scores: { delegation: 2, coaching: 4, leadership: 3, execution: 4 } },
      { id: 'c', text: 'Předám celý úkol s podrobným postupem a určím body, ve kterých musí před pokračováním získat souhlas.', scores: { delegation: 3, coaching: 2, leadership: 4, execution: 4 } },
      { id: 'd', text: 'Předám celý výsledek, nabídnu konzultace a nechám na něm, kdy si o podporu nebo rozhodnutí řekne.', scores: { delegation: 4, coaching: 3, leadership: 3, execution: 2 } },
    ],
  },
  {
    id: 'j17', section: 'situations',
    text: 'Nové pravidlo nutí tým změnit zavedený postup do tří týdnů. Přesný návod zatím neexistuje a provoz nesmí stát.',
    targets: ['adaptability', 'leadership', 'execution', 'communication'],
    options: [
      { id: 'a', text: 'Rozdělím změnu na malé testy, určím neměnné bezpečnostní hranice a výsledky budeme krátce denně sdílet.', scores: { adaptability: 4, leadership: 3, execution: 4, communication: 4 } },
      { id: 'b', text: 'Připravím dočasný jednotný postup, zavedu ho v celém týmu a po prvním týdnu provedu společnou revizi.', scores: { adaptability: 3, leadership: 4, execution: 4, communication: 3 } },
      { id: 'c', text: 'Pověřím malou skupinu návrhem řešení, zatímco ostatní udrží současný provoz co nejdéle beze změny.', scores: { adaptability: 3, leadership: 3, execution: 4, communication: 2 } },
      { id: 'd', text: 'Každé směně dovolím vlastní dočasný postup a před termínem z jejich zkušeností vytvořím společný standard.', scores: { adaptability: 4, leadership: 2, execution: 2, communication: 4 } },
    ],
  },
  {
    id: 'j18', section: 'situations',
    text: 'Delegovaný projekt minul první kontrolní bod. Pracovník tvrdí, že situaci zvládne, ale nedokáže ukázat nový plán.',
    targets: ['delegation', 'coaching', 'emotional', 'execution'],
    options: [
      { id: 'a', text: 'Nechám ho sestavit nový plán během rozhovoru, zmenším nejbližší krok a domluvím častější krátkou kontrolu.', scores: { delegation: 4, coaching: 4, emotional: 3, execution: 4 } },
      { id: 'b', text: 'Přidám zkušeného kolegu jako podporu a odpovědnost ponechám původnímu vlastníkovi do dalšího milníku.', scores: { delegation: 4, coaching: 3, emotional: 4, execution: 3 } },
      { id: 'c', text: 'Převezmu plánování projektu, ale jednotlivé úkoly mu ponechám a po dokončení podrobně rozebereme příčiny prvního skluzu.', scores: { delegation: 2, coaching: 3, emotional: 3, execution: 4 } },
      { id: 'd', text: 'Ponechám mu současnou volnost, jasně popíšu následky dalšího skluzu a určím pevný termín výsledku.', scores: { delegation: 4, coaching: 2, emotional: 2, execution: 3 } },
    ],
  },
  {
    id: 'j19', section: 'situations',
    text: 'Tři lidé vám nezávisle řeknou, že pod tlakem působíte uzavřeně a těžko se vám přinášejí špatné zprávy.',
    targets: ['adaptability', 'emotional', 'coaching', 'communication'],
    options: [
      { id: 'a', text: 'Požádám je o konkrétní příklady, shrnu společný vzorec a domluvím signál, který mi příště mohou dát.', scores: { adaptability: 4, emotional: 3, coaching: 4, communication: 4 } },
      { id: 'b', text: 'Vysvětlím, co v těch situacích prožívám, a požádám je, aby špatné zprávy přinášeli s návrhem řešení.', scores: { adaptability: 3, emotional: 4, coaching: 3, communication: 4 } },
      { id: 'c', text: 'Zavedu pravidelnou část porady pro rizika a požádám jiného vedoucího, aby sledoval mou reakci.', scores: { adaptability: 4, emotional: 3, coaching: 3, communication: 3 } },
      { id: 'd', text: 'Poděkuji za otevřenost a několik týdnů budu vědomě reagovat klidněji, než si vyžádám další hodnocení.', scores: { adaptability: 3, emotional: 4, coaching: 2, communication: 3 } },
    ],
  },
  {
    id: 'j20', section: 'situations',
    text: 'Jediný expert drží klíčové know-how a odmítá zaučovat ostatní, protože tím podle něj utrpí jeho vlastní výkon.',
    targets: ['delegation', 'coaching', 'influence', 'leadership'],
    options: [
      { id: 'a', text: 'Zařadím předávání know-how mezi jeho výsledky, vyhradím mu kapacitu a společně vybereme vhodného nástupce.', scores: { delegation: 4, coaching: 3, influence: 4, leadership: 4 } },
      { id: 'b', text: 'Nechám ho vytvořit jednoduchý návod a další člověk podle něj provede první úkol pod jeho dohledem.', scores: { delegation: 4, coaching: 4, influence: 3, leadership: 3 } },
      { id: 'c', text: 'Nejprve zjistím, čeho se při předávání obává, a nabídnu mu viditelnou roli garanta odborného standardu.', scores: { delegation: 3, coaching: 4, influence: 4, leadership: 3 } },
      { id: 'd', text: 'Přiřadím mu kolegu na společnou práci a stanovím přesný termín i praktickou zkoušku, kdy musí být druhý člověk plně samostatný.', scores: { delegation: 4, coaching: 2, influence: 2, leadership: 4 } },
    ],
  },
];

export const allQuestions = [...personalityQuestions, ...skillQuestions, ...situationQuestions];

export const questionsBySection = Object.fromEntries(
  SECTIONS.map((section) => [section.id, allQuestions.filter((question) => question.section === section.id)]),
);
