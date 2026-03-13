"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, DoorOpen, Palette, ShieldCheck, Truck, Users, Award, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Doors, Trim & Crown Molding",
    text: "Factory-quality finishes on new construction doors, interior trim, and crown molding. We work with contractors and builders who need consistent, reliable results on a schedule.",
  },
  {
    icon: Palette,
    title: "Custom Wood Staining",
    text: "From rich dark stains to light natural tones — we mix and apply custom stains to match your vision or an existing finish exactly.",
  },
  {
    icon: ShieldCheck,
    title: "Furniture Restoration",
    text: "Breathe new life into worn, damaged, or dated furniture. We strip, sand, and refinish pieces of all kinds — from antiques to modern builds.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    text: "We come to you. Free pickup and delivery throughout Bedford and Lawrence County — no hauling required on your end.",
  },
  {
    icon: Users,
    title: "Contractor Outsourcing",
    text: "Need a reliable finishing partner for your crew? We handle the finish work so your team can stay focused on the build.",
  },
  {
    icon: Award,
    title: "Color Matching",
    text: "Bring us a sample, a photo, or a chip. We'll match it as closely as possible so your project stays consistent from start to finish.",
  },
];

const steps = [
  { number: "01", title: "Request a Free Estimate", text: "Call us or fill out our contact form. We'll get back to you within 24 hours to discuss your project." },
  { number: "02", title: "We Handle the Finishing", text: "Drop off your pieces or schedule a pickup. We apply your finish with precision and care." },
  { number: "03", title: "Pickup or Delivery", text: "We deliver your finished pieces back to you — or you can pick them up from our shop in Bedford." },
];

export default function ServicesPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full bg-[#1e2a6e] py-20 overflow-hidden">
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

        <div className="relative z-20 max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            Bedford, Indiana · Lawrence County
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-black text-white leading-tight mb-5"
          >
            What We<br />
            <span className="text-blue-300">Do Best.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-base leading-relaxed max-w-md mx-auto mb-8"
          >
            Fine wood finishing for contractors, builders, and homeowners throughout Bedford and Lawrence County.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1e2a6e] font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow-lg">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="tel:8122776130" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition">
              <Phone className="h-4 w-4" />
              812-277-6130
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">Everything We Offer</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              From raw wood to showroom-ready finish — we handle it all.
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
                className="bg-[#f0f2f8] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1e2a6e] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-gray-900 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{text}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#1e2a6e] text-xs font-black uppercase tracking-wider hover:gap-2.5 transition-all">
                  Get Estimate <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full bg-[#f0f2f8] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">The Process</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">How It Works</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Simple, straightforward, and hassle-free from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ number, title, text }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-6xl font-black text-[#1e2a6e]/5 leading-none select-none">
                  {number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#1e2a6e] text-white text-sm font-black flex items-center justify-center shrink-0">
                  {number}
                </div>
                <h3 className="font-bold text-base text-gray-900 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Who We Serve</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">Built for Everyone</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Whether you're a homeowner with one piece or a contractor with a full job site — we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Homeowners",
                sub: "Personal projects done right.",
                points: [
                  "Furniture restoration & refinishing",
                  "Custom stain matching",
                  "Free pickup & delivery",
                  "Free estimates, no obligation",
                  "Friendly, personal service",
                ],
              },
              {
                title: "Contractors & Builders",
                sub: "A finishing partner you can count on.",
                points: [
                  "Doors, trim & crown molding at scale",
                  "Consistent results on a schedule",
                  "Outsource finishing to focus on the build",
                  "Pickup & delivery for job sites",
                  "Reliable turnaround times",
                ],
              },
            ].map(({ title, sub, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-[#1e2a6e] rounded-2xl p-8 flex flex-col gap-5"
              >
                <div>
                  <h3 className="text-white font-black text-xl">{title}</h3>
                  <p className="text-blue-300 text-sm mt-1">{sub}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-blue-300 shrink-0 mt-0.5" />
                      <span className="text-blue-100 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#1e2a6e] font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition mt-2 w-fit"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white leading-tight"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-blue-200 text-sm leading-relaxed max-w-sm"
          >
            Get a free estimate on your next project. We serve Bedford and Lawrence County with pickup and delivery available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1e2a6e] font-black text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition shadow-lg">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="tel:8122776130" className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-white/10 transition">
              <Phone className="h-4 w-4" />
              812-277-6130
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}