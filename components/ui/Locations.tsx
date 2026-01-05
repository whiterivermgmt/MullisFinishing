"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const StaticFeature: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — STATIC IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/location/img2.jpg"
              alt="RS Services Electrical Work"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT — CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between min-h-[420px]"
          >
            <div>
              <span className="inline-block text-sm font-semibold tracking-widest text-[#04398c] uppercase mb-3">
                Electrical Contractors
              </span>

              <h2 className="text-3xl font-bold text-gray-900">
                RS Services
              </h2>

              <div className="w-16 h-1 bg-[#04398c] rounded-full mt-4 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                RS Services provides professional residential and commercial
                electrical solutions with an emphasis on safety, quality, and
                long-term performance.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From new installations to upgrades and diagnostics, every job
                is completed with precision, code compliance, and respect for
                your property.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/services"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  rounded-full
                  bg-[#04398c]
                  text-white
                  font-semibold
                  shadow-lg
                  transition-all
                  hover:bg-[#032f73]
                  hover:shadow-xl
                "
              >
                View Our Services
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default StaticFeature;
