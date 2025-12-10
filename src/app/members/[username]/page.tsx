import Image from "next/image";
import { members, posts as allPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/post-card";
import { Briefcase, Heart, MessageCircle } from "lucide-react";

export default function MemberProfilePage({ params }: { params: { username: string } }) {
  const member = members.find((m) => m.username === params.username);

  if (!member) {
    notFound();
  }

  const profileBanner = PlaceHolderImages.find((p) => p.id === 'profile-banner');
  const memberAvatar = PlaceHolderImages.find((p) => p.id === member.avatarImageId);
  const memberPosts = allPosts.filter(post => post.authorId === member.id);

  return (
    <div className="bg-secondary/30">
        <div className="relative h-48 md:h-56 w-full">
            {profileBanner && (
            <Image
                src={profileBanner.imageUrl}
                alt={profileBanner.description}
                fill
                className="object-cover"
                data-ai-hint={profileBanner.imageHint}
            />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* Left Sidebar (Profile Info) */}
            <aside className="lg:col-span-1 space-y-6 lg:-mt-32 sticky top-24">
                <Card className="overflow-hidden text-center shadow-lg">
                    <CardContent className="p-6">
                        <Avatar className="w-28 h-28 mx-auto mb-4 border-4 border-card ring-4 ring-accent">
                            <AvatarImage src={memberAvatar?.imageUrl} alt={member.name} data-ai-hint={memberAvatar?.imageHint} />
                            <AvatarFallback>{member.name.slice(0,2)}</AvatarFallback>
                        </Avatar>
                        <h1 className="font-headline text-2xl font-bold">{member.name}</h1>
                        <p className="text-muted-foreground">{member.title}</p>
                        <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 w-full">Connect</Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">About</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {member.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Interests</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {member.interests.map(interest => <Badge key={interest} variant="outline">{interest}</Badge>)}
                    </CardContent>
                </Card>
            </aside>

            {/* Main Content (Activity Feed) */}
            <div className="lg:col-span-3 space-y-6">
                <h2 className="font-headline text-2xl font-bold">Activity</h2>
                {memberPosts.length > 0 ? (
                    memberPosts.map(post => <PostCard key={post.id} post={post} />)
                ) : (
                    <Card className="text-center py-12">
                        <CardContent>
                            <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-4 text-lg font-semibold text-muted-foreground">{member.name} hasn't posted yet.</h3>
                            <p className="mt-1 text-sm text-muted-foreground">Check back later to see their contributions.</p>
                        </CardContent>
                    </Card>
                )}
            </div>
            </div>
        </div>
    </div>
  );
}
