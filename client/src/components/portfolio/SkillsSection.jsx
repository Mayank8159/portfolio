"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DURATION = 40;

export default function SkillsSection({ skills }) {
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(220);

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

  const containerSize = radius * 2 + 120;

  return (
    <section id="skills" className="mt-16 scroll-mt-28 sm:mt-24">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: containerSize }}
      >
        <div
          className="absolute rounded-full border border-white/[0.04]"
          style={{ width: radius * 2 + 20, height: radius * 2 + 20 }}
        />
        <div
          className="absolute rounded-full border border-dashed border-white/[0.03]"
          style={{ width: radius * 2 + 40, height: radius * 2 + 40 }}
        />

        <div className="absolute z-10 flex flex-col items-center">
          <div className="absolute -top-6 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />
          <h2 className="relative bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
            Skills
          </h2>
        </div>

        {/* Orbiting ring: the wrapper spins around the hub, each pill's counter-spin keeps it upright */}
        <div className="absolute left-1/2 top-1/2 animate-wheel-spin motion-reduce:animate-none">
          {skills.map((skill, i) => {
            const a = (i * 360) / skills.length;
            const rad = (a * Math.PI) / 180;
            const dx = Math.cos(rad) * radius;
            const dy = Math.sin(rad) * radius;
            return (
              <div
                key={skill.name}
                className="absolute left-0 top-0"
                style={{ transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px)` }}
              >
                <div className="animate-wheel-counter-spin motion-reduce:animate-none">
                  <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 backdrop-blur-md">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
