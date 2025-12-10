import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Submit Your Idea</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">Have a story, a service to spotlight, or an idea for an article? Share it with us!</p>
      </header>
      
      <Card>
        <CardHeader>
            <CardTitle>Submission Form</CardTitle>
            <CardDescription>Fill out the details below. We review every submission.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="submission-type">What are you submitting?</Label>
                    <Select>
                        <SelectTrigger id="submission-type">
                            <SelectValue placeholder="Select a submission type..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="article-request">An article request</SelectItem>
                            <SelectItem value="own-story">Your own story</SelectItem>
                            <SelectItem value="service-spotlight">A service to spotlight</SelectItem>
                            <SelectItem value="tool-suggestion">A tool suggestion</SelectItem>
                            <SelectItem value="problem-faced">A problem you face</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="title">Title or Subject</Label>
                    <Input id="title" placeholder="e.g., My Journey to Building a SaaS" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="link">Link (Optional)</Label>
                    <Input id="link" placeholder="e.g., https://linkedin.com/in/yourprofile" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Details</Label>
                    <Textarea id="description" placeholder="Tell us more. What's the story? What problem are you facing? Why should we feature this service?" rows={6} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="So we can get in touch with you." />
                </div>
                <Button type="submit" className="w-full">Submit to HustlersPoint</Button>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
