import Sidebar from '@/components/Sidebar';
import { getSidebar, getRegistryLessons } from '@/lib/content';
import type { SidebarNode } from '@/lib/types';
import styles from '../docs/docs.module.css';

export default function MerLayout({ children }: { children: React.ReactNode }) {
  let nodes = getSidebar('mer');
  if (nodes.length === 0) {
    const lessons = getRegistryLessons().filter(l => l.section === 'mer');
    nodes = [
      {
        kind: 'category',
        id: 'mer',
        label: 'Mer grammatik & referens',
        position: 1,
        items: lessons.map((l, idx) => ({
          kind: 'link',
          id: l.id,
          label: `[${l.id}] ${l.title}`,
          href: l.href,
          position: idx + 1,
        })),
      } as SidebarNode,
    ];
  }

  return (
    <div className={styles.shell}>
      <Sidebar nodes={nodes} heading="Mer grammatik & referens" />
      {children}
    </div>
  );
}
