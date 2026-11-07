import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SYNTAX_EXERCISES } from '../data/syntax-exercises.ts';
import { checkSentenceOrder } from '../lib/answering-policy.ts';

describe('Meningsbygget Syntax Exercises Suite', () => {
  test('Contains exactly 90 exercises in total', () => {
    assert.equal(SYNTAX_EXERCISES.length, 90);
  });

  test('Has exactly 30 exercises per pattern (v2, satsram, bisats)', () => {
    const v2 = SYNTAX_EXERCISES.filter((e) => e.theme === 'v2');
    const satsram = SYNTAX_EXERCISES.filter((e) => e.theme === 'satsram');
    const bisats = SYNTAX_EXERCISES.filter((e) => e.theme === 'bisats');

    assert.equal(v2.length, 30, 'Expected 30 v2 exercises');
    assert.equal(satsram.length, 30, 'Expected 30 satsram exercises');
    assert.equal(bisats.length, 30, 'Expected 30 bisats exercises');
  });

  test('Every exercise has unique ID and required fields', () => {
    const ids = new Set();
    for (const ex of SYNTAX_EXERCISES) {
      assert.ok(ex.id, 'Exercise missing ID');
      assert.ok(!ids.has(ex.id), `Duplicate exercise ID: ${ex.id}`);
      ids.add(ex.id);

      assert.ok(['v2', 'satsram', 'bisats'].includes(ex.theme), `Invalid theme: ${ex.theme}`);
      assert.ok(ex.swedishMeaning && ex.swedishMeaning.length > 0, `Missing swedishMeaning in ${ex.id}`);
      assert.ok(ex.instruction && ex.instruction.length > 0, `Missing instruction in ${ex.id}`);
      assert.ok(Array.isArray(ex.chunks) && ex.chunks.length >= 3, `Invalid chunks in ${ex.id}`);
      assert.ok(Array.isArray(ex.acceptableOrders) && ex.acceptableOrders.length >= 1, `Missing acceptableOrders in ${ex.id}`);
      assert.ok(ex.explanation && ex.explanation.length > 0, `Missing explanation in ${ex.id}`);

      // Verify that every acceptable order is an exact multiset permutation of chunks
      const sortedChunks = [...ex.chunks].sort();
      for (const order of ex.acceptableOrders) {
        assert.equal(order.length, ex.chunks.length, `Order length mismatch in ${ex.id}`);
        const sortedOrder = [...order].sort();
        assert.deepEqual(sortedOrder, sortedChunks, `Order tokens mismatch chunks in ${ex.id}`);
      }
    }
  });

  test('checkSentenceOrder validates acceptable orders and rejects invalid permutations', () => {
    for (const ex of SYNTAX_EXERCISES) {
      // First acceptable order must be graded as correct
      const correctRes = checkSentenceOrder(ex.acceptableOrders[0], ex.acceptableOrders);
      assert.equal(correctRes.isCorrect, true, `First order failed for ${ex.id}`);

      // Reversed chunks (unless identical to an acceptable order) should be evaluated
      const reversed = [...ex.chunks].reverse();
      const reversedString = reversed.join(' ').trim();
      const isActuallyAcceptable = ex.acceptableOrders.some((ord) => ord.join(' ').trim() === reversedString);

      const reversedRes = checkSentenceOrder(reversed, ex.acceptableOrders);
      assert.equal(reversedRes.isCorrect, isActuallyAcceptable, `Reversed check mismatch for ${ex.id}`);
    }
  });
});
