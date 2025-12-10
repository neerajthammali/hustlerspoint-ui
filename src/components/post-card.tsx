import Image from "next/image";
import Link from "next/link";
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { members, comments as allComments, type Post } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "./ui/separator";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const author = members.find((m) => m.id === post.authorId);
  const authorAvatar = PlaceHolderImages.find(p => p.id === author?.avatarImageId);
  const postImage = post.imageId ? PlaceHolderImages.find(p => p.id === post.imageId) : null;
  const postComments = allComments.filter(comment => post.commentIds.includes(comment.id));

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={authorAvatar?.imageUrl} alt={author?.name} data-ai-hint={authorAvatar?.imageHint}/>
          <AvatarFallback>{author?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <Link href={`/members/${author?.username}`} className="font-semibold hover:underline">{author?.name}</Link>
          <p className="text-xs text-muted-foreground">{post.timestamp}</p>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {postImage && (
          <div className="mt-4 relative w-full aspect-video rounded-lg overflow-hidden border">
            <Image 
              src={postImage.imageUrl} 
              alt={postImage.description} 
              fill 
              className="object-cover" 
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <div className="flex justify-between w-full text-sm text-muted-foreground mb-2">
            <span>{post.likes} Likes</span>
            <span>{post.commentIds.length} Comments</span>
        </div>
        <Separator />
        <div className="grid grid-cols-3 gap-1 w-full pt-1">
          <Button variant="ghost" className="text-muted-foreground">
            <ThumbsUp className="mr-2 h-4 w-4" /> Like
          </Button>
          <Button variant="ghost" className="text-muted-foreground">
            <MessageSquare className="mr-2 h-4 w-4" /> Comment
          </Button>
          <Button variant="ghost" className="text-muted-foreground">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>

        {postComments.length > 0 && (
          <div className="w-full mt-4 space-y-4">
            <Separator />
            {postComments.map(comment => {
                const commentAuthor = members.find(m => m.id === comment.authorId);
                const commentAuthorAvatar = PlaceHolderImages.find(p => p.id === commentAuthor?.avatarImageId);
                return (
                    <div key={comment.id} className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={commentAuthorAvatar?.imageUrl} alt={commentAuthor?.name} data-ai-hint={commentAuthorAvatar?.imageHint} />
                            <AvatarFallback>{commentAuthor?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="bg-secondary rounded-lg px-3 py-2 text-sm w-full">
                            <div className="flex justify-between">
                                <Link href={`/members/${commentAuthor?.username}`} className="font-semibold text-xs hover:underline">{commentAuthor?.name}</Link>
                                <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                )
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
