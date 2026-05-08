import { createFileRoute } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { Award, Eye, Target, Handshake, Instagram, Mail, MessageCircle, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prime Wave Agency" },
      { name: "description", content: "Meet Marcus Derrick and the Prime Wave Agency story — a premium web agency built to help businesses win online." },
      { property: "og:title", content: "About Prime Wave Agency" },
      { property: "og:description", content: "A premium web agency built to help businesses win online." },
    ],
  }),
  component: About,
});

function PageHero({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-pw relative text-center">
        <span className="label-accent">{label}</span>
        <h1 className="text-4xl md:text-6xl mt-3">{title}</h1>
        {subtitle && <p className="mt-4 text-white/75 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

function About() {
  const values = [
    { i: Award, t: "Excellence First", d: "We obsess over the details so your project sets a new standard." },
    { i: Eye, t: "Transparency Always", d: "Clear pricing, honest timelines, no surprises." },
    { i: Target, t: "Results Over Vanity", d: "Beautiful design that drives real business outcomes." },
    { i: Handshake, t: "Long-term Partnership", d: "We grow with you well beyond launch day." },
  ];
  return (
    <>
      <PageHero label="About Us" title="We Are Prime Wave" subtitle="A premium web agency built to help businesses win online." />
      <section className="bg-white py-24">
        <div className="container-pw max-w-3xl text-center">
          <ScrollReveal>
            <span className="label-accent">Our Story</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-navy">Built on One Simple Belief</h2>
            <p className="mt-6 text-muted-foreground">Every business deserves a website that works as hard as they do. Too many beautiful sites fail to convert — and too many functional ones look forgettable. We exist to bridge that gap.</p>
            <p className="mt-4 text-muted-foreground">Prime Wave was founded by Marcus Derrick to deliver agency-grade design without the agency-grade overhead. Direct access to the founder, zero outsourcing, and a relentless focus on results.</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-pw relative grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 to-transparent rounded-2xl blur-2xl" />
              <img src={founder} alt="Marcus Derrick" className="relative rounded-2xl shadow-2xl border-2 border-gold/30 bg-navy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <span className="label-accent">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-white">Marcus Derrick</h2>
            <p className="text-gold font-semibold mt-1">Founder · UI/UX Designer & Web Developer</p>
            <p className="mt-5 text-white/75">With 5+ years building digital products for businesses across Canada, the US, Australia, Singapore and beyond, Marcus founded Prime Wave to deliver the kind of premium, results-focused work clients can't find elsewhere — without the bloated agency price tag.</p>
            <div className="flex gap-3 mt-6">
              <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><MessageCircle size={18} /></a>
              <a href="https://instagram.com/primewave301" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><Instagram size={18} /></a>
              <a href="https://linkedin.com/in/marcus-derrick" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><Linkedin size={18} /></a>
              <a href="mailto:info.primewaveagency@gmail.com" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><Mail size={18} /></a>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-accent">Our Values</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.t} delay={i * 80}>
                <div className="p-6 rounded-2xl border border-border hover:border-gold hover:shadow-lg transition h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><v.i className="text-gold" /></div>
                  <h3 className="text-lg text-navy mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground">{v.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gold text-white py-14">
        <div className="container-pw grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: 15, s: "+", l: "Projects" }, { v: 80, s: "+", l: "Clients" }, { v: 5, s: "+", l: "Years" }, { v: 98, s: "%", l: "Satisfaction" }].map((x) => (
            <div key={x.l}>
              <div className="text-4xl md:text-5xl font-bold font-display"><AnimatedCounter value={x.v} suffix={x.s} /></div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider">{x.l}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
