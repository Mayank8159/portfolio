"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, description }) {
  return (
    <div className="mb-8 sm:mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white sm:text-3xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
