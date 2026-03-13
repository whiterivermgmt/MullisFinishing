"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap, Award, Users, Package, Layers, Pencil, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Pencil,
    title: "Custom Laser Engraving",
    text: "Precise, permanent engravings on wood, metal, acrylic, leather, and more. Perfect for personalized gifts, awards, and branding.",
  },
  {
    icon: Layers,
    title: "Laser Cutting",
    text: "Clean, accurate cuts on a wide range of materials. Ideal for custom shapes, signage, parts, and intricate designs.",
  },
  {
    icon: Package,
    title: "Custom Signage",
    text: "Business signs, door plaques, directional signage — laser cut and engraved to your exact specs.",
  },
  {
    icon: Award,
    title: "Awards & Recognition",
    text: "Trophies, plaques, and personalized awards for businesses, schools, sports teams, and events.",
  },
  {
    icon: Users,
    title: "Personalized Gifts",
    text: "Cutting boards, frames, ornaments, drinkware, and more — made personal with laser precision.",
  },
  {
    icon: Zap,
    title: "Industrial Marking",
    text: "Permanent part marking, serial numbers, barcodes, and logos for industrial and commercial applications.",
  },
];

const whoWeServe = [
  "Small businesses & retail brands",
  "Contractors & builders",
  "Schools & sports organizations",
  "Event planners & wedding vendors",
  "Restaurants & hospitality",
  "Gift shoppers & individuals",
];

export default function XcelLaserPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full min-h-[620px] flex items-center overflow-hidden -mt-6">
        <div className="absolute inset-0">
          <Image
            src="/laser/laser-hero.jpg"
            alt="Xcel Laser Worx"
            fill
            className="object-cover object-center brightness-[0.28]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#1e2a6e] opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
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

        <div className="relative z-20 max-w-5xl mx-auto px-8 py-28 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <Zap className="h-3.5 w-3.5" />
              A Division of Mullis Finishing LLC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5"
            >
              Xcel Laser<br />
              <span className="text-blue-300">Worx.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-gray-200 text-base leading-relaxed max-w-sm mb-8"
            >
              Precision laser engraving and cutting for businesses, contractors, and individuals throughout Bedford and Lawrence County.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1e2a6e] font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow-lg"
              >
                Get a Free Quote
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

          <div className="hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <p className="text-white font-black text-base mb-1">Precision Laser Services</p>
              <p className="text-blue-300 text-xs font-semibold mb-4">Bedford, Indiana</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Materials", value: "Wood, Metal, Acrylic+" },
                  { label: "Turnaround", value: "Fast & Reliable" },
                  { label: "Custom Orders", value: "Welcome" },
                  { label: "Estimates", value: "Always Free" },
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
              <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-2">Part of Mullis Finishing</p>
              <p className="text-gray-200 text-sm leading-relaxed">
                Xcel Laser Worx operates under the same roof as Mullis Finishing LLC — combining fine wood finishing with precision laser work for a one-stop shop.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">Laser Services</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              From personalized gifts to industrial marking — if it can be engraved or cut, we can do it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-[#f0f2f8] border border-transparent rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1e2a6e]/10 text-[#1e2a6e] flex items-center justify-center shrink-0 group-hover:bg-[#1e2a6e] group-hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-gray-900 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{text}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#1e2a6e] text-xs font-black uppercase tracking-wider hover:gap-2.5 transition-all">
                  Get a Quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE + MATERIALS */}
      <section className="w-full bg-[#f0f2f8] py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Who We Serve</span>
              <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">
                Built for<br />
                <span className="text-[#1e2a6e]">Everyone.</span>
              </h2>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Whether you need one custom piece or a bulk order — we work with individuals and businesses of all sizes.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {whoWeServe.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#1e2a6e] shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1e2a6e] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#16205a] transition shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[#1e2a6e] text-[#1e2a6e] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#f0f2f8] transition"
              >
                View Mullis Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div>
              <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Materials</span>
              <h2 className="text-2xl font-black text-gray-900 mt-3 leading-tight">We Work With</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Wood & MDF",
                "Acrylic & Plastic",
                "Leather & Fabric",
                "Coated Metals",
                "Glass",
                "Rubber & Foam",
                "Anodized Aluminum",
                "Stone & Tile",
              ].map((material, i) => (
                <motion.div
                  key={material}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-2.5 hover:border-[#1e2a6e]/20 transition"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e2a6e] shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{material}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full bg-[#1e2a6e] py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full"
          >
            <Zap className="h-3.5 w-3.5" />
            Free Quotes · Fast Turnaround
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white leading-tight"
          >
            Ready to Create<br />
            <span className="text-blue-300">Something Custom?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-blue-200 text-sm leading-relaxed max-w-sm"
          >
            Call Josh directly or send us a message. We'll get back to you within 24 hours with a free quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1e2a6e] font-black text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:8122776130"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition"
            >
              <Phone className="h-4 w-4" />
              812-277-6130
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}