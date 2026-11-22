"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, X, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "residential" | "commercial" | "industrial" | "water-heating";
  categoryLabel: string;
  capacity: string;
  location: string;
  year: string;
  image: string;
  summary: string;
  billReduction: string;
  co2Offset: string;
  systemSpecs: {
    panels: string;
    inverter: string;
    structure: string;
    metering: string;
  };
  clientQuote?: string;
}

const portfolioProjects: Project[] = [
  {
    id: "coastal-villa-12kw",
    title: "Greenfield Heritage Villa",
    category: "residential",
    categoryLabel: "Residential Solar",
    capacity: "12 kW Grid-Tied",
    location: "Kowdiar, Trivandrum",
    year: "2025",
    image: "/kerala-residential-solar.jpg",
    summary:
      "Full rooftop grid-tied solar system with monocrystalline panels seamlessly integrated with Kerala clay-tile pitched architecture. Covers home air conditioning and EV charging requirements.",
    billReduction: "88% Monthly Bill Cut",
    co2Offset: "14.2 Tons / Year",
    systemSpecs: {
      panels: "22x 550W Tier-1 Bi-facial Monocrystalline PERC",
      inverter: "12kW Three-Phase Hybrid Smart Inverter",
      structure: "Custom anodized aluminium elevated rails",
      metering: "KSEB Bi-directional Net Metering approved",
    },
    clientQuote:
      "Our monthly power bills dropped from ₹14,500 to the minimum tariff fee of just ₹380. Kochuvila Solars handled the entire government liaison effortlessly.",
  },
  {
    id: "tech-park-150kw",
    title: "Apex IT & Corporate Campus",
    category: "commercial",
    categoryLabel: "Commercial Solar",
    capacity: "150 kW Rooftop Array",
    location: "Technopark Phase III, Trivandrum",
    year: "2025",
    image: "/kerala-commercial-solar.jpg",
    summary:
      "Commercial non-penetrative solar deployment spanning IT corporate rooftops. Provides daylight peak power offset for server rooms, HVAC chillers, and workstation lighting.",
    billReduction: "72% Peak Tariff Cut",
    co2Offset: "185 Tons / Year",
    systemSpecs: {
      panels: "275x 545W High-Efficiency Monocrystalline modules",
      inverter: "2x 75kW Commercial String Inverters with SCADA",
      structure: "Ballasted non-penetrative aerodynamic framing",
      metering: "11kV HT Interconnection with net-export sync",
    },
    clientQuote:
      "Payback period calculated at under 3.2 years with accelerated depreciation benefits. Kochuvila's engineering team exceeded all safety milestones.",
  },
  {
    id: "logistics-hub-350kw",
    title: "Southern Logistics & Cold Storage",
    category: "industrial",
    categoryLabel: "Industrial Solar",
    capacity: "350 kW Megawatt Unit",
    location: "Industrial Corridor, Kochi",
    year: "2024",
    image: "/industrial-solar.jpg",
    summary:
      "Large-scale industrial solar installation on pre-engineered steel building roofs with dedicated high-load balancing to power refrigeration and cold storage compressors during peak sun hours.",
    billReduction: "₹28.5 Lakhs Annual Savings",
    co2Offset: "410 Tons / Year",
    systemSpecs: {
      panels: "640x 550W Dual-Glass Anti-Soiling PV Modules",
      inverter: "4x 100kW Industrial Inverters with cloud telemetry",
      structure: "Direct standing-seam clamp system (zero drill)",
      metering: "HT Dual-Circuit Net-Meter with power factor tuning",
    },
    clientQuote:
      "Reliability is mission-critical for cold storage. This system runs synchronously with our backup generators without a microsecond of fluctuation.",
  },
  {
    id: "modern-residence-8kw",
    title: "Skyline Kerala Villa",
    category: "residential",
    categoryLabel: "Residential Solar",
    capacity: "8 kW Rooftop Solar",
    location: "Kollam Beach Road",
    year: "2025",
    image: "/hero-kerala-solar.jpg",
    summary:
      "Contemporary Kerala villa with sloping tile architecture and elevated solar array. Engineered to withstand maritime salty air and heavy Kerala monsoon rains.",
    billReduction: "92% Grid Reliance Reduced",
    co2Offset: "9.8 Tons / Year",
    systemSpecs: {
      panels: "15x 540W Marine-grade Anti-Corrosion PV Modules",
      inverter: "8kW Hybrid Inverter with 10kWh Lithium Battery",
      structure: "Marine-grade 6063-T6 Aluminium Racking",
      metering: "Single-phase KSEB Net Meter with Auto-Island",
    },
  },
  {
    id: "eco-resort-water-heating",
    title: "Backwater Heritage Resort",
    category: "water-heating",
    categoryLabel: "Solar Water Heating",
    capacity: "2,000 LPD Central System",
    location: "Kumarakom Backwaters",
    year: "2024",
    image: "/kerala-resort-solar.jpg",
    summary:
      "Centralized solar energy installation providing hot water and green electricity to luxury cottages and resort spa without consuming grid electricity or LPG gas.",
    billReduction: "100% Water Heating Power Replaced",
    co2Offset: "22 Tons / Year",
    systemSpecs: {
      panels: "8x 250 LPD Triple-Layer Evacuated Tube Collectors",
      inverter: "Digital Thermostatic Booster & Auto Circulator",
      structure: "Food-grade SUS304 Stainless Steel Inner Tanks",
      metering: "Zero Electric Draw during 95% of the year",
    },
    clientQuote:
      "Guests love the natural hot water and our green footprint score improved dramatically, earning us eco-tourism certification.",
  },
];

