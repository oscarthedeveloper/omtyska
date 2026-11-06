'use client';

import { useState } from 'react';
import { SYNTAX_EXERCISES } from '@/data/syntax-exercises';
import { checkSentenceOrder } from '@/lib/answering-policy';
import { scheduleRepetition } from '@/lib/storage';

export default function MeningsbyggetPage() {
  const [index, setIndex] = useState(0);
  const current = SYNTAX_EXERCISES[index];

  // Current order of chunks (initially shuffled or reversed)
  const [chunks, setChunks] = useState<string[]>(() => {
    return [...current.chunks].sort(() => 0.5 - Math.random());
  });

  const [feedback, setFeedback] = useState<{ isCorrect: boolean; feedback: string } | null>(null);
  const [score, setScore] = useState(0);

  function moveLeft(idx: number) {
    if (idx === 0) return;
    const next = [...chunks];
    const temp = next[idx - 1];
    next[idx - 1] = next[idx];
    next[idx] = temp;
    setChunks(next);
    setFeedback(null);
  }

  function moveRight(idx: number) {
    if (idx === chunks.length - 1) return;
    const next = [...chunks];
    const temp = next[idx + 1];
    next[idx + 1] = next[idx];
    next[idx] = temp;
    setChunks(next);
    setFeedback(null);
  }

  function handleCheck() {
    const res = checkSentenceOrder(chunks, current.acceptableOrders);
    setFeedback(res);

    if (res.isCorrect) {
      setScore(s => s + 1);
    } else {
      scheduleRepetition({
        id: `syntax:${current.id}`,
        sourceType: 'syntax',
        prompt: `Bygg: ${current.swedishMeaning}`,
        targetAnswer: current.acceptableOrders[0].join(' '),
        explanation: current.explanation,
      });
    }
  }

  function handleNext() {
    const nextIndex = (index + 1) % SYNTAX_EXERCISES.length;
    setIndex(nextIndex);
    const nextItem = SYNTAX_EXERCISES[nextIndex];
    setChunks([...nextItem.chunks].sort(() => 0.5 - Math.random()));
    setFeedback(null);
  }

  return (
    <main style={{ maxWidth: 840, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Övningsverktyg</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Meningsbygget</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Träna tyskans ordföljd: <strong>V2-regeln</strong> i huvudsats, <strong>satsramen (Satzklammer)</strong>{' '}
          och <strong>verbet sist i bisats</strong>.
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
          <span className="eyebrow">Mening {index + 1} av {SYNTAX_EXERCISES.length}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--muted)' }}>
            Poäng: {score}
          </span>
        </div>

        <p style={{ color: '#444', fontSize: '1rem', fontWeight: 500, margin: '0 0 6px' }}>
          🇸🇪 {current.swedishMeaning}
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.875rem', margin: '0 0 1.5rem' }}>
          💡 {current.instruction}
        </p>

        {/* Flyttbara fraser */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
          <p className="eyebrow" style={{ color: 'var(--muted)' }}>
            Ordna fraserna (använd knapparna ◀ och ▶):
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {chunks.map((chunk, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 12px',
                  background: 'var(--surface-soft)',
                  border: '1px solid var(--hairline)',
                  borderRadius: 'var(--r-md)',
                }}
              >
                <button
                  type="button"
                  onClick={() => moveLeft(idx)}
                  disabled={idx === 0}
                  style={{ border: 0, background: 'transparent', cursor: idx > 0 ? 'pointer' : 'default', opacity: idx > 0 ? 1 : 0.2 }}
                  aria-label="Flytta vänster"
                >
                  ◀
                </button>
                <span lang="de" style={{ fontWeight: 600, fontSize: '1rem' }}>
                  {chunk}
                </span>
                <button
                  type="button"
                  onClick={() => moveRight(idx)}
                  disabled={idx === chunks.length - 1}
                  style={{ border: 0, background: 'transparent', cursor: idx < chunks.length - 1 ? 'pointer' : 'default', opacity: idx < chunks.length - 1 ? 1 : 0.2 }}
                  aria-label="Flytta höger"
                >
                  ▶
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Renderad mening */}
        <div
          style={{
            padding: '12px 16px',
            background: 'var(--surface-soft)',
            borderRadius: 'var(--r-md)',
            marginBottom: '1.5rem',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--muted)', display: 'block', marginBottom: 4 }}>
            Din nuvarande mening:
          </span>
          <p lang="de" style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>
            {chunks.join(' ')}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button type="button" className="pillButton pillButton--primary" onClick={handleCheck}>
            Kontrollera meningen
          </button>
          {feedback !== null && (
            <button type="button" className="pillButton pillButton--secondary" onClick={handleNext}>
              {index < SYNTAX_EXERCISES.length - 1 ? 'Nästa mening →' : 'Börja om →'}
            </button>
          )}
        </div>

        {feedback !== null && (
          <div
            style={{
              marginTop: '1.25rem',
              padding: '14px 18px',
              borderRadius: 'var(--r-md)',
              background: feedback.isCorrect ? 'var(--block-mint)' : 'var(--block-pink)',
              border: `1px solid ${feedback.isCorrect ? '#a3e2b2' : '#f6b8b8'}`,
            }}
          >
            <strong>{feedback.isCorrect ? '✅ Helt rätt ordföljd!' : '⚠️ Inte riktigt rätt:'}</strong>
            <p style={{ margin: '4px 0 0' }}>{feedback.feedback}</p>
            <p style={{ margin: '8px 0 0', fontSize: '0.875rem', color: '#444' }}>
              💡 {current.explanation}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
