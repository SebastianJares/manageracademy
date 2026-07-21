import {
  ARCHETYPES,
  PREFERENCES,
  SKILLS,
  TRAITS,
  personalityQuestions,
  preferenceQuestions,
  skillQuestions,
  situationQuestions,
} from '../data/questions';
import { ROLE_DETAILS, SKILL_GUIDES } from '../data/analysisContent';

const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));
const round = (value) => Math.round(value);
const average = (values) => values.length
  ? values.reduce((sum, value) => sum + value, 0) / values.length
  : 0;

const normalizedLikert = (question, rawValue) => {
  const value = question.reverse ? 6 - Number(rawValue) : Number(rawValue);
  return clamp(((value - 1) / 4) * 100);
};

const scoreGroupedLikert = (questions, answers, groupKey, groups) => Object.fromEntries(
  Object.keys(groups).map((key) => {
    const values = questions
      .filter((question) => question[groupKey] === key && answers[question.id] != null)
      .map((question) => normalizedLikert(question, answers[question.id]));
    return [key, round(average(values))];
  }),
);

const scoreSituations = (answers) => {
  const earned = Object.fromEntries(Object.keys(SKILLS).map((skill) => [skill, 0]));
  const range = Object.fromEntries(Object.keys(SKILLS).map((skill) => [skill, 0]));
  const coverage = Object.fromEntries(Object.keys(SKILLS).map((skill) => [skill, 0]));

  situationQuestions.forEach((question) => {
    const selected = question.options.find((option) => option.id === answers[question.id]);
    question.targets.forEach((skill) => {
      const values = question.options.map((option) => option.scores[skill]);
      const minimum = Math.min(...values);
      const maximum = Math.max(...values);
      if (maximum === minimum) return;
      coverage[skill] += 1;
      range[skill] += maximum - minimum;
      earned[skill] += (selected?.scores[skill] ?? minimum) - minimum;
    });
  });

  return {
    scores: Object.fromEntries(Object.keys(SKILLS).map((skill) => [
      skill,
      range[skill] ? round((earned[skill] / range[skill]) * 100) : null,
    ])),
    coverage,
  };
};

const isCompletePreference = (answer) => (
  Boolean(answer?.most)
  && Boolean(answer?.least)
  && answer.most !== answer.least
);

const scorePreferences = (answers) => {
  const points = Object.fromEntries(Object.keys(PREFERENCES).map((key) => [key, 0]));
  const coverage = Object.fromEntries(Object.keys(PREFERENCES).map((key) => [key, 0]));
  let completed = 0;

  preferenceQuestions.forEach((question) => {
    const answer = answers[question.id];
    const complete = isCompletePreference(answer);
    if (complete) completed += 1;

    question.options.forEach((option) => {
      coverage[option.preference] += 1;
      if (!complete) {
        points[option.preference] += 1;
      } else if (option.id === answer.most) {
        points[option.preference] += 2;
      } else if (option.id !== answer.least) {
        points[option.preference] += 1;
      }
    });
  });

  const scores = Object.fromEntries(Object.keys(PREFERENCES).map((key) => [
    key,
    coverage[key] ? round((points[key] / (coverage[key] * 2)) * 100) : 50,
  ]));

  return {
    scores,
    coverage,
    completed,
    ranking: Object.entries(scores).sort(([, a], [, b]) => b - a).map(([key]) => key),
  };
};

const groupSpread = (questions, answers, groupKey) => {
  const grouped = {};
  questions.forEach((question) => {
    if (answers[question.id] == null) return;
    const key = question[groupKey];
    grouped[key] ??= [];
    grouped[key].push(normalizedLikert(question, answers[question.id]));
  });
  return average(Object.values(grouped).map((values) => Math.max(...values) - Math.min(...values)));
};

