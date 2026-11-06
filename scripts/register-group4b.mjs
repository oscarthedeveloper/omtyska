import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X043",
    section: "docs",
    slug: "/fordjupning/syntax/satsflator-och-langvaga-beroenden",
    href: "/docs/fordjupning/syntax/satsflator-och-langvaga-beroenden",
    title: "Satsflätor och långväga beroenden",
    suggestedLevel: "C1",
    prerequisites: ["Y01", "Y04"],
    requiredCoverage: "Extraktion, inbäddningsverb, w-rörelse och begränsningar; analys med graderad acceptabilitet och belagda variationer.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Hubert Haider The Syntax of German",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 142,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/satsflator-och-langvaga-beroenden.mdx",
    reviewEvidence: "internal-crosscheck-extraction-approved"
  },
  {
    id: "X044",
    section: "docs",
    slug: "/fordjupning/syntax/kontroll-och-hojning",
    href: "/docs/fordjupning/syntax/kontroll-och-hojning",
    title: "Kontroll och höjning",
    suggestedLevel: "C1",
    prerequisites: ["V09"],
    requiredCoverage: "Vem som tolkas som infinitivens subjekt, subjekt-/objektskontroll och höjning; argumentstruktur och skillnad mot samma-subjekt-regeln.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Helbig/Buscha Deutsche Grammatik",
      "Hubert Haider The Syntax of German"
    ],
    languageReview: "approved",
    learningPathStep: 143,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/kontroll-och-hojning.mdx",
    reviewEvidence: "internal-crosscheck-control-raising-approved"
  },
  {
    id: "X045",
    section: "docs",
    slug: "/fordjupning/syntax/koherenta-och-icke-koherenta-infinitivgrupper",
    href: "/docs/fordjupning/syntax/koherenta-och-icke-koherenta-infinitivgrupper",
    title: "Koherenta och icke-koherenta infinitivgrupper",
    suggestedLevel: "C1",
    prerequisites: ["V09", "E11"],
    requiredCoverage: "Gemensam verbgrupp, extraposition, skopus och konstruktionsberoende alternativ; diagram med tydliga gränser.",
    status: "ready",
    sources: [
      "Gunnar Bech Studien über das deutsche Verbum infinitum",
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 144,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/koherenta-och-icke-koherenta-infinitivgrupper.mdx",
    reviewEvidence: "internal-crosscheck-coherence-approved"
  },
  {
    id: "X046",
    section: "docs",
    slug: "/fordjupning/syntax/verbkluster-oberfeld-och-unterfeld",
    href: "/docs/fordjupning/syntax/verbkluster-oberfeld-och-unterfeld",
    title: "Verbkluster, Oberfeld och Unterfeld",
    suggestedLevel: "C1",
    prerequisites: ["E11", "M02"],
    requiredCoverage: "Två–fyrdelade kluster, obligatoriska/fakultativa ordningar per verbklass och region; varje paradigm förankras i referens.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Ulrich Engel Deutsche Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 145,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/verbkluster-oberfeld-och-unterfeld.mdx",
    reviewEvidence: "internal-crosscheck-verbcluster-approved"
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

console.log('Group 4B registration complete.');
