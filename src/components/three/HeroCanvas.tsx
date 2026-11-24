"use client";

import dynamic from "next/dynamic";
import { SceneBoundary } from "./SceneBoundary";

function HeroFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-[#C4B5FD]/30 bg-gradient-to-br from-[#7C3AED]/15 via-[#F472B6]/10 to-[#38BDF8]/15 p-8">
      <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#F472B6] to-[#38BDF8] shadow-2xl">
        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/80 font-display text-3xl font-bold text-[#10101C] backdrop-blur-xl dark:bg-[#10101C]/80 dark:text-[#FFF9F5]">
          AI / ML
        </div>
      </div>
    </div>
  );
}

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 animate-pulse rounded-full bg-gradient-to-tr from-[#7C3AED]/25 via-[#F472B6]/20 to-[#38BDF8]/25 blur-xl" />
    </div>
  ),
});

export function HeroCanvas() {
  return (
    <div className="relative h-[400px] w-full sm:h-[480px] lg:h-[560px]">
      <SceneBoundary fallback={<HeroFallback />}>
        <HeroScene />
      </SceneBoundary>
    </div>
  );
}
