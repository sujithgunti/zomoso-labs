"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/models/data";
import Image from "next/image";

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className="bg-[#F3F6FD] py-24 overflow-hidden font-dm">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-12">
                    <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                        WHAT ARE OUR CLIENTS SAYING?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light text-[#94a3b8]">
                        Our clients love what we do:
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative w-full flex items-center justify-center min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 max-w-4xl mx-auto relative"
                        >
                            <Quote className="w-8 h-8 text-[#FF5722] mb-6 fill-current" />

                            <blockquote className="text-xl md:text-2xl font-light italic text-[#2B3D72] leading-relaxed mb-8">
                                "{TESTIMONIALS[activeIndex].content}"
                            </blockquote>

                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                {/* Avatar */}
                                {TESTIMONIALS[activeIndex].imageSrc ? (
                                    <div className="relative w-12 h-12 flex-shrink-0">
                                        <Image
                                            src={TESTIMONIALS[activeIndex].imageSrc!}
                                            alt={TESTIMONIALS[activeIndex].author}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0" />
                                )}

                                <div className="flex-1">
                                    <h4 className="font-bold text-[#2B3D72] text-lg">
                                        {TESTIMONIALS[activeIndex].author}
                                    </h4>
                                    <p className="text-slate-500 text-sm">
                                        {TESTIMONIALS[activeIndex].role}
                                    </p>
                                </div>

                                <div className="text-right flex flex-col items-end">
                                    {TESTIMONIALS[activeIndex].companyLogoSrc ? (
                                        <>
                                            <span className="text-slate-400 text-xs uppercase block mb-1">Backed by</span>
                                            <div className="relative h-8 w-24">
                                                <Image
                                                    src={TESTIMONIALS[activeIndex].companyLogoSrc!}
                                                    alt={TESTIMONIALS[activeIndex].company}
                                                    fill
                                                    className="object-contain object-right"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <span className="text-[#7C3AED] font-bold">
                                            {TESTIMONIALS[activeIndex].company}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation & Action */}
                <div className="flex flex-col items-center mt-12 gap-8">
                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="p-2 rounded-full border border-slate-300 text-slate-400 hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="p-2 rounded-full border border-slate-300 text-slate-400 hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <button className="px-8 py-3 border border-[#FF5722] text-[#FF5722] font-medium text-sm hover:bg-[#FF5722] hover:text-white transition-colors duration-300">
                        View More
                    </button>
                </div>

            </div>
        </section>
    );
};
