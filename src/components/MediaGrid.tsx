"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Film, Sparkles } from "lucide-react";

export default function MediaGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play().catch(() => { });
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto space-y-8">



    </section>
  );
}
