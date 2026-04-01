"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image (Unsplash) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury kitchen"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-amber-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-10  text-white">

     

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl uppercase font-bold  mb-6 mt-10"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Your Dream Kitchen Starts Here in Tampa
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8"
        >
          Upgrade your space with premium modern kitchen cabinets in Tampa and
          timeless shaker cabinets designed for beauty, storage, and everyday
          functionality. <br /><br />
          Whether you're a homeowner or contractor, our cabinet showroom in Tampa
          gives you access to high-quality styles at warehouse pricing.
        </motion.p>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-10"
        >
          <span>📍 Serving Tampa, Carrollwood & surrounding areas</span>
          <span>🏗️ Contractor pricing available</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#quote"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md transition-all hover:scale-105"
          >
            Get a Free Quote
          </a>

          <a
            href="#showroom"
            className="border border-white/30 hover:border-red-600 px-8 py-4 rounded-md backdrop-blur-md transition-all"
          >
            Visit Our Tampa Showroom
          </a>

          <a
            href="tel:+18135550000"
            className="border border-white/30 hover:border-red-600 px-8 py-4 rounded-md backdrop-blur-md transition-all"
          >
            Call Now
          </a>
        </motion.div>

      </div>

      
    </section>
  );
}