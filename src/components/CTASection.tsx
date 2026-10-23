import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "./ScrollReveal";
import { waLink } from "@/lib/site";

export function CTASection() {
  return (
    <section className="bg-[#070B1A] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="glow-blue w-[500px] h-[500px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-0" />
      <div className="container-pw relative text-center">
        <ScrollReveal>
          <span className="label-accent">Get Started</span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-[#8A93A6] max-w-2xl mx-auto mb-8">Let us build you a website that attracts clients, ranks on Google and works 24 hours a day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Get a Free Proposal</Link>
            <a href={waLink("Hi Prime Wave! I would like to get a free proposal.")} target="_blank" rel="noopener" className="btn-secondary">WhatsApp Us Now</a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-[#8A93A6]">
            <span>✓ Free Consultation</span><span>✓ No Hidden Fees</span><span>✓ 24 Hour Response</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
