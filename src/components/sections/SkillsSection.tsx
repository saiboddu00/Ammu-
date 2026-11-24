"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/TextReveal";

type SkillTab = "programming" | "fundamentals" | "interests";

const TABS: Array<{ id: SkillTab; label: string; icon: React.ElementType }> = [
  { id: "programming", label: "Programming", icon: Code2 },
  { id: "fundamentals", label: "Fundamentals", icon: Terminal },
  { id: "interests", label: "Learning Interests", icon: BrainCircuit },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillTab>("programming");

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-10 h-80 w-80 rounded-full bg-gradient-to-br from-[#6EE7B7]/25 via-[#38BDF8]/15 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Building My Technical Foundation"
          accentColor="#6EE7B7"
          subtitle="Foundational programming knowledge paired with an active focus on Artificial Intelligence, Machine Learning, and Data Science."
        />

        {/* Interactive Category Tabs */}
        <div
          role="tablist"
          aria-label="Technical skill categories"
          className="glass-surface mb-10 inline-flex flex-wrap gap-2 rounded-3xl p-2 sm:rounded-full"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "text-[#FFF9F5]"
                    : "text-[#3F3D56] hover:text-[#7C3AED] dark:text-[#D7D2EE] dark:hover:text-[#C4B5FD]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skillsActiveTab"
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#F472B6] to-[#38BDF8] shadow-md"
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          {activeTab === "programming" && (
            <motion.div
              key="programming"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {SKILLS_DATA.programming.map((lang, idx) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-strong group relative overflow-hidden rounded-[2rem] p-7 transition-shadow hover:shadow-2xl hover:shadow-[#7C3AED]/15"
                >
                  {/* 3D Dimensional Emblem */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div
                        className="absolute inset-0 rotate-6 rounded-2xl opacity-30 transition-transform duration-300 group-hover:rotate-12"
                        style={{ backgroundColor: lang.ring }}
                      />
                      <div
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl font-display text-2xl font-bold text-[#FFF9F5] shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                        style={{
                          background: `linear-gradient(135deg, ${lang.accent}, ${lang.ring})`,
                        }}
                      >
                        {lang.symbol}
                      </div>
                    </div>

                    <span
                      className="rounded-full px-3.5 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${lang.accent}20`,
                        color: lang.accent,
                      }}
                    >
                      {lang.level}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#10101C] dark:text-[#FFF9F5]">
                    {lang.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                    {lang.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "fundamentals" && (
            <motion.div
              key="fundamentals"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              <div className="glass-strong mb-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#38BDF8] to-[#7C3AED] text-[#FFF9F5]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#10101C] dark:text-[#FFF9F5]">
                      Python Fundamentals
                    </h3>
                    <p className="text-xs text-[#65627D] dark:text-[#A39EC2]">
                      Core building blocks practiced for algorithmic thinking and AI/ML readiness
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#38BDF8]/15 px-3 py-1 text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                  5 Core Topics
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SKILLS_DATA.pythonFundamentals.map((topic, idx) => (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="glass-surface rounded-[1.6rem] p-6"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: topic.accent }}
                      />
                      <h4 className="font-heading text-lg font-bold text-[#10101C] dark:text-[#FFF9F5]">
                        {topic.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                      {topic.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "interests" && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 gap-6 lg:grid-cols-12"
            >
              <div className="space-y-4 lg:col-span-7">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED] dark:text-[#C4B5FD]">
                  <Cpu className="h-4 w-4" />
                  <span>Currently Learning</span>
                </div>
                {SKILLS_DATA.currentlyLearning.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="glass-strong flex flex-col justify-between gap-3 rounded-3xl p-6 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h4 className="font-heading text-lg font-bold text-[#10101C] dark:text-[#FFF9F5]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-[#3F3D56] dark:text-[#D7D2EE]">
                        {item.note}
                      </p>
                    </div>
                    <span
                      className="w-fit shrink-0 rounded-full px-3.5 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${item.accent}20`,
                        color: item.accent,
                      }}
                    >
                      {item.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="glass-strong flex flex-col justify-between rounded-[2rem] p-7 lg:col-span-5">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F472B6]">
                    <Sparkles className="h-4 w-4" />
                    <span>Career Interests</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#10101C] dark:text-[#FFF9F5]">
                    Fields I am excited to grow into
                  </h4>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {SKILLS_DATA.careerInterests.map((interest) => (
                      <span
                        key={interest.name}
                        className="rounded-full border px-4 py-2 text-sm font-semibold transition-transform hover:scale-105"
                        style={{
                          borderColor: `${interest.accent}45`,
                          backgroundColor: `${interest.accent}14`,
                          color: interest.accent,
                        }}
                      >
                        {interest.name}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-xs leading-relaxed text-[#65627D] dark:text-[#A39EC2]">
                  All skills and learning areas reflect genuine current coursework and
                  self-directed study—no fabricated metrics or inflated ratings.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
