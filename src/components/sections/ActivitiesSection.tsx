"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Flame, Snowflake, Sparkles, Users } from "lucide-react";
import { ACTIVITIES } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/TextReveal";
import { AmbientMiniScene } from "@/components/three/AmbientMiniScene";
import { ClubNeuralPreview } from "@/components/visuals/InteractiveNeuralNet";

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-[#FF8066]/20 via-[#F472B6]/15 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Hackathon & Extracurriculars"
          title="Innovation Beyond the Classroom"
          accentColor="#FF8066"
        />

        <div className="space-y-8">
          {/* Showcase 1: College Hackathon Participation — Horizontal Split with 3D Fabric Layers */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-strong relative overflow-hidden rounded-[2.25rem] p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF8066]/40 bg-[#FF8066]/15 px-3.5 py-1 text-xs font-semibold text-[#E2553B] dark:text-[#FF8066]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{ACTIVITIES.hackathon.badge}</span>
                </span>

                <h3 className="font-display mt-4 text-2xl font-bold text-[#10101C] sm:text-3xl dark:text-[#FFF9F5]">
                  {ACTIVITIES.hackathon.title}
                </h3>

                <div className="mt-3 rounded-2xl border border-[#F472B6]/25 bg-gradient-to-r from-[#38BDF8]/10 via-[#C4B5FD]/15 to-[#FF8066]/15 px-4 py-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C3AED] dark:text-[#C4B5FD]">
                    Concept Title
                  </span>
                  <p className="font-heading mt-0.5 text-base font-bold text-[#10101C] sm:text-lg dark:text-[#FFF9F5]">
                    {ACTIVITIES.hackathon.concept}
                  </p>
                </div>

                <p className="mt-4 text-base leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                  {ACTIVITIES.hackathon.description}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-[#65627D] dark:text-[#A39EC2]">
                  {ACTIVITIES.hackathon.note}
                </p>

                {/* Temperature Gradient Legend */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#38BDF8]/15 px-3 py-1 text-xs font-semibold text-[#0284C7] dark:text-[#38BDF8]">
                    <Snowflake className="h-3.5 w-3.5" />
                    Outer Breathable Layer
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8066]/15 px-3 py-1 text-xs font-semibold text-[#E2553B] dark:text-[#FF8066]">
                    <Flame className="h-3.5 w-3.5" />
                    Adaptive Warmth Gradient
                  </span>
                </div>
              </div>

              {/* 3D Conceptual Illustration of Fabric Layers and Temperature Gradients */}
              <div className="relative rounded-[2rem] border border-[#C4B5FD]/25 bg-gradient-to-br from-[#38BDF8]/10 via-[#C4B5FD]/15 to-[#FF8066]/15 p-3 lg:col-span-6">
                <AmbientMiniScene
                  variant="hackathon"
                  className="h-72 w-full sm:h-80"
                />
                <div className="mt-2 flex items-center justify-between px-3 pb-1 text-[11px] font-medium text-[#65627D] dark:text-[#A39EC2]">
                  <span>3D Conceptual Fabric & Thermal Gradient Study</span>
                  <span>Hackathon Concept</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Showcase 2: AI/ML Student Club — Asymmetric Reversed Layout with Interactive Neural Graph */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-strong relative overflow-hidden rounded-[2.25rem] p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-6">
                <ClubNeuralPreview />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/35 bg-[#7C3AED]/12 px-3.5 py-1 text-xs font-semibold text-[#7C3AED] dark:border-[#C4B5FD]/35 dark:text-[#C4B5FD]">
                  <Users className="h-3.5 w-3.5" />
                  <span>{ACTIVITIES.club.badge}</span>
                </span>

                <h3 className="font-display mt-4 text-2xl font-bold text-[#10101C] sm:text-3xl dark:text-[#FFF9F5]">
                  {ACTIVITIES.club.title}
                </h3>

                <p className="font-heading mt-4 text-lg font-semibold text-[#7C3AED] dark:text-[#C4B5FD]">
                  {ACTIVITIES.club.roleSummary}
                </p>

                <p className="mt-3 text-base leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                  {ACTIVITIES.club.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-[#7C3AED]/15 bg-white/70 px-4 py-2.5 text-sm font-semibold text-[#10101C] dark:border-[#C4B5FD]/15 dark:bg-[#10101C]/70 dark:text-[#FFF9F5]">
                    <Cpu className="h-4 w-4 text-[#F472B6]" />
                    <span>Peer AI/ML Exploration</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-[#6EE7B7]/25 bg-[#6EE7B7]/10 px-4 py-2.5 text-sm font-semibold text-[#059669] dark:text-[#6EE7B7]">
                    <span>Practical Skill Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
