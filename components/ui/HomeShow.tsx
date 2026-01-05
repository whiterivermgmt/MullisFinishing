"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "About RS Services",
    text: "RS Services is built on professionalism, safety, and dependable electrical work. We deliver high-quality residential and commercial solutions with precision and care.",
    img: "/location/img5.jpg",
    reverse: false,
    buttonText: "Learn More",
    buttonHref: "/about",
  },
  {
    title: "Our Commitment",
    text: "Every project is completed to code, on schedule, and with attention to detail. From installations to troubleshooting, our work is designed to last.",
    img: "/location/img4.jpg",
    reverse: true,
    buttonText: "View Services",
    buttonHref: "/services",
  },
];

const HomeContests = () => {
  return (
    <section className="bg-gray-50 py-20 space-y-24">
      <Container>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              section.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE — MATCHES LOCATIONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl ${
                section.reverse ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={section.img}
                alt={section.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* CONTENT CARD — MATCHES LOCATIONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest text-[#04398c] uppercase mb-3">
                  RS Services
                </span>

                <h2 className="text-3xl font-bold text-gray-900">
                  {section.title}
                </h2>

                <div className="w-16 h-1 bg-[#04398c] rounded-full mt-4 mb-6" />

                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>

              {section.buttonText && (
                <div className="mt-8">
                  <Link
                    href={section.buttonHref}
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
                    {section.buttonText}
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default HomeContests;
