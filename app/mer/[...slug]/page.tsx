import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Mdx from '@/components/mdx/Mdx';
import TableOfContents from '@/components/TableOfContents';
import LearningStepProgress from '@/components/learning/LearningStepProgress';
import MiniQuiz from '@/components/mdx/MiniQuiz';
import RigorosBanner from '@/components/RigorosBanner';
import DocPager from '@/components/DocPager';
import { LEARNING_QUIZZES } from '@/data/learning-quizzes';
import { getAllDocs, getDocBySegments, getDocNeighbours, getRegistryLessons } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from '@/app/docs/[...slug]/doc.module.css';

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  const fromMdx = getAllDocs('mer').map(doc => ({ slug: doc.segments }));
  const fromRegistry = getRegistryLessons()
    .filter(l => l.section === 'mer')
    .map(l => ({ slug: l.slug.replace(/^\/+/, '').split('/') }));

  const seen = new Set<string>();
  const out: Params[] = [];
  for (const p of [...fromMdx, ...fromRegistry]) {
    const key = p.slug.join('/');
    if (!seen.has(key)) {
      seen.add(key);
      out.push(p);
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySegments('mer', slug);
  if (!doc) return {};
  const title = doc.seoTitle || doc.title;
  const description = doc.seoDescription || doc.description;
  return {
    title,
    description,
    alternates: { canonical: doc.href },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url: doc.href,
      type: 'article',
    },
  };
}

export default async function MerDocPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getDocBySegments('mer', slug);
  if (!doc) notFound();

  const neighbours = getDocNeighbours('mer', doc.href);
  const quiz = LEARNING_QUIZZES[doc.href] || (doc.id ? LEARNING_QUIZZES[doc.id] : undefined);

  return (
    <div className={styles.layout}>
      <article className={styles.article}>
        <nav className={styles.breadcrumbs} aria-label="Brödsmulor">
          <Link href="/grammatik">Grammatik</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/mer">Mer grammatik</Link>
          <span aria-hidden="true"> / </span>
          <span>[{doc.id}]</span>
        </nav>

        <h1>{doc.title}</h1>
        {doc.rigoros && <RigorosBanner />}
        {doc.description && <p className={styles.lead}>{doc.description}</p>}

        <div className={`${styles.content} mdxContent`}>
          <Mdx key={doc.href} source={doc.content} hideDrill={Boolean(quiz)} />
        </div>

        {quiz && (
          <MiniQuiz
            key={doc.href}
            lessonId={doc.id}
            title={quiz.title}
            questions={quiz.questions}
          />
        )}

        <LearningStepProgress lessonId={doc.id} />

        <DocPager
          currentHref={doc.href}
          lattsam={neighbours.lattsam}
          rigoros={neighbours.rigoros}
        />
      </article>

      <TableOfContents headings={doc.headings} />
    </div>
  );
}
