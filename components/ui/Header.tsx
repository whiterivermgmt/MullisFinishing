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
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = headerData;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <Container fullWidth className="px-6 lg:px-10">
          <div className="relative flex h-20 items-center justify-between">
            {/* LEFT — Desktop Logo + Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <Logo />
              <HeaderMenu items={menuItems} />
            </div>

            {/* LEFT — Mobile Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="
                lg:hidden
                p-2 rounded-md
                cursor-pointer
                hover:bg-blue-50
                transition
              "
              aria-label="Open Menu"
            >
              <AlignLeft className="h-7 w-7 text-[#04398c]" />
            </button>

            {/* CENTER — Mobile Logo ONLY */}
            <div className="absolute left-1/2 -translate-x-1/2 lg:hidden ">
              <Logo />
            </div>

            {/* RIGHT — CTA */}
            <div className="flex items-center">
              <a
                href="/faq"
                className="
                  whitespace-nowrap
                  rounded-full
                  bg-[#04398c]
                  px-5 py-2
                  text-sm md:text-base
                  font-semibold
                  text-white
                  shadow-md
                  transition
                  hover:bg-[#032f73]
                  hover:scale-105
                "
              >
                Contact Us
              </a>
            </div>
          </div>

        </Container>
      </header>

      {/* MOBILE SIDEBAR */}
      <SideMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
