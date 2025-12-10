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
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarId: string;
}

export const editorPicks: EditorPick[] = [
  {
    id: "pick1",
    title: "How a Poor Marwadi Boy Built Haldiram's",
    category: "Brands & Inspiration",
    description: "The inspiring journey of Prabhu Dayal Agrawal—from a small-town sweets maker in Bikaner to building Haldiram's, a global brand.",
    tags: ["Entrepreneurship", "India", "Business Story"],
    imageId: "story-1",
    date: "October 11, 2025",
  },
  {
    id: "pick2",
    title: "Lovable: A Brand Changing How the World Codes",
    category: "Tech & AI",
    description: "How Lovable is redefining creativity in code—making building things online feel human again.",
    tags: ["AI", "Coding", "Startup"],
    imageId: "story-2",
    date: "October 11, 2025",
  },
  {
    id: "pick3",
    title: "Jamnagar Refinery! Generational Wealth of Ambani's",
    category: "Business & Industry",
    description: "Explore the massive Jamnagar Refinery, the world's largest oil complex, and how it became the backbone of Ambani's empire.",
    tags: ["Oil Refinery", "Ambani", "India"],
    imageId: "research-1",
    date: "February 19, 2025"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    quote: "Hustler's Point is my go-to for no-fluff, actionable advice. The case studies on startup growth have been a game-changer for my own venture.",
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
};

export type HustlerStory = {
  id: string;
  title: string;
  summary: string;
  author: string;
  authorLink: string;
  takeaway: string;
  imageId: string;
};

export type ServiceSpotlight = {
  id: string;
  name: string;
  service: string;
  link: string;
  imageId: string;
};

export type Poll = {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
};

export const researchHighlights: Research[] = [
  {
    id: "res1",
    title: "The Rise of CivilTech: A 2024 Report",
    category: "CivilTech",
    imageId: "research-1",
  },
  {
    id: "res2",
    title: "Top 5 SaaS Tools for Bootstrapped Founders",
    category: "SaaS/Tools",
    imageId: "research-2",
  },
  {
    id: "res3",
    title: "A New Productivity Framework for Deep Work",
    category: "Productivity",
    imageId: "research-3",
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
    takeaway: "Hyper-focus on a specific customer pain point is key.",
    imageId: "story-1",
  },
  {
    id: "story2",
    title: "How I Landed My First 5 Freelance Clients on LinkedIn",
    summary:
      "John Smith breaks down his strategy for using content and targeted outreach to build his freelance business from scratch.",
    author: "John Smith",
    authorLink: "#",
    takeaway: "Consistency and providing value upfront builds trust.",
    imageId: "story-2",
  },
];

export const serviceSpotlight: ServiceSpotlight = {
  id: "spot1",
  name: "Maria Garcia",
  service: "UX/UI Design for Startups",
  link: "#",
  imageId: "spotlight-1",
};

export const communityPoll: Poll = {
  id: "poll1",
  question: "Which topic should we cover next in a deep-dive article?",
  options: [
    { text: "AI in Marketing", votes: 45 },
    { text: "The Future of Remote Work", votes: 30 },
    { text: "Bootstrapping vs. VC Funding", votes: 25 },
  ],
};
