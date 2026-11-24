"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BookOpen,
  ChevronDown,
  GraduationCap,
  School,
} from "lucide-react";
import { EDUCATION_MILESTONES } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/TextReveal";
import { usePrefersReducedMotion } from "@/components/three/SceneBoundary";

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  btech: GraduationCap,
  intermediate: BookOpen,
  secondary: School,
} as const;

export function EducationSection() {
  const [expandedId, setExpandedId] = useState<string>("btech");
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#F6EFFC]/65 py-24 sm:py-32 dark:bg-[#17162A]/55"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-[#38BDF8]/25 via-[#7C3AED]/15 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Educational Background"
          title="My Academic Journey"
          accentColor="#38BDF8"
          subtitle="Click any milestone card to expand academic highlights and performance details."
        />

        <div ref={containerRef} className="relative pl-6 sm:pl-10">
          {/* Static Background Track */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2.5 w-1 rounded-full bg-[#C4B5FD]/30 sm:left-4 dark:bg-[#C4B5FD]/15"
          />
          {/* GSAP Animated Connecting Line */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2.5 w-1 origin-top rounded-full bg-gradient-to-b from-[#7C3AED] via-[#F472B6] to-[#38BDF8] sm:left-4"
          />

          <div className="space-y-6">
            {EDUCATION_MILESTONES.map((item, idx) => {
              const isOpen = expandedId === item.id;
              const Icon = ICONS[item.id as keyof typeof ICONS] ?? Award;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <span
                    aria-hidden="true"
                    className="absolute top-7 -left-[1.45rem] flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#FFF9F5] shadow-md sm:-left-[2.05rem] dark:border-[#10101C]"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="glass-strong overflow-hidden rounded-[1.85rem] transition-all hover:shadow-xl hover:shadow-[#7C3AED]/10">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId(isOpen ? "" : item.id)
                      }
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between sm:p-7"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-[#FFF9F5] shadow-md`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-[#10101C] sm:text-2xl dark:text-[#FFF9F5]">
                            {item.degree}
                          </h3>
                          {item.field && (
                            <p
                              className="font-heading mt-0.5 text-sm font-semibold"
                              style={{ color: item.accent }}
                            >
                              {item.field}
                            </p>
                          )}
                          <p className="mt-1 text-sm font-medium text-[#3F3D56] dark:text-[#D7D2EE]">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* Score Badges + Expand Chevron */}
                      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                        <div className="rounded-2xl border border-[#7C3AED]/15 bg-white/75 px-4 py-2 text-left dark:border-[#C4B5FD]/15 dark:bg-[#10101C]/70">
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#65627D] dark:text-[#A39EC2]">
                            {item.metricLabel}
                          </span>
                          <span
                            className="font-display text-lg font-bold"
                            style={{ color: item.accent }}
                          >
                            {item.metricValue}
                          </span>
                        </div>

                        <div className="rounded-2xl border border-[#7C3AED]/15 bg-white/75 px-4 py-2 text-left dark:border-[#C4B5FD]/15 dark:bg-[#10101C]/70">
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#65627D] dark:text-[#A39EC2]">
                            {item.secondaryLabel}
                          </span>
                          <span className="font-display text-lg font-bold text-[#10101C] dark:text-[#FFF9F5]">
                            {item.secondaryValue}
                          </span>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C3AED]/10 text-[#7C3AED] dark:bg-[#C4B5FD]/15 dark:text-[#C4B5FD]"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#7C3AED]/12 px-6 pt-4 pb-6 sm:px-7 dark:border-[#C4B5FD]/12">
                            <p className="text-sm leading-relaxed text-[#3F3D56] sm:text-base dark:text-[#D7D2EE]">
                              {item.summary}
                            </p>
                            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                              {item.highlights.map((hl, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="flex items-start gap-2.5 rounded-xl bg-white/60 px-3.5 py-2.5 text-sm text-[#10101C] dark:bg-[#10101C]/55 dark:text-[#FFF9F5]"
                                >
                                  <span
                                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                                    style={{ backgroundColor: item.accent }}
                                  />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
