"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

export const Philosophy = () => {
    return (
        <SectionWrapper className="py-40">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.p
                    className="text-sm uppercase tracking-widest text-white/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Cirqle Philosophy
                </motion.p>

                <motion.h2
                    className="text-4xl md:text-6xl font-normal leading-tight text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    We believe growth comes from systems working in harmony. <br />
                    <span className="text-white/40">Aligned strategy, content, execution, and optimization — repeated intentionally.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="pt-12"
                >
                    <p className="text-lg md:text-xl text-[var(--c-peach)]">
                        Your brand compounds every time the Cirqle completes.
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}
