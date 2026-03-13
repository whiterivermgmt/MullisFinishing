"use client";

import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import Specialist from "@/components/ui/Specialist";
import Services from "@/components/ui/Services";
import Reviews from "@/components/ui/Reviews";
import OurWork from "@/components/ui/OurWork";
import ContactForm from "@/components/ui/ContactForm";

const HomePage = () => {
  return (
    <main className="bg-white flex flex-col items-center space-y-20">

      {/* Hero Section */}
      <section className="relative w-full mt-6">
        <HeroBanner />
      </section>

      <Specialist />
      <Services />
      <Reviews />
      <OurWork />
      

      <section className="w-full">
        <ContactForm />
      </section>

    </main>
  );
};

export default HomePage;