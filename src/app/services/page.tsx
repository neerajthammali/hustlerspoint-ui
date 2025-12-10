import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { serviceSpotlight } from "@/lib/data";

const spotlights = [
    serviceSpotlight,
    { id: "spot2", name: "John Doe", service: "Full-Stack Development", link: "#", imageId: "avatar-2" },
    { id: "spot3", name: "Samantha Bee", service: "Content Marketing Strategy", link: "#", imageId: "avatar-1" },
    { id: "spot4", name: "Ken Watanabe", service: "DevOps & Cloud Infrastructure", link: "#", imageId: "avatar-2" },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Boost Services</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">A directory of talented hustlers from our community. Hire them for your next project.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {spotlights.map(spot => {
            const image = PlaceHolderImages.find(p => p.id === spot.imageId);
            return (
                <Card key={spot.id} className="text-center p-6 flex flex-col items-center justify-between transition-shadow hover:shadow-xl">
                    <CardHeader className="p-0">
                         <Avatar className="w-28 h-28 mx-auto mb-4 border-4 border-background ring-4 ring-primary">
                            <AvatarImage src={image?.imageUrl} alt={spot.name} data-ai-hint={image?.imageHint}/>
                            <AvatarFallback>{spot.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-xl">{spot.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 my-4">
                        <p className="text-muted-foreground">{spot.service}</p>
                    </CardContent>
                    <Button asChild variant="outline" className="w-full">
                        <a href={spot.link} target="_blank" rel="noopener noreferrer">View Portfolio</a>
                    </Button>
                </Card>
            )
        })}
      </div>
    </div>
  );
}
