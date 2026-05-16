import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Architects of <br /> Global Motion.</h1>
          <p className="text-xl text-background/60 max-w-2xl leading-relaxed">
            Shakuns Freight is more than a logistics provider. We are the precision engine behind some of the world's most demanding supply chains.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Reliability", desc: "Consistency in every shipment, every day.", icon: Shield },
            { title: "Precision", desc: "Data-driven accuracy in tracking and delivery.", icon: Target },
            { title: "Velocity", desc: "High-speed networks optimized for modern business.", icon: Zap },
            { title: "Partnership", desc: "We grow when your business moves forward.", icon: Users },
          ].map((v) => (
            <div key={v.title} className="space-y-4">
              <div className="text-accent"><v.icon size={32} /></div>
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Our Operational <span className="text-accent">Philosophy</span></h2>
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-8 py-2">
                <h4 className="font-bold text-lg mb-2">Technology First</h4>
                <p className="text-muted text-sm">We leverage real-time data and AI-optimized routing to ensure your freight follows the most efficient path possible.</p>
              </div>
              <div className="border-l-4 border-border pl-8 py-2">
                <h4 className="font-bold text-lg mb-2">Human Centric</h4>
                <p className="text-muted text-sm">Beyond the data, our team of dedicated logistics experts provides the personal touch required for complex problem solving.</p>
              </div>
              <div className="border-l-4 border-border pl-8 py-2">
                <h4 className="font-bold text-lg mb-2">Global Standards</h4>
                <p className="text-muted text-sm">As authorized partners of DHL and FedEx, we adhere to the most rigorous international standards of safety and speed.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200")' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
