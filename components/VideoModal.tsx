"use client";

import React, { useState } from "react";
import { X, Sun, Zap, Home, RefreshCw, BatteryMedium, ArrowRight, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function VideoModal({ isOpen, onClose, onOpenQuote }: VideoModalProps) {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      icon: Sun,
      title: "1. Sunlight Harvest",
      time: "0:25",
      desc: "Solar PV panels installed on your rooftop absorb abundant solar irradiation. Our Tier-1 monocrystalline cells convert photon particles into clean Direct Current (DC) power.",
      stat: "Up to 22.8% Conversion Efficiency",
    },
    {
      icon: Zap,
      title: "2. Precision Inversion",
      time: "0:55",
      desc: "The smart inverter instantly converts raw DC power into synchronized Alternating Current (AC) matching the exact frequency and voltage of your grid connection.",
      stat: "98.6% Inverter Conversion Rate",
    },
    {
      icon: Home,
      title: "3. Direct Daytime Power",
      time: "1:20",
      desc: "Your home or commercial facility powers air conditioners, lighting, computers, and EV chargers directly with zero draw from the electricity grid.",
      stat: "Instant Daytime Bill Neutralization",
    },
    {
      icon: RefreshCw,
      title: "4. Smart Net-Metering Export",
      time: "1:50",
      desc: "Any surplus electricity generated is seamlessly exported into the utility grid. Your bi-directional net-meter spins backwards, accumulating financial credits.",
      stat: "Zero Energy Wastage",
    },
    {
      icon: BatteryMedium,
      title: "5. Night & Monsoon Continuity",
      time: "2:00",
      desc: "At night or during heavy rains, your accumulated export credits offset your usage, or hybrid battery storage seamlessly powers critical loads without flicker.",
      stat: "24/7 Energy Security",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102D46]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl border border-[#D8E7F3] shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D8E7F3]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E4F2FC] flex items-center justify-center text-[#2878B5]">
              <Play className="w-5 h-5 fill-[#2878B5] translate-x-0.5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#163B5C]">
                How Solar Energy Works with Kochuvila Solars
              </h3>
              <p className="text-xs text-[#58758E]">
                2-Minute Visual Engineering Walkthrough
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#58758E] hover:text-[#163B5C] rounded-full hover:bg-[#F0F8FF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Interactive Player Stage */}
        <div className="mt-6">
          <div className="relative aspect-video w-full rounded-2xl bg-[#102D46] overflow-hidden p-6 sm:p-8 flex flex-col justify-between text-white border border-[#163B5C]">
            {/* Ambient solar graphic */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#2878B5]/30 blur-3xl pointer-events-none" />

            {/* Top progress indicators */}
            <div className="flex items-center gap-2 relative z-10">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-1.5 flex-1 rounded-full transition-all cursor-pointer ${
                    activeStep === idx
                      ? "bg-[#2878B5]"
                      : activeStep > idx
                      ? "bg-white/70"
                      : "bg-white/20"
                  }`}
                  aria-label={`Step ${idx + 1}`}
                />
              ))}
            </div>

            {/* Center animated step info */}
            <div className="relative z-10 my-auto py-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold bg-[#2878B5] text-white px-2.5 py-0.5 rounded-md">
                  {steps[activeStep].time}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#D6EAF8]">
                  Engineering Flow
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm sm:text-base text-[#D6EAF8]/90 max-w-xl leading-relaxed">
                {steps[activeStep].desc}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#34815B] bg-[#E8F3EC] px-3 py-1 rounded-full">
                <span>{steps[activeStep].stat}</span>
              </div>
            </div>

            {/* Bottom playback navigation */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 relative z-10 text-xs">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="text-[#D6EAF8] hover:text-white transition-colors"
              >
                ← Previous Stage
              </button>
              <span className="text-white/60">
                Stage {activeStep + 1} of {steps.length}
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="text-[#2878B5] font-semibold hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Next Stage</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#D8E7F3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#58758E]">
            Ready to generate your own clean solar power at your premises?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto py-2.5 px-6 rounded-full bg-[#2878B5] hover:bg-[#1f659a] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Get Free Feasibility Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
