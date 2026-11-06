'use client';

import { useState } from 'react';
import { GERMAN_VERBS, type GermanVerbEntry } from '@/data/verbs';
import { gradeGermanAnswer } from '@/lib/answering-policy';
import { scheduleRepetition } from '@/lib/storage';

export default function VerbdrillenPage() {
  const [filterType, setFilterType] = useState<string>('alla');
  const [verbIndex, setVerbIndex] = useState(0);
  const [personIndex, setPersonIndex] = useState(0); // 0=ich, 1=du, 2=er/sie/es, 3=wir, 4=ihr, 5=sie/Sie
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [score, setScore] = useState(0);

  const filteredVerbs = GERMAN_VERBS.filter(v => {
    if (filterType === 'alla') return true;
    return v.type === filterType;
  });

  const currentVerb = filteredVerbs[verbIndex % filteredVerbs.length] || GERMAN_VERBS[0];
  const persons = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const;
  const personKeys = ['ich', 'du', 'erSieEs', 'wir', 'ihr', 'sieSie'] as const;
  const targetPerson = persons[personIndex % persons.length];
  const targetForm = currentVerb.present[personKeys[personIndex % personKeys.length]];

  function handleCheck() {
    const res = gradeGermanAnswer(userInput, targetForm);
    setFeedback(res);

    if (res.isCorrect) {
      setScore(s => s + 1);
    } else {
      scheduleRepetition({
        id: `verb:${currentVerb.infinitive}:presens:${targetPerson}`,
        sourceType: 'verb',
        prompt: `Böj i presens: ${currentVerb.infinitive} (${currentVerb.swedish}) -> ${targetPerson}`,
        targetAnswer: targetForm,
        explanation: `Infinitiv: ${currentVerb.infinitive}. Typ: ${currentVerb.type}. Rätt form för "${targetPerson}" är "${targetForm}".`,
      });
    }
  }

  function handleNext() {
    setUserInput('');
    setFeedback(null);
    if (personIndex < 5) {
      setPersonIndex(p => p + 1);
    } else {
      setPersonIndex(0);
      setVerbIndex(v => (v + 1) % filteredVerbs.length);
    }
  }

  return (
    <main style={{ maxWidth: 840, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Övningsverktyg</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Verbdrillen</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Träna tysk verbböjning i <strong>presens</strong> och <strong>präteritum</strong> samt particip i hela meningar.
        </p>
      </header>

      {/* Filter */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="eyebrow">Verbtyp:</span>
        {[
          { id: 'alla', label: 'Alla verb' },
          { id: 'svagt', label: 'Svaga verb' },
          { id: 'starkt', label: 'Starka verb' },
          { id: 'modalverb', label: 'Modalverb' },
          { id: 'hjalpverb', label: 'Hjälpverb' },
        ].map(f => (
          <button
            key={f.id}
            type="button"
            className="pillButton"
            style={{
              minHeight: 34,
              padding: '4px 14px',
              fontSize: '0.875rem',
              background: filterType === f.id ? 'var(--ink)' : 'var(--surface-soft)',
              color: filterType === f.id ? 'var(--inverse-ink)' : 'var(--ink)',
            }}
            onClick={() => {
              setFilterType(f.id);
              setVerbIndex(0);
              setPersonIndex(0);
              setUserInput('');
              setFeedback(null);
            }}
          >
            {f.label}
          </button>
        ))}
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
            <span className="eyebrow">{currentVerb.type}</span>
            <h2 style={{ fontSize: '1.8rem', margin: '4px 0' }}>
              <span lang="de">{currentVerb.infinitive}</span>{' '}
              <span style={{ fontSize: '1.125rem', fontWeight: 400, color: 'var(--muted)' }}>
                ({currentVerb.swedish})
              </span>
            </h2>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--muted)' }}>
            Poäng: {score}
          </span>
        </div>

        <div style={{ padding: '12px 16px', background: 'var(--surface-soft)', borderRadius: 'var(--r-md)', marginBottom: '1.5rem' }}>
          <p style={{ margin: 0, fontSize: '0.9375rem', color: '#444' }}>
            <strong>Huvudformer:</strong> {currentVerb.infinitive} – {currentVerb.praeteritumStamm} – {currentVerb.auxiliary} {currentVerb.participleII}
          </p>
        </div>

        {/* Övningsrad */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            Böj för person: <span style={{ color: 'var(--accent-magenta)' }}>{targetPerson}</span> (presens)
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
              placeholder={`Skriv formen för ${targetPerson}...`}
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
                Nästa person →
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
            <strong>{feedback.isCorrect ? '✅ Rätt form!' : '⚠️ Inte riktigt:'}</strong>{' '}
            <span>{feedback.feedback}</span>
            <p style={{ margin: '6px 0 0', fontSize: '0.875rem' }}>
              Facit för <strong>{targetPerson}</strong>: <code style={{ fontSize: '1rem' }}>{targetForm}</code>
            </p>
          </div>
        )}

        {/* Exempelmening */}
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--hairline)' }}>
          <p className="eyebrow" style={{ color: 'var(--muted)' }}>Exempel i sammanhang</p>
          <p lang="de" style={{ fontSize: '1rem', fontWeight: 600, margin: '4px 0' }}>
            {currentVerb.sampleSentence.german}
          </p>
          <p lang="sv" style={{ fontSize: '0.875rem', color: '#555', margin: 0 }}>
            🇸🇪 {currentVerb.sampleSentence.swedish}
          </p>
        </div>
      </section>
    </main>
  );
}
