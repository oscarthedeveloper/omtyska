import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X047",
    section: "docs",
    slug: "/fordjupning/syntax/subjektlosa-satser-och-olika-es",
    href: "/docs/fordjupning/syntax/subjektlosa-satser-och-olika-es",
    title: "Subjektlösa satser och olika es",
    suggestedLevel: "C1",
    prerequisites: ["R10", "M07"],
    requiredCoverage: "Argument-es, väder-es, korrelat och förfältsplatshållare; omflyttningstest och opersonlig passiv.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 146,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/subjektlosa-satser-och-olika-es.mdx",
    reviewEvidence: "internal-crosscheck-es-types-approved"
  },
  {
    id: "X048",
    section: "docs",
    slug: "/fordjupning/syntax/kongruensens-gransfall",
    href: "/docs/fordjupning/syntax/kongruensens-gransfall",
    title: "Kongruensens gränsfall",
    suggestedLevel: "C1",
    prerequisites: ["K02", "S02", "R01"],
    requiredCoverage: "Samordnade subjekt, kollektiver, måttfraser, titlar, formell/semantisk kongruens; faktisk variation med register.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Helbig/Buscha Deutsche Grammatik",
      "Ulrich Engel Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 147,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/kongruensens-gransfall.mdx",
    reviewEvidence: "internal-crosscheck-agreement-approved"
  },
  {
    id: "X049",
    section: "docs",
    slug: "/fordjupning/syntax/koordination-pa-flera-nivaer",
    href: "/docs/fordjupning/syntax/koordination-pa-flera-nivaer",
    title: "Koordination på flera nivåer",
    suggestedLevel: "C1",
    prerequisites: ["B01"],
    requiredCoverage: "Ord-, fras- och satskoordination, asymmetri, korrelativa par och semantiska relationer; koordinationsgränser dokumenteras.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 148,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/koordination-pa-flera-nivaer.mdx",
    reviewEvidence: "internal-crosscheck-coordination-approved"
  },
  {
    id: "X050",
    section: "docs",
    slug: "/fordjupning/syntax/ellips-gapping-och-gemensamma-satsled",
    href: "/docs/fordjupning/syntax/ellips-gapping-och-gemensamma-satsled",
    title: "Ellips, gapping och gemensamma satsled",
    suggestedLevel: "C1",
    prerequisites: ["B01", "Y02"],
    requiredCoverage: "Samordningsellips, gapping, högernoddelning och register; återställningsbar struktur, tolkning och gränsen mot felaktig ofullständighet.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Hubert Haider The Syntax of German",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 149,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/ellips-gapping-och-gemensamma-satsled.mdx",
    reviewEvidence: "internal-crosscheck-ellipsis-approved"
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

console.log('Group 4C registration complete.');
