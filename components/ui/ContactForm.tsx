"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Check, Send } from "lucide-react";

const perks = [
  "Free estimates on all jobs",
  "Convenient pickup & delivery",
  "Quality guaranteed on every project",
  "15+ years of experience",
];

const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#1e2a6e] py-20 ">
      <div className="px-6 max-w-5xl mx-auto">

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white flex flex-col gap-6"
        >
          {/* Phone badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">
            <Phone className="h-3.5 w-3.5" />
            Call Us: 812-277-6130
          </div>

          <h2 className="text-4xl font-extrabold leading-tight">
            Ready to Get Started?
          </h2>

          <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
            Free estimates on all jobs. We make the process easy with pick up and delivery available.
          </p>

          {/* Perks */}
          <ul className="flex flex-col gap-3 mt-2">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 shrink-0">
                  <Check className="h-3 w-3 text-white" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-5"
        >
          <h3 className="text-lg font-bold text-gray-900">Request Your Free Estimate</h3>

          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
            <input
              type="text"
              placeholder="John Smith"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="(812) 555-0123"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Tell Us About Your Project</label>
            <textarea
              rows={4}
              placeholder="I'm looking to have my kitchen cabinets refinished..."
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#1e2a6e] text-white font-semibold text-sm py-3 rounded-lg hover:bg-[#16205a] transition"
          >
            <Send className="h-4 w-4" />
            Request My Free Estimate
          </button>

          <p className="text-center text-xs text-gray-400">We typically respond within 24 hours</p>
        </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;