import type { MetadataRoute } from 'next';
import { siteConfig } from '@/site.config';
import { getRegistryLessons, getAllPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lessons = getRegistryLessons();
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/grammatik`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/larstig`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/framsteg`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/repetition`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/verbdrillen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/glosdrillen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/kasusdrillen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/meningsbygget`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ];

  const lessonRoutes: MetadataRoute.Sitemap = lessons.map(lesson => ({
    url: `${base}${lesson.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${base}${post.href}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...lessonRoutes, ...blogRoutes];
}
