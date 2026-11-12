"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SolarHighlightBanner from "@/components/SolarHighlightBanner";
import Portfolio from "@/components/Portfolio";
import SolarCalculator from "@/components/SolarCalculator";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);
  const [initialContactData, setInitialContactData] = useState<{
    serviceTitle?: string;
    projectName?: string;
    bill?: number;
    kw?: number;
    savings?: number;
    type?: string;
  } | null>(null);

  // Handler when clicking "Get a Free Quote"
  const handleOpenQuote = (serviceTitle?: string) => {
    setPresetService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  // Handler when clicking "Claim Quote" from Solar Calculator
  const handleCalculatorQuote = (details: {
    bill: number;
    kw: number;
    savings: number;
    type: string;
  }) => {
    setInitialContactData(details);
    // Smoothly scroll to the Contact Section
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler when clicking "Inquire About Similar Setup" from Portfolio
  const handlePortfolioQuote = (projectName?: string) => {
    setInitialContactData({ projectName });
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F0F8FF] text-[#102D46] selection:bg-[#2878B5] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Hero Section matching reference image */}
      <Hero
        onOpenQuote={() => handleOpenQuote()}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Solar Solutions Section matching reference image */}
      <Services onOpenQuote={handleOpenQuote} />

      {/* Angled Solar Panel Highlight Banner */}
      <SolarHighlightBanner />

      {/* Solar Portfolio & Project Showcase */}
      <Portfolio onOpenQuote={handlePortfolioQuote} />

      {/* Interactive Solar Savings & ROI Calculator */}
      <SolarCalculator onOpenQuoteWithEstimate={handleCalculatorQuote} />

      {/* About Kochuvila Solars */}
      <About onOpenQuote={() => handleOpenQuote()} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section with Office Location & Email Enquiry */}
      <Contact initialData={initialContactData} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        presetService={presetService}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />
    </main>
  );
}
