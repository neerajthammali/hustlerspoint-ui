import { subDays, formatDistanceToNowStrict } from 'date-fns';

export type Member = {
  id: string;
  username: string;
  name: string;
  avatarImageId: string;
  title: string;
  bio: string;
  skills: string[];
  interests: string[];
  postIds: number[];
};

export type Post = {
  id: number;
  authorId: string;
  content: string;
  imageId?: string;
  timestamp: string;
  likes: number;
  commentIds: number[];
};

export type Comment = {
  id: number;
  authorId: string;
  content: string;
  timestamp: string;
};

export type Group = {
  id: string;
  name: string;
  description: string;
  bannerImageId: string;
  memberIds: string[];
  postIds: number[];
};

export type News = {
  id: number;
  title: string;
  description: string;
  imageId: string;
  sourceId: string;
  publishedAt: string;
};

export type Source = {
  id: string;
  name: string;
};


export const members: Member[] = [
  {
    id: 'u1',
    username: 'alexandra_chen',
    name: 'Alexandra Chen',
    avatarImageId: 'avatar2',
    title: 'Founder & CEO @ InnovateU',
    bio: 'Serial entrepreneur with a passion for building scalable SaaS products. Expert in product management and growth marketing. Currently obsessed with AI-driven analytics. Let\'s connect and build the future!',
    skills: ['SaaS', 'Growth Hacking', 'Product Management', 'UX/UI', 'Venture Capital'],
    interests: ['AI & ML', 'Fintech', 'Rock Climbing'],
    postIds: [1, 5],
  },
  {
    id: 'u2',
    username: 'ben_carter',
    name: 'Ben Carter',
    avatarImageId: 'avatar1',
    title: 'Lead Engineer @ QuantumLeap',
    bio: 'Full-stack developer with 10+ years of experience in building robust and scalable web applications. Specializing in TypeScript, React, and serverless architectures. Always open to discussing new tech.',
    skills: ['TypeScript', 'React', 'Node.js', 'Serverless', 'DevOps'],
    interests: ['Web3', 'Open Source', 'Photography'],
    postIds: [2],
  },
  {
    id: 'u3',
    username: 'chloe_davis',
    name: 'Chloe Davis',
    avatarImageId: 'avatar3',
    title: 'Marketing Director @ MarketMinds',
    bio: 'Data-driven marketing leader focused on creating compelling brand narratives. Expertise in SEO, content strategy, and digital advertising. Passionate about leveraging data to drive marketing decisions.',
    skills: ['SEO', 'Content Strategy', 'PPC', 'Brand Management'],
    interests: ['Digital Nomading', 'Podcasting', 'Yoga'],
    postIds: [3],
  },
  {
    id: 'u4',
    username: 'david_rodriguez',
    name: 'David Rodriguez',
    avatarImageId: 'avatar4',
    title: 'Angel Investor',
    bio: 'Early-stage investor and advisor for tech startups. Former founder with two successful exits. Looking for the next big thing in B2B software and marketplaces.',
    skills: ['Angel Investing', 'Startups', 'Fundraising', 'Strategy'],
    interests: ['Golf', 'Stoicism', 'Wine Tasting'],
    postIds: [4],
  },
    {
    id: 'u5',
    username: 'emily_white',
    name: 'Emily White',
    avatarImageId: 'avatar6',
    title: 'UX Designer @ CreativeFlow',
    bio: 'Designing intuitive and beautiful user experiences is my jam. I bridge the gap between user needs and business goals. Let\'s make technology feel more human.',
    skills: ['UX Research', 'Interaction Design', 'Figma', 'Prototyping'],
    interests: ['Minimalism', 'Pottery', 'Hiking'],
    postIds: [],
  },
  {
    id: 'u6',
    username: 'frank_gallagher',
    name: 'Frank Gallagher',
    avatarImageId: 'avatar5',
    title: 'Sales VP @ ScaleUp Inc.',
    bio: 'Building and leading high-performance sales teams to crush revenue goals. Expert in enterprise sales cycles and strategic partnerships.',
    skills: ['Sales Leadership', 'Enterprise Sales', 'Negotiation'],
    interests: ['Marathon Running', 'History', 'Cooking'],
    postIds: [],
  },
];

export const comments: Comment[] = [
    { id: 101, authorId: 'u2', content: 'This is a game-changer! The architecture is brilliant.', timestamp: formatDistanceToNowStrict(subDays(new Date(), 0), { addSuffix: true }) },
    { id: 102, authorId: 'u3', content: 'Absolutely agree. The potential for market disruption is huge. Have you considered the GTM strategy?', timestamp: formatDistanceToNowStrict(subDays(new Date(), 0), { addSuffix: true }) },
    { id: 103, authorId: 'u1', content: 'Great question @chloe_davis! We\'re starting with a PLG model focused on developers. Happy to chat more.', timestamp: formatDistanceToNowStrict(subDays(new Date(), 0), { addSuffix: true }) },
    { id: 201, authorId: 'u4', content: 'Great insights. I\'ve seen similar patterns in my portfolio companies.', timestamp: '3d ago' },
    { id: 301, authorId: 'u1', content: 'Love this branding angle. It feels authentic and fresh.', timestamp: '4d ago' },
    { id: 401, authorId: 'u2', content: 'Interesting take. I wonder how regulation will impact this space in the long run.', timestamp: '5d ago' },
];

