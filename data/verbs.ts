/**
 * Verbdrillen data – German verb paradigms and usage in context.
 */

export type GermanVerbForm = {
  ich: string;
  du: string;
  erSieEs: string;
  wir: string;
  ihr: string;
  sieSie: string;
};

export type GermanVerbEntry = {
  infinitive: string;
  swedish: string;
  type: 'svagt' | 'starkt' | 'blandat' | 'hjalpverb' | 'modalverb';
  auxiliary: 'haben' | 'sein';
  participleII: string;
  praeteritumStamm: string;
  isSeparable?: boolean;
  prefix?: string;
  present: GermanVerbForm;
  praeteritum: GermanVerbForm;
  sampleSentence: {
    german: string;
    swedish: string;
    blankWord: string;
  };
};

export const GERMAN_VERBS: GermanVerbEntry[] = [
  {
    infinitive: 'sein',
    swedish: 'vara',
    type: 'hjalpverb',
    auxiliary: 'sein',
    participleII: 'gewesen',
    praeteritumStamm: 'war',
    present: {
      ich: 'bin',
      du: 'bist',
      erSieEs: 'ist',
      wir: 'sind',
      ihr: 'seid',
      sieSie: 'sind',
    },
    praeteritum: {
      ich: 'war',
      du: 'warst',
      erSieEs: 'war',
      wir: 'waren',
      ihr: 'wart',
      sieSie: 'waren',
    },
    sampleSentence: {
      german: 'Ich ___ gestern in Berlin gewesen.',
      swedish: 'Jag var (har varit) i Berlin igår.',
      blankWord: 'bin',
    },
  },
  {
    infinitive: 'haben',
    swedish: 'ha',
    type: 'hjalpverb',
    auxiliary: 'haben',
    participleII: 'gehabt',
    praeteritumStamm: 'hatte',
    present: {
      ich: 'habe',
      du: 'hast',
      erSieEs: 'hat',
      wir: 'haben',
      ihr: 'habt',
      sieSie: 'haben',
    },
    praeteritum: {
      ich: 'hatte',
      du: 'hattest',
      erSieEs: 'hatte',
      wir: 'hatten',
      ihr: 'hattet',
      sieSie: 'hatten',
    },
    sampleSentence: {
      german: 'Wir ___ viel Zeit für das Projekt.',
      swedish: 'Vi har mycket tid för projektet.',
      blankWord: 'haben',
    },
  },
  {
    infinitive: 'werden',
    swedish: 'bli',
    type: 'hjalpverb',
    auxiliary: 'sein',
    participleII: 'geworden',
    praeteritumStamm: 'wurde',
    present: {
      ich: 'werde',
      du: 'wirst',
      erSieEs: 'wird',
      wir: 'werden',
      ihr: 'werdet',
      sieSie: 'werden',
    },
    praeteritum: {
      ich: 'wurde',
      du: 'wurdest',
      erSieEs: 'wurde',
      wir: 'wurden',
      ihr: 'wurdet',
      sieSie: 'wurden',
    },
    sampleSentence: {
      german: 'Er ___ im Sommer 18 Jahre alt.',
      swedish: 'Han blir 18 år gammal i sommar.',
      blankWord: 'wird',
    },
  },
  {
    infinitive: 'sehen',
    swedish: 'se',
    type: 'starkt',
    auxiliary: 'haben',
    participleII: 'gesehen',
    praeteritumStamm: 'sah',
    present: {
      ich: 'sehe',
      du: 'siehst',
      erSieEs: 'sieht',
      wir: 'sehen',
      ihr: 'seht',
      sieSie: 'sehen',
    },
    praeteritum: {
      ich: 'sah',
      du: 'sahst',
      erSieEs: 'sah',
      wir: 'sahen',
      ihr: 'saht',
      sieSie: 'sahen',
    },
    sampleSentence: {
      german: 'Du ___ heute sehr müde aus.',
      swedish: 'Du ser väldigt trött ut idag.',
      blankWord: 'siehst',
    },
  },
  {
    infinitive: 'gehen',
    swedish: 'gå',
    type: 'starkt',
    auxiliary: 'sein',
    participleII: 'gegangen',
    praeteritumStamm: 'ging',
    present: {
      ich: 'gehe',
      du: 'gehst',
      erSieEs: 'geht',
      wir: 'gehen',
      ihr: 'geht',
      sieSie: 'gehen',
    },
    praeteritum: {
      ich: 'ging',
      du: 'gingst',
      erSieEs: 'ging',
      wir: 'gingen',
      ihr: 'gingt',
      sieSie: 'gingen',
    },
    sampleSentence: {
      german: 'Er ist nach Hause ___.',
      swedish: 'Han har gått hem.',
      blankWord: 'gegangen',
    },
  },
  {
    infinitive: 'können',
    swedish: 'kunna',
    type: 'modalverb',
    auxiliary: 'haben',
    participleII: 'gekonnt',
    praeteritumStamm: 'konnte',
    present: {
      ich: 'kann',
      du: 'kannst',
      erSieEs: 'kann',
      wir: 'können',
      ihr: 'könnt',
      sieSie: 'können',
    },
    praeteritum: {
      ich: 'konnte',
      du: 'konntest',
      erSieEs: 'konnte',
      wir: 'konnten',
      ihr: 'konntet',
      sieSie: 'konnten',
    },
    sampleSentence: {
      german: '___ Sie mir bitte helfen?',
      swedish: 'Kan Ni hjälpa mig, snälla?',
      blankWord: 'Können',
    },
  },
  {
    infinitive: 'müssen',
    swedish: 'måste',
    type: 'modalverb',
    auxiliary: 'haben',
    participleII: 'gemusst',
    praeteritumStamm: 'musste',
    present: {
      ich: 'muss',
      du: 'musst',
      erSieEs: 'muss',
      wir: 'müssen',
      ihr: 'müsst',
      sieSie: 'müssen',
    },
    praeteritum: {
      ich: 'musste',
      du: 'musstest',
      erSieEs: 'musste',
      wir: 'mussten',
      ihr: 'musstet',
      sieSie: 'mussten',
    },
    sampleSentence: {
      german: 'Ich ___ heute noch arbeiten.',
      swedish: 'Jag måste arbeta idag också.',
      blankWord: 'muss',
    },
  },
  {
    infinitive: 'aufstehen',
    swedish: 'stiga upp',
    type: 'starkt',
    isSeparable: true,
    prefix: 'auf',
    auxiliary: 'sein',
    participleII: 'aufgestanden',
    praeteritumStamm: 'stand auf',
    present: {
      ich: 'stehe auf',
      du: 'stehst auf',
      erSieEs: 'steht auf',
      wir: 'stehen auf',
      ihr: 'steht auf',
      sieSie: 'stehen auf',
    },
    praeteritum: {
      ich: 'stand auf',
      du: 'standest auf',
      erSieEs: 'stand auf',
      wir: 'standen auf',
      ihr: 'standet auf',
      sieSie: 'standen auf',
    },
    sampleSentence: {
      german: 'Um wie viel Uhr ___ du morgens auf?',
      swedish: 'Vilken tid stiger du upp på morgonen?',
      blankWord: 'stehst',
    },
  },
  {
    infinitive: 'bringen',
    swedish: 'ta med, hämta',
    type: 'blandat',
    auxiliary: 'haben',
    participleII: 'gebracht',
    praeteritumStamm: 'brachte',
    present: {
      ich: 'bringe',
      du: 'bringst',
      erSieEs: 'bringt',
      wir: 'bringen',
      ihr: 'bringt',
      sieSie: 'bringen',
    },
    praeteritum: {
      ich: 'brachte',
      du: 'brachtest',
      erSieEs: 'brachte',
      wir: 'brachten',
      ihr: 'brachtet',
      sieSie: 'brachten',
    },
    sampleSentence: {
      german: 'Sie ___ mir ein Glas Wasser.',
      swedish: 'Hon hämtade ett glas vatten till mig.',
      blankWord: 'brachte',
    },
  },
];
