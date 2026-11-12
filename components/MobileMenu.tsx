"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, Mail, MapPin, ArrowRight, Sun, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenQuote }: MobileMenuProps) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio Projects", href: "#portfolio" },
    { label: "Savings Calculator", href: "#calculator" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact & Enquiry", href: "#contact" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102D46]/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div className="relative z-10 w-full max-w-sm bg-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between border-l border-[#D8E7F3] p-6 sm:p-8 overflow-y-auto">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D8E7F3]">
            <Logo />
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#163B5C] hover:bg-[#F0F8FF] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="py-3 px-4 rounded-xl text-[16px] font-medium text-[#163B5C] hover:text-[#2878B5] hover:bg-[#F0F8FF] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#58758E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Contact / CTA */}
        <div className="pt-6 border-t border-[#D8E7F3] space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#2878B5] hover:bg-[#1f659a] text-white font-medium shadow-sm transition-colors"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick contact details */}
          <div className="space-y-2.5 pt-2 text-sm text-[#58758E]">
            <a
              href="tel:+919447012345"
              className="flex items-center gap-3 hover:text-[#2878B5] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#2878B5]" />
              <span>+91 94470 12345 / +91 471 2345678</span>
            </a>
            <a
              href="mailto:enquiry@kochuvilasolars.com"
              className="flex items-center gap-3 hover:text-[#2878B5] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#2878B5]" />
              <span>enquiry@kochuvilasolars.com</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#2878B5] shrink-0 mt-0.5" />
              <span>Kochuvila Solars, Renewable Plaza, Kerala</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#58758E] pt-2">
            <ShieldCheck className="w-4 h-4 text-[#34815B]" />
            <span>Govt. Approved & MNRE Certified Solar Provider</span>
          </div>
        </div>
      </div>
    </div>
  );
}
