"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  User,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { AmbientMiniScene } from "@/components/three/AmbientMiniScene";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    let didCopy = false;
    try {
      if (navigator.clipboard?.writeText) {
        await Promise.race([
          navigator.clipboard.writeText(PROFILE.email).then(() => {
            didCopy = true;
          }),
          new Promise<void>((resolve) => setTimeout(resolve, 400)),
        ]);
      }
    } catch {
      // Fallback handled below
    }

    if (!didCopy) {
      try {
        const input = document.createElement("input");
        input.value = PROFILE.email;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        didCopy = document.execCommand("copy");
        document.body.removeChild(input);
      } catch {
        // Ignore if browser blocks programmatic clipboard access
      }
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#10101C] pt-24 pb-12 text-[#FFF9F5] sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#38BDF8]/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6EE7B7]/35 bg-[#6EE7B7]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6EE7B7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
              <span>Contact</span>
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="font-display mt-4 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Build Something{" "}
              <span className="text-gradient-aurora">Meaningful</span> Together.
            </motion.h2>

            {/* Info Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-[#17162A]/85 p-4 sm:col-span-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
                  <User className="h-3.5 w-3.5" />
                  <span>Name</span>
                </div>
                <p className="mt-1.5 font-heading text-sm font-semibold text-[#FFF9F5]">
                  {PROFILE.name}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#17162A]/85 p-4 sm:col-span-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F472B6]">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email</span>
                </div>
                <p className="mt-1.5 break-all font-heading text-sm font-semibold text-[#FFF9F5]">
                  {PROFILE.email}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#17162A]/85 p-4 sm:col-span-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6EE7B7]">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Location</span>
                </div>
                <p className="mt-1.5 font-heading text-sm font-semibold text-[#FFF9F5]">
                  {PROFILE.location}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#F472B6] to-[#FF8066] px-6 py-3.5 text-sm font-semibold text-[#FFF9F5] shadow-lg shadow-[#7C3AED]/30 transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/12 px-5 py-3.5 text-sm font-semibold text-[#38BDF8] transition-colors hover:bg-[#38BDF8]/22"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={PROFILE.resumePath}
                download={PROFILE.resumeFileName}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3.5 text-sm font-semibold text-[#FFF9F5] transition-colors hover:border-[#C4B5FD] hover:bg-white/15"
              >
                <Download className="h-4 w-4 text-[#C4B5FD]" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#6EE7B7]/35 bg-[#6EE7B7]/10 px-5 py-3.5 text-sm font-semibold text-[#6EE7B7] transition-colors hover:bg-[#6EE7B7]/20"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-white/10 bg-[#17162A]/60 p-4 lg:col-span-5">
            <AmbientMiniScene variant="contact" className="h-64 w-full sm:h-72" />
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-[#A39EC2] sm:flex-row sm:text-left">
          <p>{PROFILE.footerText}</p>
          <p className="text-xs text-[#A39EC2]/80">
            {PROFILE.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
