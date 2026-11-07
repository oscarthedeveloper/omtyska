import type { GermanVerbEntry } from './verbs';

export type VerbModus = 'indikativ' | 'konjunktiv1' | 'konjunktiv2' | 'imperativ';
export const MODES: {id:VerbModus;label:string}[] = [
  {id:'indikativ',label:'Indikativ'}, {id:'konjunktiv1',label:'Konjunktiv I'},
  {id:'konjunktiv2',label:'Konjunktiv II'}, {id:'imperativ',label:'Imperativ'},
];
export const PERSON_KEYS = ['ich','du','erSieEs','wir','ihr','sieSie'] as const;
export const PERSON_LABELS = ['ich','du','er/sie/es','wir','ihr','sie/Sie'];
export const VERB_COLUMNS: Record<VerbModus,{id:string;label:string}[]> = {
  indikativ: [{id:'presens',label:'Präsens'},{id:'praeteritum',label:'Präteritum'},{id:'perfekt',label:'Perfekt'},{id:'plusquamperfekt',label:'Plusquamperfekt'},{id:'futur1',label:'Futur I'},{id:'futur2',label:'Futur II'}],
  konjunktiv1: [{id:'presens',label:'Präsens'},{id:'perfekt',label:'Perfekt'},{id:'futur1',label:'Futur I'},{id:'futur2',label:'Futur II'}],
  konjunktiv2: [{id:'gegenwart',label:'Gegenwart'},{id:'vergangenheit',label:'Vergangenheit'},{id:'wuerde',label:'Würde-form'}],
  imperativ: [{id:'aufforderung',label:'Uppmaning'}],
};
// Lexical subjunctive stems. Analytic würde-forms are practised in a separate column.
const K2: Record<string,string[]> = {
  sein:['wär'],haben:['hätt'],werden:['würd'],können:['könnt'],müssen:['müsst'],dürfen:['dürft'],mögen:['möcht'],wollen:['wollt'],sollen:['sollt'],
  sehen:['säh'],gehen:['ging'],fahren:['führ'],lesen:['läs'],sprechen:['spräch'],schlafen:['schlief'],nehmen:['nähm'],essen:['äß'],trinken:['tränk'],singen:['säng'],finden:['fänd'],bleiben:['blieb'],schreiben:['schrieb'],kommen:['käm'],geben:['gäb'],helfen:['hülf','hälf'],treffen:['träf'],laufen:['lief'],stehen:['stünd','ständ'],fliegen:['flög'],tragen:['trüg'],waschen:['wüsch'],fallen:['fiel'],halten:['hielt'],rufen:['rief'],beginnen:['begänn','begönn'],gewinnen:['gewänn','gewönn'],schwimmen:['schwämm','schwömm'],sitzen:['säß'],liegen:['läg'],schließen:['schlöss'],bringen:['brächt'],denken:['dächt'],kennen:['kennt'],wissen:['wüsst'],nennen:['nennt'],rennen:['rennt'],senden:['sendet'],
};
const K1_SEIN=['sei','seiest','sei','seien','seiet','seien'];
const HABEN=['habe','hast','hat','haben','habt','haben'];
const SEIN=['bin','bist','ist','sind','seid','sind'];
const HATTE=['hatte','hattest','hatte','hatten','hattet','hatten'];
const WAR=['war','warst','war','waren','wart','waren'];
const WERDEN=['werde','wirst','wird','werden','werdet','werden'];
const REFLEXIVE=['mich','dich','sich','uns','euch','sich'];
const endings=['e','est','e','en','et','en'];
const imperativeChanges:Record<string,string>={sein:'sei',sehen:'sieh',lesen:'lies',sprechen:'sprich',nehmen:'nimm',essen:'iss',geben:'gib',helfen:'hilf',treffen:'triff'};
export type VerbTable = {
  rows:string[]; columns:{id:string;label:string}[];
  answers:string[][]; alternatives:string[][][];
};
export function lexicalParts(verb:GermanVerbEntry){
  const infinitive=verb.infinitive.replace(/^sich /,'');
  const prefix=verb.isSeparable?(verb.prefix||''):'';
  return {infinitive,prefix,base:prefix?infinitive.slice(prefix.length):infinitive,reflexive:verb.type==='reflexivt'};
}
function k1(infinitive:string,index:number){
  if(infinitive==='sein')return K1_SEIN[index];
  if(index===3||index===5)return infinitive;
  return infinitive.replace(/(?:en|n)$/,'')+endings[index];
}
function k2(infinitive:string,index:number){
  return (K2[infinitive]||[]).flatMap(stem=>{
    const variants=[stem+endings[index]];
    if(index===1&&!/[tdsßz]$/.test(stem))variants.push(stem+'st');
    if(index===4&&!/[td]$/.test(stem))variants.push(stem+'t');
    return variants;
  });
}
export function supportsImperative(verb:GermanVerbEntry){return verb.type!=='modalverb';}
export function buildVerbTable(verb:GermanVerbEntry,modus:VerbModus,selection:string='alla'):VerbTable {
  if(modus==='imperativ'&&!supportsImperative(verb))throw new Error('Modalverb ingår inte i imperativövningen.');
  const {infinitive,prefix,base,reflexive}=lexicalParts(verb);
  const available=VERB_COLUMNS[modus];
  const columns=selection==='alla'?available:available.filter(c=>c.id===selection);
  if(!columns.length)throw new Error('Okänd verbform för valt modus.');
  const finite=(form:string,i:number)=>[form,reflexive?REFLEXIVE[i]:'',prefix].filter(Boolean).join(' ');
  const analytic=(aux:string,tail:string,i:number)=>[aux,reflexive?REFLEXIVE[i]:'',tail].filter(Boolean).join(' ');
  const firstPast=verb.praeteritum.ich.split(' ')[0];
  const weakK2=firstPast.replace(/e$/,'');
  const subj2=(i:number)=>K2[base]?k2(base,i):[weakK2+endings[i]];
  const form=(id:string,i:number):string[]=>{
    if(modus==='imperativ'){
      if(i===0){
        const singular=imperativeChanges[base]||verb.present.ich.split(' ')[0];
        const long=finite(singular,1);
        const optional=singular.endsWith('e')&&!/(?:d|t|[^lmnr][mn])e$/.test(singular);
        return optional?[long,finite(singular.slice(0,-1),1)]:[long];
      }
      if(i===1)return [verb.present.ihr];
      return [[base==='sein'?'seien':base,'Sie',reflexive?'sich':'',prefix].filter(Boolean).join(' ')];
    }
    if(modus==='indikativ'){
      if(id==='presens')return [verb.present[PERSON_KEYS[i]]];
      if(id==='praeteritum'){
        // Weak verbs retain regular personal endings, also when reflexive or separable.
        if((verb.type==='svagt'||verb.type==='reflexivt')&&!K2[base]){
          const weak=[firstPast,firstPast+'st',firstPast,firstPast+'n',firstPast+'t',firstPast+'n'];
          return [finite(weak[i],i)];
        }
        return [verb.praeteritum[PERSON_KEYS[i]]];
      }
      if(id==='perfekt')return [analytic((verb.auxiliary==='sein'?SEIN:HABEN)[i],verb.participleII,i)];
      if(id==='plusquamperfekt')return [analytic((verb.auxiliary==='sein'?WAR:HATTE)[i],verb.participleII,i)];
      if(id==='futur1')return [analytic(WERDEN[i],infinitive,i)];
      return [analytic(WERDEN[i],`${verb.participleII} ${verb.auxiliary}`,i)];
    }
    if(modus==='konjunktiv1'){
      if(id==='presens')return [finite(k1(base,i),i),...(base==='sein'&&i===1?[finite('seist',i)]:[])];
      if(id==='perfekt')return [analytic(k1(verb.auxiliary,i),verb.participleII,i)];
      return [analytic(k1('werden',i),id==='futur1'?infinitive:`${verb.participleII} ${verb.auxiliary}`,i)];
    }
    if(id==='gegenwart')return subj2(i).map(f=>finite(f,i));
    if(id==='vergangenheit')return k2(verb.auxiliary,i).map(aux=>analytic(aux,verb.participleII,i));
    return k2('werden',i).map(aux=>analytic(aux,infinitive,i));
  };
  const rows=modus==='imperativ'?['du','ihr','Sie']:PERSON_LABELS;
  const alternatives=rows.map((_,r)=>columns.map(c=>form(c.id,r)));
  return {rows,columns,answers:alternatives.map(row=>row.map(forms=>forms[0])),alternatives};
}
export function matchesVerbForm(input:string,forms:string[]){
  const normalized=(s:string)=>s.normalize('NFC').trim().replace(/[.!]$/,'').replace(/\s+/g,' ');
  return forms.some(form=>normalized(input)===normalized(form));
}
