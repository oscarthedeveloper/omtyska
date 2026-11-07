'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  KASUS_DRILL_ITEMS,
  KASUS_CATEGORIES,
  KASUS_CATEGORY_DEFINITIONS,
  type KasusDrillItem,
  type KasusDrillTarget,
  type KasusCategoryKey,
  type KasusCase,
} from '@/data/kasus-drill';
import { gradeGermanAnswer, type GradingResult } from '@/lib/answering-policy';
import { scheduleRepetition } from '@/lib/storage';
import styles from './page.module.css';

interface TargetFeedback {
  formResult: GradingResult;
  caseCorrect: boolean | null;
  isTargetCorrect: boolean;
  target: KasusDrillTarget;
}

interface ExerciseFeedback {
  targetResults: Record<string, TargetFeedback>;
  isFullyCorrect: boolean;
}

export default function KasusdrillenPage() {
  const [selectedCategory, setSelectedCategory] = useState<'alla' | KasusCategoryKey>('alla');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [userCases, setUserCases] = useState<Record<string, KasusCase | null>>({});
  const [feedback, setFeedback] = useState<ExerciseFeedback | null>(null);
  const [score, setScore] = useState(0);
  const [scoredItemIds, setScoredItemIds] = useState<Set<string>>(new Set());

  // Filter items by selected category
  const filteredItems = useMemo(() => {
    let items = selectedCategory === 'alla'
      ? [...KASUS_DRILL_ITEMS]
      : KASUS_DRILL_ITEMS.filter(item => item.category === selectedCategory);

    if (isShuffled) {
      // Deterministic but shuffled copy
      items = [...items].sort((a, b) => {
        const hashA = (a.id.charCodeAt(3) || 0) * 31 + a.id.length;
        const hashB = (b.id.charCodeAt(3) || 0) * 31 + b.id.length;
        return (hashA % 17) - (hashB % 17);
      });
    }

    return items;
  }, [selectedCategory, isShuffled]);

  const current: KasusDrillItem | undefined = filteredItems[currentIndex] || filteredItems[0];

  const handleCategoryChange = useCallback((catKey: 'alla' | KasusCategoryKey) => {
    setSelectedCategory(catKey);
    setCurrentIndex(0);
    setUserAnswers({});
    setUserCases({});
    setFeedback(null);
  }, []);

  const handleToggleShuffle = useCallback(() => {
    setIsShuffled(prev => !prev);
    setCurrentIndex(0);
    setUserAnswers({});
    setUserCases({});
    setFeedback(null);
  }, []);

  const handleAnswerChange = useCallback((targetId: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [targetId]: value }));
  }, []);

  const handleCaseChange = useCallback((targetId: string, caseVal: KasusCase | null) => {
    setUserCases(prev => ({ ...prev, [targetId]: caseVal }));
  }, []);

  // Validation: Check if user has provided all mandatory inputs
  const canCheck = useMemo(() => {
    if (!current || feedback !== null) return false;
    for (const target of current.targets) {
      const ans = userAnswers[target.id]?.trim();
      if (!ans) return false;
      if (target.requireCaseIdentification && !userCases[target.id]) {
        return false;
      }
    }
    return true;
  }, [current, userAnswers, userCases, feedback]);

  const handleCheck = useCallback(() => {
    if (!current || !canCheck) return;

    const targetResults: Record<string, TargetFeedback> = {};
    let allCorrect = true;

    for (const target of current.targets) {
      const userAns = userAnswers[target.id] || '';
      const chosenCase = userCases[target.id] || null;

      const formResult = gradeGermanAnswer(userAns, target.answer, {
        acceptableAlternatives: target.acceptedAlternatives,
      });

      let caseCorrect: boolean | null = null;
      if (chosenCase !== null) {
        caseCorrect = chosenCase === target.case;
      }

      let isTargetCorrect = formResult.isCorrect;
      if (target.requireCaseIdentification) {
        isTargetCorrect = isTargetCorrect && caseCorrect === true;
      } else if (caseCorrect !== null) {
        // If optional case was selected, evaluate it
        isTargetCorrect = isTargetCorrect && caseCorrect;
      }

      if (!isTargetCorrect) {
        allCorrect = false;
      }

      targetResults[target.id] = {
        formResult,
        caseCorrect,
        isTargetCorrect,
        target,
      };
    }

    // Award score only once per exercise item to prevent score exploitation
    if (allCorrect) {
      if (!scoredItemIds.has(current.id)) {
        setScore(s => s + 1);
        setScoredItemIds(prev => new Set(prev).add(current.id));
      }
    } else {
      // Schedule spaced repetition for incorrect exercise
      scheduleRepetition({
        id: `kasus:${current.id}`,
        sourceType: 'case',
        prompt: `${current.prompt} (${current.targets.map(t => t.cue).join(' | ')})`,
        targetAnswer: current.completedSentence,
        explanation: current.targets
          .map(
            t =>
              `[${t.id}] ${t.answer} (${t.case}, funktion: ${t.function}, regent: ${t.governor})`
          )
          .join('; '),
      });
    }

    setFeedback({
      targetResults,
      isFullyCorrect: allCorrect,
    });
  }, [current, canCheck, userAnswers, userCases, scoredItemIds]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredItems.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setCurrentIndex(0);
    }
    setUserAnswers({});
    setUserCases({});
    setFeedback(null);
  }, [currentIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setUserAnswers({});
      setUserCases({});
      setFeedback(null);
    }
  }, [currentIndex]);

  const handleRetry = useCallback(() => {
    setFeedback(null);
  }, []);

  if (!current) {
    return (
      <main className={styles.container}>
        <p>Inga övningar tillgängliga.</p>
      </main>
    );
  }

  // Render prompt sentence with visual gap badges
  const renderSentencePrompt = (prompt: string, targets: KasusDrillTarget[]) => {
    const parts = prompt.split(/(\{\{\d+\}\})/g);
    return (
      <div className={styles.promptSentence}>
        {parts.map((part, i) => {
          const match = part.match(/^\{\{(\d+)\}\}$/);
          if (match) {
            const targetId = match[1];
            const target = targets.find(t => t.id === targetId);
            const val = userAnswers[targetId];
            const targetFb = feedback?.targetResults?.[targetId];
            const statusClass = targetFb
              ? targetFb.isTargetCorrect
                ? styles.gapCorrect
                : styles.gapWrong
              : styles.gapPending;
            return (
              <span key={i} className={`${styles.inlineGap} ${statusClass}`}>
                <span className={styles.gapBadge}>[{targetId}]</span>
                <span className={styles.gapText}>
                  {feedback && !targetFb?.isTargetCorrect ? (
                    <span>
                      <del style={{ marginRight: 4, opacity: 0.6 }}>{val || '___'}</del>
                      <ins style={{ textDecoration: 'none', fontWeight: 700 }}>{target?.answer}</ins>
                    </span>
                  ) : (
                    val || '______'
                  )}
                </span>
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </div>
    );
  };

  const currentCategoryMeta = KASUS_CATEGORY_DEFINITIONS[current.category];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p className="eyebrow">Övningsverktyg</p>
        <h1 className={styles.title}>Kasusdrillen</h1>
        <p className={styles.lead}>
          Träna sambandet mellan <strong>satsens roller</strong>, <strong>regenter</strong>,{' '}
          <strong>kasus</strong> och <strong>tyskans frasböjning</strong> i autentiska kontexter.
        </p>
      </header>

      {/* Category Selection Filter */}
      <section className={styles.categorySection} aria-label="Kategorier">
        <p className={styles.categoryLabel}>Välj kategori att öva:</p>
        <div className={styles.categoryList}>
          <button
            type="button"
            className={`${styles.categoryBtn} ${
              selectedCategory === 'alla' ? styles.categoryBtnActive : ''
            }`}
            onClick={() => handleCategoryChange('alla')}
          >
            Alla kategorier
            <span className={styles.categoryBadge}>{KASUS_DRILL_ITEMS.length}</span>
          </button>
          {KASUS_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              type="button"
              className={`${styles.categoryBtn} ${
                selectedCategory === cat.key ? styles.categoryBtnActive : ''
              }`}
              onClick={() => handleCategoryChange(cat.key)}
            >
              {cat.label}
              <span className={styles.categoryBadge}>{cat.count}</span>
            </button>
          ))}
        </div>
        {selectedCategory !== 'alla' && (
          <p className={styles.categoryDesc}>
            {KASUS_CATEGORY_DEFINITIONS[selectedCategory].description}
          </p>
        )}
      </section>

      {/* Main Exercise Card */}
      <section className={styles.exerciseCard}>
        <div className={styles.cardTop}>
          <div className={styles.cardTopLeft}>
            <span className={styles.exerciseId}>{current.id}</span>
            <span className={styles.levelTag}>Nivå {current.level}</span>
            <span className={styles.categoryTag}>{currentCategoryMeta?.label}</span>
          </div>
          <div className={styles.cardTopRight}>
            <button
              type="button"
              className={`${styles.shuffleBtn} ${isShuffled ? styles.shuffleBtnActive : ''}`}
              onClick={handleToggleShuffle}
              title="Slumpa ordningen på övningarna"
            >
              {isShuffled ? '🔀 Slumpad' : '➡️ Sekventiell'}
            </button>
            <span>
              Uppgift {currentIndex + 1} av {filteredItems.length}
            </span>
            <span className={styles.scoreBadge}>Poäng: {score}</span>
          </div>
        </div>

        {/* Context description if available */}
        {current.context && (
          <div className={styles.contextBox}>
            💡 <strong>Sammanhang:</strong> {current.context}
          </div>
        )}

        {/* Sentence Prompt with Interactive Gap Placeholders */}
        <div className={styles.promptContainer}>
          {renderSentencePrompt(current.prompt, current.targets)}
        </div>

        {/* Input & Target Breakdown */}
        <div className={styles.targetsContainer}>
          {current.targets.map(target => {
            const targetFb = feedback?.targetResults?.[target.id];
            return (
              <div key={target.id} className={styles.targetCard}>
                <div className={styles.targetHeader}>
                  <span className={styles.targetIdBadge}>Lucka [{target.id}]</span>
                  <span className={styles.targetCue}>
                    Grundord: <strong>{target.cue}</strong>
                  </span>
                  {target.gender && target.number && (
                    <span className={styles.targetMeta}>
                      {target.gender !== 'ej tillämpligt i plural' ? `${target.gender} · ` : ''}
                      {target.number}
                    </span>
                  )}
                  {target.requireCaseIdentification && (
                    <span className={styles.requiredCaseBadge}>Obligatoriskt kasusval</span>
                  )}
                </div>

                {/* Form Input: Choices or Text input */}
                <div className={styles.targetField}>
                  <label className={styles.fieldLabel}>Böjd form för [{target.id}]:</label>
                  {target.options && target.options.length > 0 ? (
                    <div className={styles.optionsGrid}>
                      {target.options.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          className={`${styles.optButton} ${
                            userAnswers[target.id] === opt ? styles.optSelected : ''
                          }`}
                          onClick={() => handleAnswerChange(target.id, opt)}
                          disabled={feedback !== null}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type="text"
                      className={styles.textInput}
                      value={userAnswers[target.id] || ''}
                      onChange={e => handleAnswerChange(target.id, e.target.value)}
                      placeholder={`Skriv böjd form för lucka [${target.id}]...`}
                      disabled={feedback !== null}
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                    />
                  )}
                </div>

                {/* Case Selection */}
                <div className={styles.caseSection}>
                  <label className={styles.fieldLabel}>
                    Kasus för lucka [{target.id}]:
                    {target.requireCaseIdentification ? (
                      <span className={styles.requiredAsterisk}> *</span>
                    ) : (
                      <span className={styles.optionalNote}> (valfri analys)</span>
                    )}
                  </label>
                  <div className={styles.casePills}>
                    {(['nominativ', 'ackusativ', 'dativ', 'genitiv'] as const).map(c => (
                      <button
                        key={c}
                        type="button"
                        className={`${styles.casePill} ${
                          userCases[target.id] === c ? styles.casePillSelected : ''
                        }`}
                        onClick={() =>
                          handleCaseChange(target.id, userCases[target.id] === c ? null : c)
                        }
                        disabled={feedback !== null}
                      >
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Per-target Feedback */}
                {targetFb && (
                  <div className={styles.gapFeedback}>
                    {targetFb.isTargetCorrect ? (
                      <p className={styles.correctMsg}>
                        ✅ <strong>Rätt!</strong> Målform: <strong>{target.answer}</strong> ({target.case})
                        — funktion: {target.function} (regent: {target.governor})
                      </p>
                    ) : (
                      <div className={styles.wrongMsg}>
                        <p>
                          ⚠️ <strong>Analys för lucka [{target.id}]:</strong>
                        </p>
                        <ul>
                          <li>
                            Rätt form: <strong>{target.answer}</strong>
                            {target.acceptedAlternatives && target.acceptedAlternatives.length > 0 && (
                              <span> (även godkänt: {target.acceptedAlternatives.join(', ')})</span>
                            )}
                          </li>
                          <li>
                            Kasus:{' '}
                            <strong>
                              {target.case.charAt(0).toUpperCase() + target.case.slice(1)}
                            </strong>{' '}
                            {targetFb.caseCorrect === false && (
                              <span style={{ color: 'var(--error, #e53e3e)' }}>
                                (du angav {userCases[target.id] || 'inget'})
                              </span>
                            )}
                          </li>
                          <li>
                            Funktion: <em>{target.function}</em> (styrd av: <em>{target.governor}</em>)
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Overall Exercise Feedback */}
        {feedback && (
          <div
            className={`${styles.overallFeedback} ${
              feedback.isFullyCorrect ? styles.feedbackSuccess : styles.feedbackPartial
            }`}
          >
            <div className={styles.feedbackHeader}>
              <h4>{feedback.isFullyCorrect ? '🎉 Helt rätt!' : 'Analys & facit'}</h4>
              <p className={styles.completedSentence}>
                Fullständig mening: <strong>&rdquo;{current.completedSentence}&rdquo;</strong>
              </p>
            </div>
            {current.editorialNote && (
              <p className={styles.editorialNote}>💡 {current.editorialNote}</p>
            )}
            <div className={styles.sourceInfo}>
              <span>
                Källa: {current.source.lesson} · {current.source.section}
              </span>
            </div>
          </div>
        )}

        {/* Controls Row */}
        <div className={styles.controlsRow}>
          <div className={styles.navControls}>
            <button
              type="button"
              className={`${styles.actionBtn} ${styles.secondaryBtn}`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              ← Föregående
            </button>
            {feedback !== null && !feedback.isFullyCorrect && (
              <button
                type="button"
                className={`${styles.actionBtn} ${styles.secondaryBtn}`}
                onClick={handleRetry}
              >
                Försök igen
              </button>
            )}
          </div>

          {feedback === null ? (
            <button
              type="button"
              className={`${styles.actionBtn} ${styles.primaryBtn}`}
              onClick={handleCheck}
              disabled={!canCheck}
            >
              Kontrollera svar
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.actionBtn} ${styles.primaryBtn}`}
              onClick={handleNext}
            >
              {currentIndex < filteredItems.length - 1 ? 'Nästa uppgift →' : 'Börja om från början ↻'}
            </button>
          )}
        </div>
      </section>

      {/* Helpful links footer */}
      <footer style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--hairline, #e2e8f0)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: '0.875rem' }}>
        <Link href="/docs/Kasus/oversikt" style={{ color: 'var(--brand, #2b4c7e)', textDecoration: 'none' }}>
          ← Tillbaka till Kasusöversikten (K01)
        </Link>
        <Link href="/verbdrillen" style={{ color: 'var(--brand, #2b4c7e)', textDecoration: 'none' }}>
          Gå till Verbdrillen →
        </Link>
      </footer>
    </main>
  );
}
