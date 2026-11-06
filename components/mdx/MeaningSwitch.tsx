'use client';

import { useId, useState } from 'react';
import styles from './GrammarLab.module.css';

export type MeaningVariant = {
  label: string;
  sentence: string;
  translation: string;
  explanation: string;
  caseBadge?: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv';
};

export default function MeaningSwitch({
  title,
  context,
  variants,
}: {
  title: string;
  context: string;
  variants: MeaningVariant[];
}) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const variant = variants[selected];

  if (!variant) return null;

  return (
    <section className={styles.lab} aria-labelledby={id}>
      <p className="eyebrow">Undersök · växla betydelse</p>
      <h3 id={id}>{title}</h3>
      <p>{context}</p>

      <div className={styles.controls} role="group" aria-label="Välj konstruktion">
        {variants.map((item, index) => (
          <button
            className={styles.choice}
            type="button"
            key={item.label}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div aria-live="polite" aria-atomic="true">
        <div className={styles.example}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 4 }}>
            <p lang="de" className={styles.german}>
              {variant.sentence}
            </p>
            {variant.caseBadge && (
              <span className={`casePill casePill--${variant.caseBadge.slice(0, 3)}`}>
                {variant.caseBadge}
              </span>
            )}
          </div>
          <p lang="sv" className={styles.translation}>
            {variant.translation}
          </p>
        </div>
        <p lang="sv">{variant.explanation}</p>
      </div>
    </section>
  );
}
