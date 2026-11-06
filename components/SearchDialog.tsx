'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useGrammarMode } from '@/lib/grammar-mode';
import styles from './SearchDialog.module.css';

type SearchRecord = {
  id?: string;
  t: string; // title
  tl?: string; // light title
  d: string; // description
  dl?: string; // light description
  h: string; // href
  c: string; // category
  k: string; // kind
  s: string[]; // subheadings
  b: string; // body
  bl?: string; // light body
  r?: boolean; // rigorous
};

type Hit = SearchRecord & { score: number; excerpt: string };

function fold(s: string) {
  return (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function excerptAround(body: string, term: string) {
  if (!body) return '';
  const i = fold(body).indexOf(term);
  if (i < 0) return body.slice(0, 140).trim();
  const start = Math.max(0, i - 45);
  return (start > 0 ? '…' : '') + body.slice(start, start + 160).trim() + '…';
}

function search(records: SearchRecord[], raw: string, mode: 'lattsam' | 'rigoros'): Hit[] {
  const terms = fold(raw)
    .split(/\s+/)
    .filter(t => t.length > 0);
  if (terms.length === 0) return [];

  const hits: Hit[] = [];
  for (const r of records) {
    if (mode === 'lattsam' && r.r) continue;

    const searchTitle = mode === 'lattsam' && r.tl ? r.tl : r.t;
    const title = fold(searchTitle);
    const desc = fold(mode === 'lattsam' && r.dl ? r.dl : r.d);
    const subs = fold((r.s || []).join(' '));
    const body = fold(mode === 'lattsam' && r.bl ? r.bl : r.b);
    const id = fold(r.id || '');

    let score = 0;
    let matchedAll = true;

    for (const term of terms) {
      let s = 0;
      if (title === term) s += 150;
      else if (title.startsWith(term)) s += 80;
      else if (title.includes(term)) s += 50;

      if (id === term) s += 120;
      if (subs.includes(term)) s += 30;
      if (desc.includes(term)) s += 20;
      if (body.includes(term)) s += 10;

      // German synonym mappings
      if (term === 'ackusativ' && (title.includes('akkusativ') || body.includes('akkusativ'))) s += 40;
      if (term === 'preteritum' && (title.includes('prateritum') || body.includes('prateritum'))) s += 40;
      if (term === 'satsram' && (title.includes('satzklammer') || body.includes('satzklammer'))) s += 40;

      if (s === 0) matchedAll = false;
      score += s;
    }

    if (!matchedAll || score === 0) continue;
    if (r.k === 'grammatik') score += 5;
    hits.push({
      ...r,
      score,
      excerpt: excerptAround(r.b || r.d, terms[0]),
    });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, 15);
}

export default function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [records, setRecords] = useState<SearchRecord[] | null>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [mode] = useGrammarMode();

  useEffect(() => {
    if (!open || records || failed) return;
    let cancelled = false;
    fetch('/search-index.json')
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(data => {
        if (!cancelled) setRecords(data as SearchRecord[]);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [open, records, failed]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(t);
    }
    setQuery('');
    setActive(0);
  }, [open]);

  const hits = records && query.trim() ? search(records, query, mode) : [];

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(prev => (hits.length > 0 ? (prev + 1) % hits.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(prev => (hits.length > 0 ? (prev - 1 + hits.length) % hits.length : 0));
      } else if (e.key === 'Enter' && hits[active]) {
        e.preventDefault();
        window.location.href = hits[active].h;
        onClose();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, hits, active, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Sök i Om Tyska"
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Sök på svenska eller tyska (t.ex. dativ, V2, weil, dem/den)..."
            className={styles.input}
            aria-autocomplete="list"
          />
          <button type="button" onClick={onClose} className={styles.close}>
            Stäng (Esc)
          </button>
        </div>

        <div className={styles.results} role="listbox">
          {query.trim().length > 0 && hits.length === 0 && (
            <p className={styles.empty}>Inga träffar för &rdquo;{query}&rdquo;.</p>
          )}

          {hits.map((hit, idx) => (
            <Link
              key={hit.h + idx}
              href={hit.h}
              onClick={onClose}
              className={`${styles.hit} ${idx === active ? styles.hitActive : ''}`}
              role="option"
              aria-selected={idx === active}
            >
              <div className={styles.hitCategory}>
                <span>{hit.c}</span>
                {hit.id && <span>[{hit.id}]</span>}
              </div>
              <div className={styles.hitTitle}>{mode === 'lattsam' && hit.tl ? hit.tl : hit.t}</div>
              {hit.excerpt && <div className={styles.hitExcerpt}>{hit.excerpt}</div>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
