"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ items }) {
  const [activeSection, setActiveSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const activeSectionRef = useRef("home");

  useEffect(() => {
    const elements = items.map((item) => document.getElementById(item.id)).filter(Boolean);

    const updateActiveSection = () => {
      const offset = 140;
      let current = elements[0];
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) current = el;
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = elements[elements.length - 1];
      }

      if (current && current.id !== activeSectionRef.current) {
        activeSectionRef.current = current.id;
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [items]);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") setNavOpen(false); };
    const handleResize = () => { if (window.innerWidth >= 1024) setNavOpen(false); };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
  }, [navOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-4 py-3 pointer-events-none">
      <div className={`pointer-events-auto flex w-full max-w-4xl flex-col border border-white/10 bg-black/40 backdrop-blur-md transition-all ${
        navOpen ? "rounded-2xl" : "rounded-full"
      }`}>
        <div className="flex h-12 items-center justify-between px-4 sm:h-14 sm:px-5">
          <span className="text-sm font-semibold text-white tracking-tight">MS</span>

          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 py-1.5 text-sm rounded-full transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-500/30"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/MayankCV.pdf"
              download="MayankCV.pdf"
              className="hidden xs:inline-flex px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-white transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              CV
            </a>

            <button
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 lg:hidden hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 px-4 pb-4 pt-2 border-t border-white/10">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setNavOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-purple-500/10 text-purple-300"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/MayankCV.pdf"
                  download="MayankCV.pdf"
                  onClick={() => setNavOpen(false)}
                  className="xs:hidden mt-2 px-4 py-2.5 rounded-lg text-sm text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                >
                  CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
