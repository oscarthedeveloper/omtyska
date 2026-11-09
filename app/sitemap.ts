import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/site.config';
import { getAllDocs, getAllPosts } from '@/lib/content';

const pagePaths = [
  '/',
  '/grammatik',
  '/larstig',
  '/ovningar',
  '/framsteg',
  '/repetition',
  '/verbdrillen',
  '/glosdrillen',
  '/kasusdrillen',
  '/tabellpusslet',
  '/meningsbygget',
  '/blog',
  '/kontakt',
  '/tack',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pagePaths,
    ...getAllDocs('docs').map(doc => doc.href),
    ...getAllDocs('mer').map(doc => doc.href),
    ...getAllPosts().map(post => post.href),
  ];

  const urls = new Set(paths.map(path => new URL(absoluteUrl(path)).href));
  return Array.from(urls, url => ({ url }));
}
