import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | HustlersPoint',
  description: 'A complete list of pages and articles on HustlersPoint.',
};

export default function SitemapPage() {
  const blogPosts = getSortedPostsData('blog');
  const stories = getSortedPostsData('stories');

  const staticPages = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },
    { title: 'Hustler Stories', url: '/stories' },
    { title: 'Boost Services', url: '/services' },
    { title: 'Community Polls', url: '/polls' },
    { title: 'Submit Your Idea', url: '/submit' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact Us', url: '/contact' },
    { title: 'Privacy Policy', url: '/privacy' },
    { title: 'Terms of Service', url: '/terms' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Sitemap</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">
          A complete guide to all the content on HustlersPoint.
        </p>
      </header>

      <div className="space-y-10">
        <section>
          <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
            Main Pages
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
            {staticPages.map((page) => (
              <li key={page.url}>
                <Link
                  href={page.url}
                  className="text-primary hover:underline"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
            Blog Posts & Research
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold border-b pb-2 mb-4">
            Hustler Stories
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {stories.map((story) => (
              <li key={story.id}>
                <Link
                  href={`/stories/${story.id}`}
                  className="text-primary hover:underline"
                >
                  {story.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
