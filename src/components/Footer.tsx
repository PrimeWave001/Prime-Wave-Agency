import { Link } from "@tanstack/react-router";
import { Mail, Instagram, MessageCircle, Send, ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/primewave-logo.png.asset.json";
import { EMAIL, FIVERR_PROFILES, INSTAGRAM_URL, TELEGRAM_URL, WHATSAPP_URL } from "@/lib/site";
const logo = logoAsset.url;

export function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/10">
      <div className="container-pw py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Prime Wave" className="h-16 w-auto mb-4" />
          <p className="text-sm leading-relaxed text-[#8A93A6]" style={{ maxWidth: "320px" }}>
            Prime Wave Agency is a remote web design and development team helping businesses worldwide build websites that attract clients, rank on Google and grow revenue.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#38B6FF] mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-[#8A93A6]">
            <li><Link to="/" className="hover:text-[#38B6FF]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#38B6FF]">About</Link></li>
            <li><Link to="/services" className="hover:text-[#38B6FF]">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#38B6FF]">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-[#38B6FF]">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-[#38B6FF]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#38B6FF]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#38B6FF] mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-[#8A93A6]">
            <li><Link to="/services" className="hover:text-[#38B6FF]">Web Design & Redesign</Link></li>
            <li><Link to="/services" className="hover:text-[#38B6FF]">E-commerce Stores</Link></li>
            <li><Link to="/services" className="hover:text-[#38B6FF]">SEO & Speed Optimization</Link></li>
            <li><Link to="/services" className="hover:text-[#38B6FF]">WhatsApp & AI Chatbots</Link></li>
            <li><Link to="/services" className="hover:text-[#38B6FF]">Landing Pages</Link></li>
            <li><Link to="/services" className="hover:text-[#38B6FF]">Maintenance & Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#38B6FF] mb-4">Fiverr</h4>
          <ul className="space-y-2 text-sm text-[#8A93A6]">
            {FIVERR_PROFILES.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-[#38B6FF]">
                  {p.name} <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#38B6FF] mt-6 mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-[#8A93A6]">
            <li className="flex items-center gap-2"><MessageCircle size={16} className="text-[#38B6FF]" /> WhatsApp</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-[#38B6FF]" /> {EMAIL}</li>
            <li className="flex items-center gap-2"><Instagram size={16} className="text-[#38B6FF]" /> @primewave301</li>
            <li className="flex items-center gap-2"><Send size={16} className="text-[#38B6FF]" /> @primewave2</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0B5FFF] flex items-center justify-center transition"><MessageCircle size={16} /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0B5FFF] flex items-center justify-center transition"><Instagram size={16} /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0B5FFF] flex items-center justify-center transition"><Mail size={16} /></a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener" aria-label="Telegram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0B5FFF] flex items-center justify-center transition"><Send size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pw py-5 text-center text-xs text-[#8A93A6]">
          © 2026 Prime Wave Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
