"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";
import { AI_LEARNING_GOALS } from "@/data/portfolio";

interface NodeCoord {
  id: string;
  x: number;
  y: number;
  short: string;
  color: string;
  layer: number;
}

const LEARNING_NODES: NodeCoord[] = [
  { id: "python-foundations", x: 95, y: 110, short: "Python", color: "#38BDF8", layer: 0 },
  { id: "ai-concepts", x: 95, y: 245, short: "AI Core", color: "#7C3AED", layer: 0 },
  { id: "data-preprocessing", x: 280, y: 80, short: "Preprocess", color: "#6EE7B7", layer: 1 },
  { id: "feature-engineering", x: 280, y: 180, short: "Features", color: "#C4B5FD", layer: 1 },
  { id: "supervised-learning", x: 280, y: 280, short: "Supervised", color: "#F472B6", layer: 1 },
  { id: "unsupervised-learning", x: 470, y: 120, short: "Unsupervised", color: "#FF8066", layer: 2 },
  { id: "practical-ml", x: 470, y: 240, short: "Practical ML", color: "#38BDF8", layer: 2 },
];

const LEARNING_EDGES: Array<[string, string]> = [
  ["python-foundations", "data-preprocessing"],
  ["python-foundations", "feature-engineering"],
  ["ai-concepts", "feature-engineering"],
  ["ai-concepts", "supervised-learning"],
  ["data-preprocessing", "unsupervised-learning"],
  ["feature-engineering", "unsupervised-learning"],
  ["feature-engineering", "practical-ml"],
  ["supervised-learning", "practical-ml"],
  ["data-preprocessing", "practical-ml"],
];

