import Link from 'next/link';
import styles from './Drill.module.css';

type Props = {
  till: 'verb' | 'glosor' | 'kasus' | 'meningsbygge';
  typ?: string;
  tempus?: string;
  kortlek?: string | number;
  text?: string;
};

export default function Drill({ till, typ, tempus, kortlek, text }: Props) {
  let href = '/verbdrillen';
  let buttonLabel = 'Öppna Verbdrillen';
  let defaultDesc = 'Öva tyska verbformer';

  const params = new URLSearchParams();

  if (till === 'verb') {
    href = '/verbdrillen';
    buttonLabel = 'Öppna Verbdrillen';
    if (typ) params.set('typ', typ);
    if (tempus) params.set('tempus', tempus);
    defaultDesc = 'Öva verbböjning och verb i sammanhang';
  } else if (till === 'glosor') {
    href = '/glosdrillen';
    buttonLabel = 'Öppna Glosdrillen';
    if (kortlek !== undefined) params.set('kortlek', String(kortlek));
    defaultDesc = 'Öva tyska glosor och uttryck';
  } else if (till === 'kasus') {
    href = '/kasusdrillen';
    buttonLabel = 'Öppna Kasusdrillen';
    if (typ) params.set('fokus', typ);
    defaultDesc = 'Träna styrning, kasus och frasböjning';
  } else if (till === 'meningsbygge') {
    href = '/meningsbygget';
    buttonLabel = 'Öppna Meningsbygget';
    if (typ) params.set('tema', typ);
    defaultDesc = 'Bygg tyska meningar med V2 och satsram';
  }

  const query = params.toString();
  const finalHref = `${href}${query ? `?${query}` : ''}`;

  return (
    <aside className={styles.box}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Träna aktivt</p>
        <p className={styles.what}>{text || defaultDesc}</p>
      </div>
      <Link href={finalHref} className="pillButton pillButton--onColor">
        {buttonLabel} →
      </Link>
    </aside>
  );
}
