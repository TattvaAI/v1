import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Legacy of <span className="text-accent">Trust.</span> <br />
              Future of <span className="text-accent">Flow.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Shakuns Freight is a premier logistics provider dedicated to redefining the standards of operational excellence in the Indian and global markets.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-accent">
            <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-muted text-lg leading-relaxed mb-8 text-pretty">
                To provide seamless, tech-enabled logistics solutions that empower businesses to scale without borders. We bridge the gap between complexity and clarity through precision execution.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-2">15+</h4>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-2">100%</h4>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted">Commitment</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Reliability", icon: Shield, desc: "Unyielding commitment to timelines and safety." },
                { title: "Innovation", icon: Zap, desc: "Leveraging technology to optimize every route." },
                { title: "Customer-Centric", icon: Users, desc: "Your growth is our primary operational metric." },
                { title: "Global Reach", icon: Target, desc: "Authorized partner of world-leading networks." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-surface border hover:border-accent/20 transition-colors shadow-sm">
                  <item.icon className="text-accent mb-4" size={24} />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Partners */}
      <section className="py-24 border-y bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-16 opacity-50 uppercase tracking-[0.2em] text-xs">Our Strategic Global Network</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40">
            <span className="text-3xl font-black italic tracking-tighter">DHL</span>
            <span className="text-3xl font-black tracking-tighter">FedEx</span>
            <span className="text-3xl font-black tracking-tighter uppercase">DTDC</span>
            <span className="text-3xl font-black tracking-tighter uppercase">UPS</span>
            <span className="text-3xl font-black italic tracking-tighter">BlueDart</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
