"use client";

import React from "react";
import { Star, CheckCircle, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  system: string;
  feedback: string;
  savings: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. K. Narayanan",
    role: "Villa Owner",
    location: "Kowdiar, Trivandrum",
    system: "10 kW On-Grid Solar Plant",
    feedback:
      "Kochuvila Solars delivered precisely what they promised. Their engineers took time to analyze our rooftop layout and designed an elevated structure that leaves the terrace usable. Our KSEB bill dropped from ₹12,000 to the minimum tariff charge.",
    savings: "Saved ₹11,500/mo",
  },
  {
    name: "Mathews Thomas",
    role: "Managing Director, Apex Technologies",
    location: "Technopark Area",
    system: "120 kW Commercial Rooftop",
    feedback:
      "Switching to solar was a major corporate milestone for us. Kochuvila's team demonstrated exemplary safety protocols and zero business downtime during the rooftop installation. The live cloud monitoring dashboard is fantastic.",
    savings: "42% Corporate Power Offset",
  },
  {
    name: "Sujatha Pillai",
    role: "Homeowner",
    location: "Asramam, Kollam",
    system: "5 kW Residential Hybrid + Solar Water Heater",
    feedback:
      "We installed both solar panels and the evacuated tube solar water heater. During monsoons and peak summer alike, we have uninterrupted hot water and zero power interruptions. Truly professional service and courteous technicians.",
    savings: "Zero Hot Water Bills",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D8E7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#2878B5] uppercase mb-3">
            Real Customer Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163B5C] tracking-tight">
            Trusted by Homeowners & Enterprises
          </h2>
          <p className="text-[16px] text-[#58758E] mt-3">
            Read what our clients say about their transition to clean solar power and long-term
            savings with Kochuvila Solars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F0F8FF] rounded-2xl p-7 border border-[#D8E7F3] flex flex-col justify-between hover:border-[#2878B5]/50 transition-colors"
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#2878B5] text-[#2878B5]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2878B5]/30" />
                </div>

                <p className="text-sm text-[#163B5C] leading-relaxed mb-6 italic">
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8E7F3]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#163B5C]">{item.name}</h4>
                    <p className="text-xs text-[#58758E]">{item.role} • {item.location}</p>
                  </div>
                  <span className="text-[11px] font-bold text-[#34815B] bg-[#E8F3EC] px-2.5 py-1 rounded-full">
                    {item.savings}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#58758E]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#34815B]" />
                  <span>Verified: {item.system}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
