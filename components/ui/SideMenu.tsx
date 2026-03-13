"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { SiFacebook, SiGoogle, SiInstagram } from "react-icons/si";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from "@/Constants/data";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => setIsMounted(true), []);

  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) handleClose();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setOpenIndex(null);
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100086625738794",
      icon: <SiFacebook />,
      bg: "#1877F2",
      name: "Facebook",
    },
    {
      href: "https://www.google.com/search?q=mullis+finishing&oq=mul&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyCggDEC4YsQMYgAQyCggEEC4YsQMYgAQyBggFEEUYOTIGCAYQRRg8MgYIBxBFGDzSAQgyMzU3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
      icon: <SiGoogle />,
      bg: "#DB4437",
      name: "Google Reviews",
    },

  ];

  if (!isMounted) return null;

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col justify-between rounded-r-3xl shadow-xl bg-white"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Logo + Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-[#1e2a6e]/20">
          <Link href="/" onClick={handleClose}>
            <Image
              src="/mullis/mobilemullis.png"
              alt="Mullis Finishing LLC"
              width={140}
              height={100}
              className="object-contain h-25 w-auto"
              priority
            />
          </Link>

          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-[#1e2a6e]/10 cursor-pointer transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 text-[#1e2a6e]" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2 px-4 mt-4 overflow-y-auto">
          {headerData.map((item, idx) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isActive = pathName === item.href;
            const isOpen = openIndex === idx;

            return (
              <div key={item.title} className="w-full">
                <div
                  className={`
                    flex justify-between items-center
                    w-full px-5 py-4
                    text-base font-semibold
                    rounded-2xl
                    cursor-pointer
                    transition-all duration-200
                    ${isActive || isOpen
                      ? "bg-[#1e2a6e] text-white shadow-sm"
                      : "bg-white text-[#1e2a6e]"}
                    hover:bg-[#1e2a6e]/10
                  `}
                  onClick={() => hasSubmenu ? toggleSubmenu(idx) : handleClose()}
                >
                  {hasSubmenu ? (
                    <span>{item.title}</span>
                  ) : (
                    <Link href={item.href} onClick={handleClose} className="w-full">
                      {item.title}
                    </Link>
                  )}

                  {hasSubmenu && (
                    <ChevronDown
                      className={`
                        w-5 h-5 transition-transform duration-200
                        ${isOpen ? "rotate-180" : ""}
                        ${isActive || isOpen ? "text-white" : "text-[#1e2a6e]"}
                      `}
                    />
                  )}
                </div>

                {/* Submenu */}
                <AnimatePresence>
                  {hasSubmenu && isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex flex-col ml-4 mt-2 gap-1 rounded-2xl bg-white p-2 shadow-md border border-[#1e2a6e]/10"
                    >
                      {item.submenu.map((sub) => {
                        const isSubActive = pathName === sub.href;
                        return (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={handleClose}
                            className={`
                              px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200
                              ${isSubActive ? "bg-[#1e2a6e] text-white" : "text-[#1e2a6e]"}
                              hover:bg-[#1e2a6e]/10
                            `}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 p-4">
          {socialLinks.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full shadow-md hover:opacity-90 transition-opacity"
                style={{ backgroundColor: item.bg, color: "white" }}
              >
                {React.cloneElement(item.icon, { className: "w-6 h-6" })}
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SideMenu;