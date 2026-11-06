'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CASE_EXERCISES } from '@/data/case-exercises';
import { gradeGermanAnswer } from '@/lib/answering-policy';
import { scheduleRepetition } from '@/lib/storage';

export default function KasusdrillenPage() {
  const [index, setIndex] = useState(0);
  const [userCase, setUserCase] = useState<string | null>(null);
  const [phraseInput, setPhraseInput] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [score, setScore] = useState(0);

  const current = CASE_EXERCISES[index];

  function handleCheck() {
    if (!current) return;

    const caseCorrect = userCase === current.governedCase;
    const phraseResult = gradeGermanAnswer(phraseInput, current.targetFullPhrase, {
      acceptableAlternatives: current.acceptableAlternatives,
    });

    const isFullyCorrect = caseCorrect && phraseResult.isCorrect;

    if (isFullyCorrect) {
      setScore(s => s + 1);
    } else {
      scheduleRepetition({
        id: `case:${current.id}`,
        sourceType: 'case',
        prompt: `${current.sentencePrompt} (Styrande: ${current.prepositionOrVerb})`,
        targetAnswer: current.targetFullPhrase,
        explanation: `${current.rektionExplanation} Kasus: ${current.governedCase}. Rätt fras: ${current.targetFullPhrase}.`,
      });
    }

    setFeedback({
      caseCorrect,
      phraseResult,
      isFullyCorrect,
    });
  }

  function handleNext() {
    if (index < CASE_EXERCISES.length - 1) {
      setIndex(i => i + 1);
      setUserCase(null);
      setPhraseInput('');
      setFeedback(null);
    } else {
      setIndex(0);
      setUserCase(null);
      setPhraseInput('');
      setFeedback(null);
      setScore(0);
    }
  }

  return (
    <main style={{ maxWidth: 840, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Övningsverktyg</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Kasusdrillen</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Träna sambandet mellan <strong>styrande ord</strong>, <strong>kasus</strong>, <strong>genus</strong> och{' '}
          <strong>frasens böjning</strong>.
        </p>
      </header>

      <section
        style={{
          background: 'var(--canvas)',
          border: '1px solid var(--hairline)',
          borderRadius: 'var(--r-lg)',
          padding: 'var(--s-xl)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span className="eyebrow">Övning {index + 1} av {CASE_EXERCISES.length}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--muted)' }}>
            Poäng: {score}
          </span>
        </div>

        <p style={{ color: '#555', fontSize: '0.9375rem', marginBottom: '0.5rem' }}>
          💡 {current.context}
        </p>

        <h3 style={{ fontSize: '1.4rem', margin: '0 0 1.5rem', fontFamily: 'var(--font-sans)' }}>
          {current.sentencePrompt}
        </h3>

        {/* Steg 1: Välj kasus */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Steg 1: Vilket kasus styrs här av &rdquo;{current.prepositionOrVerb}&rdquo;?
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['nominativ', 'akkusativ', 'dativ', 'genitiv'] as const).map(c => (
              <button
                key={c}
                type="button"
                className="pillButton"
                style={{
                  minHeight: 38,
                  padding: '6px 16px',
                  background: userCase === c ? 'var(--ink)' : 'var(--surface-soft)',
                  color: userCase === c ? 'var(--inverse-ink)' : 'var(--ink)',
                }}
                onClick={() => setUserCase(c)}
                disabled={feedback !== null}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Steg 2: Skriv in hela frasen */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Steg 2: Skriv in hela den böjda frasen (artikel + adjektiv + substantiv):
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={phraseInput}
              onChange={e => setPhraseInput(e.target.value)}
              placeholder={`t.ex. ${current.targetArticle} ...`}
              disabled={feedback !== null}
              style={{
                flex: 1,
                padding: '10px 14px',
                fontSize: '1.0625rem',
                border: '1px solid var(--hairline)',
                borderRadius: 'var(--r-md)',
              }}
            />
            {feedback === null ? (
              <button
                type="button"
                className="pillButton pillButton--primary"
                onClick={handleCheck}
                disabled={!userCase || !phraseInput.trim()}
              >
                Kontrollera
              </button>
            ) : (
              <button type="button" className="pillButton pillButton--primary" onClick={handleNext}>
                {index < CASE_EXERCISES.length - 1 ? 'Nästa uppgift →' : 'Börja om →'}
              </button>
            )}
          </div>
        </div>

        {feedback !== null && (
          <div
            style={{
              padding: '14px 18px',
              borderRadius: 'var(--r-md)',
              background: feedback.isFullyCorrect ? 'var(--block-mint)' : 'var(--block-pink)',
              border: `1px solid ${feedback.isFullyCorrect ? '#a3e2b2' : '#f6b8b8'}`,
            }}
          >
            <strong>
              {feedback.isFullyCorrect ? '✅ Helt rätt i alla steg!' : '⚠️ Analys och återkoppling:'}
            </strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: '1.25rem', fontSize: '0.9375rem' }}>
              <li>
                Kasus:{' '}
                {feedback.caseCorrect ? (
                  <span style={{ color: 'var(--success)', fontWeight: 600 }}>Rätt ({current.governedCase})</span>
                ) : (
                  <span style={{ color: 'var(--error)', fontWeight: 600 }}>
                    Fel (du valde {userCase}, rätt kasus är {current.governedCase})
                  </span>
                )}
              </li>
              <li>
                Frasböjning: {feedback.phraseResult.feedback} (Facit: <strong>{current.targetFullPhrase}</strong>)
              </li>
              <li style={{ marginTop: 4, color: '#444' }}>{current.rektionExplanation}</li>
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
