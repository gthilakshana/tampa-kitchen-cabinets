"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHardHat } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image (Unsplash) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury modern kitchen cabinets Tampa showroom"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        
        {/* Urgency Badge */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-green-800 text-white px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm border border-white/10"
          >
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            Limited Stock Available
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-10  text-white">

     

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-7xl font-bold mb-6 mt-10 tracking-tight uppercase"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          YOUR DREAM KITCHEN <br />
          <span className="text-green-800">STARTS HERE IN TAMPA</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-light"
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
          className="flex flex-wrap justify-center gap-8 text-sm sm:text-base text-gray-300 mb-12 font-medium"
        >
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-600" /> Serving Tampa, Carrollwood & surrounding areas
          </span>
          <span className="flex items-center gap-2">
            <FaHardHat className="text-green-800" /> Contractor pricing available
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          <a
            href="#quote"
            className="bg-green-800 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-sm transition-all shadow-md uppercase tracking-wider text-sm"
          >
            Get a Free Quote
          </a>

          <a
            href="#showroom"
            className="border border-white/50 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-sm transition-all uppercase tracking-wider text-sm"
          >
            Visit Our Tampa Showroom
          </a>

          <a
            href="tel:+18135550000"
            className="border border-white/50 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-sm transition-all uppercase tracking-wider text-sm"
          >
            Call Now
          </a>
        </motion.div>

      </div>

      
    </section>
  );
}