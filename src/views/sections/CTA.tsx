"use client";

import { Button } from "@/views/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/controllers/useScrollAnimation";
import { fadeIn } from "@/lib/animations";

export const CTA = () => {
    const { ref, controls } = useScrollAnimation(0.2);

    return (
        <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Join the world's leading enterprises in building the next generation of digital products.
                        Let's discuss how we can accelerate your growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                            Book a Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                            View Case Studies
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
