"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onOpenQuote, onOpenVideo }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F5F9FD] via-[#EBF4FC]/60 to-[#F5F9FD] pt-4 lg:pt-8 pb-16"
    >
      {/* Ambient sky & warm solar glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#0F67B1]/10 blur-3xl" />
        <div className="absolute top-12 right-0 w-[440px] h-[440px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left pt-4 lg:pt-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D8E7F3] shadow-2xs w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.16em] text-[#0F2E4D] uppercase">
                Clean Energy • Brighter Tomorrow
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#0C233C] tracking-[-0.03em] leading-[1.06] mb-6">
              Sunlight Today.
              <br />
              <span className="bg-gradient-to-r from-[#0F67B1] via-[#1D74C2] to-[#0EA5E9] bg-clip-text text-transparent">
                Savings
              </span>{" "}
              Tomorrow.
            </h1>

            {/* Supporting Copy */}
            <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-[#4A657D] max-w-xl mb-9 font-normal">
              Kochuvila Solars provides reliable, high-performance solar solutions for homes and
              businesses. Clean energy for a smarter, greener future.
            </p>

            {/* Actions: Get a Free Quote + Watch How It Works */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-10">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0F5298] to-[#1D74C2] hover:from-[#0C427B] hover:to-[#155FA0] text-white text-[15px] font-semibold transition-all duration-200 shadow-[0_10px_25px_-8px_rgba(15,103,177,0.55)] hover:shadow-[0_14px_30px_-8px_rgba(15,103,177,0.65)] transform active:scale-95 group cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              >
                <div className="w-11 h-11 rounded-full border border-[#D8E7F3] bg-white group-hover:border-[#0F67B1] group-hover:bg-[#E6F1FC] flex items-center justify-center transition-all shadow-xs">
                  <Play className="w-4 h-4 text-[#0F67B1] fill-[#0F67B1] translate-x-0.5" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#0C233C] group-hover:text-[#0F67B1] transition-colors leading-tight">
                    Watch How It Works
                  </div>
                  <div className="text-[12px] text-[#4A657D]">2 min video</div>
                </div>
              </button>
            </div>

            {/* Supporting Mini Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-[#D8E7F3]/80 max-w-xl">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 border border-[#D8E7F3]/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#168052] shrink-0" />
                <span className="text-[12px] font-semibold text-[#0C233C]">Lower Power Bills</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 border border-[#D8E7F3]/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
                <span className="text-[12px] font-semibold text-[#0C233C]">Clean Solar Energy</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/80 border border-[#D8E7F3]/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#0F67B1] shrink-0" />
                <span className="text-[12px] font-semibold text-[#0C233C]">25-Yr Warranty</span>
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

            {/* Architectural Solar Video Showcase Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-[#D8E7F3]/80 bg-[#0C233C] group">
              <video
                ref={videoRef}
                src="/hero-solar.mp4"
                poster="/hero-solar-home.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
              />

              {/* Subtle gentle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C233C]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating verified badge in bottom left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D8E7F3] shadow-sm flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#168052] animate-pulse" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#4A657D]">
                    Solar Grid Connected
                  </div>
                  <div className="text-[13px] font-bold text-[#0C233C]">
                    High Efficiency Tier-1 PV
                  </div>
                </div>
              </div>

              {/* Video Playback Controls in bottom right */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 z-10">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0C233C] backdrop-blur-md border border-[#D8E7F3] shadow-sm flex items-center justify-center transition-all cursor-pointer"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 translate-x-0.5" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0C233C] backdrop-blur-md border border-[#D8E7F3] shadow-sm flex items-center justify-center transition-all cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
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
