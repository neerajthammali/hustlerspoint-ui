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
