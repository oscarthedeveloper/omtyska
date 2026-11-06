import Sidebar from '@/components/Sidebar';
import { getSidebar, getRegistryCategories, getRegistryLessons } from '@/lib/content';
import type { SidebarNode } from '@/lib/types';
import styles from './docs.module.css';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  // If filesystem sidebar has nodes, use it; otherwise build structured sidebar from registry
  let nodes = getSidebar('docs');
  if (nodes.length === 0) {
    const categories = getRegistryCategories();
    const lessons = getRegistryLessons().filter(l => l.section === 'docs');
    nodes = categories.map((cat, idx) => {
      const catLessons = lessons.filter(l => l.id.startsWith(cat.id));
      return {
        kind: 'category',
        id: cat.id,
        label: cat.title,
        position: idx + 1,
        items: catLessons.map((l, lIdx) => ({
          kind: 'link',
          id: l.id,
          label: `[${l.id}] ${l.title}`,
          href: l.href,
          position: lIdx + 1,
        })),
      } as SidebarNode;
    });
  }

  return (
    <div className={styles.shell}>
      <Sidebar nodes={nodes} heading="Grammatiköversikt" />
      {children}
    </div>
  );
}
