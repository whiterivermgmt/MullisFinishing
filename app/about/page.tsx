"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, Truck, ArrowRight, Phone, ShieldCheck, Clock, Users, Award, Palette, DoorOpen } from "lucide-react";

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <main className="w-full bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden -mt-6">
        <div className="absolute inset-0">
          <Image
            src="/homeimages/home3.jpg"
            alt="Mullis Finishing"
            fill
            className="object-cover object-center brightness-[0.32]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#1e2a6e] opacity-55" />
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

        <div className="relative z-20 max-w-5xl mx-auto px-8 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <MapPin className="h-3.5 w-3.5" />
              Bedford, Indiana · Lawrence County
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5"
            >
              Who We<br />
              <span className="text-blue-300">Really Are.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-gray-200 text-base leading-relaxed max-w-sm mb-8"
            >
              15+ years of fine finishing work — built on showing up, doing it right, and earning the trust of every contractor and homeowner we serve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
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

          {/* Right */}
          <div className="hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 border-white/30">
                <Image src="/homeimages/home2.jpg" alt="Josh Mullis" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-black text-base">Josh Mullis</p>
                <p className="text-blue-300 text-xs font-semibold">Owner & Lead Finisher</p>
                <div className="flex items-center gap-1 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-300 ml-1">5.0 Google</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { value: "15+", label: "Years Exp." },
                { value: "500+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-center">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="text-blue-300 text-xs font-semibold mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-sm italic leading-relaxed">
                "Josh does excellent work! Glad to have such a valuable resource in the community."
              </p>
              <p className="text-blue-300 text-xs font-semibold mt-2">— Kirby Melick · Google Review</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* MEET THE OWNER */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src="/homeimages/home2.jpg" alt="Josh Mullis" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a6e] via-[#1e2a6e]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-white font-black text-lg">Josh Mullis</p>
                <p className="text-blue-300 text-sm">Owner & Lead Finisher</p>
                <div className="flex items-center gap-1.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-blue-200 ml-1">5.0 Google Rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Meet the Owner</span>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Craftsmanship With{" "}
              <span className="text-[#1e2a6e]">a Personal Touch.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Hi, I'm Josh — the owner and lead finisher at Mullis Finishing. I've spent over 15 years honing my craft in fine wood finishing, and every single project I take on gets my full attention and care.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              I started Mullis Finishing because contractors and builders needed a reliable finishing partner they could truly trust. This business was built on showing up, doing the work right, and treating every client the way I'd want to be treated.
            </p>
            <div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Specialties</p>
              <motion.ul
                variants={cardContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {[
                  { icon: DoorOpen, label: "Doors, Trim & Crown Molding" },
                  { icon: Palette, label: "Custom Wood Stains" },
                  { icon: ShieldCheck, label: "Furniture Restoration" },
                  { icon: Truck, label: "Pickup & Delivery" },
                  { icon: Users, label: "Contractor Outsourcing" },
                  { icon: Award, label: "Free Estimates" },
                ].map(({ icon: Icon, label }) => (
                  <motion.li key={label}  className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-8 h-8 rounded-xl bg-[#f0f2f8] text-[#1e2a6e] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1e2a6e] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#16205a] transition">
                <Phone className="h-4 w-4" />
                Get In Touch
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#1e2a6e] text-[#1e2a6e] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#f0f2f8] transition">
                View Services
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* OUR STORY */}
      <section className="w-full bg-[#f0f2f8] py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Built on Craftsmanship,{" "}
              <span className="text-[#1e2a6e]">Driven by Dedication.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Mullis Finishing LLC was founded on a simple belief: finishing work deserves the same level of attention and care as any other part of a build. Based in Bedford, Indiana, we've spent over 15 years perfecting fine finishes on wood products for the Lawrence County community and beyond.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              From new construction doors, trim, and crown molding to custom wood stains, color matching, and full furniture transformations — we bring expertise and precision to every project that comes through our shop.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1e2a6e] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#16205a] transition w-fit">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[460px]"
          >
            <div className="absolute top-0 left-0 w-[62%] h-[72%] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/homeimages/home5.jpg" alt="Finishing work" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-0 right-0 w-[56%] h-[56%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f0f2f8]">
              <Image src="/homeimages/home6.jpg" alt="Wood detail" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute top-[58%] left-[44%] z-10 bg-[#1e2a6e] text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-black leading-none">15+</p>
              <p className="text-blue-300 text-xs font-bold mt-1 uppercase tracking-wider">Years in Business</p>
            </div>
            <div className="absolute top-4 right-0 z-10 bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-800">5.0 Google</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* THE MULLIS STANDARD */}
      <section className="w-full bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#1e2a6e] text-xs font-black uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 leading-tight">The Mullis Standard</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              These aren't just talking points — they're the principles behind every project we take on.
            </p>
          </motion.div>

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              { icon: ShieldCheck, title: "Quality You Can Count On", text: "Every project is completed to the highest standard. We never cut corners — your satisfaction is guaranteed." },
              { icon: Clock, title: "Reliable & On Time", text: "We respect your schedule. Our team delivers on time every time so your build never falls behind." },
              { icon: Users, title: "A Trusted Partner", text: "Contractors, builders, and homeowners rely on us to get the job done right — every single time." },
              { icon: Truck, title: "Free Pickup & Delivery", text: "We come to you. Complimentary pickup and delivery throughout Bedford and Lawrence County." },
              { icon: Palette, title: "Custom Color Matching", text: "From perfect stain matches to entirely new looks — we craft finishes that complement your space." },
              { icon: Award, title: "Free Estimates", text: "No obligation, no surprises. A clear upfront estimate before any work begins." },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                className="bg-[#f0f2f8] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow"
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
      </section>

      {/* STATS BANNER */}
      <section className="relative w-full bg-[#1e2a6e] py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {[
            { value: "15+", label: "Years of Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "5.0★", label: "Google Rating" },
            { value: "100%", label: "Satisfaction Guaranteed" },
          ].map(({ value, label }) => (
            <motion.div key={label} className="flex flex-col items-center gap-2">
              <span className="text-5xl font-black text-white tracking-tight">{value}</span>
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}