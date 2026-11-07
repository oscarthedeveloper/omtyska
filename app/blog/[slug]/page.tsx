import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Mdx from '@/components/mdx/Mdx';
import TableOfContents from '@/components/TableOfContents';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from './page.module.css';

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


  const contrasts: Record<string,[string,string]>={K03:['dem Mann','den Mann'],T02:['ich habe','ich bin'],A03:['ein guter','der gute'],E03:['muss nicht','darf nicht'],V09:['zu','dass'],P03:['im Park','in den Park'],Y04:['Hauptsatz','weil …'],E01:['bekommen','werden'],T08:['seit','presens'],R01:['Sie','sie / ihr']};
  const contrast=contrasts[post.mainLessonId||''];
  return <main className={styles.page}>
    <nav className={styles.running} aria-label="Brödsmulor"><Link href="/blog">← Språkanteckningar</Link><span>Om Tyska / {post.mainLessonId||'Journal'}</span><time dateTime={post.date}>{formatDate(post.date)}</time></nav>
    <header className={styles.spread}>
      <div className={styles.titlePage}><p className={styles.label}>En fråga / En närmare läsning</p><h1>{post.title}</h1><p className={styles.lead}>{post.description}</p><a className={styles.start} href="#texten">Läs anteckningen ↓</a></div>
      <div className={styles.bluePage}><span className={styles.blueMeta}>SPRÅKLIGA SKILLNADER / SV — DE</span><div lang="de">{contrast?<><span>{contrast[0]}</span><i aria-hidden="true">/</i><span>{contrast[1]}</span></>:<span>Språket i detalj.</span>}</div><span className={styles.blueFoot}>Se vad som skiljer. Förstå vad det betyder.</span></div>
    </header>
    <div className={styles.reading} id="texten"><aside className={styles.margin}><span className={styles.label}>Läsanteckning</span><p>{post.tags.join(' / ')}</p><TableOfContents headings={post.headings}/><Link href="/blog">Alla anteckningar ↗</Link></aside><article className={`${styles.prose} mdxContent`}><Mdx key={post.href} source={post.content}/><div className={styles.endnote}><span>OM TYSKA / SPRÅKANTECKNINGAR</span><Link href="/blog">Till registret →</Link></div></article></div>
  </main>;
}
