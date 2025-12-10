import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { editorPicks, testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Publish Your Ideas. Build Your Future.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A creator platform for writers, founders, and learners to share powerful
              insights and grow an audience.
            </p>
            <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/blog">Explore Articles <ArrowRight className="ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="#">Learn More</Link>
                </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="w-8 h-8 text-primary" />
              <p className="text-2xl font-bold">5+</p>
              <p className="text-muted-foreground">Articles Published</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              <p className="text-2xl font-bold">12k+</p>
              <p className="text-muted-foreground">Impressions</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-8 h-8 text-primary" />
              <p className="text-2xl font-bold">500+</p>
              <p className="text-muted-foreground">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Editor's Picks</h2>
            <p className="text-muted-foreground mt-2">Hand-picked articles from our editors to get you started.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorPicks.map((pick) => {
              const image = PlaceHolderImages.find(p => p.id === pick.imageId);
              const postUrl = pick.category === "Brands & Inspiration" || pick.category === "Business & Industry" ? `/stories/${pick.id}` : `/blog/${pick.id}`;
              return (
                <Card key={pick.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <Link href={postUrl} className="block">
                    <div className="relative h-48 w-full">
                      {image && (
                        <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                      )}
                    </div>
                  </Link>
                  <CardHeader>
                    <p className="text-sm text-primary font-medium">{pick.category}</p>
                    <CardTitle className="text-xl font-semibold leading-tight"><Link href={postUrl}>{pick.title}</Link></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3">{pick.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 text-xs">
                     {pick.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </CardFooter>
                </Card>
              )
            })}
          </div>
           <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/blog">View All Articles</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* What They're Saying */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What They're Saying</h2>
            <p className="text-muted-foreground mt-2">Testimonials from our readers and community members.</p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <Card key={testimonial.id} className="p-6 bg-background border-0 shadow-none">
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                       <Avatar className="w-12 h-12">
                          <AvatarImage src={PlaceHolderImages.find(p => p.id === testimonial.avatarId)?.imageUrl} alt={testimonial.name} data-ai-hint={PlaceHolderImages.find(p => p.id === testimonial.avatarId)?.imageHint}/>
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>
      </section>
      
      {/* Join the Community */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Community</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Connect with fellow hustlers, founders, and creators. Share ideas, get feedback, and grow together.</p>
            <div className="flex justify-center gap-4 mt-8">
                <Button size="lg">Join Discord</Button>
                <Button size="lg" variant="outline">Join WhatsApp</Button>
            </div>
        </div>
      </section>
    </div>
  );
}
