export default function BrandEmblem({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth=".8" />
    <circle cx="24" cy="24" r="17.5" stroke="currentColor" strokeWidth=".5" />
    <path d="M24 9v30M9 24h30M13.4 13.4l21.2 21.2M13.4 34.6l21.2-21.2" stroke="currentColor" strokeWidth=".6" />
    <path d="M24 13l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="currentColor" />
    <circle cx="24" cy="24" r="3.5" fill="var(--canvas)" />
  </svg>;
}
