"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Leaf, Droplet, FileText } from "lucide-react";

/**
 * ============================
 * Types
 * ============================
 */

type COAItem = {
  name: string;
  description: string;
  pdfUrl: string;
};

type COASection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: COAItem[];
};

/**
 * ============================
 * Constants (easy to update)
 * ============================
 */

const DEFAULT_PDF = "/e0298bfa-9551-4046-8190-9e1627c10d67_Update.pdf";

const SECTIONS: COASection[] = [
  {
    id: "strains",
    title: "Strains",
    icon: <Leaf size={40} className="text-green-500" />,
    items: [
      {
        name: "Blue Dream",
        description:
          "A classic hybrid with balanced effects, sweet berry aroma, and smooth smoke.",
        pdfUrl: DEFAULT_PDF,
      },
      {
        name: "Sour Diesel",
        description:
          "Energetic sativa with pungent diesel scent, perfect for daytime use.",
        pdfUrl: DEFAULT_PDF,
      },
      {
        name: "Girl Scout Cookies",
        description:
          "Award-winning hybrid with sweet and earthy flavors, ideal for relaxation.",
        pdfUrl: DEFAULT_PDF,
      },
      {
        name: "OG Kush",
        description:
          "Legendary indica-dominant strain, famous for stress relief and euphoric effects.",
        pdfUrl: DEFAULT_PDF,
      },
    ],
  },
  {
    id: "dabs",
    title: "Dabs",
    icon: <Droplet size={40} className="text-blue-500" />,
    items: [
      {
        name: "Shatter",
        description: "Concentrated cannabis extract with potent effects.",
        pdfUrl: DEFAULT_PDF,
      },
      {
        name: "Wax",
        description: "Soft, malleable concentrate for dabbing.",
        pdfUrl: DEFAULT_PDF,
      },
      {
        name: "Live Resin",
        description: "Fresh frozen cannabis extract for flavorful dabs.",
        pdfUrl: DEFAULT_PDF,
      },
      {
        name: "Rosin",
        description:
          "Solventless concentrate extracted with heat and pressure.",
        pdfUrl: DEFAULT_PDF,
      },
    ],
  },
];

/**
 * ============================
 * Reusable Components
 * ============================
 */

function COAItemRow({ item, icon }: { item: COAItem; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        {icon}
        <div>
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>

      {item.pdfUrl ? (
        <a
          href={item.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-shop_light_green text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
        >
          <FileText size={16} /> View Certificate
        </a>
      ) : (
        <span className="text-sm text-gray-500">No certificate available</span>
      )}
    </div>
  );
}

/**
 * ============================
 * Page
 * ============================
 */

export default function COAPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-5xl font-bold text-center text-gray-900">
        Certificates of Analysis
      </h1>

      {/* Member Menu */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          Member Menu <Leaf size={24} className="text-green-500" />
        </h2>

        <a
          href={DEFAULT_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-shop_light_green text-black font-medium py-2 px-6 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
        >
          <FileText size={18} /> View Menu
        </a>
      </div>

      {/* COA Sections */}
      <Accordion type="multiple" className="space-y-4">
        {SECTIONS.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="bg-white rounded-xl shadow-md"
          >
            <AccordionTrigger className="p-6 text-lg font-semibold text-gray-800">
              {section.title}
            </AccordionTrigger>

            <AccordionContent className="p-6 space-y-4">
              {section.items.length > 0 ? (
                section.items.map((item) => (
                  <COAItemRow
                    key={item.name}
                    item={item}
                    icon={section.icon}
                  />
                ))
              ) : (
                <p className="text-gray-500">No items available.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
