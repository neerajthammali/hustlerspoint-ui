import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { hustlerStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = hustlerStories.find((p) => p.id === params.slug);

  if (!story) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === story.imageId);

  return (
    <article className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">Hustler Story</Badge>
        <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{story.title}</h1>
        <div className="flex items-center gap-2 text-muted-foreground">
            <Linkedin className="h-5 w-5" />
            <span>Story by <a href={story.authorLink} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:underline">{story.author}</a></span>
        </div>
      </header>

      {image && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
        <p className="lead">{story.summary}</p>
        
        <blockquote className="border-l-4 border-primary pl-4 italic my-8">
          <h4 className="font-semibold not-italic text-foreground mb-2">Learning Takeaway:</h4>
          <p>{story.takeaway}</p>
        </blockquote>
        
        <p>
          This is a placeholder for the full story content. Replace this with your actual content management system or markdown file.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
        <h2>The Full Analysis</h2>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
        </p>
      </div>
    </article>
  );
}
