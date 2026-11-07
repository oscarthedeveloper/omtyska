import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TABLE_PUZZLES, makePieces, shuffledPieces, placePiece, isTableAnswerCorrect, isPuzzleAnswerCorrect } from '../data/table-puzzles.ts';

test('article and noun paradigms have a piece for every cell, including duplicate forms',()=>{
  for(const table of TABLE_PUZZLES){
    const pieces=makePieces(table);
    assert.equal(pieces.length,4*(table.columns.length-(table.disabledColumns?.length||0)));
    assert.equal(new Set(pieces.map(p=>p.id)).size,pieces.length);
    assert.deepEqual(shuffledPieces(table).map(p=>p.id).sort(),pieces.map(p=>p.id).sort());
  }
  assert.equal(makePieces(TABLE_PUZZLES[0]).filter(p=>p.text==='die').length,4);
});
test('identical forms are correct in any matching cell',()=>{
  assert.ok(isTableAnswerCorrect('die',TABLE_PUZZLES[0].answers[0][3]));
  assert.ok(isTableAnswerCorrect('die',TABLE_PUZZLES[0].answers[1][1]));
  assert.ok(!isTableAnswerCorrect('der',TABLE_PUZZLES[0].answers[0][3]));
});
test('missing plural forms accept keyboard hyphen; whitespace is normalized',()=>{
  for(const dash of ['-', '–', '—'])assert.ok(isTableAnswerCorrect(dash,'–'));
  assert.ok(isTableAnswerCorrect('  dem   Kunden  ','dem Kunden'));
  assert.ok(!isTableAnswerCorrect('dem kunden','dem Kunden'));
  assert.ok(!isTableAnswerCorrect('Kunden','dem Kunden'));
  assert.ok(!isTableAnswerCorrect('','–'));
});
test('n-declination includes the article and correct singular/plural forms',()=>{
  assert.deepEqual(TABLE_PUZZLES.find(p=>p.id==='n-kunde').answers,[['der Kunde','die Kunden'],['den Kunden','die Kunden'],['dem Kunden','den Kunden'],['des Kunden','der Kunden']]);
  assert.equal(TABLE_PUZZLES.find(p=>p.id==='n-prinz').answers[3][0],'des Prinzen');
});
test('moving, replacing and swapping pieces never duplicates a physical piece',()=>{
  assert.deepEqual(placePiece({'0-0':'a'},'1-0','a'),{'1-0':'a'});
  assert.deepEqual(placePiece({'0-0':'a','1-0':'b'},'1-0','a'),{'0-0':'b','1-0':'a'});
  assert.deepEqual(placePiece({'0-0':'a'},'0-0','b'),{'0-0':'b'});
});

test('first expansion exposes all fifteen agreed paradigms with distinct case-sensitive possessives',()=>{
  for(const id of ['dieser','welcher','jener','solcher','jeder','mancher','derselbe','derjenige','poss-mein','poss-dein','poss-sein','poss-ihr','poss-unser','poss-euer','poss-Ihr'])assert.ok(TABLE_PUZZLES.some(p=>p.id===id),id);
  assert.equal(TABLE_PUZZLES.length,35);
  const formal=TABLE_PUZZLES.find(p=>p.id==='poss-Ihr');
  assert.ok(isPuzzleAnswerCorrect(formal,2,0,'Ihrem'));
  assert.ok(!isPuzzleAnswerCorrect(formal,2,0,'ihrem'));
});
test('jeder excludes plural from the bank and grading',()=>{
  const table=TABLE_PUZZLES.find(p=>p.id==='jeder');
  assert.equal(makePieces(table).length,12);
  assert.ok(!makePieces(table).some(p=>p.id.endsWith('-3')));
  assert.ok(!isPuzzleAnswerCorrect(table,0,3,'–'));
  assert.equal(table.answers[3][2],'jedes');
});
test('compound demonstratives inflect both parts',()=>{
  assert.deepEqual(TABLE_PUZZLES.find(p=>p.id==='derselbe').answers,[['derselbe','dieselbe','dasselbe','dieselben'],['denselben','dieselbe','dasselbe','dieselben'],['demselben','derselben','demselben','denselben'],['desselben','derselben','desselben','derselben']]);
  assert.equal(TABLE_PUZZLES.find(p=>p.id==='derjenige').answers[2][0],'demjenigen');
});
test('possessive article forms and accepted stem variants are graded in both number columns',()=>{
  const euer=TABLE_PUZZLES.find(p=>p.id==='poss-euer');
  assert.equal(euer.answers[0][0],'euer');
  for(const form of ['eurem','euerem','euerm'])assert.ok(isPuzzleAnswerCorrect(euer,2,0,form));
  assert.ok(!isPuzzleAnswerCorrect(euer,2,0,'eurm'));
  assert.equal(euer.answers[2][3],'euren');
  assert.equal(TABLE_PUZZLES.find(p=>p.id==='poss-mein').answers[0][2],'mein');
  const unser=TABLE_PUZZLES.find(p=>p.id==='poss-unser');
  assert.ok(isPuzzleAnswerCorrect(unser,2,0,'unsrem'));
});

