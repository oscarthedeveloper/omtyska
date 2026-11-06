'use client';

import { useState } from 'react';

const EXAMPLES = [
  {
    label: 'im Park (Dativ)',
    german: 'Ich gehe im Park spazieren.',
    translation: 'Jag promenerar i parken.',
    kasus: 'Dativ',
    caseClass: 'casePill--dat',
    explanation:
      'Här anger "im Park" (in + dem) var promenaden befinner sig. Rörelsen sker helt och hållet inom parkens gränser. Därför styr växelprepositionen "in" dativ!',
  },
  {
    label: 'in den Park (Ackusativ)',
    german: 'Ich gehe in den Park.',
    translation: 'Jag går in i parken.',
    kasus: 'Ackusativ',
    caseClass: 'casePill--akk',
    explanation:
      'Här anger "in den Park" målet för förflyttningen (från utsidan till insidan). Det är målrelationen – inte själva rörelsehandlingen – som kräver ackusativ!',
  },
];

export default function HomeContrastDemo() {
  const [active, setActive] = useState(0);
  const current = EXAMPLES[active];

  return (
    <div
      style={{
        background: 'var(--canvas)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--r-lg)',
        padding: 'var(--s-lg)',
        marginTop: 'var(--s-md)',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {EXAMPLES.map((ex, idx) => (
          <button
            key={idx}
            type="button"
            className="pillButton"
            style={{
              background: active === idx ? 'var(--ink)' : 'var(--surface-soft)',
              color: active === idx ? 'var(--inverse-ink)' : 'var(--ink)',
              minHeight: 38,
              padding: '6px 16px',
            }}
            onClick={() => setActive(idx)}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div
        style={{
          padding: 'var(--s-md)',
          background: 'var(--surface-soft)',
          borderRadius: 'var(--r-md)',
          marginBottom: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <p
            lang="de"
            style={{
              fontSize: '1.35rem',
              fontWeight: 600,
              margin: 0,
              fontFamily: 'var(--font-sans)',
            }}
          >
            {current.german}
          </p>
          <span className={`casePill ${current.caseClass}`}>{current.kasus}</span>
        </div>
        <p lang="sv" style={{ fontSize: '1.0625rem', color: '#555', margin: '4px 0 0' }}>
          🇸🇪 {current.translation}
        </p>
      </div>

      <p lang="sv" style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.5 }}>
        💡 <strong>Analys:</strong> {current.explanation}
      </p>
    </div>
  );
}
