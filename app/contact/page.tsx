"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";

const perks = [
  "Free estimates, no obligation",
  "Convenient pickup & delivery",
  "Serving Bedford & Lawrence County",
  "15+ years of fine finishing experience",
];

const contactCards = [
  { icon: Phone, label: "Phone", value: "812-277-6130", sub: "Opens 7 AM daily" },
  { icon: Mail, label: "Email", value: "mullisfinishingllc@gmail.com", sub: null },
  { icon: MapPin, label: "Location", value: "3050 Old Indiana 37 N", sub: "Bedford, IN 47421" },
];

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactPage = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) { setStatus("sent"); form.reset(); }
    else { setStatus("error"); }
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative w-full bg-[#1e2a6e] py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 72" fill="none">
            <path d="M0 36 C480 72 960 0 1440 36 L1440 72 L0 72 Z" fill="#f0f2f8" />
          </svg>
        </div>

        <div className="relative z-20 max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full"
          >
            <Phone className="h-3.5 w-3.5" />
            Free estimates — call 812-277-6130
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-black text-white leading-tight"
          >
            Get in Touch.<br />
            <span className="text-blue-300">We're Ready.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-blue-200 text-base leading-relaxed max-w-md"
          >
            Pickup & delivery available. Serving Bedford and Lawrence County. We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full bg-[#f0f2f8] py-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8">

          {/* Contact Cards */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {contactCards.map(({ icon: Icon, label, value, sub }) => (
              <motion.div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4"
              >
                <div className="w-9 h-9 bg-[#e8edf7] rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-[#1e2a6e]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-sm font-semibold text-gray-900 break-all">{value}</p>
                  {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 p-8"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Request a free estimate</h2>

              {status === "sent" ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <Check className="h-7 w-7 text-green-600" />
                  </motion.div>
                  <p className="font-semibold text-gray-900 text-lg">Message sent!</p>
                  <p className="text-sm text-gray-500">Josh will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Your name</label>
                    <input type="text" name="name" required placeholder="John Smith"
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Phone</label>
                      <input type="tel" name="phone" required placeholder="(812) 555-0123"
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
                      <input type="email" name="email" required placeholder="you@email.com"
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Service needed</label>
                    <select name="service"
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]">
                      <option value="">Select a service...</option>
                      <option>Doors, trim & crown molding</option>
                      <option>Custom wood staining</option>
                      <option>Furniture restoration</option>
                      <option>Pickup & delivery finishing</option>
                      <option>Contractor outsourcing</option>
                      <option>Other / not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Tell us about your project</label>
                    <textarea name="message" rows={4} required
                      placeholder="Describe what you need finished, any specific materials or finishes in mind..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e] resize-none" />
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-[#1e2a6e] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#16205a] transition disabled:opacity-60">
                    <Send className="h-4 w-4" />
                    {status === "sending" ? "Sending..." : "Send my request"}
                  </button>
                  {status === "error" && (
                    <p className="text-center text-xs text-red-500">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                  <p className="text-center text-xs text-gray-400">We typically respond within 24 hours</p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="bg-[#1e2a6e] rounded-2xl p-6">
                <p className="text-white font-semibold text-sm mb-4">Why choose Mullis Finishing?</p>
                <ul className="flex flex-col gap-3">
                  {perks.map((perk, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span className="text-blue-200 text-sm leading-relaxed">{perk}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">5.0 Google Rating</p>
                  <p className="text-xs text-gray-400">Bedford, Indiana</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Hours</p>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Monday – Friday</span>
                  <span className="font-semibold text-gray-900">7:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Saturday</span>
                  <span className="font-semibold text-gray-900">By appointment</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;