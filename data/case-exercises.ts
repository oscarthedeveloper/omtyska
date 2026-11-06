/**
 * Kasusdrillen data – calibrated German case exercises.
 * Tests:
 * 1. Identifiera styrning (verb / preposition)
 * 2. Välj rätt kasus (nominativ, ackusativ, dativ, genitiv)
 * 3. Välj genus/numerus
 * 4. Böj artikel och adjektiv korrekt
 */

export type CaseExercise = {
  id: string;
  context: string;
  sentencePrompt: string; // e.g. "Ich helfe ___ alt___ Mann."
  prepositionOrVerb: string;
  rektionExplanation: string;
  governedCase: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv';
  gender: 'maskulin' | 'feminin' | 'neutral' | 'plural';
  targetArticle: string;
  targetEnding: string;
  targetFullPhrase: string; // e.g. "dem alten Mann"
  acceptableAlternatives?: string[];
};

export const CASE_EXERCISES: CaseExercise[] = [
  {
    id: 'case-01',
    context: 'Verbet "helfen" styr dativ.',
    sentencePrompt: 'Ich helfe ___ alt___ Mann.',
    prepositionOrVerb: 'helfen (dativ)',
    rektionExplanation: 'Hjälpa någon: på tyska styr "helfen" alltid dativobjekt!',
    governedCase: 'dativ',
    gender: 'maskulin',
    targetArticle: 'dem',
    targetEnding: 'en',
    targetFullPhrase: 'dem alten Mann',
  },
  {
    id: 'case-02',
    context: 'Prepositionen "für" styr alltid ackusativ.',
    sentencePrompt: 'Das Geschenk ist für ___ neu___ Freundin.',
    prepositionOrVerb: 'für (ackusativ)',
    rektionExplanation: '"für" är en ren ackusativpreposition (DOGFU: durch, ohne, gegen, für, um).',
    governedCase: 'akkusativ',
    gender: 'feminin',
    targetArticle: 'die',
    targetEnding: 'e',
    targetFullPhrase: 'die neue Freundin',
  },
  {
    id: 'case-03',
    context: 'Växelpreposition "in" vid befintlighet på platsen (Var?).',
    sentencePrompt: 'Die Kinder spielen in ___ groß___ Garten.',
    prepositionOrVerb: 'in (dativ vid befintlighet)',
    rektionExplanation: 'Befintlighet på plats (Var leker de?) ger dativ. Der Garten -> dem großen Garten (eller im großen Garten).',
    governedCase: 'dativ',
    gender: 'maskulin',
    targetArticle: 'dem',
    targetEnding: 'en',
    targetFullPhrase: 'dem großen Garten',
    acceptableAlternatives: ['im großen Garten'],
  },
  {
    id: 'case-04',
    context: 'Växelpreposition "in" vid förflyttning till ett mål (Vart?).',
    sentencePrompt: 'Wir gehen heute in ___ neu___ Kino.',
    prepositionOrVerb: 'in (ackusativ vid mål)',
    rektionExplanation: 'Riktning mot ett mål (Vart går vi?) ger ackusativ. Das Kino -> das neue Kino (eller ins neue Kino).',
    governedCase: 'akkusativ',
    gender: 'neutral',
    targetArticle: 'das',
    targetEnding: 'e',
    targetFullPhrase: 'das neue Kino',
    acceptableAlternatives: ['ins neue Kino'],
  },
  {
    id: 'case-05',
    context: 'Prepositionen "mit" styr alltid dativ.',
    sentencePrompt: 'Er fährt mit ___ schnell___ Zug.',
    prepositionOrVerb: 'mit (dativ)',
    rektionExplanation: '"mit" hör till AUS-BEI-MIT-NACH-SEIT-VON-ZU och kräver alltid dativ.',
    governedCase: 'dativ',
    gender: 'maskulin',
    targetArticle: 'dem',
    targetEnding: 'en',
    targetFullPhrase: 'dem schnellen Zug',
  },
  {
    id: 'case-06',
    context: 'Prepositionen "wegen" styr genitiv i skriftspråk.',
    sentencePrompt: 'Wegen ___ stark___ Regens bleiben wir drinnen.',
    prepositionOrVerb: 'wegen (genitiv)',
    rektionExplanation: '"wegen" styr genitiv: der Regen -> des starken Regens.',
    governedCase: 'genitiv',
    gender: 'maskulin',
    targetArticle: 'des',
    targetEnding: 'en',
    targetFullPhrase: 'des starken Regens',
  },
  {
    id: 'case-07',
    context: 'Dativ plural: artikeln "den", adjektiv "-en" och substantivändelse "-n".',
    sentencePrompt: 'Sie hilft ___ klein___ Kindern.',
    prepositionOrVerb: 'helfen (dativ plural)',
    rektionExplanation: 'I dativ plural får bestämd artikel "den" och substantivet lägger till ett "-n" om det saknas.',
    governedCase: 'dativ',
    gender: 'plural',
    targetArticle: 'den',
    targetEnding: 'en',
    targetFullPhrase: 'den kleinen Kindern',
  },
  {
    id: 'case-08',
    context: 'Obestämd artikel blandad böjning i nominativ maskulin.',
    sentencePrompt: 'Ein ___ gut___ Freund ist immer für dich da.',
    prepositionOrVerb: 'Subjekt (nominativ)',
    rektionExplanation: 'Efter "ein" i nominativ maskulinum visar adjektivet maskulinets "-er": ein guter Freund.',
    governedCase: 'nominativ',
    gender: 'maskulin',
    targetArticle: 'Ein',
    targetEnding: 'er',
    targetFullPhrase: 'Ein guter Freund',
  },
];
