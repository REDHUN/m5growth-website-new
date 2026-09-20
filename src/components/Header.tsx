"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, ArrowRight, Activity } from "lucide-react";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Protocol", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Precision Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#88cc00] origin-left z-50 pointer-events-none shadow-[0_0_8px_#88cc00]"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 py-3 sm:py-3.5 shadow-xs"
            : "bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-neutral-200/50 md:border-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden bg-black shadow-md border border-neutral-800 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.jpg"
                  alt="M5 Growth Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-black group-hover:text-[#659900] transition-colors">
                GROWTH<span className="text-[#88cc00]">.</span>
              </span>
            </Link>
          </div>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/90 border border-neutral-200/80 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919778252136?text=Hello%20M5%20Growth%20Team!%20I%27d%20like%20to%20book%20a%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/919778252136?text=Hello%20M5%20Growth%20Team!%20I%27d%20like%20to%20book%20a%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-colors"
            >
              Consult
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 text-black flex items-center justify-center hover:bg-neutral-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 text-black animate-in fade-in duration-200 md:hidden">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#659900]">
              <Activity className="w-4 h-4" />
              <span>Agency Navigation</span>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tight py-2 border-b border-neutral-100 flex items-center justify-between text-neutral-800 hover:text-[#659900] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-neutral-200">
            <a
              href="https://wa.me/919778252136?text=Hello%20M5%20Growth%20Team!%20I%27d%20like%20to%20book%20a%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-black text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg hover:bg-[#88cc00] hover:text-black transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule Strategy Call</span>
            </a>
            <p className="text-center text-[11px] text-neutral-400 font-mono">
              M5 GROWTH • STRATEGY TODAY, BIGGER TOMORROW
            </p>
          </div>
        </div>
      )}
    </>
  );
}
