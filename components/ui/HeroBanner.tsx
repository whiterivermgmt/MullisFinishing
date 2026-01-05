'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHeroRS: React.FC = () => {
  return (
    <section className="relative w-full h-[700px] md:h-[800px] lg:h-[900px] bg-gray-900 overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src="/location/img1.jpg"
        alt="RS Services Electrical Work"
        fill
        className="object-cover object-center brightness-50"
        priority
      />

      {/* Animated Glow / Accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#04398c]/40 to-[#032f73]/20 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 sm:px-12 lg:px-24 max-w-4xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
        >
          RS Services
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md"
        >
          Professional Electrical Solutions for Residential & Commercial Clients. Safe, Reliable, Efficient.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/services"
            className="px-8 py-4 bg-[#04398c] text-white font-semibold rounded-full shadow-lg hover:bg-[#032f73] transition transform hover:-translate-y-1"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-[#04398c] transition transform hover:-translate-y-1"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>

      {/* Optional floating accent shape */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#04398c]/30 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default HomeHeroRS;
