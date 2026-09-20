"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TextMarquee() {
  const line1Phrases = [
    "CREATIVE DIGITAL MARKETING",
    "BUILD YOUR DIGITAL PRESENCE",
    "GROW YOUR BRAND ONLINE",
    "MODERN WEBSITES & BRANDING",
    "CONTENT THAT ENGAGES",
    "M5 DIGITAL GROWTH",
  ];

  const line2Phrases = [
    "SOCIAL MEDIA MARKETING",
    "SEARCH ENGINE OPTIMIZATION",
    "META & GOOGLE ADS",
    "WEBSITE DEVELOPMENT",
    "GRAPHIC DESIGN & BRANDING",
    "VIDEO PRODUCTION & EDITING",
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="my-3 sm:my-4 py-3 sm:py-4 bg-white text-black overflow-hidden select-none border-y border-neutral-200/80 space-y-2 sm:space-y-2.5 transform-gpu"
    >

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

    </motion.div>
  );
}
