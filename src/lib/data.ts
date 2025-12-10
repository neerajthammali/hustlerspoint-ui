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
export type Research = {
  id: string;
  title: string;
  category: string;
  imageId: string;
  summary?: string;
};

export type HustlerStory = {
  id: string;
  title: string;
  summary: string;
  author: string;
  authorLink: string;
  takeaway: string;
  imageId: string;
  category?: string;
};

export type ServiceSpotlight = {
  id: string;
  name: string;
  service: string;
  link: string;
  imageId: string;
  bio: string;
};

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

export const researchHighlights: Research[] = [
  {
    id: "res1",
    title: "The Rise of CivilTech: A 2024 Market Report",
    category: "CivilTech",
    imageId: "research-1",
    summary: "A deep dive into the growing market of technology for civic engagement and public infrastructure."
  },
  {
    id: "res2",
    title: "Top 5 SaaS Tools for Bootstrapped Founders in 2025",
    category: "SaaS/Tools",
    imageId: "research-2",
    summary: "From project management to marketing automation, these are the essential tools for lean startups."
  },
  {
    id: "res3",
    title: "The Deep Work Framework for Modern Professionals",
    category: "Productivity",
    imageId: "research-3",
    summary: "How to cultivate intense focus and produce high-value work in a world of distractions."
  },
];

export const hustlerStories: HustlerStory[] = [
  {
    id: "story1",
    title: "From 0 to 10k MRR in 6 Months with a Niche SaaS",
    summary:
      "Jane Doe shares her journey of identifying a small, underserved market and building a solution that quickly gained traction.",
    author: "Jane Doe",
    authorLink: "#",
    takeaway: "Hyper-focus on a specific customer pain point is key to early traction and product-market fit.",
    imageId: "story-1",
    category: "Hustler Stories"
  },
  {
    id: "story2",
    title: "How I Landed My First 5 High-Ticket Clients on LinkedIn",
    summary:
      "John Smith breaks down his strategy for using content and targeted outreach to build his freelance business from scratch.",
    author: "John Smith",
    authorLink: "#",
    takeaway: "Consistency in providing value upfront builds trust and attracts high-quality clients.",
    imageId: "story-2",
    category: "Hustler Stories"
  },
];

export const serviceSpotlight: ServiceSpotlight = {
  id: "spot1",
  name: "Maria Garcia",
  service: "UX/UI Design for Early-Stage Startups",
  link: "#",
  imageId: "spotlight-1",
  bio: "Passionate about creating beautiful, intuitive interfaces that help early-stage startups convert users into lifelong customers.",
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
]
