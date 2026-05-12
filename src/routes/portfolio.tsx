import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Prime Wave Agency" },
      { name: "description", content: "Premium projects across WordPress, Shopify, Wix, Webflow and custom builds. See our work." },
      { property: "og:title", content: "Portfolio — Prime Wave Agency" },
      { property: "og:description", content: "50+ projects. Zero excuses." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { url: "tenthousandscarves.com", platform: "Shopify", type: "Ecommerce" },
  { url: "ravenoak.net", platform: "WordPress", type: "Full Design" },
  { url: "gscottgraham.com", platform: "WordPress", type: "Full Design" },
  { url: "jovelinehead.com", platform: "WordPress", type: "Full Design" },
  { url: "dyconcretepumps.com", platform: "WordPress", type: "Full Design" },
  { url: "tetigroup.it", platform: "WordPress", type: "Full Design" },
  { url: "axisrealty.net", platform: "WordPress", type: "Full Design" },
  { url: "caincompany.net", platform: "WordPress", type: "Full Design" },
  { url: "thesawalgroup.com", platform: "WordPress", type: "Full Design" },
  { url: "amingrowth.com", platform: "WordPress", type: "Full Design" },
  { url: "ehc24.com", platform: "WordPress", type: "Full Design" },
  { url: "lime-wonders-914254.framer.app", platform: "Framer", type: "Landing Page" },
  { url: "sgerealty.com", platform: "WordPress", type: "Full Design" },
  { url: "avapropertygroup.com", platform: "WordPress", type: "Full Design" },
  { url: "brightchatter.com", platform: "Duda", type: "Redesign" },
  { url: "mikesplumbingchicago.com", platform: "WordPress", type: "Full Design" },
  { url: "stamperrealtyservices.com", platform: "WordPress", type: "Full Design" },
  { url: "thompsonsmithwrites.com", platform: "Squarespace", type: "Full Design" },
  { url: "sageandsanto.com", platform: "Shopify", type: "Ecommerce" },
  { url: "sol242.com", platform: "Custom", type: "Web App" },
  { url: "carolinabotanica.com", platform: "WordPress", type: "Redesign" },
  { url: "aquasaludable.com", platform: "Wix", type: "Full Design" },
];

const filters = ["All", "WordPress", "Shopify", "Wix", "Custom", "Squarespace", "Framer", "Duda"] as const;

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.platform === filter);
  return (
    <>
      <PageHero
        label="Our Work"
        title="50+ Projects. Zero Excuses."
        subtitle="A selection of websites we have designed, built or optimized for clients worldwide."
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=60"
      />

      {/* Stats strip */}
      <section className="bg-navy text-white py-10">
        <div className="container-pw grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div><p className="text-3xl font-display font-extrabold text-gold">{projects.length}+</p><p className="text-xs uppercase tracking-wider mt-1 text-white/70">Projects</p></div>
          <div><p className="text-3xl font-display font-extrabold text-gold">8+</p><p className="text-xs uppercase tracking-wider mt-1 text-white/70">Platforms</p></div>
          <div><p className="text-3xl font-display font-extrabold text-gold">15+</p><p className="text-xs uppercase tracking-wider mt-1 text-white/70">Countries</p></div>
          <div><p className="text-3xl font-display font-extrabold text-gold">5.0</p><p className="text-xs uppercase tracking-wider mt-1 text-white/70">Average Rating</p></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pw">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${filter === f ? "bg-gold text-white" : "bg-surface text-navy hover:bg-navy hover:text-white"}`}>{f}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p, i) => (
              <ScrollReveal key={p.url} delay={i * 30}>
                <a href={`https://${p.url}`} target="_blank" rel="noopener" className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="h-48 bg-gradient-to-br from-navy to-[#2a3a5e] relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold transition">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                    <span className="relative text-white font-display font-bold text-base md:text-lg text-center px-4 break-all">{p.url}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy text-white">{p.platform}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gold/10 text-gold uppercase tracking-wide">{p.type}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold transition">View Site <ExternalLink size={14} /></span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
