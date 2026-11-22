"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Brand Logo */}
      <div
        className={`relative w-10 h-10 flex items-center justify-center shrink-0 overflow-hidden rounded-lg ${
          isLight ? "bg-white p-0.5" : ""
        }`}
      >
        <Image
          src="/logo/kochuvila-logo.png"
          alt="Kochuvila Solars Logo"
          width={40}
          height={40}
          priority
          className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
            isLight ? "" : "mix-blend-multiply"
          }`}
        />
      </div>

      {/* Typography: "Kochuvila" and "Solars" */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-display text-[20px] font-bold tracking-tight ${
            isLight ? "text-white" : "text-[#0C233C]"
          }`}
        >
          Kochuvila
        </span>
        <span
          className={`text-[11.5px] font-semibold uppercase tracking-[0.18em] mt-0.5 ${
            isLight ? "text-[#93C5FD]" : "text-[#0F67B1]"
          }`}
        >
          Solars
        </span>
      </div>
    </Link>
  );
}
