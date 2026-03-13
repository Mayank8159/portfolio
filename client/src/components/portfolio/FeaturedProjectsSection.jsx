"use client";

import Image from "next/image";
import { Terminal, Cpu, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const featuredData = [
  {
    eyebrow: "Featured_Project",
    title: "AI Study Planner",
    description:
      "A student productivity platform that uses ML to suggest daily study plans based on syllabus load, deadlines, and performance history. Includes task prioritization, streak tracking, and revision reminders.",
    image: "https://images.unsplash.com/photo-1738641928061-e68c5e8e2f2b?auto=format&fit=crop&q=80&w=900",
    tags: ["Python", "TensorFlow", "Next.js"],
    isReversed: false,
  },
  {
    eyebrow: "System_Core",
    title: "Personal Portfolio",
    description:
      "A high-performance portfolio showcasing my AI/ML journey. Features a custom Intersection Observer for navigation, Framer Motion for hardware-accelerated animations, and a glassmorphic Cyberpunk UI.",
    image: "https://images.unsplash.com/photo-1757476623157-cb993ae14a77?auto=format&fit=crop&q=80&w=900",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    isReversed: true,
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="featured" className="relative mt-32 scroll-mt-32">
      {/* Decorative Background Gradients */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/5 blur-[120px]" />

      <div className="space-y-32">
        {featuredData.map((project, index) => (
          <FeaturedCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ eyebrow, title, description, image, tags, isReversed }) {
  return (
    <div className={`grid gap-8 lg:grid-cols-12 lg:items-center`}>
      {/* Image Container */}
      <div className={`relative lg:col-span-7 ${isReversed ? "lg:order-last" : ""}`}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0c]"
        >
          {/* Cyan Overlay on Hover */}
          <div className="absolute inset-0 z-10 bg-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale-[40%] transition-all duration-500 group-hover:grayscale-0"
          />
          
          {/* Scanning Line Effect */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className={`relative z-30 lg:col-span-5 ${isReversed ? "lg:text-right" : ""}`}>
        <div className={`flex flex-col ${isReversed ? "lg:items-end" : "lg:items-start"}`}>
          <p className="font-mono text-[12px] font-bold tracking-[0.2em] text-cyan-400 uppercase italic">
            {`// ${eyebrow}`}
          </p>

          <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl" style={{ fontFamily: "var(--font-preahvihear)" }}>
            {title}
          </h3>

          <div className="relative mt-6 w-full rounded-xl border border-white/10 bg-[#16161a]/80 p-6 backdrop-blur-md shadow-2xl transition-all hover:border-cyan-500/30">
            {/* Corner Decorative Notch */}
            <div className="absolute -top-px -left-px h-4 w-4 border-l-2 border-t-2 border-cyan-500" />
            
            <p className="text-sm leading-relaxed text-gray-300">
              {description}
            </p>
          </div>

          <ul className={`mt-6 flex flex-wrap gap-4 font-mono text-[10px] text-cyan-300/60 uppercase tracking-widest ${isReversed ? "justify-end" : ""}`}>
            {tags.map((tag) => (
              <li key={tag} className="flex items-center gap-1">
                <Cpu size={12} /> {tag}
              </li>
            ))}
          </ul>

          <div className={`mt-8 flex gap-4 ${isReversed ? "justify-end" : ""}`}>
            <button className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white hover:text-black">
              <ExternalLink size={14} /> VIEW_MODULE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}