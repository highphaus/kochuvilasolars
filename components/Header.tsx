"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav indicator
      const sections = ["hero", "about", "services", "portfolio", "calculator", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projects", href: "#portfolio", id: "portfolio" },
    { label: "Calculator", href: "#calculator", id: "calculator" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-[#D8E7F3]/80 py-3 shadow-[0_4px_24px_rgba(12,35,60,0.06)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-[14.5px] font-medium text-[#4A657D]">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative py-1.5 transition-colors hover:text-[#0C233C] ${
                      isActive ? "text-[#0C233C] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0F67B1] to-[#38BDF8] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Get a Free Quote Button + Hamburger Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0F5298] to-[#1D74C2] hover:from-[#0C427B] hover:to-[#155FA0] text-white text-[13.5px] font-semibold transition-all shadow-sm hover:shadow-md transform active:scale-95 group cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Hamburger Button for mobile only (hidden on desktop) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2.5 rounded-full text-[#0C233C] hover:bg-[#E6F1FC] transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-[#0C233C]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / Side drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
