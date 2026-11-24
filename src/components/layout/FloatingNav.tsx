"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Download,
  Moon,
  Sun,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

export function JTMonogram() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="jtMonogramGrad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="52%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="12"
          fill="url(#jtMonogramGrad)"
        />
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="10.5"
          fill="#10101C"
          fillOpacity="0.16"
        />
        <path
          d="M15.5 12.5V22.5C15.5 25.2614 13.4853 27.5 11 27.5C9.8 27.5 8.8 27.1 8 26.4"
          stroke="#FFF9F5"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M20.5 12.5H30.5M25.5 12.5V27.5"
          stroke="#FFF9F5"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="30.5" cy="25.5" r="2" fill="#6EE7B7" />
      </svg>
      <span className="font-display text-sm font-bold tracking-tight text-[#10101C] sm:text-base dark:text-[#FFF9F5]">
        Tejaswini
      </span>
    </span>
  );
}

export function FloatingNav() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    const onScroll = () => {
      setShowBackToTop(window.scrollY > 520);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 right-0 left-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#7C3AED] via-[#F472B6] via-60% to-[#38BDF8]"
        aria-hidden="true"
      />

      {/* Floating Navigation Bar */}
      <header className="fixed top-3 right-0 left-0 z-40 px-3 sm:top-5 sm:px-6">
        <nav
          aria-label="Primary navigation"
          className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-3.5 py-2 shadow-lg shadow-[#7C3AED]/10 dark:shadow-black/30"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="cursor-pointer rounded-full py-0.5 pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            aria-label="Jadda Tejaswini Home"
          >
            <JTMonogram />
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`relative cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      active
                        ? "text-[#FFF9F5]"
                        : "text-[#3F3D56] hover:text-[#7C3AED] dark:text-[#D7D2EE] dark:hover:text-[#C4B5FD]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navActivePill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F472B6] shadow-md shadow-[#7C3AED]/25"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              className="hidden cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#F472B6] to-[#FF8066] px-4 py-2 text-xs font-semibold text-[#FFF9F5] shadow-md shadow-[#7C3AED]/20 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                mounted && theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#7C3AED]/20 bg-white/70 text-[#10101C] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED] dark:border-[#C4B5FD]/25 dark:bg-[#10101C]/80 dark:text-[#FFF9F5] dark:hover:border-[#F472B6]"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4 text-[#FF8066]" />
              ) : (
                <Moon className="h-4 w-4 text-[#7C3AED]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#7C3AED]/20 bg-white/70 text-[#10101C] lg:hidden dark:border-[#C4B5FD]/25 dark:bg-[#10101C]/80 dark:text-[#FFF9F5]"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Responsive Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="glass-strong mx-auto mt-2.5 max-w-6xl rounded-3xl p-4 shadow-xl lg:hidden"
            >
              <ul className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={`block cursor-pointer rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                          active
                            ? "bg-gradient-to-r from-[#7C3AED] to-[#F472B6] text-[#FFF9F5]"
                            : "bg-white/50 text-[#10101C] hover:bg-[#7C3AED]/10 dark:bg-[#10101C]/50 dark:text-[#FFF9F5]"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href={PROFILE.resumePath}
                download={PROFILE.resumeFileName}
                className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#F472B6] to-[#FF8066] px-4 py-3 text-sm font-semibold text-[#FFF9F5]"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass-strong fixed right-5 bottom-5 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[#7C3AED] shadow-lg shadow-[#7C3AED]/20 transition-transform hover:scale-110 dark:text-[#C4B5FD]"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
