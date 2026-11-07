/**
 * Answering & Grading Policy for German Language Learning.
 *
 * Implements rigorous linguistic grading:
 * - NFC normalization
 * - Preserves umlauts (ä, ö, ü) and ß: 'schön' !== 'schon', 'könnte' !== 'konnte'
 * - Preserves German noun capitalization when requested or semantically necessary
 * - Provides granular feedback (partial credit, wrong case, missing article, wrong ending)
 * - Supports alternative accepted wordings
 */

export type GradingResult = {
  isCorrect: boolean;
  isPartial: boolean;
  score: number; // 0.0 to 1.0
  feedback: string;
  errorTag?:
    | 'wrong-case'
    | 'wrong-article-form'
    | 'wrong-adjective-ending'
    | 'missing-article'
    | 'missing-umlaut'
    | 'wrong-capitalization'
    | 'syntax-word-order'
    | 'general-mismatch';
};

export type GradingOptions = {
  caseSensitive?: boolean; // defaults to true for German nouns/pronouns
  requireArticle?: boolean;
  allowAeOeUeKeyboardMode?: boolean;
  acceptableAlternatives?: string[];
  feedbackOnErrors?: Record<string, string>;
};

const GERMAN_NON_NOUN_STARTERS = new Set([
  'der', 'die', 'das', 'den', 'dem', 'des',
  'ein', 'eine', 'einen', 'einem', 'einer', 'eines',
  'kein', 'keine', 'keinen', 'keinem', 'keiner', 'keines',
  'mein', 'meine', 'meinen', 'meinem', 'meiner', 'meines',
  'dein', 'deine', 'deinen', 'deinem', 'deiner', 'deines',
  'sein', 'seine', 'seinen', 'seinem', 'seiner', 'seines',
  'ihr', 'ihre', 'ihren', 'ihrem', 'ihrer', 'ihres',
  'unser', 'unsere', 'unseren', 'unserem', 'unserer', 'unseres',
  'euer', 'eure', 'euren', 'eurem', 'eurer', 'eures',
  'dieser', 'diese', 'dieses', 'diesem', 'diesen',
  'jeder', 'jede', 'jedes', 'jedem', 'jeden',
  'alle', 'allen', 'aller', 'alles',
  'wer', 'wen', 'wem', 'wessen',
  'ich', 'du', 'er', 'sie', 'es', 'wir', 'uns', 'euch', 'mir', 'dir', 'ihm', 'ihnen',
  'man', 'sich',
  'durch', 'für', 'gegen', 'ohne', 'um',
  'aus', 'bei', 'mit', 'nach', 'seit', 'von', 'zu',
  'an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen',
  'wegen', 'trotz', 'statt',
  'gut', 'guter', 'gute', 'gutes', 'guten', 'gutem',
  'groß', 'großer', 'große', 'großes', 'großen', 'großem',
  'alt', 'alter', 'alte', 'altes', 'alten', 'altem',
  'neu', 'neuer', 'neue', 'neues', 'neuen', 'neuem',
  'schön', 'schöner', 'schöne', 'schönes', 'schönen', 'schönem',
  'stark', 'starker', 'starke', 'starkes', 'starken', 'starkem',
  'erfolgreich', 'erfolgreiche', 'erfolgreichen', 'erfolgreicher',
  'sehr', 'so', 'heute', 'gestern', 'morgen'
]);

/**
 * Clean and normalize a string while strictly preserving German diacritics.
 */
export function cleanGermanText(input: string): string {
  if (!input) return '';
  return input
    .normalize('NFC')
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // remove zero-width chars
    .trim()
    .replace(/\s+/g, ' '); // collapse internal whitespace
}

/**
 * Grade a user's answer against the target answer and possible alternatives.
 */
