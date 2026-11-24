"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Compass } from "lucide-react";
import { AI_LEARNING_GOALS } from "@/data/portfolio";
import { LearningNeuralNetwork } from "@/components/visuals/InteractiveNeuralNet";

export function LearningJourneySection() {
  const foundational = AI_LEARNING_GOALS.filter(
    (g) => g.stage === "foundational"
  );
  const futureGoals = AI_LEARNING_GOALS.filter((g) => g.stage === "goal");

  return (
    <section
      id="ai-journey"
      className="relative overflow-hidden bg-[#10101C] py-24 text-[#FFF9F5] sm:py-32"
    >
      {/* Colourful Cosmic Mesh Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/28 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-0 h-96 w-96 rounded-full bg-[#F472B6]/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C4B5FD]/30 bg-[#C4B5FD]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
            <span>AI/ML Learning Journey</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#FFF9F5] sm:text-4xl lg:text-5xl">
            Exploring the Future of Intelligence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D7D2EE] sm:text-lg">
            A transparent roadmap separating my current foundational knowledge from
            the machine learning milestones I am actively working toward.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Interactive Neural Network */}
          <div className="lg:col-span-7">
            <LearningNeuralNetwork />
          </div>

          {/* Foundational vs Future Learning Goals */}
          <div className="space-y-6 lg:col-span-5">
            {/* Group 1: Current Foundational Knowledge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-[#38BDF8]/30 bg-[#17162A]/90 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#38BDF8]">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Current Foundational Knowledge</span>
                </span>
                <span className="rounded-full bg-[#38BDF8]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#38BDF8]">
                  Active Now
                </span>
              </div>

              <div className="space-y-3">
                {foundational.map((goal) => (
                  <div
                    key={goal.id}
                    className="rounded-2xl border border-white/10 bg-[#10101C]/75 p-4"
                  >
                    <p className="font-heading text-sm font-semibold text-[#FFF9F5]">
                      {goal.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#A39EC2]">
                      {goal.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Group 2: Future Learning Goals */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-[2rem] border border-[#F472B6]/30 bg-[#17162A]/90 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F472B6]">
                  <Compass className="h-4 w-4" />
                  <span>Future Learning Goals</span>
                </span>
                <span className="rounded-full bg-[#F472B6]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#F472B6]">
                  Next Milestones
                </span>
              </div>

              <ul className="space-y-2.5">
                {futureGoals.map((goal) => (
                  <li
                    key={goal.id}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#10101C]/65 px-4 py-3"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: goal.accent }}
                    />
                    <div>
                      <p className="font-heading text-sm font-semibold text-[#FFF9F5]">
                        {goal.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[#A39EC2]">
                        {goal.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
