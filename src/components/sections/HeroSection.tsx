"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, Download, Send, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { usePrefersReducedMotion } from "@/components/three/SceneBoundary";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbLeftRef = useRef<HTMLDivElement>(null);
  const orbRightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (orbLeftRef.current) {
        gsap.to(orbLeftRef.current, {
          yPercent: 22,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
      if (orbRightRef.current) {
        gsap.to(orbRightRef.current, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-subtle-grid relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* Colourful Layered Mesh Gradients (scroll parallax only, never cursor-following) */}
      <div
        ref={orbLeftRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#7C3AED]/28 via-[#C4B5FD]/22 to-transparent blur-3xl dark:from-[#7C3AED]/35 dark:via-[#F472B6]/15"
      />
      <div
        ref={orbRightRef}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-24 h-[480px] w-[480px] rounded-full bg-gradient-to-tl from-[#38BDF8]/25 via-[#F472B6]/20 to-transparent blur-3xl dark:from-[#38BDF8]/25 dark:via-[#FF8066]/15"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* Asymmetric Left Editorial Column */}
        <div className="lg:col-span-6">
          {/* Open to Internships Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-surface mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[#10101C] shadow-sm dark:text-[#FFF9F5]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6EE7B7] opacity-80" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#6EE7B7]" />
            </span>
            <span>{PROFILE.status}</span>
            <span className="text-[#7C3AED] dark:text-[#C4B5FD]">•</span>
            <span className="text-[#65627D] dark:text-[#A39EC2]">
              {PROFILE.location}
            </span>
          </motion.div>

          {/* HELLO, WORLD! */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-3 flex items-center gap-2 font-display text-sm font-bold tracking-[0.26em] text-[#7C3AED] uppercase sm:text-base dark:text-[#C4B5FD]"
          >
            <Sparkles className="h-4 w-4 text-[#F472B6]" />
            <span>{PROFILE.eyebrow}</span>
          </motion.div>

          {/* Oversized Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.04] font-bold tracking-tight text-[#10101C] sm:text-6xl lg:text-[4.25rem] dark:text-[#FFF9F5]"
          >
            <span className="block text-2xl font-semibold text-[#3F3D56] sm:text-3xl lg:text-4xl dark:text-[#C4B5FD]">
              {PROFILE.heroIntro}
            </span>
            <span className="text-gradient-aurora mt-1 block">
              {PROFILE.name}.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="font-heading mt-5 text-lg font-semibold text-[#10101C] sm:text-xl dark:text-[#FFF9F5]"
          >
            {PROFILE.heroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[#3F3D56] sm:text-[1.0625rem] dark:text-[#D7D2EE]"
          >
            {PROFILE.heroDescription}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#F472B6] to-[#FF8066] px-6 py-3.5 text-sm font-semibold text-[#FFF9F5] shadow-lg shadow-[#7C3AED]/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore My Journey</span>
              <ArrowDownRight className="h-4 w-4" />
            </button>

            <a
              href={PROFILE.resumePath}
              download={PROFILE.resumeFileName}
              className="glass-strong inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[#10101C] transition-all hover:border-[#7C3AED] hover:text-[#7C3AED] dark:text-[#FFF9F5] dark:hover:border-[#C4B5FD] dark:hover:text-[#C4B5FD]"
            >
              <Download className="h-4 w-4 text-[#F472B6]" />
              <span>Download Resume</span>
            </a>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-5 py-3.5 text-sm font-semibold text-[#0284C7] transition-all hover:bg-[#38BDF8]/20 dark:text-[#38BDF8]"
            >
              <Send className="h-4 w-4" />
              <span>Connect with Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right Immersive 3D Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative rounded-[2.5rem] border border-[#C4B5FD]/30 bg-gradient-to-br from-[#FFF9F5]/55 via-[#C4B5FD]/15 to-[#38BDF8]/15 p-2 shadow-2xl shadow-[#7C3AED]/10 backdrop-blur-md dark:border-[#C4B5FD]/15 dark:from-[#17162A]/65 dark:via-[#7C3AED]/10 dark:to-[#10101C]/70">
            <HeroCanvas />

            {/* Subtle Floating Caption Pills */}
            <div className="pointer-events-none absolute bottom-5 left-5 flex flex-wrap gap-2">
              <span className="glass-strong rounded-full px-3 py-1 text-[11px] font-semibold text-[#7C3AED] dark:text-[#C4B5FD]">
                Python · C · Java
              </span>
              <span className="glass-strong rounded-full px-3 py-1 text-[11px] font-semibold text-[#F472B6]">
                AI / ML Explorer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
