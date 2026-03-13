'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, Truck } from "lucide-react";

const images = ["/homeimages/home1.jpg", "/homeimages/home2.jpg"];

const HomeHero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] bg-gray-900 overflow-hidden flex items-center -mt-6">

      {/* Rotating Background Images */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Mullis Finishing Work"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Blue overlay gradient — left heavy like the screenshot */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1e2a6e]/80 via-[#1e2a6e]/50 to-transparent pointer-events-none" />

          {/* Wave bottom */}
    <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
        <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="white" />
      </svg>
    </div>

      {/* Content */}
      <div className="relative z-20 px-8 sm:px-14 lg:px-20 max-w-2xl py-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5"
        >
          <Star className="h-3.5 w-3.5 fill-white text-white" />
          Serving Bedford & Lawrence County
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          Fine Finishes.{" "}
          <span className="text-blue-300">Flawless Results.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg font-semibold text-white"
        >
          Bedford's Trusted Finishing Experts.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-2 text-sm sm:text-base text-gray-200 max-w-md"
        >
          Serving contractors, home builders, and interior painters across Lawrence County and beyond.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-3 text-sm text-gray-300 italic"
        >
          Professional, dependable, and top quality — every time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1e2a6e] font-semibold text-sm rounded-md shadow-lg hover:bg-gray-100 transition"
          >
            <span>📋</span> Get Your Free Estimate
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold text-sm rounded-md hover:bg-white hover:text-[#1e2a6e] transition"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-6 text-white text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-medium">5.0 Google Rating</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <Truck className="h-4 w-4" />
            <span>Free Pickup & Delivery</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;