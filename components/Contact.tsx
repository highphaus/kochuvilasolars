"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Shield,
  MessageSquare,
  ExternalLink,
  RotateCcw,
} from "lucide-react";

interface InitialQuoteData {
  serviceTitle?: string;
  projectName?: string;
  bill?: number;
  kw?: number;
  savings?: number;
  type?: string;
}

interface ContactProps {
  initialData?: InitialQuoteData | null;
}

export default function Contact({ initialData }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Residential Solar",
    monthlyBill: "₹5,000 - ₹10,000",
    roofType: "RCC Flat Concrete Roof",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    timestamp: string;
    name: string;
    phone: string;
    serviceType: string;
  } | null>(null);

  // Sync initialData if received from calculator or project inquiry
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialData.serviceTitle || (initialData.type === "commercial" ? "Commercial Solar" : "Residential Solar"),
        monthlyBill: initialData.bill ? `₹${initialData.bill.toLocaleString("en-IN")}` : prev.monthlyBill,
        message: initialData.projectName
          ? `I am interested in an installation similar to your project: ${initialData.projectName}.`
          : initialData.kw
          ? `Estimated system size: ${initialData.kw} kWp with estimated savings of ₹${initialData.savings?.toLocaleString("en-IN")}/month. Please provide a detailed site assessment.`
          : prev.message,
      }));
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email inquiry to enquiry@kochuvilasolars.com
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `KS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({
        id: ticketId,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        name: formData.name,
        phone: formData.phone,
        serviceType: formData.serviceType,
      });
    }, 900);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "Residential Solar",
      monthlyBill: "₹5,000 - ₹10,000",
      roofType: "RCC Flat Concrete Roof",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F0F8FF] border-t border-[#D8E7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[12px] font-bold tracking-[0.2em] text-[#2878B5] uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163B5C] tracking-tight">
            Ready to Make the Switch to Solar?
          </h2>
          <p className="text-[16px] text-[#58758E] mt-3">
            Let's find the right solar solution for your home or business. Reach out to our technical
            consultants or visit our regional office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office Location, Contacts, and Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Info Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#D8E7F3] shadow-sm">
              <h3 className="text-xl font-bold text-[#163B5C] mb-6 flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#2878B5]" />
                <span>Office Location & Contact</span>
              </h3>

              <div className="space-y-6">
                {/* Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F2FC] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#2878B5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#163B5C]">
                      Main Office Address
                    </h4>
                    <p className="text-sm text-[#58758E] mt-1 leading-relaxed">
                      <strong>Kochuvila Solars Energy Hub</strong>
                      <br />
                      2nd Floor, Renewable Energy Plaza,
                      <br />
                      National Highway Bypass, Near Technopark,
                      <br />
                      Trivandrum / Kollam, Kerala – 695024
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F2FC] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#2878B5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#163B5C]">
                      Contact Numbers
                    </h4>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href="tel:+919447012345"
                          className="text-sm font-semibold text-[#163B5C] hover:text-[#2878B5] transition-colors"
                        >
                          +91 94470 12345 (Sales & Site Surveys)
                        </a>
                      </div>
                      <div>
                        <a
                          href="tel:+914712345678"
                          className="text-sm text-[#58758E] hover:text-[#2878B5] transition-colors"
                        >
                          +91 471 2345678 (Technical Support Desk)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Inquiries */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F2FC] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#2878B5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#163B5C]">
                      Email Enquiries
                    </h4>
                    <div className="mt-1 space-y-1">
                      <div>
                        <a
                          href="mailto:enquiry@kochuvilasolars.com"
                          className="text-sm font-semibold text-[#2878B5] hover:underline"
                        >
                          enquiry@kochuvilasolars.com
                        </a>
                      </div>
                      <div className="text-xs text-[#58758E]">
                        support@kochuvilasolars.com
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F2FC] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#2878B5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#163B5C]">
                      Working Hours
                    </h4>
                    <p className="text-sm text-[#58758E] mt-1 leading-relaxed">
                      Monday – Saturday: <strong>8:30 AM – 6:30 PM</strong>
                      <br />
                      Sunday: <em>Emergency Technical On-Call</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-[#D8E7F3]">
                <a
                  href="https://wa.me/919447012345?text=Hello%20Kochuvila%20Solars,%20I%20would%20like%20to%20enquire%20about%20a%20solar%20installation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-[#E8F3EC] hover:bg-[#d6ecdE] text-[#34815B] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Stylized Map Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D8E7F3] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#163B5C]">
                  Location Map & Directions
                </span>
                <span className="text-xs text-[#34815B] font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#34815B] animate-ping" />
                  Open Today
                </span>
              </div>

              {/* Map Canvas Graphic */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-br from-[#E4F2FC] to-[#D6EAF8] border border-[#D8E7F3] p-4 flex flex-col justify-between overflow-hidden">
                {/* Decorative map grid lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#2878B5_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#163B5C] bg-white/90 px-2.5 py-1 rounded-lg shadow-2xs">
                    Trivandrum Bypass • NH 66
                  </span>
                  <span className="text-[11px] font-medium text-[#58758E] bg-white/90 px-2 py-0.5 rounded-md">
                    2.4 km from Tech Hub
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#D8E7F3] shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#2878B5] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#163B5C]">Kochuvila Solars Headquarters</div>
                    <div className="text-[#58758E]">Rooftop Demo & Consultation Studio</div>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Kochuvila+Solars+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-xs font-semibold text-[#2878B5] hover:underline"
              >
                Open in Google Maps for Driving Directions →
              </a>
            </div>
          </div>

          {/* Right Column: Full Email Enquiry & Free Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#D8E7F3] shadow-lg">
              {submittedTicket ? (
                /* Successful Submission Ticket State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8F3EC] text-[#34815B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#34815B] bg-[#E8F3EC] px-3 py-1 rounded-full">
                      Enquiry Successfully Received
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#163B5C] mt-3">
                      Thank You, {submittedTicket.name}!
                    </h3>
                    <p className="text-sm text-[#58758E] max-w-md mx-auto mt-2">
                      Your solar project enquiry has been registered directly with our engineering team.
                      A solar site engineer will call you shortly to discuss your custom proposal.
                    </p>
                  </div>

                  {/* Reference Ticket Card */}
                  <div className="p-5 rounded-2xl bg-[#F0F8FF] border border-[#D8E7F3] text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between pb-2 border-b border-[#D8E7F3]">
                      <span className="text-[#58758E]">Reference Ticket ID:</span>
                      <strong className="text-[#2878B5] font-mono text-sm">{submittedTicket.id}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#58758E]">Selected Service:</span>
                      <span className="font-semibold text-[#163B5C]">{submittedTicket.serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#58758E]">Contact Registered:</span>
                      <span className="font-semibold text-[#163B5C]">{submittedTicket.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#58758E]">Submission Time:</span>
                      <span className="text-[#163B5C]">{submittedTicket.timestamp}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D8E7F3] text-xs font-semibold text-[#163B5C] hover:bg-[#F0F8FF] transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#163B5C] tracking-tight">
                      Send an Email Enquiry or Request a Quote
                    </h3>
                    <p className="text-sm text-[#58758E] mt-1">
                      Fill out your details below and we will send a tailored feasibility report.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Varma"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anand@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                        System of Interest
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30 cursor-pointer"
                      >
                        <option value="Residential Solar">Residential Solar (Home / Villa)</option>
                        <option value="Commercial Solar">Commercial Rooftop (Offices / Retail)</option>
                        <option value="Industrial Solar">Industrial Plant (Factory / Warehouse)</option>
                        <option value="Solar Water Heating">Solar Water Heating System</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Monthly Power Bill */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                        Average Monthly Power Bill
                      </label>
                      <select
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30 cursor-pointer"
                      >
                        <option value="Under ₹3,000">Under ₹3,000 / month</option>
                        <option value="₹3,000 - ₹6,000">₹3,000 - ₹6,000 / month</option>
                        <option value="₹6,000 - ₹12,000">₹6,000 - ₹12,000 / month</option>
                        <option value="₹12,000 - ₹25,000">₹12,000 - ₹25,000 / month</option>
                        <option value="₹25,000 - ₹75,000">₹25,000 - ₹75,000 / month</option>
                        <option value="Over ₹75,000 (Commercial/HT)">Over ₹75,000 (Commercial/HT)</option>
                      </select>
                    </div>

                    {/* Roof Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                        Rooftop / Installation Type
                      </label>
                      <select
                        value={formData.roofType}
                        onChange={(e) => setFormData({ ...formData, roofType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30 cursor-pointer"
                      >
                        <option value="RCC Flat Concrete Roof">RCC Flat Concrete Roof</option>
                        <option value="Sloped Tile Roof">Sloped Tile Roof (Kerala Style)</option>
                        <option value="Metal Sheet / Shed Roof">Metal Sheet / Truss Shed Roof</option>
                        <option value="Elevated Terrace Canopy">Elevated Terrace Canopy Structure</option>
                        <option value="Open Ground Mount">Open Ground Mount</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#163B5C] mb-2">
                      Additional Details / Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your rooftop area (sq ft), current power cuts, or specific expectations..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D8E7F3] focus:border-[#2878B5] focus:ring-2 focus:ring-[#2878B5]/20 outline-none text-sm text-[#163B5C] transition-all bg-[#F0F8FF]/30 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#2878B5] hover:bg-[#1f659a] text-white font-semibold text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Dispatching Your Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Email Enquiry & Request Free Site Survey</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#58758E] pt-1">
                    <Shield className="w-3.5 h-3.5 text-[#34815B]" />
                    <span>Your contact details are kept strictly private. Zero spam guaranteed.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
