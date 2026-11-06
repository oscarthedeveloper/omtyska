import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X074",
    section: "docs",
    slug: "/fordjupning/variation-och-norm/nationell-och-regional-standardvariation",
    href: "/docs/fordjupning/variation-och-norm/nationell-och-regional-standardvariation",
    title: "Nationell och regional standardvariation",
    suggestedLevel: "B2",
    prerequisites: ["E09"],
    requiredCoverage: "Tyskland/Österrike/Schweiz och andra tyskspråkiga områden, belagda morfosyntaktiska varianter; användningsvillkor, inte korrekt/fel efter land.",
    status: "ready",
    sources: [
      "Ulrich Ammon Die deutsche Sprache in Deutschland, Österreich und der Schweiz",
      "Duden Band 9 - Das Wörterbuch der sprachlichen Zweifelsfälle",
      "Christa Dürscheid et al. Variantengrammatik des Deutschen",
      "Österreichisches Wörterbuch (ÖWB)"
    ],
    languageReview: "approved",
    learningPathStep: 176,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VariationOchNorm/nationell-och-regional-standardvariation.mdx",
    reviewEvidence: "internal-crosscheck-national-varieties-approved"
  },
  {
    id: "X075",
    section: "docs",
    slug: "/fordjupning/variation-och-norm/dialektgrammatik-i-jamforande-oversikt",
    href: "/docs/fordjupning/variation-och-norm/dialektgrammatik-i-jamforande-oversikt",
    title: "Dialektgrammatik i jämförande översikt",
    suggestedLevel: "C1",
    prerequisites: ["E09"],
    requiredCoverage: "Utvalda systematiska skillnader i kasus, relativsatser, negation och verbkluster; namngiven region och tydligt angiven ofullständig dialektinventering.",
    status: "ready",
    sources: [
      "Werner König dtv-Atlas Deutsche Sprache",
      "Peter Wiesinger Die Gliederung der deutschen Dialekte",
      "Ludwig Zehetner Bairisches Deutsch",
      "Duden Band 4 - Die Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 177,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VariationOchNorm/dialektgrammatik-i-jamforande-oversikt.mdx",
    reviewEvidence: "internal-crosscheck-dialect-grammar-approved"
  },
  {
    id: "X076",
    section: "docs",
    slug: "/fordjupning/variation-och-norm/historisk-grammatik-for-modern-textlasning",
    href: "/docs/fordjupning/variation-och-norm/historisk-grammatik-for-modern-textlasning",
    title: "Historisk grammatik för modern textläsning",
    suggestedLevel: "C1",
    prerequisites: ["E09", "E12"],
    requiredCoverage: "Äldre genitiv/dativändelser, konjunktiv, ordföljd och konstruktioner i litteratur; markera tidsperiod och modern produktionsstatus.",
    status: "ready",
    sources: [
      "Hermann Paul Mittelhochdeutsche Grammatik",
      "Peter von Polenz Deutsche Sprachgeschichte vom Spätmittelalter bis zur Gegenwart",
      "Duden Band 4 - Die Grammatik",
      "Wilhelm Schmidt Geschichte der deutschen Sprache"
    ],
    languageReview: "approved",
    learningPathStep: 178,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VariationOchNorm/historisk-grammatik-for-modern-textlasning.mdx",
    reviewEvidence: "internal-crosscheck-historical-grammar-approved"
  },
  {
    id: "X077",
    section: "docs",
    slug: "/fordjupning/variation-och-norm/sprakforandring-och-omstridda-fall",
    href: "/docs/fordjupning/variation-och-norm/sprakforandring-och-omstridda-fall",
    title: "Språkförändring och omstridda fall",
    suggestedLevel: "B2",
    prerequisites: ["E09", "K05", "A05"],
    requiredCoverage: "Rektion, kongruens, adjektivböjning, genderformer och nya lånord; skilj kodifiering, faktiskt bruk och redaktionell rekommendation.",
    status: "ready",
    sources: [
      "Rat für deutsche Rechtschreibung Amtliches Regelwerk",
      "Duden Band 9 - Das Wörterbuch der sprachlichen Zweifelsfälle",
      "Peter Eisenberg Grundriss der deutschen Grammatik",
      "IDS Grammis - Grammatisches Informationssystem"
    ],
    languageReview: "approved",
    learningPathStep: 179,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VariationOchNorm/sprakforandring-och-omstridda-fall.mdx",
    reviewEvidence: "internal-crosscheck-language-change-approved"
  },
  {
    id: "X078",
    section: "docs",
    slug: "/fordjupning/variation-och-norm/grammatik-i-facksprak-och-myndighetstext",
    href: "/docs/fordjupning/variation-och-norm/grammatik-i-facksprak-och-myndighetstext",
    title: "Grammatik i fackspråk och myndighetstext",
    suggestedLevel: "C1",
    prerequisites: ["E06", "E08"],
    requiredCoverage: "Juridik, vetenskap och administration: nominalisering, attributkedjor, passiv/modalitet och tvetydighet; grammatisk analys snarare än allmän stilguide.",
    status: "ready",
    sources: [
      "Thorsten Roelcke Fachsprachen",
      "Duden Band 4 - Die Grammatik",
      "Lothar Hoffmann Kommunikationsmittel Fachsprache",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 180,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/VariationOchNorm/grammatik-i-facksprak-och-myndighetstext.mdx",
    reviewEvidence: "internal-crosscheck-esp-grammar-approved"
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

console.log('Group 6C registration complete.');
