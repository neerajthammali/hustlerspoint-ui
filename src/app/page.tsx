import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  researchHighlights,
  hustlerStories,
  serviceSpotlight,
  communityPoll,
} from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, ChevronRight, Linkedin, Mic, Rss } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { NewsletterForm } from "@/components/newsletter-form";

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-home");

  const totalVotes = communityPoll.options.reduce(
    (acc, option) => acc + option.votes,
    0
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[300px] max-h-[450px] flex items-center justify-center text-center text-white bg-background">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Real Hustlers, Real Insights
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Research, stories, and community talent. You decide what comes
              next.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Research Highlights */}
            <section>
              <h2 className="font-headline text-3xl font-bold mb-6">
                Your Research Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchHighlights.map((item) => {
                  const image = PlaceHolderImages.find(
                    (p) => p.id === item.imageId
                  );
                  return (
                    <Link href="/blog" key={item.id}>
                      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                        <div className="relative h-40 w-full">
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
                        <CardHeader>
                          <CardTitle className="text-base font-semibold">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Hustlers Stories */}
            <section>
              <h2 className="font-headline text-3xl font-bold mb-6">
                Hustlers Stories from LinkedIn
              </h2>
              <div className="space-y-6">
                {hustlerStories.map((story) => {
                  const image = PlaceHolderImages.find(
                    (p) => p.id === story.imageId
                  );
                  const authorAvatar = PlaceHolderImages.find(
                    (p) => p.id === "avatar-1"
                  );
                  return (
                    <Link
                      href="/stories"
                      key={story.id}
                      className="block"
                    >
                      <Card className="flex flex-col md:flex-row items-center gap-6 p-4 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:border-primary/50">
                        <div className="relative h-40 w-full md:w-1/3 flex-shrink-0 rounded-md overflow-hidden">
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
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold">
                            {story.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">
                            {story.summary}
                          </p>
                          <div className="flex items-center gap-2 mt-4 text-sm">
                            <Linkedin className="h-4 w-4 text-primary" />
                            <span>
                              Story by <strong>{story.author}</strong>
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="space-y-8 lg:sticky top-24 self-start">
            {/* Service Spotlight */}
            <section>
              <Card className="bg-card border border-primary/20 shadow-lg shadow-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <Mic className="h-5 w-5 text-primary" />
                    Today’s Hustler Spotlight
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-background ring-4 ring-primary">
                    <AvatarImage
                      src={
                        PlaceHolderImages.find(
                          (p) => p.id === serviceSpotlight.imageId
                        )?.imageUrl
                      }
                      alt={serviceSpotlight.name}
                      data-ai-hint="person portrait"
                    />
                    <AvatarFallback>
                      {serviceSpotlight.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">{serviceSpotlight.name}</h3>
                  <p className="text-muted-foreground">
                    {serviceSpotlight.service}
                  </p>
                  <Button asChild variant="link" className="mt-2">
                    <Link href="/services">
                      Boost Their Service <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Community Poll */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Community Poll</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">{communityPoll.question}</h4>
                  <div className="space-y-3">
                    {communityPoll.options.map((option, index) => {
                      const percentage =
                        totalVotes > 0
                          ? Math.round((option.votes / totalVotes) * 100)
                          : 0;
                      return (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{option.text}</span>
                            <span className="font-medium">{percentage}%</span>
                          </div>
                          <Progress value={percentage} />
                        </div>
                      );
                    })}
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/polls">
                      Vote Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Newsletter */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">
                    <Rss className="h-5 w-5 text-primary" />
                    Join The Newsletter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get weekly insights, polls, and tool lists delivered to
                    your inbox.
                  </p>
                  <NewsletterForm />
                </CardContent>
              </Card>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
