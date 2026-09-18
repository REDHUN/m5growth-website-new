"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Sparkles, Heart, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [timeState, setTimeState] = useState({
    calicut: "",
    dubai: "",
    newYork: "",
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimeState({
        calicut: now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour12: false, hour: "2-digit", minute: "2-digit" }),
        dubai: now.toLocaleTimeString("en-US", { timeZone: "Asia/Dubai", hour12: false, hour: "2-digit", minute: "2-digit" }),
        newYork: now.toLocaleTimeString("en-US", { timeZone: "America/New_York", hour12: false, hour: "2-digit", minute: "2-digit" }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 xl:px-14 border-t border-neutral-800">
      <div className="max-w-[1550px] mx-auto space-y-16">
        
        {/* Top Live Studio World Clocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-neutral-800">
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-pulse" />
              <span className="text-xs uppercase font-mono text-neutral-400">Calicut HQ Studio (IST)</span>
            </div>
            <span className="text-sm font-mono font-bold text-white">{timeState.calicut || "11:45"}</span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-600" />
              <span className="text-xs uppercase font-mono text-neutral-400">Dubai Hub (GST)</span>
            </div>
            <span className="text-sm font-mono font-bold text-white">{timeState.dubai || "10:15"}</span>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-600" />
              <span className="text-xs uppercase font-mono text-neutral-400">New York (EST)</span>
            </div>
            <span className="text-sm font-mono font-bold text-white">{timeState.newYork || "02:15"}</span>
          </div>
        </div>

        {/* Middle Navigation & Agency Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#88cc00] text-black font-black flex items-center justify-center text-xs">
                M5
              </div>
              <span className="text-xl font-black tracking-tight text-white">M5 GROWTH</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-light">
              Full-Stack Digital Growth Agency. We help ambitious brands achieve extraordinary scale through creative direction, performance marketing, and Next.js engineering.
            </p>
            <div className="text-[11px] font-mono text-[#88cc00] uppercase tracking-wider font-bold">
              STRATEGY TODAY • BIGGER TOMORROW
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">Agency Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">10 Growth Services</Link></li>
              <li><Link href="#works" className="hover:text-white transition-colors">Selected Case Studies</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">M5 Protocol</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Client Reviews</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">Core Offerings</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><Link href="#services" className="hover:text-white transition-colors">Performance Meta Ads</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Search Engine SEO</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Next.js Web & Mobile Apps</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Brand & Visual Identity</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Commercial 4K Video</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">Global Connect</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1"><span>Instagram</span> <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1"><span>LinkedIn</span> <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1"><span>Facebook</span> <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1"><span>YouTube</span> <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

        </div>

        {/* Massive Typography Wordmark Banner */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col items-center justify-center relative select-none">
          <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-white/[0.06] hover:text-[#88cc00]/20 transition-colors duration-500">
            M5 GROWTH
          </h1>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 pt-4 border-t border-neutral-800">
          <p>© {new Date().getFullYear()} M5 Growth Digital Marketing Agency. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-neutral-400">
              Growth Beyond <span className="text-[#88cc00]">Limits</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 px-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
