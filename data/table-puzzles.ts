export type TablePuzzle = {
  id: string;
  title: string;
  columns: string[];
  answers: string[][];
  lemma?: string;
  note?: string;
  group?: string;
  disabledColumns?: number[];
  alternatives?: Record<string, string[]>;
  href: string;
};
export const CASES = ['Nominativ', 'Ackusativ', 'Dativ', 'Genitiv'];
const genders = ['Maskulinum', 'Femininum', 'Neutrum', 'Plural'];
const strongEndings = [
  ['er', 'e', 'es', 'e'], ['en', 'e', 'es', 'e'],
  ['em', 'er', 'em', 'en'], ['es', 'er', 'es', 'er'],
];
const possessiveEndings = [
  ['', 'e', '', 'e'], ['en', 'e', '', 'e'],
  ['em', 'er', 'em', 'en'], ['es', 'er', 'es', 'er'],
];
const strongWords = [
  { stem: 'dies', group: 'demonstrativa', href: 'demonstrativa' },
  { stem: 'jen', group: 'demonstrativa', href: 'demonstrativa' },
  { stem: 'solch', group: 'demonstrativa', href: 'demonstrativa' },
  { stem: 'welch', group: 'fragande', href: 'frageord' },
  { stem: 'jed', group: 'indefinita', href: 'indefinita' },
  { stem: 'manch', group: 'indefinita', href: 'indefinita' },
];
export const TABLE_PUZZLES: TablePuzzle[] = [
  { id: 'bestamd', title: 'Bestämd artikel', columns: genders, href: '/docs/substantiv/bestamd-artikel', answers: [
    ['der','die','das','die'], ['den','die','das','die'], ['dem','der','dem','den'], ['des','der','des','der'],
  ] },
  { id: 'obestamd', title: 'Obestämd artikel', columns: genders, href: '/docs/substantiv/obestamd-artikel-och-nollartikel', answers: [
    ['ein','eine','ein','–'], ['einen','eine','ein','–'], ['einem','einer','einem','–'], ['eines','einer','eines','–'],
  ] },
  { id: 'kein', title: 'Kein', columns: genders, href: '/docs/syntax/nicht-och-kein', answers: [
    ['kein','keine','kein','keine'], ['keinen','keine','kein','keine'], ['keinem','keiner','keinem','keinen'], ['keines','keiner','keines','keiner'],
  ] },
  ...strongWords.map(({ stem, group, href }): TablePuzzle => ({
    id: stem + 'er', title: stem + 'er', group, columns: genders,
    href: '/docs/pronomen/' + href,
    disabledColumns: stem === 'jed' ? [3] : undefined,
    answers: strongEndings.map(row => row.map((ending, col) => stem === 'jed' && col === 3 ? '–' : stem + ending)),
  })),
  ...['selbe', 'jenige'].map((part): TablePuzzle => ({
    id: 'der' + part, title: 'der' + part, group: 'sammansatta', columns: genders,
    href: '/docs/pronomen/demonstrativa',
    answers: [
      ['der'+part, 'die'+part, 'das'+part, 'die'+part+'n'],
      ['den'+part+'n', 'die'+part, 'das'+part, 'die'+part+'n'],
      ['dem'+part+'n', 'der'+part+'n', 'dem'+part+'n', 'den'+part+'n'],
      ['des'+part+'n', 'der'+part+'n', 'des'+part+'n', 'der'+part+'n'],
    ],
  })),
  ...['mein', 'dein', 'sein', 'ihr', 'unser', 'euer', 'Ihr'].map((stem): TablePuzzle => ({
    id: 'poss-' + stem, title: stem === 'ihr' ? 'ihr (hennes / deras)' : stem === 'Ihr' ? 'Ihr (artigt Ni)' : stem,
    group: 'possessiva', columns: genders, href: '/docs/pronomen/possessiva-artikelord',
    answers: possessiveEndings.map(row => row.map(ending => (stem === 'euer' && ending ? 'eur' : stem) + ending)),
    alternatives: stem === 'euer' || stem === 'unser' ? Object.fromEntries(possessiveEndings.flatMap((row,r) => row.flatMap((ending,c) => ending ? [[`${r}-${c}`, [stem === 'euer' ? stem + ending : 'unsr' + ending, ...(['em','en'].includes(ending) ? [stem + ending.slice(-1)] : [])]]] : []))) : undefined,
  })),
  ...['all', 'beid', 'einig', 'mehrer', 'sämtlich'].map((stem): TablePuzzle => ({
    id: 'plural-' + stem, title: stem + 'e', group: 'pluralord', columns: ['Plural'],
    href: '/docs/pronomen/indefinita',
    note: 'Den här tabellen tränar pluralformer. Samma pluralform används oavsett genus.',
    answers: [['e'], ['e'], ['en'], ['er']].map(row => row.map(ending => stem + ending)),
  })),
  ...['ein', 'kein'].map((stem): TablePuzzle => ({
    id: 'pron-' + stem, title: stem + 'er', group: 'sjalvstandiga', columns: genders,
    href: '/docs/pronomen/indefinita', disabledColumns: stem === 'ein' ? [3] : undefined,
    note: 'Träna självständiga pronomen utan efterföljande substantiv.',
    answers: strongEndings.map(row => row.map((ending, col) => stem === 'ein' && col === 3 ? '–' : stem + ending)),
    alternatives: {'0-2': [stem+'s'], '1-2': [stem+'s']},
  })),
  ...['mein', 'dein', 'sein', 'ihr', 'unser', 'euer', 'Ihr'].map((stem): TablePuzzle => ({
    id: 'pron-' + stem, title: stem === 'ihr' ? 'ihr (hennes / deras)' : stem === 'Ihr' ? 'Ihr (artigt Ni)' : stem,
    group: 'sjalvstandiga-possessiva', columns: genders,
    href: '/docs/pronomen/sjalvstandiga-possessiver',
    note: 'Träna självständiga possessiva pronomen utan efterföljande substantiv. Genus och numerus avser det som ägs. Genitivformerna är ovanliga i bruk.',
    answers: strongEndings.map(row => row.map(ending => (stem === 'euer' ? 'eur' : stem) + ending)),
    alternatives: Object.fromEntries(strongEndings.flatMap((row,r) => row.flatMap((ending,c) => {
      const variants: string[] = [];
      if(stem === 'euer') variants.push(stem + ending);
      if(stem === 'unser') variants.push('unsr' + ending);
      if((stem === 'euer' || stem === 'unser') && ['em','en'].includes(ending)) variants.push(stem + ending.slice(-1));
      if(c === 2 && r < 2) variants.push(stem + 's', ...(stem === 'euer' ? ['eurs'] : []));
      return variants.length ? [[`${r}-${c}`, variants]] : [];
    }))),
  })),
  { id: 'relativ-der', title: 'der / die / das', group: 'relativa', columns: genders,
    href: '/docs/pronomen/relativa-former',
    note: 'Träna relativpronomen. Genus och numerus följer korrelatet; kasus bestäms av funktionen i relativsatsen.',
    answers: [['der','die','das','die'], ['den','die','das','die'], ['dem','der','dem','denen'], ['dessen','deren','dessen','deren']],
  },
  ...[{ lemma: 'Kunde', plural: 'Kunden' }, { lemma: 'Prinz', plural: 'Prinzen' }].map(({lemma,plural}) => ({
    id: `n-${lemma.toLowerCase()}`, title: 'N-deklination', lemma, columns: ['Singular', 'Plural'], href: '/docs/substantiv/n-deklination',
    answers: [['der '+lemma,'die '+plural], ['den '+plural,'die '+plural], ['dem '+plural,'den '+plural], ['des '+plural,'der '+plural]],
  })),
];
export type Piece = { id: string; text: string };
export type Placements = Record<string, string>;
export const cellKey = (row: number, col: number) => `${row}-${col}`;
export function makePieces(puzzle: TablePuzzle): Piece[] {
  return puzzle.answers.flatMap((row,r) => row.flatMap((text,c) => puzzle.disabledColumns?.includes(c) ? [] : [{id: cellKey(r,c),text}]));
}
export function shuffledPieces(puzzle: TablePuzzle): Piece[] {
  const pieces = makePieces(puzzle);
  for(let i=pieces.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pieces[i],pieces[j]]=[pieces[j],pieces[i]];}
  return pieces;
}
export function normalizeTableAnswer(value: string): string {
  return value.normalize('NFC').trim().replace(/\s+/g,' ').replace(/^[-–—]$/,'–');
}
export function isTableAnswerCorrect(value: string, expected: string): boolean {
  return normalizeTableAnswer(value) === normalizeTableAnswer(expected);
}
// A piece moved from another cell swaps with its destination. Replacing from the bank returns the old piece.
export function placePiece(current: Placements, cell: string, piece: string): Placements {
  const next = {...current};
  const origin = Object.keys(next).find(key => next[key] === piece);
  const displaced = next[cell];
  if(origin === cell) return current;
  if(origin){if(displaced) next[origin]=displaced; else delete next[origin];}
  next[cell]=piece;
  return next;
}

export function isPuzzleCellActive(puzzle: TablePuzzle, col: number): boolean {
  return !puzzle.disabledColumns?.includes(col);
}
export function isPuzzleAnswerCorrect(puzzle: TablePuzzle, row: number, col: number, value: string): boolean {
  return isPuzzleCellActive(puzzle, col) && [puzzle.answers[row][col], ...(puzzle.alternatives?.[cellKey(row,col)] ?? [])].some(expected => isTableAnswerCorrect(value, expected));
}
