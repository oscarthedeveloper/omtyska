'use client';

import { useGrammarMode } from '@/lib/grammar-mode';
import styles from './GrammarModeToggle.module.css';

export default function GrammarModeToggle({ mobile = false }: { mobile?: boolean }) {
  const [mode, setMode] = useGrammarMode();

  const toggle = (
    <div
      className={styles.toggleGroup}
      role="radiogroup"
      aria-label="Välj läsdjup för tysk grammatik"
    >
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'lattsam'}
        className={`${styles.button} ${mode === 'lattsam' ? styles.buttonActive : ''}`}
        onClick={() => setMode('lattsam')}
        title="Lättsam: Koncentrerad genomgång och snabb väg in"
      >
        <span className={styles.icon} aria-hidden="true">☕</span>
        <span className={styles.label}>Lättsam</span>
      </button>

      <button
        type="button"
        role="radio"
        aria-checked={mode === 'rigoros'}
        className={`${styles.button} ${mode === 'rigoros' ? styles.buttonActive : ''}`}
        onClick={() => setMode('rigoros')}
        title="Rigorös: Fullständigt referensverk med alla paradigm och register"
      >
        <span className={styles.icon} aria-hidden="true">🔬</span>
        <span className={styles.label}>Rigorös</span>
      </button>
    </div>
  );

  if (mobile) {
    return (
      <div className={styles.mobileContainer}>
        <p className={styles.mobileLabel}>Läsdjup</p>
        <p className={styles.mobileDesc}>
          {mode === 'lattsam'
            ? '☕ Lättsam: Snabb överblick, enkla exempel och fokuserad övning.'
            : '🔬 Rigorös: Kompletta formtabeller, undantag, historik och referens.'}
        </p>
        {toggle}
      </div>
    );
  }

  return toggle;
}
