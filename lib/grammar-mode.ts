'use client';

import { useEffect, useState } from 'react';
import type { ReadingMode } from './types';

export const GRAMMAR_MODE_EVENT = 'omtyska:grammar-mode';
export const GRAMMAR_MODE_STORAGE_KEY = 'omtyska_grammar_mode';

export function readGrammarMode(): ReadingMode {
  if (typeof window === 'undefined') return 'lattsam';
  try {
    const saved = localStorage.getItem(GRAMMAR_MODE_STORAGE_KEY);
    return saved === 'rigoros' ? 'rigoros' : 'lattsam';
  } catch {
    return 'lattsam';
  }
}

export function writeGrammarMode(mode: ReadingMode) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(GRAMMAR_MODE_STORAGE_KEY, mode);
  } catch {
    /* Ignore storage quotas */
  }
  document.documentElement.setAttribute('data-grammar-mode', mode);
  window.dispatchEvent(new CustomEvent(GRAMMAR_MODE_EVENT, { detail: mode }));
}

export function useGrammarMode(): [ReadingMode, (mode: ReadingMode) => void] {
  const [mode, setMode] = useState<ReadingMode>('lattsam');

  useEffect(() => {
    setMode(readGrammarMode());

    function onModeChange(event: Event) {
      if (
        event instanceof CustomEvent &&
        (event.detail === 'lattsam' || event.detail === 'rigoros')
      ) {
        setMode(event.detail);
      } else {
        setMode(readGrammarMode());
      }
    }

    window.addEventListener(GRAMMAR_MODE_EVENT, onModeChange);
    window.addEventListener('storage', onModeChange);
    return () => {
      window.removeEventListener(GRAMMAR_MODE_EVENT, onModeChange);
      window.removeEventListener('storage', onModeChange);
    };
  }, []);

  return [mode, writeGrammarMode];
}
