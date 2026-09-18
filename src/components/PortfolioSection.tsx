"use client";

import { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "@/data/agencyData";
import CaseStudyModal from "./CaseStudyModal";
import { ArrowUpRight, TrendingUp, FolderGit2 } from "lucide-react";

interface PortfolioSectionProps {
  onRequestQuoteWithContext?: (context: string) => void;
}

export default function PortfolioSection({ onRequestQuoteWithContext }: PortfolioSectionProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-10 scroll-mt-20" id="works">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-6 border-b border-neutral-200">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>SELECTED CASE STUDIES & ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-black">
            Proven Results. <br />
            <span className="text-neutral-500">
              Measurable Impact.
            </span>
          </h2>
        </div>

        <p className="text-neutral-500 text-xs sm:text-sm max-w-sm sm:text-right font-mono">
          Featured architectural, e-commerce, and commercial performance milestones.
        </p>
      </div>

      {/* Projects Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {CASE_STUDIES.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedCaseStudy(project)}
            className="group cursor-pointer relative rounded-3xl p-4 bg-white hover:bg-neutral-50/70 border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
          >
            {/* Image Container with Hover Zoom */}
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-black">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Category Badge */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/10">
                {project.category}
              </div>

              {/* Hover Action Circle */}
              <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-[#88cc00] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Project Metadata */}
            <div className="px-2 pb-2 space-y-2.5">
              <div className="flex justify-between items-center text-xs text-neutral-500 font-mono">
                <span>{project.client}</span>
                <span className="text-black font-bold">{project.year}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-black group-hover:text-[#659900] transition-colors line-clamp-2">
                {project.title}
              </h3>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#659900]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{project.impact}</span>
                </div>

                <span className="text-[11px] text-neutral-500 font-mono">Case Study &rarr;</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onRequestSimilarProject={(title) => {
          onRequestQuoteWithContext?.(`Interested in project like: ${title}`);
        }}
      />

    </section>
  );
}
