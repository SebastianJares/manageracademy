import { useEffect, useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import ArchetypeArt from './components/ArchetypeArt';
import {
  ARCHETYPES,
  SECTIONS,
  SKILLS,
  TRAITS,
  allQuestions,
  questionsBySection,
} from './data/questions';
import { calculateProfile } from './lib/scoring';
import { clearState, exportState, loadState, saveState } from './lib/storage';

const LogoMark = () => (
  <div className="logo-mark" aria-label="Manažerská akademie">
    <span className="logo-line logo-line-left" />
    <span className="logo-core" />
    <span className="logo-line logo-line-right" />
  </div>
);

const Ambient = () => (
  <div className="ambient" aria-hidden="true">
    <div className="ambient-orb ambient-orb-a" />
    <div className="ambient-orb ambient-orb-b" />
    <div className="ambient-grid" />
    <div className="ambient-noise" />
  </div>
);

function Landing({ onStart }) {
  return (
    <main className="landing">
      <Ambient />
      <button className="launch-button" onClick={onStart} type="button">
        <span className="launch-orbit launch-orbit-a" />
        <span className="launch-orbit launch-orbit-b" />
        <span className="launch-inner">
          <span>Spustit</span>
          <ArrowRight size={20} aria-hidden="true" />
        </span>
      </button>
    </main>
  );
}

function Setup({ identity, onChange, onContinue, hasDraft }) {
  const [accepted, setAccepted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (accepted && identity.name.trim()) onContinue();
  };

  return (
    <main className="shell setup-shell">
      <Ambient />
      <header className="topbar">
        <LogoMark />
        <span className="topbar-label">Manažerský profil</span>
      </header>
      <section className="setup-layout enter-up">
        <div className="setup-copy">
          <span className="eyebrow"><Sparkles size={16} /> Výchozí bod akademie</span>
          <h1>Vytvořte si svůj<br /><em>manažerský profil.</em></h1>
          <p>
            Tři krátké části propojí vaše pracovní tendence, každodenní dovednosti
            a rozhodování v konkrétních situacích.
          </p>
          <div className="chapter-preview">
            {SECTIONS.map((section) => (
              <div className="chapter-preview-item" key={section.id}>
                <span>{section.number}</span>
                <div><strong>{section.title}</strong><small>{section.estimate}</small></div>
              </div>
            ))}
          </div>
        </div>

        <form className="setup-card glass-panel" onSubmit={submit}>
          <div className="setup-card-heading">
            <span className="step-glyph">01</span>
            <div>
              <h2>Nejdřív vaše jméno</h2>
              <p>Objeví se pouze na výsledné kartě.</p>
            </div>
          </div>
          <label className="field">
            <span>Jméno nebo přezdívka</span>
            <input
              autoFocus
              maxLength={30}
              onChange={(event) => onChange({ ...identity, name: event.target.value })}
              placeholder="Např. Alex"
              value={identity.name}
            />
          </label>
          <label className="field">
            <span>Současná role <small>volitelné</small></span>
            <input
              maxLength={45}
              onChange={(event) => onChange({ ...identity, role: event.target.value })}
              placeholder="Např. vedoucí depa"
              value={identity.role}
            />
          </label>
          <label className="consent-row">
            <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
            <span className="custom-check"><Check size={14} /></span>
            <span>
              Rozumím, že jde o nástroj sebereflexe, ne psychologickou diagnózu
              ani podklad pro personální rozhodnutí.
            </span>
          </label>
          <div className="privacy-note">
            <LockKeyhole size={16} />
            <span>Odpovědi zůstávají jen v tomto prohlížeči.</span>
          </div>
          <button className="primary-button" disabled={!accepted || !identity.name.trim()} type="submit">
            {hasDraft ? 'Pokračovat v profilu' : 'Vstoupit do profilu'} <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

function SectionIntro({ section, index, answered, total, onBack, onStart }) {
  return (
    <main className="shell section-shell">
      <Ambient />
      <header className="topbar">
        <LogoMark />
        <span className="topbar-label">Část {index + 1} z {SECTIONS.length}</span>
        <span className="topbar-progress">{answered}/{total}</span>
      </header>
      <section className="section-intro enter-up">
        <div className="section-roman">{section.number}</div>
        <span className="eyebrow">Další kapitola</span>
        <h1>{section.title}</h1>
        <p>{section.description}</p>
        <div className="instruction glass-panel">
          <Info size={19} />
          <span>{section.instruction}</span>
        </div>
        <div className="section-actions">
          {index > 0 && (
            <button className="ghost-button" type="button" onClick={onBack}>
              <ArrowLeft size={18} /> Zpět
            </button>
          )}
          <button className="primary-button compact" type="button" onClick={onStart}>
            Začít · {section.estimate} <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

function Quiz({ question, section, sectionIndex, questionIndex, sectionTotal, answeredValue, overallProgress, onAnswer, onBack }) {
  const isSituation = question.section === 'situations';

  useEffect(() => {
    const handler = (event) => {
      if (!/^[1-5]$/.test(event.key)) return;
      const position = Number(event.key) - 1;
      const options = isSituation ? question.options : question.scale;
      if (options[position]) onAnswer(isSituation ? options[position].id : options[position].value);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isSituation, onAnswer, question]);

  return (
    <main className="shell quiz-shell">
      <Ambient />
      <header className="topbar quiz-topbar">
        <LogoMark />
        <div className="progress-wrap">
          <div className="progress-meta">
            <span>{section.title}</span>
            <span>{Math.round(overallProgress)} %</span>
          </div>
          <div className="progress-track"><span style={{ width: `${overallProgress}%` }} /></div>
        </div>
      </header>

      <section className={`question-card enter-up ${isSituation ? 'situation-card' : ''}`}>
        <div className="question-meta">
          <button className="icon-button" type="button" onClick={onBack} aria-label="Předchozí otázka">
            <ArrowLeft size={19} />
          </button>
          <span>Otázka {questionIndex + 1} / {sectionTotal}</span>
          <span className="question-kind">{isSituation ? 'Situace' : sectionIndex === 0 ? 'Tendence' : 'Chování'}</span>
        </div>
        <h1>{question.text}</h1>
        {isSituation ? (
          <div className="situation-options">
            {question.options.map((option, index) => (
              <button
                className={`situation-option ${answeredValue === option.id ? 'selected' : ''}`}
                key={option.id}
                type="button"
                onClick={() => onAnswer(option.id)}
              >
                <span className="option-key">{String.fromCharCode(65 + index)}</span>
                <span>{option.text}</span>
                <ChevronRight className="option-arrow" size={18} />
              </button>
            ))}
          </div>
        ) : (
          <div className="likert-wrap">
            <div className="likert-scale">
              {question.scale.map((option) => (
                <button
                  aria-label={option.label}
                  className={`likert-option likert-${option.value} ${answeredValue === option.value ? 'selected' : ''}`}
                  key={option.value}
                  onClick={() => onAnswer(option.value)}
                  type="button"
                >
                  <span className="likert-dot"><span>{option.value}</span></span>
                  <small>{option.label}</small>
                </button>
              ))}
            </div>
            <p className="keyboard-hint">Můžete použít klávesy 1–5</p>
          </div>
        )}
      </section>
    </main>
  );
}

function StatBlock({ skillKey, score, stat, compact = false }) {
  const skill = SKILLS[skillKey];
  return (
    <div className={`stat-block ${compact ? 'compact' : ''}`}>
      <div className="stat-heading">
        <span>{skill.cardLabel}</span>
        <strong>{compact ? stat : `${score} %`}</strong>
      </div>
      {!compact && <div className="skill-track"><span style={{ width: `${score}%` }} /></div>}
    </div>
  );
}

function ManagerCard({ profile, cardRef }) {
  const primary = ARCHETYPES[profile.primary];
  const secondary = ARCHETYPES[profile.secondary];

  return (
    <article className="manager-card" ref={cardRef} style={{ '--role-color': primary.color }}>
      <div className="card-glow" />
      <header className="manager-card-header">
        <div>
          <span className="card-kicker">Manažerská akademie · profil</span>
          <h2>{profile.identity.name}</h2>
          <p>{profile.identity.role}</p>
        </div>
        <div className="level-seal">
          <span>LVL</span>
          <strong>{profile.progress.level}</strong>
        </div>
      </header>
      <div className="card-art-wrap">
        <ArchetypeArt type={profile.primary} />
        <div className="role-plaque">
          <span>Dominantní role</span>
          <strong>{primary.label}</strong>
          <small>+ {secondary.label}</small>
        </div>
      </div>
      <p className="card-motto">„{primary.motto}“</p>
      <div className="card-stats">
        {Object.entries(profile.stats).map(([key, stat]) => (
          <StatBlock key={key} skillKey={key} stat={stat} compact />
        ))}
      </div>
      <div className="card-lower">
        <div>
          <span>Hlavní přednosti</span>
          <strong>{profile.strengths.slice(0, 2).map((item) => item.label).join(' · ')}</strong>
        </div>
        <div>
          <span>Aktuální výzva</span>
          <strong>{profile.quest.label}</strong>
        </div>
      </div>
      <footer className="manager-card-footer">
        <ShieldCheck size={15} /> Sebereflexní profil · {new Date(profile.createdAt).toLocaleDateString('cs-CZ')}
      </footer>
    </article>
  );
}

function Results({ profile, attempts, onNewAssessment, onReset, onExport }) {
  const [tab, setTab] = useState('card');
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef(null);
  const primary = ARCHETYPES[profile.primary];
  const secondary = ARCHETYPES[profile.secondary];
  const previous = attempts.length > 1 ? attempts.at(-2) : null;

  const downloadCard = async () => {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });
      const link = document.createElement('a');
      link.download = `karta-${profile.identity.name.toLowerCase().replace(/[^a-z0-9á-ž]+/gi, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="shell results-shell">
      <Ambient />
      <header className="topbar">
        <LogoMark />
        <span className="topbar-label">Profil dokončen</span>
        <span className="quality-pill"><span /> Spolehlivost {profile.responseQuality.label}</span>
      </header>

      <section className="result-hero enter-up">
        <span className="eyebrow"><Sparkles size={16} /> Váš současný profil</span>
        <h1>{profile.title}</h1>
        <p>
          Vaše nejsilnější role je <strong style={{ color: primary.color }}>{primary.label}</strong> – {primary.subtitle.toLowerCase()}.
          Doplňuje ji role <strong>{secondary.label}</strong>. Není to pevná škatulka, ale dnešní mapa vašich preferencí a dovedností.
        </p>
      </section>

      <nav className="result-tabs" aria-label="Části výsledku">
        {[
          ['card', 'Karta postavy'],
          ['analysis', 'Detailní rozbor'],
          ['growth', 'Levelování'],
        ].map(([key, label]) => (
          <button className={tab === key ? 'active' : ''} key={key} onClick={() => setTab(key)} type="button">
            {label}
          </button>
        ))}
      </nav>

      {tab === 'card' && (
        <section className="card-result-grid enter-up">
          <ManagerCard profile={profile} cardRef={cardRef} />
          <aside className="result-aside">
            <div className="glass-panel role-explanation">
              <span className="aside-kicker">Co tato role znamená</span>
              <h2>{primary.label}</h2>
              <p>{primary.subtitle}. Vaše skóre této role vzniká hlavně z pozorovatelných dovedností, osobnostní tendence mají pouze menší doplňkovou váhu.</p>
              <div className="role-duo">
                <ArchetypeArt type={profile.primary} />
                <div className="role-plus">+</div>
                <ArchetypeArt type={profile.secondary} />
              </div>
              <div className="role-duo-labels"><span>{primary.label}</span><span>{secondary.label}</span></div>
            </div>
            <button className="primary-button" type="button" onClick={downloadCard} disabled={downloading}>
              <Download size={18} /> {downloading ? 'Připravuji kartu…' : 'Stáhnout kartu jako PNG'}
            </button>
          </aside>
        </section>
      )}

      {tab === 'analysis' && (
        <section className="analysis-grid enter-up">
          <div className="glass-panel analysis-panel skills-panel">
            <span className="aside-kicker">8 sledovaných dovedností</span>
            <h2>Vaše manažerská mapa</h2>
            <div className="skill-list">
              {Object.entries(profile.skills)
                .sort(([, a], [, b]) => b - a)
                .map(([key, score]) => <StatBlock key={key} skillKey={key} score={score} stat={profile.stats[key]} />)}
            </div>
          </div>
          <div className="analysis-stack">
            <div className="glass-panel analysis-panel">
              <span className="aside-kicker">Pracovní tendence</span>
              <h2>Osobnostní kompas</h2>
              <div className="trait-list">
                {Object.entries(profile.traits).map(([key, score]) => (
                  <div className="trait-row" key={key}>
                    <div><span>{TRAITS[key].short}</span><strong>{score}</strong></div>
                    <div className="trait-axis"><span style={{ left: `${score}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="trait-notes">
                {profile.traitSummary.map((item) => <p key={item.key}><strong>{item.label}:</strong> {item.text}</p>)}
              </div>
            </div>
            <div className="glass-panel analysis-panel strengths-panel">
              <span className="aside-kicker">Kde stavět a kde trénovat</span>
              <div className="two-column-insight">
                <div>
                  <h3>Vaše opory</h3>
                  {profile.strengths.map((item) => <p key={item.key}><Check size={15} /> {item.label}</p>)}
                </div>
                <div>
                  <h3>Rozvojový prostor</h3>
                  {profile.growthAreas.map((item) => <p key={item.key}><TrendingUp size={15} /> {item.label}</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {tab === 'growth' && (
        <section className="growth-grid enter-up">
          <div className="glass-panel quest-card">
            <span className="quest-label">Aktivní výprava</span>
            <h2>Posilte dovednost<br /><em>{profile.quest.label}</em></h2>
            <p>{profile.quest.quest}</p>
            <div className="quest-reward"><Sparkles size={18} /> Odměna po dalším měření: XP za prokazatelný posun</div>
          </div>
          <div className="glass-panel level-panel">
            <div className="level-big"><span>Úroveň</span><strong>{profile.progress.level}</strong></div>
            <div className="xp-meta"><span>{profile.progress.xp % 100} / 100 XP</span><span>další úroveň</span></div>
            <div className="xp-track"><span style={{ width: `${profile.progress.xp % 100}%` }} /></div>
            {previous ? (
              <div className="delta-list">
                <h3>Změna od minulého měření</h3>
                {Object.entries(profile.progress.deltas)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <div key={key}><span>{SKILLS[key].label}</span><strong className={value >= 0 ? 'positive' : 'negative'}>{value > 0 ? '+' : ''}{value}</strong></div>
                  ))}
              </div>
            ) : (
              <p className="baseline-note">Toto je vaše výchozí měření. Skutečné levelování se zobrazí po dalším průchodu akademií.</p>
            )}
          </div>
          <div className="glass-panel validity-panel">
            <ShieldCheck size={22} />
            <div>
              <h3>Číst jako mapu, ne jako verdikt</h3>
              <p>{profile.responseQuality.note} Sebehodnocení může ovlivnit nálada i potřeba vypadat dobře. Největší hodnotu získá porovnáním s konkrétní zpětnou vazbou a opakováním v čase.</p>
            </div>
          </div>
        </section>
      )}

      <footer className="result-footer">
        <button className="ghost-button" type="button" onClick={onNewAssessment}><RotateCcw size={17} /> Nové měření</button>
        <button className="text-button" type="button" onClick={onExport}>Exportovat data</button>
        <button className="text-button danger" type="button" onClick={onReset}>Smazat profil</button>
      </footer>
    </main>
  );
}

export default function App() {
  const initial = useMemo(loadState, []);
  const [screen, setScreen] = useState('landing');
  const [identity, setIdentity] = useState(initial.identity);
  const [answers, setAnswers] = useState(initial.answers);
  const [attempts, setAttempts] = useState(initial.attempts);
  const [sectionIndex, setSectionIndex] = useState(initial.currentSection ?? 0);
  const [questionIndex, setQuestionIndex] = useState(initial.currentQuestion ?? 0);
  const advancing = useRef(false);

  const section = SECTIONS[sectionIndex];
  const questions = questionsBySection[section?.id] ?? [];
  const question = questions[questionIndex];
  const answeredCount = Object.keys(answers).filter((key) => answers[key] != null).length;
  const latestProfile = attempts.at(-1);

  useEffect(() => {
    saveState({ identity, answers, attempts, currentSection: sectionIndex, currentQuestion: questionIndex });
  }, [identity, answers, attempts, sectionIndex, questionIndex]);

  const start = () => {
    if (latestProfile) setScreen('results');
    else setScreen('setup');
  };

  const continueFromSetup = () => setScreen('section');

  const goBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex((index) => index - 1);
      return;
    }
    if (sectionIndex > 0) {
      const previousIndex = sectionIndex - 1;
      setSectionIndex(previousIndex);
      setQuestionIndex(questionsBySection[SECTIONS[previousIndex].id].length - 1);
    } else {
      setScreen('setup');
    }
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((index) => index + 1);
      return;
    }
    if (sectionIndex < SECTIONS.length - 1) {
      setSectionIndex((index) => index + 1);
      setQuestionIndex(0);
      setScreen('section');
      return;
    }

    const profile = calculateProfile(answers, identity, attempts);
    setAttempts((history) => [...history, profile]);
    setScreen('results');
  };

  const answerQuestion = (value) => {
    if (advancing.current) return;
    advancing.current = true;
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);
    window.setTimeout(() => {
      if (questionIndex === questions.length - 1 && sectionIndex === SECTIONS.length - 1) {
        const profile = calculateProfile(nextAnswers, identity, attempts);
        setAttempts((history) => [...history, profile]);
        setScreen('results');
      } else {
        nextQuestion();
      }
      advancing.current = false;
    }, 210);
  };

  const newAssessment = () => {
    setAnswers({});
    setSectionIndex(0);
    setQuestionIndex(0);
    setScreen('section');
  };

  const reset = () => {
    if (!window.confirm('Opravdu smazat profil, výsledky i průběh? Tuto akci nelze vrátit.')) return;
    clearState();
    setIdentity({ name: '', role: '' });
    setAnswers({});
    setAttempts([]);
    setSectionIndex(0);
    setQuestionIndex(0);
    setScreen('landing');
  };

  if (screen === 'landing') return <Landing onStart={start} />;
  if (screen === 'setup') return (
    <Setup
      identity={identity}
      onChange={setIdentity}
      onContinue={continueFromSetup}
      hasDraft={answeredCount > 0}
    />
  );
  if (screen === 'section') return (
    <SectionIntro
      section={section}
      index={sectionIndex}
      answered={answeredCount}
      total={allQuestions.length}
      onBack={() => sectionIndex > 0 ? setSectionIndex((index) => index - 1) : setScreen('setup')}
      onStart={() => setScreen('quiz')}
    />
  );
  if (screen === 'quiz' && question) return (
    <Quiz
      key={question.id}
      question={question}
      section={section}
      sectionIndex={sectionIndex}
      questionIndex={questionIndex}
      sectionTotal={questions.length}
      answeredValue={answers[question.id]}
      overallProgress={(answeredCount / allQuestions.length) * 100}
      onAnswer={answerQuestion}
      onBack={goBack}
    />
  );
  if (screen === 'results' && latestProfile) return (
    <Results
      profile={latestProfile}
      attempts={attempts}
      onNewAssessment={newAssessment}
      onReset={reset}
      onExport={() => exportState({ identity, attempts })}
    />
  );

  return <Landing onStart={() => setScreen('setup')} />;
}
