import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Philosophy } from "@/components/sections/Philosophy";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--c-bg-dark)] selection:bg-[var(--c-magenta)] selection:text-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Philosophy />
      <Footer />
    </main>
  );
}
