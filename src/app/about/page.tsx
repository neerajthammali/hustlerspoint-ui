import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users, Target, Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | HustlersPoint",
    description: "Learn about the mission and vision of HustlersPoint, a community-driven platform for founders, builders, and creators.",
};

export default function AboutPage() {
    const team = [
        { name: "Founder One", role: "Chief Editor & Founder", imageId: "avatar-1" },
        { name: "Founder Two", role: "Head of Community", imageId: "avatar-2" },
    ]
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
        <header className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">About HustlersPoint</h1>
            <p className="text-muted-foreground mt-3 md:text-xl max-w-3xl mx-auto">We are a community-driven platform dedicated to sharing real stories, insights, and tools for the next generation of founders, builders, and creators.</p>
        </header>

        <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                        <Users className="h-8 w-8" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">For the Community</h3>
                    <p className="text-muted-foreground">Built on the premise of sharing knowledge, our content is sourced from and created for the community.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                        <Target className="h-8 w-8" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">To empower entrepreneurs and creators by providing them with actionable insights and real-world case studies.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                        <Handshake className="h-8 w-8" />
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">To become the most trusted resource for bootstrapped founders and indie hackers looking to grow their ventures.</p>
                </div>
            </div>
        </section>

        <section className="bg-secondary/30 rounded-lg p-8 md:p-12">
             <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet the Team</h2>
                <p className="text-muted-foreground mt-2">The people behind the platform.</p>
            </div>
            <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
                {team.map(member => {
                    const image = PlaceHolderImages.find(p => p.id === member.imageId);
                    return (
                        <div key={member.name} className="flex flex-col items-center text-center">
                            <Avatar className="w-32 h-32 mb-4 ring-4 ring-primary/20">
                                <AvatarImage src={image?.imageUrl} alt={member.name} data-ai-hint={image?.imageHint} />
                                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <h4 className="font-semibold text-lg">{member.name}</h4>
                            <p className="text-primary">{member.role}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    </div>
  );
}
