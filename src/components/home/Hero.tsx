"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-foreground">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              Next-Gen Logistics Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              Precision Motion. <br />
              <span className="text-accent">Global Reach.</span>
            </h1>
            <p className="text-xl text-background/70 mb-10 leading-relaxed max-w-2xl">
              Empowering your business with seamless supply chain intelligence and high-velocity freight services. Authorized partner of global leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="group bg-accent text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                Track Shipment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Our Services
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"
      />
    </section>
  );
}
