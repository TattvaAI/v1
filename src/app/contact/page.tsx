import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 bg-background text-foreground">
      <Navbar />
      
      {/* Header */}
      <section className="py-24 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Connect with <br /><span className="text-accent">Excellence.</span></h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Our team of logistics experts is ready to help you optimize your business flow. Reach out today for a strategic consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <div className="p-12 rounded-[40px] bg-white border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold mb-8 tracking-tight">Send an Inquiry</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Full Name</label>
                            <input type="text" className="w-full p-4 rounded-xl bg-background border-none focus:ring-2 focus:ring-accent transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-muted">Email Address</label>
                            <input type="email" className="w-full p-4 rounded-xl bg-background border-none focus:ring-2 focus:ring-accent transition-all" placeholder="john@company.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted">Service Required</label>
                        <select className="w-full p-4 rounded-xl bg-background border-none focus:ring-2 focus:ring-accent transition-all appearance-none">
                            <option>Express Freight</option>
                            <option>Global Logistics</option>
                            <option>Warehousing</option>
                            <option>Supply Chain Optimization</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted">Message</label>
                        <textarea className="w-full p-4 rounded-xl bg-background border-none focus:ring-2 focus:ring-accent transition-all h-32" placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    <button className="w-full bg-accent text-white py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-accent/20 uppercase tracking-tight">
                        Send Message <Send size={20} />
                    </button>
                </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
                <div>
                    <h2 className="text-3xl font-bold mb-8 tracking-tight">Contact Information</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { icon: MapPin, label: "Corporate Office", val: "Ambala, Haryana, India" },
                            { icon: Phone, label: "Direct Line", val: "+91 XXX XXX XXXX" },
                            { icon: Mail, label: "Inquiries", val: "info@shakunsfreight.com" },
                            { icon: Clock, label: "Operating Hours", val: "Mon - Sat: 09:00 - 20:00" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-surface border border-slate-50">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-1">{item.label}</p>
                                    <p className="font-bold text-lg">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-10 rounded-[32px] bg-accent text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">Direct Support</h3>
                        <p className="text-white/80 mb-8 leading-relaxed">Need immediate assistance with a shipment? Our support team is available 24/7 for authorized partners.</p>
                        <button className="bg-white text-accent px-8 py-4 rounded-full font-black flex items-center gap-2 hover:bg-slate-100 transition-colors uppercase tracking-tight">
                            Open WhatsApp <MessageSquare size={20} />
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
