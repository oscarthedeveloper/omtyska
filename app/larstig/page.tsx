'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LEARNING_PATH, LEARNING_STEPS } from '@/lib/learning-path';
import { getCompletedLessons, getQuizResults } from '@/lib/storage';
import styles from './page.module.css';
export default function LarstigPage() {
  const [completed,setCompleted]=useState<string[]>([]);
  const [quizzes,setQuizzes]=useState<Record<string,{passed:boolean}>>({});
  useEffect(()=>{function update(){setCompleted(getCompletedLessons());setQuizzes(getQuizResults());}update();window.addEventListener('omtyska:lesson-completed',update);window.addEventListener('omtyska:quiz-completed',update);return()=>{window.removeEventListener('omtyska:lesson-completed',update);window.removeEventListener('omtyska:quiz-completed',update);};},[]);
  const count=LEARNING_STEPS.filter(s=>completed.includes(s.id)).length;
  const percent=Math.round(count/LEARNING_STEPS.length*100);
  return <main className={styles.page}>
    <header className={styles.header}><div><p className={styles.label}>OM TYSKA / STUDIEKARTA</p><h1>Lärstigen.</h1><p>Från språkets första ljud till självständigt meningsbygge.</p></div><dl><div><dt>Omfattning</dt><dd>{LEARNING_STEPS.length} steg / {LEARNING_PATH.length} faser</dd></div><div><dt>Din läsning</dt><dd>{count} av {LEARNING_STEPS.length} steg · {percent}%</dd></div><div><dt>Studieform</dt><dd>I egen takt</dd></div></dl></header>
    <div className={styles.mapLayout}>
      <div className={styles.map}><div className={styles.origin}><span>START</span><p>En väg in i grammatiken</p></div>
      {LEARNING_PATH.map((phase,i)=><section id={phase.id} key={phase.id} className={styles.phase}>
        <header className={styles.phaseHeader}><span className={styles.phaseNumber}>0{i+1}</span><h2>{phase.title.replace(/^Fas \d+: /,'')}</h2><p>{phase.description}</p><span className={styles.phaseCount}>{phase.steps.filter(s=>completed.includes(s.id)).length} / {phase.steps.length} lästa</span></header>
        <ol className={styles.branch}>{phase.steps.map(step=>{const read=completed.includes(step.id);const passed=(quizzes[step.id]||quizzes[step.href])?.passed;return <li key={step.id}><Link href={step.href} className={`${styles.node} ${read?styles.read:''}`}><div className={styles.nodeMeta}><span>STEG {String(step.stepNumber).padStart(2,'0')}</span><span>{step.level}</span></div><h3>{step.title}</h3><div className={styles.nodeFoot}><span>{step.time}</span><span>{read?'✓ Läst':step.id}{passed?' · Övning klar':''}</span></div></Link></li>;})}</ol>
      </section>)}
      <div className={styles.destination}><span>FORTSÄTT UTFORSKA</span><Link href="/grammatik#fordjupning">Till den avancerade grammatikan ↗</Link></div></div>
      <aside className={styles.legend}><p className={styles.label}>Så läser du kartan</p><p>Faserna bygger vidare på varandra. Läs stegen i nummerordning och återvänd när du behöver.</p><div className={styles.key}><span>01</span> Inte markerad som läst</div><div className={styles.key}><span className={styles.keyRead}>✓</span> Läst genomgång</div><nav aria-label="Hoppa till fas">{LEARNING_PATH.map((phase,i)=><a key={phase.id} href={`#${phase.id}`}><span>0{i+1}</span>{phase.title.replace(/^Fas \d+: /,'')}</a>)}</nav><Link className={styles.progress} href="/framsteg">Öppna din studiebok ↗</Link></aside>
    </div><footer className={styles.folio}><span>OM TYSKA / LÄRSTIGEN</span><span>Studiekarta / 01</span></footer>
  </main>;
}
