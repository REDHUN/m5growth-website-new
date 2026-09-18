"use client";

import { Sparkles } from "lucide-react";

export default function TextMarquee() {
  const line1Phrases = [
    "MAKE YOUR BRAND STAND OUT",
    "SCALE BEYOND LIMITS",
    "DIGITAL GROWTH ARCHITECTURE",
    "UNSTOPPABLE TRAJECTORY",
    "CRAFTING MODERN LEGACIES",
    "HIGH-VELOCITY PERFORMANCE",
  ];

  const line2Phrases = [
    "NEXT.JS WEB ENGINEERING",
    "META ADS & ROAS SCALING",
    "CINEMATIC 4K PRODUCTION",
    "3D CGI & MOTION DESIGN",
    "HIGH-INTENT SEO DOMINATION",
    "SERVER-SIDE ATTRIBUTION",
  ];

  return (
    <div className="py-8 sm:py-14 bg-white text-black overflow-hidden select-none border-y border-neutral-200/80 space-y-3 sm:space-y-4">

      {/* Ribbon 1: Massive Primary Headline Scrolling Left */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center shrink-0">
          {[...line1Phrases, ...line1Phrases].map((text, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter text-black hover:text-[#659900] transition-colors px-4 sm:px-8">
                {text}
              </span>
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#88cc00] text-black mx-2 sm:mx-6 shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-black" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ribbon 2: Outlined / Secondary High-Contrast Text Scrolling Right */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee-reverse flex items-center shrink-0">
          {[...line2Phrases, ...line2Phrases].map((text, idx) => (
            <div key={idx} className="flex items-center">
              <span
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight px-4 sm:px-8 transition-colors text-transparent hover:text-black"
                style={{
                  WebkitTextStroke: "2px #0a0a0a",
                }}
              >
                {text}
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black mx-2 sm:mx-6 shrink-0" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
