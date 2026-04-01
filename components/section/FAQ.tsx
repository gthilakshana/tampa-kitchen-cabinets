"use client";

import { useState } from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does cabinet installation take?",
    a: "Most cabinet projects can be completed within a few days depending on size and customization. Our team will give you a specific timeline during your free consultation.",
  },
  {
    q: "Do you offer contractor pricing?",
    a: "Yes. We provide competitive wholesale cabinet pricing in Tampa for contractors and builders. Contact us for a bulk pricing package tailored to your project volume.",
  },
  {
    q: "What cabinet styles do you carry?",
    a: "We specialize in modern kitchen cabinets and shaker cabinets in Tampa, available in multiple finishes and colors. Visit our showroom to see the full range in person.",
  },
  {
    q: "Are your cabinets durable for Florida homes?",
    a: "Absolutely. Our cabinets are built to handle Florida's humidity and daily use with long-lasting materials and precision finishes that stand the test of time.",
  },
  {
    q: "Can I visit the showroom before buying?",
    a: "Yes — we highly recommend it! Visit our Tampa cabinet showroom to explore options in person, feel the materials, and get expert guidance from our team.",
  },
  {
    q: "Do you help with kitchen design and layout?",
    a: "Yes. Our team provides personalized design guidance from selection through to completion, helping you maximize your space and achieve the look you want.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-700 text-xs font-bold uppercase mb-3">
            FAQ
          </p>

          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-stone-500 text-lg">
            Everything you need to know before starting your kitchen transformation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`border rounded-sm transition-all ${
                  isOpen
                    ? "border-green-300 bg-white shadow-sm"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className={`font-semibold text-sm pr-4 ${
                      isOpen ? "text-green-700" : "text-stone-800"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-sm transition-all ${
                      isOpen
                        ? "bg-green-700 text-white"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={12}
                    />
                  </span>
                </button>

                {/* Animated Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-green-100"
                    >
                      <p className="px-6 py-4 text-stone-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 text-sm mb-4">
            Still have questions?
          </p>

          <a
            href="tel:+18135550000"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-sm transition-all"
          >
            <FaPhoneAlt />
            Call Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}