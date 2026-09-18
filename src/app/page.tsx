"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TextMarquee from "@/components/TextMarquee";
import MediaGrid from "@/components/MediaGrid";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsAndProcess from "@/components/StatsAndProcess";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPresetService(serviceTitle);
    }
    setConsultationOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#0a0a0a] overflow-x-hidden selection:bg-[#88cc00] selection:text-black">
      {/* Executive Agency Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Page Content */}
      <main className="flex flex-col">
        {/* 1. Hero Section with Full-Width Video Showreel */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. Bold Typographic Ribbon Marquee */}
        <TextMarquee />

        {/* 3. Signature Media Showcase Mosaic Grid */}
        <MediaGrid />

        {/* 4. Services Section */}
        <ServicesSection
          onSelectServiceForQuote={(title) => handleOpenConsultation(title)}
        />

        {/* 5. Filterable Works / Case Studies Portfolio */}
        <PortfolioSection
          onRequestQuoteWithContext={(context) => handleOpenConsultation(context)}
        />

        {/* 6. 4-Step Process & Agency Stats */}
        <StatsAndProcess />

        {/* 7. Client Testimonials */}
        <TestimonialsSection />

        {/* 8. Interactive Project Brief Builder & Contact */}
        <ContactSection initialService={presetService} />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Quick Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        presetService={presetService}
      />
    </div>
  );
}
