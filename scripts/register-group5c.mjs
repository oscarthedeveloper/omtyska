import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X063",
    section: "docs",
    slug: "/fordjupning/semantik/anafor-deixis-och-bindning",
    href: "/docs/fordjupning/semantik/anafor-deixis-och-bindning",
    title: "Anafor, deixis och bindning",
    suggestedLevel: "C1",
    prerequisites: ["R01", "R03", "R05", "R06"],
    requiredCoverage: "Person-/tids-/rums-/textdeixis, koreferens, reflexivbindning och kontext; alternativa analyser för svåra gränsfall.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Wolfgang Sternefeld Semantik: Eine Einführung",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 166,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/anafor-deixis-och-bindning.mdx",
    reviewEvidence: "internal-crosscheck-anaphora-deixis-approved"
  },
  {
    id: "X066",
    section: "docs",
    slug: "/fordjupning/semantik/semantiska-roller-och-perspektiv",
    href: "/docs/fordjupning/semantik/semantiska-roller-och-perspektiv",
    title: "Semantiska roller och perspektiv",
    suggestedLevel: "B2",
    prerequisites: ["K01", "V01", "M07"],
    requiredCoverage: "Agent, patient, upplevare, tema och mottagare; relation till valens, subjekt och passiv utan en-till-en-mappning.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Charles Fillmore The Case for Case",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 167,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/semantiska-roller-och-perspektiv.mdx",
    reviewEvidence: "internal-crosscheck-semantic-roles-approved"
  },
  {
    id: "X067",
    section: "docs",
    slug: "/fordjupning/semantik/tids-och-rumsdeixis",
    href: "/docs/fordjupning/semantik/tids-och-rumsdeixis",
    title: "Tids- och rumsdeixis",
    suggestedLevel: "B2",
    prerequisites: ["D02", "D03", "P04", "P06"],
    requiredCoverage: "Nu/då, hit/dit, hin/her och skiftat berättarperspektiv; grammatisk tid och position relativt talare/referenstid.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Karl Bühler Sprachtheorie: Die Darstellungsfunktion der Sprache",
      "Käte Hamburger Die Logik der Dichtung",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 168,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Semantik/tids-och-rumsdeixis.mdx",
    reviewEvidence: "internal-crosscheck-time-space-deixis-approved"
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

console.log('Group 5C registration complete.');
