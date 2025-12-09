"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#050505] py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-light text-white mb-2">The Cirqle Studio</h3>
                    <p className="text-white/40 text-sm">© 2025 The Cirqle Studio. All rights reserved.</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6">
                    <h4 className="text-sm uppercase tracking-widest text-white/40">Start The Conversation</h4>
                    <Link
                        href="mailto:thecirqlestudio@gmail.com"
                        className="inline-flex items-center gap-2 text-white border-b border-transparent hover:border-[var(--c-peach)] hover:text-[var(--c-peach)] transition-all duration-300 pb-1"
                    >
                        <span className="text-lg">thecirqlestudio@gmail.com</span>
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="https://wa.me/+919489444649"
                        className="inline-flex items-center gap-2 text-white border-b border-transparent hover:border-[var(--c-peach)] hover:text-[var(--c-peach)] transition-all duration-300 pb-1"
                    >
                        <span className="text-lg">Message Cirqle Studio</span>
                        <ArrowRight size={18} />
                    </Link>

                    <div className="flex gap-6 mt-4">
                        <Link href="https://www.instagram.com/thecirqlestudio/" className="text-white/40 hover:text-white transition-colors text-sm">Instagram</Link>
                        <Link href="https://www.linkedin.com/company/the-cirqle-studio/" className="text-white/40 hover:text-white transition-colors text-sm">LinkedIn</Link>
                        <Link href="https://x.com/VMasculineDuck" className="text-white/40 hover:text-white transition-colors text-sm">Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
