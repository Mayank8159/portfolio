"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const projects = [
  {
    title: "Avaani AI",
    description:
      "A voice-first AI companion built with Next.js, speech-to-text pipelines, and Grok AI integration.",
    image: "/avaani.png",
    href: "https://github.com/Mayank8159/AvaaniAI",
    tags: ["Python", "Three.js", "Next.js", "VRM", "Grok AI"],
  },
  {
    title: "Monastery 360 Viewer",
    description:
      "Interactive 360° exploration platform for monastery spaces with panoramic navigation and contextual storytelling.",
    image: "/mon.png",
    href: "https://github.com/Mayank8159/Monastery360plus",
    tags: ["Next.js", "Tailwind", "Three.js"],
  },
  {
    title: "Plant Disease Detector",
    description:
      "AI-powered application for identifying plant diseases through image analysis.",
    image: "/plant.png",
    href: "https://github.com/Mayank8159/plant-disease-detector",
    tags: ["Next.js", "Tailwind", "tflite", "Python"],
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="featured" className="mt-16 scroll-mt-28 sm:mt-24">
      <div className="mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Featured Work
        </motion.h2>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard>
              <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2 lg:items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-purple-400"
                  >
                    <ExternalLink size={14} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