const scoreResponseQuality = (answers) => {
  const likertQuestions = [...personalityQuestions, ...skillQuestions];
  const values = likertQuestions
    .map((question) => Number(answers[question.id]))
    .filter(Number.isFinite);
  const completedPreferences = preferenceQuestions
    .filter((question) => isCompletePreference(answers[question.id])).length;
  const completed = values.length
    + completedPreferences
    + situationQuestions.filter((question) => answers[question.id] != null).length;
  const total = likertQuestions.length + preferenceQuestions.length + situationQuestions.length;
  const completion = completed / total;
  const distribution = values.reduce((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});
  const dominantShare = values.length ? Math.max(...Object.values(distribution)) / values.length : 1;
  const extremeShare = values.length
    ? values.filter((value) => value === 1 || value === 5).length / values.length
    : 1;
  const skillMean = average(skillQuestions
    .filter((question) => answers[question.id] != null)
    .map((question) => normalizedLikert(question, answers[question.id])));
  const inconsistency = average([
    groupSpread(personalityQuestions, answers, 'trait'),
    groupSpread(skillQuestions, answers, 'skill'),
  ]);

  const flags = [];
  if (completion < 1) flags.push('část položek nebyla vyplněna');
  if (dominantShare > 0.68) flags.push('velká část škálových odpovědí je stejná');
  if (extremeShare > 0.78) flags.push('velmi často byly použity krajní odpovědi');
  if (skillMean > 88) flags.push('sebehodnocení dovedností je téměř bez rozvojových míst');
  if (inconsistency > 73) flags.push('odpovědi uvnitř některých oblastí se výrazně rozcházejí');

  let score = completion * 100;
  if (dominantShare > 0.68) score -= 16;
  if (extremeShare > 0.78) score -= 10;
  if (skillMean > 88) score -= 10;
  if (inconsistency > 73) score -= 10;
  score = round(clamp(score));

  return {
    score,
    label: score >= 82 ? 'dostatečná' : score >= 65 ? 'střední' : 'omezená',
    flags,
    note: flags.length
      ? `Interpretaci oslabuje: ${flags.join('; ')}.`
      : 'Odpovědi jsou úplné a dostatečně rozlišené. To však nenahrazuje psychometrickou reliabilitu ani zpětnou vazbu druhých.',
  };
};

const scoreArchetypes = (skills, traits) => Object.fromEntries(
  Object.entries(ARCHETYPES).map(([key, archetype]) => {
    const skillPart = Object.entries(archetype.weights)
      .reduce((sum, [skill, weight]) => sum + (skills[skill] ?? 0) * weight, 0) * 0.9;
    const traitPart = Object.entries(archetype.traits)
      .reduce((sum, [trait, weight]) => sum + (traits[trait] ?? 0) * weight, 0);
    return [key, round(skillPart + traitPart)];
  }),
);

const buildTraitSummary = (traits) => Object.entries(traits)
  .sort(([, a], [, b]) => Math.abs(b - 50) - Math.abs(a - 50))
  .slice(0, 4)
  .map(([key, score]) => ({
    key,
    score,
    label: TRAITS[key].label,
    text: score >= 58
      ? TRAITS[key].high
      : score <= 42
        ? TRAITS[key].low
        : 'V této tendenci se pohybujete mezi oběma póly a pravděpodobně reagujete podle konkrétní situace.',
  }));

const evidenceText = (selfScore, situationalScore) => {
  if (situationalScore == null) return 'Tato oblast vychází pouze ze sebehodnocení.';
  const gap = selfScore - situationalScore;
  if (Math.abs(gap) <= 12) {
    return 'Sebehodnocení a rozhodování v modelových situacích si zde poměrně odpovídají.';
  }
  if (gap > 12) {
    return 'Sebehodnocení je výše než situační volby. Dovednost může být známá a zamýšlená, ale pod tlakem nemusí být stejně dostupná.';
  }
  return 'Situační úsudek vychází výše než vlastní hodnocení. Je možné, že svůj praktický úsudek podceňujete nebo ho nepoužíváte dost pravidelně.';
};

const traitLinks = {
  leadership: ['conscientiousness', 'stability'],
  communication: ['agreeableness', 'extraversion'],
  coaching: ['agreeableness', 'openness'],
  emotional: ['stability', 'agreeableness'],
  delegation: ['conscientiousness', 'stability'],
  execution: ['conscientiousness'],
  influence: ['extraversion', 'agreeableness'],
  adaptability: ['openness', 'stability'],
};

