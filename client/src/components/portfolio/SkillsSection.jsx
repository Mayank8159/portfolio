"use client";

import Image from "next/image";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DURATION = 35;

function OrbitingSkill({ angle, skill, offset, radiusX, radiusY }) {
  const rad = (a) => ((a + offset) * Math.PI) / 180;

  const x = useTransform(angle, (a) => Math.cos(rad(a)) * radiusX);
  const y = useTransform(angle, (a) => Math.sin(rad(a)) * radiusY);
  const depth = useTransform(angle, (a) => Math.sin(rad(a)));
  const scale = useTransform(depth, (d) => 0.75 + 0.35 * ((d + 1) / 2));
  const opacity = useTransform(depth, (d) => 0.2 + 0.8 * ((d + 1) / 2));
  const zIndex = useTransform(depth, (d) => Math.round(d * 5) + 10);
  const filter = useTransform(depth, (d) => {
    const normalized = (d + 1) / 2;
    return `blur(${(1 - normalized) * 2}px)`;
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        x,
        y,
        scale,
        opacity,
        zIndex,
        filter,
      }}
    >
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 backdrop-blur-md"
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
  const [radiusX, setRadiusX] = useState(300);
  const [radiusY, setRadiusY] = useState(180);

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
      const newRadiusX = Math.min(width * 0.4, 300);
      const newRadiusY = Math.max(newRadiusX * 0.6, 80);
      setRadiusX(newRadiusX);
      setRadiusY(newRadiusY);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="mt-16 scroll-mt-28 sm:mt-24">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-x-hidden"
        style={{ height: radiusY * 2 + 160 }}
      >
        <div className="absolute z-10 flex flex-col items-center">
          <div className="absolute -top-6 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl" />
          <h2 className="relative bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
            Skills
          </h2>
        </div>

        {skills.map((skill, i) => (
          <OrbitingSkill
            key={skill.name}
            angle={angle}
            skill={skill}
            offset={(i * 360) / skills.length}
            radiusX={radiusX}
            radiusY={radiusY}
          />
        ))}
      </div>
    </section>
  );
}
