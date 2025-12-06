"use client";

import { useState } from "react";
import { HERO_TABS } from "@/models/data";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    const [activeTabId, setActiveTabId] = useState(HERO_TABS[0].id);
    const activeTab = HERO_TABS.find(tab => tab.id === activeTabId) || HERO_TABS[0];

    // Helper to render title with highlighted gradients
    const renderTitle = (title: string, highlights: string[] = []) => {
        if (!highlights.length) return title;

        // Simple word split - complex cases might need regex
        const words = title.split(" ");
        return (
            <>
                {words.map((word, i) => {
                    // Check if word (stripped of punctuation roughly) matches highlight
                    const cleanWord = word.replace(/[,:]/g, "");
                    const isHighlight = highlights.some(h =>
                        cleanWord.toLowerCase().includes(h.toLowerCase()) ||
                        h.toLowerCase().includes(cleanWord.toLowerCase())
                    );

                    // Gradient: Orange to Red-ish for first highlight, Blue/Purple for others if mixed?
                    // Design shows multi-color. Let's stick to a primary brand gradient.
                    // Image 0 shows: "accountability" (Blue/Purple), "mature, modern engineering" (Orange/Red)

                    let toggleColor = false;
                    // Hacky toggle based on word content or index for demo correctness based on image 0
                    if (cleanWord.includes("accountability")) toggleColor = true; // Blue

                    return (
                        <span key={i} className={cn(
                            isHighlight
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#FF8A65] font-semibold"
                                : "text-[#1a237e]",
                            // Specific override for "accountability" style seen in screenshot
                            cleanWord.includes("accountability") && "from-blue-600 to-indigo-600"
                        )}>
                            {word}{" "}
                        </span>
                    );
                })}
            </>
        );
    };

    return (
        <section className="relative min-h-screen bg-[#F3F6FD] pt-32 pb-24 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* 1. Tab Selector */}
                <div className="flex flex-wrap gap-4 mb-20">
                    {HERO_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={cn(
                                "px-6 py-3 text-sm font-medium transition-all duration-300 border border-transparent relative",
                                activeTabId === tab.id
                                    ? "bg-white text-[#1a237e] border-slate-200 shadow-sm z-10"
                                    : "bg-transparent text-slate-500 hover:text-slate-700"
                            )}
                        >
                            {activeTabId === tab.id && (
                                <motion.div
                                    layoutId="activeTabBorder"
                                    className="absolute inset-0 border border-blue-200 bg-white shadow-sm -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* 2. Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Left: Text Content */}
                    {/* AnimatePresence (implied by motion usage here although accurate wrapper is higher up usually) handles exit animations */}
                    {/* Key is crucial here: changing the key triggers the re-mount and thus the initial/exit animations for each tab switch */}
                    <motion.div
                        key={activeTab.id + "-text"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <h1 className="font-dm text-[32.98px] font-medium leading-[49.5px] text-[#2B3D72] mb-8 tracking-normal">
                            {renderTitle(activeTab.title, activeTab.highlightWords)}
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            {activeTab.description}
                        </p>
                        <div className="flex items-center gap-2 text-[#FF5722] font-medium cursor-pointer group hover:opacity-80 transition-opacity">
                            {activeTab.tagline}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Right: Video Asset */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id + "-video"}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden"
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    key={activeTab.videoSrc} // Force reload on src change
                                    className="w-full h-full object-contain"
                                >
                                    <source src={activeTab.videoSrc} type="video/mp4" />
                                </video>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* 3. Bottom Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {activeTab.cards.map((card, index) => (
                            <motion.div
                                key={activeTab.id + "-card-" + index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                className="bg-white p-8 border border-white shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group cursor-pointer hover:border-slate-100 rounded-sm"
                            >
                                <div>
                                    <div className="w-14 h-14 bg-[#FFF3E0] mb-8 flex items-center justify-center text-[#FF5722] rounded-lg">
                                        {/* Dynamic Icon */}
                                        <card.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1a237e] mb-4">{card.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <ArrowRight className="w-5 h-5 text-[#FF5722] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
