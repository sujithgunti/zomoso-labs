"use client";

import { motion } from "framer-motion";

export const HowWeDoIt = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-16 max-w-5xl mx-auto text-left">
                    <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                        HOW WE DO IT?
                    </span>
                    <h2 className="font-dm font-normal text-[2rem] leading-[1.5] text-[#5c5958] max-w-5xl mx-auto">
                        Seamlessly integrate with your teams, processes, and technology: our agile pods ensure <span className="font-bold text-[#2B3D72]">delivery accountability</span> and <span className="font-bold text-[#2B3D72]">continuous alignment</span>.
                    </h2>
                </div>

                {/* SVG Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center"
                >
                    {/* Using the SVG provided by the user */}
                    <img
                        src="/How_we_do_it.svg"
                        alt="How We Do It Diagram"
                        className="w-full max-w-5xl h-auto"
                    />
                </motion.div>

            </div>
        </section>
    );
};
