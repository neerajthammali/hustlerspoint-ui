import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostData, getSortedPostsData, getAllPostIds } from "@/lib/posts";
import { format } from "date-fns";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData('blog', params.slug);
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds('blog');
  return paths;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData('blog', params.slug);
  
  if (!post) {
    notFound();
  }

  const allPosts = getSortedPostsData('blog');
  const image = PlaceHolderImages.find(p => p.id === post.imageId);
  const popularPostsData = getSortedPostsData('stories');
  const popularPosts = [...allPosts, ...popularPostsData]
    .filter(p => p.id !== post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <header className="mb-8">
                {post.category && <Badge variant="secondary" className="mb-4">{post.category}</Badge>}
                <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
                <p className="text-muted-foreground text-lg">Posted on {format(new Date(post.date), 'PPP')}</p>
              </header>

              {image && (
                <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            </article>

            <aside className="lg:col-span-1 space-y-8">
                {/* Popular Posts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Popular Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {popularPosts.map(popularPost => {
                            const postImage = PlaceHolderImages.find(p => p.id === popularPost.imageId);
                            const postUrl = popularPost.category === "Hustler Stories" ? `/stories/${popularPost.id}` : `/blog/${popularPost.id}`;
                            return (
                                <Link href={postUrl} key={popularPost.id} className="flex gap-4 items-center group">
                                    <div className="w-20 h-20 relative rounded-md overflow-hidden shrink-0">
                                        {postImage && <Image src={postImage.imageUrl} alt={popularPost.title} fill className="object-cover" />}
                                    </div>
                                    <h4 className="font-semibold leading-tight group-hover:underline flex-1">{popularPost.title}</h4>
                                </Link>
                            )
                        })}
                    </CardContent>
                </Card>
            </aside>
        </div>
    </div>
  );
}
