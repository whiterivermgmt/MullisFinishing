"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

const projects = [
  {
    image: "/mullis/c6.jpg",
    badge: { icon: <Check className="h-3 w-3" />, label: "After", color: "bg-green-500" },
    title: "Furniture Restoration",
    description: "Complete transformation from worn, scratched surface to beautiful, professional finish.",
  },
  {
    image: "/mullis/c5.jpg",
    badge: { icon: <Sparkles className="h-3 w-3" />, label: "Custom Finish", color: "bg-[#1e2a6e]" },
    title: "Custom Color Matching",
    description: "Custom stain and paint to match your existing furniture and décor perfectly.",
  },
];

const TransformationSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <Container>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[#1e2a6e] text-sm font-semibold mb-3">
            ✏️ Our Work
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            From Worn to <span className="text-[#1e2a6e]">WOW</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-sm">
            We bring tired, scratched, and faded surfaces back to life — or better. See the difference a professional finish makes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl overflow-hidden bg-[#f0f2f8]"
            >
              {/* Image */}
              <div className="relative h-[220px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {/* Badge */}
                <div className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 ${project.badge.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}>
                  {project.badge.icon}
                  {project.badge.label}
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">{project.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-[#1e2a6e] text-[#1e2a6e] font-semibold text-sm px-7 py-3 rounded-md hover:bg-[#1e2a6e] hover:text-white transition"
          >
            🖼️ View Our Gallery
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default TransformationSection;