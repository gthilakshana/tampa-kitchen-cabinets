"use client";

import Image from "next/image";
import {
  FaCheck,
  FaTimes,
  FaUtensils,
  FaBoxes,
  FaMagic,
  FaRulerCombined,
  FaHome,
  FaHardHat,
} from "react-icons/fa";
import { motion } from "framer-motion";

const beforeAfter = [
  {
    before: "Dark, cramped & outdated kitchens",
    after: "Bright, open, modern spaces",
  },
  {
    before: "Wasted space & clutter",
    after: "Smart layouts with maximum storage",
  },
  {
    before: "Old cabinets falling apart",
    after: "Durable, high-quality craftsmanship",
  },
];

const benefits = [
  "Instantly increase your home's value",
  "Create a clean, modern aesthetic",
  "Enjoy durable, long-lasting materials",
  "Experience premium soft-close drawers",
];

const storageFeatures = [
  { icon: <FaUtensils />, label: "Deep drawers for pots, pans & appliances" },
  { icon: <FaBoxes />, label: "Custom pantry solutions for organization" },
  { icon: <FaMagic />, label: "Hidden storage for a clean, modern look" },
  { icon: <FaRulerCombined />, label: "Space-maximizing layouts for any kitchen size" },
];

export default function Transformation() {
  return (
    <>
      {/* TRANSFORMATION */}
      <section id="products" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-green-800 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <FaHome className="text-green-800 text-sm" /> KITCHEN TRANSFORMATION BENEFITS
            </p>

            <h2 className="text-4xl sm:text-6xl font-bold text-stone-900 mb-6 leading-tight uppercase"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              TRANSFORM YOUR KITCHEN. <br />
              <span className="text-green-800">TRANSFORM YOUR HOME.</span>
            </h2>

            <p className="text-stone-600 text-xl font-light mb-8">
              Your kitchen is more than just a place to cook. <span className="font-semibold text-stone-800">It’s where life happens.</span>
            </p>

            <p className="text-stone-500 mb-8 leading-relaxed">
              With our modern kitchen cabinets Tampa homeowners love, you can:
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded-sm">
                    <FaCheck size={12} />
                  </span>
                  <span className="text-stone-700 text-sm italic">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#quote"
              className="bg-green-800 hover:bg-red-600 text-white px-8 py-4 rounded-sm font-bold inline-block transition-colors shadow-md uppercase tracking-widest text-sm"
            >
              Get a Free Quote
            </a>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-5">

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-sm overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77"
                alt="Beautifully renovated kitchen with modern cabinets Tampa"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* BEFORE / AFTER */}
            {beforeAfter.map((item, i) => (
              <div
                key={item.before}
                className="grid grid-cols-2 border border-stone-200 rounded-sm overflow-hidden"
              >
                <div className="bg-stone-800 px-5 py-4 flex items-center gap-2 text-stone-300 text-sm italic">
                  <FaTimes className="text-red-500" />
                  {item.before}
                </div>

                <div className="bg-white px-5 py-4 border-l border-green-200 flex items-center gap-2 text-stone-800 text-sm font-semibold">
                  <FaCheck className="text-green-600" />
                  {item.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMART STORAGE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[420px] rounded-sm overflow-hidden shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Efficient kitchen storage solutions with custom cabinet accessories"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <div>
            <p className="text-green-800 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <FaBoxes className="text-green-800 text-sm" /> SMART STORAGE SOLUTIONS
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              DESIGNED FOR REAL LIFE
            </h2>

            <p className="text-stone-500 text-lg mb-8 leading-relaxed">
              We don’t just sell cabinets. We help you design a <span className="text-green-800 font-semibold italic">better way to live.</span>
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-10">
              {storageFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-4 p-4 bg-stone-50 border border-stone-100 hover:shadow-md transition"
                >
                  <span className="text-green-700 text-lg">{f.icon}</span>
                  <span className="text-stone-700 text-sm">{f.label}</span>
                </div>
              ))}
            </div>

            {/* RESULT */}
            <div className="bg-green-50 border border-green-200 p-6 rounded-sm">
              <p className="text-green-800 font-bold mb-1">The Result:</p>
              <p className="text-stone-600 text-sm">
                Less clutter. More functionality.{" "}
                <span className="text-green-700 font-semibold">
                  Better living.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <p className="text-green-800 text-xs font-bold uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <FaHardHat className="text-green-800 text-sm" /> WHO WE SERVE
            </p>

            <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              BUILT FOR HOMEOWNERS & PROFESSIONALS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* HOMEOWNERS */}
            <div className="bg-stone-800 p-10 rounded-sm border border-stone-700 hover:border-green-800 transition-all group">
              <FaHome className="text-green-800 text-4xl mb-6 group-hover:scale-110 transition" />
              <h3 className="text-white text-2xl font-bold mb-4">
                🏡 HOMEOWNERS
              </h3>
              <ul className="text-stone-400 space-y-3 text-sm">
                <li className="flex items-center gap-2">✔ Full kitchen remodels</li>
                <li className="flex items-center gap-2">✔ Style upgrades with modern or shaker cabinets</li>
                <li className="flex items-center gap-2">✔ Personalized design guidance</li>
              </ul>
            </div>

            {/* CONTRACTORS */}
            <div className="bg-white p-10 rounded-sm hover:shadow-2xl transition-all border-t-4 border-green-800 group relative">
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">BULK PRICING</div>
              <FaHardHat className="text-stone-900 text-4xl mb-6 group-hover:scale-110 transition" />
              <h3 className="text-stone-900 text-2xl font-bold mb-4">
                🏗️ CONTRACTORS, BUILDERS & FLIPPERS
              </h3>
              <ul className="text-stone-500 space-y-3 text-sm">
                <li className="flex items-center gap-2 text-green-800 font-bold italic">✔ Reliable wholesale cabinets Tampa supply</li>
                <li className="flex items-center gap-2">✔ Consistent inventory for ongoing projects</li>
                <li className="flex items-center gap-2">✔ Fast turnaround to keep jobs on schedule</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#quote"
              className="bg-green-800 hover:bg-red-600 text-white px-10 py-5 font-bold rounded-sm uppercase tracking-widest text-sm shadow-lg transition-all"
            >
              Get Contractor Pricing Today
            </a>
          </div>

        </div>
      </section>
    </>
  );
}