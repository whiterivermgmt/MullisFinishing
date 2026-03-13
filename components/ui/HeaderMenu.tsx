"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";
import { headerData } from "@/Constants/data";

interface HeaderMenuProps {
  items: typeof headerData;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items }) => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathName = usePathname();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleMouseEnter = (index: number, hasSubmenu: boolean) => {
    if (!hasSubmenu) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = (hasSubmenu: boolean) => {
    if (!hasSubmenu) return;
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150); // 150ms grace period so dropdown doesn't vanish instantly
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 150);
  };

  return (
    <nav className="hidden lg:flex items-center justify-center relative z-20 h-14 w-full px-4">
      <div className="flex items-center gap-8 flex-nowrap">
        {items.map((item, index) => {
          const isActive = pathName === item.href;
          const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

          return (
            <div
              key={item.title}
              className="relative flex items-center gap-1 min-w-0"
              onMouseEnter={() => handleMouseEnter(index, hasSubmenu)}
              onMouseLeave={() => handleMouseLeave(hasSubmenu)}
            >
              <Link
                href={item.href}
                className={`
                  text-sm font-semibold tracking-wide transition-all duration-200
                  flex items-center gap-1 min-w-0 whitespace-nowrap
                  ${isActive ? "text-blue-200" : "text-white"}
                  hover:text-blue-200
                `}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.title}
                {hasSubmenu && (
                  <span className={`text-xs transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                )}
              </Link>

              {/* Dropdown */}
              {hasSubmenu && openIndex === index && (
                <div
                  className="absolute top-full left-0 z-30 pt-3"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <DropdownMenu menuTitle={item.title} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default HeaderMenu;