import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | HustlersPoint",
    description: "Get in touch with the HustlersPoint team for any inquiries, feedback, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-2 md:text-lg">We'd love to hear from you! Drop us a line below.</p>
      </header>
      
      <Card>
        <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={6} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
