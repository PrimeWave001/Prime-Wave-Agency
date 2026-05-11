import { createFileRoute } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Award, Eye, Target, Handshake, Instagram, Mail, MessageCircle, Linkedin, Star, ExternalLink, Compass, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prime Wave Agency" },
      { name: "description", content: "Meet Marcus Derrick and the Prime Wave Agency story. A premium web agency built to help businesses win online." },
      { property: "og:title", content: "About Prime Wave Agency" },
      { property: "og:description", content: "A premium web agency built to help businesses win online." },
    ],
  }),
  component: About,
});


function About() {
  const values = [
    { i: Award, t: "Excellence First", d: "We obsess over the details so your project sets a new standard." },
    { i: Eye, t: "Transparency Always", d: "Clear pricing, honest timelines, no surprises." },
    { i: Target, t: "Results Over Vanity", d: "Beautiful design that drives real business outcomes." },
    { i: Handshake, t: "Long term Partnership", d: "We grow with you well beyond launch day." },
  ];
  return (
    <>
      <PageHero
        label="About Us"
        title="We Are Prime Wave"
        subtitle="A premium web agency built to help businesses win online."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=60"
      />
      <section className="bg-white py-24">
        <div className="container-pw max-w-3xl text-center">
          <ScrollReveal>
            <span className="label-accent">Our Story</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-navy">Built on One Simple Belief</h2>
            <p className="mt-6 text-muted-foreground">Every business deserves a website that works as hard as they do. Too many beautiful sites fail to convert, and too many functional ones look forgettable. We exist to bridge that gap.</p>
            <p className="mt-4 text-muted-foreground">Prime Wave was founded by Marcus Derrick to deliver agency grade design without the agency grade overhead. Direct access to the founder, zero outsourcing, and a relentless focus on results.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-surface py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-accent">What Drives Us</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy">Mission, Vision &amp; Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Target, t: "Our Mission", d: "To empower businesses worldwide with premium digital experiences that drive real growth, attract ideal clients and create lasting competitive advantages." },
              { i: Compass, t: "Our Vision", d: "To become the most trusted web agency for ambitious businesses across Canada and worldwide, known for delivering results that exceed expectations every single time." },
              { i: Lightbulb, t: "Our Values", d: "Excellence in every pixel. Transparent timelines and zero hidden fees. Results that move the business. True partnership beyond launch. Innovation that keeps clients ahead." },
            ].map((c) => (
              <ScrollReveal key={c.t}>
                <div className="bg-white border border-border rounded-2xl p-8 h-full lift-3d" style={{ borderTopColor: "#D37B29", borderTopWidth: 4 }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#1f2a44" }}>
                    <c.i className="text-gold" size={26} />
                  </div>
                  <h3 className="text-xl text-navy mb-2">{c.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Excellence", d: "Highest standard, every pixel and line of code." },
              { t: "Transparency", d: "Honest timelines, zero hidden fees." },
              { t: "Results", d: "Beautiful design that drives business impact." },
              { t: "Partnership", d: "Your growth is our success metric." },
              { t: "Innovation", d: "Always ahead of digital trends." },
            ].map((v) => (
              <div key={v.t} className="bg-white p-5 rounded-xl border border-border">
                <p className="font-semibold" style={{ color: "#D37B29" }}>{v.t}</p>
                <p className="text-xs text-muted-foreground mt-1.5">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder section: image on RIGHT */}
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-pw relative grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="label-accent">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-white">Marcus Derrick</h2>
            <p className="text-gold font-semibold mt-1">Founder · UI/UX Designer & Web Developer</p>
            <p className="mt-5 text-white/75">With 5+ years building digital products for businesses across Canada, the US, Australia, Singapore and beyond, Marcus founded Prime Wave to deliver the kind of premium, results focused work clients can't find elsewhere, without the bloated agency price tag.</p>
            <div className="flex gap-3 mt-6">
              <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><MessageCircle size={18} /></a>
              <a href="https://instagram.com/primewave301" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><Instagram size={18} /></a>
              <a href="https://linkedin.com/in/marcus-derrick" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><Linkedin size={18} /></a>
              <a href="mailto:info.primewaveagency@gmail.com" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-gold transition"><Mail size={18} /></a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 to-transparent rounded-2xl blur-2xl" />
              <img src={founder} alt="Marcus Derrick" className="relative rounded-2xl shadow-2xl border-2 border-gold/30 bg-navy" />
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

      {/* Fiverr social proof */}
      <section className="bg-surface py-24">
        <div className="container-pw">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-accent">Verified Profiles</span>
              <h2 className="text-3xl md:text-4xl mt-3 text-navy">Find Us on Fiverr</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Katherine", level: "Level 1 Seller", desc: "UI UX Design and WordPress Development specialist", url: "https://www.fiverr.com/katherine_g301" },
              { name: "Chery", level: "New Seller", desc: "Web Design and Development specialist", url: "https://www.fiverr.com/chery_mcneely" },
            ].map((c) => (
              <ScrollReveal key={c.name}>
                <div className="bg-white rounded-2xl border border-border p-7 hover:shadow-xl hover:-translate-y-1 transition-all" style={{ borderTopColor: "#1DBF73", borderTopWidth: 4 }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="font-display font-extrabold text-2xl" style={{ color: "#1DBF73" }}>fiverr<span style={{ color: "#1DBF73" }}>.</span></div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: "#1DBF73" }}>{c.level}</span>
                  </div>
                  <h3 className="text-2xl text-navy">{c.name}</h3>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
                    <span className="text-sm text-muted-foreground ml-2">5.0</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{c.desc}</p>
                  <a href={c.url} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-md hover:opacity-90 transition" style={{ background: "#1DBF73" }}>
                    View Profile <ExternalLink size={16} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Trusted by clients worldwide on Fiverr and beyond</p>
        </div>
      </section>

      <section className="bg-gold text-white py-14">
        <div className="container-pw grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: 50, s: "+", l: "Projects" }, { v: 80, s: "+", l: "Clients" }, { v: 5, s: "+", l: "Years" }, { v: 98, s: "%", l: "Satisfaction" }].map((x) => (
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
