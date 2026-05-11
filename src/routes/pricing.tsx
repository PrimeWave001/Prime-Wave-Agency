import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Check, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Prime Wave Agency" },
      { name: "description", content: "Simple transparent pricing for premium web design, ecommerce and SEO. No hidden fees, no surprises." },
      { property: "og:title", content: "Simple Transparent Pricing — Prime Wave Agency" },
      { property: "og:description", content: "Honest pricing for premium work." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter Plan",
    price: "$299",
    popular: false,
    features: ["Up to 5 pages", "Mobile responsive", "Basic SEO", "Contact form", "10 days support"],
  },
  {
    name: "Professional Plan",
    price: "$599",
    popular: true,
    features: ["Up to 10 pages", "Premium UI UX design", "Full SEO", "Speed optimization", "WhatsApp integration", "15 days support"],
  },
  {
    name: "Ecommerce Plan",
    price: "$999",
    popular: false,
    features: ["Full online store", "Payment integration", "Product management", "Ecommerce SEO", "Mobile checkout", "30 days support"],
  },
];

const faqs = [
  { q: "Do you charge any setup fees?", a: "No. The price you see is the price you pay. No hidden setup or onboarding fees." },
  { q: "How long does a typical project take?", a: "Most websites launch within 2 to 4 weeks depending on scope, content readiness and revisions." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. You can move from Starter to Professional or Ecommerce at any time and only pay the difference." },
  { q: "Do you offer custom pricing?", a: "Yes. For complex builds, integrations or large content sites we provide a custom quote based on your exact needs." },
];

function waLink(plan: string) {
  return "https://wa.me/12268556194?text=" + encodeURIComponent(`Hi Prime Wave! I would like to get started with the ${plan}.`);
}

function Pricing() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple Transparent Pricing"
        subtitle="No hidden fees, no surprises, just honest pricing for premium work."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=60"
      />

      <section className="bg-white py-24">
        <div className="container-pw grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <ScrollReveal key={t.name}>
              <div className={`relative rounded-3xl p-8 h-full border transition-all hover:-translate-y-1 hover:shadow-2xl ${t.popular ? "bg-navy text-white border-gold shadow-xl" : "bg-white text-navy border-border"}`}>
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Star size={12} className="fill-white" /> Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold">{t.name}</h3>
                <p className="mt-4 text-5xl font-bold font-display text-gold">{t.price}</p>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${t.popular ? "bg-gold/20" : "bg-gold/10"}`}><Check size={14} className="text-gold" /></span>
                      <span className={t.popular ? "text-white/90" : "text-navy"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink(t.name)} target="_blank" rel="noopener" className={`mt-8 w-full inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-md transition shadow-lg ${t.popular ? "bg-gold text-white hover:opacity-90" : "bg-navy text-white hover:bg-gold"}`}>
                  <MessageCircle size={18} /> Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-pw text-center max-w-2xl mx-auto">
          <h2 className="text-3xl text-navy">Have a bigger project in mind? Let us talk.</h2>
          <p className="mt-3 text-muted-foreground">We build custom solutions for ambitious businesses. Tell us about your goals and we will craft a tailored proposal.</p>
          <a href={waLink("Custom Project")} target="_blank" rel="noopener" className="mt-7 inline-flex items-center gap-2 bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg">
            <MessageCircle size={18} /> Get a Custom Quote
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pw max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label-accent">Pricing FAQ</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy">Common Questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-surface border border-border rounded-xl p-5">
                <summary className="cursor-pointer font-semibold text-navy list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-gold text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
