"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.header
            className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center pt-8 pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <Link href="/" className="flex items-center gap-3 pointer-events-auto">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    {/* Using the uploaded logo */}
                    <Image
                        src="/logo.png"
                        alt="The Cirqle Studio Logo"
                        fill
                        sizes="32px"
                        className="object-cover"
                        priority
                    />
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-white/80 font-medium">
                    The Cirqle Studio
                </span>
            </Link>
        </motion.header>
    );
};
