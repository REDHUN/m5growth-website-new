"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Film, Sparkles, X, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  imageUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Brand Identity & Logo Systems",
    category: "Brand Identity",
    tagline: "Creative Branding",
    desc: "Custom brand identity, typography suites, and modern visual design tailored to give your business a distinct market presence.",
    imageUrl: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_32_29_PM.png",
  },
  {
    id: "gallery-2",
    title: "Meta & Instagram Ads Campaigns",
    category: "Paid Advertising",
    tagline: "Targeted Ads",
    desc: "Targeted Facebook and Instagram ad campaigns crafted to reach your ideal audience and generate customer inquiries.",
    imageUrl: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_21_PM.png",
  },
  {
    id: "gallery-3",
    title: "Modern Website Development",
    category: "Web Engineering",
    tagline: "Web Flagship",
    desc: "Fast, responsive Next.js websites and custom landing pages designed for high conversion and smooth user experience.",
    imageUrl: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_30_07_PM.png",
  },
  {
    id: "gallery-4",
    title: "3D Visuals & Product Renders",
    category: "3D & Motion",
    tagline: "Visual Design",
    desc: "High-detail 3D product modeling, realistic rendering, and motion graphics to showcase products attractively.",
    imageUrl: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_04_PM.png",
  },
  {
    id: "gallery-5",
    title: "Commercial Video & Reel Editing",
    category: "Video Production",
    tagline: "Video Content",
    desc: "Commercial video production, short-form reel edits, and social video assets designed to capture audience attention.",
    imageUrl: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_25_55_PM.png",
  },
  {
    id: "gallery-6",
    title: "Packaging & Creative Collateral",
    category: "Packaging & Design",
    tagline: "Creative Design",
    desc: "Distinctive product packaging, brand collateral, and digital marketing materials that enhance your brand value.",
    imageUrl: "https://res.cloudinary.com/hh1m6ca1/image/upload/v1789826588/ChatGPT_Image_Sep_19_2026_07_26_13_PM.png",
  },
];

export default function MediaGrid() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
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
    <section className="py-6 sm:py-10 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-5 sm:space-y-7 w-full max-w-full overflow-hidden" id="gallery">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-neutral-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            <Film className="w-4 h-4 animate-pulse" />
            <span>CREATIVE DESIGN & PRODUCTION GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
            Creative Design. <br className="hidden sm:inline" />
            <span className="text-neutral-500">Built For Digital Impact.</span>
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-normal">
          A showcase of our creative work across graphic design, social media marketing assets, commercial video editing, branding identities, and modern web applications.
        </p>
      </div>

      {/* 1. First 3 Gallery Items Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pt-2">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#659900] font-bold">
            Featured Creative & Brand Gallery
          </h3>
          <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
            Click any piece to expand preview
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-full">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer relative aspect-[4/5] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-black shadow-lg flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Background Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

              {/* Top Bar Badges */}
              <div className="relative z-10 flex justify-between items-start gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#88cc00] group-hover:text-black group-hover:rotate-45 transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-1.5">
                <span className="text-xs font-mono text-[#88cc00] uppercase font-bold block">
                  {item.tagline}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#88cc00] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-[#88cc00] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view full preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Middle Showcase: Commercial Video + Protocol Bento (After 3 Images) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 w-full max-w-full py-2">
        
        {/* Bento 1: Commercial Video Showcase (8 Cols) */}
        <div 
          className="md:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-[#88cc00]/80 shadow-xl group w-full min-w-0 transition-all duration-300 hover:-translate-y-1"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out bg-black"
            autoPlay
            playsInline
            loop
            muted={isMuted}
            preload="metadata"
            poster="https://res.cloudinary.com/hh1m6ca1/video/upload/so_0,w_800,f_auto,q_auto/v1789804958/M_Growth___Video_White_Edi_gwr_video_mvp.jpg"
          >
            <source
              src="https://res.cloudinary.com/hh1m6ca1/video/upload/w_1280,f_auto,q_auto/v1789804958/M_Growth___Video_White_Edi_gwr_video_mvp.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/hh1m6ca1/video/upload/v1789804958/M_Growth___Video_White_Edi_gwr_video_mvp.mp4"
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

          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-ping" />
              Commercial Showreel
            </span>
          </div>
        </div>

        {/* Bento 2: Agency Growth Acceleration Manifesto (4 Cols) */}
        <div 
          className="md:col-span-4 relative rounded-3xl overflow-hidden bg-neutral-900 border-2 border-neutral-200 hover:border-[#88cc00] p-6 sm:p-8 flex flex-col justify-between shadow-lg text-white transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-[#88cc00]/20 border border-[#88cc00]/40 text-[#88cc00] text-[10px] font-mono uppercase font-bold tracking-widest">
              Agency Approach
            </span>
            <Sparkles className="w-5 h-5 text-[#88cc00] animate-pulse" />
          </div>

          <div className="space-y-3 my-auto py-6">
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              Creative Strategy. <br />
              <span className="text-[#88cc00]">Measurable Results.</span>
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              We provide end-to-end digital solutions covering social media marketing, targeted paid ads, search optimization, and modern web development under one dedicated team.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>RESULTS-ORIENTED</span>
            <span className="text-[#88cc00] font-bold">DEDICATED TEAM</span>
          </div>
        </div>

      </div>

      {/* 3. Second 3 Gallery Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-full">
        {GALLERY_ITEMS.slice(3, 6).map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group cursor-pointer relative aspect-[4/5] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-black border-2 border-neutral-200 hover:border-black shadow-lg flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Background Image */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 ease-out"
            />

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="relative z-10 flex justify-between items-start gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider border border-white/20">
                {item.category}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#88cc00] group-hover:text-black group-hover:rotate-45 transition-all duration-300 shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-1.5">
              <span className="text-xs font-mono text-[#88cc00] uppercase font-bold block">
                {item.tagline}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#88cc00] transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                {item.desc}
              </p>
              
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-[#88cc00] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to view full preview</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative z-10 bg-neutral-950 text-white rounded-3xl overflow-hidden max-w-4xl w-full border border-neutral-800 shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-800">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-[#88cc00] uppercase font-bold">
                    {activeImage.category} • {activeImage.tagline}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-white">
                    {activeImage.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveImage(null)}
                  className="p-2 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <Image
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <p className="text-xs sm:text-sm text-neutral-300">
                  {activeImage.desc}
                </p>
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-5 py-2 rounded-full bg-[#88cc00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
