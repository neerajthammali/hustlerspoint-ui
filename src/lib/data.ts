export type EditorPick = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageId: string;
  date: string;
}

export type Testimonial = {
  id:string;
  quote: string;
  name: string;
  role: string;
  avatarId: string;
}

export const editorPicks: EditorPick[] = [
  {
    id: "story1",
    title: "How a Bootstrapped Founder Built a $1M ARR Business",
    category: "Hustler Story",
    description: "The inspiring journey of Prabhu Dayal Agrawal—from a small-town sweets maker in Bikaner to building a global brand.",
    tags: ["Entrepreneurship", "SaaS", "Bootstrapping"],
    imageId: "story-1",
    date: "October 11, 2025",
  },
  {
    id: "res2",
    title: "The AI Tools That Are Changing Software Development",
    category: "Tech & AI",
    description: "An in-depth look at how AI coding assistants and generative models are reshaping the way we build software.",
    tags: ["AI", "Development", "Productivity"],
    imageId: "story-2",
    date: "October 11, 2025",
  },
  {
    id: "res1",
    title: "The Architecture of a $1B Oil Refinery",
    category: "Business & Industry",
    description: "Explore the massive Jamnagar Refinery, the world's largest oil complex, and how it became the backbone of an empire.",
    tags: ["Infrastructure", "Business", "Analysis"],
    imageId: "research-1",
    date: "February 19, 2025"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    quote: "HustlersPoint is my go-to for no-fluff, actionable advice. The case studies on startup growth have been a game-changer for my own venture.",
    name: "Alex Johnson",
    role: "SaaS Founder",
    avatarId: "avatar-1",
  },
  {
    id: "test2",
    quote: "The community is incredible. Being able to connect with other founders who are facing the same challenges is invaluable. It's like a mastermind group in my pocket.",
    name: "Samantha Lee",
    role: "Early-Stage Entrepreneur",
    avatarId: "avatar-2",
  },
  {
    id: "test3",
    quote: "The breakdowns of how successful companies solved real-world problems are pure gold. It's inspiring and gives me tangible ideas to apply to my own business.",
    name: "David Chen",
    role: "Bootstrapped Founder",
    avatarId: "spotlight-1"
  }
];


// --- Keeping old data structures for other pages to not break ---
export type Poll = {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
};

export type Comment = {
  id: string;
  name: string;
  text: string;
  date: string;
  avatarId: string;
};

export const communityPoll: Poll = {
  id: "poll1",
  question: "Which deep-dive should we publish next?",
  options: [
    { text: "AI in B2B Marketing", votes: 45 },
    { text: "The Future of Remote Team Collaboration", votes: 30 },
    { text: "Bootstrapping vs. VC Funding: A Founder's Guide", votes: 25 },
  ],
};

export const comments: Comment[] = [
    {
        id: "comment1",
        name: "Alex Johnson",
        text: "Great insights! I've been struggling with this exact problem. The point about focusing on a niche is so true. It's easy to get distracted by trying to be everything to everyone.",
        date: "Feb 20, 2025",
        avatarId: "avatar-1",
    },
    {
        id: "comment2",
        name: "Samantha Lee",
        text: "This is a fantastic breakdown. I'm going to try implementing the LinkedIn strategy for my own freelance business. Thanks for sharing!",
        date: "Feb 21, 2025",
        avatarId: "avatar-2",
    }
];
