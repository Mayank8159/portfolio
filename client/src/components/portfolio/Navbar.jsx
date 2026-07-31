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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    setActiveSection(id);
    activeSectionRef.current = id;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 pointer-events-none">
      <div className={`pointer-events-auto relative border border-white/10 bg-[#121218]/70 backdrop-blur-xl transition-all ${
        navOpen ? "rounded-3xl" : "rounded-full"
      }`}>
        {/* Top light highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center"
          >
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 transition-all group-hover:border-violet-500/40 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.25)]">
              <span className="flex items-center gap-1.5 text-sm font-bold tracking-tight transition-colors group-hover:text-violet-300">
                <span className="text-white">Mayank</span>
                <span className="text-white">Sharma</span>
              </span>
            </span>
          </a>

          {/* Center links (desktop) */}
          <nav className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5" />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="/MayankCV.pdf"
              download="MayankCV.pdf"
              className="hidden xs:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>

            <button
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 pt-3">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`rounded-lg px-4 py-2.5 text-sm transition-colors ${
                      activeSection === item.id
                        ? "bg-white/5 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/MayankCV.pdf"
                  download="MayankCV.pdf"
                  onClick={() => setNavOpen(false)}
                  className="xs:hidden mt-2 flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white"
                >
                  Resume <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
