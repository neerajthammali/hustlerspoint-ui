'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { communityPoll } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

type PollWithOptions = typeof communityPoll;

const pollsData: PollWithOptions[] = [
  communityPoll,
  {
    id: 'poll2',
    question: 'Which SaaS review do you want to see next?',
    options: [
      { text: 'Figma', votes: 88 },
      { text: 'Webflow', votes: 62 },
      { text: 'Retool', votes: 41 },
    ],
  },
  {
    id: 'poll3',
    question: "Which hustler's story should we feature?",
    options: [
      { text: 'Bootstrapped Founder', votes: 102 },
      { text: 'Indie Hacker', votes: 95 },
      { text: 'Freelancer turned Agency Owner', votes: 78 },
    ],
  },
];

const PollCard = ({ poll }: { poll: PollWithOptions }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);
  const winningOption = poll.options.reduce((prev, current) => (prev.votes > current.votes) ? prev : current);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-lg">{poll.question}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <RadioGroup onValueChange={setSelectedOption} value={selectedOption ?? undefined}>
          <div className="space-y-3">
            {poll.options.map((option, index) => {
              const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
              const isSelected = selectedOption === option.text;
              return (
                <Label
                  key={index}
                  htmlFor={`${poll.id}-${index}`}
                  className={cn(
                    'block cursor-pointer rounded-lg border p-4 transition-all',
                    isSelected
                      ? 'border-primary ring-2 ring-primary bg-primary/5'
                      : 'border-border hover:bg-accent/50'
                  )}
                >
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div className="flex items-center gap-3">
                       <RadioGroupItem value={option.text} id={`${poll.id}-${index}`} />
                       <span className="font-semibold">{option.text}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{option.votes} votes</span>
                        <span className="font-bold w-10 text-right">{percentage}%</span>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </Label>
              );
            })}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4 flex-col items-start gap-4">
        <Button className="w-full" disabled={!selectedOption}>
          Vote Now
        </Button>
        <div className="p-3 rounded-md bg-background/70 w-full text-sm">
            <p className="font-semibold flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary"/> Final Decision:</p>
            <p className="text-muted-foreground mt-1 pl-6">
              We'll be writing about <strong>{winningOption.text}</strong> next week, thanks to your votes!
            </p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {pollsData.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  );
}
