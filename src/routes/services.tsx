import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Code2, Palette, Search, ShoppingBag, MessageSquare, Wrench, Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prime Wave Agency" },
      { name: "description", content: "Web design, UI/UX, SEO, ecommerce, WhatsApp automation and ongoing support. Premium services from $99." },
      { property: "og:title", content: "Premium Services — Prime Wave Agency" },
      { property: "og:description", content: "Web design, SEO, ecommerce and more for ambitious businesses." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Web Design & Development", price: "$299", desc: "Modern, fast, conversion focused websites built on the right platform for your business.", inc: ["Custom design tailored to your brand", "Mobile first responsive build", "On page SEO foundation", "Up to 5 pages included", "Contact forms and integrations"] },
  { icon: Palette, title: "UI/UX Design & Redesign", price: "$399", desc: "Beautiful, intuitive interfaces that turn visitors into loyal customers.", inc: ["UX research and wireframes", "High fidelity Figma designs", "Interactive prototypes", "Design system and components", "Developer ready handoff"] },
  { icon: Search, title: "Technical SEO & Auditing", price: "$199", desc: "Get found on Google with on page SEO, schema markup and Core Web Vitals optimization.", inc: ["Full technical audit report", "Keyword research", "On page optimization", "Schema markup", "Core Web Vitals tuning"] },
  { icon: ShoppingBag, title: "Ecommerce Development", price: "$999", desc: "Shopify and WooCommerce stores designed to maximize average order value.", inc: ["Custom Shopify or WooCommerce build", "Product setup up to 25", "Payment and shipping integration", "Conversion optimized checkout", "Email automation setup"] },
  { icon: MessageSquare, title: "WhatsApp Automation Bot", price: "$299", desc: "24/7 customer service and lead capture with intelligent WhatsApp automation.", inc: ["Custom conversation flows", "Lead capture and routing", "FAQ automation", "CRM integration", "Setup and training"] },
  { icon: Wrench, title: "Maintenance & Support", price: "$99/mo", desc: "Keep your site fast, secure and up to date with monthly care plans.", inc: ["Daily backups", "Security and plugin updates", "Uptime monitoring", "Monthly performance report", "Priority support"] },
];

function waLink(service: string) {
  return "https://wa.me/12268556194?text=" + encodeURIComponent(`Hi Prime Wave! I would like a quote for ${service}.`);
}

function Services() {
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div aria-hidden className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl float-shape" />
        <div aria-hidden className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-gold/5 blur-3xl float-shape-2" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Services</span>
          <h1 className="text-4xl md:text-6xl mt-3">Premium Services for Ambitious Businesses</h1>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">Everything you need to launch, grow and scale your online presence under one roof.</p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-pw space-y-20">
          {services.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <ScrollReveal key={s.title}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Visual block */}
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1f2a44] to-[#2a3a5e]" />
                      <div className="absolute inset-0 bg-grid opacity-40" />
                      <div aria-hidden className="absolute top-8 left-8 w-32 h-32 rounded-full bg-gold/15 blur-2xl float-shape" />
                      <div aria-hidden className="absolute bottom-8 right-8 w-40 h-40 rounded-full bg-gold/10 blur-2xl float-shape-2" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="w-28 h-28 rounded-3xl bg-gold/15 border border-gold/40 flex items-center justify-center backdrop-blur-sm">
                          <s.icon className="text-gold" size={56} />
                        </div>
                        <p className="mt-6 font-display text-2xl font-bold text-center px-6">{s.title}</p>
                      </div>
                      <span className="absolute top-5 right-5 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">From {s.price}</span>
                    </div>
                  </div>
                  {/* Content block */}
                  <div className={reverse ? "lg:order-1" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5"><s.icon className="text-gold" size={28} /></div>
                    <h2 className="text-3xl md:text-4xl text-navy">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground">{s.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {s.inc.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 shrink-0"><Check size={14} className="text-gold" /></span>
                          <span className="text-navy">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold font-bold font-display text-lg">Starting at {s.price}</span>
                      <a href={waLink(s.title)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition shadow-lg">
                        <MessageCircle size={18} /> Get a Quote
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
