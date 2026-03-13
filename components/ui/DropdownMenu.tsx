"use client";

import Link from "next/link";
import React from "react";
import { headerData } from "@/Constants/data";
import { Phone, ChevronRight } from "lucide-react";

interface Service {
  title: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
}

interface DropdownProps {
  menuTitle: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({ menuTitle }) => {
  let services: Service[] =
    headerData.find((item) => item.title === menuTitle)?.submenu || [];

  if (!services.length) return null;

  return (
    <div
      className="w-[480px] rounded-b-2xl bg-white shadow-2xl overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Top accent bar */}
      <div  />

      <div className="p-4 grid grid-cols-2 gap-2">
        {services.map((service) => {
          const IconComponent = service.icon || Phone;
          return (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#f0f2f8] transition-all duration-150"
            >
              {/* Icon */}
              <div className="shrink-0 w-9 h-9 flex items-center justify-center bg-[#1e2a6e]/10 group-hover:bg-[#1e2a6e] rounded-lg transition-colors duration-150">
                <IconComponent className="w-4 h-4 text-[#1e2a6e] group-hover:text-white transition-colors duration-150" />
              </div>

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-sm text-gray-900 group-hover:text-[#1e2a6e] transition-colors leading-snug">
                  {service.title}
                </span>
                <span className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                  {service.description ?? "Professional services."}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-gray-100 px-4 py-3 bg-[#f8f9fc]">
        <Link
          href="/contact"
          className="flex items-center justify-between text-sm font-semibold text-[#1e2a6e] hover:text-[#16205a] transition group"
        >
          <span>Get Your Free Estimate</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;