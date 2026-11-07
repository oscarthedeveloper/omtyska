import styles from './SentencePlate.module.css';
export default function SentencePlate() {
  return <figure className={styles.plate}>
    <figcaption><span>FIG. 01 / SATSRAMEN</span><span lang="de">Die Satzklammer</span></figcaption>
    <div className={styles.frame}>
      <div><span>01 / Förfält</span><p lang="de">Ich</p><small>Vem meningen tar avstamp i</small></div>
      <div className={styles.verb}><span>02 / Vänster klammer</span><p lang="de">kann</p><small>Det böjda verbet</small></div>
      <div><span>03 / Mittfält</span><p lang="de">heute leider nicht</p><small>Information mellan verbdelarna</small></div>
      <div className={styles.verb}><span>04 / Höger klammer</span><p lang="de">kommen.</p><small>Infinitiven avslutar ramen</small></div>
    </div>
    <div className={styles.bracket} aria-hidden="true"><span>VERBDELARNA BILDAR EN RAM</span></div>
    <p className={styles.translation}>Jag kan tyvärr inte komma idag.</p>
  </figure>;
}
