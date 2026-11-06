'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useId, useState } from 'react';
import { getLearningStep, getNextLearningStep } from '@/lib/learning-path';
import { saveQuizResult, scheduleRepetition } from '@/lib/storage';
import styles from './MiniQuiz.module.css';

export type MiniQuizQuestion = {
  id?: string;
  context?: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  feedback?: string[]; // option-specific feedback!
};

type Props = {
  title?: string;
  lessonId?: string;
  questions: MiniQuizQuestion[];
};

export default function MiniQuiz({
  title = 'Snabbkoll · Testa dina kunskaper',
  lessonId,
  questions,
}: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState<MiniQuizQuestion[]>([]);
  const [finished, setFinished] = useState(false);
  const questionId = useId();
  const pathname = usePathname();
  const step = getLearningStep(pathname);
  const nextStep = getNextLearningStep(pathname);

  if (!questions || questions.length === 0) return null;

  const question = questions[index];
  const isCorrect = selected === question.answer;

  function choose(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);

    if (optionIndex === question.answer) {
      setScore(v => v + 1);
    } else {
      setMissedQuestions(v => (v.some(q => q.prompt === question.prompt) ? v : [...v, question]));
      // Schedule into spaced repetition queue
      scheduleRepetition({
        id: question.id || `quiz:${lessonId || pathname}:${index}`,
        sourceType: 'quiz',
        lessonId: lessonId || step?.id,
        prompt: question.prompt,
        targetAnswer: question.options[question.answer],
        explanation: question.feedback?.[optionIndex] || question.explanation,
      });
    }
  }

  function next() {
    if (selected === null) return;
    if (index === questions.length - 1) {
      const finalScore = isCorrect ? score : score; // already counted in choose
      const resolvedLessonId = lessonId || step?.id || pathname;
      saveQuizResult(resolvedLessonId, score, questions.length);
      setFinished(true);
      return;
    }
    setIndex(v => v + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setMissedQuestions([]);
    setFinished(false);
  }

  if (finished) {
    const passed = score >= Math.ceil(questions.length * 0.7);
    return (
      <section className={styles.quiz} aria-labelledby={questionId}>
        <div className={styles.topline}>
          <p className={styles.eyebrow} id={questionId}>
            Resultat · {title}
          </p>
        </div>

        <p className={styles.resultScore}>
          {score} av {questions.length} rätt
        </p>

        <p className={styles.resultText}>
          {passed
            ? 'Snyggt jobbat! Du har koll på kärnreglerna och deras tillämpning i praktiken.'
            : 'Bra försök! Gå gärna igenom exemplen och förklaringarna en gång till.'}
          {missedQuestions.length > 0 && (
            <span>
              {' '}
              Dina felaktiga svar har sparats i <strong>Repetition</strong> så att du kan träna på
              dem igen.
            </span>
          )}
        </p>

        <div className={styles.resultActions}>
          <button type="button" className="pillButton pillButton--secondary" onClick={restart}>
            Gör om snabbkollen
          </button>

          {nextStep ? (
            <Link href={nextStep.href} className="pillButton pillButton--primary">
              Nästa i lärstigen: {nextStep.title} →
            </Link>
          ) : (
            <Link href="/framsteg" className="pillButton pillButton--primary">
              Se mina framsteg →
            </Link>
          )}

          {missedQuestions.length > 0 && (
            <Link href="/repetition" className="pillButton pillButton--secondary">
              Öva repetition →
            </Link>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.quiz} aria-labelledby={questionId}>
      <div className={styles.topline}>
        <p className={styles.eyebrow} id={questionId}>
          {title}
        </p>
        <p className={styles.counter}>
          Fråga {index + 1} av {questions.length}
        </p>
      </div>

      {question.context && <p className={styles.context}>💡 {question.context}</p>}

      <h3 className={styles.prompt}>{question.prompt}</h3>

      <div className={styles.options} role="radiogroup" aria-label="Svarsalternativ">
        {question.options.map((option, optIdx) => {
          const letter = String.fromCharCode(65 + optIdx);
          const wasChosen = selected === optIdx;
          const isThisCorrect = optIdx === question.answer;

          let btnClass = styles.option;
          if (selected !== null) {
            if (isThisCorrect) btnClass += ` ${styles.optionCorrect}`;
            else if (wasChosen) btnClass += ` ${styles.optionWrong}`;
            else btnClass += ` ${styles.optionDim}`;
          }

          return (
            <button
              key={optIdx}
              type="button"
              className={btnClass}
              onClick={() => choose(optIdx)}
              disabled={selected !== null}
              aria-checked={wasChosen}
              role="radio"
            >
              <span className={styles.optionLetter}>{letter}</span>
              <span lang="de">{option}</span>
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div
          className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}
          role="status"
          aria-live="polite"
        >
          <p className={styles.feedbackHeading}>
            {isCorrect ? '✅ Helt rätt!' : '⚠️ Inte riktigt rätt:'}
          </p>
          <p lang="sv">
            {question.feedback && question.feedback[selected]
              ? question.feedback[selected]
              : question.explanation}
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <button type="button" className="pillButton pillButton--primary" onClick={next}>
              {index < questions.length - 1 ? 'Nästa fråga →' : 'Se resultat →'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
