/**
 * Learning Path (Lärstigen) for Om-Tyska.
 *
 * 54 calibrated steps across 7 distinct pedagogical phases.
 */

import registry from '../data/registry.json';

export type LearningPathStep = {
  id: string; // lesson ID, e.g. 'G08', 'P03'
  stepNumber: number;
  title: string;
  description: string;
  href: string;
  level: string;
  time: string;
  phaseId: string;
};

export type LearningPathPhase = {
  id: string;
  title: string;
  description: string;
  steps: LearningPathStep[];
};

const PHASES_CONFIG = [
  {
    id: 'fas-1-ljud-och-begrepp',
    title: 'Fas 1: Ljud, stavning och grammatiska begrepp',
    description: 'Lär känna alfabetet, de tyska omljuden, reglerna för ß och grundläggande grammatiska termer.',
    stepRange: [1, 6],
  },
  {
    id: 'fas-2-verb-och-forsta-meningarna',
    title: 'Fas 2: Verb och de första meningarna',
    description: 'Böj svaga verb i presens, bemästra sein/haben/werden och förstå V2-regeln (verbet på plats 2).',
    stepRange: [7, 12],
  },
  {
    id: 'fas-3-substantiv-och-kasus',
    title: 'Fas 3: Substantiv, artiklar och kasus',
    description: 'Genus, bestämd och obestämd artikel, samt nominativ, ackusativ och dativ med personliga pronomen.',
    stepRange: [13, 23],
  },
  {
    id: 'fas-4-satsram-och-prepositioner',
    title: 'Fas 4: Satsram, separerbara verb och prepositioner',
    description: 'Satzklammer (satsramen), separerbara verb, ackusativ- och dativprepositioner och växelprepositioner.',
    stepRange: [24, 31],
  },
  {
    id: 'fas-5-datid-och-infinitiv',
    title: 'Fas 5: Dåtid och infinitiv',
    description: 'Starka verb, Perfekt med haben/sein, Präteritum, Pluskvamperfekt och zu-infinitiv.',
    stepRange: [32, 38],
  },
  {
    id: 'fas-6-bisatser-och-samband',
    title: 'Fas 6: Bisatser, relativsatser och genitiv',
    description: 'Bisatsinledare (weil, dass, ob), verbet sist i bisats, tidssatser, genitiv och relativsatser.',
    stepRange: [39, 45],
  },
  {
    id: 'fas-7-adjektiv-modalitet-och-passiv',
    title: 'Fas 7: Adjektivböjning, modalitet och passiv',
    description: 'Modalverb, svag/stark/blandad adjektivböjning, Konjunktiv II och passivformerna.',
    stepRange: [46, 54],
  },
];

// Extract steps from registry
const rawSteps = registry.lessons
  .filter(l => typeof l.learningPathStep === 'number')
  .sort((a, b) => (a.learningPathStep as number) - (b.learningPathStep as number));

export const LEARNING_STEPS: LearningPathStep[] = rawSteps.map(s => {
  const stepNum = s.learningPathStep as number;
  const phase =
    PHASES_CONFIG.find(p => stepNum >= p.stepRange[0] && stepNum <= p.stepRange[1]) ||
    PHASES_CONFIG[0];

  return {
    id: s.id,
    stepNumber: stepNum,
    title: s.title,
    description: s.requiredCoverage || '',
    href: s.href,
    level: s.suggestedLevel || 'A1',
    time: stepNum <= 6 ? '10 min' : stepNum <= 25 ? '15 min' : '20 min',
    phaseId: phase.id,
  };
});

export const LEARNING_PATH: LearningPathPhase[] = PHASES_CONFIG.map(phase => ({
  id: phase.id,
  title: phase.title,
  description: phase.description,
  steps: LEARNING_STEPS.filter(s => s.phaseId === phase.id),
}));

export function getLearningStep(hrefOrId: string): LearningPathStep | undefined {
  return LEARNING_STEPS.find(s => s.href === hrefOrId || s.id === hrefOrId);
}

export function getNextLearningStep(hrefOrId: string): LearningPathStep | undefined {
  const index = LEARNING_STEPS.findIndex(s => s.href === hrefOrId || s.id === hrefOrId);
  return index >= 0 && index < LEARNING_STEPS.length - 1 ? LEARNING_STEPS[index + 1] : undefined;
}

export function getPreviousLearningStep(hrefOrId: string): LearningPathStep | undefined {
  const index = LEARNING_STEPS.findIndex(s => s.href === hrefOrId || s.id === hrefOrId);
  return index > 0 ? LEARNING_STEPS[index - 1] : undefined;
}
