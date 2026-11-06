import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { FiverrSection } from "@/components/FiverrSection";
import { waLink } from "@/lib/site";
import {
  Palette, ShoppingBag, Gauge, Bot, ArrowRight, ArrowUpRight, Check,
  PhoneCall, PenTool, Code2, Rocket, TrendingUp, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Wave Agency — Websites That Turn Visitors Into Paying Clients" },
      { name: "description", content: "Remote web design and development agency. We design fast, modern websites that help businesses worldwide get found, build trust and win more customers." },
      { property: "og:title", content: "Prime Wave Agency — Websites That Turn Visitors Into Paying Clients" },
      { property: "og:description", content: "Fast, modern websites for businesses worldwide." },
    ],
  }),
  component: HomePage,
});

const platforms = ["WordPress", "Shopify", "Wix", "Squarespace", "Framer", "Webflow", "Duda"];

const stats = [
  { v: 50, s: "+", l: "Projects Delivered" },
  { v: 15, s: "+", l: "Countries" },
  { v: 5, s: "+", l: "Years Experience" },
  { v: 3, s: "", l: "Fiverr Studios" },
];

const pillars = [
  { icon: Palette, title: "Web Design & Redesign", desc: "Modern, conversion focused websites that earn trust in seconds." },
  { icon: ShoppingBag, title: "E-commerce Stores", desc: "Shopify and WooCommerce stores built to sell from day one." },
  { icon: Gauge, title: "SEO & Speed Optimization", desc: "Get found on Google with fast pages and solid technical SEO." },
  { icon: Bot, title: "Automation", desc: "WhatsApp and AI chatbots that answer, qualify and book around the clock." },
];

export const featured = [
  { url: "familyplushomecare.com", industry: "Home Care Services", platform: "WordPress", desc: "Professional website built to earn trust from families and generate care inquiries." },
  { url: "pristinelivingsevices.com", industry: "Cleaning Services", platform: "WordPress", desc: "Clean service brand site designed to convert local visitors into bookings." },
  { url: "soboldents.com", industry: "Business", platform: "WordPress", desc: "Modern, conversion-focused business website." },
  { url: "heathermoyer.co", industry: "Wellness & Retreats", platform: "WordPress", desc: "Elegant rebuild with a dynamic retreats page connected to online booking." },
];

const steps = [
  { icon: PhoneCall, title: "Discovery Call", desc: "We learn your goals, audience and what success looks like." },
  { icon: PenTool, title: "Design", desc: "A custom design built around your brand and your customers." },
  { icon: Code2, title: "Build & Revisions", desc: "We develop, refine and polish until you love it." },
  { icon: Rocket, title: "Launch & Support", desc: "We go live and stay with you for updates and growth." },
];

