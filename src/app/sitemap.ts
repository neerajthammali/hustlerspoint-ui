import { getSortedPostsData } from '@/lib/posts';
import type { MetadataRoute } from 'next';

const URL = 'https://hustlerspoint.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData('blog');
  const stories = getSortedPostsData('stories');

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id, date }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: new Date(date),
  }));

  const storyEntries: MetadataRoute.Sitemap = stories.map(({ id, date }) => ({
    url: `${URL}/stories/${id}`,
    lastModified: new Date(date),
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}/stories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
     {
      url: `${URL}/polls`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${URL}/submit`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [
    ...staticPages,
    ...postEntries,
    ...storyEntries,
  ];
}
