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
      href: "https://www.facebook.com/profile.php?id=61583190522481",
      icon: <SiFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.google.com",
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
    <footer className="mt-auto relative overflow-hidden bg-white text-[#04398c]">
  {/* Background Accent */}
  <div className="absolute inset-0 bg-[#04398c] pointer-events-none" />

  <Container>
    <div className="relative z-10 max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white">
      
      {/* Logo + Description + Social */}
      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Image
              src="/escos/footer.png"
              alt="Escos Logo"
              width={170}
              height={90}
              className="object-contain mx-auto"
            />
          </motion.div>
        </Link>

        <p className="text-sm max-w-xs leading-relaxed text-blue-100">
          Proudly serving Bedford and Southern Indiana with quality products,
          friendly service, and a commitment to our local community.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-2 justify-center">
          {socialLinks.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-white
                  text-[#04398c]
                  hover:bg-blue-100
                  transition
                "
              >
                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-white text-[#04398c] px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-lg mb-6 uppercase border-b border-blue-200 inline-block pb-2">
          Quick Links
        </h3>
        <ul className="space-y-3 text-sm flex flex-col items-center">
          {quickLinks.map((link, i) => (
            <li key={`${link.href}-${i}`}>
              <Link
                href={link.href}
                className={`transition font-medium ${
                  pathname === link.href
                    ? "text-white underline"
                    : "text-blue-100 hover:text-white"
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
        <h3 className="font-bold text-lg mb-6 uppercase border-b border-blue-200 inline-block pb-2">
          Come Visit Us
        </h3>

        <p className="text-sm text-blue-100">
          Serving Bedford, Indiana
        </p>

        <iframe
          src="https://maps.google.com/maps?q=Bedford,IN&z=12&output=embed"
          width="100%"
          height="200"
          className="rounded-xl border border-white/20"
          loading="lazy"
        />
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-4 items-center">
        <h3 className="font-bold text-lg mb-6 uppercase border-b border-blue-200 inline-block pb-2">
          Contact Us
        </h3>

        <a
          href="tel:+18126756631"
          className="flex items-center gap-2 text-blue-100 hover:text-white transition"
        >
          <Phone className="w-4 h-4" />
          
          (812) 675-6631
        </a>

        <a
          href="mailto:Judyschrock79@gmail.com"
          className="flex items-center gap-2 text-blue-100 hover:text-white transition"
        >
          <Mail className="w-4 h-4" />
          Judyschrock79@gmail.com
        </a>
      </div>
    </div>

    {/* Bottom */}
    <div className="relative z-10 border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-100">
      <p>© {new Date().getFullYear()} Rs Services. All Rights Reserved.</p>
      <p>
        Designed by{" "}
        <Link
          href="https://whiteriver.media"
          target="_blank"
          className="hover:text-white font-medium"
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
