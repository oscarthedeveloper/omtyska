import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { gradeGermanAnswer, checkSentenceOrder } from '../lib/answering-policy.ts';

describe('Om-Tyska Answering Policy Tests', () => {
  test('1. schon vs schön: does NOT approve schon when schön is required', () => {
    const result = gradeGermanAnswer('schon', 'schön');
    assert.equal(result.isCorrect, false);
    assert.equal(result.errorTag, 'missing-umlaut');
    assert.match(result.feedback, /omljud/i);
  });

  test('2. konnte vs könnte: does NOT approve konnte when könnte is required', () => {
    const result = gradeGermanAnswer('konnte', 'könnte');
    assert.equal(result.isCorrect, false);
    assert.equal(result.errorTag, 'missing-umlaut');
    assert.match(result.feedback, /omljud/i);
  });

  test('3. Sie vs sie in unambiguous polite context: distinguishes polite capitalization', () => {
    const result = gradeGermanAnswer('Können sie mir helfen?', 'Können Sie mir helfen?');
    assert.equal(result.isCorrect, false);
    assert.equal(result.isPartial, true);
    assert.equal(result.errorTag, 'wrong-capitalization');
    assert.match(result.feedback, /Artigt tilltal/i);
  });

  test('4. Noun without article in gender task: provides partial credit and clear feedback', () => {
    const result = gradeGermanAnswer('Mann', 'der Mann');
    assert.equal(result.isCorrect, false);
    assert.equal(result.isPartial, true);
    assert.equal(result.errorTag, 'missing-article');
    assert.match(result.feedback, /kräver artikel/i);
  });

  test('5. mit einem guter Freund: diagnoses wrong adjective ending separately', () => {
    const result = gradeGermanAnswer('mit einem guter Freund', 'mit einem guten Freund');
    assert.equal(result.isCorrect, false);
    assert.equal(result.isPartial, true);
    assert.equal(result.errorTag, 'wrong-adjective-ending');
    assert.match(result.feedback, /fel ändelse/i);
  });

  test('6. German noun capitalization: alerts when user writes lowercase buch instead of Buch', () => {
    const result = gradeGermanAnswer('buch', 'Buch');
    assert.equal(result.isCorrect, false);
    assert.equal(result.isPartial, true);
    assert.equal(result.errorTag, 'wrong-capitalization');
  });

  test('7. Exact match and accepted alternatives', () => {
    const result1 = gradeGermanAnswer('im Park', 'im Park');
    assert.equal(result1.isCorrect, true);

    const result2 = gradeGermanAnswer('in den Park', 'im Park', {
      acceptableAlternatives: ['in den Park']
    });
    assert.equal(result2.isCorrect, true);
  });

  test('8. Sentence ordering with multiple valid orders', () => {
    const allowed = [
      ['Heute', 'kaufe', 'ich', 'ein Buch'],
      ['Ich', 'kaufe', 'heute', 'ein Buch'],
      ['Ein Buch', 'kaufe', 'ich', 'heute']
    ];

    const check1 = checkSentenceOrder(['Heute', 'kaufe', 'ich', 'ein Buch'], allowed);
    assert.equal(check1.isCorrect, true);

    const check2 = checkSentenceOrder(['Ich', 'kaufe', 'heute', 'ein Buch'], allowed);
    assert.equal(check2.isCorrect, true);

    const check3 = checkSentenceOrder(['Heute', 'ich', 'kaufe', 'ein Buch'], allowed);
    assert.equal(check3.isCorrect, false);
  });
});
