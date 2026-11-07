import Image from 'next/image';
import styles from './BrandEmblem.module.css';

export default function BrandEmblem({ className }: { className?: string }) {
  return (
    <span className={[styles.emblem, className].filter(Boolean).join(' ')} aria-hidden="true">
      <span className={styles.portrait}>
        <Image src="/images/brand/wagner.png" alt="" width={160} height={160} sizes="64px" priority />
      </span>
    </span>
  );
}
