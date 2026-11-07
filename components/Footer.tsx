import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.sourcesCol}>
            <div className={styles.sources}>
              <strong>Auktoritativa källor:</strong> Tysk grammatik kalibrerad mot{' '}
              <a href="https://grammis.ids-mannheim.de/" target="_blank" rel="noopener noreferrer">
                IDS grammis
              </a>{' '}
              (Leibniz-Institut für Deutsche Sprache) och officiell stavning enligt{' '}
              <a href="https://www.rechtschreibrat.com/" target="_blank" rel="noopener noreferrer">
                Rat für deutsche Rechtschreibung
              </a>
              .
            </div>
          </div>

          <div className={styles.navGroup}>
            <div className={styles.heading}>Meny</div>
            <ul className={styles.list}>
              <li><Link href="/grammatik">Grammatik</Link></li>
              <li><Link href="/larstig">Lärstigen</Link></li>
              <li><Link href="/blog">Anteckningar</Link></li>
              <li><Link href="/framsteg">Framsteg</Link></li>
              <li><Link href="/repetition">Repetition</Link></li>
            </ul>
          </div>

          <div className={styles.navGroup}>
            <div className={styles.heading}>Öva</div>
            <ul className={styles.list}>
              <li><Link href="/ovningar">Alla övningar</Link></li>
              <li><Link href="/tabellpusslet">Tabellpusslet</Link></li>
              <li><Link href="/verbdrillen">Verbdrillen</Link></li>
              <li><Link href="/glosdrillen">Glosdrillen</Link></li>
              <li><Link href="/kasusdrillen">Kasusdrillen</Link></li>
              <li><Link href="/meningsbygget">Meningsbygget</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            omtyska.se ·{' '}
            <a href="https://oscarohrn.com/" target="_blank" rel="noopener noreferrer">
              oscarohrn.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
