import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, formatDate } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blogg — Pedagogiska djupdykningar och språkartiklar',
  description:
    'Läs våra språkartiklar om tysk grammatik: varför det heter dem Mann men den Mann, varför verbet hamnar sist efter weil, och typiska tyska falska vänner.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: 880, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Språkartiklar & Klurigheter</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Bloggen om tyska</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Korta, resonerande artiklar som reder ut tyskans mest spännande skillnader, typiska
          svenska fällor och vardagliga språkmönster.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-lg)' }}>
        {posts.map(post => (
          <article
            key={post.slug}
            style={{
              padding: 'var(--s-lg)',
              background: 'var(--canvas)',
              border: '1px solid var(--hairline)',
              borderRadius: 'var(--r-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              <span>{formatDate(post.date)}</span>
              {post.mainLessonId && <span>· Tillhör [{post.mainLessonId}]</span>}
            </div>
            <h2 style={{ fontSize: '1.4rem', margin: '4px 0' }}>
              <Link href={post.href} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ color: '#555', margin: '0 0 var(--s-xs)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
              {post.description}
            </p>
            <Link href={post.href} style={{ fontWeight: 600, fontSize: '0.875rem' }}>
              Läs artikeln →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
