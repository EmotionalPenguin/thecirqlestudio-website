"use client";

import { GradientRing } from "@/components/ui/GradientRing";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background visual anchor - Responsive sizing using clamp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <GradientRing size="clamp(350px, 85vmin, 900px)" />
            </div>

            <div className="relative z-10 text-center space-y-3 md:space-y-8 max-w-[80vw] md:max-w-4xl px-4 flex flex-col items-center">
                {/* 'The Cirqle Studio' text removed, moved to Header */}

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-light tracking-tight text-white leading-[1.15]"
                    style={{ fontSize: "clamp(1.6rem, 5vw, 4.5rem)" }}
                >
                    Where Strategy
                    <br />
                    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-[var(--c-peach)] via-[var(--c-pink)] to-[var(--c-magenta)]">
                        Meets Creativity
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white/60 max-w-[80vw] md:max-w-xl mx-auto"
                    style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.125rem)" }}
                >
                    We create the loops of content, ads, websites, and optimization that turn brands into engines.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-2.5 md:gap-6 items-center justify-center w-full"
                >
                    {/* Email Button (Left) */}
                    <Link
                        href="mailto:thecirqlestudio@gmail.com"
                        className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-5 py-2 md:px-8 md:py-3.5 w-full max-w-[190px] sm:max-w-[220px] md:max-w-none md:w-auto md:min-w-[240px] rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-transparent transition-colors duration-300" />
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--c-peach)] via-[var(--c-pink)] to-[var(--c-magenta)] p-[1px] -z-10">
                            <div className="w-full h-full bg-[#0a0a0a] rounded-full" />
                        </div>

                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:text-white transition-colors flex-shrink-0" />

                        <span className="text-sm md:text-base font-light tracking-wide text-white/90 group-hover:text-white transition-colors whitespace-nowrap">
                            Email Cirqle Studio
                        </span>
                    </Link>

                    {/* WhatsApp Button (Right) */}
                    <Link
                        href="https://wa.me/+918438996641"
                        className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-5 py-2 md:px-8 md:py-3.5 w-full max-w-[190px] sm:max-w-[220px] md:max-w-none md:w-auto md:min-w-[240px] rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-transparent transition-colors duration-300" />
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--c-peach)] via-[var(--c-pink)] to-[var(--c-magenta)] p-[1px] -z-10">
                            <div className="w-full h-full bg-[#0a0a0a] rounded-full" />
                        </div>

                        <div className="relative w-4 h-4 md:w-6 md:h-6 flex-shrink-0">
                            <Image
                                src="/whatsapp-logo.png"
                                alt="WhatsApp"
                                fill
                                sizes="24px"
                                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <span className="text-sm md:text-base font-light tracking-wide text-white/90 group-hover:text-white transition-colors whitespace-nowrap">
                            WhatsApp Us
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
