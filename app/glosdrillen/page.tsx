'use client';

import { useState } from 'react';
import { VOCAB_DECKS, type VocabItem } from '@/data/decks';
import { gradeGermanAnswer } from '@/lib/answering-policy';
import { scheduleRepetition } from '@/lib/storage';
import styles from './page.module.css';

const DECK_ICONS: Record<number, string> = {
  1: '👨‍👩‍👦',
  2: '🏠',
  3: '🛒',
  4: '⏱️',
  5: '🗺️',
  6: '⚽',
  7: '✈️',
  8: '🩺',
  9: '💼',
  10: '💬',
  11: '🌲',
  12: '🎭',
  13: '🏛️',
  14: '🧩',
  15: '📜',
};

export default function GlosdrillenPage() {
  const [selectedDeckId, setSelectedDeckId] = useState<number>(1);
  const [itemIndex, setItemIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState<'skriva' | 'kort'>('skriva');
  const [showAnswer, setShowAnswer] = useState(false);

  const currentDeck = VOCAB_DECKS.find(d => d.id === selectedDeckId) || VOCAB_DECKS[0];
  const currentItem = currentDeck.items[itemIndex % currentDeck.items.length] || currentDeck.items[0];

  function handleCheck() {
    const res = gradeGermanAnswer(userInput, currentItem.german);
    setFeedback(res);

    if (res.isCorrect) {
      setScore(s => s + 1);
    } else {
      scheduleRepetition({
        id: `vocab:${currentItem.id}`,
        sourceType: 'vocab',
        prompt: `Översätt till tyska: ${currentItem.swedish}`,
        targetAnswer: currentItem.german,
        explanation: `Svenska: ${currentItem.swedish}. Tyska: ${currentItem.german}${currentItem.plural ? ` (Plural: ${currentItem.plural})` : ''}.`,
      });
    }
  }

  function handleNext() {
    setUserInput('');
    setFeedback(null);
    setShowAnswer(false);
    setItemIndex(i => (i + 1) % currentDeck.items.length);
  }

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Övningsverktyg</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Glosdrillen</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Träna 750 centrala tyska ord och idiomatiska uttryck i 15 tematiska kortlekar med artikel,
          plural och autentiska exempelmeningar.
        </p>
      </header>

      {/* Kortleksväljare i rutor med ikon och rubrik */}
      <div style={{ marginBottom: '2rem' }}>
        <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
          Välj kortlek (15 teman)
        </p>
        <div className={styles.deckGrid} role="radiogroup" aria-label="Välj kortlek">
          {VOCAB_DECKS.map(deck => {
            const isSelected = deck.id === selectedDeckId;
            return (
              <button
                key={deck.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${styles.deckCard} ${isSelected ? styles.deckCardActive : ''}`}
                onClick={() => {
                  setSelectedDeckId(deck.id);
                  setItemIndex(0);
                  setUserInput('');
                  setFeedback(null);
                  setShowAnswer(false);
                }}
              >
                <span className={styles.deckIcon} aria-hidden="true">
                  {DECK_ICONS[deck.id] || '📖'}
                </span>
                <span className={styles.deckTitle}>{deck.name}</span>
                <span className={styles.deckCount}>{deck.items.length} ord</span>
              </button>
            );
          })}
        </div>
      </div>

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
          <div>
            <span className="eyebrow">{currentDeck.name}</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginLeft: 8 }}>
              Kort {itemIndex + 1} av {currentDeck.items.length}
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--muted)' }}>
            Poäng: {score}
          </span>
        </div>

        {/* Svenskt ord som ska översättas */}
        <div style={{ padding: '1.5rem', background: 'var(--surface-soft)', borderRadius: 'var(--r-md)', textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="eyebrow" style={{ color: 'var(--muted)' }}>Svenska</span>
          <h2 style={{ fontSize: '2rem', margin: '6px 0 0', fontWeight: 600 }}>
            {currentItem.swedish}
          </h2>
          {currentItem.wordClass && (
            <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'inline-block', marginTop: 4 }}>
              ({currentItem.wordClass}{currentItem.gender ? ` · ${currentItem.gender}` : ''})
            </span>
          )}
        </div>

        {/* Inmatning */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Skriv på tyska (inklusive artikel för substantiv, t.ex. &rdquo;der Mann&rdquo;):
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (feedback === null) handleCheck();
                  else handleNext();
                }
              }}
              placeholder="Skriv tysk form..."
              disabled={feedback !== null}
              style={{
                flex: 1,
                padding: '10px 14px',
                fontSize: '1.125rem',
                border: '1px solid var(--hairline)',
                borderRadius: 'var(--r-md)',
              }}
            />
            {feedback === null ? (
              <button
                type="button"
                className="pillButton pillButton--primary"
                onClick={handleCheck}
                disabled={!userInput.trim()}
              >
                Rätta svar
              </button>
            ) : (
              <button type="button" className="pillButton pillButton--primary" onClick={handleNext}>
                Nästa glosa →
              </button>
            )}
          </div>
        </div>

        {feedback !== null && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--r-md)',
              background: feedback.isCorrect ? 'var(--block-mint)' : 'var(--block-pink)',
              border: `1px solid ${feedback.isCorrect ? '#a3e2b2' : '#f6b8b8'}`,
            }}
          >
            <strong>{feedback.isCorrect ? '✅ Helt rätt!' : '⚠️ Inte riktigt:'}</strong>{' '}
            <span>{feedback.feedback}</span>
            <div style={{ marginTop: 6, fontSize: '0.9375rem' }}>
              Facit: <strong lang="de">{currentItem.german}</strong>
              {currentItem.plural && <span> · Plural: <strong lang="de">{currentItem.plural}</strong></span>}
            </div>
          </div>
        )}

        {/* Exempelmening */}
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--hairline)' }}>
          <p className="eyebrow" style={{ color: 'var(--muted)' }}>Exempel i mening</p>
          <p lang="de" style={{ fontSize: '1.0625rem', fontWeight: 600, margin: '4px 0' }}>
            {currentItem.exampleSentence}
          </p>
          <p lang="sv" style={{ fontSize: '0.9375rem', color: '#555', margin: 0 }}>
            🇸🇪 {currentItem.exampleTranslation}
          </p>
        </div>
      </section>
    </main>
  );
}
