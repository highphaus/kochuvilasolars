"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Users, Wrench, ArrowRight } from "lucide-react";

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  const strengths = [
    {
      icon: Users,
      title: "In-House Engineering Team",
      desc: "Zero outsourced subcontractors. Every system is planned, wired, and tested by certified solar engineers.",
    },
    {
      icon: ShieldCheck,
      title: "25-Year Performance Warranty",
      desc: "Guaranteed minimum 84.8% power output at Year 25 with comprehensive product coverage.",
    },
    {
      icon: Cpu,
      title: "Smart Cloud Telemetry",
      desc: "Live generation tracking on your smartphone with automated inverter health alerts.",
    },
    {
      icon: Wrench,
      title: "Turnkey Net-Metering Liaison",
      desc: "Complete documentation, safety inspections, and DISCOM meter replacement managed for you.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D8E7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Engineer photo & Quality Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D8E7F3] shadow-xl bg-white group">
              <Image
                src="/solar-engineers.jpg"
                alt="Kochuvila Solars engineers conducting diagnostic inspection on solar inverter"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D46]/30 via-transparent to-transparent pointer-events-none" />

              {/* Floating Engineering Excellence Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#D8E7F3] shadow-md flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E8F3EC] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#34815B]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#58758E]">
                    MNRE Certified
                  </div>
                  <div className="text-sm font-bold text-[#163B5C]">
                    Strict Electrical Safety & IEC Standards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-[12px] font-bold tracking-[0.2em] text-[#2878B5] uppercase mb-3">
              About Kochuvila Solars
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163B5C] tracking-tight leading-[1.2] mb-6">
              Powering a Cleaner, More Self-Reliant Future
            </h2>
            <p className="text-[16px] text-[#58758E] leading-relaxed mb-8">
              At Kochuvila Solars, we believe that making the transition to solar energy should be
              seamless, transparent, and financially rewarding. We engineer high-durability rooftop
              and ground-mount solar power systems that convert abundant everyday sunlight into
              dependable electricity for decades to come.
            </p>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {strengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F0F8FF] border border-[#D8E7F3]/70 hover:border-[#2878B5]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-2xs">
                      <Icon className="w-4 h-4 text-[#2878B5]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#163B5C] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#58758E] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b5d92] hover:bg-[#2878B5] text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Consult Our Engineers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#portfolio"
                className="text-sm font-semibold text-[#163B5C] hover:text-[#2878B5] transition-colors"
              >
                Browse Our Installations →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
