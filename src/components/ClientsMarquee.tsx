"use client";

import { Cpu, Zap, Layers, Sparkles, Globe2, ShieldCheck, BarChart2, Rocket } from "lucide-react";

const DISCIPLINES = [
  { title: "Meta Performance Ads", metric: "8.4x Target ROAS", tag: "Paid Acquisition", icon: "zap" },
  { title: "Next.js Web Applications", metric: "0.4s Ultra-Fast", tag: "Engineering", icon: "code" },
  { title: "High-Intent Search SEO", metric: "+340% Traffic", tag: "Organic Domination", icon: "chart" },
  { title: "4K Commercial Cinema", metric: "12M+ Views", tag: "Production", icon: "video" },
  { title: "3D Product CGI & Motion", metric: "Photoreal Renders", tag: "3D Visuals", icon: "sparkles" },
  { title: "Viral Social Media Funnels", metric: "4.8M+ Reach", tag: "Organic Scale", icon: "rocket" },
  { title: "Server-Side Tracking & GA4", metric: "100% Attribution", tag: "Analytics", icon: "shield" },
  { title: "Luxury Brand Architecture", metric: "Visual Systems", tag: "Brand Identity", icon: "layers" },
];

const INDUSTRY_VERTICALS = [
  { name: "D2C Luxury & Fashion", highlight: "High AOV Conversion" },
  { name: "EV & Green Mobility", highlight: "Pre-order Funnels" },
  { name: "Architecture & Real Estate", highlight: "Spatial 3D Portfolios" },
  { name: "Fintech & High-Growth SaaS", highlight: "B2B Demand Gen" },
  { name: "D2C Cosmetics & Beauty", highlight: "Viral TikTok / Reels" },
  { name: "Hospitality & Boutique Resorts", highlight: "Direct Booking Engines" },
  { name: "Consumer Tech & Hardware", highlight: "3D CGI Product Launches" },
  { name: "Industrial & Manufacturing", highlight: "Global Export Portals" },
];

const TECH_ECOSYSTEM = [
  { name: "Meta Ads Manager", category: "Performance" },
  { name: "Next.js 16 & React", category: "Engineering" },
  { name: "Google Analytics 4", category: "Attribution" },
  { name: "Shopify Plus Headless", category: "E-Commerce" },
  { name: "DaVinci Resolve Studio", category: "Cinema Grade" },
  { name: "Blender 3D & CGI", category: "Motion Renders" },
  { name: "Google Search Console", category: "SEO Science" },
  { name: "TypeScript & Tailwind", category: "Clean Code" },
  { name: "Looker Studio Dashboards", category: "Real-time BI" },
  { name: "Supabase & PostgreSQL", category: "Backend Cloud" },
];

export default function ClientsMarquee() {
  return (
    <section className="py-16 sm:py-24 bg-white text-black overflow-hidden space-y-8 border-y border-neutral-200 relative">
      
      {/* Edge Gradient Fades for Premium Look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Header */}
      <div className="text-center space-y-3 px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#88cc00]/15 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
          <Cpu className="w-3.5 h-3.5" />
          <span>GROWTH DISCIPLINES & CAPABILITIES</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight">
          Engineered For Scaled Impact
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 font-normal max-w-2xl mx-auto">
          High-velocity performance channels, modern web architectures, and cinematic creative production working in unified synergy.
        </p>
      </div>

      {/* Stream 1 - Growth Disciplines & Performance (Left to Right) */}
      <div className="relative w-full overflow-hidden flex py-1">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 shrink-0">
          {[...DISCIPLINES, ...DISCIPLINES, ...DISCIPLINES].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-black hover:bg-white transition-all group cursor-default shadow-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#88cc00] shrink-0 group-hover:scale-125 transition-transform" />
              <div className="space-y-0.5 text-left">
                <div className="text-sm sm:text-base font-black tracking-tight text-neutral-900 group-hover:text-black uppercase whitespace-nowrap">
                  {item.title}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="text-[#659900] font-bold">{item.metric}</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-500 font-medium">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stream 2 - Industry Verticals (Right to Left) */}
      <div className="relative w-full overflow-hidden flex py-1">
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 shrink-0">
          {[...INDUSTRY_VERTICALS, ...INDUSTRY_VERTICALS, ...INDUSTRY_VERTICALS].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black text-white hover:bg-neutral-900 transition-all group cursor-default shadow-sm"
            >
              <Globe2 className="w-4 h-4 text-[#88cc00]" />
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] font-mono uppercase bg-[#88cc00] text-black font-extrabold px-2 py-0.5 rounded-md">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stream 3 - Modern Tech & Toolchain (Left to Right) */}
      <div className="relative w-full overflow-hidden flex py-1">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 shrink-0">
          {[...TECH_ECOSYSTEM, ...TECH_ECOSYSTEM, ...TECH_ECOSYSTEM].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 hover:border-black transition-colors group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-[#88cc00] transition-colors" />
              <span className="text-xs sm:text-sm font-bold tracking-tight text-neutral-800 group-hover:text-black uppercase font-mono whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] uppercase font-mono text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200 font-semibold">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
