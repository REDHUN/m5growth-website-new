"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ArrowRight, 
  TrendingUp 
} from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative pt-16 sm:pt-18 pb-8 sm:pb-14 w-full overflow-hidden">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#88cc00]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Banner Tagline Strip */}
      <div className="max-w-[1720px] mx-auto px-3 sm:px-6 mb-2 sm:mb-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
        <div className="flex items-center gap-2 text-black font-bold">
          <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-ping" />
          <span>BRANDS • PEOPLE • GROWTH</span>
        </div>
        <div className="text-[#659900] font-bold">
          GROWTH BEYOND LIMITS
        </div>
      </div>

      {/* 1. Cinematic Clean Full-Width Video Canvas (Edge-to-Edge with Minimal Inset) */}
      <div className="w-full px-1 sm:px-3 md:px-4 max-w-[1780px] mx-auto">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] xl:aspect-[2.35/1] rounded-xl sm:rounded-2xl xl:rounded-3xl overflow-hidden bg-black border border-neutral-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] group">
          
          {/* Top Video HUD Controls */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-pulse" />
              <span>M5 GROWTH • SHOWREEL 4K</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={togglePlay}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black transition-all duration-200 shadow-md hover:scale-105"
                aria-label="Toggle Playback"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black transition-all duration-200 shadow-md hover:scale-105"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
            </div>
          </div>

          {/* Video Element Optimized for Safari & Chrome */}
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/hh1m6ca1/video/upload/w_1280,f_auto,q_auto/v1789712402/do_not_need_good_morning_pleas_1__gwr_video_mvp.mp4"
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out bg-black"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/hh1m6ca1/video/upload/so_0,f_auto,q_auto/v1789712402/do_not_need_good_morning_pleas_1__gwr_video_mvp.jpg"
          />

          {/* Subtle Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Bottom Minimal HUD Pill */}
          <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 z-20 pointer-events-none">
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] sm:text-xs font-mono text-[#88cc00]">
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>10X GROWTH ENGINE</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Agency Headline & Manifesto Area (Below the Video) */}
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-6xl xl:max-w-7xl mx-auto pt-6 sm:pt-10 px-4">
        
        {/* Tagline Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-800 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#88cc00] animate-ping" />
          <span className="font-bold text-black">DIGITAL GROWTH ARCHITECTURE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight sm:tracking-tighter text-black leading-[0.96] sm:leading-[0.92]">
          Accelerate Brand <br />
          Trajectory <br className="hidden md:inline" />
          <span className="text-[#659900]">Beyond Limits.</span>
        </h1>

        {/* Narrative Body Copy */}
        <p className="text-neutral-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl font-normal">
          We partner with ambitious consumer brands and scaling enterprises to engineer measurable revenue growth through full-funnel Meta advertising, high-intent SEO, Next.js web flagships, and commercial video production.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:pt-4">
          <button
            onClick={onOpenConsultation}
            className="bg-black text-white px-9 py-4 sm:px-10 sm:py-4.5 rounded-full font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-wider hover:bg-[#88cc00] hover:text-black hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#88cc00] group-hover:text-black transition-colors" />
            <span>Initiate Growth Strategy</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href="#services"
            className="px-8 py-4 sm:px-9 sm:py-4.5 rounded-full font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 transition-all flex items-center gap-2"
          >
            <span>Explore 10 Services</span>
          </Link>
        </div>

      </div>

    </section>
  );
}
