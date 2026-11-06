import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getRegistryCategories } from '@/lib/content';
import { siteConfig } from '@/site.config';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Om Tyska — en svensk ingång till det tyska',
  description: 'Upptäck det tyska språket. En öppen grammatika på svenska, med genomgångar, lärstig och övningar för en djupare förståelse.',
  alternates: { canonical: '/' },
};
const CHAPTERS: Record<string, string> = {
  G: 'Bokstäver, ljud och språkets första byggstenar.', S: 'Genus, artiklar och orden vi ger världen namn med.',
  K: 'Nominativ, ackusativ, dativ och genitiv.', A: 'Egenskaper, böjning och jämförelser.',
  R: 'Små ord som pekar, ersätter och binder samman.', V: 'Handling, tillstånd och verbens olika former.',
  T: 'Att uttrycka det som är, var och ska bli.', M: 'Möjligheter, önskningar och skilda perspektiv.',
  P: 'Plats, riktning, tid och ordens förbindelser.', Y: 'Meningens delar och deras inbördes ordning.',
  B: 'Tankar som möts och meningar som växer.', D: 'Grad, antal och det som nyanserar uttrycket.',
  E: 'Fördjupningar, nyanser och grammatiska begrepp.',
};
const QUESTIONS = [
  { title: 'Dem eller den?', text: 'Förstå vad kasus faktiskt gör.', href: '/docs/kasus/ackusativ', example: 'Ich sehe den Mann.' },
  { title: 'På plats eller på väg?', text: 'En liten ändelse. En annan betydelse.', href: '/docs/prepositioner/vaxelprepositioner', example: 'Im Park. In den Park.' },
  { title: 'Var tar verbet vägen?', text: 'Upptäck den tyska satsramen.', href: '/docs/syntax/satsram', example: 'Ich habe ein Buch gelesen.' },
];
export default function Home() {
  const categories = getRegistryCategories();
  return <div className={styles.page}>
    <div className={styles.editionLine}><span>Ett öppet verk för nyfikna</span><span lang="de">Sprache & Bildung</span></div>
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}><span aria-hidden="true">✳</span> Språket är början</p>
        <h1 id="home-title" className={styles.heroTitle}>Det tyska.<br />I alla dess<br /><em>former.</em></h1>
        <p className={styles.heroLead}>Ett språk att förstå. En värld att upptäcka. Om Tyska är din svenska ingång till det tyska — från den första meningen till språkets finaste nyanser.</p>
        <div className={styles.heroActions}><Link href="/grammatik" className={styles.primaryLink}>Utforska grammatiken <span aria-hidden="true">↗</span></Link><Link href="/larstig" className={styles.textLink}>Börja från början <span aria-hidden="true">→</span></Link></div>
        <p className={styles.heroNote}>Fritt tillgängligt. På svenska. För vetgiriga.</p>
      </div>
      <figure className={styles.heroArt}>
        <div className={styles.plateHeading}><span>OM TYSKA</span><span aria-hidden="true">FIG. I</span></div>
        <Image src="/brand/bildning-gravyr.webp" alt="Koboltblå gravyr av en klassisk byst, en öppen bok och en ekkvist." width={1122} height={1402} priority sizes="(max-width: 700px) 88vw, 44vw" className={styles.engraving} />
        <figcaption className={styles.caption}><span>Språk. Tanke. Bildning.</span><span aria-hidden="true">I — MMXXVI</span></figcaption>
      </figure>
    </section>
    <section className={styles.entryPaths} aria-label="Tre vägar in">
      <Link href="/larstig" className={styles.entry}><span className={styles.entryNumber}>I.</span><div><h2>Från första ordet</h2><p>Följ lärstigen, steg för steg.</p></div><span aria-hidden="true">↗</span></Link>
      <Link href="/grammatik" className={styles.entry}><span className={styles.entryNumber}>II.</span><div><h2>Slå upp & förstå</h2><p>Hitta regeln, exemplet och nyansen.</p></div><span aria-hidden="true">↗</span></Link>
      <Link href="#ovningar" className={styles.entry}><span className={styles.entryNumber}>III.</span><div><h2>Gör språket till ditt</h2><p>Öva, pröva och återvänd.</p></div><span aria-hidden="true">↗</span></Link>
    </section>
    <section className={styles.contents} aria-labelledby="contents-title">
      <div className={styles.sectionIntro}><p className={styles.sectionLabel}>01 / Grammatikan</p><h2 id="contents-title">Ordning i orden.<br /><em>Rum för nyanser.</em></h2><p>En grammatika att läsa från början eller återvända till. Här får formerna en förklaring och reglerna ett sammanhang.</p><Link href="/grammatik" className={styles.textLink}>Öppna hela grammatikan <span aria-hidden="true">→</span></Link><div className={styles.bookStamp} aria-hidden="true"><span>O T</span><small>SPRÅK & BILDNING</small></div></div>
      <div className={styles.chapterIndex}><div className={styles.indexHeading}><span>Innehållsförteckning</span><span>Ämne</span></div>{categories.map((c, i) => <Link href={`/grammatik#kat-${c.id}`} key={c.id} className={styles.chapter}><span className={styles.chapterNo}>{String(i + 1).padStart(2, '0')}</span><div><h3>{c.title}</h3><p>{CHAPTERS[c.id] ?? 'Språkets former och förbindelser.'}</p></div><span className={styles.chapterDots} aria-hidden="true" /><span className={styles.chapterArrow} aria-hidden="true">↗</span></Link>)}</div>
    </section>
    <section className={styles.questionsSection} aria-labelledby="questions-title">
      <div className={styles.sectionHeading}><div><p className={styles.sectionLabel}>02 / Små frågor, stora samband</p><h2 id="questions-title">Det börjar med ett <em>varför.</em></h2></div><Link href="/blog" className={styles.textLink}>Läs språkanteckningarna <span aria-hidden="true">→</span></Link></div>
      <div className={styles.questionsGrid}>{QUESTIONS.map((q, i) => <Link key={q.href} href={q.href} className={styles.question}><span className={styles.questionNumber}>0{i + 1}</span><p lang="de" className={styles.questionExample}>{q.example}</p><h3>{q.title}</h3><p>{q.text}</p><span className={styles.questionCta}>Läs förklaringen <span aria-hidden="true">↗</span></span></Link>)}</div>
    </section>
    <section className={styles.practice} id="ovningar" aria-labelledby="practice-title">
      <div className={styles.practiceIntro}><p className={styles.sectionLabel}>03 / Övning ger förtrogenhet</p><h2 id="practice-title">Från att veta<br />till att <em>kunna.</em></h2><p>Pröva det du har läst. Forma orden, bygg meningarna och låt förståelsen växa genom användning.</p><Link href="/repetition" className={styles.practiceLink}>Till dagens repetition <span aria-hidden="true">→</span></Link><span className={styles.practiceOrnament} aria-hidden="true">✳</span></div>
      <div className={styles.toolGrid}>{siteConfig.tools.map((tool, i) => <Link key={tool.id} href={tool.href} className={styles.tool}><div className={styles.toolTop}><span>0{i + 1} / {tool.tag}</span><span aria-hidden="true">↗</span></div><h3>{tool.title}</h3><p>{tool.description}</p></Link>)}</div>
    </section>
    <section className={styles.colophon} aria-label="Om Om Tyska"><span aria-hidden="true">✳</span><p>För språket.<br /><em>För bildningen.</em></p><div>En plats för det tyska.<br />Att upptäcka, förstå och återvända till.</div></section>
  </div>;
}
