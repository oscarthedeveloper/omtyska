import Link from 'next/link';
import styles from './GrammarLab.module.css';

type LessonLink = { href: string; label?: string; title?: string };

export function LessonIntro({
  goals,
  objectives,
  prerequisites = [],
  situation,
}: {
  goals?: string[];
  objectives?: string[];
  prerequisites?: any[];
  situation?: string;
  [key: string]: any;
}) {
  const items = goals || objectives || [];
  return (
    <aside className={styles.intro} aria-label="Det här lär du dig">
      <p className="eyebrow">Det här lär du dig</p>
      {situation && (
        <p style={{ margin: '6px 0 10px', fontWeight: 500 }}>
          💡 <strong>Situation:</strong> {situation}
        </p>
      )}
      {items.length > 0 && (
        <ul>
          {items.map(goal => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      )}
      {prerequisites.length > 0 && (
        <p>
          <strong>Bra att kunna före:</strong>{' '}
          {prerequisites.map((link: any, i: number) => {
            const href = typeof link === 'string' ? `/docs/${link.toLowerCase()}` : (link.href || '#');
            const label = typeof link === 'string' ? link : (link.label || link.title || link.id || href);
            return (
              <span key={href + i}>
                {i > 0 && ' · '}
                <Link href={href}>{label}</Link>
              </span>
            );
          })}
        </p>
      )}
    </aside>
  );
}

export function RelatedLessons({
  links,
  lessons,
}: {
  links?: any[];
  lessons?: any[];
}) {
  const rawItems = links || lessons || [];
  const items = rawItems.map((item: any) => ({
    href: item.href,
    label: item.label || item.title || item.href,
  }));
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
