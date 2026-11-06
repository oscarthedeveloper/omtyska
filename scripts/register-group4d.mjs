import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X051",
    section: "docs",
    slug: "/fordjupning/satstyper/satsform-modus-och-talhandling",
    href: "/docs/fordjupning/satstyper/satsform-modus-och-talhandling",
    title: "Satsform, modus och talhandling",
    suggestedLevel: "B2",
    prerequisites: ["Y03", "V08"],
    requiredCoverage: "Formell satsform (V1/V2/VL) vs illokutionär funktion; självständiga bisatser och modala partiklar.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 150,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/satsform-modus-och-talhandling.mdx",
    reviewEvidence: "internal-crosscheck-speech-acts-approved"
  },
  {
    id: "X052",
    section: "docs",
    slug: "/fordjupning/satstyper/inbaddad-v2-och-oinledda-komplement",
    href: "/docs/fordjupning/satstyper/inbaddad-v2-och-oinledda-komplement",
    title: "Inbäddad V2 och oinledda komplement",
    suggestedLevel: "C1",
    prerequisites: ["B02", "M03"],
    requiredCoverage: "Epistemiska/sägeverb, restriktioner (faktivitet/negation), ordföljd och Konjunktiv I i indirekt tal.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Hubert Haider The Syntax of German",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 151,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/inbaddad-v2-och-oinledda-komplement.mdx",
    reviewEvidence: "internal-crosscheck-embedded-v2-approved"
  },
  {
    id: "X053",
    section: "docs",
    slug: "/fordjupning/satstyper/fria-och-vidareforande-relativsatser",
    href: "/docs/fordjupning/satstyper/fria-och-vidareforande-relativsatser",
    title: "Fria och vidareförande relativsatser",
    suggestedLevel: "C1",
    prerequisites: ["R07", "B02"],
    requiredCoverage: "Wer/was-satser utan korrelat, kasuskollision och korrelattvång, satsreferens med was/wo(r)-föreningar.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Helbig/Buscha Deutsche Grammatik",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 152,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/fria-och-vidareforande-relativsatser.mdx",
    reviewEvidence: "internal-crosscheck-free-relatives-approved"
  },
  {
    id: "X054",
    section: "docs",
    slug: "/fordjupning/satstyper/jamforelsesatser-och-proportionalsatser",
    href: "/docs/fordjupning/satstyper/jamforelsesatser-och-proportionalsatser",
    title: "Jämförelsesatser och proportionalsatser",
    suggestedLevel: "B2",
    prerequisites: ["A07", "B07"],
    requiredCoverage: "Als/wie, als ob/als wenn, ju … desto, hypotetisk jämförelse och ellips; konstruktionernas verbplacering.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Ulrich Engel Deutsche Grammatik",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 153,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Satstyper/jamforelsesatser-och-proportionalsatser.mdx",
    reviewEvidence: "internal-crosscheck-comparative-sentences-approved"
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

console.log('Group 4D registration complete.');
