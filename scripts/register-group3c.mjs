import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X030",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/passiverbarhet-och-subjektlos-passiv",
    href: "/docs/fordjupning/verb-och-valens/passiverbarhet-och-subjektlos-passiv",
    title: "Passiverbarhet och subjektlös passiv",
    suggestedLevel: "C1",
    prerequisites: ["M07"],
    requiredCoverage: "Valens och semantiska begränsningar, dativ i passiv, aktiv/passiv utan mekaniskt agentlikhetstecken och formellt förfälts-es.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 130,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/passiverbarhet-och-subjektlos-passiv.mdx",
    reviewEvidence: "internal-crosscheck-impersonal-passive-approved"
  },
  {
    id: "X031",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/mottagarpassiv-och-andra-diatesalternativ",
    href: "/docs/fordjupning/verb-och-valens/mottagarpassiv-och-andra-diatesalternativ",
    title: "Mottagarpassiv och andra diatesalternativ",
    suggestedLevel: "C1",
    prerequisites: ["E07", "M08"],
    requiredCoverage: "Bekommen/kriegen/erhalten, relevanta verbklasser, källans register, patient/mottagarperspektiv och gräns mot lexikalt få.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 131,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/mottagarpassiv-och-andra-diatesalternativ.mdx",
    reviewEvidence: "internal-crosscheck-recipient-passive-approved"
  },
  {
    id: "X032",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/modal-infinitiv-och-gerundiv",
    href: "/docs/fordjupning/verb-och-valens/modal-infinitiv-och-gerundiv",
    title: "Modal infinitiv och gerundiv",
    suggestedLevel: "C1",
    prerequisites: ["E07", "E08"],
    requiredCoverage: "Sein/haben + zu, zu-particip och modal tolkning; möjlighet/nödvändighet, negation och formella attributkedjor.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Das Wort"
    ],
    languageReview: "approved",
    learningPathStep: 132,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/modal-infinitiv-och-gerundiv.mdx",
    reviewEvidence: "internal-crosscheck-gerundive-approved"
  },
  {
    id: "X034",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/halvmodala-verb-och-verbala-perifraser",
    href: "/docs/fordjupning/verb-och-valens/halvmodala-verb-och-verbala-perifraser",
    title: "Halvmodala verb och verbala perifraser",
    suggestedLevel: "C1",
    prerequisites: ["V09", "M02"],
    requiredCoverage: "Brauchen, pflegen, scheinen, drohen, versprechen och liknande konstruktioner; kontroll/höjning och lexikal kontra modal läsning.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Helbig/Buscha Deutsche Grammatik",
      "Engel Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 133,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/halvmodala-verb-och-verbala-perifraser.mdx",
    reviewEvidence: "internal-crosscheck-semi-modals-approved"
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

console.log('Group 3C registration complete.');
