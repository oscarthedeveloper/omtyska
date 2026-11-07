import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Mdx from '@/components/mdx/Mdx';
import TableOfContents from '@/components/TableOfContents';
import LearningStepProgress from '@/components/learning/LearningStepProgress';
import MiniQuiz from '@/components/mdx/MiniQuiz';
import LessonHeader from '@/components/edition/LessonHeader';
import DocPager from '@/components/DocPager';
import { LEARNING_QUIZZES } from '@/data/learning-quizzes';
import { getAllDocs, getDocBySegments, getDocNeighbours, getRegistryLessons } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from './doc.module.css';

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  // Combine MDX docs and registry docs so that all slugs are pre-rendered
  const fromMdx = getAllDocs('docs').map(doc => ({ slug: doc.segments }));
  const fromRegistry = getRegistryLessons()
    .filter(l => l.section === 'docs')
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
  const doc = getDocBySegments('docs', slug);
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

export default async function DocPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getDocBySegments('docs', slug);
  if (!doc) notFound();

  const neighbours = getDocNeighbours('docs', doc.href);
  const quiz = LEARNING_QUIZZES[doc.href] || (doc.id ? LEARNING_QUIZZES[doc.id] : undefined);

  return (
    <main className={`${styles.layout} ${doc.id.startsWith('X') ? styles.dossier : ''}`}>
      <LessonHeader doc={doc} />
      <article className={styles.article}>
        {doc.contentLattsam ? (
          <>
            <div className={`${styles.content} mdxContent lattsam-only`}>
              <Mdx key={`${doc.href}-lattsam`} source={doc.contentLattsam} hideDrill={Boolean(quiz)} />
            </div>
            <div className={`${styles.content} mdxContent rigoros-only`}>
              <Mdx key={`${doc.href}-rigoros`} source={doc.content} hideDrill={Boolean(quiz)} />
            </div>
          </>
        ) : (
          <div className={`${styles.content} mdxContent`}>
            <Mdx key={doc.href} source={doc.content} hideDrill={Boolean(quiz)} />
          </div>
        )}

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

      <TableOfContents headings={doc.headings} headingsLattsam={doc.headingsLattsam} />
    </main>
  );
}
