"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const FULL_TEXT = "Building Intelligent Products";
const INT_START = FULL_TEXT.indexOf("Intelligent");
const INT_END = INT_START + "Intelligent".length;

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) {
      const t = setTimeout(() => {
        setCount(0);
        setWaiting(false);
      }, 2000);
      return () => clearTimeout(t);
    }
    if (count < FULL_TEXT.length) {
      const t = setTimeout(() => setCount((c) => c + 1), 60);
      return () => clearTimeout(t);
    } else {
      setWaiting(true);
    }
  }, [count, waiting]);

  const typed = FULL_TEXT.slice(0, count);
  const before = typed.slice(0, INT_START);
  const during = typed.slice(INT_START, INT_END);
  const after = typed.slice(INT_END);

  return (
    <section id="home" className="flex min-h-[70vh] scroll-mt-32 flex-col items-center justify-center py-24 sm:py-32">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center lg:flex-row lg:gap-10 lg:items-start lg:text-left">
        <div className="shrink-0">
          <div className="relative rounded-2xl bg-gradient-to-b from-zinc-700 via-zinc-950 to-black p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
            <div className="relative h-32 w-28 overflow-hidden rounded-xl border border-white/5 sm:h-40 sm:w-32 lg:h-48 lg:w-40">
              <Image
                src="/profilePic.jpeg"
                alt="Mayank Sharma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start animate-fade-slide">
          <h1 className="max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">{before}</span>
            <span className="font-cursive bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
              {during}
            </span>
            {count > INT_END + 1 && <br />}
            <span className="text-white">{after.replace(/^\s/, "")}</span>
            <span className="inline-block w-[2px] animate-pulse text-white">
              |
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg md:text-xl">
            CSE (AI & ML) student at UEM Kolkata. Building ML models and full-stack
            applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#education"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] active:scale-[0.97]"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/MayankCV.pdf"
              download="MayankCV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:text-white active:scale-[0.97]"
            >
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="mailto:mayankfhacker@gmail.com"
              className="text-slate-500 transition-colors hover:text-purple-400"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/Mayank8159"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-purple-400"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-kumar-sharma-900318318/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-purple-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
