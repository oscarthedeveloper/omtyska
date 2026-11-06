'use client';

import { useState } from 'react';
import styles from './GrammarLab.module.css';

type TransformOption = {
  label: string;
  sentence: string;
  feedback: string;
  isCorrect: boolean;
};

export default function SentenceTransform({
  title = 'Omvandla meningen',
  prompt,
  baseSentence,
  options,
}: {
  title?: string;
  prompt: string;
  baseSentence: string;
  options: TransformOption[];
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className={styles.lab}>
      <p className="eyebrow">Träna aktiv omvandling</p>
      <h3>{title}</h3>
      <p>{prompt}</p>

      <div className={styles.example} style={{ marginBottom: '1rem' }}>
        <p className="eyebrow" style={{ color: 'var(--muted)' }}>
          Utgångsmening
        </p>
        <p lang="de" className={styles.german} style={{ fontSize: '1.125rem' }}>
          {baseSentence}
        </p>
      </div>

      <div className={styles.controls} role="radiogroup">
        {options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            role="radio"
            aria-checked={selected === idx}
            className={styles.choice}
            onClick={() => setSelected(idx)}
          >
            {opt.label}: <span lang="de">{opt.sentence}</span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          aria-live="polite"
          style={{
            marginTop: '1rem',
            padding: '12px 16px',
            borderRadius: 'var(--r-sm)',
            background: options[selected].isCorrect ? '#eaf7ed' : '#fdf2f2',
            border: `1px solid ${options[selected].isCorrect ? '#a6e3b5' : '#f8b4b4'}`,
          }}
        >
          <strong>{options[selected].isCorrect ? '✅ Rätt tänkt!' : '⚠️ Inte riktigt:'}</strong>{' '}
          <span lang="sv">{options[selected].feedback}</span>
        </div>
      )}
    </div>
  );
}
