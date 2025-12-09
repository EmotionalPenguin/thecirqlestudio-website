"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface GradientRingProps {
    className?: string;
    size?: number | string;
}

export const GradientRing = ({ className, size = 500 }: GradientRingProps) => {
    return (
        <div
            className={clsx(
                "relative flex items-center justify-center opacity-80 mix-blend-screen pointer-events-none",
                className
            )}
            style={{ width: size, height: size }}
        >
            {/* Outer Glow */}
            <motion.div
                className="absolute inset-0 rounded-full blur-[80px] opacity-40"
                style={{
                    background:
                        "conic-gradient(from 0deg, var(--c-peach), var(--c-pink), var(--c-magenta), var(--c-peach))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* The Ring Itself */}
            <motion.div
                className="absolute inset-4 rounded-full p-[2px]"
                style={{
                    background:
                        "conic-gradient(from 180deg, var(--c-peach), var(--c-pink), var(--c-magenta), var(--c-peach))",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-full h-full bg-[#0a0a0a] rounded-full" />
            </motion.div>

            {/* Dynamic breathing scale */}
            <motion.div
                className="absolute inset-0 rounded-full border border-white/5"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};
