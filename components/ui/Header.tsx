"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SideMenu from "./SideMenu";
import { AlignLeft } from "lucide-react";
import { headerData } from "@/Constants/data";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = headerData;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#2b2f6bdf] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">

            
            {/* Logo  */}
            <div className="hidden lg:flex items-center w-[220px] shrink-0">
              <Logo />
            </div>

            {/* Nav  */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <HeaderMenu items={menuItems} />
            </div>

            {/* CTA  */}
            <div className="hidden lg:flex items-center justify-end w-[220px] shrink-0">
              <a
                href="/contact"
                className="whitespace-nowrap rounded-full bg-[#1e2a6e] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#af1d18] hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* ── MOBILE layout ── */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-red-50 transition"
              aria-label="Open Menu"
            >
              <AlignLeft className="h-6 w-6 text-[#1e2a6e]" />
            </button>

            {/* Mobile logo —  */}
            <div className="lg:hidden flex flex-1 justify-center">
              <Logo />
            </div>

            <div className="lg:hidden flex items-center">
              <a
                href="/contact"
                className="whitespace-nowrap rounded-full bg-[#1e2a6e] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#af1d18]"
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </header>

      <SideMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;