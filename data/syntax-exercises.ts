/**
 * Meningsbygget data – exercises testing German syntax:
 * - V2 rule in main clauses (verb is second element)
 * - Sentence frame (Satzklammer: separable prefix or participle at the end)
 * - Subordinate clauses (verb placed at the very end after weil, dass, ob, etc.)
 */

export type SyntaxExercise = {
  id: string;
  theme: 'v2' | 'satsram' | 'bisats' | 'fragor';
  instruction: string;
  swedishMeaning: string;
  chunks: string[];
  acceptableOrders: string[][];
  explanation: string;
};

export const SYNTAX_EXERCISES: SyntaxExercise[] = [
  {
    id: 'syn-01',
    theme: 'v2',
    instruction: 'Bygg huvudsatsen med tidsadverbialet först (omvänd ordföljd / V2).',
    swedishMeaning: 'Idag köper jag en bok.',
    chunks: ['Heute', 'kaufe', 'ich', 'ein Buch'],
    acceptableOrders: [
      ['Heute', 'kaufe', 'ich', 'ein Buch'],
      ['Ein Buch', 'kaufe', 'ich', 'heute'],
      ['Ich', 'kaufe', 'heute', 'ein Buch'],
    ],
    explanation:
      'I tysk huvudsats står det finita verbet ("kaufe") ALLTID på position 2, oavsett vilket led som inleder förfältet.',
  },
  {
    id: 'syn-02',
    theme: 'satsram',
    instruction: 'Bygg meningen med det separerbara verbet "einkaufen" (satsram!).',
    swedishMeaning: 'Han handlar i snabbköpet på lördagar.',
    chunks: ['Er', 'kauft', 'am Samstag', 'im Supermarkt', 'ein'],
    acceptableOrders: [
      ['Er', 'kauft', 'am Samstag', 'im Supermarkt', 'ein'],
      ['Am Samstag', 'kauft', 'er', 'im Supermarkt', 'ein'],
    ],
    explanation:
      'Verbstammen "kauft" står på plats 2 (vänster klammer) medan den separerade partikeln "ein" skjuts till allra sista platsen i satsen (höger klammer).',
  },
  {
    id: 'syn-03',
    theme: 'bisats',
    instruction: 'Bygg bisatsen efter konjunktionen "weil".',
    swedishMeaning: '... eftersom hon läser en intressant bok.',
    chunks: ['weil', 'sie', 'ein interessantes Buch', 'liest'],
    acceptableOrders: [
      ['weil', 'sie', 'ein interessantes Buch', 'liest'],
    ],
    explanation:
      'I en underordnad bisats med "weil" placeras det finita verbet ("liest") allra sist i satsen.',
  },
  {
    id: 'syn-04',
    theme: 'satsram',
    instruction: 'Bygg meningen i perfekt med hjälpverbet "hat" och participet "gelesen".',
    swedishMeaning: 'Jag har läst boken igår.',
    chunks: ['Ich', 'habe', 'gestern', 'das Buch', 'gelesen'],
    acceptableOrders: [
      ['Ich', 'habe', 'gestern', 'das Buch', 'gelesen'],
      ['Gestern', 'habe', 'ich', 'das Buch', 'gelesen'],
      ['Das Buch', 'habe', 'ich', 'gestern', 'gelesen'],
    ],
    explanation:
      'Hjälpverbet "habe" bildar vänster klammer på plats 2, medan participet "gelesen" stänger satsramen längst bak.',
  },
  {
    id: 'syn-05',
    theme: 'bisats',
    instruction: 'Bygg bisatsen med modalt hjälpverb och perfekt (zu Hause bleiben muss).',
    swedishMeaning: '... eftersom han måste stanna hemma.',
    chunks: ['weil', 'er', 'zu Hause', 'bleiben', 'muss'],
    acceptableOrders: [
      ['weil', 'er', 'zu Hause', 'bleiben', 'muss'],
    ],
    explanation:
      'I en bisats med modalt hjälpverb står huvudverbet i infinitiv näst sist ("bleiben") och det böjda modalverbet sist ("muss").',
  },
  {
    id: 'syn-06',
    theme: 'v2',
    instruction: 'Bygg meningen med bisatsen som förfält (Weil es regnet...).',
    swedishMeaning: 'Eftersom det regnar stannar jag hemma.',
    chunks: ['Weil es regnet,', 'bleibe', 'ich', 'zu Hause'],
    acceptableOrders: [
      ['Weil es regnet,', 'bleibe', 'ich', 'zu Hause'],
    ],
    explanation:
      'Hela bisatsen "Weil es regnet" utgör plats 1 (förfältet). Därför måste huvudsatsens finit verb ("bleibe") komma omedelbart efter kommat!',
  },
];
