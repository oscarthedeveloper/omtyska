'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { CASES, TABLE_PUZZLES, cellKey, isPuzzleAnswerCorrect, isPuzzleCellActive, makePieces, placePiece, shuffledPieces } from '@/data/table-puzzles';
import type { Piece, Placements } from '@/data/table-puzzles';
import styles from './page.module.css';

type Mode = 'write' | 'pieces';
const byGroup = (group: string) => TABLE_PUZZLES.filter(p => p.group === group);
const categories = [
  { id: 'artiklar', label: 'Artiklar', sections: [
    { label: 'Artiklar', puzzles: TABLE_PUZZLES.filter(p => ['bestamd','obestamd','kein'].includes(p.id)) },
  ] },
  { id: 'demonstrativa', label: 'Demonstrativa', sections: [
    { label: 'Enkla demonstrativa', puzzles: byGroup('demonstrativa') },
    { label: 'Sammansatta demonstrativa', puzzles: byGroup('sammansatta') },
  ] },
  { id: 'fragande-relativa', label: 'Fråge- och relativpronomen', sections: [
    { label: 'Frågande', puzzles: byGroup('fragande') },
    { label: 'Relativpronomen', puzzles: byGroup('relativa') },
  ] },
  { id: 'obestamda', label: 'Obestämda och mängdord', sections: [
    { label: 'Fördelande och obestämda', puzzles: byGroup('indefinita') },
    { label: 'Pluralord', puzzles: byGroup('pluralord') },
    { label: 'Självständiga obestämda', puzzles: byGroup('sjalvstandiga') },
  ] },
  { id: 'possessiva', label: 'Possessiva', sections: [
    { label: 'Artikelord — med substantiv', puzzles: byGroup('possessiva') },
    { label: 'Självständiga — utan substantiv', puzzles: byGroup('sjalvstandiga-possessiva') },
  ] },
  { id: 'n', label: 'N-deklination', sections: [
    { label: 'Substantiv', puzzles: TABLE_PUZZLES.filter(p => p.id.startsWith('n-')) },
  ] },
];
export default function TablePuzzle(){
  const [category,setCategory]=useState('artiklar');
  const [variants,setVariants]=useState<Record<string,string>>({});
  const [mode,setMode]=useState<Mode>('write');
  const [started,setStarted]=useState(false);
  const [values,setValues]=useState<Record<string,string>>({});
  const [placements,setPlacements]=useState<Placements>({});
  const [pieces,setPieces]=useState<Piece[]>([]);
  const [selected,setSelected]=useState<string|null>(null);
  const [checked,setChecked]=useState(false);
  const [message,setMessage]=useState('');
  const dragRef=useRef<{id:string;x:number;y:number;moved:boolean}|null>(null);
  const suppressClick=useRef(false);
  const [dragVisual,setDragVisual]=useState<{text:string;x:number;y:number}|null>(null);
  const workRef=useRef<HTMLElement>(null);
  const activeCategory=categories.find(c=>c.id===category)!;
  const options=activeCategory.sections.flatMap(section=>section.puzzles);
  const puzzle=options.find(p=>p.id===variants[category])||options[0];
  const total=makePieces(puzzle).length;
  const piecesById=new Map(pieces.map(p=>[p.id,p.text]));
  const used=new Set(Object.values(placements));
  function answer(key:string){return mode==='write'?(values[key]||''):(piecesById.get(placements[key])||'');}
  const filled=puzzle.answers.flatMap((row,r)=>row.flatMap((_,c)=>isPuzzleCellActive(puzzle,c)?[answer(cellKey(r,c))]:[])).filter(v=>v.trim()).length;
  const correct=puzzle.answers.reduce((sum,row,r)=>sum+row.filter((expected,c)=>isPuzzleAnswerCorrect(puzzle,r,c,answer(cellKey(r,c)))).length,0);
  function reset(active=false){setValues({});setPlacements({});setSelected(null);setChecked(false);setMessage('');setPieces(active?shuffledPieces(puzzle):[]);setStarted(active);}
  function start(){reset(true);requestAnimationFrame(()=>workRef.current?.scrollIntoView({behavior:'auto',block:'start'}));}
  function put(key:string,id:string){
    if(!piecesById.has(id))return;
    setPlacements(prev=>placePiece(prev,key,id));setSelected(null);setChecked(false);
    setMessage(`Pusselbit placerad: ${CASES[Number(key.split('-')[0])]}, ${puzzle.columns[Number(key.split('-')[1])]}.`);
  }
  function dragHandlers(id:string|undefined){
    return {
      onPointerDown(e:ReactPointerEvent<HTMLButtonElement>){
        if(!id || e.button!==0)return;
        suppressClick.current=false;
        dragRef.current={id,x:e.clientX,y:e.clientY,moved:false};
        e.currentTarget.setPointerCapture(e.pointerId);
      },
      onPointerMove(e:ReactPointerEvent<HTMLButtonElement>){
        const drag=dragRef.current;if(!drag)return;
        if(Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>6)drag.moved=true;
        if(drag.moved)setDragVisual({text:piecesById.get(drag.id)||'',x:e.clientX,y:e.clientY});
      },
      onPointerUp(e:ReactPointerEvent<HTMLButtonElement>){
        const drag=dragRef.current;dragRef.current=null;setDragVisual(null);
        if(!drag?.moved)return;
        suppressClick.current=true;
        const cell=document.elementFromPoint(e.clientX,e.clientY)?.closest<HTMLElement>('[data-puzzle-cell]');
        if(cell && workRef.current?.contains(cell))put(cell.dataset.puzzleCell!,drag.id);
      },
      onPointerCancel(){dragRef.current=null;setDragVisual(null);},
    };
  }
  function wasDrag(){if(!suppressClick.current)return false;suppressClick.current=false;return true;}
  function clear(key:string){setPlacements(prev=>{const next={...prev};delete next[key];return next;});setSelected(null);setChecked(false);setMessage('Pusselbiten har återvänt till samlingen.');}
  return <main className={styles.page}>
    <header className={styles.header}>
      <div className={styles.running}><Link href="/ovningar">OM TYSKA / VERKSTADEN</Link><span>BÖJNING / TABELLSTUDIE</span></div>
      <div className={styles.heading}><h1>Tabell<span>pusslet.</span></h1><div><p>{category==='n'||puzzle.columns.length===1?'Kasus möter numerus.':'Kasus möter genus.'}<br/>Du fyller i formerna.</p><p className={styles.intro}>Välj en tabell och ett arbetssätt. Bygg sedan upp böjningsmönstret, ruta för ruta.</p></div></div>
      <div className={styles.setup}>
        <fieldset><legend>01 / Välj innehåll</legend>
          <div className={styles.categoryChoices}>{categories.map(c=><button key={c.id} type="button" aria-pressed={category===c.id} onClick={()=>{setCategory(c.id);reset();}}>{c.label}</button>)}</div>
          <label className={styles.tableChoice}>
            <span>Tabell</span>
            <select aria-label="Tabell" value={puzzle.id} onChange={e=>{setVariants(prev=>({...prev,[category]:e.target.value}));reset();}}>
              {activeCategory.sections.map(section=><optgroup key={section.label} label={section.label}>{section.puzzles.map(p=><option key={p.id} value={p.id}>{p.lemma||p.title}</option>)}</optgroup>)}
            </select>
          </label>
        </fieldset>
        <fieldset><legend>02 / Välj arbetssätt</legend><div className={styles.choices}><button type="button" aria-pressed={mode==='write'} onClick={()=>{setMode('write');reset();}}>Skriv formerna</button><button type="button" aria-pressed={mode==='pieces'} onClick={()=>{setMode('pieces');reset();}}>Dra pusselbitar</button></div></fieldset>
        <button className={styles.start} type="button" onClick={start}>{started?'Börja om med tom tabell ↗':'Öppna tom tabell ↗'}</button>
      </div>
    </header>
    {started?<section ref={workRef} className={styles.work} aria-label="Tabellens arbetsyta">
      <div className={styles.board}>
        <div className={styles.boardTop}><h2>{puzzle.title}{puzzle.lemma?` / ${puzzle.lemma}`:''}</h2><span>{filled} / {total} ifyllda</span></div>
        {puzzle.note?<p className={styles.instruction}>{puzzle.note}</p>:null}{puzzle.disabledColumns?.length?<p className={styles.instruction}>Den här tabellen har endast singular. Pluralkolumnen ingår inte i övningen.</p>:null}{puzzle.group==='possessiva'?<p className={styles.instruction}>Träna artikelord framför ett substantiv. Kolumnerna avser det som ägs.</p>:null}<p id="table-instruction" className={styles.instruction}>{category==='n'?'Fyll i både artikel och substantiv i varje ruta. ':''}{mode==='write'?'Skriv formen som passar rad och kolumn. Använd – när en form saknas.':'Dra en bit till en ruta, eller välj en bit och tryck på rutan. Identiska former är utbytbara.'}</p>
        <div className={styles.tableScroll}><table aria-describedby="table-instruction"><caption className="srOnly">{puzzle.title}{puzzle.lemma?`: ${puzzle.lemma}`:''}</caption><thead><tr><td/><>{puzzle.columns.map(col=><th scope="col" key={col}>{col}</th>)}</></tr></thead><tbody>{CASES.map((casus,r)=><tr key={casus}><th scope="row">{casus}</th>{puzzle.columns.map((col,c)=>{
          const key=cellKey(r,c);if(!isPuzzleCellActive(puzzle,c))return <td key={key} className={styles.unavailable} aria-label={`${casus}, ${col}: används inte`}>–</td>;const text=answer(key);const status=checked?(isPuzzleAnswerCorrect(puzzle,r,c,text)?'Rätt':text?'Fel':'Tom'):'';
          return <td key={key} className={status==='Rätt'?styles.correct:status?styles.wrong:undefined}>
            {mode==='write'?<input aria-label={`${casus}, ${col}`} aria-invalid={checked&&status!=='Rätt'} lang="de" autoCapitalize="none" autoComplete="off" spellCheck={false} value={values[key]||''} onChange={e=>{setValues(prev=>({...prev,[key]:e.target.value}));setChecked(false);}}/>:<button type="button" className={styles.cell} aria-label={`${casus}, ${col}${text?`: ${text}`:', tom ruta'}`} aria-pressed={Boolean(placements[key]&&selected===placements[key])} data-puzzle-cell={key} data-movable={Boolean(placements[key])} draggable={false} {...dragHandlers(placements[key])} onClick={()=>{if(wasDrag())return;if(selected)put(key,selected);else if(placements[key]){setSelected(placements[key]);setMessage('Välj en ny ruta, eller återlämna den valda biten.');}}} onKeyDown={e=>{if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();clear(key);}}}><span lang="de">{text||'\u00a0'}</span></button>}
            {status?<span className={styles.cellStatus}>{status==='Rätt'?'✓':'×'} {status}</span>:null}
          </td>;
        })}</tr>)}</tbody></table></div>
        <div className={styles.controls}><button type="button" onClick={()=>{setChecked(true);setMessage('');}}>Kontrollera tabellen ↗</button><button type="button" onClick={()=>reset(true)}>Töm och börja om</button></div>
        <div role="status" className={styles.feedback}>{checked?<><strong>{correct===total?'Hela tabellen är rätt.':`${correct} av ${total} rutor är rätt.`}</strong><p>{correct===total?'Välj en annan tabell eller pröva det andra arbetssättet.':'Rätt, fel och tomma rutor är markerade. Du kan ändra svaren och kontrollera igen.'}</p></>:message||'Fyll tabellen och kontrollera när du är redo.'}</div>
      </div>
      <aside className={styles.aside} aria-label={mode==='pieces'?'Pusselbitar':'Arbetsanteckningar'}>
        {mode==='pieces'?<><h2>Pusselbitar</h2><p>Välj en bit och sedan en ruta. Du kan också dra bitarna mellan rutorna.</p><div className={styles.bank}>{pieces.filter(p=>!used.has(p.id)).map((p,i)=><button key={p.id} type="button" draggable={false} {...dragHandlers(p.id)} aria-label={`Pusselbit ${i+1}: ${p.text}`} aria-pressed={selected===p.id} lang="de" onClick={()=>{if(wasDrag())return;setSelected(selected===p.id?null:p.id);setMessage(selected===p.id?'Valet har avbrutits.':`Vald bit: ${p.text}. Välj en ruta.`);}}>{p.text}</button>)}</div>{used.size===total?<p>Alla bitar är placerade.</p>:null}{selected?<button className={styles.return} type="button" onClick={()=>{setPlacements(prev=>Object.fromEntries(Object.entries(prev).filter(([,id])=>id!==selected)));setSelected(null);setChecked(false);setMessage('Biten har återlämnats.');}}>Återlämna / avmarkera vald bit</button>:null}</>:<><h2>Ruta för ruta.</h2><p>Följ kasus längs vänsterkanten och kolumnrubrikerna överst.</p><p>{category==='n'?'Skriv hela frasen. Substantivet ska ha stor begynnelsebokstav.':'Skriv endast ordformen. Markera en saknad form med ett streck (–).'}</p></>}
        <Link className={styles.reference} href={puzzle.href}>Läs genomgången ↗</Link>
      </aside>
    </section>:<div className={styles.empty}><span>EN TOM TABELL / ETT MÖNSTER ATT ÅTERSKAPA</span><p>Välj ovan. Fyll i själv.</p></div>}
    {dragVisual?<div aria-hidden="true" className={styles.dragGhost} style={{left:dragVisual.x+14,top:dragVisual.y+14}}>{dragVisual.text}</div>:null}
    <footer className={styles.folio}><span>OM TYSKA / TABELLPUSSLET</span><Link href="/meningsbygget">Till Meningsbygget ↗</Link></footer>
  </main>;
}
