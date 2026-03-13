"use client";

import Image from "next/image";
import { Code2, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function SkillsSection({ skills }) {
  // Animation variants for the container and children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="mt-28 scroll-mt-32">
      <SectionHeader
        icon={Code2}
        eyebrow="SYSTEM_TECH_STACK"
        title="Technical Arsenal"
        description="Tools and technologies I rely on for machine learning workflows, backend logic, and modern web application interfaces."
      />

      <div className="relative mt-12 rounded-2xl border border-white/5 bg-[#0a0a0c]/60 p-8 backdrop-blur-xl overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px]" />
        
        <div className="relative z-10 flex items-center gap-3 mb-8">
          <Terminal size={20} className="text-cyan-400" />
          <h3 className="text-lg font-mono font-bold text-white uppercase tracking-tighter sm:text-xl">
            Core_Modules.load()
          </h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(34, 211, 238, 0.4)",
                backgroundColor: "rgba(34, 211, 238, 0.05)"
              }}
              className="relative flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 px-2 py-5 text-center transition-all duration-300 group"
            >
              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 rounded-xl bg-cyan-400/0 blur-xl transition-all group-hover:bg-cyan-400/10" />

              <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src={skill.logo} 
                  alt={skill.name} 
                  fill 
                  className="object-contain grayscale-[40%] group-hover:grayscale-0 transition-all"
                />
              </div>
              
              <span className="relative text-[11px] font-mono font-bold uppercase tracking-tighter text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-white/10 transition-colors group-hover:border-cyan-500/50" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}