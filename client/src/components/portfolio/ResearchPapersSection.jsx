"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";

export default function ResearchPapersSection({ papers }) {
  return (
    <section id="papers" className="mt-16 scroll-mt-28 sm:mt-24">
      <SectionHeader
        title="Research"
        description="Published research and academic papers in AI/ML."
      />

      <div className="space-y-4">
        {papers.map((paper, index) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard>
              <div className="p-5 sm:p-6">
                <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                  {paper.year}
                </span>

                <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">
                  {paper.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">{paper.authors}</p>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {paper.abstract}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-purple-400"
                  href={paper.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
