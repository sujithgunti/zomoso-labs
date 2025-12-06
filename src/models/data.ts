import {
    Zap, Shield, Globe, Cpu, BarChart, Users,
    Rocket, Target, Layers, Code2, LineChart,
    Settings, CheckCircle, Sliders, Layout, Search, Server
} from "lucide-react";
import { HeroTabData, NavItem, ProcessStep, ServiceItem, StatItem, IndustryItem, TestimonialItem, FrameworkItem, MediaMentionItem } from "./types";

export const MEDIA_MENTIONS: MediaMentionItem[] = [
    {
        id: 1,
        text: "Service providers like Zemoso are challenging the status quo with outcome-based commitments",
        highlightText: "outcome-based commitments",
        source: "IBT"
    },
    // Adding duplicates for carousel demo if needed, or placeholders
    {
        id: 2,
        text: "Zemoso's agile approach accelerates digital transformation for enterprises worldwide",
        highlightText: "accelerates digital transformation",
        source: "Forbes"
    },
    {
        id: 3,
        text: "Delivering exceptional value through rapid prototyping and scalable engineering pods",
        highlightText: "scalable engineering pods",
        source: "TechCrunch"
    }
];

export const NAV_ITEMS: NavItem[] = [
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Insights", href: "#insights", hasDropdown: true },
    { label: "Company", href: "#company", hasDropdown: true },
];

export const HERO_TABS: HeroTabData[] = [
    {
        id: "early-stage",
        label: "Early stage startup",
        title: "Napkin to product market fit: Innovation-as-a-Service meets execution agility",
        highlightWords: ["Innovation-as-a-Service", "execution", "agility"],
        description: "We help early-stage founders validate ideas, prototype rapidly, and build scalable MVPs that investor love.",
        tagline: "Start your journey",
        videoSrc: "/earlystartup.mp4",
        cards: [
            {
                title: "Validate quickly",
                description: "Co-create GV Design Sprint-inspired prototyping and functional MVPs for acquiring early pilot customers.",
                icon: Rocket
            },
            {
                title: "Launch fast",
                description: "Accelerate go-to-market with execution methodologies that enable fast, iterative product releases.",
                icon: Target
            },
            {
                title: "Scale efficiently",
                description: "Expand with precise engineering and quick discovery to scale product launches, enabling exponential growth.",
                icon: LineChart
            }
        ]
    },
    {
        id: "growth-stage",
        label: "Growth stage startup",
        title: "Tailored and embedded pods for rapid launches: collaboration meets mature, modern engineering",
        highlightWords: ["mature,", "modern", "engineering"],
        description: "Overcome technical debt and scale your engineering capabilities to meet growing market demands.",
        tagline: "Explore our customer stories",
        videoSrc: "/Growth_Startup.mp4",
        cards: [
            {
                title: "Understand thoroughly",
                description: "Dive deep into your domain with collaborative conversations that create innovative solutions.",
                icon: Search
            },
            {
                title: "Execute meticulously",
                description: "Take complete accountability with agile sprints, delivering value as market needs and your priorities change.",
                icon: CheckCircle
            },
            {
                title: "Scale strategically",
                description: "Scale up and down based on skills, speed, and outcome needs of your organization with our specialized pods.",
                icon: Sliders
            }
        ]
    },
    {
        id: "enterprise",
        label: "Enterprise innovation",
        title: "Tailored and embedded pods for rapid transformation: accountability meets mature, modern engineering",
        highlightWords: ["accountability"],
        description: "We partner with large enterprises to modernize legacy systems and build new digital revenue streams.",
        tagline: "Explore our customer stories",
        videoSrc: "/enterprise.mp4",
        cards: [
            {
                title: "Understand thoroughly",
                description: "Dive deep into your domain, and existing design and engineering operations to expedite sign-offs collaboratively.",
                icon: Layout
            },
            {
                title: "Execute meticulously",
                description: "Take complete accountability for outcomes and quality, prioritizing value delivery per market needs and your priorities change.",
                icon: Code2
            },
            {
                title: "Scale thoughtfully",
                description: "Enable continuous evolution with expert pods that scale up and down based on skills, speed, and outcome needs of your organization.",
                icon: Server
            }
        ]
    }
];

