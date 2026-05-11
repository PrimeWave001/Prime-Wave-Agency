import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageHero } from "@/components/PageHero";
import { Mail, MessageCircle, MapPin, Clock, Instagram, Send, Loader2, CheckCircle2, Linkedin, Star } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prime Wave Agency" },
      { name: "description", content: "Let's talk about your project. WhatsApp, email or use the form, we reply within 24 hours." },
      { property: "og:title", content: "Contact Prime Wave Agency" },
      { property: "og:description", content: "Let us talk about your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mdabddlo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Contact</span>
          <h1 className="text-4xl md:text-6xl mt-3">Let Us Talk About Your Project</h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-pw grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-3xl text-navy">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">Reach out via WhatsApp for the fastest response, or send us a detailed brief.</p>
            <div className="mt-8 space-y-5">
              <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-gold transition">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"><MessageCircle className="text-gold" /></div>
                <div><p className="text-sm text-muted-foreground">WhatsApp</p><p className="font-semibold text-navy">+1 226 855 6194</p></div>
              </a>
              <a href="mailto:info.primewaveagency@gmail.com" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-gold transition">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"><Mail className="text-gold" /></div>
                <div><p className="text-sm text-muted-foreground">Email</p><p className="font-semibold text-navy">info.primewaveagency@gmail.com</p></div>
              </a>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"><MapPin className="text-gold" /></div>
                <div><p className="text-sm text-muted-foreground">Location</p><p className="font-semibold text-navy">Canada · Serving Worldwide</p></div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center"><Clock className="text-gold" /></div>
                <div><p className="text-sm text-muted-foreground">Response Time</p><p className="font-semibold text-navy">Within 24 hours</p></div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com/primewave301" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition"><Instagram size={18} /></a>
              <a href="https://t.me/primewave2" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition"><Send size={18} /></a>
              <a href="mailto:info.primewaveagency@gmail.com" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition"><Mail size={18} /></a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <form onSubmit={onSubmit} className="bg-surface p-8 rounded-2xl border border-border space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="name" label="Full Name" required />
                <Field name="email" type="email" label="Email Address" required />
              </div>
              <Field name="phone" label="Phone Number (optional)" />
              <div>
                <label className="text-sm font-semibold text-navy block mb-1.5">Service Needed</label>
                <select name="service" required className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-gold">
                  <option value="">Select a service</option>
                  <option>Web Design & Development</option>
                  <option>UI/UX Design & Redesign</option>
                  <option>Technical SEO</option>
                  <option>Ecommerce Development</option>
                  <option>WhatsApp Automation</option>
                  <option>Maintenance & Support</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-navy block mb-1.5">Project Budget</label>
                <select name="budget" required className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-gold">
                  <option value="">Select a range</option>
                  <option>$299 – $999</option>
                  <option>$1,000 – $2,500</option>
                  <option>$2,500 – $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-navy block mb-1.5">Project Details</label>
                <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-gold resize-none" />
              </div>
              <button type="submit" disabled={status === "loading"} className="w-full bg-gold text-white font-semibold py-4 rounded-md hover:opacity-90 transition disabled:opacity-50 inline-flex items-center justify-center gap-2">
                {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : "Submit Inquiry"}
              </button>
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-md text-sm">
                  <CheckCircle2 size={18} /> Thanks! We'll be in touch within 24 hours.
                </div>
              )}
              {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please email us directly.</p>}
            </form>
          </ScrollReveal>
        </div>
        <div className="container-pw mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {["Free Consultation", "No Hidden Fees", "24 Hour Response", "100% Satisfaction"].map((t) => (
            <div key={t} className="p-4 rounded-xl bg-surface border border-border font-semibold text-navy">✓ {t}</div>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy block mb-1.5">{label}</label>
      <input name={name} type={type} required={required} className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:border-gold" />
    </div>
  );
}
