import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, Send, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-background/10 pb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="font-bold text-xl tracking-tight uppercase text-white">
              Shakuns <span className="text-accent">Freight</span>
            </span>
          </Link>
          <p className="text-background/60 text-sm leading-relaxed">
            Revolutionizing logistics through precision, technology, and a global network of excellence. Authorized partners of DHL, FedEx, and DTDC.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Share2 size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Send size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><MessageSquare size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-background/60">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Tracking</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Services</h4>
          <ul className="space-y-4 text-sm text-background/60">
            <li><Link href="#" className="hover:text-white transition-colors">Express Freight</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Warehousing</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Supply Chain</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Global Logistics</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-sm text-background/60">
            <li className="flex gap-3"><MapPin size={18} className="text-accent shrink-0" /> <span>Ambala, Haryana, India</span></li>
            <li className="flex gap-3"><Phone size={18} className="text-accent shrink-0" /> <span>+91 XXX XXX XXXX</span></li>
            <li className="flex gap-3"><Mail size={18} className="text-accent shrink-0" /> <span>info@shakunsfreight.com</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-background/40">
        <p>© 2026 Shakuns Freight. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
