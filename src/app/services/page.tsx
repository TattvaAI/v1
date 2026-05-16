import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Truck, Globe, Box, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    id: "freight",
    title: "Express Freight Services",
    description: "Multi-modal transportation solutions optimized for speed and safety. Whether by air, land, or sea, we ensure your cargo reaches its destination with surgical precision.",
    features: ["Real-time GPS Tracking", "Priority Customs Clearance", "Temperature Controlled Options", "Last-mile Delivery"],
    icon: Truck,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "warehousing",
    title: "Smart Warehousing",
    description: "State-of-the-art storage facilities equipped with advanced WMS (Warehouse Management Systems) to give you total visibility and control over your inventory.",
    features: ["A-Grade Storage Facilities", "Inventory Management", "Pick & Pack Services", "Cross-docking Capabilities"],
    icon: Box,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "supply-chain",
    title: "Supply Chain Support",
    description: "Integrated logistics planning that aligns your physical flow with your business goals. We optimize every touchpoint to reduce lead times and costs.",
    features: ["Network Design", "Cost Optimization", "Risk Management", "Vendor Coordination"],
    icon: Settings,
    image: "https://images.unsplash.com/photo-1454165833767-027ffea7025c?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-background text-foreground text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-accent">Capabilities.</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive logistics infrastructure designed for the modern global economy.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-32">
        <div className="container mx-auto px-6 space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-muted text-lg leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 font-bold text-accent hover:translate-x-2 transition-transform">
                  Inquire About This Service <ArrowRight size={20} />
                </button>
              </div>
              <div className="flex-1 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
