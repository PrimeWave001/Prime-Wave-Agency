import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";
import { Gauge, Smartphone, Search, Target, Users, Lightbulb, CheckCircle2, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free Website Audit — Prime Wave Agency" },
      { name: "description", content: "Get your FREE website audit worth $200. Speed, SEO, mobile and conversion analysis delivered within 24 hours." },
      { property: "og:title", content: "Get Your FREE Website Audit Worth $200" },
      { property: "og:description", content: "Speed, SEO, mobile and conversion analysis delivered in 24 hours." },
    ],
  }),
  component: FreeAudit,
});

const items = [
  { i: Gauge, t: "Speed and Performance Analysis" },
  { i: Smartphone, t: "Mobile Experience Review" },
  { i: Search, t: "SEO Health Check" },
  { i: Target, t: "Conversion Rate Assessment" },
  { i: Users, t: "Competitor Comparison" },
  { i: Lightbulb, t: "Top 3 Improvement Recommendations" },
];

function FreeAudit() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mdabddlo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div aria-hidden className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl float-shape" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Free Website Audit</span>
          <h1 className="text-4xl md:text-6xl mt-3">Get Your FREE Website Audit Worth $200</h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">We analyze your website speed, SEO health, mobile experience and conversion rate and deliver a full report within 24 hours at absolutely no cost.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-pw grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <span className="label-accent">What's Included</span>
            <h2 className="text-3xl md:text-4xl mt-3 text-navy">A Full Diagnostic of Your Website</h2>
            <p className="mt-3 text-muted-foreground">Six in depth checks performed by hand and delivered as a clear, actionable report.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div key={it.t} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <span className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0"><it.i className="text-gold" size={20} /></span>
                  <span className="font-semibold text-navy text-sm">{it.t}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl text-navy font-display font-bold">Request Your Free Audit</h3>
              <p className="text-sm text-muted-foreground mt-1">Fill in the form and we will send your report within 24 hours.</p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-navy">Name</label>
                  <input name="name" required maxLength={100} className="mt-1 w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy">Email</label>
                  <input type="email" name="email" required maxLength={255} className="mt-1 w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy">Website URL</label>
                  <input type="url" name="website" required placeholder="https://yourwebsite.com" className="mt-1 w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:border-gold" />
                </div>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full font-semibold text-white px-6 py-4 rounded-md transition shadow-lg disabled:opacity-50"
                style={{ background: "#D37B29" }}
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>
              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-green-700"><CheckCircle2 size={18} /> Thanks! Your audit request was received.</p>
              )}
              {status === "error" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-destructive"><AlertCircle size={18} /> Something went wrong. Please try again.</p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy text-white py-14">
        <div className="container-pw grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { t: "50+", l: "Audits Completed" },
            { t: "24h", l: "Delivery" },
            { t: "$0", l: "No Credit Card Required" },
            { t: "100%", l: "Free Forever" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-bold font-display text-gold">{s.t}</div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 text-center" style={{ background: "#D37B29" }}>
        <p className="text-white font-semibold text-lg">Only 5 free audit spots available this month</p>
      </section>
    </>
  );
}