export function LearningNeuralNetwork() {
  const [selectedId, setSelectedId] = useState<string>("python-foundations");
  const selectedGoal =
    AI_LEARNING_GOALS.find((g) => g.id === selectedId) ?? AI_LEARNING_GOALS[0];

  const isConnected = (a: string, b: string) =>
    a === selectedId || b === selectedId;

  return (
    <div className="glass-strong relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7C3AED] dark:text-[#C4B5FD]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Interactive Neural Learning Graph</span>
        </div>
        <span className="rounded-full bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#7C3AED] dark:bg-[#C4B5FD]/15 dark:text-[#C4B5FD]">
          Click a node to inspect pathway
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-[#7C3AED]/15 bg-[#FFF9F5]/65 p-3 dark:border-[#C4B5FD]/15 dark:bg-[#10101C]/70">
        <svg
          viewBox="0 0 565 350"
          className="h-auto w-full"
          role="img"
          aria-label="Interactive AI and Machine Learning neural network roadmap"
        >
          <defs>
            <linearGradient id="edgeActiveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Layer Headers */}
          <text
            x="95"
            y="26"
            textAnchor="middle"
            className="fill-[#65627D] text-[11px] font-semibold uppercase tracking-widest dark:fill-[#A39EC2]"
          >
            Foundation
          </text>
          <text
            x="280"
            y="26"
            textAnchor="middle"
            className="fill-[#65627D] text-[11px] font-semibold uppercase tracking-widest dark:fill-[#A39EC2]"
          >
            Core ML Pipeline
          </text>
          <text
            x="470"
            y="26"
            textAnchor="middle"
            className="fill-[#65627D] text-[11px] font-semibold uppercase tracking-widest dark:fill-[#A39EC2]"
          >
            Applied Growth
          </text>

          {/* Synaptic Connections */}
          {LEARNING_EDGES.map(([fromId, toId], idx) => {
            const from = LEARNING_NODES.find((n) => n.id === fromId)!;
            const to = LEARNING_NODES.find((n) => n.id === toId)!;
            const active = isConnected(fromId, toId);
            const midX = (from.x + to.x) / 2;
            const pathD = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;

            return (
              <g key={`${fromId}-${toId}`}>
                <path
                  d={pathD}
                  fill="none"
                  stroke={active ? "url(#edgeActiveGrad)" : "#C4B5FD"}
                  strokeOpacity={active ? 0.92 : 0.28}
                  strokeWidth={active ? 3 : 1.5}
                />
                {active && (
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="#FFF9F5"
                    strokeWidth={2.5}
                    strokeDasharray="6 18"
                    initial={{ strokeDashoffset: 48 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6 + idx * 0.1,
                      ease: "linear",
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Learning Nodes */}
          {LEARNING_NODES.map((node) => {
            const active = node.id === selectedId;
            const goal = AI_LEARNING_GOALS.find((g) => g.id === node.id);
            const isFoundation = goal?.stage === "foundational";

            return (
              <g
                key={node.id}
                onClick={() => setSelectedId(node.id)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedId(node.id);
                  }
                }}
                aria-label={goal?.title ?? node.short}
              >
                {active && (
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={36}
                    fill={node.color}
                    fillOpacity={0.18}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2.2 }}
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={active ? 27 : 23}
                  fill={isFoundation ? node.color : "rgba(16, 16, 28, 0.9)"}
                  stroke={node.color}
                  strokeWidth={active ? 3.5 : 2}
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={6}
                  fill={isFoundation ? "#FFF9F5" : node.color}
                />
                <text
                  x={node.x}
                  y={node.y + 42}
                  textAnchor="middle"
                  className="fill-[#10101C] text-[12px] font-semibold dark:fill-[#FFF9F5]"
                >
                  {node.short}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Detail Card */}
      <motion.div
        key={selectedGoal.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-4 flex flex-col gap-2 rounded-2xl border border-[#7C3AED]/15 bg-white/75 p-4 dark:border-[#C4B5FD]/15 dark:bg-[#16152A]/80"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${selectedGoal.accent}20`,
              color: selectedGoal.accent,
            }}
          >
            <Compass className="h-3.5 w-3.5" />
            {selectedGoal.stageLabel}
          </span>
          <span className="text-xs font-medium text-[#65627D] dark:text-[#A39EC2]">
            {selectedGoal.stage === "foundational"
              ? "Active Foundation"
              : "Upcoming Milestone"}
          </span>
        </div>
        <h4 className="font-heading text-base font-semibold text-[#10101C] dark:text-[#FFF9F5]">
          {selectedGoal.title}
        </h4>
        <p className="text-sm leading-relaxed text-[#3F3D56] dark:text-[#D7D2EE]">
          {selectedGoal.description}
        </p>
      </motion.div>
    </div>
  );
}

const CLUB_NODES = [
  { id: "c1", x: 70, y: 85, label: "Data", color: "#38BDF8" },
  { id: "c2", x: 70, y: 195, label: "Logic", color: "#C4B5FD" },
  { id: "c3", x: 200, y: 55, label: "AI", color: "#7C3AED" },
  { id: "c4", x: 200, y: 140, label: "ML", color: "#F472B6" },
  { id: "c5", x: 200, y: 225, label: "Python", color: "#6EE7B7" },
  { id: "c6", x: 330, y: 140, label: "Club Role", color: "#FF8066" },
];

const CLUB_EDGES: Array<[number, number]> = [
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 5],
  [3, 5],
  [4, 5],
];

export function ClubNeuralPreview() {
  const [activeNode, setActiveNode] = useState<number>(3);

  return (
    <div className="relative flex h-full min-h-[260px] flex-col justify-between rounded-3xl border border-[#7C3AED]/20 bg-white/70 p-4 dark:border-[#C4B5FD]/20 dark:bg-[#10101C]/75">
      <div className="flex items-center justify-between text-xs font-semibold text-[#7C3AED] dark:text-[#C4B5FD]">
        <span>Interactive Club Neural Network</span>
        <span className="rounded-full bg-[#F472B6]/15 px-2.5 py-0.5 text-[#F472B6]">
          {CLUB_NODES[activeNode].label} Node
        </span>
      </div>

      <svg
        viewBox="0 0 400 270"
        className="my-2 h-auto w-full"
        role="img"
        aria-label="AI/ML Student Club interactive neural network"
      >
        {CLUB_EDGES.map(([a, b], i) => {
          const nA = CLUB_NODES[a];
          const nB = CLUB_NODES[b];
          const highlight = a === activeNode || b === activeNode;
          return (
            <g key={i}>
              <line
                x1={nA.x}
                y1={nA.y}
                x2={nB.x}
                y2={nB.y}
                stroke={highlight ? nB.color : "#C4B5FD"}
                strokeOpacity={highlight ? 0.9 : 0.3}
                strokeWidth={highlight ? 2.8 : 1.4}
              />
              {highlight && (
                <motion.circle
                  r={3.5}
                  fill="#FFF9F5"
                  animate={{
                    cx: [nA.x, nB.x],
                    cy: [nA.y, nB.y],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                />
              )}
            </g>
          );
        })}

        {CLUB_NODES.map((node, idx) => {
          const isSelected = idx === activeNode;
          return (
            <g
              key={node.id}
              onClick={() => setActiveNode(idx)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveNode(idx);
                }
              }}
              aria-label={`Select ${node.label} node`}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={isSelected ? 24 : 19}
                fill={node.color}
                fillOpacity={isSelected ? 1 : 0.85}
                stroke="#FFF9F5"
                strokeWidth={isSelected ? 3 : 1.5}
              />
              <text
                x={node.x}
                y={node.y + 36}
                textAnchor="middle"
                className="fill-[#10101C] text-[11px] font-semibold dark:fill-[#FFF9F5]"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="text-center text-xs text-[#65627D] dark:text-[#A39EC2]">
        Click any colourful node to trace collaborative AI/ML signal pathways
      </p>
    </div>
  );
}
