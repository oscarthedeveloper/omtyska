import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X071",
    section: "docs",
    slug: "/fordjupning/text-och-samtal/vorfeldbortfall-och-situationsell-ellips",
    href: "/docs/fordjupning/text-och-samtal/vorfeldbortfall-och-situationsell-ellips",
    title: "Vorfeldbortfall och situationsell ellips",
    suggestedLevel: "B2",
    prerequisites: ["Y01", "Y02"],
    requiredCoverage: "Topic drop, korta svar och situationsförståelse; märk tal/nätmedier och skilj från det formella skriftspråkets norm.",
    status: "ready",
    sources: [
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Duden Band 4 - Die Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Susanne Günthner Diskursgrammatik"
    ],
    languageReview: "approved",
    learningPathStep: 173,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/TextOchSamtal/vorfeldbortfall-och-situationsell-ellips.mdx",
    reviewEvidence: "internal-crosscheck-topic-drop-approved"
  },
  {
    id: "X072",
    section: "docs",
    slug: "/fordjupning/text-och-samtal/diskursmarkorer-och-responsuttryck",
    href: "/docs/fordjupning/text-och-samtal/diskursmarkorer-och-responsuttryck",
    title: "Diskursmarkörer och responsuttryck",
    suggestedLevel: "B2",
    prerequisites: ["Y07", "B03"],
    requiredCoverage: "Also, na ja, tja, ja/nein/doch, kontakt och korrigering; position, prosodi och olika funktioner hos samma form.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Susanne Günthner Diskursgrammatik",
      "Arnulf Deppermann Grammatik und Interaktion",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 174,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/TextOchSamtal/diskursmarkorer-och-responsuttryck.mdx",
    reviewEvidence: "internal-crosscheck-discourse-markers-approved"
  },
  {
    id: "X073",
    section: "docs",
    slug: "/fordjupning/text-och-samtal/referat-evidens-och-perspektiv-i-text",
    href: "/docs/fordjupning/text-och-samtal/referat-evidens-och-perspektiv-i-text",
    title: "Referat, evidens och perspektiv i text",
    suggestedLevel: "C1",
    prerequisites: ["M06", "E06"],
    requiredCoverage: "Direkt/indirekt/fritt indirekt tal, referensskiften och källangivelse; litterär berättarteknik mot vanlig referatgrammatik.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Käte Hamburger Die Logik der Dichtung",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 175,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/TextOchSamtal/referat-evidens-och-perspektiv-i-text.mdx",
    reviewEvidence: "internal-crosscheck-reported-speech-approved"
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

console.log('Group 6B registration complete.');
