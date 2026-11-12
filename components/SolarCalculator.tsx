"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Zap, PiggyBank, Trees, CheckCircle2 } from "lucide-react";

interface SolarCalculatorProps {
  onOpenQuoteWithEstimate: (details: { bill: number; kw: number; savings: number; type: string }) => void;
}

export default function SolarCalculator({ onOpenQuoteWithEstimate }: SolarCalculatorProps) {
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [monthlyBill, setMonthlyBill] = useState<number>(6500);

  // Estimation formulas (based on standard solar yield ~4 kWh/kWp/day and average tariff)
  // Average residential tariff in Kerala / India ~ ₹7.5/unit; Commercial ~ ₹11/unit
  const ratePerUnit = propertyType === "residential" ? 7.8 : 11.2;
  const unitsConsumed = Math.round(monthlyBill / ratePerUnit);
  // 1 kW solar generates ~ 120 units per month
  const recommendedKW = Math.max(1, Math.min(100, Number((unitsConsumed / 120).toFixed(1))));
  
  // Monthly solar generation value
  const estimatedMonthlyUnits = Math.round(recommendedKW * 120);
  const estimatedMonthlySavings = Math.min(monthlyBill, Math.round(estimatedMonthlyUnits * ratePerUnit * 0.9));
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const lifetime25YearSavings = Math.round(estimatedAnnualSavings * 25 * 1.15); // taking into account tariff escalation
  const treesEquivalent = Math.round(recommendedKW * 18);
  const co2TonnesPerYear = Number((recommendedKW * 1.25).toFixed(1));

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#D8E7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F2FC] text-[#2878B5] text-[12px] font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163B5C] tracking-tight">
            Calculate Your Solar Savings & ROI
          </h2>
          <p className="text-[16px] text-[#58758E] mt-3">
            Slide your average monthly electricity bill to see the recommended system capacity,
            monthly bill reduction, and 25-year financial payoff.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#F0F8FF] border border-[#D8E7F3] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Property Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2.5">
                  1. Select Property Type
                </label>
                <div className="grid grid-cols-2 gap-3 bg-white p-1.5 rounded-2xl border border-[#D8E7F3]">
                  <button
                    type="button"
                    onClick={() => setPropertyType("residential")}
                    className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      propertyType === "residential"
                        ? "bg-[#2878B5] text-white shadow-xs"
                        : "text-[#58758E] hover:text-[#163B5C]"
                    }`}
                  >
                    Residential Villa / Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyType("commercial")}
                    className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      propertyType === "commercial"
                        ? "bg-[#2878B5] text-white shadow-xs"
                        : "text-[#58758E] hover:text-[#163B5C]"
                    }`}
                  >
                    Commercial / Business
                  </button>
                </div>
              </div>

              {/* Monthly Bill Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#163B5C]">
                    2. Average Monthly Power Bill
                  </label>
                  <span className="text-xl font-extrabold text-[#2878B5]">
                    ₹{monthlyBill.toLocaleString("en-IN")}
                  </span>
                </div>

                <input
                  type="range"
                  min={propertyType === "residential" ? 1500 : 8000}
                  max={propertyType === "residential" ? 35000 : 250000}
                  step={propertyType === "residential" ? 500 : 2000}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#D8E7F3] rounded-lg appearance-none cursor-pointer accent-[#2878B5]"
                />

                <div className="flex justify-between text-xs text-[#58758E] mt-2 font-medium">
                  <span>{propertyType === "residential" ? "₹1,500" : "₹8,000"}</span>
                  <span>{propertyType === "residential" ? "₹18,000" : "₹1,25,000"}</span>
                  <span>{propertyType === "residential" ? "₹35,000+" : "₹2,50,000+"}</span>
                </div>
              </div>

              {/* Quick Bill Preset Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs text-[#58758E] py-1">Quick Select:</span>
                {(propertyType === "residential"
                  ? [3000, 6500, 12000, 20000]
                  : [15000, 45000, 90000, 180000]
                ).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setMonthlyBill(val)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                      monthlyBill === val
                        ? "bg-[#2878B5] text-white border-[#2878B5]"
                        : "bg-white text-[#58758E] border-[#D8E7F3] hover:border-[#2878B5]"
                    }`}
                  >
                    ₹{val.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* What is included note */}
              <div className="space-y-2 pt-2 text-xs text-[#58758E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34815B]" />
                  <span>Includes Tier-1 Panels + Bi-directional Smart Net Metering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34815B]" />
                  <span>Eligible for Central PM Surya Ghar Subsidies up to ₹78,000</span>
                </div>
              </div>
            </div>

            {/* Right: Calculated Yield Cards */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#D8E7F3] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D8E7F3]">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#58758E]">
                      Recommended Solar Plant
                    </span>
                    <div className="text-3xl font-extrabold text-[#163B5C] mt-0.5">
                      {recommendedKW} kWp
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E4F2FC] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#2878B5]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 my-5">
                  <div className="p-4 rounded-xl bg-[#F0F8FF] border border-[#D8E7F3]/70">
                    <div className="text-xs text-[#58758E] mb-1">Est. Monthly Savings</div>
                    <div className="text-xl font-bold text-[#34815B]">
                      ₹{estimatedMonthlySavings.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[11px] text-[#58758E] mt-0.5">
                      ~₹{estimatedAnnualSavings.toLocaleString("en-IN")} / year
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F0F8FF] border border-[#D8E7F3]/70">
                    <div className="text-xs text-[#58758E] mb-1">25-Year Total Savings</div>
                    <div className="text-xl font-bold text-[#163B5C]">
                      ₹{(lifetime25YearSavings / 100000).toFixed(1)} Lakhs
                    </div>
                    <div className="text-[11px] text-[#58758E] mt-0.5">Adjusted for tariff rise</div>
                  </div>
                </div>

                {/* Environmental impact */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#E8F3EC] border border-[#34815B]/30 mb-6 text-xs text-[#102D46]">
                  <div className="flex items-center gap-2">
                    <Trees className="w-4 h-4 text-[#34815B]" />
                    <span>
                      Offsets <strong>{co2TonnesPerYear} tons</strong> of CO2 per year
                    </span>
                  </div>
                  <span className="font-semibold text-[#34815B]">🌿 {treesEquivalent} Trees / yr</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() =>
                  onOpenQuoteWithEstimate({
                    bill: monthlyBill,
                    kw: recommendedKW,
                    savings: estimatedMonthlySavings,
                    type: propertyType,
                  })
                }
                className="w-full py-3.5 px-6 rounded-full bg-[#2878B5] hover:bg-[#1f659a] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Claim This Quote for {recommendedKW} kWp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
