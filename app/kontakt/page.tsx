import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt och rättelser — Om Tyska',
  description: 'Hör av dig med frågor, förslag på förbättringar eller konkreta språkliga rättelser.',
};

export default function KontaktPage() {
  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: 'var(--s-xxl) var(--s-lg)' }}>
      <header style={{ borderBottom: '1px solid var(--hairline)', paddingBottom: 'var(--s-lg)', marginBottom: 'var(--s-xl)' }}>
        <p className="eyebrow">Kontakt</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 400, margin: '4px 0 8px' }}>Kontakt och rättelser</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', margin: 0 }}>
          Hittat ett stavfel, en oklar förklaring eller har du förslag på ett nytt ämne? Vi uppskattar
          all återkoppling som gör Om Tyska ännu bättre.
        </p>
      </header>

      <form
        action="/tack"
        method="GET"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--s-md)',
          background: 'var(--surface-soft)',
          padding: 'var(--s-xl)',
          borderRadius: 'var(--r-lg)',
          border: '1px solid var(--hairline)',
        }}
      >
        <div>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', marginBottom: 4 }}>
            Ditt namn (valfritt)
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ditt namn..."
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
              background: 'var(--canvas)',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', marginBottom: 4 }}>
            Din e-postadress (om du vill ha svar)
          </label>
          <input
            type="email"
            name="email"
            placeholder="namn@exempel.se..."
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
              background: 'var(--canvas)',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', marginBottom: 4 }}>
            Meddelande eller rättelse
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Beskriv vad du har hittat eller vad du funderar över..."
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 'var(--r-md)',
              border: '1px solid var(--hairline)',
              background: 'var(--canvas)',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <button type="submit" className="pillButton pillButton--primary" style={{ alignSelf: 'flex-start' }}>
          Skicka meddelande →
        </button>
      </form>
    </main>
  );
}
