import Link from 'next/link';
import registry from '@/data/registry.json';
import styles from './GrammarLab.module.css';
type LessonReference = string | { href?:string; label?:string; id?:string; title?:string; badge?:string };
function resolveLesson(reference:LessonReference) {
 const id=typeof reference==='string'?reference:reference.id;
 const registered=id?registry.lessons.find(l=>l.id===id):undefined;
 if(registered)return {href:registered.href,label:`${registered.id}: ${registered.title}`};
 if(typeof reference==='string')return {label:reference,href:undefined};
 return {label:reference.label||reference.title||reference.id||reference.href||'Genomgång',href:reference.href};
}
export function LessonIntro({goals,objectives,prerequisites=[],situation}:{goals?:string[];objectives?:string[];prerequisites?:LessonReference[];situation?:string}){
 const learningGoals=goals||objectives||[];
 return <aside className={styles.intro} aria-label="Det här lär du dig"><p className="eyebrow">Det här lär du dig</p>{situation?<p className={styles.situation}>{situation}</p>:null}{learningGoals.length?<ul>{learningGoals.map(goal=><li key={goal}>{goal}</li>)}</ul>:null}{prerequisites.length?<p><strong>Bra att kunna före: </strong>{prerequisites.map((reference,i)=>{const l=resolveLesson(reference);return <span key={`${l.href||l.label}-${i}`}>{i?' · ':''}{l.href?<Link href={l.href}>{l.label}</Link>:l.label}</span>;})}</p>:null}</aside>;
}
export function RelatedLessons({links,lessons}:{links?:LessonReference[];lessons?:LessonReference[]}){
 const items=links||lessons||[];
 return <nav className={styles.related} aria-label="Relaterade genomgångar"><p className="eyebrow">Jämför och gå vidare</p>{items.map((reference,i)=>{const l=resolveLesson(reference);return l.href?<Link key={`${l.href}-${i}`} href={l.href}>{l.label} →</Link>:<span key={`${l.label}-${i}`}>{l.label}</span>;})}</nav>;
}
