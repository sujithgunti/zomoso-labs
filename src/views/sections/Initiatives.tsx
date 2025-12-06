"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INITIATIVES = [
    {
        id: "dt",
        title: "Digital transformation",
        description: "Drive strategic transformation initiatives to adapt and grow while evolving your teams, processes, and technology to innovate continuously.",
        imageSrc: "/initiatives_1.svg"
    },
    {
        id: "pm",
        title: "Product modernization",
        description: "Define a value-driven execution plan to re-architect, re-engineer, or re-imagine your applications for creating a sustainable and scalable business model.",
        imageSrc: "/initiatives_2.svg"
    },
    {
        id: "cm",
        title: "Cloud modernization",
        description: "Optimize your cloud investments through continuous alignment of your engineering capabilities with your business vision.",
        imageSrc: "/initiatives_3.svg"
    },
    {
        id: "pe",
        title: "Product expansion",
        description: "Rapidly introduce new features as you scale to cater to emerging use cases, leveraging our mature engineering practices for swift and seamless launches.",
        imageSrc: "/initiatives_4.svg"
    },
    {
        id: "npd",
        title: "New product development",
        description: "Accelerate your new product journey by harnessing the power of design sprints, ensuring continuous alignment with evolving market demands.",
        imageSrc: "/initiatives_5.svg"
    },
    {
        id: "sd",
        title: "Strategy and design",
        description: "Understand customers' journeys, needs, and pain points to craft strategies with a laser focus on delivering value, while prioritizing changes that drive adoption and disruption.",
        imageSrc: "/initiatives_6.svg"
    }
];

export const Initiatives = () => {
    const [activeId, setActiveId] = useState(INITIATIVES[0].id);

    const activeInitiative = INITIATIVES.find(i => i.id === activeId) || INITIATIVES[0];

    return (
        <section className="py-24 bg-white font-dm">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-20">
                    <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                        INITIATIVES
                    </span>
                    <h2 className="text-3xl md:text-[2.5rem] leading-tight font-normal text-[#5c5958] w-full">
                        We understand, execute and scale <span className="font-medium text-[#2B3D72]">exceptional digital products and experiences</span> through our flexible initiatives:
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left: Navigation List */}
                    <div className="flex-1 w-full lg:max-w-md">
                        <div className="flex flex-col">
                            {INITIATIVES.map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative py-6 cursor-pointer group border-b border-gray-200 transition-colors duration-300 ${activeId === item.id ? "text-[#FF5722]" : "text-slate-400 hover:text-slate-600"}`}
                                    onClick={() => setActiveId(item.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xl font-normal transition-colors duration-300 ${activeId === item.id ? "font-medium" : ""}`}>
                                            {item.title}
                                        </span>
                                        {activeId === item.id && (
                                            <ArrowRight className="w-5 h-5" />
                                        )}
                                    </div>
                                    {/* Active Line Indicator */}
                                    {activeId === item.id && (
                                        <motion.div
                                            layoutId="activeLine"
                                            className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5722]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Content Area */}
                    <div className="flex-1 w-full flex items-center justify-center min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeInitiative.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="text-left max-w-lg"
                            >
                                {/* SVG Icon */}
                                <div className="mb-8 w-64 h-64 flex items-center justify-center">
                                    <img
                                        src={activeInitiative.imageSrc}
                                        alt={activeInitiative.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <h3 className="text-2xl font-normal text-[#2B3D72] mb-4">
                                    {activeInitiative.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-base">
                                    {activeInitiative.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
};
