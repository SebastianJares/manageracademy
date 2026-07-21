import { describe, expect, it } from 'vitest';
import {
  SKILLS,
  PREFERENCES,
  TRAITS,
  allQuestions,
  personalityQuestions,
  preferenceQuestions,
  skillQuestions,
  situationQuestions,
} from '../data/questions';
import { calculateProfile, scoreToStat } from '../lib/scoring';
import { buildAnalysisHtml, buildOutlookEml } from '../lib/reports';
import { orderPreferenceOptions, orderSituationOptions } from '../lib/optionOrder';

const balancedPreferenceAnswers = {
  f01: { most: 'a', least: 'b' },
  f02: { most: 'a', least: 'b' },
  f03: { most: 'b', least: 'a' },
  f04: { most: 'b', least: 'a' },
  f05: { most: 'b', least: 'c' },
  f06: { most: 'a', least: 'b' },
  f07: { most: 'a', least: 'b' },
  f08: { most: 'c', least: 'b' },
  f09: { most: 'a', least: 'b' },
  f10: { most: 'b', least: 'a' },
};

const neutralAnswers = Object.fromEntries(allQuestions.map((question) => [
  question.id,
  question.section === 'situations'
    ? question.options[0].id
    : question.section === 'preferences'
      ? balancedPreferenceAnswers[question.id]
      : 3,
]));

const averageSkill = (profile) => Object.values(profile.skills)
  .reduce((sum, score) => sum + score, 0) / Object.keys(profile.skills).length;

describe('assessment construction', () => {
  it('contains 100 unique items across four complementary methods', () => {
    expect(allQuestions).toHaveLength(100);
    expect(personalityQuestions).toHaveLength(30);
    expect(skillQuestions).toHaveLength(40);
    expect(preferenceQuestions).toHaveLength(10);
    expect(situationQuestions).toHaveLength(20);
    expect(new Set(allQuestions.map((question) => question.id)).size).toBe(allQuestions.length);
  });

  it('uses six items per trait and five behavioral items per skill', () => {
    Object.keys(TRAITS).forEach((trait) => {
      expect(personalityQuestions.filter((question) => question.trait === trait)).toHaveLength(6);
    });
    Object.keys(SKILLS).forEach((skill) => {
      expect(skillQuestions.filter((question) => question.skill === skill)).toHaveLength(5);
    });
  });

  it('balances every managerial preference and every pair equally', () => {
    const coverage = Object.fromEntries(Object.keys(PREFERENCES).map((key) => [key, 0]));
    const pairs = {};
    preferenceQuestions.forEach((question) => {
      expect(question.options).toHaveLength(3);
      expect(new Set(question.options.map((option) => option.preference)).size).toBe(3);
      question.options.forEach((option) => { coverage[option.preference] += 1; });
      const keys = question.options.map((option) => option.preference).sort();
      for (let left = 0; left < keys.length; left += 1) {
        for (let right = left + 1; right < keys.length; right += 1) {
          const pair = `${keys[left]}:${keys[right]}`;
          pairs[pair] = (pairs[pair] ?? 0) + 1;
        }
      }
      const lengths = question.options.map((option) => option.text.length);
      expect(Math.max(...lengths) / Math.min(...lengths)).toBeLessThanOrEqual(1.4);
    });
    expect(new Set(Object.values(coverage))).toEqual(new Set([5]));
    expect(Object.keys(pairs)).toHaveLength(15);
    expect(new Set(Object.values(pairs))).toEqual(new Set([2]));
  });

  it('does not bind a preference to one display position', () => {
    const positions = Object.fromEntries(Object.keys(PREFERENCES).map((key) => [key, new Set()]));
    preferenceQuestions.forEach((question) => {
      orderPreferenceOptions(question).forEach((option, index) => positions[option.preference].add(index));
    });
    Object.values(positions).forEach((used) => expect(used.size).toBeGreaterThanOrEqual(2));
  });

  it('covers every skill in at least five situational dilemmas', () => {
    Object.keys(SKILLS).forEach((skill) => {
      expect(situationQuestions.filter((question) => question.targets.includes(skill)).length).toBeGreaterThanOrEqual(5);
    });
  });

  it('does not reveal the strongest situational option by text length', () => {
    situationQuestions.forEach((question) => {
      const lengths = question.options.map((option) => option.text.length);
      const totals = question.options.map((option) => Object.values(option.scores).reduce((sum, score) => sum + score, 0));
      const longest = Math.max(...lengths);
      const strongest = Math.max(...totals);
      const longestIsStrongest = question.options.some((option, index) => (
        lengths[index] === longest && totals[index] === strongest
      ));
      expect(longest / Math.min(...lengths)).toBeLessThanOrEqual(1.35);
      expect(longestIsStrongest).toBe(false);
      expect(question.options.some((option) => Object.values(option.scores).every((score) => score === 4))).toBe(false);
    });
  });

  it('distributes stronger options across all displayed positions', () => {
    const positions = situationQuestions.map((question) => {
      const strongest = question.options
        .map((option) => ({ option, total: Object.values(option.scores).reduce((sum, score) => sum + score, 0) }))
        .sort((a, b) => b.total - a.total)[0].option.id;
      return orderSituationOptions(question).findIndex((option) => option.id === strongest);
    });
    expect(new Set(positions)).toEqual(new Set([0, 1, 2, 3]));
    expect(Math.max(...[0, 1, 2, 3].map((position) => positions.filter((value) => value === position).length)))
      .toBeLessThanOrEqual(8);
  });
});

