import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';
import registry from '../data/registry.json';
import type {
  Doc,
  DocMeta,
  Heading,
  SidebarNode,
  BlogPost,
  BlogPostMeta,
  RegistryLesson,
  Category,
} from './types';

export type SectionKey = 'docs' | 'mer';

export const SECTIONS: Record<SectionKey, { dir: string; base: string; label: string }> = {
  docs: { dir: 'docs', base: '/docs', label: 'Grammatik' },
  mer: { dir: 'mer', base: '/mer', label: 'Mer grammatik & referens' },
};

const sectionDir = (section: SectionKey) =>
  path.join(process.cwd(), 'content', SECTIONS[section].dir);

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/* ── Registry Access ─────────────────────────────────────────────── */

export function getRegistryCategories(): Category[] {
  return registry.categories as Category[];
}

export function getRegistryLessons(): RegistryLesson[] {
  return registry.lessons as RegistryLesson[];
}

export function getRegistryLessonById(id: string): RegistryLesson | undefined {
  return (registry.lessons as RegistryLesson[]).find(l => l.id === id);
}

export function getRegistryLessonByHref(href: string): RegistryLesson | undefined {
  return (registry.lessons as RegistryLesson[]).find(l => l.href === href);
}

/* ── Slug Comparison ─────────────────────────────────────────────── */

export function sameSlug(a: string, b: string): boolean {
  const clean = (s: string) => {
    let out = s;
    try {
      out = decodeURIComponent(s);
    } catch {
      /* already decoded */
    }
    return out.normalize('NFC').replace(/^\/+|\/+$/g, '');
  };
  return clean(a) === clean(b);
}

/* ── Headings ────────────────────────────────────────────────────── */

function headingText(raw: string): string {
  return raw
    .replace(/<[^<>]*>/g, '')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/\*([^*]*)\*/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim();
}

export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inFence = false;

  for (const line of content.split('\n')) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const m = line.match(/^(#{1,6})\s+(.*)$/);
    if (!m) continue;

    const level = m[1].length;
    const text = headingText(m[2]);
    if (!text) continue;

    const id = slugger.slug(text);
    if (level === 2 || level === 3) {
      headings.push({ id, text, level: level as 2 | 3 });
    }
  }
  return headings;
}

/* ── Categories ──────────────────────────────────────────────────── */

type CategoryMeta = { label: string; position: number; rigoros?: boolean };

function readCategory(dir: string): CategoryMeta {
  const file = path.join(dir, '_category_.json');
  const fallback = { label: path.basename(dir), position: 999, rigoros: false };
  if (!fs.existsSync(file)) return fallback;
  try {
    const parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
    return {
      label: typeof parsed.label === 'string' ? parsed.label : fallback.label,
      position: typeof parsed.position === 'number' ? parsed.position : 999,
      rigoros: Boolean(parsed.rigoros),
    };
  } catch {
    return fallback;
  }
}

/* ── Document Retrieval ──────────────────────────────────────────── */

const docCache = new Map<SectionKey, DocMeta[]>();

function readDocsDir(dir: string, categoryPath: string[], base: string): DocMeta[] {
  const out: DocMeta[] = [];
  if (!fs.existsSync(dir)) return out;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...readDocsDir(full, [...categoryPath, readCategory(full).label], base));
      continue;
    }
    if (!entry.name.endsWith('.mdx')) continue;

    const { data } = matter(fs.readFileSync(full, 'utf8'));
    const slug: string = String(data.slug ?? '');
    if (!slug) continue;

    const segments = slug.replace(/^\/+/, '').split('/').filter(Boolean);
    const regItem = (registry.lessons as RegistryLesson[]).find(
      l => l.id === data.id || sameSlug(l.slug, slug)
    );

    const lattsamRel = full.replace(
      path.join(process.cwd(), 'content'),
      path.join(process.cwd(), 'content_lattsam')
    );
    let titleLattsam: string | undefined;
    let descriptionLattsam: string | undefined;
    if (fs.existsSync(lattsamRel)) {
      const parsedLattsam = matter(fs.readFileSync(lattsamRel, 'utf8'));
      if (parsedLattsam.data.title) titleLattsam = String(parsedLattsam.data.title);
      if (parsedLattsam.data.description) descriptionLattsam = String(parsedLattsam.data.description);
    }

    out.push({
      id: String(data.id ?? regItem?.id ?? entry.name.replace(/\.mdx$/, '')),
      title: String(data.title ?? regItem?.title ?? segments[segments.length - 1]),
      description: String(data.description ?? regItem?.requiredCoverage ?? ''),
      category: String(data.category ?? categoryPath[0] ?? 'Grunder'),
      slug,
      sidebar_position: Number(data.sidebar_position ?? 999),
      rigoros: Boolean(data.rigoros),
      file: path.relative(process.cwd(), full),
      segments,
      href: `${base}/${segments.join('/')}`,
      categoryPath,
      titleLattsam,
      descriptionLattsam,
      suggestedLevels: regItem?.suggestedLevel ? [regItem.suggestedLevel] : undefined,
      prerequisites: regItem?.prerequisites,
      seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
      seoDescription: data.seoDescription ? String(data.seoDescription) : undefined,
    });
  }
  return out;
}

