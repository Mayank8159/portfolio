"use client";

import Image from "next/image";
import { Brain, Code2, Database, Terminal, Sparkles, Activity } from "lucide-react";
import { motion } from "framer-motion";

const ICON_MAP = {
  Brain: Brain,
  Code2: Code2,
  Database: Database,
};

export default function HeroSection({ facts }) {
  return (
    <section id="home" className="relative grid min-h-[62vh] scroll-mt-32 gap-10 py-12 md:grid-cols-[300px_1fr] md:items-center lg:min-h-[70vh] lg:gap-12 lg:py-24">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Profile Image Area */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative mx-auto">
        <div className="absolute -inset-4 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
        <div className="relative h-[220px] w-[220px] rounded-full border border-white/10 bg-[#0a0a0c] p-2 shadow-[0_0_50px_rgba(6,182,212,0.1)] sm:h-[260px] sm:w-[260px] lg:h-[280px] lg:w-[280px]">
          <Image className="h-full w-full rounded-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                 src="/profilePic.jpeg" alt="Mayank Sharma" width={280} height={280} priority />
        </div>
        <div className="absolute -bottom-4 right-0 flex items-center gap-2 rounded-md border border-cyan-500/50 bg-black px-3 py-1 shadow-[0_0_15px_rgba(6,182,212,0.3)] sm:px-4 sm:py-1.5">
          <Activity size={14} className="text-cyan-400" />
          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tighter">Status: Online</span>
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="relative z-10 max-md:text-center">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} 
                    className="inline-flex items-center gap-2 rounded-md border-l-2 border-cyan-500 bg-cyan-500/5 px-4 py-2 text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
          <Terminal size={16} />
          <span>INIT_AUTH: MAYANK_K_SHARMA</span>
        </motion.div>

        <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tighter italic text-white sm:text-5xl lg:text-7xl" style={{ fontFamily: "var(--font-preahvihear)" }}>
          CRAFTING <span className="text-cyan-400">INTELLIGENT</span> PRODUCTS<span className="text-cyan-400 animate-pulse">_</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-gray-400 max-md:mx-auto sm:text-base lg:text-lg">
          2nd Year CSE Student specializing in AI & ML. Lead at Google Gemini Student Community. 
          Currently focused on building predictive dashboards and full-stack AI integrations.
        </p>

        {/* Fact Chips */}
        <div className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
          {facts.map((fact, index) => {
            const Icon = ICON_MAP[fact.icon] || Code2;
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/5 px-4 py-2.5 text-[11px] font-mono font-medium text-gray-300 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-white sm:px-5 sm:py-3 sm:text-xs"
              >
                <Icon size={16} className="text-cyan-500 group-hover:scale-110 transition-transform" />
                <span>{fact.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}