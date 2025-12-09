"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const SectionWrapper = ({
    children,
    className,
    delay = 0,
}: SectionWrapperProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={clsx("w-full max-w-7xl mx-auto px-6 py-24", className)}
        >
            {children}
        </motion.section>
    );
};
