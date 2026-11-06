import Link from 'next/link';
import type { Metadata } from 'next';
import { getRegistryCategories, getRegistryLessons } from '@/lib/content';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Grammatik — Alla ämnesområden och genomgångar',
  description:
    'Komplett katalog över alla 112 genomgångar i tysk grammatik: från kasus, artiklar och adjektiv till satsram, V2 och konjunktiv.',
  alternates: { canonical: '/grammatik' },
};

const COMPARISONS = [
  { label: 'dem eller den? (Dativ vs Ackusativ)', href: '/docs/kasus/ackusativ' },
  { label: 'im Park eller in den Park? (Växelprepositioner)', href: '/docs/prepositioner/vaxelprepositioner' },
  { label: 'ein guter eller der gute? (Adjektivändelser)', href: '/docs/adjektiv/blandad-bojning' },
  { label: 'weil eller deshalb? (Bisatsordföljd)', href: '/docs/syntax/ordfoljd-i-bisatser' },
  { label: 'haben eller sein i perfekt?', href: '/docs/tempus/perfekt' },
  { label: 'du musst nicht vs du darfst nicht', href: '/mer/mussen-sollen-durfen' },
];

export default function GrammatikPage() {
  const categories = getRegistryCategories();
  const lessons = getRegistryLessons();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className="eyebrow">Tysk grammatik</p>
        <h1 className={styles.title}>Alla grammatikområden</h1>
        <p className={styles.lead}>
          Här hittar du alla 100 huvudgenomgångar och 12 fördjupningar i tysk grammatik, strukturerade
          efter tyskans egna språkmönster.
        </p>
      </header>

      {/* Snabba jämförelser */}
      <section className={styles.quickComparisons} aria-label="Vanliga klurigheter och jämförelser">
        <p className="eyebrow" style={{ color: 'var(--muted)', margin: 0 }}>
          Snabbkoll: Vanliga frågor
        </p>
        <div className={styles.comparisonPills}>
          {COMPARISONS.map(c => (
            <Link key={c.label} href={c.href} className={styles.comparisonPill}>
              {c.label} →
            </Link>
          ))}
        </div>
      </section>

      {/* Kategorier & lektioner */}
      <section className={styles.categoriesGrid} aria-label="Ämnesområden">
        {categories.map(cat => {
          const catLessons = lessons.filter(l => l.id.startsWith(cat.id));
          return (
            <div key={cat.id} id={`kat-${cat.id}`} className={styles.categoryCard}>
              <div className={styles.categoryTitle}>
                <span>{cat.title}</span>
                <span className={styles.categoryCount}>{catLessons.length} lektioner</span>
              </div>

              <ul className={styles.lessonList}>
                {catLessons.map(lesson => (
                  <li key={lesson.id}>
                    <Link href={lesson.href} className={styles.lessonLink}>
                      <div>
                        <span className={styles.lessonId}>[{lesson.id}]</span>
                        <span>{lesson.title}</span>
                      </div>
                      {lesson.suggestedLevel && (
                        <span className={styles.lessonLevel}>{lesson.suggestedLevel}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </main>
  );
}
