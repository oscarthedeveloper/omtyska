import Link from 'next/link';
import type { Metadata } from 'next';
import HomeContrastDemo from '@/components/HomeContrastDemo';
import { getRegistryCategories } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Om Tyska — gratis digital tysk grammatik på svenska',
  description:
    'En modern och pedagogisk tysk grammatika: 12 ämnesområden, 54 steg i lärstigen, kasusdrill, meningsbygge, verbdrill och 750 glosor.',
  alternates: { canonical: '/' },
};

const MARQUEE = [
  'Nominativ',
  'Ackusativ',
  'Dativ',
  'Genitiv',
  'V2-regeln',
  'Satzklammer',
  'Växelprepositioner',
  'Separerbara verb',
  'Svag böjning',
  'Blandad böjning',
  'Stark böjning',
  'Perfekt & Präteritum',
  'Konjunktiv II',
  'Weil & Dass',
  'Passiv',
];

export default function Home() {
  const categories = getRegistryCategories();
  const run = [...MARQUEE, ...MARQUEE];

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Digital grammatika · Tyska</p>
        <h1 className={styles.heroHeading}>
          Tysk grammatik,
          <br />
          förklarad på svenska.
        </h1>
        <div className={styles.heroBottom}>
          <p className={styles.heroLead}>
            Förstå hur kasus, ordföljd och böjning samverkar. Skrivet för svensktalande elever i
            högstadiet, gymnasiet och vuxna självstuderande — gratis och utan konto.
          </p>
          <div className={styles.heroActions}>
            <Link href="/larstig" className="pillButton pillButton--primary">
              Börja lärstigen →
            </Link>
            <Link href="/kasusdrillen" className="pillButton pillButton--secondary">
              Öva kasus
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {run.map((word, i) => (
            <span key={i} className={styles.marqueeItem}>
              {word}
            </span>
          ))}
        </div>
      </div>

      <main className={styles.main}>
        {/* Tre tydliga vägar in */}
        <section className={styles.pathsSection} aria-labelledby="paths-heading">
          <p className="eyebrow" id="paths-heading">
            Välj din väg in
          </p>
          <div className={styles.pathsGrid}>
            <Link href="/larstig" className={styles.pathCard}>
              <div>
                <span className={styles.pathNumber}>Väg 01</span>
                <h3 className={styles.pathTitle}>Jag börjar från början</h3>
                <p className={styles.pathDesc}>
                  Följ den pedagogiska lärstigen med 54 steg från alfabet och ljud till avancerade
                  samband.
                </p>
              </div>
              <span className={styles.pathCta}>Starta lärstigen (Steg 1) →</span>
            </Link>

            <Link href="/grammatik" className={styles.pathCard}>
              <div>
                <span className={styles.pathNumber}>Väg 02</span>
                <h3 className={styles.pathTitle}>Jag har fastnat på något</h3>
                <p className={styles.pathDesc}>
                  Slå upp konkreta frågor som dem/den, ein guter/der gute, weil/deshalb eller
                  haben/sein.
                </p>
              </div>
              <span className={styles.pathCta}>Sök och jämför ämnen →</span>
            </Link>

            <Link href="/verbdrillen" className={styles.pathCard}>
              <div>
                <span className={styles.pathNumber}>Väg 03</span>
                <h3 className={styles.pathTitle}>Jag vill öva</h3>
                <p className={styles.pathDesc}>
                  Träna med våra fyra specialiserade drillverktyg eller repetera dina tidigare fel.
                </p>
              </div>
              <span className={styles.pathCta}>Öppna övningsverktygen →</span>
            </Link>
          </div>
        </section>

        {/* Live tysk betydelsekontrast */}
        <section className={styles.blockCream}>
          <p className="eyebrow">Pedagogisk kontrast</p>
          <h2 style={{ margin: '4px 0 8px' }}>Rörelse betyder inte automatiskt ackusativ</h2>
          <p style={{ margin: 0, color: '#444', maxWidth: '60ch' }}>
            En av de vanligaste missuppfattningarna i tysk grammatik är att all rörelse ger
            ackusativ. Pröva skillnaden nedan:
          </p>
          <HomeContrastDemo />
        </section>

        {/* Grammatikens 12 huvudkategorier */}
        <section aria-labelledby="cat-heading">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow" id="cat-heading">
                Grammatiköversikt
              </p>
              <h2 style={{ margin: 0 }}>Tyskans struktur i 12 områden</h2>
            </div>
            <Link href="/grammatik">Se hela ämneskatalogen →</Link>
          </div>

          <ol className={styles.indexList}>
            {categories.map((cat, idx) => (
              <li key={cat.id}>
                <Link href={`/grammatik#kat-${cat.id}`} className={styles.indexRow}>
                  <span className={styles.indexNum}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.indexName}>{cat.title}</span>
                  <span className={styles.indexTag}>{cat.lessons} genomgångar</span>
                  <span className={styles.indexArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* De 4 interaktiva verktygen */}
        <section aria-labelledby="tools-heading">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow" id="tools-heading">
                Träna praktiskt
              </p>
              <h2 style={{ margin: 0 }}>Fyra specialiserade övningsmotorer</h2>
            </div>
          </div>

          <div className={styles.toolsGrid}>
            {siteConfig.tools.map(tool => (
              <Link key={tool.id} href={tool.href} className={styles.toolCard}>
                <div>
                  <span className="eyebrow" style={{ color: 'var(--muted)' }}>
                    {tool.tag}
                  </span>
                  <h3 style={{ margin: '6px 0 8px', fontSize: '1.25rem' }}>{tool.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: '#555', margin: 0 }}>
                    {tool.description}
                  </p>
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>Öppna {tool.title} →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
