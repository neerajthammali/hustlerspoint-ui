import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { hustlerStories } from "@/lib/data";

export default function StoriesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Hustlers Stories</h1>
        <p className="text-muted-foreground mt-2 md:text-lg max-w-2xl mx-auto">Real stories from the trenches of entrepreneurship, sourced from LinkedIn.</p>
        <Button asChild className="mt-6">
            <Link href="/submit">Submit Your Story</Link>
        </Button>
      </header>

      <div className="space-y-12">
        {hustlerStories.map(story => {
            const image = PlaceHolderImages.find(p => p.id === story.imageId);
            return (
                <Card key={story.id} className="grid md:grid-cols-2 overflow-hidden transition-shadow hover:shadow-xl border-0 md:border">
                    <div className="relative w-full h-64 md:h-full min-h-[250px]">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                    </div>
                    <div className="flex flex-col justify-between p-6">
                        <div>
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="font-headline text-2xl">
                                  <Link href={`/stories/${story.id}`}>{story.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground mb-4 line-clamp-3">{story.summary}</p>
                                <div className="bg-secondary p-4 rounded-md text-sm">
                                    <h4 className="font-semibold mb-1">Learning Takeaway:</h4>
                                    <p className="italic text-muted-foreground">"{story.takeaway}"</p>
                                </div>
                            </CardContent>
                        </div>
                        <CardFooter className="p-0 pt-6 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Linkedin className="h-4 w-4" />
                                <span>By <a href={story.authorLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">{story.author}</a></span>
                            </div>
                            <Button asChild variant="link" className="p-0">
                                <Link href={`/stories/${story.id}`}>Read Analysis <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </CardFooter>
                    </div>
                </Card>
            )
        })}
      </div>
    </div>
  );
}
