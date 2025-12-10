import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { researchHighlights, hustlerStories, communityPoll, comments } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const allPosts = [...researchHighlights, ...hustlerStories.map(s => ({...s, category: "Hustler Stories"}))];
  const post = allPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.imageId);
  const popularPosts = [...hustlerStories, ...researchHighlights].filter(p => p.id !== post.id).slice(0, 3);
  const poll = communityPoll;
  const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <header className="mb-8">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
                <p className="text-muted-foreground text-lg">Posted on Feb 19, 2025</p>
              </header>

              {image && (
                <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                <p className="lead">
                    This is a placeholder for the full blog post content. Replace this with your actual content management system or markdown file.
                </p>
                {'summary' in post && <p>{post.summary}</p>}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                </p>
                <h2>Subsection Title</h2>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
                </p>
              </div>

                {/* Comments Section */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Join the Discussion</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>Leave a Comment</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Textarea id="comment" placeholder="Write your comment here..." rows={4}/>
                                </div>
                                <Button>Post Comment</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="mt-8 space-y-6">
                        <h3 className="text-xl font-semibold">{comments.length} Comments</h3>
                        {comments.map(comment => {
                           const avatar = PlaceHolderImages.find(p => p.id === comment.avatarId);
                           return (
                             <div key={comment.id} className="flex gap-4">
                               <Avatar>
                                 <AvatarImage src={avatar?.imageUrl} alt={comment.name} data-ai-hint={avatar?.imageHint} />
                                 <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                               </Avatar>
                               <div className="flex-1">
                                 <div className="flex justify-between items-center">
                                     <p className="font-semibold">{comment.name}</p>
                                     <p className="text-xs text-muted-foreground">{comment.date}</p>
                                 </div>
                                 <p className="text-muted-foreground mt-1">{comment.text}</p>
                               </div>
                             </div>
                           )
                        })}
                    </div>
                </section>
            </article>

            <aside className="lg:col-span-1 space-y-8">
                {/* Popular Posts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Popular Posts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {popularPosts.map(popularPost => {
                            const postImage = PlaceHolderImages.find(p => p.id === popularPost.imageId);
                            const postUrl = 'summary' in popularPost ? `/stories/${popularPost.id}` : `/blog/${popularPost.id}`;
                            return (
                                <Link href={postUrl} key={popularPost.id} className="flex gap-4 items-center group">
                                    <div className="w-20 h-20 relative rounded-md overflow-hidden shrink-0">
                                        {postImage && <Image src={postImage.imageUrl} alt={postImage.description} fill className="object-cover" />}
                                    </div>
                                    <h4 className="font-semibold leading-tight group-hover:underline flex-1">{popularPost.title}</h4>
                                </Link>
                            )
                        })}
                    </CardContent>
                </Card>

                {/* Community Poll */}
                <Card className="overflow-hidden">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Community Poll</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="font-semibold">{poll.question}</p>
                        <div className="space-y-3">
                        {poll.options.map((option, index) => {
                            const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
                            return (
                            <div key={index}>
                                <div className="flex justify-between items-center text-sm mb-1">
                                <span className="font-medium">{option.text}</span>
                                <span className="font-bold w-10 text-right">{percentage}%</span>
                                </div>
                                <Progress value={percentage} />
                            </div>
                            );
                        })}
                        </div>
                    </CardContent>
                    <CardFooter className="bg-secondary/50 p-4">
                        <Button className="w-full">Vote Now</Button>
                    </CardFooter>
                </Card>
            </aside>
        </div>
    </div>
  );
}