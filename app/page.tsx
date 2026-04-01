import Hero from "@/components/section/Hero";
import Features from "@/components/section/Features";
import Transformation from "@/components/section/Transformation";
import ServicedAreas from "@/components/section/ServicedAreas";
import FAQ from "@/components/section/FAQ";
import Gallery from "@/components/section/Gallery";
import GoogleReviews from "@/components/section/GoogleReviews";
import QuoteForm from "@/components/section/QuoteForm";






export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Transformation />
      <Gallery />
      <ServicedAreas />
      <FAQ />
      <GoogleReviews />
      <QuoteForm />
    </main>
  );
}
