"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight
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
    details: initialService ? `Interested in ${initialService}` : "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      const confetti = (await import("canvas-confetti")).default;
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
    <section className="py-6 sm:py-10 px-4 sm:px-8 lg:px-12 xl:px-14 max-w-[1550px] mx-auto scroll-mt-20 overflow-hidden w-full max-w-full" id="contact">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 xl:p-10 bg-neutral-50 border border-neutral-200 shadow-sm relative overflow-hidden w-full max-w-full min-w-0 transform-gpu"
      >
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-full max-w-96 h-96 bg-[#88cc00]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 relative z-10 w-full max-w-full items-center">
          
          {/* Left Column: Direct Info & Pitch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-5 space-y-5 flex flex-col justify-center transform-gpu"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-[#659900] text-xs font-mono uppercase tracking-widest font-bold w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET&apos;S TALK GROWTH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight">
              Scale Your Brand <br />
              <span className="text-[#659900]">With Precision.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Ready to accelerate your revenue and establish market leadership? Reach out to our team directly via WhatsApp, email, or phone.
            </p>
          </motion.div>

          {/* Right Column: Quick Contact & WhatsApp Pill & Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-7 space-y-4 flex flex-col justify-center transform-gpu"
          >
            {/* WhatsApp Direct */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/919778252136?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200 hover:border-black text-black font-extrabold transition-all shadow-xs hover:shadow-md group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#88cc00] text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black uppercase tracking-tight text-black">Direct WhatsApp Priority Line</div>
                  <div className="text-[11px] font-medium text-neutral-500">Connect directly with Senior Growth Lead</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </motion.a>

            {/* Direct Info List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="mailto:growth@m5growth.in"
                className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-black transition-colors flex items-center gap-3 text-xs text-neutral-800 shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#659900]" />
                <span className="truncate">growth@m5growth.in</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="tel:+919778252136"
                className="p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-black transition-colors flex items-center gap-3 text-xs text-neutral-800 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#659900]" />
                <span>+91 9778252136</span>
              </motion.a>
            </div>

            {/* Office Location */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#659900] uppercase font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>M5 Growth</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                Muhamma, Alappuzha, Kerala
              </p>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CONTACT FORM (TEMPORARILY HIDDEN - UNCOMMENT WHEN READY TO IMPLEMENT)      */}
          {/* ========================================================================= */}
          {/*
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-center transform-gpu"
          >
            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-[#88cc00]/20 border border-[#88cc00] flex items-center justify-center text-[#659900]"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black">
                  Message Transmitted!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md">
                  Thank you, <strong>{formData.name || "Partner"}</strong>. Our team has received your inquiry and will reach out to you shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setFormData({ name: "", email: "", phone: "", details: "" });
                    setFormSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-colors cursor-pointer"
                >
                  Send Another Message
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-5">
                
                <div className="space-y-1 pb-2 border-b border-neutral-100">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    Fill out the fields below and we&apos;ll get back to you immediately.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Your Name <span className="text-[#659900]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    suppressHydrationWarning
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Email Address <span className="text-[#659900]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      suppressHydrationWarning
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Mobile Number <span className="text-[#659900]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      suppressHydrationWarning
                      placeholder="+91 9778252136"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Tell Us
                  </label>
                  <textarea
                    rows={4}
                    suppressHydrationWarning
                    placeholder="Tell us about your project, goals, or requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-black text-white font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#88cc00] hover:text-black transition-colors shadow-md mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </motion.button>

                <p className="text-center text-[11px] text-neutral-500 font-mono">
                  🔒 Strictly Confidential • Fast Response Guaranteed
                </p>
              </form>
            )}
          </motion.div>
          */}

        </div>

      </motion.div>
    </section>
  );
}
