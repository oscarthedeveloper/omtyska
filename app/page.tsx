import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllDocs, getRegistryCategories } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Om Tyska — språk, tanke och bildning',
  description: 'En svensk ingång till det tyska. Utforska grammatikan, följ lärstigen och pröva språket i övningsverkstaden.',
  alternates: { canonical: '/' },
};
const ENTRIES = [
  { n: '01', title: 'Grammatikan', subtitle: 'Läs. Slå upp. Förstå.', text: 'Från språkets första byggstenar till dess finaste förgreningar.', href: '/grammatik' },
  { n: '02', title: 'Lärstigen', subtitle: 'En väg genom språket.', text: '54 sammanhängande steg, från de första ljuden till egna meningar.', href: '/larstig' },
  { n: '03', title: 'Verkstaden', subtitle: 'Pröva det du vet.', text: 'Böj verb, välj kasus och bygg meningar. Gör förståelsen till färdighet.', href: '/ovningar' },
  { n: '04', title: 'Anteckningar', subtitle: 'Stanna vid en fråga.', text: 'Språkliga iakttagelser, svenska fällor och tyska egenheter.', href: '/blog' },
];
export default function Home() {
  const count = getAllDocs('docs').length + getAllDocs('mer').length;
  return <main className={styles.page}>
    <section className={styles.portal} aria-labelledby="portal-title">
      <div className={styles.frontispiece}>
        <div className={styles.intro}><p className={styles.label}>Om Tyska / Ett öppet verk</p><h1 id="portal-title">Ett språk.<br />En värld att <em>förstå.</em></h1></div>
        <figure className={styles.plate}><Image src="/images/brand/wagner.png" alt="Porträtt av Richard Wagner i gravyrstil." width={1254} height={1254} priority sizes="(max-width: 760px) 80vw, 40vw" /><figcaption>Fig. I / Språk & bildning</figcaption></figure>
      </div>
      <nav className={styles.destinations} aria-label="Fyra ingångar till Om Tyska">{ENTRIES.map(e => <Link key={e.n} href={e.href} className={styles.destination}><div className={styles.entryTop}><span>{e.n} /</span><h2>{e.title}</h2><span aria-hidden="true">↗</span></div><div><p className={styles.subtitle}>{e.subtitle}</p><p>{e.text}</p></div></Link>)}</nav>
    </section>
    <section className={styles.register} aria-labelledby="register-title"><div><p className={styles.label}>I / Språkets delar</p><h2 id="register-title">En grammatika<br />att återvända till.</h2><p>{count} genomgångar. Från grunder till fördjupning.</p><Link href="/grammatik">Till hela innehållsförteckningen →</Link></div><div className={styles.subjects}>{getRegistryCategories().map((c,i) => <Link href={`/grammatik#kat-${c.id}`} key={c.id}><span>{String(i+1).padStart(2,'0')}</span><span>{c.title}</span><span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className={styles.workshop} id="verkstaden" aria-labelledby="workshop-title"><div className={styles.workshopTitle}><p className={styles.label}>II / Verkstaden</p><h2 id="workshop-title">Kunskap i arbete.</h2><Link href="/repetition">Dagens repetition ↗</Link></div><div className={styles.tools}>{siteConfig.tools.map((t,i) => <Link key={t.id} href={t.href}><span>0{i+1} / {t.tag}</span><h3>{t.title} <span aria-hidden="true">↗</span></h3><p>{t.description}</p></Link>)}</div></section>
  </main>;
}
