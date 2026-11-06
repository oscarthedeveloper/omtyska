import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'public', 'search-index.json');
const REGISTRY_PATH = path.join(ROOT, 'data', 'registry.json');

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) {
      v = v.slice(1, -1).replace(/''/g, "'");
    }
    data[kv[1]] = v;
  }
  return { data, body: raw.slice(m[0].length) };
}

function toPlainText(body) {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^<>]*>/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/\{[^{}]*\}/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`>|]/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function headingsOf(body) {
  const out = [];
  let inFence = false;
  for (const line of body.split('\n')) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^(#{2,3})\s+(.*)$/);
    if (m) {
      const text = m[2].replace(/<[^<>]*>/g, '').replace(/[*_`]/g, '').trim();
      if (text) out.push(text);
    }
  }
  return out;
}

const records = [];
const seenHrefs = new Set();

// 1. Index all MDX files
for (const [dir, base, fallbackCategory] of [
  ['docs', '/docs', 'Grammatik'],
  ['mer', '/mer', 'Mer grammatik & referens'],
]) {
  const root = path.join(ROOT, 'content', dir);
  const rootLattsam = path.join(ROOT, 'content_lattsam', dir);
  for (const file of walk(root)) {
    const raw = fs.readFileSync(file, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    if (!data.slug) continue;
    const segments = data.slug.replace(/^\/+/, '');
    const href = `${base}/${segments}`;
    const category =
      path.relative(root, path.dirname(file)).split(path.sep)[0] || fallbackCategory;

    const lattsamFile = path.join(rootLattsam, path.relative(root, file));
    let tLattsam;
    let dLattsam;
    let bLattsam = '';
    if (fs.existsSync(lattsamFile)) {
      const parsedL = parseFrontmatter(fs.readFileSync(lattsamFile, 'utf8'));
      if (parsedL.data.title) tLattsam = parsedL.data.title;
      if (parsedL.data.description) dLattsam = parsedL.data.description;
      bLattsam = toPlainText(parsedL.body);
    }

    seenHrefs.add(href);
    records.push({
      id: data.id || '',
      t: data.title || segments,
      tl: tLattsam,
      d: data.description || '',
      dl: dLattsam,
      h: href,
      c: category,
      k: 'grammatik',
      r: Boolean(data.rigoros),
      s: headingsOf(body),
      b: toPlainText(body).slice(0, 10000), // generous indexing across long pages
      bl: bLattsam.slice(0, 5000),
    });
  }
}

// 2. Index all registry entries not yet in MDX files
if (fs.existsSync(REGISTRY_PATH)) {
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  for (const lesson of registry.lessons || []) {
    if (!seenHrefs.has(lesson.href)) {
      records.push({
        id: lesson.id,
        t: lesson.title,
        d: lesson.requiredCoverage || '',
        h: lesson.href,
        c: lesson.section === 'docs' ? 'Grammatik' : 'Mer grammatik',
        k: 'grammatik',
        r: false,
        s: ['Översikt', 'Kommande lektion'],
        b: `${lesson.title} ${lesson.requiredCoverage || ''} ${lesson.id} ${lesson.suggestedLevel || ''}`,
      });
    }
  }
}

// 3. Index tools
const tools = [
  {
    t: 'Verbdrillen',
    d: 'Öva tyska verbformer, tempus och verb i fullständiga meningar.',
    h: '/verbdrillen',
    c: 'Öva',
    k: 'verktyg',
    b: 'verbböjning presens perfekt preteritum svaga starka verb sein haben werden',
  },
  {
    t: 'Glosdrillen',
    d: '750 centrala tyska ord och uttryck i 15 tematiska kortlekar.',
    h: '/glosdrillen',
    c: 'Öva',
    k: 'verktyg',
    b: 'glosor ordförråd substantiv verb adjektiv tyska ord',
  },
  {
    t: 'Kasusdrillen',
    d: 'Träna styrning, kasus (nominativ, ackusativ, dativ, genitiv) och frasböjning.',
    h: '/kasusdrillen',
    c: 'Öva',
    k: 'verktyg',
    b: 'kasus nominativ ackusativ dativ genitiv artiklar adjektivändelser prepositioner',
  },
  {
    t: 'Meningsbygget',
    d: 'Bygg tyska meningar med V2-regel, satsram (Satzklammer) och bisatser.',
    h: '/meningsbygget',
    c: 'Öva',
    k: 'verktyg',
    b: 'ordföljd syntax V2 satsram satzklammer huvudsats bisats weil dass',
  },
  {
    t: 'Lärstigen',
    d: '54 rekommenderade steg genom hela den tyska grammatiken.',
    h: '/larstig',
    c: 'Stig',
    k: 'stig',
    b: 'lärstig progression faser rekommenderad ordning steg för steg',
  },
];

records.push(...tools);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(records, null, 2), 'utf8');
console.log(`Byggde sökindex med ${records.length} poster -> ${OUT}`);
