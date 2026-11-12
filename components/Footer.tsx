"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Sun, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#102D46] text-white pt-16 pb-12 border-t border-[#163B5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-[#D6EAF8]/80 leading-relaxed max-w-sm pt-2">
              Kochuvila Solars is dedicated to delivering durable, high-efficiency solar energy
              systems. From residential rooftop arrays to megawatt industrial projects, we help you
              harness everyday sunlight for decades of clean savings.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E8F3EC]">
              <ShieldCheck className="w-4 h-4 text-[#34815B]" />
              <span>Govt. Empaneled • Tier-1 Photovoltaic Quality</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6EAF8] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D6EAF8]/75">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Solar Solutions
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Solar Savings Estimator
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Solar Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6EAF8] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D6EAF8]/75">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Residential Rooftop Solar
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial Net-Metered Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Industrial Mega-Arrays
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Solar Water Heating (ETC)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Subsidies & Net-Metering
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D6EAF8] mb-4">
              Regional Office
            </h4>
            <div className="space-y-3 text-xs text-[#D6EAF8]/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2878B5] shrink-0 mt-0.5" />
                <span>
                  Renewable Energy Plaza, NH Bypass, Trivandrum / Kollam, Kerala
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2878B5] shrink-0" />
                <a href="tel:+919447012345" className="hover:text-white transition-colors">
                  +91 94470 12345
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2878B5] shrink-0" />
                <a
                  href="mailto:enquiry@kochuvilasolars.com"
                  className="hover:text-white transition-colors"
                >
                  enquiry@kochuvilasolars.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2878B5] hover:text-white transition-colors"
                >
                  <span>Request Free Site Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D6EAF8]/60 gap-4">
          <p>© 2026 Kochuvila Solars. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
