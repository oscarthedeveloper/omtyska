import styles from './GrammarLab.module.css';

type SatzklammerProps = {
  title?: string;
  vorfeld: string;
  linkeKlammer: string;
  mittelfeld: string;
  rechteKlammer?: string;
  nachfeld?: string;
  translation: string;
  note?: string;
};

export default function SentenceFrame({
  title = 'Satsram (Satzklammer)',
  vorfeld,
  linkeKlammer,
  mittelfeld,
  rechteKlammer,
  nachfeld,
  translation,
  note,
}: SatzklammerProps) {
  return (
    <div className={styles.lab}>
      <p className="eyebrow">Tysk ordföljd · Satsram</p>
      <h4>{title}</h4>

      <div className={styles.satzklammer}>
        <div className={`${styles.col} ${styles.vorfeld}`}>
          <span className={styles.colHeader} style={{ color: 'var(--g-vorfeld)' }}>
            Förfält (Vorfeld)
          </span>
          <p lang="de" className={styles.colText}>
            {vorfeld}
          </p>
        </div>

        <div className={`${styles.col} ${styles.linkeKlammer}`}>
          <span className={styles.colHeader} style={{ color: 'var(--g-linke-klammer)' }}>
            Vänster klammer (V2)
          </span>
          <p lang="de" className={styles.colText}>
            {linkeKlammer}
          </p>
          <span className={styles.colTranslation}>finit verb</span>
        </div>

        <div className={`${styles.col} ${styles.mittelfeld}`}>
          <span className={styles.colHeader} style={{ color: 'var(--g-mittelfeld)' }}>
            Mittfält (Mittelfeld)
          </span>
          <p lang="de" className={styles.colText}>
            {mittelfeld}
          </p>
        </div>

        {rechteKlammer && (
          <div className={`${styles.col} ${styles.rechteKlammer}`}>
            <span className={styles.colHeader} style={{ color: 'var(--g-rechte-klammer)' }}>
              Höger klammer
            </span>
            <p lang="de" className={styles.colText}>
              {rechteKlammer}
            </p>
            <span className={styles.colTranslation}>verbdel / partikel</span>
          </div>
        )}

        {nachfeld && (
          <div className={`${styles.col} ${styles.nachfeld}`}>
            <span className={styles.colHeader} style={{ color: 'var(--g-nachfeld)' }}>
              Efterfält (Nachfeld)
            </span>
            <p lang="de" className={styles.colText}>
              {nachfeld}
            </p>
          </div>
        )}
      </div>

      <p lang="sv" className={styles.translation} style={{ marginTop: '0.5rem', fontWeight: 500 }}>
        🇸🇪 {translation}
      </p>

      {note && (
        <p lang="sv" style={{ fontSize: '0.875rem', color: '#555', marginTop: '4px' }}>
          💡 {note}
        </p>
      )}
    </div>
  );
}
