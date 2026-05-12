import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Code2, Palette, Search, ShoppingBag, MessageSquare, Wrench, Check, MessageCircle, Bot, Target, Zap, MapPin, Grid3x3 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prime Wave Agency" },
      { name: "description", content: "Web design, UI UX, SEO, ecommerce, AI chatbots, landing pages and more. Premium services from $79." },
      { property: "og:title", content: "Premium Services — Prime Wave Agency" },
      { property: "og:description", content: "Web design, SEO, ecommerce and more for ambitious businesses." },
    ],
  }),
  component: Services,
});

const services = [
  { id: "web", icon: Code2, title: "Web Design and Development", price: "$299", desc: "Modern, fast, conversion focused websites built on the right platform for your business.", inc: ["Custom design tailored to your brand", "Mobile first responsive build", "On page SEO foundation", "Up to 5 pages included", "Contact forms and integrations"] },
  { id: "uiux", icon: Palette, title: "UI UX Design and Redesign", price: "$399", desc: "Beautiful, intuitive interfaces that turn visitors into loyal customers.", inc: ["UX research and wireframes", "High fidelity Figma designs", "Interactive prototypes", "Design system and components", "Developer ready handoff"] },
  { id: "seo", icon: Search, title: "Technical SEO and Auditing", price: "$199", desc: "Get found on Google with on page SEO, schema markup and Core Web Vitals optimization.", inc: ["Full technical audit report", "Keyword research", "On page optimization", "Schema markup", "Core Web Vitals tuning"] },
  { id: "ecom", icon: ShoppingBag, title: "Ecommerce Development", price: "$999", desc: "Shopify and WooCommerce stores designed to maximize average order value.", inc: ["Custom Shopify or WooCommerce build", "Product setup up to 25", "Payment and shipping integration", "Conversion optimized checkout", "Email automation setup"] },
  { id: "wa", icon: MessageSquare, title: "WhatsApp Automation Bot", price: "$299", desc: "24 hour customer service and lead capture with intelligent WhatsApp automation.", inc: ["Custom conversation flows", "Lead capture and routing", "FAQ automation", "CRM integration", "Setup and training"] },
  { id: "maint", icon: Wrench, title: "Maintenance and Support", price: "$99/mo", desc: "Keep your site fast, secure and up to date with monthly care plans.", inc: ["Daily backups", "Security and plugin updates", "Uptime monitoring", "Monthly performance report", "Priority support"] },
  { id: "ai", icon: Bot, title: "AI Chatbot Integration", price: "$199", desc: "We integrate intelligent AI chatbots into your website that answer customer questions instantly 24 hours a day, qualify leads automatically and book appointments without human intervention.", inc: ["Custom AI training on your business", "24 hour answers to customer questions", "Automatic lead qualification", "Appointment booking flows", "Seamless website integration"] },
  { id: "landing", icon: Target, title: "Landing Page Design", price: "$149", desc: "High converting single page websites built specifically to turn visitors into leads or customers. Perfect for product launches, promotions and lead generation campaigns.", inc: ["Conversion focused single page", "Custom hero and copywriting guidance", "Lead capture form", "A B test ready structure", "Mobile first responsive design"] },
  { id: "speed", icon: Zap, title: "Website Speed Optimization", price: "$99", desc: "Transform slow sluggish websites into lightning fast experiences. Achieve 90+ Google PageSpeed scores.", inc: ["Core Web Vitals optimization", "Image compression and WebP", "Caching and CDN setup", "Server configuration", "Before and after report"] },
  { id: "gbp", icon: MapPin, title: "Google Business Profile Setup", price: "$79", desc: "Complete setup and optimization so your business appears prominently in local search and Google Maps.", inc: ["Profile claim and verification", "Keyword optimization", "Photo uploads and branding", "Service and product setup", "Review strategy guide"] },
  { id: "social", icon: Grid3x3, title: "Social Media Design Package", price: "$149", desc: "Professional branded social media graphics, profile optimization and content templates for Instagram, Facebook and TikTok.", inc: ["Profile setup and optimization", "10 post templates", "Story and reel templates", "Brand consistency across platforms", "Content calendar guide"] },
];

function waLink(service: string) {
  return "https://wa.me/12268556194?text=" + encodeURIComponent(`Hi Prime Wave! I would like a quote for ${service}.`);
}

function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title="Premium Services for Ambitious Businesses"
        subtitle="Everything you need to launch, grow and scale your online presence under one roof."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=60"
      />

      {/* Overview strip */}
      <section className="bg-navy text-white py-10">
        <div className="container-pw grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-display font-extrabold text-gold">{services.length}+</p>
            <p className="text-sm text-white/70 uppercase tracking-wider mt-1">Premium Services</p>
          </div>
          <div>
            <p className="text-4xl font-display font-extrabold text-gold">From $79</p>
            <p className="text-sm text-white/70 uppercase tracking-wider mt-1">Starting Prices</p>
          </div>
          <div className="text-left sm:text-center">
            <p className="text-white/85">Pick a service or bundle multiple. Every project is delivered with the same premium attention to detail and a 100 percent satisfaction guarantee.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 relative">
        <div className="container-pw grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-wider text-gold font-bold mb-4">Quick Jump</p>
              <ul className="space-y-2 text-sm">
                {services.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-navy hover:text-gold font-medium transition flex items-start gap-2">
                      <span className="text-gold font-bold w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="leading-tight">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-2">
            {services.map((s, i) => {
              const reverse = i % 2 === 1;
              const bg = reverse ? "bg-surface" : "bg-white";
              return (
                <ScrollReveal key={s.id}>
                  <div id={s.id} className={`${bg} rounded-3xl p-8 md:p-10 ${reverse ? "" : "border border-border"}`}>
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                      <div className={reverse ? "lg:order-2" : ""}>
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1f2a44] to-[#2a3a5e]" />
                          <div className="absolute inset-0 bg-grid opacity-40" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <div className="w-24 h-24 rounded-3xl bg-gold/15 border border-gold/40 flex items-center justify-center backdrop-blur-sm">
                              <s.icon className="text-gold" size={48} />
                            </div>
                            <p className="mt-5 font-display text-xl font-bold text-center px-6">{s.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className={reverse ? "lg:order-1" : ""}>
                        <p className="font-display font-extrabold text-gold text-5xl leading-none mb-3">{String(i + 1).padStart(2, "0")}</p>
                        <h2 className="text-2xl md:text-3xl text-navy font-extrabold">{s.title}</h2>
                        <p className="mt-3 text-muted-foreground">{s.desc}</p>
                        <ul className="mt-5 space-y-2.5">
                          {s.inc.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 shrink-0"><Check size={14} className="text-gold" /></span>
                              <span className="text-navy text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy text-white font-bold font-display text-sm">Starting at {s.price}</span>
                          <a href={waLink(s.title)} target="_blank" rel="noopener" className="btn-shine relative overflow-hidden inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
                            <MessageCircle size={18} /> Get a Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
