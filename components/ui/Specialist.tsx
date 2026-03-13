"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, MapPin } from "lucide-react";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#f0f2f8] py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-[#1e2a6e] text-sm font-semibold">
              <MapPin className="h-4 w-4" />
              Bedford's Finishing Specialists
            </div>

            {/* Headline */}
            <h2 className="text-4xl font-extrabold text-[#1e2a6e] leading-tight">
              Your Finishing Work,<br />Handled.
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Mullis Finishing LLC is a trusted resource for contractors, home builders, and interior painters who need to outsource finishing work so they can focus on other aspects of the build.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We specialize in fine finishes on wood products including new construction doors, trim, and crown molding. We also offer custom wood stains to match existing woodwork and furniture transformations at our shop.
            </p>

            {/* CTA Banner */}
            <div className="flex items-center gap-4 bg-[#1e2a6e] text-white rounded-xl px-6 py-4 mt-2">
              <Truck className="h-6 w-6 shrink-0" />
              <div>
                <p className="font-bold text-sm">Free Estimates on All Jobs</p>
                <p className="text-xs text-blue-200">Pick up and delivery available. We make it easy!</p>
              </div>
            </div>

            {/* Learn More */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1e2a6e] font-semibold text-sm hover:underline mt-1"
            >
              Learn More About Us →
            </Link>
          </motion.div>

          {/* RIGHT — Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex gap-3 h-[420px]"
          >
            {/* Left tall image */}
            <div className="relative w-1/2 h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/mullis/c1.jpg"
                alt="Finishing work"
                fill
                className="object-cover"
              />
              {/* 100% badge */}
              <div className="absolute bottom-4 left-4 bg-[#1e2a6e] text-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-2xl font-extrabold">100%</p>
                <p className="text-xs text-blue-200 font-medium">Satisfaction Guaranteed</p>
              </div>
            </div>

            {/* Right column — small image + stat card */}
            <div className="flex flex-col gap-3 w-1/2">
              {/* Stat card */}
              <div className="bg-white rounded-2xl shadow-lg px-6 py-5">
                <p className="text-3xl font-extrabold text-[#1e2a6e]">15+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              {/* Second image */}
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/mullis/c2.jpg"
                  alt="Wood finishing detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutSection;