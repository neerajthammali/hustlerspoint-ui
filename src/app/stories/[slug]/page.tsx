import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostData, getSortedPostsData, getAllPostIds } from "@/lib/posts";
import { format } from "date-fns";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData('stories', params.slug);
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
  const paths = getAllPostIds('stories');
  return paths;
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const story = await getPostData('stories', params.slug);

  if (!story) {
    notFound();
  }

  const allPosts = getSortedPostsData('blog');
  const image = PlaceHolderImages.find(p => p.id === story.imageId);
  const popularPostsData = getSortedPostsData('stories');
  const popularPosts = [...allPosts, ...popularPostsData]
    .filter(p => p.id !== story.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">Hustler Story</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{story.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="h-5 w-5" />
                <span>Story by <a href={story.authorLink} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:underline">{story.author}</a> on {format(new Date(story.date), 'PPP')}</span>
            </div>
          </header>

          {image && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={story.title}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p className="lead">{story.excerpt}</p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic my-8">
              <h4 className="font-semibold not-italic text-foreground mb-2">Learning Takeaway:</h4>
              <p>{story.takeaway}</p>
            </blockquote>

             <div dangerouslySetInnerHTML={{ __html: story.contentHtml }} />
          </div>

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
