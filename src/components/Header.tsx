"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    { name: "Impact", href: "#testimonials" },
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
          
          {/* Brand Logo & Availability Pill */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-black text-[#88cc00] font-black flex items-center justify-center text-sm shadow-md group-hover:bg-[#88cc00] group-hover:text-black transition-all">
                M5
              </div>
              <span className="font-extrabold text-lg tracking-tight text-black group-hover:text-[#659900] transition-colors">
                GROWTH<span className="text-[#88cc00]">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-[#88cc00] animate-pulse" />
              <span>Accepting Q2/Q3 Projects</span>
            </div>
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
            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="bg-black text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-colors"
            >
              Consult
            </button>
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="w-full py-4 rounded-xl bg-black text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg hover:bg-[#88cc00] hover:text-black transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule Strategy Call</span>
            </button>
            <p className="text-center text-[11px] text-neutral-400 font-mono">
              M5 GROWTH • STRATEGY TODAY, BIGGER TOMORROW
            </p>
          </div>
        </div>
      )}
    </>
  );
}
