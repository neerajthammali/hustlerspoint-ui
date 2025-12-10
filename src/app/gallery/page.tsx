import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image Gallery | HustlersPoint",
    description: "A gallery of all images used on the HustlersPoint website.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Image Gallery</h1>
            <p className="text-muted-foreground mt-2 md:text-lg">A visual inventory of all images available on the site.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PlaceHolderImages.map(image => (
                <Card key={image.id} className="overflow-hidden">
                    <div className="relative w-full aspect-video">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                    <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-2">{`ID: ${image.id}`}</Badge>
                        <p className="text-sm text-muted-foreground">{image.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
}