export function gradeGermanAnswer(
  userRaw: string,
  targetRaw: string,
  options: GradingOptions = {}
): GradingResult {
  const user = cleanGermanText(userRaw);
  const target = cleanGermanText(targetRaw);
  const alternatives = (options.acceptableAlternatives || []).map(cleanGermanText);

  if (!user) {
    return {
      isCorrect: false,
      isPartial: false,
      score: 0,
      feedback: 'Inget svar angivet.',
      errorTag: 'general-mismatch',
    };
  }

  // 1. Direct exact match with target or alternatives
  if (user === target || alternatives.includes(user)) {
    return {
      isCorrect: true,
      isPartial: false,
      score: 1.0,
      feedback: 'Helt rätt!',
    };
  }

  // 2. Check specific error feedbacks defined in options
  if (options.feedbackOnErrors && options.feedbackOnErrors[user]) {
    return {
      isCorrect: false,
      isPartial: false,
      score: 0,
      feedback: options.feedbackOnErrors[user],
      errorTag: 'general-mismatch',
    };
  }

  // 3. Strict Umlaut checks: e.g. schön vs schon, könnte vs konnte
  // Only applies if the strings differ specifically in umlauts!
  const hasUmlautDifference =
    (/[äöüÄÖÜ]/.test(target) && !/[äöüÄÖÜ]/.test(user)) ||
    (!/[äöüÄÖÜ]/.test(target) && /[äöüÄÖÜ]/.test(user));

  if (hasUmlautDifference) {
    const userNoUmlaut = user.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/Ä/g, 'A').replace(/Ö/g, 'O').replace(/Ü/g, 'U');
    const targetNoUmlaut = target.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/Ä/g, 'A').replace(/Ö/g, 'O').replace(/Ü/g, 'U');

    if (userNoUmlaut.toLowerCase() === targetNoUmlaut.toLowerCase()) {
      return {
        isCorrect: false,
        isPartial: false,
        score: 0,
        feedback: `Observera omljudet! "${user}" är ett annat tyskt ord än "${target}". Tänk på ä, ö och ü.`,
        errorTag: 'missing-umlaut',
      };
    }
  }

  // 4. Missing article check (e.g. user wrote "Mann" when target is "der Mann" or "den Mann")
  const articleRegex = /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines)\s+/i;
  const targetHasArticle = articleRegex.test(target);
  const userHasArticle = articleRegex.test(user);

  if (targetHasArticle && !userHasArticle) {
    const targetWithoutArticle = target.replace(articleRegex, '').trim();
    if (user.toLowerCase() === targetWithoutArticle.toLowerCase()) {
      return {
        isCorrect: false,
        isPartial: true,
        score: 0.5,
        feedback: `Rätt substantiv, men uppgiften kräver artikel! Kom ihåg genus och kasus (${target.split(' ')[0]}).`,
        errorTag: 'missing-article',
      };
    }
  }

  // 5. Adjective phrase analysis: e.g. "mit einem guter Freund" vs target "mit einem guten Freund"
  // Checks if article was correct but adjective ending is wrong
  const targetTokens = target.split(' ');
  const userTokens = user.split(' ');
  if (targetTokens.length === userTokens.length && targetTokens.length >= 3) {
    // Check if only the adjective token differed
    let mismatches: number[] = [];
    for (let i = 0; i < targetTokens.length; i++) {
      if (targetTokens[i] !== userTokens[i]) mismatches.push(i);
    }
    if (mismatches.length === 1) {
      const idx = mismatches[0];
      const targetWord = targetTokens[idx];
      const userWord = userTokens[idx];
      // If words share stem but differ in ending:
      if (userWord.startsWith(targetWord.slice(0, 3))) {
        return {
          isCorrect: false,
          isPartial: true,
          score: 0.6,
          feedback: `Rätt struktur och artikel, men fel ändelse på "${userWord}". Rätt form här är "${targetWord}".`,
          errorTag: 'wrong-adjective-ending',
        };
      }
    }
  }

  // 6. Capitalization handling (nouns, polite forms, sentence-initial words)
  if (user.toLowerCase() === target.toLowerCase()) {
    // 6a. Polite 'Sie' / 'Ihnen' / 'Ihr' vs 'sie' / 'ihnen' / 'ihr'
    const politeWords = ['Sie', 'Ihnen', 'Ihr', 'Ihre', 'Ihrem', 'Ihren', 'Ihrer'];
    const hasPoliteMismatch = politeWords.some(pw => {
      const reTarget = new RegExp(`\\b${pw}\\b`);
      const reUser = new RegExp(`\\b${pw.toLowerCase()}\\b`);
      return reTarget.test(target) && reUser.test(user);
    });

    if (hasPoliteMismatch) {
      return {
        isCorrect: false,
        isPartial: true,
        score: 0.5,
        feedback: 'Artigt tilltal (Sie, Ihr, Ihnen) skrivs med stor begynnelsebokstav i tyskan!',
        errorTag: 'wrong-capitalization',
      };
    }

    // 6b. Compare word by word: allow initial casing differences for non-noun words
    // (e.g. "Der Mann" vs "der Mann", "Mir" vs "mir", "Jeden Tag" vs "jeden Tag")
    const targetWords = target.split(/\s+/);
    const userWords = user.split(/\s+/);

    if (targetWords.length === userWords.length) {
      let hasNounCapitalizationError = false;

      for (let i = 0; i < targetWords.length; i++) {
        const tw = targetWords[i];
        const uw = userWords[i];
        if (tw === uw) continue;

        const isNonNounStarter = GERMAN_NON_NOUN_STARTERS.has(tw.toLowerCase());

        if (i === 0 && isNonNounStarter) {
          // Difference is on the initial non-noun word (e.g. "Der Mann" vs "der Mann").
          // Both sentence-initial capital and lower-case base form are accepted.
          continue;
        }

        // If target word starts with uppercase (noun or proper name) and user wrote lowercase:
        if (/^[A-ZÄÖÜ]/.test(tw) && /^[a-zäöü]/.test(uw)) {
          hasNounCapitalizationError = true;
          break;
        }
      }

      if (!hasNounCapitalizationError) {
        return {
          isCorrect: true,
          isPartial: false,
          score: 1.0,
          feedback: 'Helt rätt!',
        };
      }
    }

    // German nouns are capitalized. If user wrote lowercase for a noun:
    return {
      isCorrect: false,
      isPartial: true,
      score: 0.7,
      feedback: 'Bokstäverna stämmer, men tänk på stor begynnelsebokstav (tyska substantiv har alltid stor bokstav)!',
      errorTag: 'wrong-capitalization',
    };
  }

  // 7. General mismatch
  return {
    isCorrect: false,
    isPartial: false,
    score: 0,
    feedback: `Inte riktigt. Rätt svar: "${target}".`,
    errorTag: 'general-mismatch',
  };
}

/**
 * Check sentence ordering against a list of accepted sequences.
 */
export function checkSentenceOrder(
  userSequence: string[],
  acceptableOrders: string[][]
): { isCorrect: boolean; feedback: string } {
  const userStr = userSequence.join(' ').trim();
  for (const order of acceptableOrders) {
    if (order.join(' ').trim() === userStr) {
      return {
        isCorrect: true,
        feedback: 'Helt rätt meningsbyggnad!',
      };
    }
  }

  return {
    isCorrect: false,
    feedback: 'Ordföljden stämmer inte. Tänk på V2-regeln (verbet på plats 2 i huvudsats) eller satsramen.',
  };
}
