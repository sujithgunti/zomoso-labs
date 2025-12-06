"use client";

import { Button } from "@/views/components/ui/button";

export const CallToAction = () => {
    return (
        <section className="bg-[#F3F6FD] py-20 md:py-32 relative overflow-hidden font-dm">

            {/* Background Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                {/* Top Left Cluster */}
                <svg className="absolute top-10 left-10 w-24 h-24 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L100 100 L0 100 Z" transform="rotate(-15 50 50)" />
                </svg>
                <svg className="absolute top-40 left-32 w-16 h-16 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 0 L100 0 L50 100 Z" transform="rotate(20 50 50)" />
                </svg>
                <svg className="absolute top-80 left-10 w-20 h-20 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L100 100 L0 100 Z" transform="rotate(45 50 50)" />
                </svg>

                {/* Top Right Cluster */}
                <svg className="absolute top-10 right-20 w-32 h-32 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L100 100 L0 100 Z" transform="rotate(10 50 50)" />
                </svg>
                <svg className="absolute top-40 right-48 w-20 h-20 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 0 L100 0 L50 100 Z" transform="rotate(-10 50 50)" />
                </svg>

                {/* Bottom Areas */}
                <svg className="absolute bottom-20 left-1/4 w-24 h-24 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 0 L100 0 L50 100 Z" transform="rotate(5 50 50)" />
                </svg>
                <svg className="absolute bottom-10 right-1/3 w-16 h-16 text-slate-200" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L100 100 L0 100 Z" transform="rotate(-25 50 50)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">

                <p className="text-[#2B3D72] text-xl md:text-2xl mb-4 font-normal">
                    Got an idea?
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B3D72] mb-12 max-w-5xl mx-auto leading-tight">
                    Together, we’ll <span className="text-[#2B3D72]">b</span><span className="text-[#4C5C8A]">u</span><span className="text-[#6D7B9F]">i</span><span className="text-[#FF5722]">l</span><span className="text-[#FF7043]">d</span> it into a great product
                </h2>

                <Button
                    size="lg"
                    className="bg-[#FF7043] hover:bg-gradient-to-r hover:from-[#2B3D72] hover:to-[#FF5722] text-white rounded-[4px] px-8 py-3 text-base font-medium shadow-sm transition-all hover:-translate-y-0.5"
                >
                    Contact Us
                </Button>
            </div>
        </section>
    );
};
