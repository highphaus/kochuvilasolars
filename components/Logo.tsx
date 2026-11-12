"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Sun + Solar Panel Icon matching reference */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Sun Rays radiating outwards */}
          <line x1="24" y1="4" x2="24" y2="9" stroke="#2878B5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38.14" y1="9.86" x2="34.61" y2="13.39" stroke="#2878B5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="44" y1="24" x2="39" y2="24" stroke="#2878B5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="4" y1="24" x2="9" y2="24" stroke="#2878B5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="9.86" y1="9.86" x2="13.39" y2="13.39" stroke="#2878B5" strokeWidth="2.5" strokeLinecap="round" />

          {/* Sun Upper Half Arc */}
          <path
            d="M13 24C13 17.9249 17.9249 13 24 13C30.0751 13 35 17.9249 35 24"
            stroke="#2878B5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Lower Half: Angled Solar PV Grid */}
          <g transform="translate(10, 24)">
            {/* Solar Panel Base Perspective Quadrilateral */}
            <path
              d="M4 18L9 2H23L27 18H4Z"
              fill="#2878B5"
              fillOpacity="0.15"
              stroke="#2878B5"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Internal grid cells */}
            <line x1="7" y1="10" x2="25" y2="10" stroke="#2878B5" strokeWidth="1.5" />
            <line x1="13.5" y1="2" x2="11.5" y2="18" stroke="#2878B5" strokeWidth="1.5" />
            <line x1="18.5" y1="2" x2="19.5" y2="18" stroke="#2878B5" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Typography: "Kochuvila" and "Solars" */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`text-[19px] font-bold tracking-tight ${
            isLight ? "text-white" : "text-[#163B5C]"
          }`}
        >
          Kochuvila
        </span>
        <span
          className={`text-[13px] font-medium tracking-wide mt-0.5 ${
            isLight ? "text-[#D6EAF8]" : "text-[#58758E]"
          }`}
        >
          Solars
        </span>
      </div>
    </Link>
  );
}
