"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

// Define RS Services
const services = [
  {
    title: "Residential Electrical",
    description:
      "Safe and efficient wiring, installations, and upgrades for your home.",
    href: "/services/residential",
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical solutions for offices, retail, and industrial spaces.",
    href: "/services/commercial",
  },
  {
    title: "Lighting Installations",
    description:
      "Interior and exterior lighting solutions to brighten up any space.",
    href: "/services/lighting",
  },
  {
    title: "Panel Upgrades",
    description:
      "Modernize your electrical panel for safety and capacity improvements.",
    href: "/services/panel-upgrades",
  },
  {
    title: "Troubleshooting & Repairs",
    description:
      "Quick, accurate diagnosis and repair of electrical problems.",
    href: "/services/troubleshooting",
  },
  {
    title: "Generator Installation",
    description:
      "Backup power solutions to keep your home or business running smoothly.",
    href: "/services/generators",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            RS Services provides professional electrical solutions for homes and businesses. 
            Every project is completed safely, efficiently, and to code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6">
                <Link
                  href={service.href}
                  className="inline-block px-6 py-3 rounded-full bg-[#04398c] text-white font-semibold shadow-lg transition-all hover:bg-[#032f73] hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
