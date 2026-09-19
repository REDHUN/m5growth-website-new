"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 xl:px-14 border-t border-neutral-800 overflow-hidden w-full max-w-full">
      <div className="max-w-[1550px] mx-auto space-y-12 sm:space-y-16 w-full min-w-0">

        {/* Agency Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8">
          
          {/* Col 1: Brand Info & Direct Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#88cc00] text-black font-black flex items-center justify-center text-xs shadow-sm">
                M5
              </div>
              <span className="text-xl font-black tracking-tight text-white">M5 GROWTH</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
              Full-Stack Digital Growth Agency. We partner with ambitious brands to accelerate revenue through performance advertising, SEO, high-speed web engineering, and commercial video production.
            </p>

            <div className="space-y-2 pt-2 border-t border-neutral-900 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-[#88cc00]" />
                <span>Muhamma, Alappuzha, Kerala</span>
              </div>
              <div>
                <a href="tel:+919778252136" className="text-neutral-300 hover:text-[#88cc00] transition-colors">
                  📞 +91 9778252136
                </a>
              </div>
              <div>
                <a href="mailto:growth@m5growth.in" className="text-neutral-300 hover:text-[#88cc00] transition-colors">
                  ✉️ growth@m5growth.in
                </a>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#88cc00] uppercase tracking-wider font-bold">
              STRATEGY TODAY • BIGGER TOMORROW
            </div>
          </div>

          {/* Col 2: The 10 Official Growth Services (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">
              10 Growth Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-neutral-400">
              <Link href="#services" className="hover:text-white transition-colors">Social Media Marketing</Link>
              <Link href="#services" className="hover:text-white transition-colors">Graphic Design & Branding</Link>
              <Link href="#services" className="hover:text-white transition-colors">Search Engine SEO</Link>
              <Link href="#services" className="hover:text-white transition-colors">Website Development</Link>
              <Link href="#services" className="hover:text-white transition-colors">Meta Ads (FB & IG)</Link>
              <Link href="#services" className="hover:text-white transition-colors">Mobile App Development</Link>
              <Link href="#services" className="hover:text-white transition-colors">Content Marketing & Copy</Link>
              <Link href="#services" className="hover:text-white transition-colors">Video Production & Editing</Link>
              <Link href="#services" className="hover:text-white transition-colors">Influencer Marketing</Link>
              <Link href="#services" className="hover:text-white transition-colors">Analytics & Reporting</Link>
            </div>
          </div>

          {/* Col 3: Navigation & Direct Social (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">
                Agency Navigation
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">All 10 Services</Link></li>
                <li><Link href="#gallery" className="hover:text-white transition-colors">Creative Gallery</Link></li>
                <li><Link href="#process" className="hover:text-white transition-colors">4-Phase Growth Protocol</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition-colors">Founder Reviews</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Start a Project</Link></li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-900">
              <span className="text-[11px] font-mono uppercase text-neutral-500 font-bold block">Social Channels</span>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                <a href="https://wa.me/919778252136" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-[#88cc00] hover:text-black transition-colors font-mono inline-flex items-center gap-1">
                  <span>WhatsApp</span> <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="https://www.instagram.com/m5_growth?stkn=MWN1ZXM2amN4MnhqZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-[#88cc00] hover:text-black transition-colors font-mono inline-flex items-center gap-1">
                  <span>Instagram</span> <ArrowUpRight className="w-3 h-3" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-[#88cc00] hover:text-black transition-colors font-mono inline-flex items-center gap-1">
                  <span>LinkedIn</span> <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Massive Typography Wordmark Banner */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col items-center justify-center relative select-none overflow-hidden max-w-full">
          <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-[11vw] font-black uppercase tracking-tighter leading-none text-white/[0.06] hover:text-[#88cc00]/20 transition-colors duration-500 text-center whitespace-nowrap">
            M5 GROWTH
          </h1>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 pt-4 border-t border-neutral-800">
          <p>© {new Date().getFullYear()} M5 Growth Digital Agency. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-neutral-400 font-mono text-[11px]">
              Muhamma, Alappuzha • <span className="text-[#88cc00]">Growth Beyond Limits</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 px-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
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
