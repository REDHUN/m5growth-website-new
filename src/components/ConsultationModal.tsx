"use client";

import { useState } from "react";
import { X, Sparkles, Send, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white text-black w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-2xl relative space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#88cc00]/20 border border-[#88cc00] flex items-center justify-center text-[#659900] mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">
              Consultation Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Our lead growth strategist will review your requirements and reach out within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-black text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#88cc00] hover:text-black transition-colors"
            >
              Done
            </button>
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

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-black text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#88cc00] hover:text-black transition-all shadow-md mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm Strategy Call</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
