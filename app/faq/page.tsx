"use client";

import { motion } from "framer-motion";

const ComingSoonPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#04398c]/10 text-[#04398c] text-sm font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-[#04398c] animate-pulse" />
          Coming Soon
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#04398c]"
        >
          Something Great Is On The Way
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 bg-[#04398c] mx-auto my-6 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          We’re working behind the scenes to bring you something new.
          Check back soon for updates, events, and exciting announcements
          from Escos.
        </motion.p>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10"
        >
          <span className="text-sm text-gray-500">
            Follow us on social media to stay in the loop.
          </span>
        </motion.div>
      </div>
    </main>
  );
};

export default ComingSoonPage;
