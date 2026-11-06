/**
 * Central site configuration for Om Tyska.
 * Keeps branding, URLs, defaults, and feature flags in one place.
 */

export const siteConfig = {
  name: 'Om Tyska',
  nameKebab: 'om-tyska',
  title: 'Om Tyska – En svensk ingång till det tyska',
  description:
    'En svensk ingång till det tyska. Utforska språket med en öppen grammatika, genomgångar, övningar och en väg till djupare förståelse.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.omtyska.se',
  languageOfInstruction: 'sv',
  targetLanguage: 'de',
  storagePrefix: 'omtyska:',
  schemaVersion: 1,
  defaultReadingMode: 'lattsam' as const, // 'lattsam' | 'rigoros'

  nav: [
    { label: 'Grammatik', href: '/grammatik' },
    { label: 'Öva', href: '/verbdrillen' },
    { label: 'Lärstigen', href: '/larstig' },
    { label: 'Blogg', href: '/blog' },
  ],

  tools: [
    {
      id: 'verbdrillen',
      title: 'Verbdrillen',
      href: '/verbdrillen',
      description: 'Öva tyska verbformer, tempus och verb i fullständiga meningar.',
      tag: 'Verb',
    },
    {
      id: 'glosdrillen',
      title: 'Glosdrillen',
      href: '/glosdrillen',
      description: '750 centrala tyska ord och uttryck i tematiska kortlekar.',
      tag: 'Ordförråd',
    },
    {
      id: 'kasusdrillen',
      title: 'Kasusdrillen',
      href: '/kasusdrillen',
      description: 'Träna sambandet mellan styrande ord, kasus, genus och artikel/adjektiv.',
      tag: 'Kasus & fraser',
    },
    {
      id: 'meningsbygget',
      title: 'Meningsbygget',
      href: '/meningsbygget',
      description: 'Bygg tyska meningar med V2-regel, satsram (Satzklammer) och bisatser.',
      tag: 'Syntax',
    },
  ],

  authoritativeSources: [
    {
      name: 'IDS grammis (Leibniz-Institut für Deutsche Sprache)',
      url: 'https://grammis.ids-mannheim.de/',
      description: 'Vetenskaplig grammatikreferens för tysk morfologi, syntax och valens.',
    },
    {
      name: 'Rat für deutsche Rechtschreibung',
      url: 'https://www.rechtschreibrat.com/',
      description: 'Auktoritativ referens för tysk standardstavning och kommatering.',
    },
    {
      name: 'Goethe-Institut',
      url: 'https://www.goethe.de/',
      description: 'CEFR-kalibrering och nivåanpassade kommunikativa exempel.',
    },
  ],
};

export function absoluteUrl(pathname = ''): string {
  if (!pathname) return siteConfig.url;
  if (pathname.startsWith('http')) return pathname;
  return `${siteConfig.url.replace(/\/$/, '')}/${pathname.replace(/^\//, '')}`;
}
