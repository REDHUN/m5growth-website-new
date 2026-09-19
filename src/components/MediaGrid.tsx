"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, Sparkles } from "lucide-react";

export default function MediaGrid() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isPlaying) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-8 w-full max-w-full overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-neutral-200"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            <Film className="w-4 h-4 animate-pulse" />
            <span>CREATIVE CRAFT & PRODUCTION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            Crafted for Distinction. <br className="hidden sm:inline" />
            <span className="text-neutral-500">Engineered to Scale.</span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-normal">
          A glimpse into our multidisciplinary output: from 4K commercial cinematography and 3D product CGI to luxury brand identities and lightning-fast digital flagships.
        </p>
      </motion.div>

      {/* Asymmetric Agency Bento Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 w-full max-w-full">
        
        {/* Bento 1: Commercial Video Showcase (8 Cols) */}
        <div 
          className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-[#88cc00]/80 shadow-xl group w-full min-w-0 transition-all duration-500 hover:-translate-y-1"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out bg-black"
            autoPlay
            playsInline
            loop
            muted={isMuted}
            preload="auto"
            poster="https://res.cloudinary.com/hh1m6ca1/video/upload/so_0,w_800,f_auto,q_auto/v1789697681/https_cdnsanityio_files_h_gwr_video_mvp.jpg"
          >
            <source
              src="https://res.cloudinary.com/hh1m6ca1/video/upload/w_960,f_auto,q_auto/v1789697681/https_cdnsanityio_files_h_gwr_video_mvp.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/hh1m6ca1/video/upload/v1789697681/https_cdnsanityio_files_h_gwr_video_mvp.mp4"
              type="video/mp4"
            />
          </video>

          {/* Top Video Quick Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black transition-all shadow-md cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Toggle Playback"
            >
              {isPlaying ? (
                <span className="block w-2.5 h-2.5 bg-current rounded-xs" />
              ) : (
                <span className="block w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-current ml-0.5" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono hover:bg-[#88cc00] hover:text-black transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Toggle Sound"
            >
              {isMuted ? "UNMUTE" : "MUTED"}
            </button>
          </div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-10 flex flex-col justify-between text-white pointer-events-none">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#88cc00] text-black text-[11px] font-black uppercase tracking-wider">
                Commercial Production
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-pulse" />
                <span>4K MASTER REEL</span>
              </div>
            </div>

            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight group-hover:text-[#88cc00] transition-colors">
                Cinematic Visual Storytelling
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2">
                Commercial-grade video campaigns, high-retention social reels, and 3D CGI product breakdowns designed to capture market share.
              </p>
            </div>
          </div>
        </div>

        {/* Bento 2: 3D Product CGI (4 Cols) */}
        <div 
          className="md:col-span-4 relative aspect-[4/5] sm:aspect-auto rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-black shadow-lg group flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=75&w=600&auto=format&fit=crop"
            alt="3D Watch CGI"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-108 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
              3D CGI Animation
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#88cc00] group-hover:text-black group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10 space-y-1">
            <span className="text-xs font-mono text-[#88cc00] uppercase font-bold">Aethel Horology</span>
            <h4 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#88cc00] transition-colors">
              Microscopic Photorealism
            </h4>
            <p className="text-xs text-neutral-300">Sold out 500 limited timepieces in 48 hours.</p>
          </div>
        </div>

        {/* Bento 3: Brand Identity & Packaging (4 Cols) */}
        <div 
          className="md:col-span-4 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-black shadow-lg group flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=75&w=600&auto=format&fit=crop"
            alt="Eco-Luxury Packaging"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-108 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
              Brand Architecture
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#88cc00] group-hover:text-black group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10 space-y-1">
            <span className="text-xs font-mono text-[#88cc00] uppercase font-bold">Kozhi Botanicals</span>
            <h4 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#88cc00] transition-colors">
              Tactile Luxury Packaging
            </h4>
            <p className="text-xs text-neutral-300">Sustainable unboxing experiences with viral shelf appeal.</p>
          </div>
        </div>

        {/* Bento 4: Next.js Flagship (4 Cols) */}
        <div 
          className="md:col-span-4 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-black shadow-lg group flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=75&w=600&auto=format&fit=crop"
            alt="Spatial Web Experience"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-108 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
              WebGL & Next.js
            </span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#88cc00] group-hover:text-black group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10 space-y-1">
            <span className="text-xs font-mono text-[#88cc00] uppercase font-bold">Design Dialects</span>
            <h4 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#88cc00] transition-colors">
              Spatial Architectural Web
            </h4>
            <p className="text-xs text-neutral-300">Awwwards-nominated fluid interactive experience.</p>
          </div>
        </div>

        {/* Bento 5: Agency Growth Acceleration Manifesto (4 Cols) */}
        <div 
          className="md:col-span-4 relative rounded-3xl overflow-hidden bg-neutral-900 border-2 border-neutral-200 hover:border-[#88cc00] p-6 sm:p-8 flex flex-col justify-between shadow-lg text-white transition-all duration-500 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-[#88cc00]/20 border border-[#88cc00]/40 text-[#88cc00] text-[10px] font-mono uppercase font-bold tracking-widest">
              Growth Protocol
            </span>
            <Sparkles className="w-5 h-5 text-[#88cc00] animate-pulse" />
          </div>

          <div className="space-y-3 my-auto py-6">
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              Zero Guesswork. <br />
              <span className="text-[#88cc00]">Compound Growth.</span>
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              We replace fragmented freelancers with a single high-tempo growth agency covering performance ads, SEO, tech engineering, and commercial production.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>ROI-FOCUSED</span>
            <span className="text-[#88cc00] font-bold">100% ACCOUNTABLE</span>
          </div>
        </div>

      </div>

    </section>
  );
}
