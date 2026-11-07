import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllDocs, getRegistryCategories, getRegistryLessons } from '@/lib/content';
import type { DocMeta } from '@/lib/types';
import styles from './page.module.css';

export const metadata: Metadata = { title: 'Grammatikan — fullständig innehållsförteckning', description: 'Innehållsförteckning till Om Tyskas grammatika: grundläggande genomgångar, referens och avancerad fördjupning.', alternates: { canonical: '/grammatik' } };
export default function GrammatikPage() {
  const docs = [...getAllDocs('docs'), ...getAllDocs('mer')];
  const registry = getRegistryLessons();
  const byId = new Map(docs.map(d => [d.id, d]));
  const categories = getRegistryCategories();
  const advanced = docs.filter(d => d.id.startsWith('X'));
  const groups = new Map<string, DocMeta[]>();
  for (const d of advanced) { const key=d.categoryPath.slice(1).join(' / ') || d.category; groups.set(key,[...(groups.get(key) || []),d]); }
  function rows(items: DocMeta[]) { return <ol className={styles.lessons}>{items.map(d => <li key={d.id}><Link href={d.href}><span className={styles.lessonName}>{d.title}</span><span className={styles.dots} aria-hidden="true" /><span className={styles.level}>{d.suggestedLevels?.join('–')}</span><span className={styles.folio}>{d.id}</span></Link></li>)}</ol>; }
  return <main className={styles.page}>
    <header className={styles.header}><p>OM TYSKA<br />INNEHÅLL / REGISTER</p><div><h1>Grammatikan.</h1><p>Från första ljudet till språkets finaste nyanser.<br />{docs.length} genomgångar, ordnade efter ämne.</p></div><span className={styles.edition}>I — II<br />SV / DE</span></header>
    <nav className={styles.jump} aria-label="Hoppa till ämnesområde">{categories.map(c => <Link href={`#kat-${c.id}`} key={c.id}>{c.title}</Link>)}<Link href="#fordjupning">Avancerad fördjupning ↓</Link></nav>
    <div className={styles.volume}><span>DEL I</span><h2>Grunder, system & referens</h2><span>{docs.length-advanced.length} genomgångar</span></div>
    {categories.map((c,i) => { const items=registry.filter(l=>l.id.startsWith(c.id) && !l.id.startsWith('X')).flatMap(l=>{const d=byId.get(l.id);return d?[d]:[]});return <section key={c.id} id={`kat-${c.id}`} className={styles.chapter}><header><span>{String(i+1).padStart(2,'0')}</span><h3>{c.title}</h3></header>{rows(items)}</section>; })}
    <div className={styles.volume} id="fordjupning"><span>DEL II</span><h2>Fördjupning & analys</h2><span>{advanced.length} genomgångar</span></div>
    {[...groups].map(([title,items],i)=><section className={styles.chapter} key={title}><header><span>{String(i+categories.length+1).padStart(2,'0')}</span><h3>{title}</h3></header>{rows(items.sort((a,b)=>a.sidebar_position-b.sidebar_position))}</section>)}
    <footer className={styles.foot}><span>OM TYSKA / GRAMMATIKAN</span><Link href="/larstig">Vill du läsa i rekommenderad ordning? Följ lärstigen →</Link></footer>
  </main>;
}
