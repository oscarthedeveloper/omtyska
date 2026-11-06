import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X037",
    section: "docs",
    slug: "/fordjupning/verb-och-valens/dubbelperfekt-och-regionala-tempussystem",
    href: "/docs/fordjupning/verb-och-valens/dubbelperfekt-och-regionala-tempussystem",
    title: "Dubbelperfekt och regionala tempussystem",
    suggestedLevel: "C1",
    prerequisites: ["T05", "E09"],
    requiredCoverage: "Dubbla perfektformer, Präteritumschwund och regionala bruksnormer; evidens och standardstatus, skilt från rekommenderad grundproduktion.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Ulrich Engel Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 169,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VerbOchValens/dubbelperfekt-och-regionala-tempussystem.mdx",
    reviewEvidence: "internal-crosscheck-double-perfect-approved"
  },
  {
    id: "X068",
    section: "docs",
    slug: "/fordjupning/text-och-samtal/textbindning-och-referenskedjor",
    href: "/docs/fordjupning/text-och-samtal/textbindning-och-referenskedjor",
    title: "Textbindning och referenskedjor",
    suggestedLevel: "B2",
    prerequisites: ["R01", "R06", "B03"],
    requiredCoverage: "Anafor, ellips, sambandsord och kontinuitet; annoterade sammanhängande texter, inte bara lösryckta exempel.",
    status: "ready",
    sources: [
      "Klaus Brinker Linguistische Textanalyse",
      "Wolfgang Heinemann / Dieter Viehweger Textlinguistik",
      "Duden Band 4 - Die Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 170,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/TextOchSamtal/textbindning-och-referenskedjor.mdx",
    reviewEvidence: "internal-crosscheck-text-cohesion-approved"
  },
  {
    id: "X069",
    section: "docs",
    slug: "/fordjupning/text-och-samtal/informationsstruktur-i-langre-texter",
    href: "/docs/fordjupning/text-och-samtal/informationsstruktur-i-langre-texter",
    title: "Informationsstruktur i längre texter",
    suggestedLevel: "C1",
    prerequisites: ["Y05", "E06"],
    requiredCoverage: "Temaövergångar, informationspackning, nominal/verbal stil och motiverad variation av förfält och passiv.",
    status: "ready",
    sources: [
      "Frantisek Danes Zur linguistischen Analyse der Textstruktur",
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Klaus Brinker Linguistische Textanalyse"
    ],
    languageReview: "approved",
    learningPathStep: 171,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/TextOchSamtal/informationsstruktur-i-langre-texter.mdx",
    reviewEvidence: "internal-crosscheck-discourse-information-structure-approved"
  },
  {
    id: "X070",
    section: "docs",
    slug: "/fordjupning/text-och-samtal/talad-grammatik-och-samtalsenheter",
    href: "/docs/fordjupning/text-och-samtal/talad-grammatik-och-samtalsenheter",
    title: "Talad grammatik och samtalsenheter",
    suggestedLevel: "B2",
    prerequisites: ["Y03", "Y07", "E09"],
    requiredCoverage: "Turer, projektion, respons, eftertankar och reparation; transkriberade korta autentiska sekvenser med etiska/licensierade data.",
    status: "ready",
    sources: [
      "Susanne Günthner Diskursgrammatik",
      "Arnulf Deppermann Grammatik und Interaktion",
      "Duden Band 4 - Die Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 172,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/TextOchSamtal/talad-grammatik-och-samtalsenheter.mdx",
    reviewEvidence: "internal-crosscheck-spoken-grammar-approved"
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

console.log('Group 6A registration complete.');
