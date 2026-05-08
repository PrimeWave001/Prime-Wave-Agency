import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import founder from "@/assets/founder.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { WaveDivider } from "@/components/WaveDivider";
import { CTASection } from "@/components/CTASection";
import { AIChat } from "@/components/AIChat";
import {
  Code2, Palette, Search, ShoppingBag, MessageSquare, Wrench,
  Star, ArrowRight, ExternalLink, Award, Target, Handshake, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Wave Agency — Build a Powerful Online Presence" },
      { name: "description", content: "Premium web design, SEO and ecommerce. We build modern, high-performing websites that convert." },
      { property: "og:title", content: "Prime Wave Agency — Premium Web Design" },
      { property: "og:description", content: "We design modern, high-performing websites that help businesses grow." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Web Design & Development", desc: "Modern, fast, conversion-focused websites built on the platform that fits your goals." },
  { icon: Palette, title: "UI/UX Design & Redesign", desc: "Beautiful, intuitive interfaces that turn visitors into loyal customers." },
  { icon: Search, title: "Technical SEO & Auditing", desc: "Get found on Google with on-page SEO, schema markup and Core Web Vitals optimization." },
  { icon: ShoppingBag, title: "Ecommerce Development", desc: "Shopify and WooCommerce stores designed to maximize average order value." },
  { icon: MessageSquare, title: "WhatsApp Automation Bot", desc: "24/7 customer service and lead capture with intelligent WhatsApp automation." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Keep your site fast, secure and updated with monthly care plans from $99." },
];

const portfolio = [
  { url: "brightchatter.com", platform: "Duda", type: "Redesign", desc: "Brand-aligned redesign with refined IA and faster load times." },
  { url: "mikesplumbingchicago.com", platform: "WordPress", type: "Full Design", desc: "Local service site engineered for lead generation." },
  { url: "stamperrealtyservices.com", platform: "WordPress", type: "Full Design", desc: "Premium real estate site with custom property modules." },
  { url: "mrs-legal.com", platform: "WordPress", type: "Migration", desc: "Seamless migration with zero downtime and improved speed." },
  { url: "carolinabotanica.com", platform: "WordPress", type: "Redesign", desc: "Botanical brand refresh with elegant typography and storytelling." },
  { url: "kinetico.com", platform: "WordPress", type: "SEO Optimization", desc: "Technical SEO overhaul yielding strong organic gains." },
];

const reviews = [
  { name: "Lisa F. Hanson", text: "Prime Wave Agency did an incredible job on my website. Professional, easy to work with and delivered more than I expected." },
  { name: "Katherine V. Harris", text: "Working with Prime Wave was one of the best decisions I made for my business. They understood exactly what I needed." },
  { name: "Carmen P. Lovell", text: "I hired Prime Wave for SEO and the results have been incredible. Far better than I ever expected." },
  { name: "Tracy C. Fidler", text: "Prime Wave delivered exceptional results. The performance far exceeded my expectations." },
];

function HomePage() {
  const [reviewIdx, setReviewIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setReviewIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-navy text-white overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#15203a]" style={{ opacity: 0.7 }} />
        <div className="container-pw relative grid lg:grid-cols-2 gap-12 items-center py-16">
          <ScrollReveal>
            <span className="label-accent">Premium Web Agency</span>
            <h1 className="text-4xl md:text-6xl mt-3 leading-[1.05]">
              Build a Powerful <span className="text-gradient-gold">Online Presence</span> That Converts
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-xl">
              We design modern, high-performing websites that help businesses grow, attract clients and stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg text-center">Get a Free Proposal</Link>
              <Link to="/portfolio" className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-navy transition text-center">View Our Work</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 text-sm">
              <div className="flex items-center gap-2"><span className="text-gold font-bold text-lg">15+</span><span className="text-white/70">Projects</span></div>
              <div className="flex items-center gap-2"><span className="text-gold font-bold text-lg">80+</span><span className="text-white/70">Clients</span></div>
              <div className="flex items-center gap-2"><span className="text-gold font-bold text-lg">98%</span><span className="text-white/70">Satisfaction</span></div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 to-transparent rounded-2xl blur-2xl" />
              <img src={founder} alt="Marcus Derrick, Founder" className="relative rounded-2xl shadow-2xl border-2 border-gold/30 bg-navy w-full h-auto animate-float" />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <WaveDivider from="var(--navy)" to="#D37B29" />

      {/* STATS */}
      <section className="bg-gold text-white py-14">
        <div className="container-pw grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: 15, s: "+", l: "Projects Completed" },
            { v: 80, s: "+", l: "Happy Clients" },
            { v: 5, s: "+", l: "Years Experience" },
            { v: 98, s: "%", l: "Client Satisfaction" },
          ].map((x) => (
            <div key={x.l}>
              <div className="text-4xl md:text-5xl font-bold font-display"><AnimatedCounter value={x.v} suffix={x.s} /></div>
              <p className="mt-2 text-white/90 text-sm font-medium uppercase tracking-wider">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="bg-white py-24">
        <div className="container-pw grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-gold rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-navy rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={founder} alt="Marcus Derrick" className="w-full" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <span className="label-accent">About Us</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-navy">A Team Focused on Growth and Results</h2>
            <p className="mt-4 text-muted-foreground">Prime Wave Agency was founded with one mission: build websites that don't just look good, they perform. We combine premium design, technical excellence, and a deep understanding of what makes businesses convert.</p>
            <p className="mt-3 text-muted-foreground">From local businesses to international brands, we help our clients win online with strategy-driven design and engineering.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { i: Award, t: "Excellence First" },
                { i: Sparkles, t: "Transparent Process" },
                { i: Target, t: "Results Over Vanity" },
                { i: Handshake, t: "Long-term Partner" },
              ].map((v) => (
                <div key={v.t} className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border">
                  <v.i className="text-gold" size={22} />
                  <span className="font-semibold text-navy text-sm">{v.t}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-gold font-semibold hover:gap-3 transition-all">Learn More About Us <ArrowRight size={18} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="label-accent">What We Do</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy">Premium Services for Ambitious Businesses</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="group bg-white p-7 rounded-2xl border border-border h-full hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <s.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="text-xl text-navy mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gold hover:gap-3 transition-all">Learn More <ArrowRight size={16} /></Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-white py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-accent">Selected Work</span>
              <h2 className="text-3xl md:text-5xl mt-3 text-navy">15+ Projects. Zero Excuses.</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <ScrollReveal key={p.url} delay={i * 60}>
                <div className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="h-40 bg-gradient-to-br from-navy to-[#2a3a5e] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <span className="relative text-white font-display font-bold text-xl">{p.url}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy text-white">{p.platform}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gold/10 text-gold uppercase tracking-wide">{p.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                    <a href={`https://${p.url}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-navy hover:text-gold">View Site <ExternalLink size={14} /></a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-block bg-navy text-white font-semibold px-8 py-4 rounded-md hover:bg-gold transition">View All Work</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-navy text-white py-24">
        <div className="container-pw text-center">
          <ScrollReveal>
            <span className="label-accent">Testimonials</span>
            <h2 className="text-3xl md:text-4xl mt-3">What Clients Say</h2>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}</div>
              <span className="text-sm font-semibold">5.0 on Google</span>
            </div>
          </ScrollReveal>
          <div className="mt-12 max-w-2xl mx-auto relative h-56">
            {reviews.map((r, i) => (
              <div key={r.name} className={`absolute inset-0 transition-opacity duration-700 ${i === reviewIdx ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="flex justify-center mb-4">{[...Array(5)].map((_, k) => <Star key={k} size={18} className="fill-gold text-gold" />)}</div>
                  <p className="italic text-white/90">"{r.text}"</p>
                  <p className="mt-4 font-semibold text-gold">— {r.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setReviewIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === reviewIdx ? "bg-gold w-8" : "bg-white/30"}`} />
            ))}
          </div>
          <a href="https://www.google.com/search?q=Prime+Wave+Agency+reviews" target="_blank" rel="noopener" className="inline-block mt-10 bg-gold text-white font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">Leave a Google Review</a>
        </div>
      </section>

      {/* AI CHAT */}
      <section className="bg-white py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="label-accent">24/7 Assistant</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy">Ask Our AI Assistant Anything</h2>
              <p className="mt-3 text-muted-foreground">Get instant answers about our services, pricing and process — 24 hours a day.</p>
            </div>
            <AIChat />
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
