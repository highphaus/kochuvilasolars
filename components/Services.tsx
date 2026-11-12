"use client";

import React, { useState } from "react";
import { Home, Building2, Factory, Droplets, ArrowRight, CheckCircle2, ChevronRight, X } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: string;
  idealFor: string;
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Solar",
    shortDesc: "Power your home with clean, renewable energy.",
    fullDesc:
      "Engineered for modern villas and residential bungalows. Enjoy up to 90% savings on domestic electricity bills with smart net-metering and sleek monocrystalline panels that elevate your home's architecture.",
    features: [
      "On-grid, Hybrid, and Off-grid configurations",
      "KSEB / State DISCOM Net-Metering approval handled end-to-end",
      "Tier-1 All-Black Monocrystalline PERC/TOPCon Panels",
      "Smartphone companion app for live solar generation tracking",
    ],
    specs: "3 kW to 15 kW Systems",
    idealFor: "Individual Homes, Villas, and Apartments",
    image: "/project-residential.jpg",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Solar",
    shortDesc: "Reduce operational costs and increase sustainability.",
    fullDesc:
      "Transform idle rooftop space into a profitable clean power asset. Our commercial rooftop installations deliver rapid payback, accelerated depreciation tax benefits, and stable predictable energy costs for businesses.",
    features: [
      "Commercial tariff cost reduction of up to 75%",
      "Engineered non-penetrative mounting structures for flat roofs",
      "High-efficiency three-phase commercial string inverters",
      "Custom safety walkways, life-lines, and lightning protection",
    ],
    specs: "20 kW to 250 kW Systems",
    idealFor: "Offices, Hospitals, Educational Campuses, Retail Malls",
    image: "/commercial-solar.jpg",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Solar",
    shortDesc: "Power your business for a brighter future.",
    fullDesc:
      "High-capacity solar infrastructure designed to withstand demanding industrial loads. Engineered for warehouses, manufacturing units, cold storage facilities, and processing plants with heavy daytime power demands.",
    features: [
      "Heavy load synchronization with existing HT transformers and DG sets",
      "Corrosion-resistant anodized aluminium & hot-dip galvanized racking",
      "SCADA-integrated cloud monitoring with automated fault alerts",
      "String-level diagnostics and automated solar cleaning system options",
    ],
    specs: "100 kW to Megawatt (MW) Scale",
    idealFor: "Manufacturing Plants, Warehouses, Cold Storage, Factories",
    image: "/industrial-solar.jpg",
  },
  {
    id: "water-heating",
    icon: Droplets,
    title: "Solar Water Heating",
    shortDesc: "Hot water, naturally.",
    fullDesc:
      "Zero-electricity hot water solutions utilizing advanced evacuated tube collector (ETC) technology and food-grade stainless steel storage tanks. Perfect for domestic use, hospitality, hostels, and hospitals.",
    features: [
      "High-efficiency Borosilicate 3.3 triple-layer evacuated glass tubes",
      "Pressurized and non-pressurized configurations for all water head heights",
      "High-density PUF insulation for 72+ hour heat retention overnight",
      "Backup electrical heating element with digital thermostat for monsoon season",
    ],
    specs: "100 LPD to 5,000+ LPD Capacities",
    idealFor: "Bungalows, Boutique Resorts, Hostels, and Clinics",
    image: "/solar-water-heater.jpg",
  },
];

interface ServicesProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D8E7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching the reference image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <div className="text-[12px] font-bold tracking-[0.2em] text-[#2878B5] uppercase mb-3">
              Our Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163B5C] tracking-tight leading-[1.18] mb-5">
              Smart Solar Solutions
              <br />
              for Every Space
            </h2>
            <p className="text-[16px] text-[#58758E] leading-relaxed mb-6">
              From homes to large-scale commercial projects, we design and deliver solar systems
              that fit your energy needs and budget.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D8E7F3] hover:border-[#2878B5] bg-[#F0F8FF] hover:bg-[#E4F2FC] text-[#163B5C] hover:text-[#2878B5] text-[14px] font-semibold transition-all group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: 4 Services Cards matching the reference layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer flex flex-col p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E7F3] hover:border-[#2878B5] hover:bg-[#F0F8FF]/50 transition-all duration-300 hover:shadow-sm"
                >
                  {/* Circular badge with Lucide icon */}
                  <div className="w-12 h-12 rounded-full bg-[#E4F2FC] group-hover:bg-[#2878B5] flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-[#2878B5] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-[16px] font-bold text-[#163B5C] group-hover:text-[#2878B5] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-[13px] text-[#58758E] leading-relaxed mb-4 flex-grow">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center text-[12px] font-semibold text-[#2878B5] pt-2 border-t border-[#D8E7F3]/60 group-hover:translate-x-0.5 transition-transform">
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Grid Feature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#D8E7F3]">
          <div className="p-6 rounded-2xl bg-[#F0F8FF] border border-[#D8E7F3]/70">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#2878B5] mb-1">
              Guaranteed Performance
            </div>
            <div className="text-xl font-bold text-[#163B5C] mb-2">25-Year Linear Warranty</div>
            <p className="text-sm text-[#58758E]">
              Tier-1 photovoltaic modules designed to deliver over 85% generation capacity even after
              a quarter of a century.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0F8FF] border border-[#D8E7F3]/70">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#34815B] mb-1">
              Govt. Subsidies & Approvals
            </div>
            <div className="text-xl font-bold text-[#163B5C] mb-2">Hassle-Free Net Metering</div>
            <p className="text-sm text-[#58758E]">
              We handle the entire DISCOM application, inspection documentation, meter replacement,
              and MNRE subsidy disbursement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0F8FF] border border-[#D8E7F3]/70">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#2878B5] mb-1">
              Engineering Precision
            </div>
            <div className="text-xl font-bold text-[#163B5C] mb-2">Wind Load Rated Structures</div>
            <p className="text-sm text-[#58758E]">
              Structural frameworks certified to withstand cyclone-level wind velocities up to 160
              km/h without rooftop punctures.
            </p>
          </div>
        </div>
      </div>

      {/* Service Detailed Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#102D46]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#D8E7F3] z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#D8E7F3]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E4F2FC] flex items-center justify-center">
                  <selectedService.icon className="w-5 h-5 text-[#2878B5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#163B5C]">{selectedService.title}</h3>
                  <span className="text-xs font-medium text-[#2878B5] bg-[#E4F2FC] px-2.5 py-0.5 rounded-full">
                    {selectedService.specs}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-[#58758E] hover:text-[#163B5C] rounded-full hover:bg-[#F0F8FF]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-[15px] text-[#58758E] leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div>
                <h4 className="text-sm font-bold text-[#163B5C] uppercase tracking-wider mb-2">
                  System Highlights & Engineering:
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#58758E]">
                      <CheckCircle2 className="w-4 h-4 text-[#34815B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F0F8FF] border border-[#D8E7F3] text-xs text-[#163B5C]">
                <strong className="text-[#2878B5]">Ideal For:</strong> {selectedService.idealFor}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenQuote(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-[#2878B5] hover:bg-[#1f659a] text-white font-semibold text-sm transition-colors text-center"
                >
                  Request Quote for {selectedService.title}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 rounded-full border border-[#D8E7F3] text-[#58758E] hover:text-[#163B5C] text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
