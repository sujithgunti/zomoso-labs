"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MEDIA_MENTIONS } from "@/models/data";

export const MediaMentions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % MEDIA_MENTIONS.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + MEDIA_MENTIONS.length) % MEDIA_MENTIONS.length);

    // Helper to highlight text
    const renderHighlightedText = (text: string, highlight?: string) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <>
                {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={i} className="text-[#FF7043]">{part}</span>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };

    return (
        <section className="bg-[#ffff] py-16 md:py-24 font-dm overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative flex items-center justify-center">

                {/* Left Arrow */}
                <button
                    onClick={prev}
                    aria-label="Previous slide"
                    className="hidden md:block absolute left-4 lg:left-0 p-2 text-[#2B3D72] hover:text-[#FF5722] transition-colors z-10"
                >
                    <ChevronLeft size={48} strokeWidth={1} />
                </button>

                {/* Card */}
                <div className="w-full max-w-5xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 md:p-16 min-h-[300px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                        >
                            {/* Text Content */}
                            <div className="flex-1 text-center md:text-left">
                                <p className="text-xl md:text-[1.75rem] leading-snug text-[#2B3D72] font-normal">
                                    {renderHighlightedText(MEDIA_MENTIONS[activeIndex].text, MEDIA_MENTIONS[activeIndex].highlightText)}
                                </p>
                            </div>

                            {/* Separator (Mobile only) */}
                            <div className="w-16 h-[1px] bg-slate-200 md:hidden" />

                            {/* Logo Area */}
                            <div className="flex-shrink-0">
                                <h3 className="text-6xl font-serif font-black text-black tracking-tighter">
                                    {MEDIA_MENTIONS[activeIndex].source}
                                </h3>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 gap-3">
                        {MEDIA_MENTIONS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? "bg-[#818CF8]" : "bg-slate-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    aria-label="Next slide"
                    className="hidden md:block absolute right-4 lg:right-0 p-2 text-[#2B3D72] hover:text-[#FF5722] transition-colors z-10"
                >
                    <ChevronRight size={48} strokeWidth={1} />
                </button>

            </div>
        </section>
    );
};
