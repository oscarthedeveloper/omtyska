'use client';

import { useState } from 'react';

type AudioButtonProps = {
  src?: string;
  text: string;
  ipa?: string;
  label?: string;
};

export default function AudioButton({ src, text, ipa, label }: AudioButtonProps) {
  const [playing, setPlaying] = useState(false);

  function play() {
    if (src) {
      const audio = new Audio(src);
      setPlaying(true);
      audio.onended = () => setPlaying(false);
      audio.onerror = () => {
        setPlaying(false);
        // Fallback to browser Web Speech API for German if local audio clip is not yet recorded
        speakWithBrowser(text);
      };
      audio.play().catch(() => speakWithBrowser(text));
    } else {
      speakWithBrowser(text);
    }
  }

  function speakWithBrowser(utterText: string) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(utterText);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      setPlaying(true);
      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 8px',
        background: 'var(--surface-soft)',
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--hairline)',
        margin: '2px 4px',
        verticalAlign: 'middle',
      }}
    >
      <button
        type="button"
        onClick={play}
        aria-label={`Lyssna på "${text}"`}
        title={`Lyssna på "${text}"`}
        style={{
          border: 0,
          background: 'var(--ink)',
          color: 'var(--inverse-ink)',
          borderRadius: 'var(--r-full)',
          width: 26,
          height: 26,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '0.75rem',
        }}
      >
        {playing ? '🔊' : '▶'}
      </button>
      <span lang="de" style={{ fontWeight: 600, fontSize: '0.9375rem' }}>
        {text}
      </span>
      {ipa && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: 'var(--muted)',
          }}
        >
          [{ipa}]
        </span>
      )}
      {label && <span style={{ fontSize: '0.75rem', color: '#666' }}>({label})</span>}
    </div>
  );
}
