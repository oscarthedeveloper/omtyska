import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X033",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/modalitetens-betydelser-och-skopus",
    href: "/docs/fordjupning/verb-och-valens/modalitetens-betydelser-och-skopus",
    title: "Modalitetens betydelser och skopus",
    suggestedLevel: "C1",
    prerequisites: ["M01", "E03", "M06"],
    requiredCoverage: "Epistemisk, deontisk, dynamisk och evidentiell läsning; sollen/wollen, perfektinfinitiv, negation och kontext utan fixerade sannolikhetsprocent.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 134,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/modalitetens-betydelser-och-skopus.mdx",
    reviewEvidence: "internal-crosscheck-modality-scope-approved"
  },
  {
    id: "X035",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/tempus-referenstid-och-aktionsart",
    href: "/docs/fordjupning/verb-och-valens/tempus-referenstid-och-aktionsart",
    title: "Tempus, referenstid och aktionsart",
    suggestedLevel: "C1",
    prerequisites: ["T04", "T08"],
    requiredCoverage: "Tal-/händelse-/referenstid, tillstånd/händelser, telicitet och tidsadverbial; skilj formellt tempus från semantisk aspekt.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Hans Reichenbach Elements of Symbolic Logic",
      "Helbig/Buscha Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 135,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/tempus-referenstid-och-aktionsart.mdx",
    reviewEvidence: "internal-crosscheck-tense-aspect-approved"
  },
  {
    id: "X036",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/tempus-i-indirekt-och-inbaddat-tal",
    href: "/docs/fordjupning/verb-och-valens/tempus-i-indirekt-och-inbaddat-tal",
    title: "Tempus i indirekt och inbäddat tal",
    suggestedLevel: "C1",
    prerequisites: ["M06", "T08"],
    requiredCoverage: "Samtidighet/förtidighet/eftertidighet, skiftande perspektiv och svensk jämförelse; ingen automatisk backshift som universell regel.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 136,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/tempus-i-indirekt-och-inbaddat-tal.mdx",
    reviewEvidence: "internal-crosscheck-indirect-speech-approved"
  },
  {
    id: "X038",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/konjunktivens-gransfall-och-ersattningsformer",
    href: "/docs/fordjupning/verb-och-valens/konjunktivens-gransfall-och-ersattningsformer",
    title: "Konjunktivens gränsfall och ersättningsformer",
    suggestedLevel: "C1",
    prerequisites: ["M03", "M04", "M05", "M06"],
    requiredCoverage: "Formöverlappning, würde-konstruktioner, referat utan misstro, fristående önskan och bevarade fasta former; register och tidsreferens.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Das Wort"
    ],
    languageReview: "approved",
    learningPathStep: 137,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/konjunktivens-gransfall-och-ersattningsformer.mdx",
    reviewEvidence: "internal-crosscheck-subjunctive-boundaries-approved"
  }
];

const regPath = path.join(process.cwd(), 'data', 'registry.json');
const reg = JSON.parse(fs.readFileSync(regPath, 'utf8'));

for (const nl of newLessons) {
  const existingIdx = reg.lessons.findIndex(l => l.id === nl.id);
  if (existingIdx !== -1) {
    reg.lessons[existingIdx] = nl;
    console.log(`Updated existing lesson ${nl.id} in registry.json`);
  } else {
    reg.lessons.push(nl);
    console.log(`Added lesson ${nl.id} to registry.json`);
  }
}

fs.writeFileSync(regPath, JSON.stringify(reg, null, 2) + '\n', 'utf8');

const utbyggnadPath = path.join(process.cwd(), 'planning', 'utbyggnad', 'Utbyggnadsregister.json');
if (fs.existsSync(utbyggnadPath)) {
  const utbyggnad = JSON.parse(fs.readFileSync(utbyggnadPath, 'utf8'));
  for (const nl of newLessons) {
    const item = utbyggnad.newReference.find(r => r.id === nl.id);
    if (item) {
      item.status = 'written-and-registered';
      console.log(`Updated status of ${nl.id} in Utbyggnadsregister.json`);
    }
  }
  fs.writeFileSync(utbyggnadPath, JSON.stringify(utbyggnad, null, 2) + '\n', 'utf8');
}

console.log('Group 3D registration complete. Etapp 3 complete!');
