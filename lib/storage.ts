/**
 * Safe local storage manager with versioning and fallback.
 */
import { siteConfig } from '../site.config';
import type { ReadingMode, SavedQuizResult, RepetitionItem } from './types';

const PREFIX = siteConfig.storagePrefix;
const SCHEMA_VERSION = siteConfig.schemaVersion;

function isStorageAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const testKey = `${PREFIX}__test__`;
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

// In-memory fallback if localStorage is unavailable
const memoryFallback: Record<string, string> = {};

function getItem(key: string): string | null {
  if (isStorageAvailable()) {
    try {
      return window.localStorage.getItem(PREFIX + key);
    } catch {
      return memoryFallback[key] || null;
    }
  }
  return memoryFallback[key] || null;
}

function setItem(key: string, value: string): void {
  if (isStorageAvailable()) {
    try {
      window.localStorage.setItem(PREFIX + key, value);
      return;
    } catch {
      memoryFallback[key] = value;
      return;
    }
  }
  memoryFallback[key] = value;
}

/* -------------------------------------------------------------
 * Reading Mode: 'lattsam' vs 'rigoros'
 * ----------------------------------------------------------- */

export function getReadingMode(): ReadingMode {
  const stored = getItem('reading_mode');
  if (stored === 'rigoros' || stored === 'lattsam') {
    return stored;
  }
  return siteConfig.defaultReadingMode;
}

export function setReadingMode(mode: ReadingMode): void {
  setItem('reading_mode', mode);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('omtyska:reading-mode-changed', { detail: { mode } }));
  }
}

/* -------------------------------------------------------------
 * Completed / Read Lessons (Läst-status skild från övningsresultat)
 * ----------------------------------------------------------- */

export function getCompletedLessons(): string[] {
  const raw = getItem('completed_lessons');
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function markLessonCompleted(lessonId: string): void {
  const current = getCompletedLessons();
  if (!current.includes(lessonId)) {
    const next = [...current, lessonId];
    setItem('completed_lessons', JSON.stringify(next));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('omtyska:lesson-completed', { detail: { lessonId, completed: true } })
      );
    }
  }
}

export function unmarkLessonCompleted(lessonId: string): void {
  const current = getCompletedLessons();
  const next = current.filter(id => id !== lessonId);
  setItem('completed_lessons', JSON.stringify(next));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('omtyska:lesson-completed', { detail: { lessonId, completed: false } })
    );
  }
}

/* -------------------------------------------------------------
 * Quiz & Drill Results
 * ----------------------------------------------------------- */

export function getQuizResults(): Record<string, SavedQuizResult> {
  const raw = getItem('quiz_results');
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveQuizResult(lessonId: string, score: number, total: number): void {
  const results = getQuizResults();
  const prev = results[lessonId] || { attempts: 0 };
  const passed = score >= Math.ceil(total * 0.7);

  results[lessonId] = {
    lessonId,
    score,
    total,
    attempts: (prev.attempts || 0) + 1,
    lastAttemptAt: new Date().toISOString(),
    passed,
  };

  setItem('quiz_results', JSON.stringify(results));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('omtyska:quiz-completed', { detail: results[lessonId] })
    );
  }
}

/* -------------------------------------------------------------
 * Spaced Repetition Queue
 * ----------------------------------------------------------- */

export function getRepetitionItems(): RepetitionItem[] {
  const raw = getItem('repetition_queue');
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function scheduleRepetition(item: Omit<RepetitionItem, 'intervalDays' | 'consecutiveSuccesses' | 'nextReviewDate'>): void {
  const items = getRepetitionItems();
  const existingIndex = items.findIndex(i => i.id === item.id);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextReviewDate = tomorrow.toISOString().split('T')[0];

  if (existingIndex >= 0) {
    // Reset to interval 1 on error
    items[existingIndex] = {
      ...items[existingIndex],
      ...item,
      intervalDays: 1,
      consecutiveSuccesses: 0,
      nextReviewDate,
    };
  } else {
    items.push({
      ...item,
      intervalDays: 1,
      consecutiveSuccesses: 0,
      nextReviewDate,
    });
  }

  setItem('repetition_queue', JSON.stringify(items));
}

export function recordRepetitionReview(itemId: string, wasSuccess: boolean): void {
  const items = getRepetitionItems();
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  const today = new Date().toISOString().split('T')[0];
  item.lastReviewedDate = today;

  if (wasSuccess) {
    item.consecutiveSuccesses += 1;
    // Spaced intervals: 1 -> 3 -> 7 -> 14 -> 30 days
    if (item.intervalDays === 1) item.intervalDays = 3;
    else if (item.intervalDays === 3) item.intervalDays = 7;
    else if (item.intervalDays === 7) item.intervalDays = 14;
    else item.intervalDays = 30;

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + item.intervalDays);
    item.nextReviewDate = nextDate.toISOString().split('T')[0];
  } else {
    item.consecutiveSuccesses = 0;
    item.intervalDays = 1;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    item.nextReviewDate = tomorrow.toISOString().split('T')[0];
  }

  setItem('repetition_queue', JSON.stringify(items));
}

export function getDueRepetitionItems(): RepetitionItem[] {
  const items = getRepetitionItems();
  const today = new Date().toISOString().split('T')[0];
  return items.filter(i => i.nextReviewDate <= today);
}
