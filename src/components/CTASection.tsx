import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
  return (
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-pw relative text-center">
        <ScrollReveal>
          <span className="label-accent">Get Started</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-white/75 max-w-2xl mx-auto mb-8">Let us build you a website that attracts clients, ranks on Google and works 24 hours a day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg">Get a Free Proposal</Link>
            <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-navy transition">WhatsApp Us Now</a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-white/70">
            <span>✓ Free Consultation</span><span>✓ No Hidden Fees</span><span>✓ 24 Hour Response</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
