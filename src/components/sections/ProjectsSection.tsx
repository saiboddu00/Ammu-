"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Rocket, Sparkles } from "lucide-react";
import { PROJECTS_EXPERIENCE } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/TextReveal";
import { AmbientMiniScene } from "@/components/three/AmbientMiniScene";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F6EFFC]/65 py-24 sm:py-32 dark:bg-[#17162A]/55"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tl from-[#7C3AED]/20 via-[#38BDF8]/15 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects & Experience"
          title={PROJECTS_EXPERIENCE.heading}
          accentColor="#7C3AED"
          subtitle={PROJECTS_EXPERIENCE.statement}
        />

        {/* Main Showcase Banner with Abstract 3D Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-strong mb-8 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-[2.25rem] p-6 sm:p-9 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#7C3AED]/12 px-3.5 py-1 text-xs font-semibold text-[#7C3AED] dark:bg-[#C4B5FD]/15 dark:text-[#C4B5FD]">
              <Rocket className="h-3.5 w-3.5" />
              <span>Internship Objective</span>
            </span>
            <h3 className="font-display mt-4 text-2xl font-bold text-[#10101C] sm:text-3xl dark:text-[#FFF9F5]">
              Turning Foundations Into Real-World Practice
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
              {PROJECTS_EXPERIENCE.internshipObjective}
            </p>
          </div>
          <div className="rounded-3xl border border-[#C4B5FD]/20 bg-gradient-to-br from-[#7C3AED]/10 via-[#F472B6]/10 to-[#38BDF8]/10 p-2 lg:col-span-5">
            <AmbientMiniScene variant="projects" className="h-56 w-full" />
          </div>
        </motion.div>

        {/* Upcoming Projects Cards (Coming Soon) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROJECTS_EXPERIENCE.upcomingTracks.map((track, idx) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-surface flex flex-col justify-between rounded-[1.85rem] p-6"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `${track.accent}18`,
                      color: track.accent,
                    }}
                  >
                    <Clock className="h-3.5 w-3.5" />
                    {track.status}
                  </span>
                  <Sparkles
                    className="h-4 w-4 opacity-70"
                    style={{ color: track.accent }}
                  />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#10101C] dark:text-[#FFF9F5]">
                  {track.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
                  {track.focus}
                </p>
              </div>
              <div className="mt-6 h-1.5 w-16 rounded-full opacity-75" style={{ backgroundColor: track.accent }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
