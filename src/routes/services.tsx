import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { Code2, Palette, Search, ShoppingBag, MessageSquare, Wrench, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prime Wave Agency" },
      { name: "description", content: "Web design, UI/UX, SEO, ecommerce, WhatsApp automation and ongoing support — premium services from $99." },
      { property: "og:title", content: "Premium Services — Prime Wave Agency" },
      { property: "og:description", content: "Web design, SEO, ecommerce and more for ambitious businesses." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Web Design & Development", price: "$299", desc: "Modern, fast, conversion-focused websites built on the right platform for your business.", inc: ["Custom design tailored to your brand", "Mobile-first responsive build", "On-page SEO foundation", "Up to 5 pages included", "Contact forms & integrations"] },
  { icon: Palette, title: "UI/UX Design & Redesign", price: "$399", desc: "Beautiful, intuitive interfaces that turn visitors into loyal customers.", inc: ["UX research & wireframes", "High-fidelity Figma designs", "Interactive prototypes", "Design system & components", "Developer-ready handoff"] },
  { icon: Search, title: "Technical SEO & Auditing", price: "$199", desc: "Get found on Google with on-page SEO, schema markup and Core Web Vitals optimization.", inc: ["Full technical audit report", "Keyword research", "On-page optimization", "Schema markup", "Core Web Vitals tuning"] },
  { icon: ShoppingBag, title: "Ecommerce Development", price: "$999", desc: "Shopify and WooCommerce stores designed to maximize average order value.", inc: ["Custom Shopify or WooCommerce build", "Product setup (up to 25)", "Payment & shipping integration", "Conversion-optimized checkout", "Email automation setup"] },
  { icon: MessageSquare, title: "WhatsApp Automation Bot", price: "$299", desc: "24/7 customer service and lead capture with intelligent WhatsApp automation.", inc: ["Custom conversation flows", "Lead capture & routing", "FAQ automation", "CRM integration", "Setup & training"] },
  { icon: Wrench, title: "Maintenance & Support", price: "$99/mo", desc: "Keep your site fast, secure and up-to-date with monthly care plans.", inc: ["Daily backups", "Security & plugin updates", "Uptime monitoring", "Monthly performance report", "Priority support"] },
];

function Services() {
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Services</span>
          <h1 className="text-4xl md:text-6xl mt-3">Premium Services for Ambitious Businesses</h1>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">Everything you need to launch, grow and scale your online presence — under one roof.</p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-pw space-y-12">
          {services.map((s, i) => (
            <ScrollReveal key={s.title}>
              <div className={`grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-12 rounded-3xl ${i % 2 === 0 ? "bg-surface" : "bg-white border border-border"}`}>
                <div className={i % 2 === 0 ? "" : "lg:order-2"}>
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5"><s.icon className="text-gold" size={28} /></div>
                  <h2 className="text-3xl text-navy">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                  <p className="mt-5 text-sm uppercase tracking-wider text-muted-foreground">Starting from</p>
                  <p className="text-4xl font-bold text-gold font-display">{s.price}</p>
                  <Link to="/contact" className="inline-block mt-6 bg-navy text-white font-semibold px-7 py-3 rounded-md hover:bg-gold transition">Get a Quote</Link>
                </div>
                <ul className={`space-y-3 ${i % 2 === 0 ? "" : "lg:order-1"}`}>
                  {s.inc.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 shrink-0"><Check size={14} className="text-gold" /></span>
                      <span className="text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-pw text-center">
          <h2 className="text-3xl text-navy">Not sure which service you need?</h2>
          <Link to="/contact" className="inline-block mt-6 bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg">Book a Free Consultation</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
