/**
 * Data contracts and type definitions for Om-Tyska.
 */

export type ReadingMode = 'lattsam' | 'rigoros';

export type Category = {
  id: string; // e.g. 'G', 'S', 'K', 'A', 'R', 'V', 'T', 'M', 'P', 'Y', 'B', 'D', 'E'
  title: string;
  lessons: number;
};

export type RegistryLesson = {
  id: string; // stable ID, e.g. 'G02', 'P03'
  section: 'docs' | 'mer';
  slug: string; // e.g. '/grunder/vokaler'
  href: string; // e.g. '/docs/grunder/vokaler'
  title: string;
  suggestedLevel?: string; // 'A1', 'A2', 'B1', 'B2'
  prerequisites: string[]; // array of lesson IDs
  requiredCoverage?: string;
  status: 'planned' | 'draft' | 'review' | 'ready';
  sources?: string[];
  languageReview?: 'not-started' | 'passed' | 'pending';
  learningPathStep?: number | null;
  minimumExamples?: number;
  minimumQuizItems?: number;
};

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type DocFrontmatter = {
  id: string; // stable lesson ID, e.g. 'P03'
  title: string;
  description: string;
  slug: string;
  sidebar_position: number;
  category: string;
  suggestedLevels?: string[];
  prerequisites?: string[];
  objectives?: string[];
  relatedLessons?: string[];
  rigoros?: boolean;
  seoTitle?: string;
  seoDescription?: string;
};

export type DocMeta = DocFrontmatter & {
  file: string;
  segments: string[];
  href: string;
  categoryPath: string[];
  titleLattsam?: string;
  descriptionLattsam?: string;
};

export type Doc = DocMeta & {
  content: string;
  headings: Heading[];
  contentLattsam?: string;
  headingsLattsam?: Heading[];
};

export type SidebarCategory = {
  id: string;
  label: string;
  position: number;
  items: SidebarNode[];
  rigoros?: boolean;
};

export type SidebarLink = {
  id: string;
  label: string;
  labelLattsam?: string;
  href: string;
  position: number;
  rigoros?: boolean;
  suggestedLevel?: string;
};

export type SidebarNode =
  | ({ kind: 'category' } & SidebarCategory)
  | ({ kind: 'link' } & SidebarLink);

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  href: string;
  file: string;
  mainLessonId?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  headings: Heading[];
};

/* -------------------------------------------------------------
 * Exercise and Quiz Types
 * ----------------------------------------------------------- */

export type ExerciseOption = {
  id: string; // stable ID for choice
  text: string;
  explanation: string;
  isCorrect: boolean;
};

export type ExerciseBase = {
  id: string; // stable exercise ID, e.g. 'P03-ex-1'
  lessonId: string;
  contentVersion: number;
  objective?: string;
  context: string;
  instruction: string;
  errorTags?: string[];
};

export type MultipleChoiceExercise = ExerciseBase & {
  type: 'multiple_choice';
  options: ExerciseOption[];
};

export type FillInBlankExercise = ExerciseBase & {
  type: 'fill_blank';
  sentence: string; // with "___" as blank
  targetAnswer: string;
  acceptableAlternatives?: string[];
  caseSensitive?: boolean;
  feedbackOnErrors?: Record<string, string>;
};

export type SentenceOrderingExercise = ExerciseBase & {
  type: 'sentence_order';
  chunks: string[]; // e.g. ['Im Park', 'geht', 'sie', 'jeden Tag spazieren']
  acceptableOrders: string[][]; // valid sequences of chunks
  explanation: string;
};

export type CaseTrainerExercise = ExerciseBase & {
  type: 'case_analysis';
  prepositionOrVerb: string;
  targetCase: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv';
  gender: 'maskulin' | 'feminin' | 'neutral' | 'plural';
  articleType: 'bestamd' | 'obestamd' | 'ingen';
  basePhrase: string; // e.g. "alt__ Mann"
  targetForm: string; // e.g. "dem alten Mann"
  explanation: string;
};

export type MiniQuizQuestion = {
  id?: string;
  context?: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  feedback?: string[]; // option-specific feedback!
};

export type QuizQuestion =
  | MiniQuizQuestion
  | MultipleChoiceExercise
  | FillInBlankExercise
  | SentenceOrderingExercise
  | CaseTrainerExercise;

export type LearningQuiz = {
  lessonId: string;
  href: string;
  title: string;
  description?: string;
  questions: MiniQuizQuestion[];
};

/* -------------------------------------------------------------
 * Progress and Repetition Types
 * ----------------------------------------------------------- */

export type SavedLearningProgress = {
  schemaVersion: number;
  completedLessons: string[]; // lessonIds
  completedAt: Record<string, string>; // lessonId -> ISO date
  lastVisitedHref: string;
};

export type SavedQuizResult = {
  lessonId: string;
  score: number;
  total: number;
  attempts: number;
  lastAttemptAt: string;
  passed: boolean;
};

export type RepetitionItem = {
  id: string; // item id, e.g. "P03-q1" or "verb:sehen:praesens:du"
  sourceType: 'quiz' | 'verb' | 'vocab' | 'case' | 'syntax';
  lessonId?: string;
  prompt: string;
  targetAnswer: string;
  acceptableAlternatives?: string[];
  explanation: string;
  intervalDays: number; // 1 -> 3 -> 7 -> 14 -> 30
  consecutiveSuccesses: number;
  nextReviewDate: string; // YYYY-MM-DD
  lastReviewedDate?: string;
};
