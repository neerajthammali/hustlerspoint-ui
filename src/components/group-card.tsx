import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Group, members } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type GroupCardProps = {
  group: Group;
};

export function GroupCard({ group }: GroupCardProps) {
  const bannerImage = PlaceHolderImages.find((p) => p.id === group.bannerImageId);
  const groupMembers = members.filter(m => group.memberIds.includes(m.id));

  return (
    <Card className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative w-full h-32">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={bannerImage.description}
            fill
            className="object-cover"
            data-ai-hint={bannerImage.imageHint}
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-lg leading-tight">{group.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">{group.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-center space-x-2">
        <div className="flex -space-x-2 overflow-hidden">
            {groupMembers.slice(0,3).map(member => {
                const avatar = PlaceHolderImages.find(p => p.id === member.avatarImageId)
                return (
                    <Avatar key={member.id} className="inline-block h-6 w-6 border-2 border-card">
                        <AvatarImage src={avatar?.imageUrl} alt={member.name} data-ai-hint={avatar?.imageHint} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                )
            })}
        </div>
        <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{group.memberIds.length} members</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/groups/${group.id}`}>View Group</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
