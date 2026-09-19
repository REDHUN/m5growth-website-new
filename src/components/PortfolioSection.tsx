"use client";

import { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "@/data/agencyData";
import CaseStudyModal from "./CaseStudyModal";
import { ArrowUpRight, TrendingUp, FolderGit2, CheckCircle2, Sparkles, Filter } from "lucide-react";

interface PortfolioSectionProps {
  onRequestQuoteWithContext?: (context: string) => void;
}

const CATEGORIES = [
  "All",
  "Branding",
  "Meta Ads & Growth",
  "Web & App",
  "Video & Content",
  "SEO & Marketing",
] as const;

export default function PortfolioSection({ onRequestQuoteWithContext }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredCaseStudies = activeCategory === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((study) => study.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-8 sm:space-y-12 scroll-mt-20 w-full max-w-full overflow-hidden" id="works">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 pb-6 border-b border-neutral-200 w-full max-w-full min-w-0">
        <div className="space-y-2 sm:space-y-3 min-w-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES & TRACK RECORD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-black break-words">
            Crafted for Impact. <br />
            <span className="text-neutral-500">Proven by Numbers.</span>
          </h2>
        </div>

        <p className="text-neutral-500 text-xs sm:text-sm max-w-sm md:text-right font-mono">
          Explore our signature work across branding, performance marketing, high-performance web experiences, and 3D CGI campaigns.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="w-full max-w-full overflow-x-auto pb-2 scrollbar-none flex items-center gap-2 touch-pan-x min-w-0">
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono pr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map((cat) => {
          const count = cat === "All"
            ? CASE_STUDIES.length
            : CASE_STUDIES.filter((s) => s.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                isActive
                  ? "bg-black text-white font-bold shadow-md shadow-black/10 scale-105"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-[#88cc00] text-black font-bold"
                    : "bg-neutral-200 text-neutral-700"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full min-w-0">
        {filteredCaseStudies.map((study) => (
          <div
            key={study.id}
            onClick={() => setSelectedCaseStudy(study)}
            className="group cursor-pointer rounded-3xl bg-white border border-neutral-200 hover:border-black transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 w-full min-w-0"
          >
            {/* Image Preview Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
              <Image
                src={study.coverImage}
                alt={study.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Floating Top Badges */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center pointer-events-none gap-2">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-black text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm truncate">
                  {study.category}
                </span>

                <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#88cc00] text-[10px] sm:text-xs font-mono font-bold shadow-lg shrink-0">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#88cc00]" />
                  <span>{study.impact}</span>
                </span>
              </div>

              {/* Hover Overlay Prompt */}
              <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden sm:block">
                <span className="w-10 h-10 rounded-full bg-[#88cc00] text-black flex items-center justify-center shadow-xl">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5 min-w-0">
              <div className="space-y-2 sm:space-y-2.5 min-w-0">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-600">
                  <span>{study.client}</span>
                  <span>{study.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-[#659900] transition-colors leading-snug break-words">
                  {study.title}
                </h3>

                <p className="text-neutral-600 text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed break-words">
                  {study.summary}
                </p>
              </div>

              {/* Deliverable Tags & Action Footer */}
              <div className="pt-3 sm:pt-4 border-t border-neutral-100 space-y-3 sm:space-y-4 min-w-0">
                <div className="flex flex-wrap gap-1.5 min-w-0">
                  {study.deliverables.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 text-[10px] sm:text-[11px] font-mono leading-tight inline-block"
                    >
                      {item}
                    </span>
                  ))}
                  {study.deliverables.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 text-[10px] sm:text-[11px] font-mono leading-tight inline-block">
                      +{study.deliverables.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-bold font-mono text-black group-hover:text-[#659900] transition-colors pt-1">
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#659900]" />
                    View Full Case Study
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Full Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onRequestSimilarProject={(title) => {
          onRequestQuoteWithContext?.(`Interested in similar scope to: ${title}`);
        }}
      />
    </section>
  );
}
