"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Mayank8159",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayank-kumar-sharma-900318318/",
    icon: Linkedin,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "mayankfhacker@gmail.com";
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
    document.body.removeChild(textarea);
  };

  return (
    <section id="contact" className="mt-16 scroll-mt-28 sm:mt-24">
      <div className="mx-auto max-w-xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          Available for new opportunities & roles
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl"
        >
          Let&apos;s build something extraordinary together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-base text-slate-400"
        >
          Reach out directly via email or connect on socials. I&apos;m always open to new ideas and collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#121218]/80 p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-500/30"
        >
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:mayankfhacker@gmail.com"
                className="group/email flex-1 text-center sm:text-left"
              >
                <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 sm:justify-start">
                  <Mail size={12} />
                  Email
                </p>
                <p className="mt-0.5 text-sm text-slate-300 transition-colors group-hover/email:text-purple-400 break-all">
                  mayankfhacker@gmail.com
                </p>
              </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-purple-500/40 hover:bg-white/10 hover:text-white active:scale-[0.97] w-full xs:w-auto"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy Email
                </>
              )}
            </button>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-purple-600/20 blur-2xl transition-all duration-500 group-hover:bg-purple-500/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 mb-4 text-xs font-medium text-slate-500"
        >
          Or find me on
        </motion.p>

        <div className="grid grid-cols-2 gap-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.06 }}
                className="group/social flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-colors group-hover/social:text-purple-400">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-slate-300 transition-colors group-hover/social:text-white">
                  {social.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
