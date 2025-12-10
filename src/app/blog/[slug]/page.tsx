import { notFound } from "next/navigation";
import Image from "next/image";
import { researchHighlights, hustlerStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const allPosts = [...researchHighlights, ...hustlerStories.map(s => ({...s, category: "Hustler Stories"}))];
  const post = allPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.imageId);

  return (
    <article className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-4">{post.category}</Badge>
        <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
        <p className="text-muted-foreground text-lg">Posted on Feb 19, 2025</p>
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
        <p className="lead">
            This is a placeholder for the full blog post content. Replace this with your actual content management system or markdown file.
        </p>
        {'summary' in post && <p>{post.summary}</p>}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
        <h2>Subsection Title</h2>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
        </p>
      </div>
    </article>
  );
}
