'use client';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { getCompletedLessons,getQuizResults,getRepetitionItems } from '@/lib/storage';
import { LEARNING_STEPS } from '@/lib/learning-path';
import type { SavedQuizResult,RepetitionItem } from '@/lib/types';
import registry from '@/data/registry.json';
import styles from './page.module.css';
export default function FramstegPage(){
 const [completed,setCompleted]=useState<string[]>([]);const [quizzes,setQuizzes]=useState<Record<string,SavedQuizResult>>({});const [repetition,setRepetition]=useState<RepetitionItem[]>([]);
 useEffect(()=>{function update(){setCompleted(getCompletedLessons());setQuizzes(getQuizResults());setRepetition(getRepetitionItems());}update();window.addEventListener('omtyska:lesson-completed',update);window.addEventListener('omtyska:quiz-completed',update);return()=>{window.removeEventListener('omtyska:lesson-completed',update);window.removeEventListener('omtyska:quiz-completed',update);};},[]);
 const knownIds=new Set(registry.lessons.map(l=>l.id));const read=completed.filter(id=>knownIds.has(id));const passed=Object.values(quizzes).filter(q=>q.passed).length;const next=LEARNING_STEPS.find(s=>!completed.includes(s.id));const readLessons=registry.lessons.filter(l=>completed.includes(l.id));
 return <main className={styles.book}>
  <div className={styles.running}><span>OM TYSKA / PERSONLIG STUDIEBOK</span><span>Läsning / Övning / Återkomst</span></div>
  <div className={styles.spread}>
   <section className={styles.left}><p className={styles.label}>Fältanteckningar / Din läsning</p><h1>Studieboken.</h1><p className={styles.intro}>Det du har läst. Det du har prövat. Det du vill återvända till.</p><p className={styles.privacy}>Dina framsteg sparas lokalt i den här webbläsaren.</p><dl className={styles.figures}><div><dt>Lästa genomgångar</dt><dd>{read.length}<small> / {registry.lessons.length} i registret</small></dd></div><div><dt>Klarade övningar</dt><dd>{passed}</dd></div><div><dt>I repetitionskön</dt><dd>{repetition.length}</dd></div></dl>
    <section className={styles.next}><p className={styles.label}>Nästa blad</p>{next?<><h2>{String(next.stepNumber).padStart(2,'0')} / {next.title}</h2><p>{next.description}</p><Link href={next.href}>Fortsätt läsa ↗</Link></>:<><h2>Hela lärstigen är läst.</h2><Link href="/grammatik#fordjupning">Välj en fördjupning ↗</Link></>}</section>
   </section>
   <section className={styles.right}><div className={styles.indexHeading}><h2>Läsjournal</h2><span>{String(readLessons.length).padStart(2,'0')} NOTERINGAR</span></div>{readLessons.length?<ol className={styles.journal}>{readLessons.map(l=><li key={l.id}><span>{l.id}</span><Link href={l.href}>{l.title}</Link><span>✓ Läst</span></li>)}</ol>:<div className={styles.empty}><span aria-hidden="true">01 —</span><h3>Första anteckningen<br />börjar med en läsning.</h3><p>Markera en genomgång som läst, så dyker den upp i din läsjournal.</p><Link href={LEARNING_STEPS[0].href}>Till första steget →</Link></div>}
   <nav className={styles.links} aria-label="Fortsätt studera"><Link href="/larstig"><span>01</span>Hela studiekartan <span>↗</span></Link><Link href="/repetition"><span>02</span>Repetera ({repetition.length} frågor) <span>↗</span></Link><Link href="/grammatik"><span>03</span>Grammatikans innehåll <span>↗</span></Link></nav></section>
  </div><footer className={styles.folio}><span>OM TYSKA / STUDIEBOKEN</span><span>01 — 02</span></footer>
 </main>;
}
