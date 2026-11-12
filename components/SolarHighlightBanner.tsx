"use client";

import React from "react";
import Image from "next/image";
import { Award, Sun, BatteryCharging, Check } from "lucide-react";

export default function SolarHighlightBanner() {
  return (
    <section className="relative bg-[#F0F8FF] py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#D8E7F3] shadow-lg bg-[#FFFFFF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="p-8 sm:p-12 lg:p-14 lg:col-span-6 z-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F2FC] text-[#2878B5] text-[12px] font-bold uppercase tracking-wider mb-4 w-fit">
                <Sun className="w-3.5 h-3.5" />
                <span>Next-Gen Photovoltaic Technology</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#163B5C] tracking-tight leading-tight mb-4">
                Engineered for Maximum Solar Yield Under Any Weather
              </h3>

              <p className="text-[15px] text-[#58758E] leading-relaxed mb-8">
                Every panel installed by Kochuvila Solars features dual-glass anti-reflective coating,
                high temperature coefficient resilience, and micro-crack prevention, ensuring uninterrupted
                clean power for decades.
              </p>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8F3EC] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#34815B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#163B5C]">22.8% Module Efficiency</div>
                    <div className="text-xs text-[#58758E]">Bifacial Monocrystalline</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8F3EC] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#34815B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#163B5C]">Zero Shadow Losses</div>
                    <div className="text-xs text-[#58758E]">Half-cut cell design</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8F3EC] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#34815B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#163B5C]">PID & LID Resistant</div>
                    <div className="text-xs text-[#58758E]">IEC 61215 Certified</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E8F3EC] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#34815B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#163B5C]">Smart Micro-Inverters</div>
                    <div className="text-xs text-[#58758E]">Panel-level MPPT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Solar Panels Photo Column matching reference image lower banner */}
            <div className="relative lg:col-span-6 h-72 sm:h-96 lg:h-full min-h-[380px] w-full overflow-hidden">
              <Image
                src="/solar-panels-closeup.jpg"
                alt="Close-up of angled high-efficiency monocrystalline solar panels against blue sky"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
