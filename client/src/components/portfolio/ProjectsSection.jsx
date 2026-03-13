"use client";

import Image from "next/image";
import { GraduationCap, ExternalLink, Box } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({ cards }) {
  return (
    <section id="education" className="mt-20 scroll-mt-32 sm:mt-24">
      <SectionHeader
        icon={GraduationCap}
        eyebrow="SYSTEM_LOG: EDUCATION"
        title="Knowledge & Builds"
        description="A snapshot of my academic foundation at UEM Kolkata and the AI-driven projects I am architecting."
      />

      <div className="mt-10 grid gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-2">
        {cards.map((card, index) => {
          const isEducation = card.title.includes("B.Tech");

          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0c] p-4 transition-all duration-300 hover:border-cyan-500/30 sm:p-6 lg:pl-[160px]"
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(6,182,212,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Card Image */}
              <div className="relative mb-5 h-[150px] w-full overflow-hidden rounded-xl border border-white/10 sm:h-[170px] lg:absolute lg:left-6 lg:top-6 lg:mb-0 lg:h-[110px] lg:w-[110px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover grayscale-[30%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>

              {/* Category Tag */}
              <span className={`mb-4 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest ${
                isEducation 
                  ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400" 
                  : "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400"
              }`}>
                {isEducation ? <GraduationCap size={12} /> : <Box size={12} />}
                {isEducation ? "ACADEMIC" : "PROJECT"}
              </span>

              {/* Content */}
              <h4
                className="text-xl font-black leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl"
                style={{ fontFamily: "var(--font-preahvihear)" }}
              >
                {card.title}
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300 sm:text-[15px]">
                {card.body}
              </p>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-4 py-2 text-[11px] font-mono font-bold text-white transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500"
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={12} />
                  {card.cta}
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-md border border-white/5 bg-transparent px-4 py-2 text-[11px] font-mono font-bold text-gray-400 transition-all hover:text-white hover:border-white/20"
                  href={card.secondaryHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.secondaryCta}
                </a>
              </div>

              {/* Corner Accent (Cyberpunk Touch) */}
              <div className="absolute bottom-0 right-0 h-8 w-8 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="absolute bottom-2 right-2 h-2 w-2 bg-cyan-500" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}