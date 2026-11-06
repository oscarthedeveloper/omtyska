import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X026",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/predikativ-och-sekundar-predikation",
    href: "/docs/fordjupning/verb-och-valens/predikativ-och-sekundar-predikation",
    title: "Predikativ och sekundär predikation",
    suggestedLevel: "C1",
    prerequisites: ["K02", "A01"],
    requiredCoverage: "Subjekts-/objektspredikativ, kopulaverb och predikativ vid fullverb, depiktiv/resultativ läsning; fras kontra satsfunktion.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 126,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/predikativ-och-sekundar-predikation.mdx",
    reviewEvidence: "internal-crosscheck-predication-approved"
  },
  {
    id: "X027",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/reflexivitet-reciprocitet-och-diates",
    href: "/docs/fordjupning/verb-och-valens/reflexivitet-reciprocitet-och-diates",
    title: "Reflexivitet, reciprocitet och diates",
    suggestedLevel: "C1",
    prerequisites: ["V07", "R05"],
    requiredCoverage: "Inherent reflexiv, argumentreflexiv, reciprok och medial konstruktion; bindning och kasusalternation.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Das Wort"
    ],
    languageReview: "approved",
    learningPathStep: 127,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/reflexivitet-reciprocitet-och-diates.mdx",
    reviewEvidence: "internal-crosscheck-reflexivity-approved"
  },
  {
    id: "X028",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/lassen-och-perceptionsverbens-konstruktioner",
    href: "/docs/fordjupning/verb-och-valens/lassen-och-perceptionsverbens-konstruktioner",
    title: "Lassen och perceptionsverbens konstruktioner",
    suggestedLevel: "C1",
    prerequisites: ["V09", "M02"],
    requiredCoverage: "Kausativ/permissiv lassen, AcI, perfekt, hjälpverb och ordföljd; betydelseberoende alternativ och kontroll mot lexikal valens.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 128,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/lassen-och-perceptionsverbens-konstruktioner.mdx",
    reviewEvidence: "internal-crosscheck-lassen-approved"
  },
  {
    id: "X029",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/funktionsverb-och-substantiviska-predikat",
    href: "/docs/fordjupning/verb-och-valens/funktionsverb-och-substantiviska-predikat",
    title: "Funktionsverb och substantiviska predikat",
    suggestedLevel: "C1",
    prerequisites: ["V04", "E06"],
    requiredCoverage: "Zur Verfügung stellen, in Betracht ziehen och liknande konstruktioner; artikel/preposition, valens och skillnad mot lexikalt verb.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Valenzwörterbuch VALBU"
    ],
    languageReview: "approved",
    learningPathStep: 129,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/funktionsverb-och-substantiviska-predikat.mdx",
    reviewEvidence: "internal-crosscheck-fvg-approved"
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

console.log('Group 3B registration complete.');
