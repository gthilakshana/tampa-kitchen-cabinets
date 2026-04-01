"use client";

import { useEffect } from "react";
import Script from "next/script";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function GoogleReviews() {
  useEffect(() => {
  const findAndFix = (root: Document | ShadowRoot | HTMLElement | null) => {
  if (!root) return;

  const containers = root.querySelectorAll("div");
  containers.forEach((div) => {
    if ((div as HTMLElement).style?.maxWidth) {
      (div as HTMLElement).style.maxWidth = "100%";
    }
  });

  const brandingLinks = root.querySelectorAll('a[href*="featurable"]');
  brandingLinks.forEach((link) => {
    const container = link.closest("div") || link;
    (container as HTMLElement).style.display = "none";
  });

  const allElements = root.querySelectorAll("*");
  allElements.forEach((el) => {
    if ((el as HTMLElement).shadowRoot) {
      findAndFix((el as HTMLElement).shadowRoot);
    }
  });
};

    const applyFixes = () => {
      const widget = document.getElementById(
        "featurable-ea5ced90-f759-4114-961d-d3cee1fef957"
      );
      if (!widget) return;

      widget.style.maxWidth = "100%";
      widget.style.width = "100%";

      findAndFix(document);
    };

    const interval = setInterval(applyFixes, 1000);
    const timeout = setTimeout(() => clearInterval(interval), 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-green-800 text-xs font-bold uppercase mb-3 flex items-center justify-center gap-2 text-center">
             <FaStar className="text-red-600" /> GOOGLE REVIEWS SECTION
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 uppercase"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            WHAT OUR <span className="text-red-600">CUSTOMERS SAY</span>
          </h2>

          <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Real feedback from real customers. <br />
            <span className="italic font-normal">See why homeowners and contractors trust us.</span>
          </p>

        
        </motion.div>

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">

          <p className="text-stone-500 text-sm text-center lg:text-left">
            Read verified Google reviews and discover why customers choose us for quality and service.
          </p>

          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ9wVaf7PPwogRmpdkStSu2Pg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-sm transition-all shadow-md uppercase tracking-widest text-xs"
          >
            Write a Review
          </a>
        </div>

        {/* REVIEWS CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-sm shadow-lg border border-stone-100 p-4"
        >
          <div
            id="featurable-ea5ced90-f759-4114-961d-d3cee1fef957"
            data-featurable-async
            className="w-full"
          ></div>
        </motion.div>

        <Script
          src="https://featurable.com/assets/v2/carousel_default.min.js"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
      </div>

      {/* FIXES */}
      <style jsx global>{`
        #featurable-ea5ced90-f759-4114-961d-d3cee1fef957,
        #featurable-ea5ced90-f759-4114-961d-d3cee1fef957 > div {
          max-width: 100% !important;
          width: 100% !important;
        }

        [id^="featurable"] h1,
        [id^="featurable"] h2 {
          display: none !important;
        }

        a[href*="featurable"] {
          display: none !important;
        }
      `}</style>
    </section>
  );
}