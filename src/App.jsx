import { useEffect, useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Download,
  FileText,
  Info,
  LockKeyhole,
  Mail,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
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
import { calculateProfile, scoreBand } from './lib/scoring';
import { downloadAnalysis, downloadOutlookDraft } from './lib/reports';
import { orderSituationOptions } from './lib/optionOrder';
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
  const displayedOptions = useMemo(() => (
    isSituation
      ? orderSituationOptions(question)
      : question.scale
  ), [isSituation, question]);

  useEffect(() => {
    const handler = (event) => {
      if (!/^[1-5]$/.test(event.key)) return;
      const position = Number(event.key) - 1;
      const options = displayedOptions;
      if (options[position]) onAnswer(isSituation ? options[position].id : options[position].value);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [displayedOptions, isSituation, onAnswer]);

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
            {displayedOptions.map((option, index) => (
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
              {displayedOptions.map((option) => (
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
        <div className="profile-seal">
          <span>ROLE</span>
          <strong>{primary.label}</strong>
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
          <span>Priorita rozvoje</span>
          <strong>{profile.analysis.priority.label}</strong>
        </div>
      </div>
      <footer className="manager-card-footer">
        <ShieldCheck size={15} /> Sebereflexní profil · {new Date(profile.createdAt).toLocaleDateString('cs-CZ')}
      </footer>
    </article>
  );
}

function Results({ profile, onNewAssessment, onReset, onExport }) {
  const [tab, setTab] = useState('analysis');
  const [downloading, setDownloading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');
  const visibleCardRef = useRef(null);
  const emailCardRef = useRef(null);
  const primary = ARCHETYPES[profile.primary];
  const secondary = ARCHETYPES[profile.secondary];

  const captureCard = (node) => toPng(node, { pixelRatio: 2, cacheBust: true, backgroundColor: '#0b1124' });

  const downloadCard = async () => {
    const node = visibleCardRef.current ?? emailCardRef.current;
    if (!node) return;
    setDownloading(true);
    try {
      const dataUrl = await captureCard(node);
      const link = document.createElement('a');
      link.download = `karta-${profile.identity.name.toLowerCase().replace(/[^a-z0-9á-ž]+/gi, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  const prepareOutlook = async () => {
    if (!emailCardRef.current) return;
    setSending(true);
    setSendStatus('');
    try {
      const cardDataUrl = await captureCard(emailCardRef.current);
      downloadOutlookDraft(profile, cardDataUrl);
      setSendStatus('Koncept s oběma přílohami byl stažen. Otevřete soubor .eml v Outlooku a potvrďte Odeslat.');
    } catch {
      setSendStatus('Koncept se nepodařilo vytvořit. Stáhněte kartu a analýzu samostatně.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="shell results-shell">
      <Ambient />
      <div className="capture-card" aria-hidden="true"><ManagerCard profile={profile} cardRef={emailCardRef} /></div>
      <header className="topbar">
        <LogoMark />
        <span className="topbar-label">Profil dokončen</span>
        <span className="quality-pill"><span /> Kvalita odpovědí {profile.responseQuality.label}</span>
      </header>

      <section className="result-hero enter-up">
        <span className="eyebrow"><Sparkles size={16} /> Analytický manažerský profil</span>
        <h1>{profile.title}</h1>
        <p>{profile.analysis.summary} Nejde o pevnou škatulku, ale o pracovní hypotézu, kterou je vhodné ověřit na konkrétních situacích a zpětné vazbě lidí.</p>
      </section>

      <nav className="result-tabs" aria-label="Části výsledku">
        {[
          ['analysis', 'Detailní analýza'],
          ['card', 'Profilová karta'],
          ['plan', 'Rozvojový plán'],
        ].map(([key, label]) => (
          <button className={tab === key ? 'active' : ''} key={key} onClick={() => setTab(key)} type="button">
            {label}
          </button>
        ))}
      </nav>

      {tab === 'analysis' && (
        <section className="deep-analysis enter-up">
          <div className="analysis-toolbar">
            <div><span className="aside-kicker">Celý výstup</span><p>Samostatný dokument lze otevřít v prohlížeči a uložit jako PDF.</p></div>
            <button className="primary-button compact" type="button" onClick={() => downloadAnalysis(profile)}><FileText size={18} /> Stáhnout analýzu</button>
          </div>

          <div className="analysis-overview-grid">
            <article className="glass-panel analysis-panel role-profile-panel">
              <span className="aside-kicker">Pravděpodobný manažerský styl</span>
              <h2>{primary.label} <small>+ {secondary.label}</small></h2>
              <p>{profile.analysis.role.overview}</p>
              <div className="role-bullets">
                {profile.analysis.role.strengths.map((item) => <span key={item}><Check size={14} /> {item}</span>)}
              </div>
              <div className="pressure-note"><strong>Pod tlakem:</strong> {profile.analysis.role.underPressure}</div>
            </article>
            <article className="glass-panel analysis-panel evidence-panel">
              <span className="aside-kicker">Jak pevně výsledek číst</span>
              <h2>{profile.analysis.alignment.label}</h2>
              <p>{profile.analysis.alignment.note}</p>
              <div className="evidence-metric"><span>Průměrný rozdíl sebehodnocení a situací</span><strong>{profile.analysis.alignment.gap} bodů</strong></div>
              <div className="evidence-metric"><span>Kvalita způsobu vyplnění</span><strong>{profile.responseQuality.label}</strong></div>
              <small>{profile.responseQuality.note}</small>
            </article>
          </div>

          <div className="analysis-grid refined-analysis-grid">
            <div className="glass-panel analysis-panel skills-panel">
              <span className="aside-kicker">8 sledovaných dovedností</span>
              <h2>Manažerská mapa</h2>
              <p className="panel-lead">Index kombinuje četnost chování (65 %) a úsudek v situacích (35 %). Není to percentil vůči populaci.</p>
              <div className="skill-list">
                {Object.entries(profile.skills)
                  .sort(([, a], [, b]) => b - a)
                  .map(([key, score]) => (
                    <div key={key} className="skill-with-band">
                      <StatBlock skillKey={key} score={score} stat={profile.stats[key]} />
                      <small>{scoreBand(score)} · vlastní {profile.selfReportedSkills[key]} / situace {profile.situationalSkills[key]}</small>
                    </div>
                  ))}
              </div>
            </div>
            <div className="glass-panel analysis-panel">
              <span className="aside-kicker">Pracovní tendence</span>
              <h2>Osobnostní kontext</h2>
              <p className="panel-lead">Žádný pól není automaticky lepší. Každý přináší výhodu i riziko podle situace.</p>
              <div className="trait-list">
                {Object.entries(profile.traits).map(([key, score]) => (
                  <div className="trait-row trait-row-labeled" key={key}>
                    <div><span>{TRAITS[key].short}</span><strong>{score}</strong></div>
                    <div className="trait-axis"><span style={{ left: `${score}%` }} /></div>
                    <div className="trait-poles"><small>{TRAITS[key].lowPole}</small><small>{TRAITS[key].highPole}</small></div>
                  </div>
                ))}
              </div>
              <div className="trait-notes">
                {profile.traitSummary.map((item) => <p key={item.key}><strong>{item.label}:</strong> {item.text}</p>)}
              </div>
            </div>
          </div>

          <section className="insight-section">
            <div className="section-heading"><span className="aside-kicker">O co se můžete opřít</span><h2>Pravděpodobné silné stránky</h2><p>U každé opory sledujte také její stín – silná stránka použitá příliš často nebo ve špatné situaci se může obrátit proti výsledku.</p></div>
            <div className="insight-card-grid">
              {profile.analysis.strengths.map((item) => (
                <article className="glass-panel insight-card strength-detail" key={item.key}>
                  <header><span>{item.score}</span><div><h3>{item.label}</h3><small>{scoreBand(item.score)}</small></div></header>
                  <p>{item.why}</p>
                  <div className="evidence-copy"><ShieldCheck size={16} /><span>{item.evidence}</span></div>
                  <div className="shadow-copy"><strong>Stín silné stránky</strong><span>{item.watchout}</span></div>
                </article>
              ))}
            </div>
          </section>

          <section className="insight-section">
            <div className="section-heading"><span className="aside-kicker">Kde je největší páka</span><h2>Pravděpodobná rozvojová místa</h2><p>Nižší skóre není verdikt. Může znamenat méně časté chování, situační nejistotu nebo příliš přísné sebehodnocení.</p></div>
            <div className="insight-card-grid">
              {profile.analysis.development.map((item, index) => (
                <article className={`glass-panel insight-card development-detail ${index === 0 ? 'priority' : ''}`} key={item.key}>
                  <header><span>{item.score}</span><div><h3>{item.label}</h3><small>{index === 0 ? 'doporučený začátek' : scoreBand(item.score)}</small></div></header>
                  <p>{item.why}</p>
                  <div className="evidence-copy"><ShieldCheck size={16} /><span>{item.evidence}</span></div>
                  <div className="first-step-copy"><Target size={17} /><span><strong>První krok:</strong> {item.firstStep}</span></div>
                </article>
              ))}
            </div>
          </section>

          <section className="insight-section">
            <div className="section-heading"><span className="aside-kicker">Kombinace výsledků</span><h2>Vzorce, které stojí za ověření</h2><p>Jde o hypotézy vytvořené z více částí profilu. Hledejte pro ně konkrétní příklady i protipříklady.</p></div>
            <div className="pattern-grid">
              {profile.analysis.patterns.length ? profile.analysis.patterns.map((pattern) => (
                <article className="glass-panel pattern-card" key={pattern.title}>
                  <h3>{pattern.title}</h3><p>{pattern.text}</p><div><Target size={16} /><span>{pattern.action}</span></div>
                </article>
              )) : <article className="glass-panel pattern-card"><h3>Bez výrazného varovného vzorce</h3><p>Největší hodnotu přinese práce s první rozvojovou prioritou a ověření výsledku zpětnou vazbou.</p></article>}
            </div>
          </section>

          <div className="glass-panel validity-panel analysis-validity">
            <ShieldCheck size={22} />
            <div><h3>Číst jako hypotézu, ne jako diagnózu</h3><p>Tento český nástroj zatím nemá populační normy ani pilotní data pro výpočet psychometrické reliability. Nesmí sloužit k výběru nebo hodnocení lidí. Pro hlubší obraz porovnejte výsledek s konkrétními situacemi, koučovacím rozhovorem a 180°/360° zpětnou vazbou.</p></div>
          </div>
        </section>
      )}

      {tab === 'card' && (
        <section className="card-result-grid enter-up">
          <ManagerCard profile={profile} cardRef={visibleCardRef} />
          <aside className="result-aside">
            <div className="glass-panel role-explanation">
              <span className="aside-kicker">Co tato role znamená</span>
              <h2>{primary.label}</h2>
              <p>{profile.analysis.role.overview}</p>
              <div className="role-duo"><ArchetypeArt type={profile.primary} /><div className="role-plus">+</div><ArchetypeArt type={profile.secondary} /></div>
              <div className="role-duo-labels"><span>{primary.label}</span><span>{secondary.label}</span></div>
            </div>
            <button className="primary-button" type="button" onClick={downloadCard} disabled={downloading}><Download size={18} /> {downloading ? 'Připravuji kartu…' : 'Stáhnout kartu jako PNG'}</button>
          </aside>
        </section>
      )}

      {tab === 'plan' && (
        <section className="development-plan enter-up">
          <div className="glass-panel plan-hero">
            <span className="quest-label">Doporučený začátek</span>
            <h2>{profile.analysis.priority.label}</h2>
            <p>{profile.analysis.priority.why}</p>
            <div className="first-action"><Target size={20} /><span>{profile.analysis.priority.firstStep}</span></div>
          </div>
          <div className="week-grid">
            {profile.analysis.plan.map((step, index) => (
              <article className="glass-panel week-card" key={step}><span>0{index + 1}</span><div><small>Týden {index + 1}</small><p>{step.replace(/^Týden \d+:\s*/, '')}</p></div></article>
            ))}
          </div>
          <section className="reading-section">
            <div className="section-heading"><span className="aside-kicker">Co studovat</span><h2>Literatura pro váš profil</h2><p>Začněte prvními dvěma zdroji; jsou přímo navázané na hlavní rozvojovou prioritu.</p></div>
            <div className="reading-grid">
              {profile.analysis.readings.map((item, index) => (
                <a className="glass-panel reading-card" href={item.url} key={item.title} target="_blank" rel="noreferrer">
                  <BookOpen size={20} /><div><small>{index < 2 ? 'Začněte zde · ' : ''}{item.type}</small><h3>{item.title}</h3><strong>{item.author}</strong><p>{item.why}</p></div><ArrowRight size={18} />
                </a>
              ))}
            </div>
          </section>
          <button className="primary-button analysis-download-bottom" type="button" onClick={() => downloadAnalysis(profile)}><Download size={18} /> Stáhnout kompletní analýzu</button>
        </section>
      )}

      <footer className="result-footer enhanced-footer">
        <button className="ghost-button" type="button" onClick={onNewAssessment}><RotateCcw size={17} /> Vyplnit znovu</button>
        <div className="footer-secondary-actions">
          <button className="text-button" type="button" onClick={onExport}>Exportovat data</button>
          <details className="send-menu">
            <summary>Další možnosti</summary>
            <div className="send-popover">
              <button type="button" onClick={prepareOutlook} disabled={sending}><Mail size={17} /> {sending ? 'Připravuji…' : 'Odeslat výsledek'}</button>
              <small>Vytvoří koncept pro Outlook adresovaný na sjares@dpd.cz s kartou PNG a analýzou v příloze. Odeslání vždy potvrdí uživatel.</small>
              {sendStatus && <p>{sendStatus}</p>}
            </div>
          </details>
          <button className="text-button danger" type="button" onClick={onReset}>Smazat profil</button>
        </div>
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

    const profile = calculateProfile(answers, identity);
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
        const profile = calculateProfile(nextAnswers, identity);
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
      onNewAssessment={newAssessment}
      onReset={reset}
      onExport={() => exportState({ identity, attempts })}
    />
  );

  return <Landing onStart={() => setScreen('setup')} />;
}
