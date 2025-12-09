"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, BarChart2 } from "lucide-react";

const steps = [
    { id: "01", title: "Understand", icon: Search, desc: "Research, insights, and brand clarity." },
    { id: "02", title: "Create", icon: PenTool, desc: "Crafting content and creative systems." },
    { id: "03", title: "Launch", icon: Rocket, desc: "Executing across platforms with intent." },
    { id: "04", title: "Optimize", icon: BarChart2, desc: "Analyzing, improving, and scaling performance." },
];

export const Process = () => {
    return (
        <SectionWrapper className="py-24 relative">
            <div className="text-center mb-20">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">How The Cirqle Works</p>
                <div className="w-12 h-[1px] bg-white/20 mx-auto" />
            </div>

            <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
                {/* Connecting Line (Desktop) */}
                <div className="absolute top-12 left-0 w-full h-[2px] hidden md:block">
                    <div className="w-full h-full bg-white/10" />
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--c-peach)] via-[var(--c-magenta)] to-[var(--c-peach)]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </div>

                {/* Connecting Line (Mobile) */}
                <div className="absolute left-6 top-0 w-[2px] h-full block md:hidden">
                    <div className="w-full h-full bg-white/10" />
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--c-peach)] via-[var(--c-magenta)] to-[var(--c-peach)]"
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover="hover"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3, duration: 0.6 }}
                        className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-6 flex-1 text-left md:text-center cursor-pointer group"
                    >
                        <div className="relative">
                            <motion.div
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center relative z-10 transition-colors"
                                variants={{
                                    hover: { scale: 1.1, borderColor: "var(--c-peach)", backgroundColor: "#1f1f1f" }
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-[var(--c-peach)] transition-colors duration-300" />
                            </motion.div>
                            {/* Halo effect */}
                            <motion.div
                                className="absolute inset-0 bg-[var(--c-peach)]/20 blur-xl rounded-full z-0"
                                initial={{ opacity: 0, scale: 0.5 }}
                                variants={{
                                    hover: { opacity: 1, scale: 1.5 }
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white mb-2 group-hover:text-[var(--c-peach)] transition-colors duration-300">{step.title}</h4>
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                variants={{
                                    hover: { opacity: 1, height: "auto", marginTop: 8 }
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="overflow-hidden"
                            >
                                <p className="text-sm text-white/50 leading-relaxed max-w-[200px] md:mx-auto">{step.desc}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}
