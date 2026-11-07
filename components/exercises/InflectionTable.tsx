'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { cellKey, placePiece } from '@/data/table-puzzles';
import { matchesVerbForm } from '@/data/verb-tables';
import type { VerbTable } from '@/data/verb-tables';
import type { Piece, Placements } from '@/data/table-puzzles';
import styles from './InflectionTable.module.css';

type Mode = 'write' | 'pieces';
export default function InflectionTable({table,title,mode,onCheck}:{table:VerbTable;title:string;mode:Mode;onCheck:(correct:number,total:number,answers:Record<string,string>)=>void}){
  const [values,setValues]=useState<Record<string,string>>({});
  const [placements,setPlacements]=useState<Placements>({});
  const [pieces,setPieces]=useState<Piece[]>(()=>shuffle());
  const [selected,setSelected]=useState<string|null>(null);
  const [checked,setChecked]=useState(false);
  const [message,setMessage]=useState('');
  const dragRef=useRef<{id:string;x:number;y:number;moved:boolean}|null>(null);
  const suppressClick=useRef(false);
  const [dragVisual,setDragVisual]=useState<{text:string;x:number;y:number}|null>(null);
  const workRef=useRef<HTMLElement>(null);
  const puzzle={...table,columns:table.columns.map(c=>c.label)};
  function shuffle(){
    const result=table.answers.flatMap((row,r)=>row.map((text,c)=>({id:cellKey(r,c),text})));
    for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
    return result;
  }
  const total=puzzle.answers.flat().length;
  const piecesById=new Map(pieces.map(p=>[p.id,p.text]));
  const used=new Set(Object.values(placements));
  function answer(key:string){return mode==='write'?(values[key]||''):(piecesById.get(placements[key])||'');}
  const filled=puzzle.answers.flatMap((row,r)=>row.map((_,c)=>answer(cellKey(r,c)))).filter(v=>v.trim()).length;
  const correct=puzzle.answers.reduce((sum,row,r)=>sum+row.filter((expected,c)=>matchesVerbForm(answer(cellKey(r,c)),table.alternatives[r][c])).length,0);
  function reset(){setValues({});setPlacements({});setSelected(null);setChecked(false);setMessage('');setPieces(shuffle());dragRef.current=null;suppressClick.current=false;setDragVisual(null);}
  function put(key:string,id:string){
    if(!piecesById.has(id))return;
    setPlacements(prev=>placePiece(prev,key,id));setSelected(null);setChecked(false);
    setMessage(`Pusselbit placerad: ${table.rows[Number(key.split('-')[0])]}, ${puzzle.columns[Number(key.split('-')[1])]}.`);
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
  return <section ref={workRef} className={`${styles.work} ${table.columns.length>2?styles.wide:''}`} aria-label="Verbtabellens arbetsyta">
      <div className={styles.board}>
        <div className={styles.boardTop}><h2>{title}</h2><span>{filled} / {total} ifyllda</span></div>
        <p id="table-instruction" className={styles.instruction}>{mode==='write'?'Skriv hela verbformen utan personpronomen. Ta med hjälpverb, reflexivpronomen och verbpartikel där de behövs.':'Dra en bit till en ruta, eller välj en bit och därefter en ruta. Identiska former är utbytbara.'}{table.columns.length>2?' Tabellen kan rullas i sidled.':''}{table.rows.length===3?' I Sie-raden skriver du hela uppmaningen inklusive Sie.':''}</p>
        <div className={styles.tableScroll}><table aria-describedby="table-instruction"><caption className="srOnly">{title}</caption><colgroup><col style={{width:95}}/>{puzzle.columns.map(col=><col key={col}/>)}</colgroup><thead><tr><td/><>{puzzle.columns.map(col=><th scope="col" key={col}>{col}</th>)}</></tr></thead><tbody>{table.rows.map((casus,r)=><tr key={casus}><th scope="row">{casus}</th>{puzzle.columns.map((col,c)=>{
          const key=cellKey(r,c);const text=answer(key);const status=checked?(matchesVerbForm(text,table.alternatives[r][c])?'Rätt':text?'Fel':'Tom'):'';
          return <td key={key} className={status==='Rätt'?styles.correct:status?styles.wrong:undefined}>
            {mode==='write'?<textarea rows={2} aria-label={`${casus}, ${col}`} aria-invalid={checked&&status!=='Rätt'} lang="de" autoCapitalize="none" autoComplete="off" spellCheck={false} value={values[key]||''} onChange={e=>{setValues(prev=>({...prev,[key]:e.target.value}));setChecked(false);}}/>:<button type="button" className={styles.cell} aria-label={`${casus}, ${col}${text?`: ${text}`:', tom ruta'}`} aria-pressed={Boolean(placements[key]&&selected===placements[key])} data-puzzle-cell={key} data-movable={Boolean(placements[key])} draggable={false} {...dragHandlers(placements[key])} onClick={()=>{if(wasDrag())return;if(selected)put(key,selected);else if(placements[key]){setSelected(placements[key]);setMessage('Välj en ny ruta, eller återlämna den valda biten.');}}} onKeyDown={e=>{if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();clear(key);}}}><span lang="de">{text||'\u00a0'}</span></button>}
            {status?<span className={styles.cellStatus}>{status==='Rätt'?'✓':'×'} {status}</span>:null}
          </td>;
        })}</tr>)}</tbody></table></div>
        <div className={styles.controls}><button type="button" onClick={()=>{setChecked(true);setMessage('');onCheck(correct,total,Object.fromEntries(table.answers.flatMap((row,r)=>row.map((_,c)=>[cellKey(r,c),answer(cellKey(r,c))]))));}}>Kontrollera tabellen ↗</button><button type="button" onClick={reset}>Töm och börja om</button></div>
        <div role="status" className={styles.feedback}>{checked?<><strong>{correct===total?'Hela tabellen är rätt.':`${correct} av ${total} rutor är rätt.`}</strong><p>{correct===total?'Välj ett annat verb, modus eller arbetssätt.':'Rätt, fel och tomma rutor är markerade. Du kan ändra svaren och kontrollera igen.'}</p></>:message||'Fyll tabellen och kontrollera när du är redo.'}</div>
      </div>
      <aside className={styles.aside} aria-label={mode==='pieces'?'Pusselbitar':'Arbetsanteckningar'}>
        {mode==='pieces'?<><h2>Pusselbitar</h2><p>Välj en bit och sedan en ruta. Du kan också dra bitarna mellan rutorna.</p><div className={styles.bank}>{pieces.filter(p=>!used.has(p.id)).map((p,i)=><button key={p.id} type="button" draggable={false} {...dragHandlers(p.id)} aria-label={`Pusselbit ${i+1}: ${p.text}`} aria-pressed={selected===p.id} lang="de" onClick={()=>{if(wasDrag())return;setSelected(selected===p.id?null:p.id);setMessage(selected===p.id?'Valet har avbrutits.':`Vald bit: ${p.text}. Välj en ruta.`);}}>{p.text}</button>)}</div>{used.size===total?<p>Alla bitar är placerade.</p>:null}{selected?<button className={styles.return} type="button" onClick={()=>{setPlacements(prev=>Object.fromEntries(Object.entries(prev).filter(([,id])=>id!==selected)));setSelected(null);setChecked(false);setMessage('Biten har återlämnats.');}}>Återlämna / avmarkera vald bit</button>:null}</>:<><h2>Person för person.</h2><p>Följ personerna lodrätt och tempus eller former vågrätt. Inga svar är förifyllda.</p><p>Rätt, fel och tomma rutor markeras när du kontrollerar tabellen.</p></>}
        <Link className={styles.reference} href="/grammatik#kat-V">Till verbens grammatik ↗</Link>
      </aside>
    {dragVisual?<div aria-hidden="true" className={styles.dragGhost} style={{left:Math.min(dragVisual.x+14,window.innerWidth-160),top:dragVisual.y+14}}>{dragVisual.text}</div>:null}
  </section>;
}
