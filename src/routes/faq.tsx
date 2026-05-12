import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Plus, Search, MessageCircle, Mail, CheckCircle2, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Prime Wave Agency" },
      { name: "description", content: "Answers to common questions about pricing, timelines, platforms and our process." },
      { property: "og:title", content: "Frequently Asked Questions — Prime Wave" },
      { property: "og:description", content: "Pricing, timelines, platforms and process answered." },
    ],
  }),
  component: FAQ,
});

type Cat = "All" | "Pricing" | "Process" | "Technical" | "General";

const items: { q: string; a: string; cat: Cat }[] = [
  { q: "How long does it take to build a website?", a: "Most websites are completed within 1 to 3 weeks depending on complexity.", cat: "Process" },
  { q: "How much does a website cost?", a: "Starting from $299. Every budget is welcome. Contact us for a free quote.", cat: "Pricing" },
  { q: "What platforms do you work with?", a: "WordPress, Shopify, Wix, Squarespace, Webflow and custom code.", cat: "Technical" },
  { q: "Do you offer ongoing maintenance?", a: "Yes. Monthly plans starting from $99 per month.", cat: "Pricing" },
  { q: "Will my website be mobile friendly?", a: "Absolutely. Every website is fully responsive and mobile first.", cat: "Technical" },
  { q: "Do you include SEO?", a: "Yes. All websites include on page SEO, meta tags and schema markup.", cat: "Technical" },
  { q: "How do I get started?", a: "Message us on WhatsApp or email us. We reply within 24 hours.", cat: "Process" },
  { q: "Can you redesign my existing website?", a: "Yes. Redesign is one of our most popular services.", cat: "General" },
  { q: "Do you work with international clients?", a: "Yes. We have worked with clients in Canada, USA, Australia, Singapore, Chile and more.", cat: "General" },
  { q: "What makes Prime Wave different?", a: "Direct access to the founder, zero outsourcing, 100 percent satisfaction guarantee.", cat: "General" },
];

const cats: Cat[] = ["All", "Pricing", "Process", "Technical", "General"];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [cat, setCat] = useState<Cat>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => items.filter((it) => {
    const matchCat = cat === "All" || it.cat === cat;
    const matchQ = !query || it.q.toLowerCase().includes(query.toLowerCase()) || it.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  }), [cat, query]);

  return (
    <>
      <PageHero
        label="Help Center"
        title="Frequently Asked Questions"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&q=60"
      />
      <section className="bg-white py-20">
        <div className="container-pw grid lg:grid-cols-[40%_1fr] gap-12">
          {/* LEFT */}
          <div>
            <ScrollReveal>
              <span className="label-accent">Got Questions</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy font-extrabold">Everything you need to know before getting started.</h2>
              <p className="mt-4 text-muted-foreground">Browse the answers below or search for a specific topic. If you can not find what you need, reach out and we will reply within 24 hours.</p>

              <div className="mt-8 bg-navy text-white rounded-2xl p-6 shadow-xl">
                <p className="font-display font-bold text-lg mb-4">Talk to a human</p>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-5 py-3 rounded-md hover:opacity-90 transition">
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                  <a href="mailto:info.primewaveagency@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-5 py-3 rounded-md hover:bg-white hover:text-navy transition">
                    <Mail size={18} /> Email Us
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 p-5 rounded-2xl bg-surface border border-border">
                <CheckCircle2 className="text-gold shrink-0" size={28} />
                <div>
                  <p className="font-bold text-navy">50+ happy clients worldwide</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
                    <span className="text-xs text-muted-foreground ml-1">5.0 average rating</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT */}
          <div>
            <div className="relative mb-5">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-white focus:outline-none focus:border-gold transition"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {cats.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${cat === c ? "bg-gold text-white" : "bg-surface text-navy hover:bg-navy hover:text-white"}`}>
                  {c}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {visible.length === 0 && <p className="text-muted-foreground py-10 text-center">No questions match your search.</p>}
              {visible.map((it, i) => {
                const isOpen = open === i;
                return (
                  <div key={it.q} className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all ${isOpen ? "border-l-4 border-gold shadow-lg" : "border border-border"}`}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                      <span className="font-bold text-navy">{it.q}</span>
                      <Plus className={`text-gold transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`} size={22} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{it.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-surface py-16">
        <div className="container-pw text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-navy font-extrabold">Still have questions?</h2>
          <p className="mt-3 text-muted-foreground">We are here to help. Reach out and a real human will reply within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-3.5 rounded-md hover:opacity-90 transition">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="mailto:info.primewaveagency@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-md hover:bg-navy hover:text-white transition">
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
