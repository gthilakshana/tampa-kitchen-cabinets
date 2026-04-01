"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaStar, FaUserTie } from "react-icons/fa";

export default function QuoteForm() {
  return (
    <>
      {/* FINAL CTA SECTION */}
      <section
        id="quote"
        className="relative py-24 bg-gradient-to-br from-green-700 to-green-800 overflow-hidden"
      >
        {/* Shape */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 text-white"
          >
            <p className="text-green-200 text-xs font-bold uppercase mb-3">
              Get Started
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ready to Upgrade Your Kitchen?
            </h2>

            <p className="text-green-100 text-lg mb-2">
              Your perfect kitchen cabinets are waiting.
            </p>

            <p className="text-green-200 text-sm">
              Visit our showroom, speak with our team, and start your transformation today.
            </p>
          </motion.div>

          {/* BADGES */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="flex items-center gap-2 bg-red-600 text-white text-xs px-4 py-2 rounded-sm">
              ⚡ Limited stock available
            </span>

            <span className="flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-2 rounded-sm">
              <FaUserTie /> Bulk Pricing Available
            </span>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-sm p-8 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                placeholder="Your full name"
                className="border p-3 rounded-sm focus:ring-2 focus:ring-green-600 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="border p-3 rounded-sm focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            <select className="w-full border p-3 mb-5 rounded-sm focus:ring-2 focus:ring-green-600">
              <option>Select project type</option>
              <option>Full Kitchen Remodel</option>
              <option>Cabinet Replacement</option>
              <option>New Construction</option>
              <option>Contractor</option>
            </select>

            <button className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-4 rounded-sm transition-all hover:scale-105">
              Get Free Quote
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              No spam. Response within 1 business day.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            
            <a
              href="tel:+18135550000"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-sm"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="#quote"
              className="flex items-center justify-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-sm"
            >
              Get Free Quote
            </a>

            <a
              href="#showroom"
              className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-sm hover:bg-white/10"
            >
              <FaMapMarkerAlt /> Visit Showroom
            </a>
          </div>

         

        </div>
      </section>

      {/* STICKY MOBILE CALL BUTTON */}
      <a
        href="tel:+18135550000"
        className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 sm:hidden"
      >
        <FaPhoneAlt />
        Call Now
      </a>
    </>
  );
}