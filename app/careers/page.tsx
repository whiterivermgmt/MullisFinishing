"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Hammer, Clock, Truck, Award, Users, Star } from "lucide-react";

const perks = [
  {
    icon: Hammer,
    title: "Learn from the Best",
    text: "Work directly alongside Josh and develop real skills in fine wood finishing — a craft that's always in demand.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    text: "We work with your schedule. Whether you're looking for full-time or part-time, we're open to the right fit.",
  },
  {
    icon: Truck,
    title: "Local & Convenient",
    text: "Based right here in Bedford. No long commutes — just quality work close to home.",
  },
  {
    icon: Award,
    title: "Rewarding Work",
    text: "Every project has a visible result you can be proud of. There's real satisfaction in delivering a flawless finish.",
  },
  {
    icon: Users,
    title: "Small Team Culture",
    text: "We're not a big corporation. Everyone matters here and your work directly impacts the quality we deliver.",
  },
  {
    icon: Star,
    title: "Room to Grow",
    text: "As Mullis Finishing grows, so do our people. We invest in the folks who show up and do great work.",
  },
];

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CareersPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full bg-[#1e2a6e] py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 72" fill="none">
            <path d="M0 36 C480 72 960 0 1440 36 L1440 72 L0 72 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              Now Hiring · Bedford, Indiana
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5"
            >
              Join the<br />
              <span className="text-blue-300">Mullis Team.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-gray-200 text-base leading-relaxed max-w-sm mb-8"
            >
              We're looking for hardworking, detail-oriented people who take pride in their craft. No experience necessary — just a good attitude and a willingness to learn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1e2a6e] font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow-lg"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:8122776130"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" />
                812-277-6130
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5"
            >
              <p className="text-white font-black text-lg mb-1">Open Position</p>
              <p className="text-blue-300 text-sm font-semibold">Finishing Technician</p>
              <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
                {[
                  { label: "Location", value: "Bedford, IN" },
                  { label: "Type", value: "Full or Part-Time" },
                  { label: "Experience", value: "Not Required" },
                  { label: "Start", value: "Immediately" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider">{label}</p>
                    <p className="text-white text-sm font-semibold mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-sm italic leading-relaxed">
                "Josh does excellent work! Glad to have such a valuable resource in the community. Superior finishing!"
              </p>
              <p className="text-blue-300 text-xs font-semibold mt-2">— Kirby Melick · Google Review</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* WHY WORK WITH US + APPLY */}
      <section className="w-full bg-white py-24" id="apply">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-16">

          {/* Perks */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">
                Why Work With Us
              </span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">
                More Than Just a Job.
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
                At Mullis Finishing you're not just a number. You're part of a small, skilled team that takes pride in doing great work every day.
              </p>
            </motion.div>

            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {perks.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  className="bg-[#f0f2f8] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1e2a6e] text-white flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900 leading-snug">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Apply form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#f0f2f8] rounded-2xl p-10 max-w-2xl mx-auto w-full"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">
              Apply Today
            </span>
            <h2 className="text-3xl font-black text-gray-900 mt-3 mb-2 leading-tight">
              Interested in Joining Us?
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Fill out the form below and Josh will reach out within 24 hours to chat.
            </p>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="John"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(812) 555-0123"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Any Relevant Experience?</label>
                <textarea
                  name="experience"
                  rows={4}
                  placeholder="Tell us a little about yourself — no experience required, just be honest..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2a6e] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#1e2a6e] text-white font-bold text-sm py-3.5 rounded-xl hover:bg-[#16205a] transition"
              >
                Submit Application
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-gray-400">We typically respond within 24 hours</p>
            </form>
          </motion.div>

        </div>
      </section>

    </main>
  );
}