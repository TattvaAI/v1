"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "DHL", logo: "DHL" },
  { name: "FedEx", logo: "FedEx" },
  { name: "DTDC", logo: "DTDC" },
  { name: "Blue Dart", logo: "Blue Dart" },
  { name: "UPS", logo: "UPS" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-surface border-y">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold text-muted uppercase tracking-[0.3em] mb-12">
          Authorized Global Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-black text-foreground/40 tracking-tighter"
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
