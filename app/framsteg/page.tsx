'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCompletedLessons, getQuizResults, getRepetitionItems } from '@/lib/storage';
import { getRegistryLessons } from '@/lib/content';
import { LEARNING_STEPS } from '@/lib/learning-path';

export default function FramstegPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [quizzes, setQuizzes] = useState<Record<string, any>>({});
  const [repetitionItems, setRepetitionItems] = useState<any[]>([]);

  useEffect(() => {
    setCompleted(getCompletedLessons());
    setQuizzes(getQuizResults());
    setRepetitionItems(getRepetitionItems());
  }, []);

  const totalLessons = 112;
  const readCount = completed.length;
  const passedQuizzesCount = Object.values(quizzes).filter((q: any) => q.passed).length;

  const nextStep = LEARNING_STEPS.find(s => !completed.includes(s.id));

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Min studieplan</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Mina framsteg</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Dina resultat och lästa lektioner sparas lokalt i din webbläsare. Du behöver inget konto och
          ingen information skickas till någon extern server.
        </p>
      </header>

      {/* Summeringskort */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--s-md)',
          marginBottom: 'var(--s-xxl)',
        }}
      >
        <div style={{ padding: 'var(--s-lg)', background: 'var(--surface-soft)', borderRadius: 'var(--r-md)', border: '1px solid var(--hairline)' }}>
          <span className="eyebrow">Lästa lektioner</span>
          <p style={{ fontSize: '2.25rem', fontWeight: 600, margin: '6px 0 0' }}>
            {readCount} <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--muted)' }}>/ {totalLessons}</span>
          </p>
        </div>

        <div style={{ padding: 'var(--s-lg)', background: 'var(--surface-soft)', borderRadius: 'var(--r-md)', border: '1px solid var(--hairline)' }}>
          <span className="eyebrow">Klarade övningar</span>
          <p style={{ fontSize: '2.25rem', fontWeight: 600, margin: '6px 0 0' }}>
            {passedQuizzesCount}
          </p>
        </div>

        <div style={{ padding: 'var(--s-lg)', background: 'var(--surface-soft)', borderRadius: 'var(--r-md)', border: '1px solid var(--hairline)' }}>
          <span className="eyebrow">I repetitionskön</span>
          <p style={{ fontSize: '2.25rem', fontWeight: 600, margin: '6px 0 0' }}>
            {repetitionItems.length}
          </p>
        </div>
      </div>

      {/* Nästa rekommenderade steg */}
      {nextStep && (
        <section
          style={{
            padding: 'var(--s-lg)',
            background: 'var(--block-cream)',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--r-lg)',
            marginBottom: 'var(--s-xxl)',
          }}
        >
          <p className="eyebrow">Nästa rekommenderade steg</p>
          <h2 style={{ margin: '4px 0 6px', fontSize: '1.5rem' }}>
            Steg {nextStep.stepNumber}: [{nextStep.id}] {nextStep.title}
          </h2>
          <p style={{ margin: '0 0 1rem', color: '#555' }}>{nextStep.description}</p>
          <Link href={nextStep.href} className="pillButton pillButton--primary">
            Fortsätt till lektionen →
          </Link>
        </section>
      )}

      {/* Snabblänkar */}
      <section style={{ display: 'flex', gap: 'var(--s-md)', flexWrap: 'wrap' }}>
        <Link href="/larstig" className="pillButton pillButton--secondary">
          Öppna hela lärstigen (54 steg)
        </Link>
        <Link href="/repetition" className="pillButton pillButton--secondary">
          Öva repetition ({repetitionItems.length} frågor)
        </Link>
        <Link href="/grammatik" className="pillButton pillButton--secondary">
          Se alla grammatikområden
        </Link>
      </section>
    </main>
  );
}
