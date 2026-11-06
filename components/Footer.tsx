import Link from 'next/link';
import { siteConfig } from '../site.config';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.brand}>Om Tyska</div>
            <p className={styles.lead}>
              En gratis, modern och pedagogisk tysk grammatika för svensktalande elever, studenter och
              självstuderande. Utvecklad med fokus på förståelse, tysk kasus- och satsstruktur samt
              interaktiv träning.
            </p>
            <div className={styles.sources} style={{ marginTop: '1rem' }}>
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

          <div>
            <div className={styles.heading}>Grammatik</div>
            <ul className={styles.list}>
              <li><Link href="/grammatik">Alla 12 ämnesområden</Link></li>
              <li><Link href="/docs/grunder/vokaler">Grunder och uttal</Link></li>
              <li><Link href="/docs/substantiv/bestamd-artikel">Substantiv och artiklar</Link></li>
              <li><Link href="/docs/kasus/ackusativ">Kasus och rektion</Link></li>
              <li><Link href="/docs/prepositioner/vaxelprepositioner">Växelprepositioner</Link></li>
              <li><Link href="/docs/syntax/ordfoljd-i-bisatser">Syntax och ordföljd</Link></li>
              <li><Link href="/mer">Mer grammatik & fördjupning</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Öva & Verktyg</div>
            <ul className={styles.list}>
              <li><Link href="/verbdrillen">Verbdrillen</Link></li>
              <li><Link href="/glosdrillen">Glosdrillen (750 ord)</Link></li>
              <li><Link href="/kasusdrillen">Kasusdrillen</Link></li>
              <li><Link href="/meningsbygget">Meningsbygget</Link></li>
              <li><Link href="/larstig">Lärstigen (54 steg)</Link></li>
              <li><Link href="/framsteg">Mina framsteg</Link></li>
              <li><Link href="/repetition">Spaced repetition</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Om tjänsten</div>
            <ul className={styles.list}>
              <li><Link href="/blog">Blogg & språkartiklar</Link></li>
              <li><Link href="/kontakt">Kontakt och rättelser</Link></li>
              <li><Link href="/tack">Tack till bidragsgivare</Link></li>
              <li style={{ marginTop: '0.75rem', color: '#666', fontSize: '0.8125rem' }}>
                Helt gratis. Inga annonser. Ingen registrering krävs — framsteg sparas lokalt i din webbläsare.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© {new Date().getFullYear()} Om-Tyska. Utvecklad för svenska studerande av tyska språket.</div>
          <div>Betydelse · Form · Funktion · Repetition</div>
        </div>
      </div>
    </footer>
  );
}