const traitContext = (skill, traits) => {
  const pronounced = traitLinks[skill]
    .map((key) => ({ key, score: traits[key] }))
    .filter(({ score }) => score >= 62 || score <= 38)
    .sort((a, b) => Math.abs(b.score - 50) - Math.abs(a.score - 50));
  if (!pronounced.length) return '';
  const { key, score } = pronounced[0];
  const direction = score >= 62 ? TRAITS[key].high : TRAITS[key].low;
  return ` Osobnostní kontext: ${direction.charAt(0).toLowerCase()}${direction.slice(1)}`;
};

const buildPreferenceAnalysis = ({ preferenceScores, primary, secondary }) => {
  const ranking = Object.entries(preferenceScores).sort(([, a], [, b]) => b - a);
  const describe = ([key, score]) => ({ key, score, ...PREFERENCES[key] });
  const top = describe(ranking[0]);
  const second = describe(ranking[1]);
  const low = describe(ranking.at(-1));
  const rolePair = [primary, secondary];
  const primaryPreferenceRank = ranking.findIndex(([key]) => key === primary) + 1;

  let alignmentLabel;
  let alignmentText;
  if (top.key === primary) {
    alignmentLabel = 'přirozená preference podporuje hlavní roli';
    alignmentText = `To, co vás ve vedení relativně nejvíc přitahuje (${top.label.toLowerCase()}), odpovídá hlavní roli ${ARCHETYPES[primary].label}. Motivace a zachycený způsob práce zde pravděpodobně míří podobným směrem.`;
  } else if (top.key === secondary) {
    alignmentLabel = 'preference podporuje doplňující roli';
    alignmentText = `Nejsilnější preference (${top.label.toLowerCase()}) se promítá do doplňující role ${ARCHETYPES[secondary].label}. Hlavní roli ${ARCHETYPES[primary].label} tak pravděpodobně používáte s odlišným osobním akcentem.`;
  } else if (primaryPreferenceRank >= 5) {
    alignmentLabel = 'schopnostní profil a zdroj energie se liší';
    alignmentText = `Dovednosti ukazují hlavně roli ${ARCHETYPES[primary].label}, ale tato orientace nepatří mezi vaše přirozeně nejsilnější preference. Může jít o dobře naučenou pracovní roli, která vyžaduje více vědomé energie, nebo o vliv současného pracovního prostředí.`;
  } else {
    alignmentLabel = 'preference rozšiřuje schopnostní profil';
    alignmentText = `Dovednostní profil směřuje k roli ${ARCHETYPES[primary].label}, zatímco nejvíc vás přitahuje ${top.label.toLowerCase()}. Nejde o rozpor: preference popisuje zdroj energie, kdežto role vychází z deklarovaného chování a situačního úsudku.`;
  }

  return {
    title: `${top.short} + ${second.short}`,
    top,
    second,
    low,
    rolePair,
    alignmentLabel,
    alignmentText,
    watchout: top.watchout,
    note: 'Skóre je relativní uvnitř jednoho profilu: vyšší výsledek jedné orientace nutně snižuje prostor pro jiné. Není to percentil ani důkaz schopnosti a neslouží k porovnávání lidí.',
  };
};

