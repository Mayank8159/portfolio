"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="relative mb-10 max-w-4xl sm:mb-12">
      {/* Indented Hardware Label */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-5 inline-flex items-center gap-2 border-l-2 border-cyan-500 bg-cyan-500/5 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.14em] text-cyan-400 sm:mb-6 sm:gap-3 sm:px-4 sm:text-[10px] sm:tracking-[0.2em]"
      >
        {Icon && <Icon size={14} className="animate-pulse" />}
        <span>{eyebrow}</span>
      </motion.div>

      {/* Section Title with Scanning Underline */}
      <div className="relative inline-block">
        <h3
          className="mb-4 text-3xl font-black leading-none tracking-tighter italic text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-preahvihear)" }}
        >
          {title}
        </h3>
        {/* Animated Scanline Underline */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[2px] bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-transparent opacity-50" 
        />
      </div>

      {description ? (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-gray-400 sm:mt-6 sm:text-base"
        >
          {description}
        </motion.p>
      ) : null}
      
      {/* Decorative background number/code snippet (Optional touch) */}
      <span className="pointer-events-none absolute -left-4 -top-2 hidden select-none text-[82px] font-black text-white/[0.02] sm:-left-6 sm:-top-4 sm:block sm:text-[120px]">
        0{title.length % 9}
      </span>
    </div>
  );
}