export const posts: Post[] = [
  {
    id: 1,
    authorId: 'u1',
    content: "Just launched our new AI-powered analytics dashboard on Product Hunt! It's been a marathon of late nights and endless coffee, but seeing it live is an incredible feeling. We're aiming to simplify data interpretation for non-technical founders. Would love for you all to check it out and share your feedback! #launch #saas #ai",
    imageId: 'post-image1',
    timestamp: formatDistanceToNowStrict(subDays(new Date(), 1), { addSuffix: true }),
    likes: 128,
    commentIds: [101, 102, 103],
  },
  {
    id: 2,
    authorId: 'u2',
    content: "Deep diving into the latest serverless frameworks. The developer experience has improved leaps and bounds. Thinking about writing a blog series on migrating from traditional monoliths to a serverless architecture. Anyone interested?",
    timestamp: formatDistanceToNowStrict(subDays(new Date(), 2), { addSuffix: true }),
    likes: 76,
    commentIds: [201],
  },
  {
    id: 3,
    authorId: 'u3',
    content: "What are your go-to tools for content planning and distribution? We're currently using a mix of Asana, SEMrush, and Buffer, but I'm always on the lookout for a more integrated solution. #marketing #contentstrategy",
    timestamp: formatDistanceToNowStrict(subDays(new Date(), 4), { addSuffix: true }),
    likes: 45,
    commentIds: [301],
  },
  {
    id: 4,
    authorId: 'u4',
    content: "My key takeaway from this quarter's investments: Founders who are deeply obsessed with their customer's problem, not their own solution, are the ones who consistently win. It's a simple truth, but often forgotten.",
    timestamp: formatDistanceToNowStrict(subDays(new Date(), 5), { addSuffix: true }),
    likes: 230,
    commentIds: [401],
  },
  {
    id: 5,
    authorId: 'u1',
    content: "Reading 'The Hard Thing About Hard Things' for the third time. Ben Horowitz's insights on leadership and navigating crises are timeless. What's one book that has fundamentally changed your perspective as a leader?",
    timestamp: formatDistanceToNowStrict(subDays(new Date(), 7), { addSuffix: true }),
    likes: 92,
    commentIds: [],
  },
];

export const groups: Group[] = [
  {
    id: 'saas-innovators',
    name: 'SaaS Innovators',
    description: 'A place for founders, product managers, and engineers to discuss everything about building and scaling SaaS businesses.',
    bannerImageId: 'group-banner1',
    memberIds: ['u1', 'u2', 'u5'],
    postIds: [1, 2],
  },
  {
    id: 'growth-marketing-gurus',
    name: 'Growth & Marketing Gurus',
    description: 'Share and discuss the latest strategies in growth hacking, SEO, content marketing, and brand building.',
    bannerImageId: 'group-banner2',
    memberIds: ['u1', 'u3'],
    postIds: [3],
  },
  {
    id: 'early-stage-investing',
    name: 'Early-Stage Investing',
    description: 'For angel investors, VCs, and founders to connect, discuss deal flow, and share due diligence insights.',
    bannerImageId: 'group-banner3',
    memberIds: ['u1', 'u4'],
    postIds: [4],
  },
];


export const sources: Source[] = [
    { id: 's1', name: 'Product Hunt' },
    { id: 's2', name: 'LinkedIn' },
    { id: 's3', name: 'Reddit' },
];

export const news: News[] = [
  {
    id: 1,
    title: 'The Rise of Hyper-Personalization in E-commerce',
    description: 'AI-driven platforms are now able to tailor shopping experiences to an individual\'s real-time behavior, leading to a significant uplift in conversion rates.',
    imageId: 'news1',
    sourceId: 's2',
    publishedAt: formatDistanceToNowStrict(subDays(new Date(), 1), { addSuffix: true }),
  },
  {
    id: 2,
    title: 'A New Open-Source Framework Challenges React',
    description: 'A lightweight, performant UI framework is gaining traction on GitHub, promising faster rendering times and a smaller bundle size. Could it be the next big thing?',
    imageId: 'news2',
    sourceId: 's1',
    publishedAt: formatDistanceToNowStrict(subDays(new Date(), 2), { addSuffix: true }),
  },
  {
    id: 3,
    title: 'VCs Are Doubling Down on Vertical SaaS',
    description: 'Investors are shifting focus from broad, horizontal solutions to niche, industry-specific software, where deep domain expertise can create a strong moat.',
    imageId: 'news3',
    sourceId: 's3',
    publishedAt: formatDistanceToNowStrict(subDays(new Date(), 3), { addSuffix: true }),
  },
];
