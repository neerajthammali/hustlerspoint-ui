import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news-card";
import { news, sources } from "@/lib/data";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  const getArticleImage = (id: string): ImagePlaceholder => {
    return PlaceHolderImages.find(p => p.id === id) || PlaceHolderImages[0];
  }

  return (
    <div className="w-full">
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Connect, Collaborate, and Conquer
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              HUSTLERSPOINT is your exclusive hub to network with innovators, share ideas, and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/feed">
                  Join the Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/members">
                  Meet the Members
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Curated News</h2>
            <p className="text-muted-foreground mt-2 md:text-lg">Your daily digest from the front lines of innovation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map(article => {
              const articleImage = getArticleImage(article.imageId);
              const source = sources.find(s => s.id === article.sourceId);
              return (
                <NewsCard 
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  imageUrl={articleImage.imageUrl}
                  imageAlt={articleImage.description}
                  imageHint={articleImage.imageHint}
                  sourceName={source?.name || 'Unknown'}
                  publishedAt={article.publishedAt}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
