"use client";

import Image from "next/image";
import { Music, Tent, MapPin, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import GlassCard from "./GlassCard";

const iconMap = {
  Singing: Music,
  Camping: Tent,
  Travelling: MapPin,
  Research: FlaskConical,
};

export default function HobbiesSection({ hobbies }) {
  return (
    <section id="hobbies" className="mt-16 scroll-mt-28 sm:mt-24">
      <SectionHeader
        title="Interests"
        description="Things I enjoy outside of work."
      />

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {hobbies.map((hobby) => {
          const Icon = iconMap[hobby.name];
          return (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="relative h-36 sm:h-44">
                  <Image
                    src={hobby.image}
                    alt={hobby.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>

                <div className="relative z-10 -mt-8 flex items-start gap-3 px-5 pb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 backdrop-blur-sm">
                    {Icon && <Icon size={16} />}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white">
                      {hobby.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
