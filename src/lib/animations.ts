import { Variants } from "framer-motion";

export const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const slideInLeft: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const slideInRight: Variants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export const textReveal: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
    }
};