export function getAllDocs(section: SectionKey = 'docs'): DocMeta[] {
  const cached = docCache.get(section);
  if (cached) return cached;
  const dir = sectionDir(section);
  const docs = fs.existsSync(dir) ? readDocsDir(dir, [], SECTIONS[section].base) : [];
  docCache.set(section, docs);
  return docs;
}

export function getDocBySegments(section: SectionKey, segments: string[]): Doc | null {
  const target = segments.join('/');
  const meta = getAllDocs(section).find(d => sameSlug(d.segments.join('/'), target));
  if (!meta) {
    // Check if registry has this lesson even if MDX file is not yet created
    const regLesson = (registry.lessons as RegistryLesson[]).find(
      l => l.section === section && sameSlug(l.slug, target)
    );
    if (!regLesson) return null;

    // Generate fallback doc representation from registry
    return {
      id: regLesson.id,
      title: regLesson.title,
      description: regLesson.requiredCoverage || '',
      category: 'Grammatik',
      slug: regLesson.slug,
      sidebar_position: 999,
      file: '',
      segments,
      href: regLesson.href,
      categoryPath: ['Grammatik'],
      suggestedLevels: regLesson.suggestedLevel ? [regLesson.suggestedLevel] : undefined,
      prerequisites: regLesson.prerequisites,
      content: `## Om ${regLesson.title}\n\n${regLesson.requiredCoverage || 'Innehåll är under produktion enligt Om-Tyskas register.'}\n\n*Status: ${regLesson.status}*`,
      headings: [
        { id: 'oversikt', text: `Om ${regLesson.title}`, level: 2 },
      ],
    };
  }

  const fullPath = path.join(process.cwd(), meta.file);
  const { content } = matter(fs.readFileSync(fullPath, 'utf8'));

  const lattsamRel = meta.file.replace(/^content\//, 'content_lattsam/');
  const lattsamFull = path.join(process.cwd(), lattsamRel);

  let contentLattsam: string | undefined;
  let headingsLattsam: Heading[] | undefined;
  let descriptionLattsam: string | undefined;
  let titleLattsam: string | undefined;

  if (fs.existsSync(lattsamFull)) {
    const parsedLattsam = matter(fs.readFileSync(lattsamFull, 'utf8'));
    contentLattsam = parsedLattsam.content;
    headingsLattsam = extractHeadings(contentLattsam);
    if (parsedLattsam.data.description) descriptionLattsam = String(parsedLattsam.data.description);
    if (parsedLattsam.data.title) titleLattsam = String(parsedLattsam.data.title);
  }

  return {
    ...meta,
    content,
    headings: extractHeadings(content),
    contentLattsam,
    headingsLattsam,
    descriptionLattsam,
    titleLattsam,
  };
}

/* ── Sidebar ─────────────────────────────────────────────────────── */

function buildSidebarFor(dir: string, base: string): SidebarNode[] {
  const nodes: SidebarNode[] = [];
  if (!fs.existsSync(dir)) return nodes;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const meta = readCategory(full);
      const items = buildSidebarFor(full, base);
      nodes.push({
        kind: 'category',
        id: path.basename(full),
        label: meta.label,
        position: meta.position,
        rigoros: Boolean(meta.rigoros || (items.length > 0 && items.every(i => i.rigoros))),
        items,
      });
      continue;
    }
    if (!entry.name.endsWith('.mdx')) continue;

    const { data } = matter(fs.readFileSync(full, 'utf8'));
    const segments = String(data.slug ?? '').replace(/^\/+/, '').split('/').filter(Boolean);

    const lattsamRel = full.replace(
      path.join(process.cwd(), 'content'),
      path.join(process.cwd(), 'content_lattsam')
    );
    let labelLattsam: string | undefined;
    if (fs.existsSync(lattsamRel)) {
      const parsedLattsam = matter(fs.readFileSync(lattsamRel, 'utf8'));
      if (parsedLattsam.data.title) labelLattsam = String(parsedLattsam.data.title);
    }

    nodes.push({
      kind: 'link',
      id: String(data.id ?? entry.name.replace(/\.mdx$/, '')),
      label: String(data.title ?? entry.name.replace(/\.mdx$/, '')),
      labelLattsam,
      href: `${base}/${segments.join('/')}`,
      position: Number(data.sidebar_position ?? 999),
      rigoros: Boolean(data.rigoros),
    });
  }

  return nodes.sort((a, b) => a.position - b.position || a.label.localeCompare(b.label, 'sv'));
}

