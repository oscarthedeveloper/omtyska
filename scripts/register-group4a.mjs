import fs from 'node:fs';
import path from 'node:path';

const newLessons = [
  {
    id: "X039",
    section: "docs",
    slug: "/fordjupning/syntax/topologiska-falt-i-fullstandig-modell",
    href: "/docs/fordjupning/syntax/topologiska-falt-i-fullstandig-modell",
    title: "Topologiska fält i fullständig modell",
    suggestedLevel: "C1",
    prerequisites: ["Y01", "Y02", "Y04"],
    requiredCoverage: "Vorfeld, klamrar, Mittelfeld, Nachfeld och yttre fält; tomma fält, flera satstyper och analysalternativ.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Erich Drach Grundgedanken der deutschen Satzlehre",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)"
    ],
    languageReview: "approved",
    learningPathStep: 138,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/topologiska-falt-i-fullstandig-modell.mdx",
    reviewEvidence: "internal-crosscheck-topology-approved"
  },
  {
    id: "X040",
    section: "docs",
    slug: "/fordjupning/syntax/mittfaltets-ordning-och-scrambling",
    href: "/docs/fordjupning/syntax/mittfaltets-ordning-och-scrambling",
    title: "Mittfältets ordning och scrambling",
    suggestedLevel: "C1",
    prerequisites: ["Y05", "K06"],
    requiredCoverage: "Kasus, animacitet, pronomen, bestämdhet, fokus och prosodi; granskade neutral-/kontrastkontexter i stället för rigid TeKaMoLo.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Hubert Haider The Syntax of German",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 139,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/mittfaltets-ordning-och-scrambling.mdx",
    reviewEvidence: "internal-crosscheck-scrambling-approved"
  },
  {
    id: "X041",
    section: "docs",
    slug: "/fordjupning/syntax/efterfalt-och-extraposition",
    href: "/docs/fordjupning/syntax/efterfalt-och-extraposition",
    title: "Efterfält och extraposition",
    suggestedLevel: "C1",
    prerequisites: ["Y02", "Y04", "V09"],
    requiredCoverage: "Satser, infinitivgrupper och jämförelseled efter klammern; obligatoriskt/fakultativt och skillnad mot eftertanke.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Gisela Zifonun et al. Grammatik der deutschen Sprache (IDS)",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 140,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/efterfalt-och-extraposition.mdx",
    reviewEvidence: "internal-crosscheck-extraposition-approved"
  },
  {
    id: "X042",
    section: "docs",
    slug: "/fordjupning/syntax/vansterutstallning-och-fria-teman",
    href: "/docs/fordjupning/syntax/vansterutstallning-och-fria-teman",
    title: "Vänsterutställning och fria teman",
    suggestedLevel: "C1",
    prerequisites: ["Y01", "R06"],
    requiredCoverage: "Linksversetzung, frihängande tema, korrelat och kongruens; vad som står utanför förfältet och hur tal/skrift skiljer sig.",
    status: "ready",
    sources: [
      "Duden Band 4 - Die Grammatik",
      "Peter Eisenberg Grundriss der deutschen Grammatik: Der Satz",
      "Hubert Haider The Syntax of German",
      "Helbig/Buscha Deutsche Grammatik"
    ],
    languageReview: "approved",
    learningPathStep: 141,
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile: "content/docs/Fordjupning/Syntax/vansterutstallning-och-fria-teman.mdx",
    reviewEvidence: "internal-crosscheck-left-dislocation-approved"
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

console.log('Group 4A registration complete.');
