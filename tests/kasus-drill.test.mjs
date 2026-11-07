import test from 'node:test';
import assert from 'node:assert/strict';
import { KASUS_DRILL_ITEMS, KASUS_CATEGORIES, KASUS_CATEGORY_DEFINITIONS } from '../data/kasus-drill.ts';
import { gradeGermanAnswer } from '../lib/answering-policy.ts';

test('Kasusdrill dataset integrity', async (t) => {
  await t.test('has exactly 181 exercises', () => {
    assert.equal(KASUS_DRILL_ITEMS.length, 181);
  });

  await t.test('has 10 defined categories and all items belong to one', () => {
    assert.equal(KASUS_CATEGORIES.length, 10);
    const validKeys = new Set(Object.keys(KASUS_CATEGORY_DEFINITIONS));
    for (const item of KASUS_DRILL_ITEMS) {
      assert.ok(validKeys.has(item.category), `Item ${item.id} has invalid category ${item.category}`);
    }
  });

  await t.test('placeholders in prompt match target IDs', () => {
    for (const item of KASUS_DRILL_ITEMS) {
      const matches = item.prompt.match(/\{\{(\d+)\}\}/g) || [];
      const placeholderIds = matches.map(m => m.replace(/[\{\}]/g, ''));
      const targetIds = item.targets.map(t => t.id);

      assert.equal(
        placeholderIds.length,
        targetIds.length,
        `Item ${item.id} prompt placeholders count (${placeholderIds.length}) does not match targets count (${targetIds.length})`
      );

      for (const id of placeholderIds) {
        assert.ok(
          targetIds.includes(id),
          `Item ${item.id} has placeholder {{${id}}} but no matching target ID`
        );
      }
    }
  });

  await t.test('KD-001 Der Mann accepts both der Mann and Der Mann', () => {
    const item = KASUS_DRILL_ITEMS.find(i => i.id === 'KD-001');
    assert.ok(item);
    assert.equal(item.targets[0].answer, 'Der Mann');
    const resUpper = gradeGermanAnswer('Der Mann', item.targets[0].answer);
    assert.equal(resUpper.isCorrect, true);
    const resLower = gradeGermanAnswer('der Mann', item.targets[0].answer);
    assert.equal(resLower.isCorrect, true);
    const resWrongNoun = gradeGermanAnswer('der mann', item.targets[0].answer);
    assert.equal(resWrongNoun.isCorrect, false);
    assert.equal(resWrongNoun.errorTag, 'wrong-capitalization');
  });

  await t.test('user test case 1: KD-039 Du fehlst mir so sehr', () => {
    const item = KASUS_DRILL_ITEMS.find(i => i.id === 'KD-039');
    assert.ok(item);
    assert.equal(item.targets.length, 1);
    assert.equal(item.targets[0].answer, 'mir');
    assert.equal(item.targets[0].case, 'dativ');
    const result = gradeGermanAnswer('mir', item.targets[0].answer);
    assert.equal(result.isCorrect, true);
  });

  await t.test('user test case 2: KD-071 Der Vater schenkt seinem Sohn ein Fahrrad', () => {
    const item = KASUS_DRILL_ITEMS.find(i => i.id === 'KD-071');
    assert.ok(item);
    assert.equal(item.targets.length, 2);
    assert.equal(item.targets[0].answer, 'seinem Sohn');
    assert.equal(item.targets[0].case, 'dativ');
    assert.equal(item.targets[1].answer, 'ein Fahrrad');
    assert.equal(item.targets[1].case, 'ackusativ');

    const res1 = gradeGermanAnswer('seinem Sohn', item.targets[0].answer);
    const res2 = gradeGermanAnswer('ein Fahrrad', item.targets[1].answer);
    assert.equal(res1.isCorrect, true);
    assert.equal(res2.isCorrect, true);
  });

  await t.test('user test case 3: KD-110 Man beschuldigte ihn des Diebstahls', () => {
    const item = KASUS_DRILL_ITEMS.find(i => i.id === 'KD-110');
    assert.ok(item);
    assert.equal(item.targets.length, 2);
    assert.equal(item.targets[0].answer, 'ihn');
    assert.equal(item.targets[0].case, 'ackusativ');
    assert.equal(item.targets[1].answer, 'des Diebstahls');
    assert.equal(item.targets[1].case, 'genitiv');

    const res1 = gradeGermanAnswer('ihn', item.targets[0].answer);
    const res2 = gradeGermanAnswer('des Diebstahls', item.targets[1].answer, {
      acceptableAlternatives: item.targets[1].acceptedAlternatives,
    });
    const res2Alt = gradeGermanAnswer('des Diebstahles', item.targets[1].answer, {
      acceptableAlternatives: item.targets[1].acceptedAlternatives,
    });
    assert.equal(res1.isCorrect, true);
    assert.equal(res2.isCorrect, true);
    assert.equal(res2Alt.isCorrect, true);
  });

  await t.test('user test case 4: KD-087 Das ist das Haus meines Großvaters', () => {
    const item = KASUS_DRILL_ITEMS.find(i => i.id === 'KD-087');
    assert.ok(item);
    assert.equal(item.targets.length, 1);
    assert.equal(item.targets[0].answer, 'meines Großvaters');
    assert.equal(item.targets[0].case, 'genitiv');

    const res = gradeGermanAnswer('meines Großvaters', item.targets[0].answer);
    assert.equal(res.isCorrect, true);
  });

  await t.test('apostrophe variants for KD-105 Max\'', () => {
    const item = KASUS_DRILL_ITEMS.find(i => i.id === 'KD-105');
    assert.ok(item);
    const res1 = gradeGermanAnswer("Max'", item.targets[0].answer, {
      acceptableAlternatives: item.targets[0].acceptedAlternatives,
    });
    const res2 = gradeGermanAnswer("Max’", item.targets[0].answer, {
      acceptableAlternatives: item.targets[0].acceptedAlternatives,
    });
    assert.equal(res1.isCorrect, true);
    assert.equal(res2.isCorrect, true);
  });
});
