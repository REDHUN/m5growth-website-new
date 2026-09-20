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
    <section className="py-6 sm:py-10 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-5 sm:space-y-7 scroll-mt-20 w-full max-w-full overflow-hidden" id="services">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-4 border-b border-neutral-200 transform-gpu"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-2 w-full items-start">
        {SERVICES_DATA.map((service, idx) => {
          const isOpen = openServiceId === service.id;
          const formattedIdx = String(idx + 1).padStart(2, "0");

          return (
            <motion.div
              key={service.id}
              ref={(el) => { cardRefs.current[service.id] = el; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (idx % 2) * 0.08, ease: "easeOut" }}
              className="border-b border-neutral-200/80 hover:border-neutral-400 transition-colors group bg-transparent transform-gpu"
            >
              {/* Row Header (Clickable) */}
              <button
                type="button"
                onClick={() => toggleService(service.id)}
                className="w-full py-5 sm:py-6 px-1 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                aria-expanded={isOpen}
              >
                {/* Left: Number, Icon, Title + Tag */}
                <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 flex-1">
                  <span className={`text-xs sm:text-sm font-black font-mono tracking-tight tabular-nums shrink-0 transition-colors ${
                    isOpen ? "text-[#659900]" : "text-neutral-400 group-hover:text-black"
                  }`}>
                    {formattedIdx}
                  </span>

                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-black text-[#88cc00]" 
                      : "bg-neutral-100 text-neutral-700 group-hover:bg-[#88cc00] group-hover:text-black"
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className={`text-sm sm:text-base lg:text-[1.1rem] font-black uppercase tracking-tight leading-snug transition-colors ${
                      isOpen ? "text-[#659900]" : "text-black group-hover:text-[#659900]"
                    }`}>
                      {service.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-neutral-600 transition-colors block mt-0.5">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Right: Plus/Minus Toggle */}
                <div className="flex items-center shrink-0 ml-2">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen 
                      ? "bg-black text-white border-black" 
                      : "bg-transparent text-neutral-400 border-neutral-200 group-hover:border-black group-hover:text-black group-hover:scale-105"
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </div>
              </button>

              {/* Collapsible Accordion Drawer Details */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pt-1 space-y-3 px-1">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#659900] block">
                        What We Deliver:
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-xl">
                        {service.shortDesc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Growth Strategy Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 text-black flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm relative overflow-hidden transform-gpu"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#88cc00]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-1.5 text-center sm:text-left relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            TAILORED DIGITAL SOLUTIONS
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-black">
            Looking for a Customized Package?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl font-normal leading-relaxed">
            We combine social media marketing, targeted ads, search engine optimization, branding, and custom web development to fit your exact business goals.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/919778252136?text=Hello%20M5%20Growth%20Team!%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white hover:bg-[#88cc00] hover:text-black px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 cursor-pointer relative z-10"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>

    </section>
  );
}
