"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/views/components/ui/card";

const REASONS = [
    {
        title: "Outcome-driven pods",
        description: "We deliver outcomes with a 'skin in the game' pay for performance model aligned around productivity and efficiency metrics.",
        imageSrc: "/Why_work_with_Zemoso_1.svg"
    },
    {
        title: "Flexible engagement models",
        description: "We execute with agile cross-functional, expert pods, that scale up and down as needed to meet your customers' requirements.",
        imageSrc: "/Why_work_with_Zemoso_2.svg"
    },
    {
        title: "Adaptive working style",
        description: "We adapt our methods and working models to your processes and way of work to facilitate rapid discovery and delivery cycles.",
        imageSrc: "/Why_work_with_Zemoso_3svg.svg"
    }
];

export const WhyZemoso = () => {
    return (
        <section className="py-24 bg-[#F3F6FD] font-dm">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-16">
                    <span className="text-[#FF5722] font-bold tracking-wide uppercase text-sm mb-4 block">
                        WHY WORK WITH ZEMOSO?
                    </span>
                    <h2 className="text-3xl md:text-[2.5rem] leading-tight font-normal text-[#5c5958] max-w-4xl">
                        We enable enterprise leaders to <span className="text-[#5c5958]">accelerate new revenue streams</span> and <span className="text-[#5c5958]">transformation initiatives.</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REASONS.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white p-8">
                                <CardHeader className="p-0 mb-6">
                                    <div className="w-full h-auto mb-6 flex items-center justify-center">
                                        <img
                                            src={reason.imageSrc}
                                            alt={reason.title}
                                            className="w-auto h-auto max-h-40 object-contain block mx-auto"
                                        />
                                    </div>
                                    <CardTitle className="text-2xl font-normal text-[#2B3D72] mb-4">
                                        {reason.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-slate-600 leading-relaxed text-base">
                                        {reason.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
