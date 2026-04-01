"use client";

import { 
  FaCheckCircle, 
  FaTruck, 
  FaStore, 
  FaUsers, 
  FaClock, 
  FaStar 
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Premium Quality",
    desc: "Premium kitchen cabinets Tampa homeowners trust — built for beauty and durability.",
  },
  {
    icon: <FaStar />,
    title: "Modern & Shaker Styles",
    desc: "A curated selection of modern + shaker styles built for today’s homes and trends.",
  },
  {
    icon: <FaTruck />,
    title: "Warehouse-Direct Pricing",
    desc: "No middleman markup. Get high-end quality at factory-direct warehouse pricing.",
  },
  {
    icon: <FaClock />,
    title: "Fast Availability",
    desc: "Ready stock and fast turnaround for contractors and remodelers to keep jobs on schedule.",
  },
  {
    icon: <FaStore />,
    title: "Local Showroom",
    desc: "Experience quality firsthand at our local showroom experience in Tampa.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Guidance",
    desc: "Expert guidance from selection to completion to ensure your dream kitchen becomes reality.",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-800 text-xs font-bold tracking-widest uppercase mb-3">
             WHY CHOOSE SOUTHERN DESIGN WAREHOUSE
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-5 uppercase"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            WHERE QUALITY <span className="text-red-600">MEETS VALUE</span>
          </h2>

          <p className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed">
            At Southern Design Warehouse, we help you turn ordinary kitchens into stunning, functional spaces without overpaying.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-stone-100 rounded-sm hover:border-green-800 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-green-50 text-green-800 rounded-sm flex items-center justify-center mb-5 group-hover:bg-green-800 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="text-stone-900 font-bold text-lg mb-2">
                {feature.title}
              </h3>

              <p className="text-stone-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-stone-900 rounded-sm p-10 text-center">
          <p className="text-stone-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Stop Settling
          </p>

          <p className="text-white text-3xl sm:text-5xl font-bold mb-4 tracking-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Stop settling for outdated kitchens.
          </p>

          <p className="text-gray-300 text-xl sm:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Create a space you’re proud to walk into every day.
          </p>

          <a
            href="#quote"
            className="inline-block bg-green-800 hover:bg-red-600 text-white font-bold px-10 py-4 rounded-sm transition-colors shadow-lg"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}