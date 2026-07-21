import { describe, expect, it } from 'vitest';
import { allQuestions, situationQuestions } from '../data/questions';
import { calculateProfile, scoreToStat } from '../lib/scoring';

const neutralAnswers = Object.fromEntries(allQuestions.map((question) => [
  question.id,
  question.section === 'situations' ? question.options[0].id : 3,
]));

describe('manager profile scoring', () => {
  it('contains the intended 60 items across three sections', () => {
    expect(allQuestions).toHaveLength(60);
    expect(situationQuestions).toHaveLength(8);
  });

  it('keeps D&D-style stats between 8 and 20', () => {
    expect(scoreToStat(0)).toBe(8);
    expect(scoreToStat(100)).toBe(20);
    expect(scoreToStat(50)).toBe(14);
  });

  it('creates a complete profile from all answers', () => {
    const profile = calculateProfile(neutralAnswers, { name: 'Alex', role: 'Vedoucí' });
    expect(profile.identity.name).toBe('Alex');
    expect(profile.primary).toBeTruthy();
    expect(profile.secondary).toBeTruthy();
    expect(Object.keys(profile.skills)).toHaveLength(8);
    expect(Object.keys(profile.traits)).toHaveLength(5);
    expect(profile.progress.level).toBe(1);
  });

  it('rewards the strongest situational options', () => {
    const strongAnswers = { ...neutralAnswers };
    situationQuestions.forEach((question) => {
      strongAnswers[question.id] = question.options
        .map((option) => ({ option, sum: Object.values(option.scores).reduce((a, b) => a + b, 0) }))
        .sort((a, b) => b.sum - a.sum)[0].option.id;
    });
    const neutral = calculateProfile(neutralAnswers);
    const strong = calculateProfile(strongAnswers);
    const neutralAverage = Object.values(neutral.skills).reduce((a, b) => a + b, 0) / 8;
    const strongAverage = Object.values(strong.skills).reduce((a, b) => a + b, 0) / 8;
    expect(strongAverage).toBeGreaterThan(neutralAverage);
  });

  it('adds XP only on later attempts', () => {
    const first = calculateProfile(neutralAnswers);
    const second = calculateProfile(neutralAnswers, {}, [first]);
    expect(first.progress.xp).toBe(0);
    expect(second.progress.xp).toBeGreaterThan(0);
  });

  it('keeps every score finite and bounded across varied answer patterns', () => {
    for (let run = 0; run < 100; run += 1) {
      const answers = Object.fromEntries(allQuestions.map((question) => [
        question.id,
        question.section === 'situations'
          ? question.options[Math.floor(Math.random() * question.options.length)].id
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
    }
  });
});
