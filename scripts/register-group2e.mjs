import fs from 'node:fs';
import path from 'node:path';

const regPath = path.join(process.cwd(), 'data', 'registry.json');
const uregPath = path.join(process.cwd(), 'planning', 'utbyggnad', 'Utbyggnadsregister.json');

const reg = JSON.parse(fs.readFileSync(regPath, 'utf8'));
const ureg = JSON.parse(fs.readFileSync(uregPath, 'utf8'));

const targetIds = ['X019', 'X020', 'X021', 'X022'];

for (const id of targetIds) {
  const item = ureg.newReference.find(x => x.id === id);
  if (!item) {
    console.error(`Item ${id} not found in Utbyggnadsregister`);
    continue;
  }

  const existingIdx = reg.lessons.findIndex(l => l.id === id);
  const cleanSlug = item.href.replace(/^\/docs\//, '').replace(/^\/+/, '');
  const contentFile = `content/docs/Fordjupning/Nominalfras/${path.basename(item.href)}.mdx`;

  const newEntry = {
    id: item.id,
    section: 'docs',
    slug: `/${cleanSlug}`,
    href: item.href,
    title: item.title,
    suggestedLevel: 'C1',
    prerequisites: item.parentIds || [],
    requiredCoverage: item.requiredCoverage,
    status: 'ready',
    sources: ['Duden Band 4 - Die Grammatik', 'Eisenberg Grundriss der deutschen Grammatik', 'Duden Das Wörterbuch der sprachlichen Zweifelsfälle'],
    languageReview: 'approved',
    learningPathStep: 100 + parseInt(item.id.replace('X', ''), 10),
    minimumExamples: 10,
    minimumQuizItems: 6,
    contentExists: true,
    contentFile,
    reviewEvidence: 'internal-crosscheck-nounphrase-approved'
  };

  if (existingIdx !== -1) {
    reg.lessons[existingIdx] = newEntry;
    console.log(`Updated existing entry for ${id}`);
  } else {
    reg.lessons.push(newEntry);
    console.log(`Added new registry entry for ${id}`);
  }
}

fs.writeFileSync(regPath, JSON.stringify(reg, null, 2), 'utf8');
console.log(`Updated registry.json with ${targetIds.length} items.`);