const packages = [
  { name: "Landing Page", price: "$149", features: ["Single high converting page", "Mobile first design", "Contact form or WhatsApp", "Basic SEO setup", "10 days support"] },
  { name: "Business Website", price: "$299", popular: true, features: ["Up to 6 custom pages", "Conversion focused copy layout", "On page SEO & speed", "Google Analytics setup", "15 days support"] },
  { name: "E-commerce Store", price: "$999", features: ["Shopify or WooCommerce", "Product & payment setup", "Custom product pages", "Speed & SEO optimized", "30 days support"] },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="glow-blue w-[600px] h-[600px] -top-40 -left-40" />
        <div className="glow-blue w-[500px] h-[500px] top-20 right-0" />
        <div className="container-pw relative grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/30 text-[#38B6FF] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#38B6FF] animate-pulse" />
              Web Design & Development Agency
            </span>
            <h1 className="mt-6 leading-[1.05]" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}>
              Websites That Turn Visitors Into <span className="text-gradient-blue">Paying Clients</span>
            </h1>
            <p className="mt-6 text-lg text-[#8A93A6] max-w-xl">
              We design fast, modern websites that help businesses worldwide get found, build trust and win more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="btn-primary">Get a Free Proposal <ArrowRight size={18} /></Link>
              <a href={waLink("Hi Prime Wave! I would like to talk about a website.")} target="_blank" rel="noopener" className="btn-secondary">WhatsApp Us</a>
            </div>
            <p className="mt-8 text-sm text-[#8A93A6]">
              <span className="text-[#38B6FF]">★</span> Verified reviews on Fiverr · 50+ projects delivered · 15+ countries
            </p>
          </ScrollReveal>

          {/* Abstract UI composition */}
          <ScrollReveal delay={150}>
            <div className="relative h-[420px] md:h-[480px]">
              <div className="absolute inset-x-6 top-6 bottom-16 card-dark shadow-2xl overflow-hidden animate-float" style={{ boxShadow: "0 40px 100px -30px rgba(11,95,255,0.5)" }}>
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" /><span className="w-2.5 h-2.5 rounded-full bg-white/20" /><span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-[#0B5FFF] to-[#38B6FF] opacity-80" />
                  <div className="h-3 w-2/3 rounded bg-white/15" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="h-16 rounded-lg bg-white/5" /><div className="h-16 rounded-lg bg-white/5" /><div className="h-16 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-2 md:-right-6 top-0 card-dark p-4 w-48 animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2 text-xs text-[#8A93A6]"><TrendingUp size={14} className="text-[#38B6FF]" /> Inquiries</div>
                <p className="text-2xl font-extrabold mt-1" style={{ fontFamily: "var(--font-display)" }}>+184%</p>
                <div className="flex items-end gap-1 h-10 mt-2">
                  {[30, 45, 40, 60, 70, 90].map((h, i) => (
                    <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#0B5FFF] to-[#38B6FF]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="absolute left-0 bottom-0 card-dark p-4 w-56 notif-pop">
                {["Mobile first", "SEO ready", "Fast loading"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm py-1">
                    <span className="w-5 h-5 rounded-full bg-[#0B5FFF] flex items-center justify-center"><Check size={12} /></span>{t}
                  </div>
                ))}
              </div>
              <div className="absolute right-4 bottom-6 card-dark px-4 py-3 flex items-center gap-2 text-sm">
                <Star size={16} className="text-[#38B6FF] fill-[#38B6FF]" /> Verified on Fiverr
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLATFORM STRIP */}
      <section className="border-y border-white/10 py-8">
        <div className="container-pw flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8A93A6]">We build on</span>
          {platforms.map((p) => (
            <span key={p} className="text-lg font-bold text-white/40 hover:text-white/80 transition" style={{ fontFamily: "var(--font-display)" }}>{p}</span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="container-pw grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((x) => (
            <div key={x.l} className="card-dark p-6 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-gradient-blue" style={{ fontFamily: "var(--font-display)" }}>
                <AnimatedCounter value={x.v} suffix={x.s} />
              </div>
              <p className="mt-2 text-sm text-[#8A93A6]">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0F1630] py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent">What We Do</span>
              <h2 className="text-3xl md:text-5xl mt-3">Everything You Need to Win Online</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="h-full p-7 rounded-[20px] bg-[#070B1A] border border-white/10 lift-3d flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B5FFF] to-[#38B6FF] flex items-center justify-center"><s.icon size={22} /></div>
                  <h3 className="text-lg mt-5">{s.title}</h3>
                  <p className="text-sm text-[#8A93A6] mt-2 flex-1">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[#38B6FF] hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent">Featured Work</span>
              <h2 className="text-3xl md:text-5xl mt-3">Real Sites. Real Results.</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <ScrollReveal key={p.url} delay={i * 80}>
                <ProjectCard {...p} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-secondary">View All Projects <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0F1630] py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-accent">How It Works</span>
              <h2 className="text-3xl md:text-5xl mt-3">A Simple, Proven Process</h2>
            </div>
          </ScrollReveal>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#0B5FFF] to-[#38B6FF] opacity-50" />
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="relative text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#070B1A] border border-[#0B5FFF] flex items-center justify-center text-[#38B6FF] relative z-10"><s.icon size={22} /></div>
                  <p className="mt-4 text-xs font-semibold text-[#38B6FF]">STEP {i + 1}</p>
                  <h3 className="text-lg mt-1">{s.title}</h3>
                  <p className="text-sm text-[#8A93A6] mt-2">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent">Packages</span>
              <h2 className="text-3xl md:text-5xl mt-3">Clear Pricing. No Surprises.</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {packages.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
                <div
                  className={`relative h-full p-8 rounded-[20px] bg-[#0F1630] flex flex-col border ${p.popular ? "border-[#0B5FFF]" : "border-white/10"}`}
                  style={p.popular ? { boxShadow: "0 0 60px -10px rgba(11,95,255,0.55)" } : undefined}
                >
                  {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0B5FFF] text-xs font-semibold">Most Popular</span>}
                  <h3 className="text-xl">{p.name}</h3>
                  <p className="mt-4 text-sm text-[#8A93A6]">from</p>
                  <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>{p.price}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#F5F7FA]/85"><Check size={16} className="text-[#38B6FF] mt-0.5 shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <a href={waLink(`Hi Prime Wave! I would like a quote for the ${p.name} package.`)} target="_blank" rel="noopener" className={`${p.popular ? "btn-primary" : "btn-secondary"} mt-8`}>Get a Quote</a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0F1630]"><FiverrSection /></div>

      <CTASection />
    </>
  );
}

export function ProjectCard({ url, industry, platform, desc }: { url: string; industry: string; platform: string; desc: string }) {
  return (
    <div className="card-dark overflow-hidden h-full flex flex-col lift-3d">
      <div className="relative h-52 bg-gradient-to-br from-[#0B2A6B] via-[#0F1630] to-[#0B5FFF]/60 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute right-6 bottom-0 w-40 h-24 rounded-t-lg border border-white/20 bg-[#070B1A]/60">
          <div className="flex gap-1 p-2"><span className="w-1.5 h-1.5 rounded-full bg-white/30" /><span className="w-1.5 h-1.5 rounded-full bg-white/30" /><span className="w-1.5 h-1.5 rounded-full bg-white/30" /></div>
          <div className="mx-2 h-8 rounded bg-gradient-to-r from-[#0B5FFF] to-[#38B6FF] opacity-60" />
        </div>
        <span className="relative text-2xl md:text-3xl font-extrabold px-6 text-center break-all" style={{ fontFamily: "var(--font-display)" }}>{url}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#0B5FFF]/15 text-[#38B6FF]">{platform}</span>
          <span className="text-xs text-[#8A93A6]">{industry}</span>
        </div>
        <p className="text-sm text-[#8A93A6] flex-1">{desc}</p>
        <a href={`https://${url}`} target="_blank" rel="noopener" className="btn-secondary !py-2.5 mt-5 self-start text-sm">Visit Live Site <ArrowUpRight size={14} /></a>
      </div>
    </div>
  );
}
