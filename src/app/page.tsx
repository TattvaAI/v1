import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <ServicesPreview />
      <Stats />
      <div className="py-32 bg-surface text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to move your business forward?</h2>
        <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
          Contact our logistics experts today for a custom consultation and see how Shakuns Freight can optimize your supply chain.
        </p>
        <button className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-accent/20">
          Get a Custom Quote
        </button>
      </div>
      <Footer />
    </main>
  );
}
