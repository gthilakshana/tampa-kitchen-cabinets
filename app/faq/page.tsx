import FAQ from "@/components/section/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FREQUENTLY ASKED QUESTIONS | SOUTHERN DESIGN WAREHOUSE",
  description: "Find answers to common questions about kitchen cabinets, wholesale pricing, installation, and our showroom in Tampa.",
};

export default function FAQPage() {
  return (
    <main className="pt-20">
      {/* Dedidated Page Banner */}
      <section className="bg-green-800 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-7xl font-bold text-white mb-4 uppercase tracking-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            FAQ
          </h1>
          <p className="text-white/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Everything You Need To Know About Your Kitchen Transformation.
          </p>
        </div>
      </section>

      {/* Existing FAQ component */}
      <FAQ />

      {/* Extra Support Section */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-6 uppercase"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            STILL HAVE QUESTIONS?
          </h2>
          <p className="text-stone-500 mb-10 text-lg">
            Our team is here to help you choose the perfect cabinets for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+18138451111" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all shadow-md">
              Call Us Now
            </a>
            <a href="mailto:southerndesignwarehouse@gmail.com" className="border border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-bold px-10 py-5 rounded-sm uppercase tracking-widest text-sm transition-all">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
