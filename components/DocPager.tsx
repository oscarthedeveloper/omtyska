'use client';

import Link from 'next/link';
import { useGrammarMode } from '@/lib/grammar-mode';
import type { OrderedDoc } from '@/lib/content';
import { getNextLearningStep } from '@/lib/learning-path';

type Neighbour = OrderedDoc | null;

export default function DocPager({
  currentHref,
  lattsam,
  rigoros,
}: {
  currentHref: string;
  lattsam: { previous: Neighbour; next: Neighbour };
  rigoros: { previous: Neighbour; next: Neighbour };
}) {
  const [mode] = useGrammarMode();
  const { previous, next } = mode === 'lattsam' ? lattsam : rigoros;
  const nextStep = getNextLearningStep(currentHref);

  if (!previous && !next && !nextStep) return null;

  return (
    <nav
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 'var(--s-md)',
        marginTop: 'var(--s-xxl)',
        paddingTop: 'var(--s-lg)',
        borderTop: '1px solid var(--hairline)',
      }}
      aria-label="Föregående och nästa avsnitt"
    >
      {previous ? (
        <Link
          href={previous.href}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 'var(--s-md)',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--r-md)',
            textDecoration: 'none',
            color: 'var(--ink)',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
            ← Föregående i ämnet
          </span>
          <span style={{ fontWeight: 600 }}>{previous.label}</span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          href={next.href}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 'var(--s-md)',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--r-md)',
            textDecoration: 'none',
            color: 'var(--ink)',
            textAlign: 'right',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>
            Nästa i ämnet →
          </span>
          <span style={{ fontWeight: 600 }}>{next.label}</span>
        </Link>
      )}

      {nextStep && nextStep.href !== next?.href && (
        <Link
          href={nextStep.href}
          style={{
            gridColumn: '1 / -1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--s-md)',
            background: 'var(--block-cream)',
            border: '1px solid var(--hairline)',
            borderRadius: 'var(--r-md)',
            textDecoration: 'none',
            color: 'var(--ink)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                display: 'block',
              }}
            >
              Rekommenderad progression
            </span>
            <strong style={{ fontSize: '1rem' }}>
              Steg {nextStep.stepNumber}: {nextStep.title}
            </strong>
          </div>
          <span className="pillButton pillButton--primary">Fortsätt lärstigen →</span>
        </Link>
      )}
    </nav>
  );
}
