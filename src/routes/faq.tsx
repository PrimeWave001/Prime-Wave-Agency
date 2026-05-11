import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Prime Wave Agency" },
      { name: "description", content: "Answers to common questions about pricing, timelines, platforms and our process." },
      { property: "og:title", content: "Frequently Asked Questions — Prime Wave" },
      { property: "og:description", content: "Pricing, timelines, platforms and process — answered." },
    ],
  }),
  component: FAQ,
});

const items = [
  { q: "How long does it take to build a website?", a: "Most websites are completed within 1 to 3 weeks depending on complexity." },
  { q: "How much does a website cost?", a: "Starting from $299. Every budget is welcome. Contact us for a free quote." },
  { q: "What platforms do you work with?", a: "WordPress, Shopify, Wix, Squarespace, Webflow and custom code." },
  { q: "Do you offer ongoing maintenance?", a: "Yes. Monthly plans starting from $99 per month." },
  { q: "Will my website be mobile friendly?", a: "Absolutely. Every website is fully responsive and mobile-first." },
  { q: "Do you include SEO?", a: "Yes. All websites include on-page SEO, meta tags and schema markup." },
  { q: "How do I get started?", a: "Message us on WhatsApp or email us. We reply within 24 hours." },
  { q: "Can you redesign my existing website?", a: "Yes. Redesign is one of our most popular services." },
  { q: "Do you work with international clients?", a: "Yes. We have worked with clients in Canada, USA, Australia, Singapore, Chile and more." },
  { q: "What makes Prime Wave different?", a: "Direct access to the founder, zero outsourcing, 100% satisfaction guarantee." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        label="Help Center"
        title="Frequently Asked Questions"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&q=60"
      />
      <section className="bg-white py-24">
        <div className="container-pw max-w-3xl space-y-3">
          {items.map((it, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div className="border border-border rounded-xl overflow-hidden bg-surface">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-navy">{it.q}</span>
                  <ChevronDown className={`text-gold transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} size={20} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
