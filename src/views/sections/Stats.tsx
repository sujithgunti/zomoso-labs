"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STATS } from "@/models/data";

export const Stats = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white font-dm">
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">

                {/* Header Content */}
                <div className="container mx-auto px-6 max-w-7xl mb-16 relative z-10">
                    <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                        RESULTS WE CELEBRATE
                    </span>
                    <h2 className="text-3xl md:text-[2.5rem] leading-tight font-normal text-[#5c5958] w-full">
                        A global leader with over a decade of crafting successful products by blending ideas, emotions, skills, and technology.
                    </h2>
                </div>

                {/* Horizontal Scrolling List */}
                <motion.div style={{ x }} className="flex gap-16 pl-6 md:pl-24 w-max">
                    {STATS.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 min-w-[300px] md:min-w-[400px] flex flex-col justify-start"
                        >
                            <h3 className="text-6xl md:text-8xl font-normal text-[#FF7043] mb-6 font-dm">
                                {stat.value}
                            </h3>
                            <p className="text-xl md:text-2xl text-[#5c5958] leading-relaxed max-w-xs">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
