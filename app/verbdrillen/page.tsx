'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GERMAN_VERBS } from '@/data/verbs';
import { MODES, VERB_COLUMNS, buildVerbTable, supportsImperative, matchesVerbForm } from '@/data/verb-tables';
import type { VerbModus } from '@/data/verb-tables';
import { cellKey } from '@/data/table-puzzles';
import { saveQuizResult, scheduleRepetition } from '@/lib/storage';
import InflectionTable from '@/components/exercises/InflectionTable';
import styles from './page.module.css';

const TYPES = [{id:'alla',label:'Alla verb'},{id:'svagt',label:'Svaga verb'},{id:'starkt',label:'Starka verb'},{id:'blandat',label:'Blandade verb'},{id:'reflexivt',label:'Reflexiva verb'},{id:'modalverb',label:'Modalverb'},{id:'hjalpverb',label:'Hjälpverb'}];
export default function VerbdrillenPage(){
  const [filter,setFilter]=useState('alla');
  const [verbId,setVerbId]=useState('bringen');
  const [modus,setModus]=useState<VerbModus>('indikativ');
  const [tense,setTense]=useState('presens');
  const [method,setMethod]=useState<'write'|'pieces'>('write');
  const [started,setStarted]=useState(false);
  const [round,setRound]=useState(0);
  const verbs=GERMAN_VERBS.filter(v=>(filter==='alla'||filter===v.type)&&(modus!=='imperativ'||supportsImperative(v)));
  const verb=verbs.find(v=>v.infinitive===verbId)||verbs[0];
  const table=buildVerbTable(verb,modus,tense);
  const modeLabel=MODES.find(m=>m.id===modus)!.label;
  function changeMode(next:VerbModus){
    setModus(next);setTense(tense==='alla'?'alla':VERB_COLUMNS[next][0].id);setStarted(false);
    if(next==='imperativ'&&filter==='modalverb')setFilter('alla');
  }
  function check(correct:number,total:number,answers:Record<string,string>){
    const id=`verbtabell:${verb.infinitive}:${modus}:${tense}`;
    saveQuizResult(id,correct,total);
    table.answers.forEach((row,r)=>row.forEach((expected,c)=>{
      if(matchesVerbForm(answers[cellKey(r,c)]||'',table.alternatives[r][c]))return;
      scheduleRepetition({id:`verbtabell:${verb.infinitive}:${modus}:${table.columns[c].id}:${table.rows[r]}`,sourceType:'verb',prompt:`${verb.infinitive} · ${modeLabel} · ${table.columns[c].label} · ${table.rows[r]}`,targetAnswer:expected,acceptableAlternatives:table.alternatives[r][c].slice(1),explanation:`${verb.infinitive}: ${table.rows[r]}, ${modeLabel}, ${table.columns[c].label}.`});
    }));
  }
  function open(){setRound(n=>n+1);setStarted(true);}
  return <main className={styles.page}>
    <header className={styles.header}>
      <div className={styles.running}><Link href="/ovningar">OM TYSKA / VERKSTADEN</Link><span>VERB / PERSON / TEMPUS / MODUS</span></div>
      <div className={styles.heading}><h1>Verb<span>drillen.</span></h1><div><p>Ett verb.<br/>Alla dess former.</p><p className={styles.intro}>Fyll böjningstabellen person för person. Välj ett tempus i taget eller arbeta med alla former i valt modus samtidigt.</p></div></div>
      <div className={styles.setup}>
        <fieldset><legend>01 / Välj verb</legend><div className={styles.selects}><label>Verbtyp<select value={filter} onChange={e=>{setFilter(e.target.value);setStarted(false);}}>{TYPES.map(t=><option key={t.id} value={t.id} disabled={modus==='imperativ'&&t.id==='modalverb'}>{t.label}</option>)}</select></label><label>Verb<select value={verb.infinitive} onChange={e=>{setVerbId(e.target.value);setStarted(false);}}>{verbs.map(v=><option key={v.infinitive} value={v.infinitive}>{v.infinitive} — {v.swedish.replace(/\s*\([^)]*\)/g,'')}</option>)}</select></label></div></fieldset>
        <fieldset><legend>02 / Modus</legend><div className={styles.choices}>{MODES.map(m=><button key={m.id} type="button" aria-pressed={modus===m.id} onClick={()=>changeMode(m.id)}>{m.label}</button>)}</div></fieldset>
        <fieldset><legend>03 / Tempus och former</legend><div className={styles.choices}><button type="button" aria-pressed={tense==='alla'} onClick={()=>{setTense('alla');setStarted(false);}}>Alla {modus==='indikativ'||modus==='konjunktiv1'?'tempus':'former'} samtidigt</button>{VERB_COLUMNS[modus].map(t=><button key={t.id} type="button" aria-pressed={tense===t.id} onClick={()=>{setTense(t.id);setStarted(false);}}>{t.label}</button>)}</div></fieldset>
        <fieldset><legend>04 / Arbetssätt</legend><div className={styles.choices}><button type="button" aria-pressed={method==='write'} onClick={()=>{setMethod('write');setStarted(false);}}>Skriv formerna</button><button type="button" aria-pressed={method==='pieces'} onClick={()=>{setMethod('pieces');setStarted(false);}}>Dra pusselbitar</button></div></fieldset>
        {modus==='imperativ'?<p className={styles.note}>Imperativ övas för du och ihr samt som artig uppmaning med Sie. Modalverb ingår inte i detta urval.</p>:modus==='konjunktiv2'?<p className={styles.note}>Gegenwart och Vergangenheit övas som egna former. Würde-formen är en separat omskrivning, inte ett ytterligare tempus.</p>:null}
        <button type="button" className={styles.start} onClick={open}>{started?'Börja om med tom tabell ↗':'Öppna tom tabell ↗'}</button>
      </div>
    </header>
    {started?<InflectionTable key={`${verb.infinitive}:${modus}:${tense}:${method}:${round}`} table={table} title={`${verb.infinitive} / ${modeLabel}`} mode={method} onCheck={check}/>:<section className={styles.empty} aria-label="Innan du börjar"><span>PERSONER LODRÄTT / TEMPUS OCH FORMER VÅGRÄTT</span><p>Välj ovan. Böj själv.</p></section>}
    <footer className={styles.folio}><span>OM TYSKA / VERBDRILLEN</span><Link href="/tabellpusslet">Till artikelpusslet ↗</Link></footer>
  </main>;
}
