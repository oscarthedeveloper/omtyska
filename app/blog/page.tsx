import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, formatDate } from '@/lib/content';
import styles from './page.module.css';
export const metadata: Metadata = {title:'Språkanteckningar — frågor, iakttagelser och förklaringar',description:'Resonerande artiklar om det tyska språket. Svenska fällor, grammatiska skillnader och frågor som förtjänar en närmare läsning.',alternates:{canonical:'/blog'}};
export default function BlogIndexPage(){
  const posts=getAllPosts();const featured=posts.find(p=>p.mainLessonId==='P03')||posts[0];
  return <main className={styles.page}>
    <header className={styles.masthead}><p>Språk, iakttagelser<br />och små upptäckter.</p><h1>Språk<span>anteckningar.</span></h1><p>Om Tyska<br />Journal / {posts.length} texter</p></header>
    <div className={styles.columns}>
      <section className={styles.feature} aria-labelledby="feature-title"><p className={styles.label}>Ur anteckningsboken</p>{featured?<><h2 id="feature-title"><Link href={featured.href}>{featured.title}</Link></h2><p className={styles.description}>{featured.description}</p><Link className={styles.read} href={featured.href}>Läs anteckningen ↗</Link></>:null}
        <figure className={styles.specimen}><span className={styles.specimenMeta}>TECKENSTUDIE / DET TYSKA ALFABETET</span><p lang="de">Ä ö ß</p><figcaption>Former att känna igen.<br /><Link href="/docs/grunder/alfabet">Till alfabetet och tecknen →</Link></figcaption></figure>
        <div className={styles.editorialNote}><h3>Stanna vid en fråga.</h3><p>Här får skillnaderna utrymme. Vad händer när ett ord byter ändelse, när verbet flyttar eller när svenskan leder tanken fel?</p><p>Välj en anteckning till höger och läs vidare i grammatikan när du vill se hela systemet.</p></div>
      </section>
      <section className={styles.index} aria-labelledby="index-title"><div className={styles.indexTop}><h2 id="index-title">Alla anteckningar</h2><span>REGISTER ↓</span></div><ol>{posts.map((post,i)=><li key={post.slug}><div className={styles.meta}><span>{String(i+1).padStart(2,'0')} / {post.mainLessonId}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div><h3><Link href={post.href}>{post.title} <span aria-hidden="true">↗</span></Link></h3><p>{post.description}</p></li>)}</ol></section>
    </div><footer className={styles.folio}><span>OM TYSKA / ANTECKNINGAR</span><span>Språket förtjänar en närmare läsning.</span></footer>
  </main>;
}
