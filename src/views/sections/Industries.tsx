"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INDUSTRY_LIST = [
    "Healthcare",
    "Information security",
    "Oil & Gas",
    "Retail",
    "Biotechnology",
    "Financial services",
    "Utilities",
    "Manufacturing"
];

export const Industries = () => {
    // Default active for demo matching screenshot
    const [activeIndustry, setActiveIndustry] = useState("Oil & Gas");

    return (
        <section className="py-24 bg-[#F3F6FD] font-dm overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                        WHO WE WORK WITH?
                    </span>
                    <h2 className="text-3xl md:text-[2.5rem] leading-tight font-normal text-[#5c5958] w-full">
                        We offer <span className="font-medium text-[#2B3D72]">industry-agnostic, cross-functional agile pods</span> encompassing engineering, data science, generative AI, and other solutions across industries, including:
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

                    {/* Left: Industry List */}
                    <div className="w-full lg:w-1/3">
                        <ul className="space-y-6">
                            {INDUSTRY_LIST.map((item) => (
                                <li
                                    key={item}
                                    className={`text-lg cursor-pointer transition-colors duration-300 ${activeIndustry === item ? "text-[#FF5722] font-medium" : "text-[#2B3D72] hover:text-[#FF5722]"}`}
                                    onMouseEnter={() => setActiveIndustry(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Visual */}
                    <div className="w-full lg:w-2/3 flex items-center justify-center min-h-[300px]">
                        {/* 
                           In the screenshot, this is a large "Industries" text with a gradient.
                           We will replicate this using CSS text gradients.
                        */}
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 select-none opacity-80">
                            Industries
                        </h1>
                    </div>

                </div>

            </div>
        </section>
    );
};
