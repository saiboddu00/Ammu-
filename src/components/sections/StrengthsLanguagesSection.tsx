"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  Calendar,
  Compass,
  Globe2,
  Laptop,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  INTERNSHIP_INFO,
  PERSONAL_STRENGTHS,
  SPOKEN_LANGUAGES,
} from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/TextReveal";

const STRENGTH_ICONS = {
  "quick-learner": Zap,
  "problem-solving": Brain,
  adaptable: Compass,
  responsible: ShieldCheck,
  "academic-performance": Award,
  "willingness-to-learn": Sparkles,
} as const;

export function StrengthsLanguagesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-6xl space-y-24 px-4 sm:px-6">
        {/* 12. Personal Strengths */}
        <div>
          <SectionHeader
            eyebrow="Personal Strengths"
            title="What Defines Me"
            accentColor="#F472B6"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {PERSONAL_STRENGTHS.map((item, idx) => {
              const Icon =
                STRENGTH_ICONS[item.id as keyof typeof STRENGTH_ICONS] ??
                Sparkles;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={`glass-strong group relative overflow-hidden rounded-[1.85rem] p-6 transition-shadow hover:shadow-xl hover:shadow-[#7C3AED]/10 ${item.span}`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-20 blur-xl transition-opacity group-hover:opacity-35"
                    style={{ backgroundColor: item.accent }}
                  />
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-[#FFF9F5] shadow-sm"
                    style={{ backgroundColor: item.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#10101C] dark:text-[#FFF9F5]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 13. Languages */}
        <div>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/35 bg-[#38BDF8]/12 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0284C7] dark:text-[#38BDF8]">
                <Globe2 className="h-3.5 w-3.5" />
                <span>Languages</span>
              </span>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-[#10101C] sm:text-4xl dark:text-[#FFF9F5]">
                Multilingual Communication
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SPOKEN_LANGUAGES.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-strong relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${lang.gradient} p-6`}
              >
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: lang.accent }}
                >
                  {lang.name}
                </span>
                <p className="mt-1 text-sm font-medium text-[#3F3D56] dark:text-[#D7D2EE]">
                  {lang.nativeLabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 14. Internship Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#7C3AED] via-[#F472B6] to-[#FF8066] p-8 text-[#FFF9F5] shadow-2xl shadow-[#7C3AED]/25 sm:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#38BDF8]/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-[#6EE7B7]/25 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFF9F5] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Internship Opportunities</span>
              </span>

              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {INTERNSHIP_INFO.heading}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#FFF9F5]/95 sm:text-lg">
                {INTERNSHIP_INFO.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#10101C]/25 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                  <Calendar className="h-4 w-4 text-[#6EE7B7]" />
                  <span>Preferred Duration: {INTERNSHIP_INFO.duration}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#10101C]/25 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                  <Laptop className="h-4 w-4 text-[#38BDF8]" />
                  <span>Preferred Environment: {INTERNSHIP_INFO.environment}</span>
                </div>
              </div>
            </div>

            <div className="flex lg:col-span-4 lg:justify-end">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#FFF9F5] px-7 py-4 text-base font-bold text-[#10101C] shadow-xl transition-transform hover:scale-[1.04] active:scale-[0.98]"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="h-5 w-5 text-[#7C3AED]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
