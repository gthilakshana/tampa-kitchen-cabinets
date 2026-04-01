"use client";

import { useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaQuestionCircle, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does cabinet installation take?",
    a: "Most cabinet projects can be completed within a few days depending on size and customization.",
  },
  {
    q: "Do you offer contractor pricing?",
    a: "Yes. We provide competitive wholesale cabinet pricing in Tampa for contractors and builders.",
  },
  {
    q: "What cabinet styles do you carry?",
    a: "We specialize in modern kitchen cabinets and shaker cabinets in Tampa, with multiple finishes and colors available.",
  },
  {
    q: "Are your cabinets durable for Florida homes?",
    a: "Absolutely. Our cabinets are built to handle humidity and daily use with long-lasting materials.",
  },
  {
    q: "Can I visit the showroom before buying?",
    a: "Yes. We highly recommend visiting our Tampa cabinet showroom to explore options in person.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-800 text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-stone-300" /> FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 uppercase"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-stone-500 text-lg">
            Everything you need to know before starting your kitchen transformation.
          </p>
        </motion.div>

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

        {/* FINAL CTA SECTION */}
        <div className="mt-24 bg-green-800 rounded-sm p-12 text-center shadow-lg relative overflow-hidden border border-green-900">
           
           <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-4 relative z-10 flex items-center justify-center gap-2">
             <FaStar className="text-red-600" /> FINAL CTA SECTION
           </p>

           <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 uppercase tracking-tight relative z-10"
           style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
             READY TO UPGRADE YOUR KITCHEN?
           </h2>

           <p className="text-white/70 text-xl font-light mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
             Your perfect kitchen cabinets are waiting. <br />
             <span className="text-white italic">Visit our showroom, speak with our team, and start your transformation today.</span>
           </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <a
               href="tel:+18135550000"
               className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all shadow-md"
             >
               Call Now
             </a>

             <a
               href="#quote"
               className="bg-white hover:bg-stone-100 text-green-900 font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all shadow-md"
             >
               Get Free Quote
             </a>

             <a
               href="https://maps.google.com/?q=8524+E+Adamo+Dr,+Tampa,+FL+33619"
               target="_blank"
               className="border border-white/30 hover:bg-white/10 text-white font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all"
             >
               Visit Showroom
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}