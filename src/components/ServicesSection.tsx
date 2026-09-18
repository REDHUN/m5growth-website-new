"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, ServiceItem } from "@/data/agencyData";
import { 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Zap, 
  ArrowUpRight, 
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
  BarChart3 
} from "lucide-react";

interface ServicesSectionProps {
  onSelectServiceForQuote?: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-10 scroll-mt-20" id="services">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-6 border-b border-neutral-200"
      >
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK GROWTH CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-black">
            10 Growth Services. <br />
            <span className="text-neutral-500">
              One Unified Agency.
            </span>
          </h2>
        </div>

        <p className="text-neutral-500 text-xs sm:text-sm max-w-sm sm:text-right font-mono">
          Comprehensive multidisciplinary capabilities engineered for measurable scale.
        </p>
      </motion.div>

      {/* Services Grid (Bento Matrix) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES_DATA.map((service, idx) => {
          const formattedIdx = String(idx + 1).padStart(2, "0");
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer relative rounded-3xl p-6 sm:p-7 bg-white hover:bg-neutral-50/70 border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl"
            >
              {/* Top Row: Index & Category Pill */}
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center group-hover:bg-[#88cc00] group-hover:text-black transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400 font-bold">
                    {formattedIdx}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-mono uppercase text-neutral-700">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Middle Content */}
              <div className="space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#659900] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              {/* Deliverable Tags Strip */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {service.deliverables.slice(0, 2).map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] text-neutral-600 font-mono"
                  >
                    • {del}
                  </span>
                ))}
              </div>

              {/* Bottom Action & Metric */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-mono text-[#659900] font-bold text-[11px]">
                  {service.metric}
                </span>

                <div className="flex items-center gap-1.5 text-neutral-500 group-hover:text-black font-semibold transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#659900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Bottom Growth Strategy Strip */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl"
      >
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#88cc00] font-bold">
            TAILORED GROWTH PACKAGE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Need a Multi-Service Growth Retainer?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-light">
            Combine performance advertising, Next.js web engineering, SEO, and commercial video under a single dedicated growth team.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onSelectServiceForQuote?.("All-in-One Growth Stack")}
          className="bg-[#88cc00] text-black px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs hover:bg-white transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span>Request Custom Growth Deck</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white text-black w-full max-w-3xl rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
            >
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-black uppercase tracking-wider">
                  {selectedService.tag}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  {selectedService.metric}
                </span>
                <span className="text-xs text-[#659900] font-mono font-bold">
                  • {selectedService.tagline}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Featured Image Banner */}
              <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-neutral-200">
                <Image
                  src={selectedService.featuredMedia}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Deliverables List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#659900] font-bold">
                  Key Deliverables & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-800 bg-neutral-50 p-3 rounded-xl border border-neutral-200/80">
                      <CheckCircle2 className="w-4 h-4 text-[#659900] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-neutral-500">
                  Dedicated Lead Strategist • Real-Time Dashboards
                </span>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForQuote?.(title);
                  }}
                  className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-full font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#88cc00] hover:text-black transition-colors shadow-md cursor-pointer"
                >
                  <span>Request {selectedService.title} Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
