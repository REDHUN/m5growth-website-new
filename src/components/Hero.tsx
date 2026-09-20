"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isPlaying && video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isPlaying]);

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-3 sm:pb-5 w-full max-w-full overflow-hidden">
      
      {/* Background Animated Accent Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-br from-[#88cc00]/20 via-[#659900]/10 to-transparent rounded-full blur-[100px] sm:blur-[160px] pointer-events-none -z-10" 
      />


      {/* 1. Agency Headline & Manifesto Area (First) */}
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 max-w-5xl xl:max-w-6xl mx-auto px-4 mb-6 sm:mb-8 min-w-0">
        


        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.03em] text-black leading-[1.05] sm:leading-[0.98] break-words"
        >
          Accelerate Your Brand <br className="hidden sm:inline" />
          <span className="text-[#659900] bg-gradient-to-r from-[#659900] to-[#88cc00] bg-clip-text text-transparent">
            With Digital Growth.
          </span>
        </motion.h1>

        {/* Narrative Body Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-neutral-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl font-normal px-2 break-words"
        >
          We help businesses build strong online presence, reach the right audience, and grow with tailored social media marketing, Meta & Google ads, search engine optimization, and custom web development.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 35px -10px rgba(136, 204, 0, 0.4)" }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/919778252136?text=Hello%20M5%20Growth%20Team!%20I%27d%20like%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-black text-white px-7 py-3.5 sm:px-9 sm:py-4 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#88cc00] group-hover:text-black group-hover:rotate-12 transition-all" />
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </motion.a>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#services"
              className="w-full sm:w-auto text-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 transition-all flex items-center justify-center gap-2 block"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>

      {/* 2. Cinematic Clean Full-Width Video Canvas (Second) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-2 sm:px-4 md:px-6 max-w-[1780px] mx-auto min-w-0"
      >
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] xl:aspect-[2.35/1] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-neutral-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] group hover:shadow-[0_25px_60px_rgba(136,204,0,0.18)] transition-all duration-700">
          
          {/* Top Video HUD Controls */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 z-20 flex items-center justify-between pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[9px] sm:text-xs font-mono text-white shadow-lg"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#88cc00] animate-pulse" />
              <span>M5 GROWTH • SHOWREEL</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto"
            >
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                onClick={togglePlay}
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black hover:border-[#88cc00] transition-colors duration-200 shadow-md cursor-pointer"
                aria-label="Toggle Playback"
              >
                {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleMute}
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#88cc00] hover:text-black hover:border-[#88cc00] transition-colors duration-200 shadow-md cursor-pointer"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" /> : <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />}
              </motion.button>
            </motion.div>
          </div>

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out bg-black"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Bottom Minimal HUD Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 z-20 pointer-events-none"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/75 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-white/15 text-[9px] sm:text-xs font-mono text-[#88cc00] shadow-md">
              <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
              <span>10X GROWTH ENGINE</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}
