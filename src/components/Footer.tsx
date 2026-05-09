import { Link } from "@tanstack/react-router";
import { Mail, Instagram, MessageCircle, Send, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white border-t-4 border-gold">
      <div className="container-pw py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Prime Wave" className="h-16 w-auto mb-4" />
          <p className="text-white/70 text-sm leading-relaxed">Building premium digital experiences that convert.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">More</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/case-studies" className="hover:text-gold">Case Studies</Link></li>
            <li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>
            <li><Link to="/free-audit" className="hover:text-gold">Free Audit</Link></li>
            <li><Link to="/services" className="hover:text-gold">Web Design</Link></li>
            <li><Link to="/services" className="hover:text-gold">Technical SEO</Link></li>
            <li><Link to="/services" className="hover:text-gold">WhatsApp Automation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><MessageCircle size={16} className="text-gold" /> +1 226 855 6194</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" />info.primewaveagency@gmail.com</li>
            <li className="flex items-center gap-2"><Instagram size={16} className="text-gold" /> @primewave301</li>
            <li className="flex items-center gap-2"><Send size={16} className="text-gold" /> @primewave2</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition"><MessageCircle size={16} /></a>
            <a href="https://instagram.com/primewave301" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition"><Instagram size={16} /></a>
            <a href="mailto:info.primewaveagency@gmail.com" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition"><Mail size={16} /></a>
            <a href="https://t.me/primewave2" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition"><Send size={16} /></a>
            <a href="https://linkedin.com/company/primewaveagency" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pw py-5 text-center text-xs text-white/60">
          © 2026 Prime Wave Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
