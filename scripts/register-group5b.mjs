import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X061",
    section: "docs",
    slug: "/fordjupning/semantik/fokuspartiklar-och-deras-rackvidd",
    href: "/docs/fordjupning/semantik/fokuspartiklar-och-deras-rackvidd",
    title: "Fokuspartiklar och deras räckvidd",
    suggestedLevel: "B2",
    prerequisites: ["Y05", "D04"],
    requiredCoverage: "Nur/auch/sogar/erst/noch/schon, association till fokus och presupposition; samma ord med ändrad betoning och skopus.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Manfred Krifka Fokus und Partikeln",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 162,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/fokuspartiklar-och-deras-rackvidd.mdx",
    reviewEvidence: "internal-crosscheck-focus-particles-approved"
  },
  {
    id: "X062",
    section: "docs",
    slug: "/fordjupning/semantik/modalpartiklarnas-system",
    href: "/docs/fordjupning/semantik/modalpartiklarnas-system",
    title: "Modalpartiklarnas system",
    suggestedLevel: "B2",
    prerequisites: ["Y07"],
    requiredCoverage: "Satsmodus, betoning, position, kombinationer och homonymer hos ja/doch/denn/wohl/eben/halt/mal; korta dialoger med ljud.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Harald Weydt Partikeln und Interaktion",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 163,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/modalpartiklarnas-system.mdx",
    reviewEvidence: "internal-crosscheck-modal-particles-approved"
  },
  {
    id: "X064",
    section: "docs",
    slug: "/fordjupning/semantik/presupposition-och-informationsbakgrund",
    href: "/docs/fordjupning/semantik/presupposition-och-informationsbakgrund",
    title: "Presupposition och informationsbakgrund",
    suggestedLevel: "C1",
    prerequisites: ["S03", "Y07"],
    requiredCoverage: "Förutsatt kontra hävdat innehåll, negationstest, partiklar och faktiva konstruktioner; pedagogiska test utan att all pragmatik blir grammatikregel.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Wolfgang Sternefeld Semantik: Eine Einführung",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 164,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/presupposition-och-informationsbakgrund.mdx",
    reviewEvidence: "internal-crosscheck-presuppositions-approved"
  },
  {
    id: "X065",
    section: "docs",
    slug: "/fordjupning/semantik/tema-fokus-och-kontrast",
    href: "/docs/fordjupning/semantik/tema-fokus-och-kontrast",
    title: "Tema, fokus och kontrast",
    suggestedLevel: "B2",
    prerequisites: ["Y05", "G04"],
    requiredCoverage: "Given/ny information, topic/comment, kontrast och fokusaccent; tydlig skillnad mellan textfunktion och nominativsubjekt.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Valéria Molnár Das Topic-Konzept in der Sprachbeschreibung",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 165,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/tema-fokus-och-kontrast.mdx",
    reviewEvidence: "internal-crosscheck-topic-focus-contrast-approved"
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

console.log('Group 5B registration complete.');
