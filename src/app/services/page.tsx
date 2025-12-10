import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { serviceSpotlight } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";

const spotlights = [
    serviceSpotlight,
    { id: "spot2", name: "John Doe", service: "Full-Stack Development", link: "#", imageId: "avatar-2", bio: "Building scalable web applications from front to back. Specializes in React and Node.js." },
    { id: "spot3", name: "Samantha Bee", service: "Content Marketing Strategy", link: "#", imageId: "avatar-1", bio: "Helping B2B SaaS companies drive organic growth through data-driven content strategies." },
    { id: "spot4", name: "Ken Watanabe", service: "DevOps & Cloud Infrastructure", link: "#", imageId: "avatar-2", bio: "Automating deployments and scaling infrastructure on AWS and Google Cloud." },
];

const todaySpotlight = spotlights[0];
const otherSpotlights = spotlights.slice(1);

export default function ServicesPage() {
  const todayImage = PlaceHolderImages.find(p => p.id === todaySpotlight.imageId);
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Boost Services</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">A directory of talented hustlers from our community. Hire them for your next project.</p>
        <Button asChild className="mt-6">
             <Link href="/submit">Submit Your Service</Link>
        </Button>
      </header>

      {/* Today's Spotlight */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-2"><Star className="text-primary" /> Today's Spotlight</h2>
        <Card className="overflow-hidden md:grid md:grid-cols-3 items-center group/spotlight transition-shadow hover:shadow-xl border-2 border-primary/20 hover:border-primary/40">
           <div className="relative h-64 md:h-full w-full">
            {todayImage && (
              <Image
                src={todayImage.imageUrl}
                alt={todayImage.description}
                fill
                className="object-cover"
                data-ai-hint={todayImage.imageHint}
              />
            )}
            </div>
          <div className="md:col-span-2 p-8">
            <Avatar className="w-24 h-24 mb-4 border-4 border-background ring-4 ring-primary">
                {todayImage && <AvatarImage src={todayImage.imageUrl} alt={todaySpotlight.name} data-ai-hint={todayImage.imageHint}/>}
                <AvatarFallback>{todaySpotlight.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="font-headline text-3xl font-bold">{todaySpotlight.name}</h3>
            <p className="text-primary font-semibold text-lg mb-3">{todaySpotlight.service}</p>
            <p className="text-muted-foreground mb-6">{todaySpotlight.bio}</p>
            <Button asChild>
                <a href={todaySpotlight.link} target="_blank" rel="noopener noreferrer">View Portfolio <ArrowRight className="ml-2" /></a>
            </Button>
          </div>
        </Card>
      </section>

      {/* Other Spotlights */}
      <section>
        <h2 className="text-2xl font-bold font-headline mb-8">Community Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSpotlights.map(spot => {
                const image = PlaceHolderImages.find(p => p.id === spot.imageId);
                return (
                    <Card key={spot.id} className="text-left p-6 flex flex-col items-start justify-between group/card relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 -z-0"></div>
                        <div className="z-10 w-full">
                            <CardHeader className="p-0 flex-row items-center gap-4">
                                <Avatar className="w-16 h-16 shrink-0">
                                    <AvatarImage src={image?.imageUrl} alt={spot.name} data-ai-hint={image?.imageHint}/>
                                    <AvatarFallback>{spot.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="font-headline text-xl">{spot.name}</CardTitle>
                                    <p className="text-primary font-medium text-sm">{spot.service}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0 my-4">
                                <p className="text-muted-foreground text-sm line-clamp-2">{spot.bio}</p>
                            </CardContent>
                            <Button asChild variant="outline" size="sm" className="bg-background">
                                <a href={spot.link} target="_blank" rel="noopener noreferrer">View Profile</a>
                            </Button>
                        </div>
                    </Card>
                )
            })}
        </div>
      </section>
    </div>
  );
}
