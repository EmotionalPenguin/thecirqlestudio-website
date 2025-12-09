"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const services = [
    {
        title: "Social Media Management",
        description: "Keeping your brand active, relevant, and always growing.",
    },
    {
        title: "Content Creation",
        description: "Creative storytelling that makes your brand impossible to ignore.",
    },
    {
        title: "Paid Ads & Promotions",
        description: "Paid systems engineered to scale revenue, not vanity metrics.",
    },
    {
        title: "Digital Strategy & Consulting",
        description: "Clarity-driven strategies that turn direction into real growth.",
    },
    {
        title: "Website Building & Optimization",
        description: "High-converting websites designed to perform, not just exist.",
    },
    {
        title: "Email Marketing & Automation",
        description: "Automated email journeys that convert attention into revenue.",
    },
];

export const Services = () => {
    return (
        <SectionWrapper className="py-32">
            <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">What We Do</p>
                <div className="w-12 h-[1px] bg-white/20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {/* Gradient border effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--c-peach)] to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--c-magenta)] to-transparent" />
                        </div>

                        <h3 className="text-xl font-light text-white mb-4 group-hover:text-[var(--c-peach)] transition-colors duration-300">
                            {service.title}.
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
