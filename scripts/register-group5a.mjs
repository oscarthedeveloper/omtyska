import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X005",
    section: "docs",
    slug: "/fordjupning/ljud-och-prosodi/intonation-och-informationsstruktur",
    href: "/docs/fordjupning/ljud-och-prosodi/intonation-och-informationsstruktur",
    title: "Intonation och informationsstruktur",
    suggestedLevel: "B2",
    prerequisites: ["G04", "Y05"],
    requiredCoverage: "Frasering, fokusaccent, stigande/fallande förlopp, ekofrågor och kontrast; flera möjliga uttal i samma skriftliga mening.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Das Wort",
      "Jörg Roche Angewandte Linguistik: Phonetik und Phonologie",
      "IDS Grammis Prosodie und Informationsstruktur"
    ],
    languageReview: "approved",
    learningPathStep: 158,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/LjudOchProsodi/intonation-och-informationsstruktur.mdx",
    reviewEvidence: "internal-crosscheck-intonation-information-structure-approved"
  },
  {
    id: "X016",
    section: "docs",
    slug: "/fordjupning/nominalfras/definithet-specificitet-och-generisk-referens",
    href: "/docs/fordjupning/nominalfras/definithet-specificitet-och-generisk-referens",
    title: "Definithet, specificitet och generisk referens",
    suggestedLevel: "B2",
    prerequisites: ["S03", "S04"],
    requiredCoverage: "Bestämd/obestämd/artikellös nominalfras, artspecifik/generisk/situationell tolkning; flera kontextpar och översättningsskillnader.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Das Wort",
      "Manfred Krifka Generizität und Nominalreferenz",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 159,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Nominalfras/definithet-specificitet-och-generisk-referens.mdx",
    reviewEvidence: "internal-crosscheck-definiteness-genericity-approved"
  },
  {
    id: "X059",
    section: "docs",
    slug: "/fordjupning/semantik/kvantifikation-och-distributivitet",
    href: "/docs/fordjupning/semantik/kvantifikation-och-distributivitet",
    title: "Kvantifikation och distributivitet",
    suggestedLevel: "C1",
    prerequisites: ["R09", "D04"],
    requiredCoverage: "Alla/några/ingen, distributiv/kollektiv läsning, numeraler och räckviddsambiguitet; frasernas bidrag visas i minimal kontext.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Wolfgang Sternefeld Semantik: Eine Einführung",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 160,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/kvantifikation-och-distributivitet.mdx",
    reviewEvidence: "internal-crosscheck-quantification-distributivity-approved"
  },
  {
    id: "X060",
    section: "docs",
    slug: "/fordjupning/semantik/negation-fokus-och-polaritet",
    href: "/docs/fordjupning/semantik/negation-fokus-och-polaritet",
    title: "Negation, fokus och polaritet",
    suggestedLevel: "B2",
    prerequisites: ["Y06"],
    requiredCoverage: "Sats-/lednegation, negativ kongruens som markerat variantsystem, litotes, polaritetskänsliga uttryck och nekande svar.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 161,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/negation-fokus-och-polaritet.mdx",
    reviewEvidence: "internal-crosscheck-negation-polarity-approved"
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

console.log('Group 5A registration complete.');
