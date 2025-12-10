import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { PostCard } from "@/components/post-card";
import { members, posts, groups } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Users, Hash } from "lucide-react";

export default function FeedPage() {
  const currentUser = members.find(m => m.id === 'u1');
  const userAvatar = PlaceHolderImages.find(p => p.id === currentUser?.avatarImageId);
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={userAvatar?.imageUrl} alt={currentUser?.name} data-ai-hint={userAvatar?.imageHint} />
                  <AvatarFallback>{currentUser?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="w-full space-y-2">
                  <Textarea placeholder="What's on your mind?" className="w-full bg-secondary border-0 focus-visible:ring-primary focus-visible:ring-2" />
                  <div className="flex justify-end">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Post</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-1 space-y-6 sticky top-24">
           <Card>
            <CardContent className="p-4">
              <h3 className="font-headline text-lg font-semibold mb-4">My Groups</h3>
              <ul className="space-y-3">
                {groups.slice(0, 3).map(group => (
                  <li key={group.id}>
                    <Link href={`/groups/${group.id}`} className="flex items-center gap-3 group">
                      <div className="relative w-10 h-10">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={PlaceHolderImages.find(p=>p.id === group.bannerImageId)?.imageUrl} alt={group.name} className="object-cover" />
                            <AvatarFallback>{group.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{group.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-headline text-lg font-semibold mb-4">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:border-primary">#SaaS</Badge>
                <Badge variant="outline" className="cursor-pointer hover:border-primary">#AI</Badge>
                <Badge variant="outline" className="cursor-pointer hover:border-primary">#GrowthHacking</Badge>
                <Badge variant="outline" className="cursor-pointer hover:border-primary">#ProductLaunch</Badge>
                <Badge variant="outline" className="cursor-pointer hover:border-primary">#VCFunding</Badge>
              </div>
            </CardContent>
          </Card>
        </aside>

      </div>
    </div>
  );
}
