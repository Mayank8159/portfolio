"use client";

import Image from "next/image";
import { Music, Tent, MapPin, FlaskConical, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const iconMap = {
  Singing: Music,
  Camping: Tent,
  Travelling: MapPin,
  Research: FlaskConical,
};

export default function HobbiesSection({ hobbies }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="hobbies" className="mt-20 scroll-mt-32 sm:mt-24">
      <SectionHeader
        icon={Sparkles}
        eyebrow="SYSTEM_LOG: INTERESTS"
        title="Beyond the Code"
        description="When I am not building, you will find me doing these."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-10 grid gap-5 sm:gap-6 lg:mt-12 lg:grid-cols-2"
      >
        {hobbies.map((hobby) => {
          const Icon = iconMap[hobby.name] || Sparkles;
          return (
            <motion.div
              key={hobby.name}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#18181b] to-[#1f1f23] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-500/30"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-fuchsia-500 opacity-30 z-20" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.015)_50%,transparent_75%)] z-10" />

              <div className="relative h-52 sm:h-56">
                <Image
                  src={hobby.image}
                  alt={hobby.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(6,182,212,0.1)_0%,transparent_100%)] opacity-0 transition-opacity group-hover:opacity-100 z-10" />
              </div>

              <div className="relative z-10 -mt-1 flex items-start gap-4 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Icon size={18} />
                </div>
                <div>
                  <h4
                    className="text-lg font-black tracking-tight text-white sm:text-xl"
                    style={{ fontFamily: "var(--font-preahvihear)" }}
                  >
                    {hobby.name}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
