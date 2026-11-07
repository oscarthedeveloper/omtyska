'use client';
import Link from 'next/link';
import { useState } from 'react';
import { SYNTAX_EXERCISES } from '@/data/syntax-exercises';
import { checkSentenceOrder } from '@/lib/answering-policy';
import { scheduleRepetition } from '@/lib/storage';
import styles from './page.module.css';

const THEMES: Record<string, string> = {
  v2: 'Huvudsats (V2)',
  satsram: 'Satsramen',
  bisats: 'Bisats (Verbet sist)',
  fragor: 'Frågor'
};

type ThemeFilter = 'all' | 'v2' | 'satsram' | 'bisats';

export default function MeningsbyggetPage() {
  const [filter, setFilter] = useState<ThemeFilter>('all');
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; feedback: string } | null>(null);
  const [solved, setSolved] = useState<string[]>([]);

  const activeExercises = filter === 'all'
    ? SYNTAX_EXERCISES
    : SYNTAX_EXERCISES.filter((ex) => ex.theme === filter);

  const current = activeExercises[index] ?? activeExercises[0];
  const [chunks, setChunks] = useState<string[]>(() => [...SYNTAX_EXERCISES[0].chunks].reverse());

  function changeFilter(newFilter: ThemeFilter) {
    setFilter(newFilter);
    setIndex(0);
    const pool = newFilter === 'all'
      ? SYNTAX_EXERCISES
      : SYNTAX_EXERCISES.filter((ex) => ex.theme === newFilter);
    setChunks([...pool[0].chunks].reverse());
    setFeedback(null);
  }

  function move(idx: number, delta: number) {
    const target = idx + delta;
    if (target < 0 || target >= chunks.length) return;
    const next = [...chunks];
    [next[idx], next[target]] = [next[target], next[idx]];
    setChunks(next);
    setFeedback(null);
  }

  function check() {
    const result = checkSentenceOrder(chunks, current.acceptableOrders);
    setFeedback(result);
    if (result.isCorrect) {
      setSolved((previous) => (previous.includes(current.id) ? previous : [...previous, current.id]));
    } else {
      scheduleRepetition({
        id: `syntax:${current.id}`,
        sourceType: 'syntax',
        prompt: `Bygg: ${current.swedishMeaning}`,
        targetAnswer: current.acceptableOrders[0].join(' '),
        explanation: current.explanation
      });
    }
  }

  function next() {
    const nextIndex = (index + 1) % activeExercises.length;
    setIndex(nextIndex);
    setChunks([...activeExercises[nextIndex].chunks].reverse());
    setFeedback(null);
  }

  const solvedInPool = activeExercises.filter((ex) => solved.includes(ex.id));

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.running}>
          <Link href="/ovningar">OM TYSKA / VERKSTADEN</Link>
          <span>SYNTAX / ÖVNING 04</span>
        </div>
        <h1>
          Menings<span>bygget.</span>
        </h1>
        <p>Ord för ord. Led för led. Lär känna den tyska meningens konstruktion.</p>
        <div className={styles.principles}>
          <Link href="/docs/syntax/verb-pa-andra-plats">
            <span>01 /</span>
            <strong>Huvudsatsen</strong>
            <p>Se hur förfältet och det böjda verbet förhåller sig till varandra.</p>
          </Link>
          <Link href="/docs/syntax/satsram">
            <span>02 /</span>
            <strong>Satsramen</strong>
            <p>Hitta förbindelsen mellan den vänstra och den högra verbdelen.</p>
          </Link>
          <Link href="/docs/syntax/ordfoljd-i-bisatser">
            <span>03 /</span>
            <strong>Bisatsen</strong>
            <p>Undersök vad som händer med verbets placering efter ett bindeord.</p>
          </Link>
        </div>
      </header>
      <div className={styles.blueprint}>
        <section className={styles.workspace} aria-label="Ordna meningen">
          <div className={styles.workspaceMeta}>
            <span>BYGGYTA / {THEMES[current.theme] ?? current.theme}</span>
            <span>
              {String(index + 1).padStart(2, '0')} / {String(activeExercises.length).padStart(2, '0')}
            </span>
          </div>
          <p className={styles.label}>Utgångspunkt / Svenska</p>
          <h2>{current.swedishMeaning}</h2>
          <p className={styles.instruction}>{current.instruction}</p>
          <p className={styles.label}>Flytta fraserna med pilarna</p>
          <ol className={styles.chunks}>
            {chunks.map((chunk, i) => (
              <li key={`${index}-${chunk}`}>
                <span className={styles.position}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <button
                    type="button"
                    disabled={i === 0}
                    onClick={() => move(i, -1)}
                    aria-label={`Flytta ${chunk} åt vänster`}
                  >
                    ←
                  </button>
                  <span lang="de">{chunk}</span>
                  <button
                    type="button"
                    disabled={i === chunks.length - 1}
                    onClick={() => move(i, 1)}
                    aria-label={`Flytta ${chunk} åt höger`}
                  >
                    →
                  </button>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.sentence}>
            <span className={styles.label}>Din mening / Tyska</span>
            <p lang="de">{chunks.join(' ')}</p>
          </div>
          <div className={styles.controls}>
            <button type="button" onClick={check}>
              Kontrollera meningen ↗
            </button>
            {feedback ? (
              <button type="button" onClick={next}>
                {index < activeExercises.length - 1 ? 'Nästa mening →' : 'Börja om →'}
              </button>
            ) : null}
          </div>
        </section>
        <aside className={styles.inspector}>
          <div className={styles.specRow}>
            <span>Genomförda meningar</span>
            <strong>
              {solvedInPool.length} / {activeExercises.length}
            </strong>
          </div>
          <div className={styles.specRow}>
            <span>Aktuellt mönster</span>
            <strong>{THEMES[current.theme] ?? current.theme}</strong>
          </div>
          <div className={styles.filterBox}>
            <span className={styles.label}>Välj mönster</span>
            <div className={styles.filterGrid}>
              <button
                type="button"
                className={filter === 'all' ? `${styles.filterBtn} ${styles.filterBtnActive}` : styles.filterBtn}
                onClick={() => changeFilter('all')}
              >
                Blandat
              </button>
              <button
                type="button"
                className={filter === 'v2' ? `${styles.filterBtn} ${styles.filterBtnActive}` : styles.filterBtn}
                onClick={() => changeFilter('v2')}
              >
                Huvudsats
              </button>
              <button
                type="button"
                className={filter === 'satsram' ? `${styles.filterBtn} ${styles.filterBtnActive}` : styles.filterBtn}
                onClick={() => changeFilter('satsram')}
              >
                Satsramen
              </button>
              <button
                type="button"
                className={filter === 'bisats' ? `${styles.filterBtn} ${styles.filterBtnActive}` : styles.filterBtn}
                onClick={() => changeFilter('bisats')}
              >
                Bisats
              </button>
            </div>
          </div>
          {feedback ? (
            <div className={styles.feedback} aria-live="polite" aria-atomic="true">
              <span className={styles.label}>Återkoppling</span>
              <h3>{feedback.isCorrect ? 'Rätt ordföljd.' : 'Pröva en gång till.'}</h3>
              <p>{feedback.feedback}</p>
              <p>{current.explanation}</p>
            </div>
          ) : null}
          <div className={styles.inspectorFoot}>
            <span>ATT LÄSA VIDARE</span>
            <Link href="/docs/syntax/satsram">Satsramens uppbyggnad ↗</Link>
            <Link href="/repetition">Din repetitionskö ↗</Link>
          </div>
        </aside>
      </div>
      <footer className={styles.folio}>
        <span>OM TYSKA / MENINGSBYGGET</span>
        <span>Flytta. Pröva. Förstå.</span>
      </footer>
    </main>
  );
}
