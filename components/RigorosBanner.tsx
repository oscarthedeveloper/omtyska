import styles from './RigorosBanner.module.css';

export default function RigorosBanner() {
  return (
    <aside className={styles.banner} role="note" aria-label="Fördjupningsinnehåll">
      <span className={styles.icon} aria-hidden="true">
        🔬
      </span>
      <div>
        <strong>Rigorös fördjupning:</strong> Denna sida innehåller fullständiga paradigm,
        detaljerade valensförhållanden och historiska eller regionala varianter.
      </div>
    </aside>
  );
}
