"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { DoorOpen, Palette, Sofa, Truck, HardHat, Calculator } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <DoorOpen size={22} />,
    title: "New Construction Doors, Trim & Crown Molding",
    text: "Expert installation and finishing for all your new construction needs. Quality craftsmanship on every detail.",
    link: "/services",
    linkLabel: "Learn More →",
    dark: false,
  },
  {
    icon: <Palette size={22} />,
    title: "Custom Wood Stains & Color Matching",
    text: "Perfect color matching to existing woodwork. Custom stains for furniture transformations and restorations.",
    link: "/services",
    linkLabel: "Learn More →",
    dark: false,
  },
  {
    icon: <Sofa size={22} />,
    title: "Furniture Restoration & Transformation",
    text: "Bring tired, worn furniture back to life. Complete restoration and transformation services at our shop.",
    link: "/services",
    linkLabel: "Learn More →",
    dark: false,
  },
  {
    icon: <Truck size={22} />,
    title: "Pick Up & Delivery Service",
    text: "We make it convenient with free pickup and delivery. Sit back while we handle your project.",
    link: "/services",
    linkLabel: "Learn More →",
    dark: false,
  },
  {
    icon: <HardHat size={22} />,
    title: "Contractor & Builder Outsourcing",
    text: "Reliable subcontracting partner for contractors and builders. Quality finishing you can trust.",
    link: "/for-contractors",
    linkLabel: "For Contractors →",
    dark: false,
  },
  {
    icon: <Calculator size={22} />,
    title: "Free Estimates on All Jobs",
    text: "Get a free estimate on any project. No obligation, just quality service.",
    link: "/contact",
    linkLabel: "Get Your Free Estimate →",
    dark: true,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <Container>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[#1e2a6e] text-sm font-semibold mb-3">
            ✏️ What We Do
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Professional Finishing Services
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm">
            From new construction to furniture restoration, we deliver exceptional results on every project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`
                rounded-2xl p-6 flex flex-col gap-4 border
                ${service.dark
                  ? "bg-[#1e2a6e] text-white border-[#1e2a6e]"
                  : "bg-[#f0f2f8] text-gray-900 border-transparent hover:shadow-md transition"}
              `}
            >
              {/* Icon */}
              <div className={`
                w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                ${service.dark ? "bg-white/20 text-white" : "bg-[#1e2a6e] text-white"}
              `}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`font-bold text-base leading-snug ${service.dark ? "text-white" : "text-gray-900"}`}>
                {service.title}
              </h3>

              {/* Text */}
              <p className={`text-sm leading-relaxed flex-1 ${service.dark ? "text-blue-200" : "text-gray-500"}`}>
                {service.text}
              </p>

              {/* Link */}
              <Link
                href={service.link}
                className={`text-sm font-semibold inline-flex items-center gap-1 ${service.dark ? "text-white underline" : "text-[#1e2a6e]"}`}
              >
                {service.linkLabel}
              </Link>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ServicesSection;