interface PortfolioProps {
  onOpenQuote: (projectName?: string) => void;
}

export default function Portfolio({ onOpenQuote }: PortfolioProps) {
  const [filter, setFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const atStart = el.scrollLeft <= 8;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 8;
    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);

    // Calculate which item is currently frontmost
    const card = el.firstElementChild as HTMLElement | null;
    if (card) {
      const cardWidth = card.offsetWidth + 24; // width + gap
      const newIdx = Math.round(el.scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, newIdx), filteredProjects.length - 1));
    }
  }, [filteredProjects.length]);

  useEffect(() => {
    updateScrollState();
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateScrollState, filter]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 24 : 380;
    el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 24 : 380;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = el.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#F5F9FD] border-t border-[#D8E7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-[12px] font-bold tracking-[0.2em] text-[#0F67B1] uppercase mb-3">
              Proven Track Record
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0C233C] tracking-tight">
              Solar Solutions in Action
            </h2>
            <p className="text-[16px] text-[#4A657D] mt-3 max-w-xl">
              Explore our real completed installations across residential homes, commercial
              rooftops, and industrial plants. Built for maximum yield and longevity.
            </p>
          </div>

          {/* Carousel Next/Prev Controls & Slide Counter */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono font-semibold text-[#4A657D] pr-1">
              <span className="text-[#0C233C] font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              <span>{String(filteredProjects.length).padStart(2, "0")}</span>
            </span>
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              className={`w-11 h-11 rounded-full border border-[#D8E7F3] flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white text-[#0C233C] hover:bg-[#E6F1FC] hover:border-[#0F67B1] hover:text-[#0F67B1] cursor-pointer shadow-2xs active:scale-95"
                  : "bg-white/40 text-[#D8E7F3] cursor-not-allowed border-[#D8E7F3]/60"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight}
              aria-label="Next project"
              className={`w-11 h-11 rounded-full border border-[#D8E7F3] flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-white text-[#0C233C] hover:bg-[#E6F1FC] hover:border-[#0F67B1] hover:text-[#0F67B1] cursor-pointer shadow-2xs active:scale-95"
                  : "bg-white/40 text-[#D8E7F3] cursor-not-allowed border-[#D8E7F3]/60"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
          {[
            { id: "all", label: "All Projects" },
            { id: "residential", label: "Residential" },
            { id: "commercial", label: "Commercial" },
            { id: "industrial", label: "Industrial" },
            { id: "water-heating", label: "Water Heating" },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => handleFilterChange(btn.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer select-none active:scale-95 ${
                filter === btn.id
                  ? "bg-[#0F67B1] text-white shadow-sm ring-2 ring-[#0F67B1]/20"
                  : "bg-white text-[#4A657D] hover:text-[#0C233C] hover:bg-[#E6F1FC] border border-[#D8E7F3]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Carousel Scroll Track */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[360px] lg:w-[390px] group bg-white rounded-2xl overflow-hidden border border-[#D8E7F3] hover:border-[#0F67B1]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(15,103,177,0.18)] flex flex-col select-none"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E6F1FC]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 88vw, (max-width: 1200px) 360px, 390px"
                />
                {/* Capacity badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#0C233C] border border-[#D8E7F3] shadow-xs">
                  {project.capacity}
                </div>
                {/* Category tag */}
                <div className="absolute top-4 right-4 bg-[#0C233C]/85 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-[#4A657D] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0F67B1]" />
                  <span>{project.location}</span>
                  <span className="text-[#D8E7F3]">•</span>
                  <span>Completed {project.year}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#0C233C] group-hover:text-[#0F67B1] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[#4A657D] line-clamp-2 leading-relaxed mb-4 flex-grow">
                  {project.summary}
                </p>

                {/* Key Metrics Pill */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#F5F9FD] border border-[#D8E7F3]/70 mb-5 text-xs">
                  <div>
                    <span className="text-[#4A657D] block text-[11px]">Bill Reduction</span>
                    <strong className="text-[#168052] font-semibold">{project.billReduction}</strong>
                  </div>
                  <div>
                    <span className="text-[#4A657D] block text-[11px]">Carbon Offset</span>
                    <strong className="text-[#0C233C] font-semibold">{project.co2Offset}</strong>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#D8E7F3] group-hover:border-[#0F67B1] group-hover:bg-[#E6F1FC]/50 text-xs font-semibold text-[#0C233C] group-hover:text-[#0F67B1] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>View Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#0F67B1]"
                  : "w-2 bg-[#D8E7F3] hover:bg-[#4A657D]/40"
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner with CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-[#D8E7F3] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-display text-xl font-bold text-[#0C233C]">
              Have a similar rooftop or commercial facility?
            </h4>
            <p className="text-sm text-[#4A657D] mt-1">
              We conduct customized drone-based shadow simulations and site assessments at zero cost.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#0F5298] to-[#1D74C2] hover:from-[#0C427B] hover:to-[#155FA0] text-white font-semibold text-sm transition-all shadow-xs cursor-pointer"
          >
            Request Free Site Assessment
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#102D46]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#D8E7F3] z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#D8E7F3]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F67B1] bg-[#E6F1FC] px-2.5 py-0.5 rounded-full">
                  {activeProject.capacity}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0C233C] mt-2">
                  {activeProject.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#4A657D] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0F67B1]" />
                  <span>{activeProject.location}</span>
                  <span>•</span>
                  <span>Commissioned {activeProject.year}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-2 text-[#4A657D] hover:text-[#0C233C] rounded-full hover:bg-[#F5F9FD]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-[#4A657D] leading-relaxed">
                {activeProject.summary}
              </p>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C233C] mb-3">
                  Technical System Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#F5F9FD] border border-[#D8E7F3]">
                    <span className="text-[#4A657D] block mb-1">Solar PV Modules</span>
                    <strong className="text-[#0C233C] font-medium">
                      {activeProject.systemSpecs.panels}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F9FD] border border-[#D8E7F3]">
                    <span className="text-[#4A657D] block mb-1">Inverter & Telemetry</span>
                    <strong className="text-[#0C233C] font-medium">
                      {activeProject.systemSpecs.inverter}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F9FD] border border-[#D8E7F3]">
                    <span className="text-[#4A657D] block mb-1">Mounting Structure</span>
                    <strong className="text-[#0C233C] font-medium">
                      {activeProject.systemSpecs.structure}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F9FD] border border-[#D8E7F3]">
                    <span className="text-[#4A657D] block mb-1">Grid Connection</span>
                    <strong className="text-[#0C233C] font-medium">
                      {activeProject.systemSpecs.metering}
                    </strong>
                  </div>
                </div>
              </div>

              {activeProject.clientQuote && (
                <div className="p-4 rounded-xl bg-[#E6F6EE] border border-[#168052]/30 text-xs italic text-[#0C233C]">
                  "{activeProject.clientQuote}"
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = activeProject.title;
                    setActiveProject(null);
                    onOpenQuote(title);
                  }}
                  className="flex-1 py-3 px-6 rounded-full bg-gradient-to-r from-[#0F5298] to-[#1D74C2] hover:from-[#0C427B] hover:to-[#155FA0] text-white font-semibold text-sm transition-all text-center cursor-pointer"
                >
                  Inquire About Similar Setup
                </button>
                <button
                  onClick={() => setActiveProject(null)}
                  className="py-3 px-6 rounded-full border border-[#D8E7F3] text-[#4A657D] hover:text-[#0C233C] text-sm font-semibold transition-colors cursor-pointer"
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
