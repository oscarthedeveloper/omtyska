import {test} from 'node:test';
import assert from 'node:assert/strict';
import {GERMAN_VERBS} from '../data/verbs.ts';
import {buildVerbTable,matchesVerbForm,supportsImperative} from '../data/verb-tables.ts';
const verb=name=>GERMAN_VERBS.find(v=>v.infinitive===name);
const cell=(name,mode,column,row=0)=>buildVerbTable(verb(name),mode,column).answers[row][0];
test('all 95 verbs have complete indicative and subjunctive tables',()=>{
 for(const v of GERMAN_VERBS)for(const [mode,count] of [['indikativ',6],['konjunktiv1',4],['konjunktiv2',3]]){
  const table=buildVerbTable(v,mode);assert.equal(table.rows.length,6);assert.equal(table.columns.length,count);
  for(const row of table.answers){assert.equal(row.length,count);assert.ok(row.every(x=>x&&!/undefined|\s{2}/.test(x)));}
 }
});
test('all six indicative tenses and their auxiliaries',()=>{
 assert.deepEqual(buildVerbTable(verb('bringen'),'indikativ').answers[0],['bringe','brachte','habe gebracht','hatte gebracht','werde bringen','werde gebracht haben']);
 assert.equal(cell('gehen','indikativ','perfekt',1),'bist gegangen');
 assert.equal(cell('sein','indikativ','plusquamperfekt',4),'wart gewesen');
 assert.equal(cell('sich ärgern','indikativ','praeteritum',1),'ärgertest dich');
});
test('subjunctive irregularities and accepted short and alternative stems',()=>{
 assert.equal(cell('bringen','konjunktiv2','gegenwart'),'brächte');
 assert.equal(cell('denken','konjunktiv2','gegenwart'),'dächte');
 assert.equal(cell('rennen','konjunktiv2','gegenwart'),'rennte');
 assert.equal(cell('kennen','konjunktiv2','gegenwart'),'kennte');
 assert.equal(cell('sein','konjunktiv1','presens',3),'seien');
 assert.equal(cell('haben','konjunktiv1','presens',1),'habest');
 assert.equal(cell('gehen','konjunktiv1','perfekt',1),'seiest gegangen');
 assert.ok(matchesVerbForm('kämst',buildVerbTable(verb('kommen'),'konjunktiv2','gegenwart').alternatives[1][0]));
 assert.ok(matchesVerbForm('hälfe',buildVerbTable(verb('helfen'),'konjunktiv2','gegenwart').alternatives[0][0]));
});
test('reflexive pronouns and separable particles stay in the correct positions',()=>{
 assert.deepEqual(buildVerbTable(verb('sich ausruhen'),'indikativ').answers[1],['ruhst dich aus','ruhtest dich aus','hast dich ausgeruht','hattest dich ausgeruht','wirst dich ausruhen','wirst dich ausgeruht haben']);
 assert.equal(cell('aufstehen','konjunktiv1','presens'),'stehe auf');
 assert.equal(cell('sich waschen','konjunktiv2','vergangenheit',1),'hättest dich gewaschen');
 assert.equal(cell('sich ausruhen','konjunktiv2','wuerde',1),'würdest dich ausruhen');
});
test('imperative has only applicable rows and includes the polite Sie construction',()=>{
 assert.deepEqual(buildVerbTable(verb('sein'),'imperativ').answers,[['sei'],['seid'],['seien Sie']]);
 assert.equal(cell('nehmen','imperativ','aufforderung'),'nimm');
 assert.equal(cell('fahren','imperativ','aufforderung'),'fahre');
 assert.equal(cell('öffnen','imperativ','aufforderung'),'öffne');
 assert.equal(cell('sich ausruhen','imperativ','aufforderung',2),'ruhen Sie sich aus');
 for(const v of GERMAN_VERBS){if(supportsImperative(v))assert.equal(buildVerbTable(v,'imperativ').rows.length,3);else assert.throws(()=>buildVerbTable(v,'imperativ'));}
});
test('partial compound forms and missing umlauts are not accepted',()=>{
 assert.ok(matchesVerbForm('  habe   gebracht ',['habe gebracht']));
 assert.ok(!matchesVerbForm('gebracht',['habe gebracht']));
 assert.ok(!matchesVerbForm('brachte',['brächte']));
 assert.ok(!matchesVerbForm('wasche',['wasche mich']));
 assert.ok(matchesVerbForm('N/A', ['N/A']));
});
