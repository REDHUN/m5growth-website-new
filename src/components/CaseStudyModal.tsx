"use client";

import Image from "next/image";
import { CaseStudy } from "@/data/agencyData";
import { X, ExternalLink, ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onRequestSimilarProject?: (projectTitle: string) => void;
}

export default function CaseStudyModal({ project, onClose, onRequestSimilarProject }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0f1115] text-white w-full max-w-4xl rounded-3xl xl:rounded-[2.5rem] p-6 sm:p-10 border border-white/15 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/20 transition-colors z-10"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="px-3.5 py-1 rounded-full bg-[#c8ff00] text-black text-xs font-black uppercase tracking-wider">
            {project.category}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            {project.client} • {project.year}
          </span>
          <span className="flex items-center gap-1 text-xs text-[#c8ff00] font-mono font-bold bg-[#c8ff00]/10 border border-[#c8ff00]/20 px-3 py-1 rounded-full">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.impact}</span>
          </span>
        </div>

        {/* Title & Summary */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-white">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            {project.summary}
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8ff00]">
              The Challenge
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8ff00]">
              Our Solution & Architecture
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Measurable Results */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8ff00]">
            Measurable Impact & Growth Results
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.results.map((result, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery Images */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8ff00]">
              Visual Showcase & Artifacts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          {project.clientWebsite ? (
            <a
              href={project.clientWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : <div />}

          <button
            onClick={() => {
              onRequestSimilarProject?.(project.title);
              onClose();
            }}
            className="w-full sm:w-auto bg-[#c8ff00] text-black px-7 py-3 rounded-full font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#dbff33] transition-colors shadow-xl"
          >
            <span>Request Similar Project Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
