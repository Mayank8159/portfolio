"use client";

import Image from "next/image";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DURATION = 40;

function WheelSkill({ angle, skill, offset, radius }) {
  const rad = (a) => ((a + offset) * Math.PI) / 180;

  const x = useTransform(angle, (a) => Math.cos(rad(a)) * radius);
  const y = useTransform(angle, (a) => Math.sin(rad(a)) * radius);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        x,
        y,
      }}
    >
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 backdrop-blur-md"
      >
        <div className="relative h-4 w-4 shrink-0">
          <Image
            src={skill.logo}
            alt={skill.name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xs text-white">{skill.name}</span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection({ skills }) {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(220);

  const angle = useMotionValue(0);

  useEffect(() => {
    const controls = animate(angle, 360, {
      duration: DURATION,
      ease: "linear",
      repeat: Infinity,
    });
    return controls.stop;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const newRadius = Math.min(width * 0.35, 220);
      setRadius(Math.max(newRadius, 80));
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const diameter = radius * 2 + 80;

  return (
    <section id="skills" className="mt-16 scroll-mt-28 sm:mt-24">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ height: diameter }}
      >
        <div
          className="absolute rounded-full border border-white/[0.04]"
          style={{ width: radius * 2 + 60, height: radius * 2 + 60 }}
        />
        <div
          className="absolute rounded-full border border-dashed border-white/[0.03]"
          style={{ width: radius * 2 + 100, height: radius * 2 + 100 }}
        />

        <div className="absolute z-10 flex flex-col items-center">
          <div className="absolute -top-6 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
          <h2 className="relative bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
            Skills
          </h2>
        </div>

        {skills.map((skill, i) => (
          <WheelSkill
            key={skill.name}
            angle={angle}
            skill={skill}
            offset={(i * 360) / skills.length}
            radius={radius}
          />
        ))}
      </div>
    </section>
  );
}
