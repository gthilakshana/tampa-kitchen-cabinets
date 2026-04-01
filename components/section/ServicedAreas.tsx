"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const areas = [
  "Tampa",
  "Carrollwood",
  "North Tampa",
  "Surrounding Areas",
];

export default function LocalTrust() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-green-700 text-xs font-bold uppercase tracking-widest mb-3">
              Local Trust
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-5 leading-tight">
              Your Local Cabinet
              <br />
              Showroom in Tampa
            </h2>

            <p className="text-stone-500 text-lg mb-8 leading-relaxed">
              We proudly serve homeowners and contractors across the Tampa Bay
              area with premium cabinet solutions and expert service.
            </p>

            {/* Areas */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-3 bg-stone-50 border border-stone-100 rounded-sm hover:shadow-md transition"
                >
                  <FaMapMarkerAlt className="text-green-700 text-sm" />
                  <span className="text-stone-700 text-sm font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-stone-500 leading-relaxed mb-8">
              Visit our cabinet showroom in Tampa and experience quality
              firsthand. See finishes, feel materials, and choose with
              confidence.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="bg-green-700 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-sm text-center transition"
              >
                Visit Showroom
              </a>

              <a
                href="tel:+18135550000"
                className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-6 py-3 rounded-sm text-center transition"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* RIGHT — VISUAL / MAP STYLE BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-sm overflow-hidden shadow-lg border border-stone-200">
              <iframe
                src="https://www.google.com/maps?q=8524+E+Adamo+Dr,+Tampa,+FL+33619,+USA&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Tampa Showroom Location"
              ></iframe>
            </div>

            {/* Overlay Badge */}
            <div className="absolute top-4 left-4 bg-stone-900 text-white px-4 py-2 rounded-sm shadow-lg">
              <p className="text-xs text-stone-400 uppercase">Serving</p>
              <p className="text-green-500 font-bold text-sm">
                Tampa Bay Area
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}