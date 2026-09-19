"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/agencyData";
import { ChevronLeft, ChevronRight, Quote, Sparkles, ExternalLink, Star, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto scroll-mt-20 overflow-hidden w-full max-w-full" id="testimonials">
      
      <div className="rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-12 xl:p-16 bg-neutral-50 border border-neutral-200 shadow-sm relative overflow-hidden space-y-8 sm:space-y-10 w-full max-w-full min-w-0">
        
        {/* Background glow */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#88cc00]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-neutral-200 relative z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED FOUNDER ENDORSEMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
              Trusted by Ambitious Brands
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quote & Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 min-h-[260px]">
          
          {/* Main Large Quote */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-1 text-[#88cc00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-xl sm:text-3xl xl:text-4xl font-extrabold tracking-tight leading-snug text-black">
              &ldquo;{current.quote}&rdquo;
            </p>
          </div>

          {/* Author Card & Metrics */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#88cc00] shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-black">{current.author}</h4>
                <p className="text-xs text-neutral-500">{current.role}</p>
                <a
                  href={current.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#659900] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>{current.company}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-500">Verified Impact:</span>
              <span className="px-3 py-1 rounded-full bg-[#88cc00]/15 border border-[#88cc00]/30 text-xs font-mono font-bold text-[#659900]">
                {current.metrics}
              </span>
            </div>
          </div>

        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center gap-2 pt-2 relative z-10">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-black" : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
