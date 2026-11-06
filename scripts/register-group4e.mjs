import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X055",
    section: "docs",
    slug: "/fordjupning/satstyper/konsekutiva-och-instrumentala-satser",
    href: "/docs/fordjupning/satstyper/konsekutiva-och-instrumentala-satser",
    title: "Konsekutiva och instrumentala satser",
    suggestedLevel: "C1",
    prerequisites: ["B03", "B06"],
    requiredCoverage: "Sodass/als dass/indem/dadurch dass, grad/konsekvens/medel och negation; ingen generell ekvivalens mellan alla omskrivningar.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 154,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/konsekutiva-och-instrumentala-satser.mdx",
    reviewEvidence: "internal-crosscheck-consecutive-instrumental-approved"
  },
  {
    id: "X056",
    section: "docs",
    slug: "/fordjupning/satstyper/konditionalitet-och-irrelevansvillkor",
    href: "/docs/fordjupning/satstyper/konditionalitet-och-irrelevansvillkor",
    title: "Konditionalitet och irrelevansvillkor",
    suggestedLevel: "C1",
    prerequisites: ["B07", "M04"],
    requiredCoverage: "Wenn/falls/sofern, V1-villkor, auch wenn/selbst wenn/ob … oder; realitet, relevans och skalära betydelser.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Ulrich Engel Deutsche Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 155,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/konditionalitet-och-irrelevansvillkor.mdx",
    reviewEvidence: "internal-crosscheck-conditional-irrelevance-approved"
  },
  {
    id: "X057",
    section: "docs",
    slug: "/fordjupning/satstyper/kausala-koncessiva-och-adversativa-relationer",
    href: "/docs/fordjupning/satstyper/kausala-koncessiva-och-adversativa-relationer",
    title: "Kausala, koncessiva och adversativa relationer",
    suggestedLevel: "C1",
    prerequisites: ["B03", "B07"],
    requiredCoverage: "Weil/da/zumal/denn, obwohl/trotzdem/während; orsak, motivering av påstående och talhandling hålls isär.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Eva Breindl et al. Handbuch der deutschen Konnektoren (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 156,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/kausala-koncessiva-och-adversativa-relationer.mdx",
    reviewEvidence: "internal-crosscheck-causal-concessive-adversative-approved"
  },
  {
    id: "X058",
    section: "docs",
    slug: "/fordjupning/satstyper/indirekta-fragor-och-inbaddade-utrop",
    href: "/docs/fordjupning/satstyper/indirekta-fragor-och-inbaddade-utrop",
    title: "Indirekta frågor och inbäddade utrop",
    suggestedLevel: "B2",
    prerequisites: ["R07", "B02"],
    requiredCoverage: "Ob/w-led, frågeinnehåll, utropsläsning, grad och selektion av huvudverb; kontext styr tolkningen.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Ulrich Engel Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 157,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/indirekta-fragor-och-inbaddade-utrop.mdx",
    reviewEvidence: "internal-crosscheck-indirect-questions-exclamatives-approved"
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

console.log('Group 4E registration complete.');
