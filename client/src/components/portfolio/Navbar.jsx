"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ items }) {
  const [activeSection, setActiveSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSectionRef = useRef("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const elements = items.map((item) => document.getElementById(item.id)).filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      let current = elements.find((el) => {
        return scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight;
      });

      // Snap to last section when user scrolls to the very bottom
      if (!current && window.scrollY + window.innerHeight >= document.body.offsetHeight - 50) {
        current = elements[elements.length - 1];
      }

      if (current && current.id !== activeSectionRef.current) {
        activeSectionRef.current = current.id;
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    handleScroll();
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [items]);

  // Close mobile menu on ESC key or viewport resize to desktop
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
    <header className="fixed left-0 right-0 top-0 z-[100] flex justify-center p-2 sm:p-6 pointer-events-none">
      <motion.div
        layout
        initial={false}
        animate={{
          width: scrolled ? "92%" : "100%",
          maxWidth: scrolled ? "1000px" : "1200px",
          // Keep card shape (16px) while mobile menu is open so dropdown fits cleanly
          borderRadius: scrolled && !navOpen ? "50px" : "16px",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={`pointer-events-auto relative flex flex-col border border-white/10 backdrop-blur-xl shadow-2xl transition-colors duration-500 overflow-hidden ${
          scrolled ? "bg-[#0a0a0c]/90" : "bg-[#0a0a0c]/40"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
          
          {/* Brand/Status */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-tighter text-white uppercase sm:text-sm">
                M_SHARMA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-colors rounded-full ${
                  activeSection === item.id ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/MayankCV.pdf"
              download="MayankCV.pdf"
              className="hidden xs:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black hover:bg-cyan-400 transition-all active:scale-95"
            >
              <Terminal size={12} />
              <span className="hidden sm:inline">RESUME.EXE</span>
            </a>
            
            <button
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden bg-white/5 border border-white/10 active:bg-white/10"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden"
            >
              <div className="flex flex-col gap-1 p-4 pt-2 border-t border-white/5">
                {items.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setNavOpen(false)}
                    className={`flex items-center justify-between px-5 py-4 rounded-xl text-[11px] font-mono font-bold uppercase tracking-widest ${
                      activeSection === item.id 
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    <span>{`> ${item.label}`}</span>
                    <span className="opacity-20 text-[9px]">0{index + 1}</span>
                  </a>
                ))}
                <a
                  href="/MayankCV.pdf"
                  download="MayankCV.pdf"
                  onClick={() => setNavOpen(false)}
                  className="mt-4 flex xs:hidden items-center justify-center gap-2 bg-cyan-500 text-black py-4 rounded-xl text-xs font-black"
                >
                  <Terminal size={14} />
                  RESUME.EXE
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}