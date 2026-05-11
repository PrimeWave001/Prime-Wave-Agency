import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Prime Wave Agency" },
      { name: "description", content: "15+ projects across WordPress, Shopify, Wix and custom builds. See our work." },
      { property: "og:title", content: "Portfolio — Prime Wave Agency" },
      { property: "og:description", content: "15+ projects. Zero excuses." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { url: "brightchatter.com", platform: "Duda", type: "Redesign" },
  { url: "mikesplumbingchicago.com", platform: "WordPress", type: "Full Design" },
  { url: "go-rooterplumbing.com", platform: "WordPress", type: "Full Design" },
  { url: "stamperrealtyservices.com", platform: "WordPress", type: "Full Design" },
  { url: "mrs-legal.com", platform: "WordPress", type: "Migration" },
  { url: "tricapres.com", platform: "WordPress", type: "Full Design" },
  { url: "thompsonsmithwrites.com", platform: "Squarespace", type: "Full Design" },
  { url: "sageandsanto.com", platform: "Shopify", type: "Ecommerce" },
  { url: "aaainterstate.com", platform: "WordPress", type: "Full Design" },
  { url: "sol242.com", platform: "Custom", type: "Web App" },
  { url: "sentry242.com", platform: "Custom", type: "Web App" },
  { url: "rallyforpaws.org", platform: "WordPress", type: "Full Design" },
  { url: "carolinabotanica.com", platform: "WordPress", type: "Redesign" },
  { url: "kinetico.com", platform: "WordPress", type: "SEO Optimization" },
  { url: "aquasaludable.com", platform: "Wix", type: "Full Design" },
];

const filters = ["All", "WordPress", "Shopify", "Wix", "Custom", "Squarespace", "Duda"] as const;

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.platform === filter);
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Our Work</span>
          <h1 className="text-4xl md:text-6xl mt-3">15+ Projects. Zero Excuses.</h1>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">A selection of websites we've designed, built or optimized for clients worldwide.</p>
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
              <ScrollReveal key={p.url} delay={i * 40}>
                <a href={`https://${p.url}`} target="_blank" rel="noopener" className="block bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="h-44 bg-gradient-to-br from-navy to-[#2a3a5e] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <span className="relative text-white font-display font-bold text-lg md:text-xl text-center px-4">{p.url}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy text-white">{p.platform}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gold/10 text-gold uppercase tracking-wide">{p.type}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold">View Site <ExternalLink size={14} /></span>
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
