import styles from './GrammarLab.module.css';

type Step = {
  title: string;
  description: string;
  example?: string;
};

export default function SentenceSteps({
  title = 'Bygg förståelsen steg för steg',
  steps,
}: {
  title?: string;
  steps: Step[];
}) {
  return (
    <div className={styles.lab}>
      <p className="eyebrow">Analys i steg</p>
      <h3>{title}</h3>

      <div className={styles.stepsList}>
        {steps.map((step, idx) => (
          <div key={idx} className={styles.stepItem}>
            <span className={styles.stepBadge}>{idx + 1}</span>
            <div className={styles.stepContent}>
              <h4>{step.title}</h4>
              <p lang="sv">{step.description}</p>
              {step.example && (
                <div
                  lang="de"
                  style={{
                    marginTop: 6,
                    padding: '6px 10px',
                    background: 'var(--surface-soft)',
                    borderRadius: 'var(--r-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                  }}
                >
                  {step.example}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
