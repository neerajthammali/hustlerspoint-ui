import Image from "next/image";
import { Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type NewsCardProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  sourceName: string;
  publishedAt: string;
};

export function NewsCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  imageHint, 
  sourceName, 
  publishedAt 
}: NewsCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
        <Badge variant="secondary" className="font-medium">{sourceName}</Badge>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{publishedAt}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
