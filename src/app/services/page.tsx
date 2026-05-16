import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Truck, Globe, Box, Settings, ArrowRight, Clock, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Express Freight",
    description: "Time-critical delivery solutions with optimized routing for maximum velocity. We handle your priority cargo with absolute care.",
    icon: Truck,
    features: ["Domestic Express", "Overnight Delivery", "Priority Handling"]
  },
  {
    title: "Global Logistics",
    description: "Comprehensive end-to-end international shipping across air, sea, and land networks with complete compliance management.",
    icon: Globe,
    features: ["International Forwarding", "Customs Clearance", "Cross-Border Support"]
  },
  {
    title: "Integrated Warehousing",
    description: "Advanced inventory management and secure storage solutions integrated with your supply chain for real-time visibility.",
    icon: Box,
    features: ["Safe Storage", "Inventory Management", "Pick & Pack Services"]
  },
  {
    title: "Supply Chain Solutions",
    description: "Strategic consulting to optimize your entire operational flow, reducing overhead and increasing efficiency.",
    icon: Settings,
    features: ["Network Optimization", "Strategic Sourcing", "Process Automation"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <section className="py-24 bg-surface border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black mb-8 tracking-tighter uppercase">Professional <br /><span className="text-accent">Solutions.</span></h1>
            <p className="text-muted text-lg leading-relaxed">
              We provide a full spectrum of logistics services designed to handle the complexities of modern global trade. Precision at every scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 rounded-[40px] bg-white border border-slate-100 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all">
                <div className={idx % 2 === 1 ? "lg:order-last" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-muted text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map(feature => (
                      <li key={feature} className="flex gap-3 items-center text-sm font-semibold text-foreground/80 uppercase tracking-widest">
                        <div className="h-1 w-4 bg-accent" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-foreground text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-colors">
                    Request Consultation <ArrowRight size={20} />
                  </button>
                </div>
                <div className="aspect-video rounded-3xl bg-slate-100 overflow-hidden relative">
                   <div className="absolute inset-0 bg-accent/5" />
                   <div className="absolute inset-0 flex items-center justify-center text-accent/10">
                      <service.icon size={200} strokeWidth={0.5} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
                <Clock className="mx-auto text-accent" size={32} />
                <h3 className="text-xl font-bold">24/7 Operations</h3>
                <p className="text-white/40 text-sm">Round-the-clock monitoring and support for your critical cargo.</p>
            </div>
            <div className="space-y-4">
                <ShieldCheck className="mx-auto text-accent" size={32} />
                <h3 className="text-xl font-bold">Full Insurance</h3>
                <p className="text-white/40 text-sm">Comprehensive coverage options for maximum peace of mind.</p>
            </div>
            <div className="space-y-4">
                <Globe className="mx-auto text-accent" size={32} />
                <h3 className="text-xl font-bold">Global Network</h3>
                <p className="text-white/40 text-sm">Integrated with the world's most reliable courier networks.</p>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
