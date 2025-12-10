import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { editorPicks, testimonials, hustlerStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, TrendingUp, Users, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/newsletter-form";

export default function Home() {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden z-0">
            <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 550" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stop-color="hsla(217, 91%, 59%, 0.2)"/>
                        <stop offset="100%" stop-color="hsla(217, 91%, 59%, 0)"/>
                    </radialGradient>
                    <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stop-color="hsla(224, 71%, 4%, 0.2)"/>
                        <stop offset="100%" stop-color="hsla(224, 71%, 4%, 0)"/>
                    </radialGradient>
                </defs>
                <rect width="1440" height="550" fill="url(#gradient2)"/>
                <g opacity="0.4">
                    <circle cx="300" cy="200" r="250" fill="url(#gradient1)"/>
                    <circle cx="1100" cy="350" r="300" fill="url(#gradient1)"/>
                    <rect x="100" y="450" width="80" height="100" fill="hsla(217, 50%, 30%, 0.3)"/>
                    <rect x="200" y="400" width="120" height="150" fill="hsla(217, 50%, 30%, 0.4)"/>
                    <rect x="340" y="480" width="50" height="70" fill="hsla(217, 50%, 30%, 0.2)"/>
                    <rect x="410" y="350" width="100" height="200" fill="hsla(217, 50%, 30%, 0.5)"/>
                    <rect x="900" y="420" width="150" height="130" fill="hsla(217, 50%, 30%, 0.35)"/>
                    <rect x="1070" y="380" width="90" height="170" fill="hsla(217, 50%, 30%, 0.45)"/>
                </g>
            </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent z-10"></div>
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline text-white">
              Real Stories, Real Insights.
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              A community-driven platform for founders, builders, and creators to share and discover real-world business insights.
            </p>
            <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
                    <Link href="/blog">Explore Content <ArrowRight className="ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/submit">Become a Contributor</Link>
                </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-slate-200">
              <BookOpen className="w-8 h-8 text-white/80" />
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm">Articles Published</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-200">
              <TrendingUp className="w-8 h-8 text-white/80" />
              <p className="text-2xl font-bold">12k+</p>
              <p className="text-sm">Impressions</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-200">
              <Users className="w-8 h-8 text-white/80" />
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Editor's Picks</h2>
            <p className="text-muted-foreground mt-2">Curated content to kickstart your journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorPicks.map((pick) => {
              const image = PlaceHolderImages.find(p => p.id === pick.imageId);
              const postUrl = pick.category === "Hustler Story" ? `/stories/${pick.id}` : `/blog/${pick.id}`;
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
                    <CardTitle className="text-xl font-semibold leading-tight font-headline"><Link href={postUrl}>{pick.title}</Link></CardTitle>
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
                    <Link href="/blog">View All Content</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* From the Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">From the Stories</h2>
            <p className="text-muted-foreground mt-2">Real stories from the trenches of entrepreneurship.</p>
          </div>
          <div className="space-y-12">
            {hustlerStories.map((story) => {
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
                  <div className="flex flex-col justify-between p-6 md:p-8">
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
          <div className="text-center mt-12">
            <Button asChild>
                <Link href="/stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Stay in the Loop</h2>
            <p className="text-muted-foreground mt-2">
              Subscribe to our newsletter to get weekly insights, stories, and community updates delivered right to your inbox.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
