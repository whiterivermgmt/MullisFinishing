"use client";

import React from "react";
import {
  FaBolt,
  FaHardHat,
  FaClipboardCheck,
  FaClock,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const values = [
  {
    icon: <FaBolt size={24} />,
    title: "Licensed & Experienced",
    text: "Our electricians are fully licensed and bring years of hands-on experience to every job.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Safety First",
    text: "We follow strict safety standards and electrical codes to protect your property and everyone inside.",
  },
  {
    icon: <FaClipboardCheck size={24} />,
    title: "Code-Compliant Work",
    text: "All installations and repairs meet local, state, and national electrical codes.",
  },
  {
    icon: <FaClock size={24} />,
    title: "Reliable & On Time",
    text: "We respect your schedule and show up when we say we will, ready to work efficiently.",
  },
  {
    icon: <FaBuilding size={24} />,
    title: "Residential & Commercial",
    text: "From homes to businesses, we handle projects of all sizes with the same attention to detail.",
  },
  {
    icon: <FaHardHat size={24} />,
    title: "Professional Workmanship",
    text: "Clean, organized job sites and quality craftsmanship are standard on every project.",
  },
];

const WhyRSServices: React.FC = () => {
  return (
    <section className="relative py-24 bg-white">
      {/* Subtle background accent */}
      <div className="absolute inset-x-0 top-0 h-64 bg-[#04398c]/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#04398c]">
            Why Choose RS Services
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Dependable electrical services built on experience, safety,
            and professional standards.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="
                bg-white
                rounded-xl
                border border-gray-200
                p-8
                shadow-sm
                transition-all
                hover:shadow-lg
                hover:-translate-y-1
              "
            >
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#04398c]/10 text-[#04398c]">
                {value.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRSServices;