describe('manager profile scoring', () => {
  it('keeps D&D-style stats between 8 and 20', () => {
    expect(scoreToStat(0)).toBe(8);
    expect(scoreToStat(100)).toBe(20);
    expect(scoreToStat(50)).toBe(14);
  });

  it('creates a complete profile and detailed interpretation', () => {
    const profile = calculateProfile(neutralAnswers, { name: 'Alex', role: 'Vedoucí' });
    expect(profile.identity.name).toBe('Alex');
    expect(profile.primary).toBeTruthy();
    expect(profile.secondary).toBeTruthy();
    expect(Object.keys(profile.skills)).toHaveLength(8);
    expect(Object.keys(profile.traits)).toHaveLength(5);
    expect(Object.keys(profile.preferenceScores)).toHaveLength(6);
    expect(profile.analysis.preference.top).toBeTruthy();
    expect(profile.analysis.preference.second).toBeTruthy();
    expect(profile.analysis.strengths).toHaveLength(3);
    expect(profile.analysis.development).toHaveLength(3);
    expect(profile.analysis.plan).toHaveLength(4);
    expect(profile.analysis.readings.length).toBeGreaterThanOrEqual(3);
    expect(profile).not.toHaveProperty('progress');
  });

  it('distinguishes stronger and weaker situational judgment patterns', () => {
    const strongest = { ...neutralAnswers };
    const weakest = { ...neutralAnswers };
    situationQuestions.forEach((question) => {
      const ranked = question.options
        .map((option) => ({ option, total: Object.values(option.scores).reduce((sum, score) => sum + score, 0) }))
        .sort((a, b) => b.total - a.total);
      strongest[question.id] = ranked[0].option.id;
      weakest[question.id] = ranked.at(-1).option.id;
    });
    expect(averageSkill(calculateProfile(strongest))).toBeGreaterThan(averageSkill(calculateProfile(weakest)));
  });

  it('scores low-pole items in the intended direction', () => {
    const aligned = { ...neutralAnswers };
    const acquiescent = { ...neutralAnswers };
    [...personalityQuestions, ...skillQuestions].forEach((question) => {
      aligned[question.id] = question.reverse ? 1 : 5;
      acquiescent[question.id] = 5;
    });
    const alignedProfile = calculateProfile(aligned);
    const acquiescentProfile = calculateProfile(acquiescent);
    expect(averageSkill(alignedProfile)).toBeGreaterThan(averageSkill(acquiescentProfile));
  });

  it('separates preferred orientation from managerial skill scores', () => {
    const driverAnswers = { ...neutralAnswers };
    preferenceQuestions.forEach((question) => {
      const driver = question.options.find((option) => option.preference === 'driver');
      if (!driver) return;
      const least = question.options.find((option) => option.id !== driver.id);
      driverAnswers[question.id] = { most: driver.id, least: least.id };
    });
    const neutralProfile = calculateProfile(neutralAnswers);
    const driverProfile = calculateProfile(driverAnswers);
    expect(driverProfile.preferenceScores.driver).toBeGreaterThan(neutralProfile.preferenceScores.driver);
    expect(driverProfile.skills).toEqual(neutralProfile.skills);
  });

  it('keeps every score finite and bounded across varied answer patterns', () => {
    for (let run = 0; run < 100; run += 1) {
      const answers = Object.fromEntries(allQuestions.map((question) => [
        question.id,
        question.section === 'situations'
          ? question.options[Math.floor(Math.random() * question.options.length)].id
          : question.section === 'preferences'
            ? (() => {
              const options = [...question.options].sort(() => Math.random() - 0.5);
              return { most: options[0].id, least: options[1].id };
            })()
          : 1 + Math.floor(Math.random() * 5),
      ]));
      const profile = calculateProfile(answers);
      Object.values(profile.skills).forEach((score) => {
        expect(Number.isFinite(score)).toBe(true);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      });
      Object.values(profile.stats).forEach((stat) => {
        expect(stat).toBeGreaterThanOrEqual(8);
        expect(stat).toBeLessThanOrEqual(20);
      });
      expect(profile.primary).not.toBe(profile.secondary);
      expect(Object.values(profile.preferenceScores).reduce((sum, score) => sum + score, 0)).toBe(300);
      expect(Number.isFinite(profile.analysis.alignment.gap)).toBe(true);
    }
  });
});

describe('standalone outputs', () => {
  it('builds a detailed downloadable analysis', () => {
    const profile = calculateProfile(neutralAnswers, { name: 'Alex', role: 'Vedoucí depa' });
    const html = buildAnalysisHtml(profile);
    expect(html).toContain('Manažerská analýza');
    expect(html).toContain('Alex');
    expect(html).toContain('Pravděpodobné silné stránky');
    expect(html).toContain('Manažerský kompas');
    expect(html).toContain('Literatura a zdroje');
    expect(html).toContain('uložit jako PDF');
  });

  it('builds an unsent Outlook draft with both attachments', () => {
    const profile = calculateProfile(neutralAnswers, { name: 'Alex' });
    const eml = buildOutlookEml(profile, 'data:image/png;base64,iVBORw0KGgo=');
    expect(eml).toContain('X-Unsent: 1');
    expect(eml).toContain('To: sjares@dpd.cz');
    expect(eml).toContain('Content-Type: image/png');
    expect(eml).toContain('Content-Type: text/html');
    expect(eml).toContain('Content-Disposition: attachment');
  });
});
