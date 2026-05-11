import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { ExternalLink, Target, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Prime Wave Agency" },
      { name: "description", content: "Real client results from Prime Wave Agency. See how we transformed websites for plumbing, real estate and ecommerce businesses." },
      { property: "og:title", content: "Case Studies — Prime Wave Agency" },
      { property: "og:description", content: "Real client results from Prime Wave Agency." },
    ],
  }),
  component: CaseStudies,
});

const studies = [
  {
    client: "Mike's Plumbing Chicago",
    site: "mikesplumbingchicago.com",
    platform: "WordPress",
    challenge: "Old outdated website with slow loading speed and no mobile optimization losing local leads.",
    solution: "Full WordPress redesign with mobile first approach, local SEO optimization, Google Maps integration and fast loading speed.",
    results: [
      { v: 65, s: "%", l: "Faster Load Time" },
      { v: 80, s: "%", l: "Mobile Traffic Growth" },
      { v: 120, s: "%", l: "More Enquiries in 60 Days" },
    ],
    quote: "The new website completely transformed how clients find us online. We are getting more calls than ever before.",
  },
  {
    client: "Stampere Realty Services",
    site: "stamperrealtyservices.com",
    platform: "WordPress",
    challenge: "Generic template website failing to stand out in a competitive real estate market with no lead capture system.",
    solution: "Premium real estate website with property showcase, lead capture forms, WhatsApp integration and local SEO strategy.",
    results: [
      { v: 95, s: "%", l: "Lead Capture Lift" },
      { v: 2, s: "x", l: "Time on Site" },
      { v: 150, s: "%", l: "Organic Traffic in 90 Days" },
    ],
    quote: "Our new site brings in qualified leads every week. Worth every dollar.",
  },
  {
    client: "Carolina Botanica",
    site: "carolinabotanica.com",
    platform: "WordPress",
    challenge: "Ecommerce store with confusing navigation, slow checkout and high cart abandonment rate.",
    solution: "Full ecommerce redesign with simplified navigation, optimized checkout flow, product photography guidelines and SEO implementation.",
    results: [
      { v: 45, s: "%", l: "Cart Abandonment Drop" },
      { v: 70, s: "%", l: "Higher Conversion Rate" },
      { v: 35, s: "%", l: "Revenue Growth Month One" },
    ],
    quote: "Sales jumped almost immediately after launch. The new checkout is night and day.",
  },
];

function CaseStudies() {
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Case Studies</span>
          <h1 className="text-4xl md:text-6xl mt-3">Real Clients. Real Results.</h1>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">A look behind the scenes at how Prime Wave delivers measurable wins for businesses worldwide.</p>
        </div>
      </section>

      {studies.map((cs, idx) => (
        <section key={cs.client} className={idx % 2 === 0 ? "bg-white py-24" : "bg-surface py-24"}>
          <div className="container-pw">
            <ScrollReveal>
              <div className="max-w-4xl">
                <span className="label-accent">Case Study {idx + 1}</span>
                <h2 className="text-3xl md:text-5xl mt-3 text-navy">{cs.client}</h2>
                <a href={`https://${cs.site}`} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
                  {cs.site} <ExternalLink size={16} />
                </a>
                <span className="ml-4 text-xs font-semibold px-2.5 py-1 rounded bg-navy text-white">{cs.platform}</span>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { i: Target, t: "Challenge", d: cs.challenge },
                { i: Lightbulb, t: "Solution", d: cs.solution },
                { i: TrendingUp, t: "Outcome", d: "Measurable, sustained growth across the metrics that matter most for the business." },
              ].map((b) => (
                <ScrollReveal key={b.t}>
                  <div className="bg-white border border-border rounded-2xl p-7 h-full hover:shadow-lg transition">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><b.i className="text-gold" size={22} /></div>
                    <h3 className="text-lg text-navy mb-2">{b.t}</h3>
                    <p className="text-sm text-muted-foreground">{b.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-10 bg-navy text-white rounded-3xl p-10 grid md:grid-cols-3 gap-8 text-center">
              {cs.results.map((r) => (
                <div key={r.l}>
                  <div className="text-4xl md:text-5xl font-bold font-display text-gold"><AnimatedCounter value={r.v} suffix={r.s} /></div>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">{r.l}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 max-w-3xl text-lg text-navy italic border-l-4 border-gold pl-6">
              "{cs.quote}"
              <footer className="mt-3 text-sm not-italic font-semibold text-gold">{cs.client}</footer>
            </blockquote>

            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg">
                Start Your Success Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
