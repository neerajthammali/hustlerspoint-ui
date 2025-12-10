import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { communityPoll } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

type PollWithOptions = typeof communityPoll;

const polls: PollWithOptions[] = [
    communityPoll,
    {
        id: "poll2",
        question: "Which SaaS review do you want to see next?",
        options: [
            { text: "Figma", votes: 88 },
            { text: "Webflow", votes: 62 },
            { text: "Retool", votes: 41 },
        ],
    },
    {
        id: "poll3",
        question: "Which hustler's story should we feature?",
        options: [
            { text: "Bootstrapped Founder", votes: 102 },
            { text: "Indie Hacker", votes: 95 },
            { text: "Freelancer turned Agency Owner", votes: 78 },
        ],
    }
]

const PollCard = ({ poll }: { poll: PollWithOptions }) => {
    const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);

    return (
        <Card className="overflow-hidden">
            <CardHeader>
                <CardTitle className="font-headline text-xl">{poll.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-3">
                {poll.options.map((option, index) => {
                    const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
                    return (
                    <div key={index}>
                        <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium">{option.text}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-xs">{option.votes} votes</span>
                            <span className="font-bold w-10 text-right">{percentage}%</span>
                        </div>
                        </div>
                        <Progress value={percentage} />
                    </div>
                    );
                })}
                </div>
            </CardContent>
            <CardFooter className="bg-secondary/50 p-4 flex flex-col items-start gap-3">
                 <h4 className="text-sm font-semibold flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Add a comment</h4>
                 <div className="flex w-full gap-2">
                    <Input placeholder="Share your thoughts..." className="bg-background"/>
                    <Button>Submit</Button>
                 </div>
                 <div className="mt-2 p-3 rounded-md bg-background/70 w-full">
                    <p className="text-sm font-semibold">Final Decision:</p>
                    <p className="text-sm text-muted-foreground mt-1">We'll be writing about <strong>{poll.options[0].text}</strong> next week, thanks to your votes!</p>
                 </div>
            </CardFooter>
        </Card>
    );
};


export default function PollsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Community Polls</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">Decide what we publish next. Your vote matters.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {polls.map(poll => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
}
