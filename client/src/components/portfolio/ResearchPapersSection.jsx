"use client";

import { FileText, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function ResearchPapersSection({ papers }) {
  return (
    <section id="papers" className="mt-20 scroll-mt-32 sm:mt-24">
      <SectionHeader
        icon={FileText}
        eyebrow="SYSTEM_LOG: RESEARCH"
        title="Research Papers"
        description="My published research and academic papers in AI/ML and related fields."
      />

      <div className="mt-10 grid gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-2">
        {papers.map((paper, index) => (
          <motion.article
            key={paper.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[2px] border border-[#d1c9bc]/50 bg-gradient-to-br from-[#f8f4ed] to-[#ede5d8] p-5 shadow-[0_2px_6px_-2px_rgba(0,0,0,0.3),0_10px_28px_-8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.35),0_16px_40px_-10px_rgba(0,0,0,0.5)] sm:p-6 text-left"
          >
            {/* Paper texture lines */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(139,119,90,0.02)_2px,rgba(139,119,90,0.02)_3px)]" />
            {/* Warm vignette */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,252,245,0.5)_0%,transparent_70%)]" />

            {/* Left margin accent — like a red annotation mark */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#c0392b] to-[#e67e22] opacity-60" />

            <div className="relative z-10 mb-3 inline-flex items-center gap-1.5 rounded-sm border border-[#c0392b]/30 bg-[#c0392b]/10 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#8b2c1e]">
              <FileText size={12} />
              {paper.year}
            </div>

            <h4
              className="text-xl font-black leading-tight tracking-tight text-[#2d2a24] sm:text-2xl"
              style={{ fontFamily: "var(--font-preahvihear)" }}
            >
              {paper.title}
            </h4>

            <p className="mt-1 text-xs font-mono text-[#8b7355]">
              {paper.authors}
            </p>

            <p className="relative z-10 mt-3 text-sm leading-relaxed text-[#5c554a] transition-colors group-hover:text-[#4a443b]">
              {paper.abstract}
            </p>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2 justify-start">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-[#d1c9bc]/60 bg-[#d1c9bc]/20 px-2 py-0.5 text-[10px] font-mono text-[#8b7355]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap gap-3 justify-start">
              <a
                className="inline-flex items-center gap-2 rounded-sm bg-[#2d2a24] border border-[#2d2a24] px-4 py-2 text-[11px] font-mono font-bold text-[#f8f4ed] transition-all hover:bg-[#c0392b] hover:border-[#c0392b]"
                href={paper.file}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={12} />
                DOWNLOAD
              </a>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 opacity-10 transition-opacity group-hover:opacity-30">
              <div className="absolute bottom-2 right-2 h-2 w-2 bg-[#c0392b]" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
