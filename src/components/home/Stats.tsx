"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Shipments Delivered", value: "2M+" },
  { label: "Global Partners", value: "50+" },
  { label: "Operational Reach", value: "190+" },
  { label: "Reliability Rate", value: "99.9%" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-black text-accent mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-background/50 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
