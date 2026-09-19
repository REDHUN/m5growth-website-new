"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function ConsultationModal({ isOpen, onClose, presetService }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState(presetService ? `Interested in ${presetService}` : "");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#88cc00", "#000000", "#ffffff"],
      });
    } catch {
      // Ignore
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="bg-white text-black w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-2xl relative space-y-6 z-10"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-14 h-14 rounded-full bg-[#88cc00]/20 border border-[#88cc00] flex items-center justify-center text-[#659900] mx-auto"
                >
                  <CheckCircle2 className="w-7 h-7" />
                </motion.div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                  Consultation Scheduled!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Our lead growth strategist will review your requirements and reach out within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-colors cursor-pointer"
                >
                  Done
                </motion.button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#659900] font-mono font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Priority Strategy Session</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                    Book a Strategy Call
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Discuss your expansion goals directly with our senior growth partners.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      suppressHydrationWarning
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      suppressHydrationWarning
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      suppressHydrationWarning
                      placeholder="+91 999 555 1234"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">Tell Us</label>
                    <textarea
                      rows={3}
                      suppressHydrationWarning
                      placeholder="Tell us about your project or goals..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-black placeholder-neutral-400 text-base sm:text-sm focus:outline-none focus:border-black resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-black text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#88cc00] hover:text-black transition-all shadow-md mt-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm Strategy Call</span>
                </motion.button>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
