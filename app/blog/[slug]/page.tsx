import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Mdx from '@/components/mdx/Mdx';
import TableOfContents from '@/components/TableOfContents';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from '@/app/docs/[...slug]/doc.module.css';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} · Blogg`,
    description: post.description,
    alternates: { canonical: post.href },
    openGraph: {
      title: `${post.title} · ${siteConfig.name}`,
      description: post.description,
      url: post.href,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <div className={styles.layout}>
        <article className={styles.article}>
          <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
            <Link href="/blog">Blogg</Link>
            <span aria-hidden="true"> / </span>
            <span>{post.title}</span>
          </nav>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
            Publicerad {formatDate(post.date)}
          </div>

          <h1>{post.title}</h1>
          {post.description && <p className={styles.lead}>{post.description}</p>}

          <div className={`${styles.content} mdxContent`}>
            <Mdx key={post.href} source={post.content} />
          </div>

          <div style={{ marginTop: 'var(--s-xxl)', paddingTop: 'var(--s-lg)', borderTop: '1px solid var(--hairline)' }}>
            <Link href="/blog" className="pillButton pillButton--secondary">
              ← Tillbaka till alla bloggartiklar
            </Link>
          </div>
        </article>

        <TableOfContents headings={post.headings} />
      </div>
    </div>
  );
}
