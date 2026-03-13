"use client";

import { motion } from "framer-motion";
import { FolderKanban, Github, Linkedin, Mail, Send, Terminal, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

const contacts = [
  {
    label: "Email",
    value: "mayankfhacker@gmail.com",
    href: "mailto:mayankfhacker@gmail.com",
    icon: Mail,
    color: "text-cyan-400",
  },
  {
    label: "GitHub",
    value: "github.com/Mayank8159",
    href: "https://github.com/Mayank8159",
    icon: Github,
    color: "text-fuchsia-400",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mayank-sharma",
    href: "https://www.linkedin.com/in/mayank-kumar-sharma-900318318/",
    icon: Linkedin,
    color: "text-blue-400",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mt-20 mb-16 scroll-mt-32 sm:mt-28 sm:mb-20">
      <SectionHeader 
        icon={FolderKanban} 
        eyebrow="COMMS_CHANNEL" 
        title="Establish Connection" 
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0c]/60 p-5 backdrop-blur-xl sm:p-8 lg:p-10">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-400/70 sm:mb-6 sm:text-xs sm:tracking-widest">
            <Terminal size={14} />
            <span>Incoming Request: Recruitment_Inquiry</span>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
            I am currently seeking <span className="text-white">Summer 2026 Internships</span> and 
            collaborative research opportunities in <span className="text-cyan-400">AI/ML Engineering</span>. 
            If you have a project that needs a high-performance builder, let&apos;s talk.
          </p>

          <div className="mt-8 grid gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-3">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/5 sm:gap-4 sm:p-4"
                >
                  <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-cyan-500/20 sm:h-12 sm:w-12 ${contact.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-cyan-400 transition-colors">
                      {contact.label}
                    </span>
                    <span className="block truncate text-xs font-bold text-white sm:text-sm">
                      {contact.value}
                    </span>
                  </div>
                  <ExternalLink size={12} className="absolute top-3 right-3 text-white/20 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/5 pt-6 sm:mt-10 sm:gap-4 sm:pt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-black text-black transition-all hover:bg-cyan-400 sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              href="mailto:mayankfhacker@gmail.com"
            >
              <Send size={16} />
              OPEN_MAILBOX
            </motion.a>
            <motion.a
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-5 py-2.5 text-xs font-bold text-white transition-all sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
              href="https://github.com/Mayank8159"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              SOURCE_CODE
            </motion.a>
          </div>
        </div>

        {/* Cyberpunk corner accent */}
        <div className="absolute bottom-0 right-0 h-16 w-16 opacity-10 pointer-events-none">
          <div className="absolute bottom-4 right-4 h-4 w-4 border-r-2 border-b-2 border-white" />
        </div>
      </div>
    </section>
  );
}