"use client";

import { SERVICES } from "@/models/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/views/components/ui/card";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { useScrollAnimation } from "@/controllers/useScrollAnimation";

export const Services = () => {
    const { ref, controls } = useScrollAnimation(0.1);

    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#FF5722] font-medium tracking-wide uppercase text-sm mb-4 block">Product Engineering</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-dm text-[#2B3D72] mb-6">Engineering the Future</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We define, design, and deliver digital products that solve complex business challenges.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {SERVICES.map((service, index) => (
                        <motion.div key={index} variants={fadeIn}>
                            <Card className="h-full border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-50/50">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        {service.icon && <service.icon size={24} />}
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
