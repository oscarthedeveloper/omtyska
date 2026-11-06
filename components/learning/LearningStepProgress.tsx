'use client';

import { useEffect, useState } from 'react';
import { getCompletedLessons, markLessonCompleted, unmarkLessonCompleted } from '@/lib/storage';

export default function LearningStepProgress({ lessonId }: { lessonId: string }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(getCompletedLessons().includes(lessonId));

    function onCompletedChange() {
      setCompleted(getCompletedLessons().includes(lessonId));
    }

    window.addEventListener('omtyska:lesson-completed', onCompletedChange);
    return () => window.removeEventListener('omtyska:lesson-completed', onCompletedChange);
  }, [lessonId]);

  function toggle() {
    if (completed) {
      unmarkLessonCompleted(lessonId);
    } else {
      markLessonCompleted(lessonId);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--s-md) var(--s-lg)',
        background: completed ? 'var(--block-mint)' : 'var(--surface-soft)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--r-md)',
        margin: 'var(--s-xl) 0',
      }}
    >
      <div>
        <strong style={{ display: 'block', fontSize: '0.9375rem' }}>
          {completed ? '✓ Du har markerat denna genomgång som läst' : 'Har du gått igenom lektionen?'}
        </strong>
        <span style={{ fontSize: '0.8125rem', color: '#555' }}>
          Läst-status sparas i din lokala studieplan och skiljs från dina övningsresultat.
        </span>
      </div>

      <button
        type="button"
        className={`pillButton ${completed ? 'pillButton--secondary' : 'pillButton--primary'}`}
        onClick={toggle}
      >
        {completed ? 'Ångra läst' : 'Markera som läst'}
      </button>
    </div>
  );
}