export const SERVICES: ServiceItem[] = [
    {
        title: "Product Engineering",
        description: "End-to-end development of scalable, secure, and high-performance digital products.",
        icon: Cpu,
    },
    {
        title: "Cloud Modernization",
        description: "Transform legacy systems into agile, cloud-native architectures.",
        icon: Globe,
    },
    {
        title: "Data & AI",
        description: "Harness the power of data and artificial intelligence to drive decision-making.",
        icon: BarChart,
    },
    {
        title: "Cybersecurity",
        description: "Robust security frameworks to protect your enterprise assets.",
        icon: Shield,
    },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        step: 1,
        title: "Discover",
        description: "We dive deep into your business goals and user needs.",
        icon: Users,
    },
    {
        step: 2,
        title: "Design",
        description: "Crafting intuitive and engaging user experiences.",
        icon: Zap,
    },
    {
        step: 3,
        title: "Develop",
        description: "Agile engineering with a focus on quality and speed.",
        icon: Cpu,
    },
    {
        step: 4,
        title: "Deploy & Scale",
        description: "Seamless launch and continuous optimization.",
        icon: Globe,
    },
];

export const STATS: StatItem[] = [
    { value: "80+", label: "Innovation initiatives delivered" },
    { value: "50+", label: "Functional prototypes built" },
    { value: "50+", label: "Product modernizations for Fortune 500 & other enterprises" },
    { value: "$4M", label: "Saved by reducing duplication across 80 DevOps processes" },
    { value: "2X", label: "Faster delivery by re-architecting for scalability, security & resilience" },
    { value: "6 months", label: "Global onboarding completed within 6 months of project start" },
];

export const INDUSTRIES: IndustryItem[] = [
    { name: "Fintech", description: "Revolutionizing financial services with secure tech." },
    { name: "Healthcare", description: "Digital solutions for patient-centric care." },
    { name: "Retail", description: "Omnichannel experiences for modern commerce." },
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        id: 1,
        content: "For our young venture building unit, Zemoso's expertise proved fundamental—helping us quickly validate our concept and discover broader market demand than initially anticipated. Their collaborative approach to rapid prototyping and technical assessment not only transformed our concept into a robust, scalable solution but also strengthened TekVentures' own capabilities in venture building.",
        author: "Fabricio Arteaga",
        role: "Director of Strategic Relationships and Sustainability",
        company: "Global, Century-Old Polymer Innovator",
        imageSrc: "/clinet_1.svg",
        companyLogoSrc: "/backed_by_1svg.svg"
    },
    {
        id: 2,
        content: "I was very impressed with the speed at which Zemoso operated. We didn’t hesitate to continue with several development engagements where Zemoso provided a top-notch scrum team to work very closely with our internal teams, always delivering with the mindset of maximum satisfaction. Their understanding of the complexities of an evolving solution and ability to pivot with acute urgency makes them a solid software development partner for any business out there.",
        author: "Ozge Whiting",
        role: "VP Data & Machine Learning",
        company: "Backed by Bayer",
        imageSrc: "/client_2.jpeg",
        companyLogoSrc: "/backed_by_2svg.svg"
    },
    {
        id: 3,
        content: "The Zemoso team helped flesh out the solution and rapidly built key components using our existing tech stack and adapted to our agile timelines and processes, making the Zemoso team a peer scrum team to our internal teams.",
        author: "Evan Grossman",
        role: "Chief Product Officer",
        company: "Backed by SignalFire",
        imageSrc: "/client_3jpg.jpg",
        companyLogoSrc: "/backed_by_3.svg"
    }
];

export const FRAMEWORKS_ROW_1: FrameworkItem[] = [
    { title: "Laws of UX", icon: Layout, imageSrc: "/framworks/Laws of UX.svg" },
    { title: "GV-inspired design sprint", icon: Zap },
    { title: "Jobs-to-be-Done", icon: Target },
    { title: "Dual track agile", icon: Sliders },
    { title: "Service blueprint", icon: Layers },
    { title: "Heuristic evaluation", icon: Search, imageSrc: "/framworks/Heuristic evaluation.svg" },
];

export const FRAMEWORKS_ROW_2: FrameworkItem[] = [
    { title: "Test pyramid", icon: BarChart, imageSrc: "/framworks/Test pyramid.svg" },
    { title: "Code reviews", icon: Code2 },
    { title: "Pair programming", icon: Users },
    { title: "C4 architecture", icon: Server, imageSrc: "/framworks/C4 architecture.svg" },
    { title: "Example mapping", icon: Layout, imageSrc: "/framworks/Example mapping.svg" },
    { title: "AARRR - pirate metrics", icon: LineChart, imageSrc: "/framworks/AARRR - piracy metrics.svg" },
];
