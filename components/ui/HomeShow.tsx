"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

const SocialProof: React.FC = () => {
  return (
    <section className="w-full bg-[#f0f2f8] py-20">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8">

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold text-gray-900 text-center"
          >
            Don't Just Take Our Word For It.
          </motion.h2>

          {/* Rating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {/* Google */}
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-sm px-5 py-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="font-bold text-sm text-gray-900 leading-none">5.0</p>
                <p className="text-xs text-gray-400">Google Rating</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-sm px-5 py-3">
              <div className="w-9 h-9 rounded-lg bg-[#1877F2] flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="font-bold text-sm text-gray-900 leading-none">5/5</p>
                <p className="text-xs text-gray-400">Facebook Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full bg-[#1e2a6e] rounded-2xl px-10 py-8 text-center overflow-hidden"
          >
            {/* Big quote mark */}
            <span className="absolute top-4 left-6 text-6xl text-white/20 font-serif leading-none select-none">"</span>

            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
            </div>

            <p className="text-white font-semibold text-lg italic mb-3">
              "Professional, dependable, and top quality!"
            </p>

            <p className="text-blue-300 text-sm">— Verified Google Review</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1e2a6e] text-white font-semibold text-sm px-7 py-3 rounded-md hover:bg-[#16205a] transition"
            >
              📋 Get Your Free Estimate Today
            </Link>
          </motion.div>

        </div>
    </section>
  );
};

export default SocialProof;