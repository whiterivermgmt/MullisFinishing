"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#04398c]">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Have a question or want to get in touch? Fill out the form below and
            our team will respond as soon as possible.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-6"
        >
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]"
            />
          </div>

          {/* Phone + ZIP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]"
              />
            </div>
          </div>

          {/* How did you learn about us */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              How Did You Learn About Us
            </label>
            <select className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]">
              <option value="">Select an option</option>
              <option>Friend or Family</option>
              <option>Google Search</option>
              <option>Social Media</option>
              <option>Existing Customer</option>
              <option>Other</option>
            </select>
          </div>

          {/* Existing Customer */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="existingCustomer"
              className="w-5 h-5 accent-[#04398c]"
            />
            <label
              htmlFor="existingCustomer"
              className="text-sm text-gray-700 font-medium"
            >
              I am an existing customer
            </label>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Please Enter Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04398c]"
            />
          </div>

          {/* Mobile Opt-In */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="mobileOptIn"
              className="mt-1 w-5 h-5 accent-[#04398c]"
            />
            <label
              htmlFor="mobileOptIn"
              className="text-sm text-gray-600 leading-relaxed"
            >
              I agree to receive mobile messages and updates. Message and data
              rates may apply.
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-[#04398c]
                px-8 py-3
                text-white font-semibold
                shadow-md
                transition
                hover:bg-[#032f73]
                hover:scale-105
              "
            >
              Submit Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
