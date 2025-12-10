import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
    const categories = ["Research", "Hustler Stories", "Service Spotlights", "Career + Productivity", "Tech & Tools", "CivilTech"];
    const blogPosts = getSortedPostsData('blog');
    const storyPosts = getSortedPostsData('stories').map(s => ({...s, category: "Hustler Stories"}));
    const allPosts = [...blogPosts, ...storyPosts];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">The Blog</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">Insights, stories, and spotlights from the community.</p>
      </header>

      <div className="mb-8 flex justify-center flex-wrap gap-2">
        {categories.map(category => (
            <Badge key={category} variant="outline" className="text-sm px-4 py-1 cursor-pointer hover:bg-accent">{category}</Badge>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map(post => {
            const image = PlaceHolderImages.find(p => p.id === post.imageId);
            const postUrl = post.category === "Hustler Stories" ? `/stories/${post.id}` : `/blog/${post.id}`;
            return (
                <Card key={post.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                    <Link href={postUrl}>
                        <div className="relative w-full h-48">
                            {image && (
                                <Image
                                    src={image.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                />
                            )}
                        </div>
                    </Link>
                    <CardHeader>
                        {post.category && <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>}
                        <CardTitle className="font-headline text-xl leading-tight">
                            <Link href={postUrl}>{post.title}</Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        {post.excerpt && <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>}
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="link" className="p-0">
                            <Link href={postUrl}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </CardFooter>
                </Card>
            )
        })}
      </div>

       <div className="text-center mt-12">
            <Button size="lg">
                Load More Posts
            </Button>
        </div>
    </div>
  );
}
