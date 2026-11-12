"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Sun } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function QuoteModal({ isOpen, onClose, presetService }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(presetService || "Residential Solar");
  const [monthlyBill, setMonthlyBill] = useState("₹5,000 - ₹10,000");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 800);
  };

  const handleClose = () => {
    setIsDone(false);
    setName("");
    setPhone("");
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102D46]/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl border border-[#D8E7F3] shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#D8E7F3]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E4F2FC] flex items-center justify-center text-[#2878B5]">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#163B5C]">Get a Free Solar Quote</h3>
              <p className="text-xs text-[#58758E]">Fast feasibility report & savings estimate</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-[#58758E] hover:text-[#163B5C] rounded-full hover:bg-[#F0F8FF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDone ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E8F3EC] text-[#34815B] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#163B5C]">Quote Request Received!</h4>
            <p className="text-xs text-[#58758E] max-w-xs mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our solar engineer will review your details and
              reach out at <strong>{phone}</strong> within 2 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-[#2878B5] text-white text-xs font-semibold hover:bg-[#1f659a] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Thomas Mathew"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] outline-none text-xs text-[#163B5C] bg-[#F0F8FF]/30"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] outline-none text-xs text-[#163B5C] bg-[#F0F8FF]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="thomas@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] outline-none text-xs text-[#163B5C] bg-[#F0F8FF]/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-1.5">
                  System Type
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] outline-none text-xs text-[#163B5C] bg-[#F0F8FF]/30"
                >
                  <option value="Residential Solar">Residential Solar</option>
                  <option value="Commercial Solar">Commercial Solar</option>
                  <option value="Industrial Solar">Industrial Solar</option>
                  <option value="Solar Water Heating">Solar Water Heating</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-1.5">
                  Monthly Power Bill
                </label>
                <select
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] outline-none text-xs text-[#163B5C] bg-[#F0F8FF]/30"
                >
                  <option value="Under ₹3,000">Under ₹3,000</option>
                  <option value="₹3,000 - ₹6,000">₹3,000 - ₹6,000</option>
                  <option value="₹6,000 - ₹12,000">₹6,000 - ₹12,000</option>
                  <option value="₹12,000 - ₹25,000">₹12,000 - ₹25,000</option>
                  <option value="Over ₹25,000">Over ₹25,000</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-full bg-[#2878B5] hover:bg-[#1f659a] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Proposal...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Free Custom Quote</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#58758E] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34815B]" />
              <span>Includes 100% Free On-Site Shadow Analysis</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
