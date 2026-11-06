import Link from 'next/link';
import styles from './GrammarLab.module.css';

type LessonLink = { href: string; label: string };

export function LessonIntro({
  goals,
  prerequisites = [],
  situation,
}: {
  goals: string[];
  prerequisites?: LessonLink[];
  situation?: string;
}) {
  return (
    <aside className={styles.intro} aria-label="Det här lär du dig">
      <p className="eyebrow">Det här lär du dig</p>
      {situation && (
        <p style={{ margin: '6px 0 10px', fontWeight: 500 }}>
          💡 <strong>Situation:</strong> {situation}
        </p>
      )}
      <ul>
        {goals.map(goal => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
      {prerequisites.length > 0 && (
        <p>
          <strong>Bra att kunna före:</strong>{' '}
          {prerequisites.map((link, i) => (
            <span key={link.href}>
              {i > 0 && ' · '}
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
        </p>
      )}
    </aside>
  );
}

export function RelatedLessons({
  links,
  lessons,
}: {
  links?: LessonLink[];
  lessons?: (LessonLink & { badge?: string })[];
}) {
  const items = links || lessons || [];
  return (
    <nav className={styles.related} aria-label="Relaterade genomgångar">
      <p className="eyebrow">Jämför och gå vidare</p>
      {items.map(link => (
        <Link key={link.href} href={link.href}>
          {link.label} →
        </Link>
      ))}
    </nav>
  );
}
