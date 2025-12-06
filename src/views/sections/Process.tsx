"use client";

import { PROCESS_STEPS } from "@/models/data";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/controllers/useScrollAnimation";
import { slideInLeft, slideInRight } from "@/lib/animations";

export const Process = () => {
    const { ref, controls } = useScrollAnimation(0.2);

    return (
        <section id="methodology" className="py-24 bg-brand-light dark:bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <span className="text-[#FF5722] font-medium tracking-wide uppercase text-sm mb-4 block">Our Process</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-dm text-[#2B3D72]">How We Work</h2>
                </div>

                <div ref={ref} className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-1 bg-slate-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {PROCESS_STEPS.map((step, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={controls}
                                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 shadow-md mb-6 z-10 group-hover:scale-110 transition-transform duration-300">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
