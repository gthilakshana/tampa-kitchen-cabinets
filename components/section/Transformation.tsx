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
          <div>
            <p className="text-green-700 text-xs font-bold uppercase tracking-widest mb-3">
              Kitchen Transformation
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Transform Your Kitchen.{" "}
              <span className="text-green-700">Transform Your Home.</span>
            </h2>

            <p className="text-stone-500 text-lg mb-6">
              Your kitchen is more than just a place to cook — it’s where life happens.
            </p>

            <p className="text-stone-500 mb-8">
              With our modern kitchen cabinets Tampa homeowners love, you can create a space that is both functional and beautiful.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded-sm">
                    <FaCheck size={12} />
                  </span>
                  <span className="text-stone-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#quote"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-sm font-bold inline-block"
            >
              Get a Free Quote
            </a>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            {/* IMAGE */}
            <div className="relative h-64 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77"
                alt="Modern Kitchen"
                fill
                className="object-cover"
              />
            </div>

            {/* BEFORE / AFTER */}
            {beforeAfter.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border border-stone-200 rounded-sm overflow-hidden"
              >
                <div className="bg-stone-800 px-5 py-4 flex items-center gap-2 text-stone-300 text-sm">
                  <FaTimes className="text-red-500" />
                  {item.before}
                </div>

                <div className="bg-white px-5 py-4 border-l border-green-200 flex items-center gap-2 text-stone-800 text-sm">
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

          {/* IMAGE */}
          <div className="relative h-[420px] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Kitchen Storage"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-green-700 text-xs font-bold uppercase tracking-widest mb-3">
              Smart Storage
            </p>

            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Designed for Real Life
            </h2>

            <p className="text-stone-500 text-lg mb-8">
              We don’t just sell cabinets — we help you design a better way to live.
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
            <p className="text-green-500 text-xs uppercase tracking-widest mb-3">
              Who We Serve
            </p>

            <h2 className="text-4xl font-bold text-white">
              Built for Homeowners & Professionals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* HOMEOWNERS */}
            <div className="bg-stone-800 p-8 rounded-sm hover:shadow-lg transition">
              <FaHome className="text-green-500 text-3xl mb-6" />
              <h3 className="text-white text-2xl font-bold mb-4">
                Homeowners
              </h3>
              <p className="text-stone-400 text-sm">
                Full kitchen remodels, modern upgrades, and personalized design guidance.
              </p>
            </div>

            {/* CONTRACTORS */}
            <div className="bg-red-600 p-8 rounded-sm hover:shadow-lg transition">
              <FaHardHat className="text-white text-3xl mb-6" />
              <h3 className="text-white text-2xl font-bold mb-4">
                Contractors & Builders
              </h3>
              <p className="text-red-100 text-sm">
                Wholesale pricing, bulk supply, and fast turnaround to keep projects on schedule.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#quote"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 font-bold rounded-sm"
            >
              Get Contractor Pricing Today
            </a>
          </div>

        </div>
      </section>
    </>
  );
}