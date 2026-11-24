"use client";

import React from "react";
import { motion } from "framer-motion";

export function TextMaskReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  accentColor = "#7C3AED",
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accentColor?: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 max-w-3xl"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
        className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
          align === "center" ? "justify-center" : ""
        }`}
        style={{
          borderColor: `${accentColor}40`,
          backgroundColor: `${accentColor}12`,
          color: accentColor,
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        {eyebrow}
      </motion.div>

      <TextMaskReveal delay={0.05}>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[#10101C] sm:text-4xl lg:text-5xl dark:text-[#FFF9F5]">
          {title}
        </h2>
      </TextMaskReveal>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-4 text-base leading-relaxed text-[#3F3D56] sm:text-lg dark:text-[#D7D2EE]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