const sidebarCache = new Map<SectionKey, SidebarNode[]>();

export function getSidebar(section: SectionKey = 'docs'): SidebarNode[] {
  const cached = sidebarCache.get(section);
  if (cached) return cached;
  const dir = sectionDir(section);
  const nodes = fs.existsSync(dir) ? buildSidebarFor(dir, SECTIONS[section].base) : [];
  sidebarCache.set(section, nodes);
  return nodes;
}

export type OrderedDoc = { id: string; label: string; href: string; rigoros?: boolean };

export function getOrderedDocs(
  section: SectionKey = 'docs',
  mode?: 'lattsam' | 'rigoros'
): OrderedDoc[] {
  const flat: OrderedDoc[] = [];
  const walk = (nodes: SidebarNode[]) => {
    for (const n of nodes) {
      if (mode === 'lattsam' && n.rigoros) continue;
      if (n.kind === 'link') {
        const label = mode === 'lattsam' && n.labelLattsam ? n.labelLattsam : n.label;
        flat.push({ id: n.id, label, href: n.href, rigoros: Boolean(n.rigoros) });
      } else {
        walk(n.items);
      }
    }
  };
  walk(getSidebar(section));
  return flat;
}

export function getDocNeighbours(section: SectionKey, href: string) {
  const rigorosDocs = getOrderedDocs(section, 'rigoros');
  const lattsamDocs = getOrderedDocs(section, 'lattsam');

  const rIdx = rigorosDocs.findIndex(d => d.href === href);
  const lIdx = lattsamDocs.findIndex(d => d.href === href);

  return {
    rigoros: {
      previous: rIdx > 0 ? rigorosDocs[rIdx - 1] : null,
      next: rIdx >= 0 && rIdx < rigorosDocs.length - 1 ? rigorosDocs[rIdx + 1] : null,
    },
    lattsam: {
      previous: lIdx > 0 ? lattsamDocs[lIdx - 1] : null,
      next: lIdx >= 0 && lIdx < lattsamDocs.length - 1 ? lattsamDocs[lIdx + 1] : null,
    },
  };
}

/* ── Blog Retrieval ──────────────────────────────────────────────── */

let blogCache: BlogPostMeta[] | null = null;

export function getAllPosts(): BlogPostMeta[] {
  if (blogCache) return blogCache;
  const posts: BlogPostMeta[] = [];
  if (!fs.existsSync(BLOG_DIR)) return posts;

  for (const name of fs.readdirSync(BLOG_DIR)) {
    if (!name.endsWith('.mdx')) continue;
    const full = path.join(BLOG_DIR, name);
    const { data } = matter(fs.readFileSync(full, 'utf8'));
    const dateMatch = name.match(/^(\d{4}-\d{2}-\d{2})-/);
    const slug = String(
      data.slug ?? name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx$/, '')
    );

    posts.push({
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      date: dateMatch ? dateMatch[1] : (data.date ? String(data.date) : '2026-11-06'),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      href: `/blog/${slug}`,
      file: path.relative(process.cwd(), full),
      mainLessonId: data.mainLessonId ? String(data.mainLessonId) : undefined,
    });
  }

  blogCache = posts.sort((a, b) => b.date.localeCompare(a.date));
  return blogCache;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const meta = getAllPosts().find(p => sameSlug(p.slug, slug));
  if (!meta) return null;
  const { content } = matter(fs.readFileSync(path.join(process.cwd(), meta.file), 'utf8'));
  return { ...meta, content, headings: extractHeadings(content) };
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'januari',
    'februari',
    'mars',
    'april',
    'maj',
    'juni',
    'juli',
    'augusti',
    'september',
    'oktober',
    'november',
    'december',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
