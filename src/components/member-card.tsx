import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { type Member } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

type MemberCardProps = {
  member: Member;
};

export function MemberCard({ member }: MemberCardProps) {
  const avatar = PlaceHolderImages.find((p) => p.id === member.avatarImageId);

  return (
    <Card className="flex flex-col text-center items-center p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Avatar className="w-24 h-24 mb-4 border-4 border-accent">
        <AvatarImage src={avatar?.imageUrl} alt={member.name} data-ai-hint={avatar?.imageHint}/>
        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <CardHeader className="p-0">
        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{member.title}</p>
      </CardHeader>
      <CardContent className="flex-grow my-4">
        <div className="flex flex-wrap justify-center gap-2">
            {member.skills.slice(0, 3).map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button asChild variant="outline">
          <Link href={`/members/${member.username}`}>View Profile <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
