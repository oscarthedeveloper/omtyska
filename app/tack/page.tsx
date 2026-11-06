import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tack för ditt meddelande — Om Tyska',
};

export default function TackPage() {
  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💌</div>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 400, margin: '0 0 12px' }}>Tack för ditt meddelande!</h1>
      <p style={{ fontSize: '1.125rem', color: '#555', margin: '0 0 var(--s-xl)', lineHeight: 1.5 }}>
        Ditt bidrag hjälper oss att hålla tysk grammatik gratis, tillgänglig och av högsta språkliga
        kvalitet. Vi granskar alla inkomna rättelser noggrant.
      </p>
      <Link href="/" className="pillButton pillButton--primary">
        Tillbaka till startsidan →
      </Link>
    </main>
  );
}
