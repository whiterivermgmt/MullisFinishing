"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const images = [
  { src: "/images/g1.jpg" },
  { src: "/images/g2.jpg" },
  { src: "/images/g3.jpg" },
  { src: "/images/g6.jpg" },
  { src: "/images/g7.jpg" },
  { src: "/images/g8.jpg" },
  { src: "/images/g9.jpg" },
  { src: "/images/g12.jpg" },
  { src: "/homeimages/home1.jpg" },
  { src: "/homeimages/home2.jpg" },
  { src: "/homeimages/home3.jpg" },
  { src: "/homeimages/home5.jpg" },
  { src: "/homeimages/home6.jpg" },
  { src: "/images/g5.jpg" },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GalleryPage() {
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
            Fine Finishes · Bedford, Indiana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-black text-white leading-tight mb-5"
          >
            Our Work<br />
            <span className="text-blue-300">Speaks for Itself.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-base leading-relaxed max-w-md mx-auto"
          >
            A look at the craftsmanship we bring to every door, trim, stain, and restoration project we take on.
          </motion.p>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {images.map(({ src }, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`Mullis Finishing project ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1e2a6e] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white leading-tight"
          >
            Like What You See?
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1e2a6e] font-black text-sm px-8 py-4 rounded-xl hover:bg-blue-50 transition shadow-lg"
            >
              Get a Free Estimate
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