import Link from 'next/link';
import type { Doc } from '@/lib/types';
import RigorosBanner from '@/components/RigorosBanner';
import SentencePlate from './SentencePlate';
import styles from './LessonHeader.module.css';
export default function LessonHeader({doc}: {doc:Doc}) {
  const advanced=doc.id.startsWith('X');
  return <header className={`${styles.header} ${advanced?styles.dossier:''}`}>
    <nav className={styles.running} aria-label="Brödsmulor"><Link href="/grammatik">Grammatikan</Link><span>{doc.categoryPath.join(' / ')}</span><span>{doc.id}</span></nav>
    <div className={styles.heading}>
      <div className={styles.title}>
        <p className={styles.label}>{advanced?'Fördjupning / Analys':'Genomgång / Tysk grammatik'}</p>
        {doc.titleLattsam && doc.titleLattsam!==doc.title?<><h1 className="lattsam-only">{doc.titleLattsam}</h1><h1 className="rigoros-only">{doc.title}</h1></>:<h1>{doc.title}</h1>}
      </div>
      <div className={styles.abstract}>
        {doc.descriptionLattsam?<><p className="lattsam-only">{doc.descriptionLattsam}</p><p className="rigoros-only">{doc.description}</p></>:<p>{doc.description}</p>}
        <dl><div><dt>Genomgång</dt><dd>{doc.id}</dd></div>{doc.suggestedLevels?.length?<div><dt>Orienterande nivå</dt><dd>{doc.suggestedLevels.join(' / ')}</dd></div>:null}</dl>
      </div>
    </div>
    {doc.id==='Y02'?<SentencePlate/>:null}
    {doc.rigoros?<RigorosBanner/>:null}
  </header>;
}
