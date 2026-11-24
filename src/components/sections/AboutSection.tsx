"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/TextReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AmbientMiniScene } from "@/components/three/AmbientMiniScene";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Lavender & Coral Layered Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#C4B5FD]/30 via-[#F472B6]/15 to-transparent blur-3xl dark:from-[#7C3AED]/20 dark:via-[#FF8066]/10"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title={ABOUT_CONTENT.heading}
          accentColor="#F472B6"
        />

        {/* Artistic Split-Screen Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative & 3D Sculpture Card */}
          <div className="space-y-6 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#F472B6] text-[#FFF9F5]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-[#10101C] dark:text-[#FFF9F5]">
                    Annamacharya Institute of Technology and Sciences (AITS)
                  </p>
                  <p className="text-xs font-medium text-[#7C3AED] dark:text-[#C4B5FD]">
                    Computer Science & Engineering Undergraduate
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-[#3F3D56] sm:text-[1.05rem] dark:text-[#D7D2EE]">
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Abstract 3D Sculpture Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-surface grid grid-cols-1 items-center gap-4 overflow-hidden rounded-[2rem] p-5 sm:grid-cols-5"
            >
              <div className="sm:col-span-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8066]/15 px-3 py-1 text-xs font-semibold text-[#FF8066]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Career Direction</span>
                </span>
                <h3 className="font-heading mt-3 text-xl font-bold text-[#10101C] dark:text-[#FFF9F5]">
                  Curiosity meets structured engineering.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                  Combining strong academic discipline with hands-on exploration in
                  Python, Artificial Intelligence, and Machine Learning.
                </p>
              </div>
              <div className="sm:col-span-2">
                <AmbientMiniScene variant="about" className="h-44 w-full" />
              </div>
            </motion.div>
          </div>

          {/* Right Animated Academic Highlights Bento Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {ABOUT_CONTENT.highlights.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-strong relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${item.surface} p-6 transition-shadow hover:shadow-xl hover:shadow-[#7C3AED]/10`}
              >
                <div
                  className="mb-6 h-2 w-12 rounded-full"
                  style={{ backgroundColor: item.accent }}
                />
                <div
                  className="font-display text-4xl font-bold tracking-tight sm:text-[2.6rem]"
                  style={{ color: item.accent }}
                >
                  <AnimatedCounter
                    value={item.value}
                    decimals={item.decimals}
                    suffix={item.suffix}
                  />
                </div>
                <p className="mt-2 font-heading text-sm font-semibold text-[#10101C] dark:text-[#FFF9F5]">
                  {item.label}
                </p>
              </motion.div>
            ))}

            {/* Colourful Geometric Accent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#7C3AED] via-[#F472B6] to-[#FF8066] p-6 text-[#FFF9F5] shadow-xl shadow-[#7C3AED]/20 sm:col-span-2"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/15 blur-xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFF9F5]/80">
                Focus Areas
              </p>
              <p className="font-display mt-2 text-2xl font-bold leading-snug">
                Artificial Intelligence · Machine Learning · Data Science
              </p>
              <p className="mt-2 text-sm text-[#FFF9F5]/90">
                Building a solid engineering base ready for real-world AI/ML
                internships.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
