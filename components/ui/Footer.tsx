"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "About Us", href: "/about" },
  { title: "For Contractors", href: "/for-contractors" },
  { title: "Free Estimate", href: "/contact" },
];

const serviceLinks = [
  { title: "Doors & Trim", href: "/services" },
  { title: "Crown Molding", href: "/services" },
  { title: "Custom Stains", href: "/services" },
  { title: "Furniture Restoration", href: "/services" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: <SiFacebook />,
    name: "Facebook",
  },
  {
    href: "https://www.google.com",
    icon: <SiGoogle />,
    name: "Google Reviews",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e2a6e] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1 — Logo + Description + Social */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <Image
                src="/mullis/logo.png"
                alt="Mullis Finishing LLC"
                width={160}
                height={60}
                className="object-contain"
              />
            </motion.div>
          </Link>

          <p className="text-sm text-blue-200 leading-relaxed">
            <span className="text-blue-300 font-semibold">Fine finishes for almost any surface.</span>{" "}
            Professional, dependable, and top quality — every time.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-1">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition text-white"
              >
                {React.cloneElement(item.icon, { className: "w-4 h-4" })}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Quick Links</h3>
          {quickLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-sm text-blue-200 hover:text-white transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Col 3 — Our Services */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Our Services</h3>
          {serviceLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-sm text-blue-200 hover:text-white transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Col 4 — Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase tracking-wider mb-2">Contact Us</h3>

          <a href="tel:8122776130" className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition">
            <Phone className="w-4 h-4 shrink-0" />
            812-277-6130
          </a>

          <div className="flex items-start gap-2 text-sm text-blue-200">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span>3050 Old Indiana 37 N<br />Bedford, IN 47421</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-blue-200">
            <Clock className="w-4 h-4 shrink-0" />
            Opens 7 AM
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Mullis Finishing, LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">⭐ 5.0 Google Rating</span>
            <span>Serving Bedford & Lawrence County</span>
          </div>
          <p>
            Powered by{" "}
            <a
              href="https://whiteriver.media"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-medium transition"
            >
              White River Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;