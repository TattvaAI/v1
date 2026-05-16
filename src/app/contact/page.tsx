import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Get <br /><span className="text-accent">Moving.</span></h1>
          <p className="text-xl text-background/60 max-w-2xl leading-relaxed">
            Ready to optimize your logistics? Our experts are standing by to design a custom solution for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
          
          {/* Info Side */}
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface border rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold">+91 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface border rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-bold">inquiry@shakunsfreight.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-surface border rounded-xl flex items-center justify-center text-accent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="font-bold">Ambala, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-accent/5 rounded-2xl border border-accent/10">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <MessageSquare size={20} className="text-accent" />
                Quick Inquiry
              </h4>
              <p className="text-muted text-sm mb-6">Need an immediate quote? Connect with us directly on WhatsApp for real-time support.</p>
              <button className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-[1.5] bg-surface p-8 md:p-12 rounded-3xl border shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-background border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-background border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted uppercase tracking-wider">Service Required</label>
                <select className="w-full bg-background border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none">
                  <option>Express Freight</option>
                  <option>Warehousing</option>
                  <option>Supply Chain Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted uppercase tracking-wider">Message</label>
                <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full bg-background border rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted/20 relative grayscale opacity-50">
        <div className="absolute inset-0 flex items-center justify-center">
           <p className="text-muted font-bold tracking-widest uppercase text-xs">Google Maps Integration Placeholder</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
