'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LEARNING_PATH } from '@/lib/learning-path';
import { getCompletedLessons, getQuizResults } from '@/lib/storage';
import styles from './page.module.css';

export default function LarstigPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [quizzes, setQuizzes] = useState<Record<string, { passed: boolean }>>({});

  useEffect(() => {
    setCompleted(getCompletedLessons());
    setQuizzes(getQuizResults());

    function onUpdate() {
      setCompleted(getCompletedLessons());
      setQuizzes(getQuizResults());
    }

    window.addEventListener('omtyska:lesson-completed', onUpdate);
    window.addEventListener('omtyska:quiz-completed', onUpdate);
    return () => {
      window.removeEventListener('omtyska:lesson-completed', onUpdate);
      window.removeEventListener('omtyska:quiz-completed', onUpdate);
    };
  }, []);

  const totalSteps = 54;
  const completedCount = completed.length;
  const percent = Math.round((completedCount / totalSteps) * 100);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className="eyebrow">Rekommenderad studieväg</p>
        <h1 className={styles.title}>Lärstigen i 54 steg</h1>
        <p className={styles.lead}>
          Från första ljudet till självständigt meningsbygge. Följ den pedagogiska progressionen steg
          för steg med förkunskaper i logisk ordning.
        </p>

        <div
          style={{
            marginTop: '1.5rem',
            padding: '12px 18px',
            background: 'var(--surface-soft)',
            borderRadius: 'var(--r-md)',
            border: '1px solid var(--hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <strong>Dina framsteg:</strong> {completedCount} av {totalSteps} steg lästa ({percent}%)
          </div>
          <Link href="/framsteg" className="pillButton pillButton--secondary" style={{ minHeight: 36, padding: '4px 14px' }}>
            Detaljerad studieplan →
          </Link>
        </div>
      </header>

      {LEARNING_PATH.map(phase => (
        <section key={phase.id} className={styles.phaseBlock}>
          <div className={styles.phaseHeader}>
            <h2 className={styles.phaseTitle}>{phase.title}</h2>
            <p className={styles.phaseDesc}>{phase.description}</p>
          </div>

          <ol className={styles.stepList}>
            {phase.steps.map(step => {
              const isRead = completed.includes(step.id);
              const quizResult = quizzes[step.id] || quizzes[step.href];
              const isQuizPassed = quizResult?.passed;

              return (
                <li key={step.id}>
                  <Link
                    href={step.href}
                    className={`${styles.stepCard} ${isRead ? styles.stepCompleted : ''}`}
                  >
                    <span className={styles.stepNumber}>
                      {isRead ? '✓' : step.stepNumber}
                    </span>

                    <div className={styles.stepMain}>
                      <div className={styles.stepTitle}>
                        <span className={styles.stepLessonId}>[{step.id}]</span>
                        <span>{step.title}</span>
                      </div>
                      <div className={styles.stepDesc}>{step.description}</div>
                    </div>

                    <div className={styles.stepMeta}>
                      <span className={styles.levelTag}>{step.level}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                        {step.time}
                      </span>
                      {isQuizPassed && (
                        <span
                          title="Övning klar"
                          style={{ fontSize: '0.875rem' }}
                        >
                          ⭐
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </main>
  );
}
