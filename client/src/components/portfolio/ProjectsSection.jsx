"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";

function CardContent({ card, isEducation }) {
  return (
    <div className="p-5 sm:p-6">
      <div className={`flex flex-col ${isEducation ? "lg:flex-row lg:gap-6" : ""}`}>
        <div className={isEducation ? "lg:flex-1" : ""}>
          <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
            {isEducation ? "Education" : "Project"}
          </span>

          <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
            {card.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {card.body}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-purple-400"
              href={card.href}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={12} />
              {card.cta}
            </a>
            <a
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-300"
              href={card.secondaryHref}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={12} />
              {card.secondaryCta}
            </a>
          </div>
        </div>

        <div
          className={`relative mt-4 overflow-hidden rounded-lg border border-white/[0.06] ${isEducation ? "lg:mt-0 lg:w-48 shrink-0" : ""} h-32 sm:h-40`}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ cards }) {
  const eduCard = cards.find((c) => c.title.includes("B.Tech"));
  const projectCards = cards.filter((c) => !c.title.includes("B.Tech"));

  return (
    <section id="education" className="mt-16 scroll-mt-28 sm:mt-24">
      <SectionHeader
        title="Featured"
        accent="Projects"
        description="Academic foundation at UEM Kolkata and projects I have built."
      />

      {eduCard && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard>
            <CardContent card={eduCard} isEducation />
          </GlassCard>
        </motion.div>
      )}

      <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 lg:grid-cols-2">
        {projectCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <GlassCard>
              <CardContent card={card} isEducation={false} />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
