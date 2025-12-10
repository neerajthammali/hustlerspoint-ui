import Image from "next/image";
import Link from "next/link";
import { groups, members, posts as allPosts, type Member } from "@/lib/data";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "@/components/post-card";
import { CheckCircle, Plus } from "lucide-react";

export default function GroupDetailsPage({ params }: { params: { id: string } }) {
  const group = groups.find((g) => g.id === params.id);

  if (!group) {
    notFound();
  }
  
  const bannerImage = PlaceHolderImages.find((p) => p.id === group.bannerImageId);
  const groupMembers = members.filter(m => group.memberIds.includes(m.id));
  const groupPosts = allPosts.filter(p => group.postIds.includes(p.id));

  const MemberAvatar = ({ member }: { member: Member }) => {
    const avatar = PlaceHolderImages.find(p => p.id === member.avatarImageId);
    return (
      <Link href={`/members/${member.username}`}>
        <Avatar className="h-12 w-12 border-2 border-background">
          <AvatarImage src={avatar?.imageUrl} alt={member.name} data-ai-hint={avatar?.imageHint}/>
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </Link>
    )
  }

  return (
    <div>
      <section className="relative h-48 md:h-64 w-full">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={bannerImage.description}
            fill
            className="object-cover"
            data-ai-hint={bannerImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-16">
        <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
                <h1 className="font-headline text-3xl md:text-4xl font-bold">{group.name}</h1>
                <p className="text-muted-foreground mt-1">{group.description}</p>
                <div className="flex items-center mt-4 -space-x-2">
                    {groupMembers.slice(0, 5).map(member => <MemberAvatar key={member.id} member={member} />)}
                    {groupMembers.length > 5 && <Avatar className="h-12 w-12 border-2 border-background bg-muted text-muted-foreground flex items-center justify-center"><span className="text-sm">+{groupMembers.length - 5}</span></Avatar>}
                </div>
            </div>
            <div className="flex-shrink-0">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Plus className="mr-2 h-4 w-4" /> Join Group
                </Button>
            </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="discussion">
          <TabsList className="grid w-full grid-cols-3 md:w-fit">
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="discussion" className="mt-6 space-y-6">
            {groupPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
            {groupPosts.length === 0 && (
                <Card className="text-center py-12">
                    <CardContent>
                        <h3 className="text-lg font-semibold text-muted-foreground">No discussions yet.</h3>
                        <p className="text-sm text-muted-foreground">Be the first to start a conversation!</p>
                        <Button className="mt-4">Create Post</Button>
                    </CardContent>
                </Card>
            )}
          </TabsContent>
          <TabsContent value="members" className="mt-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupMembers.map(member => {
                    const avatar = PlaceHolderImages.find(p => p.id === member.avatarImageId);
                    return (
                        <Card key={member.id} className="p-4 flex items-center gap-4">
                            <Link href={`/members/${member.username}`}>
                                <Avatar>
                                    <AvatarImage src={avatar?.imageUrl} alt={member.name} data-ai-hint={avatar?.imageHint} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </Link>
                            <div>
                                <Link href={`/members/${member.username}`} className="font-semibold hover:underline">{member.name}</Link>
                                <p className="text-xs text-muted-foreground">{member.title}</p>
                            </div>
                        </Card>
                    )
                })}
             </div>
          </TabsContent>
          <TabsContent value="about" className="mt-6">
            <Card>
                <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-bold mb-4">About {group.name}</h3>
                    <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
