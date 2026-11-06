import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X079",
    section: "docs",
    slug: "/fordjupning/ortografi/komma-vid-komplexa-infinitivgrupper",
    href: "/docs/fordjupning/ortografi/komma-vid-komplexa-infinitivgrupper",
    title: "Komma vid komplexa infinitivgrupper",
    suggestedLevel: "B2",
    prerequisites: ["G07", "V09"],
    requiredCoverage: "Aktuellt officiellt regelverk, gruppgränser, korrelat och betydelseskillnader; revisionsdatum och paragraf för varje regel.",
    status: "ready",
    sources: [
      "Rat für deutsche Rechtschreibung Amtliches Regelwerk der deutschen Rechtschreibung (§ 75)",
      "Duden Band 1 - Die deutsche Rechtschreibung",
      "Duden Band 9 - Das Wörterbuch der sprachlichen Zweifelsfälle",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 181,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Ortografi/komma-vid-komplexa-infinitivgrupper.mdx",
    reviewEvidence: "internal-crosscheck-infinitive-comma-approved"
  },
  {
    id: "X080",
    section: "docs",
    slug: "/fordjupning/ortografi/sarskrivning-sammanskrivning-och-bindestreck",
    href: "/docs/fordjupning/ortografi/sarskrivning-sammanskrivning-och-bindestreck",
    title: "Särskrivning, sammanskrivning och bindestreck",
    suggestedLevel: "B2",
    prerequisites: ["G05", "S09", "V06"],
    requiredCoverage: "Verbkombinationer, adjektiv/particip, namn och lånord; flera tillåtna stavningar och relation till grammatisk struktur.",
    status: "ready",
    sources: [
      "Rat für deutsche Rechtschreibung Amtliches Regelwerk der deutschen Rechtschreibung (§§ 34, 39, 44)",
      "Duden Band 1 - Die deutsche Rechtschreibung",
      "Duden Band 9 - Das Wörterbuch der sprachlichen Zweifelsfälle",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Das Wort"
    ],
    languageReview: "approved",
    learningPathStep: 182,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Ortografi/sarskrivning-sammanskrivning-och-bindestreck.mdx",
    reviewEvidence: "internal-crosscheck-compounds-hyphens-approved"
  },
  {
    id: "X081",
    section: "docs",
    slug: "/fordjupning/ortografi/interpunktion-och-satsstruktur",
    href: "/docs/fordjupning/ortografi/interpunktion-och-satsstruktur",
    title: "Interpunktion och satsstruktur",
    suggestedLevel: "B2",
    prerequisites: ["G07", "B01"],
    requiredCoverage: "Kolon, semikolon, tankstreck, parenteser, direkt tal och inskott; valfrihet och betydelse/pragmatik skild från obligatoriskt komma.",
    status: "ready",
    sources: [
      "Rat für deutsche Rechtschreibung Amtliches Regelwerk der deutschen Rechtschreibung (§§ 67-106)",
      "Duden Band 1 - Die deutsche Rechtschreibung",
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz"
    ],
    languageReview: "approved",
    learningPathStep: 183,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Ortografi/interpunktion-och-satsstruktur.mdx",
    reviewEvidence: "internal-crosscheck-punctuation-syntax-approved"
  },
  {
    id: "X082",
    section: "docs",
    slug: "/fordjupning/referensmetod/grammatiska-analyser-och-deras-granser",
    href: "/docs/fordjupning/referensmetod/grammatiska-analyser-och-deras-granser",
    title: "Grammatiska analyser och deras gränser",
    suggestedLevel: "C1",
    prerequisites: ["G08", "E12"],
    requiredCoverage: "Satsledsprov, dependens/konstituens, valens och olika ordklassystem; analysen är en modell, inte en extra korrekthetsnorm.",
    status: "ready",
    sources: [
      "Lucien Tesnière Grundzüge der strukturalen Syntax",
      "Gerhard Helbig / Joachim Buscha Deutsche Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Duden Band 4 - Die Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 184,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Referensmetod/grammatiska-analyser-och-deras-granser.mdx",
    reviewEvidence: "internal-crosscheck-grammar-models-approved"
  },
  {
    id: "X083",
    section: "docs",
    slug: "/fordjupning/referensmetod/grammatiska-tveksamhetsfall-ao",
    href: "/docs/fordjupning/referensmetod/grammatiska-tveksamhetsfall-ao",
    title: "Grammatiska tveksamhetsfall A–Ö",
    suggestedLevel: "B2",
    prerequisites: ["E12"],
    requiredCoverage: "Redaktionellt register över belagda frågor, varianter och källor; länka till ägande sakartikel och håll statusdatum per fall.",
    status: "ready",
    sources: [
      "Duden Band 9 - Das Wörterbuch der sprachlichen Zweifelsfälle",
      "IDS Grammis - Grammatisches Informationssystem",
      "Rat für deutsche Rechtschreibung Amtliches Regelwerk",
      "Christa Dürscheid et al. Variantengrammatik des Deutschen"
    ],
    languageReview: "approved",
    learningPathStep: 185,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Referensmetod/grammatiska-tveksamhetsfall-ao.mdx",
    reviewEvidence: "internal-crosscheck-doubtful-cases-approved"
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

console.log('Group 6D registration complete.');
