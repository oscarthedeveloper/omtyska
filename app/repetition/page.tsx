'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDueRepetitionItems, getRepetitionItems, recordRepetitionReview } from '@/lib/storage';
import { gradeGermanAnswer } from '@/lib/answering-policy';
import type { RepetitionItem } from '@/lib/types';

export default function RepetitionPage() {
  const [items, setItems] = useState<RepetitionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputAnswer, setInputAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  useEffect(() => {
    const due = getDueRepetitionItems();
    if (due.length > 0) {
      setItems(due);
    } else {
      // If none due today, load any items from the queue to allow practice
      setItems(getRepetitionItems());
    }
  }, []);

  function handleCheck() {
    if (!items[currentIndex]) return;
    const current = items[currentIndex];
    const res = gradeGermanAnswer(inputAnswer, current.targetAnswer, {
      acceptableAlternatives: current.acceptableAlternatives,
    });

    setIsSuccess(res.isCorrect);
    setFeedback(res.feedback);
    recordRepetitionReview(current.id, res.isCorrect);
    setReviewedCount(v => v + 1);
  }

  function handleNext() {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(v => v + 1);
      setInputAnswer('');
      setFeedback(null);
      setIsSuccess(null);
    } else {
      setSessionCompleted(true);
    }
  }

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Spaced Repetition</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Repetition</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Här samlas uppgifter du tidigare svarat fel på i snabbkollar, verb- eller glosdrillen.
          Intervallen ökar automatiskt (1, 3, 7, 14 och 30 dagar) vid rätt svar.
        </p>
      </header>

      {items.length === 0 ? (
        <section
          style={{
            padding: 'var(--s-xxl)',
            background: 'var(--surface-soft)',
            borderRadius: 'var(--r-lg)',
            textAlign: 'center',
            border: '1px solid var(--hairline)',
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎉</div>
          <h2 style={{ fontSize: '1.5rem', margin: '0 0 8px' }}>Repetitionskön är tom!</h2>
          <p style={{ color: '#555', maxWidth: '40ch', margin: '0 auto var(--s-lg)' }}>
            Du har inga förfallna repetitionsfrågor just nu. Fortsätt läsa nya lektioner på lärstigen
            eller träna i något av våra drillverktyg!
          </p>
          <div style={{ display: 'flex', gap: 'var(--s-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/larstig" className="pillButton pillButton--primary">
              Öppna Lärstigen →
            </Link>
            <Link href="/kasusdrillen" className="pillButton pillButton--secondary">
              Öva i Kasusdrillen
            </Link>
          </div>
        </section>
      ) : sessionCompleted ? (
        <section
          style={{
            padding: 'var(--s-xxl)',
            background: 'var(--block-mint)',
            borderRadius: 'var(--r-lg)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌟</div>
          <h2 style={{ fontSize: '1.5rem', margin: '0 0 8px' }}>Dagens repetition är avklarad!</h2>
          <p style={{ margin: '0 0 var(--s-lg)' }}>
            Du har repeterat {reviewedCount} uppgifter. Rätt svar har flyttats fram till ett längre
            intervall.
          </p>
          <Link href="/larstig" className="pillButton pillButton--primary">
            Fortsätt till Lärstigen →
          </Link>
        </section>
      ) : (
        <section
          style={{
            padding: 'var(--s-xl)',
            background: 'var(--canvas)',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--r-lg)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="eyebrow">
              Kort {currentIndex + 1} av {items.length}
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              Intervall: {items[currentIndex].intervalDays || 1} d
            </span>
          </div>

          <h3 style={{ fontSize: '1.35rem', margin: '0 0 1rem' }}>
            {items[currentIndex].prompt}
          </h3>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
            <input
              type="text"
              value={inputAnswer}
              onChange={e => setInputAnswer(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (feedback === null) handleCheck();
                  else handleNext();
                }
              }}
              placeholder="Skriv ditt svar på tyska..."
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
                disabled={!inputAnswer.trim()}
              >
                Rätta svar
              </button>
            ) : (
              <button type="button" className="pillButton pillButton--primary" onClick={handleNext}>
                Nästa →
              </button>
            )}
          </div>

          {feedback !== null && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--r-md)',
                background: isSuccess ? 'var(--block-mint)' : 'var(--block-pink)',
                border: `1px solid ${isSuccess ? '#a3e2b2' : '#f6b8b8'}`,
              }}
            >
              <strong>{isSuccess ? '✅ Rätt!' : '⚠️ Facit:'}</strong> {feedback}
              {items[currentIndex].explanation && (
                <p style={{ margin: '6px 0 0', fontSize: '0.875rem' }}>
                  💡 {items[currentIndex].explanation}
                </p>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
