"use client";

import { useState, useRef } from "react";
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
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-16 w-full max-w-full overflow-hidden">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[350px] sm:h-[500px] bg-[#88cc00]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none -z-10" />

      {/* Top Banner Tagline Strip */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500">
        <div className="flex items-center gap-2 text-black font-bold">
          <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-ping" />
          <span>BRANDS • PEOPLE • GROWTH</span>
        </div>
        <div className="text-[#659900] font-bold">
          GROWTH BEYOND LIMITS
        </div>
      </div>

      {/* 1. Cinematic Clean Full-Width Video Canvas (First on Start) */}
      <div className="w-full px-2 sm:px-4 md:px-6 max-w-[1780px] mx-auto mb-10 sm:mb-14 min-w-0">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] xl:aspect-[2.35/1] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-neutral-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.12)] group">
          
          {/* Top Video HUD Controls */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] sm:text-xs font-mono text-white shadow-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#88cc00] animate-pulse" />
              <span>M5 GROWTH • SHOWREEL 4K</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
              <button
                onClick={togglePlay}
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black transition-all duration-200 shadow-md"
                aria-label="Toggle Playback"
              >
                {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black transition-all duration-200 shadow-md"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />}
              </button>
            </div>
          </div>

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out bg-black"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/hh1m6ca1/video/upload/so_0,f_auto,q_auto/v1789712402/do_not_need_good_morning_pleas_1__gwr_video_mvp.jpg"
          >
            <source
              src="https://res.cloudinary.com/hh1m6ca1/video/upload/w_1280,f_auto,q_auto/v1789712402/do_not_need_good_morning_pleas_1__gwr_video_mvp.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/hh1m6ca1/video/upload/v1789712402/do_not_need_good_morning_pleas_1__gwr_video_mvp.mp4"
              type="video/mp4"
            />
          </video>

          {/* Subtle Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Bottom Minimal HUD Pill */}
          <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 z-20 pointer-events-none">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/70 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-white/15 text-[9px] sm:text-xs font-mono text-[#88cc00]">
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>10X GROWTH ENGINE</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Agency Headline & Manifesto Area (Second) */}
      <div className="flex flex-col items-center text-center space-y-5 sm:space-y-8 max-w-6xl xl:max-w-7xl mx-auto px-4 min-w-0">
        
        {/* Tagline Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-100 border border-neutral-200/80 text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-neutral-800 shadow-sm">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#88cc00] animate-ping" />
          <span className="font-bold text-black">DIGITAL GROWTH ARCHITECTURE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-black leading-[1.02] sm:leading-[0.94] break-words">
          Accelerate Brand <br />
          Trajectory <br className="hidden sm:inline" />
          <span className="text-[#659900]">Beyond Limits.</span>
        </h1>

        {/* Narrative Body Copy */}
        <p className="text-neutral-600 text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed max-w-4xl font-normal px-2 break-words">
          We partner with ambitious consumer brands and scaling enterprises to engineer measurable revenue growth through full-funnel Meta advertising, high-intent SEO, Next.js web flagships, and commercial video production.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-black text-white px-7 py-3.5 sm:px-10 sm:py-4.5 rounded-full font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-wider hover:bg-[#88cc00] hover:text-black hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 group"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#88cc00] group-hover:text-black transition-colors" />
            <span>Initiate Growth Strategy</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href="#services"
            className="w-full sm:w-auto text-center px-6 py-3.5 sm:px-9 sm:py-4.5 rounded-full font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore 10 Services</span>
          </Link>
        </div>

      </div>

    </section>
  );
}
