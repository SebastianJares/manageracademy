import {
  ARCHETYPES,
  SKILLS,
  TRAITS,
  personalityQuestions,
  skillQuestions,
  situationQuestions,
} from '../data/questions';

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
    const items = questions.filter((question) => question[groupKey] === key);
    const values = items
      .filter((question) => answers[question.id] != null)
      .map((question) => normalizedLikert(question, answers[question.id]));
    return [key, round(average(values))];
  }),
);

const scoreSituations = (answers) => {
  const earned = Object.fromEntries(Object.keys(SKILLS).map((skill) => [skill, 0]));
  const possible = Object.fromEntries(Object.keys(SKILLS).map((skill) => [skill, 0]));

  situationQuestions.forEach((question) => {
    const option = question.options.find((candidate) => candidate.id === answers[question.id]);
    Object.keys(SKILLS).forEach((skill) => {
      const maxForScenario = Math.max(...question.options.map((candidate) => candidate.scores?.[skill] ?? 0));
      possible[skill] += maxForScenario;
      earned[skill] += option?.scores?.[skill] ?? 0;
    });
  });

  return {
    scores: Object.fromEntries(Object.keys(SKILLS).map((skill) => [
      skill,
      possible[skill] ? round((earned[skill] / possible[skill]) * 100) : null,
    ])),
    coverage: possible,
  };
};

const scoreResponseQuality = (answers) => {
  const likertQuestions = [...personalityQuestions, ...skillQuestions];
  const values = likertQuestions
    .map((question) => Number(answers[question.id]))
    .filter((value) => Number.isFinite(value));
  const completed = Object.keys(answers).length;
  const total = likertQuestions.length + situationQuestions.length;
  const completion = total ? completed / total : 0;
  const distribution = values.reduce((result, value) => ({
    ...result,
    [value]: (result[value] ?? 0) + 1,
  }), {});
  const dominantShare = values.length ? Math.max(...Object.values(distribution)) / values.length : 1;
  const extremeShare = values.length
    ? values.filter((value) => value === 1 || value === 5).length / values.length
    : 1;
  let score = completion * 100;
  if (dominantShare > 0.72) score -= 18;
  if (extremeShare > 0.82) score -= 10;

  return {
    score: round(clamp(score)),
    label: score >= 82 ? 'dobrá' : score >= 65 ? 'střední' : 'omezená',
    note: score >= 82
      ? 'Odpovědi jsou dostatečně rozlišené pro sebereflexní profil.'
      : 'Výsledek berte orientačně; část odpovědí byla velmi podobná nebo chyběla.',
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
  .slice(0, 3)
  .map(([key, score]) => ({
    key,
    score,
    label: TRAITS[key].label,
    text: score >= 56
      ? TRAITS[key].high
      : score <= 44
        ? TRAITS[key].low
        : 'V této tendenci se pohybujete mezi oběma póly a pravděpodobně reagujete podle situace.',
  }));

const buildProgress = (skills, previousAttempts) => {
  const previous = previousAttempts.at(-1);
  if (!previous) return { xp: 0, level: 1, gained: 0, deltas: {} };

  const deltas = Object.fromEntries(Object.keys(SKILLS).map((skill) => [
    skill,
    skills[skill] - (previous.skills?.[skill] ?? skills[skill]),
  ]));
  const meaningfulGrowth = average(Object.values(deltas).map((delta) => Math.max(0, Math.min(12, delta))));
  const gained = 20 + round(meaningfulGrowth * 2.5);
  const xp = (previous.progress?.xp ?? 0) + gained;
  return { xp, level: 1 + Math.floor(xp / 100), gained, deltas };
};

export const scoreToStat = (score) => clamp(8 + round((score / 100) * 12), 8, 20);

export const calculateProfile = (answers, identity = {}, previousAttempts = []) => {
  const traits = scoreGroupedLikert(personalityQuestions, answers, 'trait', TRAITS);
  const selfReportedSkills = scoreGroupedLikert(skillQuestions, answers, 'skill', SKILLS);
  const situational = scoreSituations(answers);
  const skills = Object.fromEntries(Object.keys(SKILLS).map((skill) => {
    const situationalScore = situational.scores[skill];
    const combined = situationalScore == null
      ? selfReportedSkills[skill]
      : selfReportedSkills[skill] * 0.72 + situationalScore * 0.28;
    return [skill, round(clamp(combined))];
  }));

  const archetypeScores = scoreArchetypes(skills, traits);
  const rankedArchetypes = Object.entries(archetypeScores).sort(([, a], [, b]) => b - a);
  const primary = rankedArchetypes[0][0];
  const secondary = rankedArchetypes[1][0];
  const rankedSkills = Object.entries(skills).sort(([, a], [, b]) => b - a);
  const strengths = rankedSkills.slice(0, 3).map(([key, score]) => ({ key, score, ...SKILLS[key] }));
  const growthAreas = rankedSkills.slice(-2).reverse().map(([key, score]) => ({ key, score, ...SKILLS[key] }));
  const progress = buildProgress(skills, previousAttempts);

  return {
    id: globalThis.crypto?.randomUUID?.() ?? `attempt-${Date.now()}`,
    createdAt: new Date().toISOString(),
    identity: {
      name: identity.name?.trim() || 'Bezejmenný manažer',
      role: identity.role?.trim() || 'Vedoucí týmu',
    },
    primary,
    secondary,
    title: `${ARCHETYPES[primary].label} s instinktem role ${ARCHETYPES[secondary].label}`,
    archetypeScores,
    traits,
    traitSummary: buildTraitSummary(traits),
    selfReportedSkills,
    situationalSkills: situational.scores,
    skills,
    stats: Object.fromEntries(Object.entries(skills).map(([key, score]) => [key, scoreToStat(score)])),
    strengths,
    growthAreas,
    quest: growthAreas[0],
    responseQuality: scoreResponseQuality(answers),
    progress,
  };
};

export const getAnsweredCount = (answers, questions) => questions
  .filter((question) => answers[question.id] != null).length;