const buildPatterns = (skills, traits, selfReportedSkills, situationalSkills) => {
  const patterns = [];
  const add = (title, text, action) => patterns.push({ title, text, action });

  if (skills.execution >= 68 && skills.coaching <= 55) {
    add('Rychlost může předbíhat učení lidí', 'Silná orientace na výsledek spolu s nižším koučováním často vede k rychlému převzetí problému. Tým splní úkol, ale méně roste jeho samostatnost.', 'Před převzetím problému si vyžádejte návrh druhého člověka a určete pouze hranici, kde je opravdu nutná vaše autorita.');
  }
  if (traits.agreeableness >= 66 && (skills.communication <= 58 || skills.leadership <= 58)) {
    add('Vztah může dostávat přednost před jasností', 'Vyšší kooperativnost pomáhá důvěře, ale v kombinaci s nižší jasností může prodlužovat nevyřčený problém.', 'U citlivého tématu spojte uznání pohledu druhého s jednou konkrétní větou o očekávání a termínu.');
  }
  if (skills.leadership >= 70 && skills.emotional <= 55) {
    add('Směr může být jasnější než jeho lidský dopad', 'Rozhodnost je pravděpodobnou oporou, ale pod tlakem může komunikace přeskočit obavy, ztrátu nebo odpor lidí.', 'Při oznamování změny přidejte prostor pro otázky a pojmenujte, co změna lidem bere i co od nich potřebujete.');
  }
  if (skills.coaching >= 68 && skills.execution <= 55) {
    add('Dobrý rozhovor nemusí automaticky vést k výsledku', 'Otázky a podpora mohou být silné, zatímco dohoda, termín a následná kontrola zůstávají měkčí.', 'Každý rozvojový rozhovor ukončete jedním pozorovatelným krokem a konkrétním datem návratu.');
  }
  if (traits.openness >= 68 && (traits.conscientiousness <= 42 || skills.execution <= 55)) {
    add('Nové možnosti mohou tříštit pozornost', 'Otevřenost pomáhá změně a inovaci, ale bez pevného rytmu může vznikat více začátků než dokončení.', 'Každý nový experiment spojte s vlastníkem, měřítkem úspěchu a datem, kdy ho zastavíte, upravíte nebo standardizujete.');
  }
  if (traits.conscientiousness >= 70 && (traits.openness <= 40 || skills.adaptability <= 55)) {
    add('Systém může postupně ztuhnout', 'Silná systematičnost chrání kvalitu, ale může prodlužovat život postupu, který už neodpovídá změněným podmínkám.', 'Jednou měsíčně vyberte jedno pravidlo a ověřte, zda stále chrání hodnotu, kvůli které vzniklo.');
  }

  const calibrationGaps = Object.keys(SKILLS)
    .map((key) => ({ key, gap: selfReportedSkills[key] - situationalSkills[key] }))
    .filter(({ gap }) => Number.isFinite(gap) && Math.abs(gap) >= 25)
    .sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap));
  if (calibrationGaps.length) {
    const { key, gap } = calibrationGaps[0];
    add(
      `Kalibrace v oblasti ${SKILLS[key].label.toLowerCase()}`,
      gap > 0
        ? 'Vlastní hodnocení je znatelně vyšší než volby v modelových situacích. Rozdíl není důkaz slabiny, ale je vhodné ověřit chování na konkrétních příkladech.'
        : 'Modelové situace dopadly znatelně lépe než vlastní hodnocení. Může jít o zbytečně přísné sebepojetí nebo o dovednost, kterou používáte jen v části situací.',
      'Požádejte dva lidi o konkrétní příklad, kdy jste tuto dovednost použil/a dobře a kdy její použití chybělo.',
    );
  }

  return patterns.slice(0, 3);
};

const buildAnalysis = ({ primary, secondary, skills, traits, selfReportedSkills, situationalSkills, preferenceScores }) => {
  const ranked = Object.entries(skills).sort(([, a], [, b]) => b - a);
  const strengths = ranked.slice(0, 3).map(([key, score]) => ({
    key,
    score,
    label: SKILLS[key].label,
    why: `${SKILL_GUIDES[key].high}${traitContext(key, traits)}`,
    evidence: evidenceText(selfReportedSkills[key], situationalSkills[key]),
    watchout: SKILL_GUIDES[key].overuse,
  }));
  const development = ranked.slice(-3).reverse().map(([key, score]) => ({
    key,
    score,
    label: SKILLS[key].label,
    why: SKILL_GUIDES[key].low,
    evidence: evidenceText(selfReportedSkills[key], situationalSkills[key]),
    firstStep: SKILL_GUIDES[key].firstStep,
  }));
  const priority = development[0];
  const readings = [
    ...SKILL_GUIDES[priority.key].readings,
    SKILL_GUIDES[development[1].key].readings[0],
    SKILL_GUIDES[strengths[0].key].readings[0],
  ].filter((item, index, items) => items.findIndex((candidate) => candidate.title === item.title) === index);

  const gaps = Object.keys(SKILLS)
    .map((key) => Math.abs(selfReportedSkills[key] - situationalSkills[key]))
    .filter(Number.isFinite);
  const meanGap = round(average(gaps));
  const preference = buildPreferenceAnalysis({ preferenceScores, primary, secondary });

  return {
    role: ROLE_DETAILS[primary],
    secondaryRole: ROLE_DETAILS[secondary],
    summary: `Váš profil nejvíce připomíná roli ${ARCHETYPES[primary].label}, kterou doplňuje ${ARCHETYPES[secondary].label.toLowerCase()}. Přirozeně vás nejvíc přitahuje ${preference.top.label.toLowerCase()} a ${preference.second.label.toLowerCase()}. Relativní oporou je ${strengths[0].label.toLowerCase()}, zatímco největší okamžitou páku pro rozvoj nabízí ${priority.label.toLowerCase()}.`,
    preference,
    strengths,
    development,
    priority,
    patterns: buildPatterns(skills, traits, selfReportedSkills, situationalSkills),
    plan: SKILL_GUIDES[priority.key].plan,
    readings,
    alignment: {
      gap: meanGap,
      label: meanGap <= 13 ? 'dobrá shoda zdrojů' : meanGap <= 24 ? 'částečná shoda zdrojů' : 'výraznější rozdíl zdrojů',
      note: meanGap <= 13
        ? 'Sebehodnocení a situační rozhodování poskytují celkově podobný obraz.'
        : meanGap <= 24
          ? 'V některých oblastech se vlastní pohled a situační volby liší; právě tyto rozdíly stojí za ověření zpětnou vazbou.'
          : 'Vlastní hodnocení a situační volby se více rozcházejí. Výsledek čtěte jako hypotézu a ověřte jej na konkrétních situacích a zpětné vazbě.',
    },
  };
};

