"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#88cc00", "#000000", "#ffffff"],
      });
    } catch {
      // Ignore
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello M5 Growth Team! I'd like to discuss a project.\nName: ${formData.name || "Client"}\nPhone: ${formData.phone || "N/A"}\nMessage: ${formData.details || "Inquiry"}`
  );

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto scroll-mt-20" id="contact">
      
      <div className="rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 xl:p-16 bg-neutral-50 border border-neutral-200 shadow-sm relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-[#88cc00]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 relative z-10">
          
          {/* Left Column: Direct Info & Locations */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-[#659900] text-xs font-mono uppercase tracking-widest font-bold w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET&apos;S TALK GROWTH</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                Scale Your Brand <br />
                <span className="text-[#659900]">With Precision.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                Ready to accelerate your revenue and establish market leadership? Leave your contact details below and our partners will reach out within 24 hours.
              </p>
            </div>

            {/* Quick Contact & WhatsApp Pill */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              
              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/919995551234?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-black text-white font-extrabold hover:bg-[#88cc00] hover:text-black hover:scale-[1.01] transition-all shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#88cc00] text-black flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black uppercase tracking-tight">Direct WhatsApp Priority Line</div>
                    <div className="text-[11px] font-medium opacity-80">Connect directly with Senior Growth Lead</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Info List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="mailto:growth@m5growth.com"
                  className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-black transition-colors flex items-center gap-3 text-xs text-neutral-800 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#659900]" />
                  <span>growth@m5growth.com</span>
                </a>

                <a
                  href="tel:+919995551234"
                  className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-black transition-colors flex items-center gap-3 text-xs text-neutral-800 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#659900]" />
                  <span>+91 999 555 1234</span>
                </a>
              </div>

              {/* Office Location Hubs */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#659900] uppercase font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>M5 Growth Studios</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  <strong className="text-black font-semibold">HQ Studio:</strong> Cyberpark, Kozhikode, Kerala 673001<br />
                  <strong className="text-black font-semibold">Regional Presence:</strong> Dubai, UAE • Bangalore, India
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Simplified Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-center">
            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#88cc00]/20 border border-[#88cc00] flex items-center justify-center text-[#659900]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                  Message Transmitted!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md">
                  Thank you, <strong>{formData.name || "Partner"}</strong>. Our team has received your inquiry and will reach out to you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: "", email: "", phone: "", details: "" });
                    setFormSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1 pb-2 border-b border-neutral-100">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    Fill out the fields below and we&apos;ll get back to you immediately.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Your Name <span className="text-[#659900]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Email & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Email Address <span className="text-[#659900]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Mobile Number <span className="text-[#659900]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 999 555 1234"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Tell Us / Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Tell Us
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, goals, or requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-black text-white font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#88cc00] hover:text-black hover:scale-[1.01] transition-all shadow-md mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <p className="text-center text-[11px] text-neutral-500 font-mono">
                  🔒 Strictly Confidential • Fast Response Guaranteed
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
