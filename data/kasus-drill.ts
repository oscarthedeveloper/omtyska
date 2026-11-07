import rawData from './kasus-drill.json' with { type: 'json' };

export type KasusCase = 'nominativ' | 'ackusativ' | 'dativ' | 'genitiv';

export type KasusCategoryKey =
  | 'roller'
  | 'verb'
  | 'tva'
  | 'genitiv'
  | 'prep'
  | 'vaxel'
  | 'verbprep'
  | 'blandat'
  | 'tid'
  | 'ordning';

export interface KasusDrillTarget {
  id: string;
  cue: string;
  answer: string;
  acceptedAlternatives?: string[];
  case: KasusCase;
  function: string;
  governor: string;
  sourceCue?: string;
  number?: string;
  gender?: string;
  requireCaseIdentification?: boolean;
  governorType?: string;
  options?: string[];
}

export interface KasusDrillSource {
  lesson: string;
  file: string;
  line: number;
  section: string;
  fragment: string;
}

export interface KasusDrillItem {
  id: string;
  category: KasusCategoryKey;
  skill: string;
  level: string;
  type: 'fill' | 'choice' | 'multi_fill';
  context: string;
  prompt: string;
  targets: KasusDrillTarget[];
  completedSentence: string;
  source: KasusDrillSource;
  origin: string;
  editorialNote: string;
  reviewStatus: string;
}

export interface KasusCategoryMeta {
  key: KasusCategoryKey;
  label: string;
  description: string;
  count: number;
}

export const KASUS_CATEGORY_DEFINITIONS: Record<
  KasusCategoryKey,
  { label: string; description: string }
> = {
  roller: {
    label: 'Satsens roller och predikativ',
    description: 'Subjekt i olika positioner, nominalt predikativ, rolltolkning och kontrollfrågor.',
  },
  verb: {
    label: 'Kasusstyrande verb',
    description: 'Ackusativ-, dativ- och genitivrektion; upplevardativ samt böjning.',
  },
  tva: {
    label: 'Två objekt',
    description: 'Dativ + ackusativ med självständiga målformer för person och sak.',
  },
  genitiv: {
    label: 'Genitiv och nominala samband',
    description: 'Ägande, possessiv, -(e)s, egennamn, wessen och von-omskrivning.',
  },
  prep: {
    label: 'Prepositioner med fast kasus',
    description: 'Ackusativ-, dativ- och genitivprepositioner ur grundkursen.',
  },
  vaxel: {
    label: 'Växelprepositioner i rumslig betydelse',
    description: 'Rumslig plats/mål-kontrast (wo = dativ, wohin = ackusativ).',
  },
  verbprep: {
    label: 'Verb med preposition',
    description: 'Lexikala förbindelser som warten auf och sich erinnern an.',
  },
  blandat: {
    label: 'Blandad kasusanalys',
    description: 'Meningar med flera parallella kasuslicensierande konstruktioner.',
  },
  tid: {
    label: 'Tids- och måttuttryck',
    description: 'Ackusativ i tids-, varaktighets- och måttuttryck utan preposition.',
  },
  ordning: {
    label: 'Pronomen och objektordning',
    description: 'Pronomenersättning och neutral tysk objektordning.',
  },
};

export const KASUS_DRILL_ITEMS: KasusDrillItem[] = rawData.items as KasusDrillItem[];

export const KASUS_CATEGORIES: KasusCategoryMeta[] = (
  Object.keys(KASUS_CATEGORY_DEFINITIONS) as KasusCategoryKey[]
).map(key => ({
  key,
  label: KASUS_CATEGORY_DEFINITIONS[key].label,
  description: KASUS_CATEGORY_DEFINITIONS[key].description,
  count: KASUS_DRILL_ITEMS.filter(item => item.category === key).length,
}));
