"use client";

import React from "react";
import { TrendingDown, ShieldCheck, Headset, Leaf, Check } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: TrendingDown,
      title: "Energy Cost Savings",
      tagline: "Up to 90% Bill Reduction",
      desc: "Harness the power of bi-directional net metering. Any excess solar units your panels generate during sunny daylight hours are credited back to your electricity utility account.",
      points: [
        "Shield your household or enterprise against rising electricity utility tariffs",
        "Fast return on investment typically within 3 to 4 years",
        "Accelerated tax depreciation of 40% for commercial and industrial clients",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Quality Installation",
      tagline: "Certified Wind & Water-Tight",
      desc: "We prioritize structural integrity and roof longevity above all. All railings are manufactured using anodized aluminium and hot-dip galvanized SS304 fasteners.",
      points: [
        "Zero roof leakage guarantee with proprietary EPDM rubber flashing",
        "Engineered to withstand tropical monsoon winds up to 160 km/h",
        "IEC 62109 and IEC 61727 certified surge protection & safety isolators",
      ],
    },
    {
      icon: Headset,
      title: "Reliable Support",
      tagline: "Lifetime System Care",
      desc: "Our relationship doesn't end on commissioning day. Our technical support center continuously monitors system health and schedules periodic health checkups.",
      points: [
        "Dedicated hotline and WhatsApp support for quick queries",
        "Scheduled preventive maintenance and module cleaning guidance",
        "Prompt on-site technician dispatch within 24–48 hours",
      ],
    },
    {
      icon: Leaf,
      title: "Sustainable Energy",
      tagline: "Clean, Carbon-Zero Footprint",
      desc: "Every kilowatt-hour of solar energy your rooftop generates directly replaces fossil fuel combustion, significantly shrinking your carbon footprint.",
      points: [
        "A standard 5kW residential system saves over 150 metric tons of CO2",
        "Equivalent to planting more than 2,400 mature trees over 25 years",
        "Contributes to state and national clean renewable energy targets",
      ],
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F0F8FF] border-t border-[#D8E7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#2878B5] uppercase mb-3">
            The Kochuvila Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163B5C] tracking-tight">
            Why Choose Kochuvila Solars
          </h2>
          <p className="text-[16px] text-[#58758E] mt-3">
            Engineered precision, authentic solar equipment, and customer-first care from site
            survey through the 25-year lifespan of your installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#D8E7F3] hover:border-[#2878B5]/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E4F2FC] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#2878B5]" />
                    </div>
                    <span className="text-xs font-bold text-[#34815B] bg-[#E8F3EC] px-3 py-1 rounded-full">
                      {pillar.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#163B5C] mb-3">{pillar.title}</h3>
                  <p className="text-sm text-[#58758E] leading-relaxed mb-6">{pillar.desc}</p>
                </div>

                <div className="space-y-2.5 pt-5 border-t border-[#D8E7F3]/70">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#58758E]">
                      <Check className="w-4 h-4 text-[#2878B5] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
