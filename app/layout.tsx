import type { Metadata } from "next";
import "./globals.css";
import  Header  from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    template: "%s - Mullis Finishing",
    default: "Mullis Finishing",
},
description: "Fine finishes for almost any surface — serving contractors, builders, and homeowners across Lawrence County and beyond."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
