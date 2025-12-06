import { LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon?: LucideIcon;
    image?: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
    icon?: LucideIcon;
}

export interface IndustryItem {
    name: string;
    description: string;
    image?: string;
}

export interface TestimonialItem {
    id?: number;
    content: string;
    author: string;
    role: string;
    company: string;
    imageSrc?: string;
    companyLogoSrc?: string;
}

export interface HeroCardData {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface HeroTabData {
    id: string;
    label: string;
    title: string;
    description: string;
    highlightWords?: string[]; // Words to apply gradient to
    tagline: string;
    videoSrc: string; // MP4 Path
    cards: HeroCardData[];
}

export interface FrameworkItem {
    title: string;
    icon?: LucideIcon;
    imageSrc?: string;
}

export interface MediaMentionItem {
    id: number;
    text: string;
    highlightText?: string;
    source: string; // e.g. "IBT"
}
