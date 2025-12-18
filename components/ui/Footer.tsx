"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { headerData } from "@/Constants/data";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  /**
   * ============================
   * Social Links
   * ============================
   */
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61568147739220",
      icon: <SiFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.google.com/search?q=escos+green",
      icon: <SiGoogle />,
      name: "Google Reviews",
    },
  ];

  /**
   * ============================
   * Quick Links (flattened)
   * ============================
   */
  const quickLinks = headerData.flatMap((item) => {
    if (item.submenu && item.submenu.length > 0) {
      return [
        { title: item.title, href: item.href },
        ...item.submenu.map((sub) => ({
          title: sub.title,
          href: sub.href,
        })),
      ];
    }

    return [{ title: item.title, href: item.href }];
  });

  return (
    <footer className="text-white mt-auto relative overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Background */}
      <div className="absolute inset-0 bg-green-700 pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {/* Logo + Description + Social */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="cursor-pointer"
              >
                <Image
                  src="/escos/signin.png"
                  alt="Escos Green Logo"
                  width={160}
                  height={80}
                  className="object-contain mx-auto"
                />
              </motion.div>
            </Link>

            <p className="text-base text-center max-w-xs">
              All your green needs conveniently located in Bedford, Indiana. Let’s all go to Escos.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2 justify-center">
              {socialLinks.map((item, idx) => (
                <div key={idx} className="relative group">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-700 hover:bg-[#f9ac04] hover:text-white transition"
                  >
                    {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b-2 border-[#f9ac04] inline-block pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base flex flex-col items-center">
              {quickLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link
                    href={link.href}
                    className={`transition-all font-medium ${
                      pathname === link.href
                        ? "text-[#f9ac04] font-semibold"
                        : "text-white hover:text-[#f9ac04]"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Come Visit Us */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b-2 border-[#f9ac04] inline-block pb-2">
              Come Visit Us
            </h3>
            <div className="flex flex-col gap-2 items-center">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#f9ac04]" /> Bedford
              </h4>
              <p className="text-center">
                2624 Sandpit Road, Bedford, IN
              </p>
              <iframe
                src="https://maps.google.com/maps?q=2624+Sandpit+Road,+Bedford,+IN&z=16&output=embed"
                width="100%"
                height="200"
                className="rounded-md border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold text-xl mb-6 tracking-wide uppercase border-b-2 border-white inline-block pb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-2 items-center">
              <a
                href="tel:18127651300"
                className="flex items-center gap-2 hover:text-[#f9ac04] transition"
              >
                <Phone className="w-4 h-4 text-[#f9ac04]" /> (812) 765-1300
              </a>
              <a
                href="mailto:mgmt@escosgreen.com"
                className="flex items-center gap-2 hover:text-[#f9ac04] transition"
              >
                <Mail className="w-4 h-4 text-[#f9ac04]" /> mgmt@escosgreen.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative z-10 border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-white">
          <p className="mb-2 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Escos Green. All Rights Reserved.
          </p>
          <p className="text-center md:text-right">
            Designed by{" "}
            <Link
              href="https://whiteriver.media"
              target="_blank"
              className="font-medium hover:text-green-300"
            >
              White River Media
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