test('plural words have exactly four playable cells with correct oblique endings',()=>{
  for(const [id,forms] of Object.entries({
    'plural-all':['alle','alle','allen','aller'],
    'plural-beid':['beide','beide','beiden','beider'],
    'plural-einig':['einige','einige','einigen','einiger'],
    'plural-mehrer':['mehrere','mehrere','mehreren','mehrerer'],
    'plural-sämtlich':['sämtliche','sämtliche','sämtlichen','sämtlicher'],
  })){
    const table=TABLE_PUZZLES.find(p=>p.id===id);
    assert.deepEqual(table.columns,['Plural']);
    assert.deepEqual(table.answers.flat(),forms);
    assert.equal(makePieces(table).length,4);
  }
});
test('standalone indefinite pronouns contrast with articles and restrict einer to singular',()=>{
  const ein=TABLE_PUZZLES.find(p=>p.id==='pron-ein');
  const kein=TABLE_PUZZLES.find(p=>p.id==='pron-kein');
  assert.equal(makePieces(ein).length,12);
  assert.equal(makePieces(kein).length,16);
  assert.ok(isPuzzleAnswerCorrect(ein,0,0,'einer'));
  assert.ok(!isPuzzleAnswerCorrect(ein,0,0,'ein'));
  for(const form of ['eins','eines'])assert.ok(isPuzzleAnswerCorrect(ein,0,2,form));
  assert.ok(!isPuzzleAnswerCorrect(ein,3,2,'eins'));
  assert.equal(kein.answers[2][3],'keinen');
  assert.ok(isPuzzleAnswerCorrect(kein,1,2,'keins'));
});
test('standalone possessives require nominative endings and accept neuter alternatives without weakening genitive',()=>{
  for(const stem of ['mein','dein','sein','ihr','unser','euer','Ihr']){
    const table=TABLE_PUZZLES.find(p=>p.id==='pron-'+stem);
    assert.ok(table);
    assert.ok(!isPuzzleAnswerCorrect(table,0,0,stem));
    for(const row of [0,1])assert.ok(isPuzzleAnswerCorrect(table,row,2,stem+'s'));
    assert.ok(!isPuzzleAnswerCorrect(table,3,2,stem+'s'));
    assert.ok(!isPuzzleAnswerCorrect(table,0,2,''));
  }
  const euer=TABLE_PUZZLES.find(p=>p.id==='pron-euer');
  for(const variant of ['eurer','euerer'])assert.ok(isPuzzleAnswerCorrect(euer,0,0,variant));
  const formal=TABLE_PUZZLES.find(p=>p.id==='pron-Ihr');
  assert.ok(isPuzzleAnswerCorrect(formal,0,0,'Ihrer'));
  assert.ok(!isPuzzleAnswerCorrect(formal,0,0,'ihrer'));
});
test('relative pronouns differ from articles in dative plural and genitive',()=>{
  const table=TABLE_PUZZLES.find(p=>p.id==='relativ-der');
  assert.deepEqual(table.answers,[['der','die','das','die'],['den','die','das','die'],['dem','der','dem','denen'],['dessen','deren','dessen','deren']]);
  assert.ok(!isPuzzleAnswerCorrect(table,2,3,'den'));
  assert.ok(!isPuzzleAnswerCorrect(table,3,0,'des'));
  assert.ok(!isPuzzleAnswerCorrect(table,3,3,'derer'));
});
test('all playable cells and their explicit variants roundtrip through the grader',()=>{
  assert.equal(new Set(TABLE_PUZZLES.map(p=>p.id)).size,TABLE_PUZZLES.length);
  for(const table of TABLE_PUZZLES)for(const piece of makePieces(table)){
    const [r,c]=piece.id.split('-').map(Number);
    assert.ok(isPuzzleAnswerCorrect(table,r,c,piece.text),table.id+' '+piece.id);
    for(const alt of table.alternatives?.[piece.id]??[])assert.ok(isPuzzleAnswerCorrect(table,r,c,alt));
  }
});
