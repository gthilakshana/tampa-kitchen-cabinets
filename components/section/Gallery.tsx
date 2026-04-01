"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaExpand, FaImage } from "react-icons/fa";

export default function Gallery() {
 type GalleryItem = {
  label: string;
  img: string;
};

const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = [
    {
      label: "Modern White",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Shaker Grey",
      img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Warm Wood",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Dark Espresso",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Navy Blue",
      img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
    },
    {
      label: "Sage Green",
      img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-800 text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
            <FaImage className="text-green-800" /> PRODUCT GALLERY
          </p>

          <h2 className="text-4xl sm:text-6xl font-bold text-stone-900 mb-4 uppercase"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            SEE THE TRANSFORMATION
          </h2>

          <p className="text-stone-500 text-xl font-light">
            Upgrade Your Space. Built to Impress. Designed for Living.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.img}
                alt={`${item.label} kitchen cabinets installation in Tampa`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-stone-400 text-sm">
          Visit our Tampa showroom to see the full collection in person →{" "}
          <a href="#quote" className="text-green-700 font-semibold hover:underline">
            Book a Visit
          </a>
        </p>

        {/* MODAL (Zoom View) */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white text-2xl hover:text-red-500"
              >
                <FaTimes />
              </button>

              {/* Image Zoom */}
              <motion.img
                src={selected.img}
                alt={selected.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-h-[90vh] w-auto rounded-sm shadow-xl"
              />

              {/* Label */}
              <p className="absolute bottom-6 text-white text-lg font-semibold">
                {selected.label}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}