type CaseBoxProps = {
  kasus: 'nominativ' | 'akkusativ' | 'dativ' | 'genitiv';
  fras: string;
  funktion: string;
  oversattning?: string;
};

export default function CaseBox({
  kasus,
  fras,
  funktion,
  oversattning,
}: CaseBoxProps) {
  const caseKey = kasus.slice(0, 3) as 'nom' | 'akk' | 'dat' | 'gen';

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        padding: '8px 12px',
        margin: '6px 4px',
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--hairline)',
        background: 'var(--surface-soft)',
        verticalAlign: 'middle',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span className={`casePill casePill--${caseKey}`}>{kasus}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
          {funktion}
        </span>
      </div>
      <span
        lang="de"
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          fontSize: '1rem',
          marginTop: 4,
        }}
      >
        {fras}
      </span>
      {oversattning && (
        <span lang="sv" style={{ fontSize: '0.8125rem', color: '#555' }}>
          {oversattning}
        </span>
      )}
    </div>
  );
}
