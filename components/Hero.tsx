"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, Zap, Shield, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onOpenQuote, onOpenVideo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F0F8FF] via-[#E4F2FC]/40 to-[#F0F8FF] pt-4 lg:pt-8 pb-16"
    >
      {/* Delicate background arc line matching the reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-10 left-1/4 w-[1100px] h-[750px] opacity-40 text-[#2878B5]"
          viewBox="0 0 1100 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 150 C 350 40, 650 120, 850 450 C 950 620, 1050 700, 1100 750"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className="hidden lg:block"
          />
          <path
            d="M 120 180 C 420 70, 720 160, 900 500"
            stroke="currentColor"
            strokeWidth="0.8"
            className="hidden lg:block"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left pt-4 lg:pt-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] text-[#58758E] uppercase">
                Clean Energy / Brighter Tomorrow
              </span>
              <span className="w-10 h-[1.5px] bg-[#D8E7F3]" />
            </div>

            {/* Headline matching reference image exactly */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#163B5C] tracking-tight leading-[1.08] mb-6">
              Sunlight Today.
              <br />
              <span className="text-[#2878B5]">Savings</span> Tomorrow.
            </h1>

            {/* Supporting Copy */}
            <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-[#58758E] max-w-xl mb-9 font-normal">
              Kochuvila Solars provides reliable, high-performance solar solutions for homes and
              businesses. Clean energy for a smarter, greener future.
            </p>

            {/* Actions: Get a Free Quote + Watch How It Works */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-10">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1b5d92] hover:bg-[#2878B5] text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              >
                <div className="w-11 h-11 rounded-full border border-[#D8E7F3] bg-white group-hover:border-[#2878B5] group-hover:bg-[#F0F8FF] flex items-center justify-center transition-colors shadow-xs">
                  <Play className="w-4 h-4 text-[#2878B5] fill-[#2878B5] translate-x-0.5" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#163B5C] group-hover:text-[#2878B5] transition-colors leading-tight">
                    Watch How It Works
                  </div>
                  <div className="text-[12px] text-[#58758E]">2 min video</div>
                </div>
              </button>
            </div>

            {/* Supporting Mini Value Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D8E7F3]/70 max-w-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E8F3EC] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#34815B]" />
                </div>
                <span className="text-[12px] font-medium text-[#163B5C]">Lower Electricity Bills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E4F2FC] flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 text-[#2878B5]" />
                </div>
                <span className="text-[12px] font-medium text-[#163B5C]">Clean Energy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F0F8FF] border border-[#D8E7F3] flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5 text-[#1b5d92]" />
                </div>
                <span className="text-[12px] font-medium text-[#163B5C]">Reliable Installation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with organic curved backdrop and script badge */}
          <div className="lg:col-span-6 relative">
            {/* Handwritten cursive accent top right (matching reference image) */}
            <div className="absolute -top-7 right-4 sm:right-10 z-20 pointer-events-none transform rotate-[-8deg] select-none">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#2878B5]/90 tracking-wide font-semibold drop-shadow-xs">
                Clean Energy
                <br />
                <span className="pl-3">for a Greener</span>
                <br />
                <span className="pl-6">Tomorrow</span>
              </span>
            </div>

            {/* Architectural Solar Villa Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-[#D8E7F3]/80 bg-white group">
              <Image
                src="/hero-solar-home.jpg"
                alt="Contemporary solar-powered architectural villa with rooftop solar array"
                fill
                priority
                className="object-cover object-center transform group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />

              {/* Subtle gentle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating verified badge in bottom left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D8E7F3] shadow-sm flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#34815B] animate-pulse" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#58758E]">
                    Solar Grid Connected
                  </div>
                  <div className="text-[13px] font-bold text-[#163B5C]">
                    High Efficiency Tier-1 PV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator matching reference image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 hidden sm:flex items-center gap-3">
        <div className="w-[1.5px] h-9 bg-[#2878B5]" />
        <a
          href="#services"
          className="text-[11px] font-bold tracking-[0.2em] text-[#58758E] hover:text-[#2878B5] transition-colors flex items-center gap-1 uppercase"
        >
          <span>SCROLL</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
