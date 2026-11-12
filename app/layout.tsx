import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kochuvila Solars — Clean Energy, Brighter Tomorrow",
  description:
    "Kochuvila Solars provides premium, reliable, high-performance solar solutions for homes, businesses, and industrial facilities. Sunlight today. Savings tomorrow.",
  keywords: [
    "solar energy",
    "Kochuvila Solars",
    "residential solar",
    "commercial rooftop solar",
    "solar water heating",
    "clean energy Kerala",
    "solar panel installation",
  ],
  authors: [{ name: "Kochuvila Solars" }],
  openGraph: {
    title: "Kochuvila Solars — Sunlight Today. Savings Tomorrow.",
    description:
      "Reliable, high-performance solar solutions for homes and businesses. Make the most of every sunny day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${caveat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F0F8FF] text-[#102D46] antialiased selection:bg-[#2878B5] selection:text-white">
        {children}
      </body>
    </html>
  );
}
