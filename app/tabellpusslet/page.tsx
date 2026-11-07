import type { Metadata } from 'next';
import TablePuzzle from './TablePuzzle';
export const metadata: Metadata = {
  title: 'Tabellpusslet — artiklar, pronomen och n-deklination',
  description: 'Fyll tomma böjningstabeller genom att skriva eller placera pusselbitar. Träna artiklar, demonstrativa och frågande ord, possessiva artikelord och n-deklination.',
  alternates: { canonical: '/tabellpusslet' },
};
export default function Page(){return <TablePuzzle/>;}
