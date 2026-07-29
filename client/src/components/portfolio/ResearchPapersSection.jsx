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
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#18181b] to-[#1f1f23] p-5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-500/30 sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.015)_50%,transparent_75%)]" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(6,182,212,0.08)_0%,transparent_100%)] opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 mb-3 inline-flex items-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
              <FileText size={12} />
              {paper.year}
            </div>

            <h4
              className="text-xl font-black leading-tight tracking-tight text-white sm:text-2xl"
              style={{ fontFamily: "var(--font-preahvihear)" }}
            >
              {paper.title}
            </h4>

            <p className="mt-1 text-xs font-mono text-cyan-400/70">
              {paper.authors}
            </p>

            <p className="relative z-10 mt-3 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
              {paper.abstract}
            </p>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-4 py-2 text-[11px] font-mono font-bold text-white transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500"
                href={paper.file}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={12} />
                DOWNLOAD
              </a>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 opacity-20 transition-opacity group-hover:opacity-100">
              <div className="absolute bottom-2 right-2 h-2 w-2 bg-cyan-500" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
