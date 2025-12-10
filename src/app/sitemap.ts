import { getSortedPostsData } from '@/lib/posts';
import type { MetadataRoute } from 'next';

const URL = 'https://hustlerspoint.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData('blog');
  const stories = getSortedPostsData('stories');

  const postEntries: MetadataRoute.Sitemap = posts.map(({ id, date }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: new Date(date).toISOString().split('T')[0],
  }));

  const storyEntries: MetadataRoute.Sitemap = stories.map(({ id, date }) => ({
    url: `${URL}/stories/${id}`,
    lastModified: new Date(date).toISOString().split('T')[0],
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: '2024-07-26',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${URL}/blog`,
      lastModified: '2024-07-26',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}/stories`,
      lastModified: '2024-07-26',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}/services`,
      lastModified: '2024-07-26',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
     {
      url: `${URL}/polls`,
      lastModified: '2024-07-26',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${URL}/submit`,
      lastModified: '2024-07-26',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}/about`,
      lastModified: '2024-07-26',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${URL}/contact`,
      lastModified: '2024-07-26',
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${URL}/privacy`,
      lastModified: '2024-07-26',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}/terms`,
      lastModified: '2024-07-26',
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
