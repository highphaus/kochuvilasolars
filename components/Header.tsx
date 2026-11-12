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
            ? "bg-[#F0F8FF]/90 backdrop-blur-md border-b border-[#D8E7F3]/80 py-3 shadow-xs"
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
            <nav className="hidden md:flex items-center space-x-8 text-[14.5px] font-medium text-[#58758E]">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative py-1 transition-colors hover:text-[#163B5C] ${
                      isActive ? "text-[#163B5C] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2878B5] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Get a Free Quote Button + Hamburger Menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b5d92] hover:bg-[#2878B5] text-white text-[13.5px] font-semibold transition-all shadow-xs hover:shadow-md transform active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Hamburger Button for mobile and desktop side drawer */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-full text-[#163B5C] hover:bg-[#E4F2FC] transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-[#163B5C]" />
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
