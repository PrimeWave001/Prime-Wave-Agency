import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import founder from "@/assets/founder.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { WaveDivider } from "@/components/WaveDivider";
import { CTASection } from "@/components/CTASection";
import {
  Code2, Palette, Search, ShoppingBag, MessageSquare, Wrench,
  Star, ArrowRight, ExternalLink, Award, Target, Handshake, Sparkles,
  Clock, Smartphone, TrendingUp, UserCheck, DollarSign, ShieldCheck,
  CheckCircle2, MapPin, Filter,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Wave Agency — Build a Powerful Online Presence" },
      { name: "description", content: "Premium web design, SEO and ecommerce. We build modern, high performing websites that convert." },
      { property: "og:title", content: "Prime Wave Agency — Premium Web Design" },
      { property: "og:description", content: "We design modern, high performing websites that help businesses grow." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Web Design & Development", desc: "Modern, fast, conversion focused websites built on the platform that fits your goals." },
  { icon: Palette, title: "UI/UX Design & Redesign", desc: "Beautiful, intuitive interfaces that turn visitors into loyal customers." },
  { icon: Search, title: "Technical SEO & Auditing", desc: "Get found on Google with on page SEO, schema markup and Core Web Vitals optimization." },
  { icon: ShoppingBag, title: "Ecommerce Development", desc: "Shopify and WooCommerce stores designed to maximize average order value." },
  { icon: MessageSquare, title: "WhatsApp Automation Bot", desc: "24/7 customer service and lead capture with intelligent WhatsApp automation." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Keep your site fast, secure and updated with monthly care plans from $99." },
];

const whyUs = [
  { icon: Clock, title: "We Deliver on Time, Every Time", desc: "Clear timelines and weekly progress updates so you always know exactly where your project stands." },
  { icon: Smartphone, title: "Mobile First Design Always", desc: "Every site is engineered for mobile from day one because that is where most of your visitors live." },
  { icon: TrendingUp, title: "SEO Built In From Day One", desc: "Technical SEO, schema and Core Web Vitals are baked into every build, not bolted on later." },
  { icon: UserCheck, title: "Direct Access to the Founder", desc: "You work directly with Marcus throughout the project. No account managers, no outsourcing." },
  { icon: DollarSign, title: "Transparent Pricing No Surprises", desc: "Honest, upfront pricing on every quote. What we agree on is what you pay." },
  { icon: ShieldCheck, title: "100% Satisfaction Guaranteed", desc: "We refine until you are thrilled. Your reputation is our reputation." },
];

const portfolio = [
  { url: "brightchatter.com", platform: "Custom", type: "Redesign", desc: "Brand aligned redesign with refined IA and faster load times." },
  { url: "mikesplumbingchicago.com", platform: "WordPress", type: "Full Design", desc: "Local service site engineered for lead generation." },
  { url: "stamperrealtyservices.com", platform: "WordPress", type: "Full Design", desc: "Premium real estate site with custom property modules." },
  { url: "sageandsanto.com", platform: "Shopify", type: "Ecommerce", desc: "High converting Shopify store with custom product pages." },
  { url: "carolinabotanica.com", platform: "WordPress", type: "Redesign", desc: "Botanical brand refresh with elegant typography and storytelling." },
  { url: "aquasaludable.com", platform: "Wix", type: "Full Design", desc: "Bilingual Wix build with strong local conversion focus." },
];

const portfolioFilters = ["All", "WordPress", "Shopify", "Wix", "Custom", "Squarespace"] as const;

const reviews = [
  { name: "Lisa F. Hanson", text: "Prime Wave Agency did an incredible job on my website. Professional, easy to work with and delivered more than I expected." },
  { name: "Katherine V. Harris", text: "Working with Prime Wave was one of the best decisions I made for my business. They understood exactly what I needed." },
  { name: "Carmen P. Lovell", text: "I hired Prime Wave for SEO and the results have been incredible. Far better than I ever expected." },
  { name: "Tracy C. Fidler", text: "Prime Wave delivered exceptional results. The performance far exceeded my expectations." },
];

function HomePage() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const [pfFilter, setPfFilter] = useState<(typeof portfolioFilters)[number]>("All");
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setReviewIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visiblePortfolio = pfFilter === "All" ? portfolio : portfolio.filter((p) => p.platform === pfFilter);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center" style={{ background: "linear-gradient(90deg, #D37B29, #b96720)" }}>
        <span className="hidden sm:inline">🎉 Now Accepting New Clients in May 2026 — </span>
        <Link to="/contact" className="underline underline-offset-2 hover:text-navy transition">Get Started Today →</Link>
      </div>

      {/* SECTION 1: HERO with parallax bg image */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center pt-28">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80)",
            transform: `translateY(${parallaxY}px)`,
            willChange: "transform",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/95" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* floating 3D shapes */}
        <div aria-hidden className="absolute top-24 left-10 w-40 h-40 rounded-full bg-gold/20 blur-2xl float-shape" />
        <div aria-hidden className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-gold/15 blur-3xl float-shape-2" />
        <div aria-hidden className="absolute top-40 right-1/3 w-24 h-24 rotate-45 bg-gold/10 border border-gold/30 float-shape" />
        <div aria-hidden className="absolute bottom-32 left-1/4 w-16 h-16 rotate-12 bg-gold/15 rounded-xl float-shape-2" />
        <div aria-hidden className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full border-2 border-gold/30 float-shape" style={{ transform: "translate3d(-50%,-50%,0)" }} />

        {/* particles */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className="particle absolute block w-1 h-1 rounded-full bg-gold/70"
              style={{
                left: `${(i * 47) % 100}%`,
                bottom: `-${(i * 7) % 30}px`,
                animationDuration: `${10 + ((i * 3) % 14)}s`,
                animationDelay: `${(i * 0.7) % 8}s`,
              }}
            />
          ))}
        </div>

        <div className="container-pw relative grid lg:grid-cols-2 gap-12 items-center py-16">
          <ScrollReveal>
            <span className="badge-pulse inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Now Accepting New Clients
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl mt-5 leading-[1.02] font-bold drop-shadow-2xl">
              Build a Powerful <span className="text-gradient-gold">Online Presence</span> That Converts
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl">
              We design modern, high performing websites that help businesses grow, attract clients and stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-2xl text-center">Get a Free Proposal</Link>
              <Link to="/portfolio" className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-navy transition text-center backdrop-blur-sm">View Our Work</Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { i: Star, t: "Google Verified" },
                { i: CheckCircle2, t: "50+ Projects" },
                { i: MapPin, t: "Canada Based" },
                { i: TrendingUp, t: "Worldwide Service" },
              ].map((b) => (
                <div key={b.t} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold backdrop-blur-sm">
                  <b.i size={14} className="text-gold" />
                  {b.t}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/40 to-transparent rounded-2xl blur-2xl" />
              <img src={founder} alt="Marcus Derrick, Founder" className="relative rounded-2xl shadow-2xl border-2 border-gold/40 bg-navy w-full h-auto animate-float" />

              {/* Floating notification card */}
              <div className="notif-pop absolute -bottom-6 -left-6 md:-left-10 bg-white text-navy rounded-2xl shadow-2xl p-4 max-w-[260px] border-l-4 border-gold">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">John from Toronto</p>
                    <p className="text-xs text-muted-foreground mt-0.5">just requested a free proposal</p>
                    <p className="text-[10px] uppercase tracking-wider text-gold font-bold mt-1">2 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <WaveDivider from="var(--navy)" to="#D37B29" />

      {/* SECTION 2: STATS with 3D flip */}
      <section className="bg-gold text-white py-14">
        <div className="container-pw grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: 50, s: "+", l: "Projects Completed" },
            { v: 80, s: "+", l: "Happy Clients" },
            { v: 5, s: "+", l: "Years Experience" },
            { v: 98, s: "%", l: "Client Satisfaction" },
          ].map((x) => (
            <div key={x.l} className="flip-in">
              <div className="text-4xl md:text-5xl font-bold font-display"><AnimatedCounter value={x.v} suffix={x.s} /></div>
              <p className="mt-2 text-white/90 text-sm font-medium uppercase tracking-wider">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ABOUT SUMMARY (image RIGHT) */}
      <section className="bg-white py-24">
        <div className="container-pw grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="label-accent">About Us</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-navy">A Team Focused on Growth and Results</h2>
            <p className="mt-4 text-muted-foreground">Prime Wave Agency was founded with one mission: build websites that don't just look good, they perform. We combine premium design, technical excellence, and a deep understanding of what makes businesses convert.</p>
            <p className="mt-3 text-muted-foreground">From local businesses to international brands, we help our clients win online with strategy driven design and engineering.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { i: Award, t: "Excellence First" },
                { i: Sparkles, t: "Transparent Process" },
                { i: Target, t: "Results Over Vanity" },
                { i: Handshake, t: "Long term Partner" },
              ].map((v) => (
                <div key={v.t} className="flex items-center gap-3 p-4 rounded-lg bg-surface border border-border">
                  <v.i className="text-gold" size={22} />
                  <span className="font-semibold text-navy text-sm">{v.t}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-gold font-semibold hover:gap-3 transition-all">Learn More About Us <ArrowRight size={18} /></Link>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gold rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-navy rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={founder} alt="Marcus Derrick" className="w-full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION A: SERVICES — horizontal scroll showcase */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,42,68,0.92), rgba(31,42,68,0.92)), url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1800&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-pw">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <span className="label-accent">What We Do</span>
                <h2 className="text-3xl md:text-5xl mt-3">Premium Services for Ambitious Businesses</h2>
              </div>
              <p className="text-white/70 max-w-md text-sm">Scroll horizontally to explore every service we offer →</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="h-scroll overflow-x-auto pb-6">
          <div className="flex gap-6 px-6 md:px-[max(1.25rem,calc((100vw-1200px)/2))]">
            {services.map((s, i) => {
              const dark = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`tilt-3d shrink-0 w-[320px] md:w-[360px] rounded-2xl p-7 border-t-4 border-transparent hover:border-gold transition-all ${dark ? "bg-navy text-white border border-white/10" : "bg-white text-navy"}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${dark ? "bg-gold/15" : "bg-gold/10"}`}>
                    <s.icon className="text-gold" size={28} />
                  </div>
                  <h3 className={`text-xl mb-2 ${dark ? "text-white" : "text-navy"}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{s.desc}</p>
                  <a
                    href={"https://wa.me/12268556194?text=" + encodeURIComponent(`Hi Prime Wave! I would like a quote for ${s.title}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 bg-gold text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition text-sm"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION B: WHY CHOOSE US — bold two column layout */}
      <section className="bg-white py-24">
        <div className="container-pw grid lg:grid-cols-2 gap-14 items-start">
          <ScrollReveal>
            <span className="label-accent">Why Choose Prime Wave</span>
            <h2 className="text-4xl md:text-6xl mt-3 text-navy leading-[1.05]">
              Why clients choose <span className="text-gold">Prime Wave</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We're not the cheapest agency on the internet, and we're proud of it. Our clients hire us because they want results that
              outlast trends — websites built on excellence, transparency and a real partnership focused on their growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/case-studies" className="border-2 border-navy/20 text-navy font-semibold px-8 py-4 rounded-md hover:bg-navy hover:text-white transition">
                See Case Studies
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-display font-bold text-gold">98%</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-gold">24h</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Response Time</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-6">
              {whyUs.map((w, i) => (
                <div key={w.title} className="group flex gap-5 items-start p-5 rounded-2xl border-l-4 border-transparent hover:border-gold hover:bg-surface transition-all slide-in-left" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="num-3d shrink-0 w-16 text-right">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="text-lg text-navy font-display font-bold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION C: PORTFOLIO — full-width dark with filter bar */}
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl float-shape" />
        <div className="container-pw relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent">Selected Work</span>
              <h2 className="text-3xl md:text-5xl mt-3">50+ Projects. Zero Excuses.</h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">Real client websites, redesigns and ecommerce stores delivered worldwide.</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Filter size={18} className="text-gold mr-1 mt-2" />
            {portfolioFilters.map((f) => (
              <button
                key={f}
                onClick={() => setPfFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${pfFilter === f ? "bg-gold text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePortfolio.map((p, i) => (
              <ScrollReveal key={p.url} delay={i * 60}>
                <div className="tilt-3d bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group">
                  <div className="h-40 bg-gradient-to-br from-[#1f2a44] to-[#3a4a78] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <span className="relative font-display font-bold text-lg text-center px-4">{p.url}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gold text-white">{p.platform}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/10 text-gold uppercase tracking-wide">{p.type}</span>
                    </div>
                    <p className="text-sm text-white/70">{p.desc}</p>
                    <a href={`https://${p.url}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gold hover:gap-3 transition-all">
                      View Site <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-8 py-4 rounded-md hover:opacity-90 transition shadow-lg">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="relative text-white py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,42,68,0.92), rgba(31,42,68,0.95)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=60)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
                  <div className="flex justify-center mb-4">{[...Array(5)].map((_, k) => <Star key={k} size={18} className="fill-gold text-gold" />)}</div>
                  <p className="italic text-white/95">"{r.text}"</p>
                  <p className="mt-4 font-semibold text-gold">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setReviewIdx(i)} aria-label={`Show review ${i + 1}`} className={`w-2 h-2 rounded-full transition-all ${i === reviewIdx ? "bg-gold w-8" : "bg-white/30"}`} />
            ))}
          </div>
          <a href="https://share.google/RT2c6cmvAsyFCc1Or" target="_blank" rel="noopener" className="inline-block mt-10 bg-gold text-white font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">Leave a Google Review</a>
        </div>
      </section>

      {/* PROCESS-LIKE / FINAL CTA */}
      <CTASection />

      {/* MAP */}
      <section className="bg-surface py-20">
        <div className="container-pw">
          <div className="text-center mb-8">
            <span className="label-accent">Where We Are</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-navy">Find Us on the Map</h2>
            <p className="mt-3 text-muted-foreground">Based in Canada · Serving clients worldwide.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
            <iframe
              title="Prime Wave Agency on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7952466750515!2d-79.38318492346663!3d43.64255507110458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1bc7e9!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1699564732456!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