export const scoreToStat = (score) => clamp(8 + round((score / 100) * 12), 8, 20);

export const scoreBand = (score) => {
  if (score >= 78) return 'výrazná opora';
  if (score >= 64) return 'pravděpodobná opora';
  if (score >= 48) return 'proměnlivé použití';
  return 'priorita k ověření a rozvoji';
};

export const calculateProfile = (answers, identity = {}) => {
  const traits = scoreGroupedLikert(personalityQuestions, answers, 'trait', TRAITS);
  const selfReportedSkills = scoreGroupedLikert(skillQuestions, answers, 'skill', SKILLS);
  const situational = scoreSituations(answers);
  const preferences = scorePreferences(answers);
  const skills = Object.fromEntries(Object.keys(SKILLS).map((skill) => {
    const situationalScore = situational.scores[skill];
    const combined = situationalScore == null
      ? selfReportedSkills[skill]
      : selfReportedSkills[skill] * 0.65 + situationalScore * 0.35;
    return [skill, round(clamp(combined))];
  }));

  const archetypeScores = scoreArchetypes(skills, traits);
  const rankedArchetypes = Object.entries(archetypeScores).sort(([, a], [, b]) => b - a);
  const primary = rankedArchetypes[0][0];
  const secondary = rankedArchetypes[1][0];
  const analysis = buildAnalysis({
    primary,
    secondary,
    skills,
    traits,
    selfReportedSkills,
    situationalSkills: situational.scores,
    preferenceScores: preferences.scores,
  });

  return {
    id: globalThis.crypto?.randomUUID?.() ?? `attempt-${Date.now()}`,
    version: 3,
    createdAt: new Date().toISOString(),
    identity: {
      name: identity.name?.trim() || 'Bezejmenný manažer',
      role: identity.role?.trim() || 'Vedoucí týmu',
    },
    primary,
    secondary,
    title: `${ARCHETYPES[primary].label} s prvky role ${ARCHETYPES[secondary].label}`,
    archetypeScores,
    traits,
    traitSummary: buildTraitSummary(traits),
    preferenceScores: preferences.scores,
    preferenceRanking: preferences.ranking,
    preferenceCoverage: preferences.coverage,
    selfReportedSkills,
    situationalSkills: situational.scores,
    situationCoverage: situational.coverage,
    skills,
    stats: Object.fromEntries(Object.entries(skills).map(([key, score]) => [key, scoreToStat(score)])),
    strengths: analysis.strengths,
    growthAreas: analysis.development,
    responseQuality: scoreResponseQuality(answers),
    analysis,
  };
};

export const getAnsweredCount = (answers, questions) => questions
  .filter((question) => answers[question.id] != null).length;
