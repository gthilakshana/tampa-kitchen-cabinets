"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function StickyCallBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-50 sm:hidden"
        >
          <a
            href="tel:+18135550000"
            className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-colors border-2 border-white/20"
            aria-label="Call Now"
          >
            <FaPhoneAlt className="text-xl animate-pulse" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
