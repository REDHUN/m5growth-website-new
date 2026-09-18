"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#080808] z-50 flex flex-col justify-between p-8 md:p-14 transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center text-white/50 text-xs uppercase tracking-widest font-mono">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#b3ed00] animate-ping" />
          M5 GROWTH STUDIO
        </span>
        <span>CREATIVE & DIGITAL PERFORMANCE</span>
      </div>

      {/* Center Brand Icon / Motion */}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#b3ed00]/20 to-transparent animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-3xl md:text-5xl font-black text-[#b3ed00] tracking-tighter">M5.</span>
          </div>
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider uppercase">
          Crafting Iconic Brands
        </h2>
      </div>

      {/* Bottom Progress Bar & Percentage */}
      <div className="w-full max-w-xl mx-auto space-y-3">
        <div className="flex justify-between text-xs text-white/60 font-mono">
          <span>INITIALIZING DIGITAL EXPERIENCE</span>
          <span className="text-[#b3ed00] font-bold">{Math.min(progress, 100)}%</span>
        </div>
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#b3ed00] transition-all duration-200 ease-out shadow-[0_0_12px_#b3ed00]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
