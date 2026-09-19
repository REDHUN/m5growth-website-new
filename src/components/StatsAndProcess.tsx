"use client";

import { motion } from "framer-motion";
import { AGENCY_STATS, AGENCY_PROCESS } from "@/data/agencyData";
import { Zap, Target, Cpu, Rocket, TrendingUp } from "lucide-react";

export default function StatsAndProcess() {
  const getPhaseIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-5 h-5 text-[#659900]" />;
      case 1: return <Cpu className="w-5 h-5 text-[#659900]" />;
      case 2: return <Rocket className="w-5 h-5 text-[#659900]" />;
      case 3: return <TrendingUp className="w-5 h-5 text-[#659900]" />;
      default: return <Zap className="w-5 h-5 text-[#659900]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-12 sm:space-y-16 scroll-mt-20 overflow-hidden w-full max-w-full" id="process">
      
      {/* 4-Phase Growth Protocol Box */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-12 xl:p-16 bg-neutral-50 border border-neutral-200 shadow-sm overflow-hidden space-y-8 sm:space-y-12 w-full max-w-full min-w-0"
      >
        
        {/* Glow ambient */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-full max-w-[500px] h-[350px] sm:h-[500px] bg-[#88cc00]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" 
        />

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-neutral-200 relative z-10 min-w-0 w-full">
          <div className="space-y-2 sm:space-y-3 min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>THE M5 GROWTH PROTOCOL</span>
            </div>
            <h2 className="text-2xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-black break-words">
              Systematic Scale. <br />
              <span className="text-neutral-500">
                Predictable Growth.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-normal leading-relaxed">
            Our agile growth methodology eliminates agency bloat. We execute with algorithmic discipline to move brands from initial validation to market dominance.
          </p>
        </div>

        {/* 4-Phase Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 w-full max-w-full">
          {AGENCY_PROCESS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200 hover:border-black transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 sm:space-y-6 group shadow-xs hover:shadow-lg w-full min-w-0"
            >
              <div className="flex justify-between items-center">
                <span className="text-3xl font-black text-[#659900] font-mono group-hover:scale-110 transition-transform origin-left">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:bg-[#88cc00] group-hover:text-black group-hover:rotate-6 transition-all duration-300">
                  {getPhaseIcon(idx)}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold uppercase tracking-tight text-black group-hover:text-[#659900] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center gap-1 text-[11px] font-mono text-neutral-400 group-hover:text-black transition-colors">
                <span>Phase {idx + 1} Deliverable Ready</span>
              </div>
            </div>
          ))}
        </div>

      </motion.div>

      {/* Global Impact Numbers */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {AGENCY_STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 hover:border-black transition-all space-y-2 group shadow-sm hover:shadow-lg"
          >
            <div className="text-4xl sm:text-5xl font-black text-black group-hover:text-[#659900] font-mono tracking-tight transition-colors">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900">
              {stat.label}
            </div>
            <p className="text-xs text-neutral-500 font-normal">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
