import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import AIModels from "./components/landing/AIModels";
import ProductPreview from "./components/landing/ProductPreview";
import WhyEchoGPT from "./components/landing/WhyEchoGPT";
import Pricing from "./components/landing/Pricing";
import CTA from "./components/landing/CTA";
import FAQ from "./components/landing/FAQ";
import Footer from "./components/landing/Footer";


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <AIModels />
      <ProductPreview />
      <WhyEchoGPT />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
      
    </main>
  );
}