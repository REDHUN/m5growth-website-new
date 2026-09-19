"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, ServiceItem } from "@/data/agencyData";
import { 
  ArrowRight, 
  Zap, 
  Layers, 
  Megaphone, 
  Search, 
  Infinity as InfinityIcon, 
  FileEdit, 
  Palette, 
  Monitor, 
  Smartphone, 
  Video, 
  UserCheck, 
  BarChart3,
  Plus,
  Minus
} from "lucide-react";

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  // Single active service open at a time
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleService = (id: string) => {
    const isOpening = openServiceId !== id;
    setOpenServiceId((prev) => (prev === id ? null : id));

    if (isOpening) {
      // Smoothly align the opened service card into the ideal viewing position below header
      setTimeout(() => {
        const el = cardRefs.current[id];
        if (el) {
          const headerOffset = 90; // 90px below fixed navbar
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 180);
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone": return <Megaphone className="w-5 h-5 text-[#659900]" />;
      case "Search": return <Search className="w-5 h-5 text-[#659900]" />;
      case "Infinity": return <InfinityIcon className="w-5 h-5 text-[#659900]" />;
      case "FileEdit": return <FileEdit className="w-5 h-5 text-[#659900]" />;
      case "Palette": return <Palette className="w-5 h-5 text-[#659900]" />;
      case "Monitor": return <Monitor className="w-5 h-5 text-[#659900]" />;
      case "Smartphone": return <Smartphone className="w-5 h-5 text-[#659900]" />;
      case "Video": return <Video className="w-5 h-5 text-[#659900]" />;
      case "UserCheck": return <UserCheck className="w-5 h-5 text-[#659900]" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-[#659900]" />;
      default: return <Zap className="w-5 h-5 text-[#659900]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-10 scroll-mt-20 w-full max-w-full overflow-hidden" id="services">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-neutral-200"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK GROWTH CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-black">
            10 Growth Services. <br />
            <span className="text-neutral-400">
              One Unified Agency.
            </span>
          </h2>
        </div>

        <p className="text-neutral-500 text-xs sm:text-sm max-w-sm md:text-right font-mono">
          Click any discipline to explore deliverables, strategy scope, and proven impact metrics.
        </p>
      </motion.div>

      {/* Clean Rounded Card Accordion List (2 columns on tablet & desktop when space is available) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full items-start">
        {SERVICES_DATA.map((service, idx) => {
          const isOpen = openServiceId === service.id;
          const formattedIdx = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[service.id] = el; }}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-white shadow-xs ${
                isOpen 
                  ? "border-black shadow-md ring-1 ring-black/5" 
                  : "border-neutral-200 hover:border-neutral-400 hover:shadow-sm"
              }`}
            >
              {/* Row Header (Clickable) */}
              <button
                type="button"
                onClick={() => toggleService(service.id)}
                className={`w-full py-5 px-5 sm:px-6 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors ${
                  isOpen ? "bg-neutral-50/70" : "hover:bg-neutral-50/50"
                }`}
                aria-expanded={isOpen}
              >
                {/* Left: Number, Icon, Title, Tag */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 font-bold w-5 shrink-0">
                    {formattedIdx}
                  </span>

                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                    isOpen 
                      ? "bg-black text-[#88cc00] border-black" 
                      : "bg-neutral-100 text-neutral-700 border-neutral-200/80 group-hover:bg-[#88cc00] group-hover:text-black"
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>

                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight transition-colors ${
                        isOpen ? "text-[#659900]" : "text-black"
                      }`}>
                        {service.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono uppercase text-neutral-600 font-medium shrink-0">
                        {service.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Plus/Minus Toggle */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isOpen 
                      ? "bg-black text-white border-black" 
                      : "bg-white text-neutral-500 border-neutral-300 hover:border-black hover:text-black"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Content Drawer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden bg-neutral-50/40"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-neutral-200/80">
                      {/* 2-Line Description */}
                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#659900] font-mono">
                          {service.tagline}
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom Growth Strategy Strip */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#88cc00]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-1 text-center sm:text-left relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">
            TAILORED GROWTH PACKAGE
          </span>
          <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Need a Multi-Service Growth Retainer?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-light">
            Combine performance advertising, Next.js web engineering, SEO, and commercial video under a single dedicated growth team.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectServiceForQuote?.("All-in-One Growth Stack")}
          className="bg-[#88cc00] text-black px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs hover:bg-white transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer relative z-10"
        >
          <span>Request Custom Growth Deck</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

    </section>
  );
}
