"use client";

import { motion } from "framer-motion";
import { Truck, Package, Shield, Globe, Clock, BarChart } from "lucide-react";

const services = [
  {
    title: "Express Freight",
    description: "Time-critical delivery solutions with real-time tracking and priority handling.",
    icon: Truck,
  },
  {
    title: "Global Logistics",
    description: "End-to-end international shipping across air, sea, and land networks.",
    icon: Globe,
  },
  {
    title: "Warehousing",
    description: "Secure, tech-enabled storage and inventory management for your business assets.",
    icon: Package,
  },
  {
    title: "Supply Chain",
    description: "Strategic consulting and optimization to streamline your operational flow.",
    icon: BarChart,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Operational Excellence. <br />
              <span className="text-accent">Delivered.</span>
            </h2>
            <p className="text-muted text-lg">
              We combine physical scale with digital intelligence to provide logistics solutions that move at the speed of your ambition.
            </p>
          </div>
          <button className="text-accent font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
            View All Services <BarChart size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-surface border hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
