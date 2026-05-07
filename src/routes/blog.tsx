import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Prime Wave Agency" },
      { name: "description", content: "Tips, strategies and insights to help your business grow online." },
      { property: "og:title", content: "Insights & Resources — Prime Wave" },
      { property: "og:description", content: "Tips, strategies and insights to help your business grow online." },
    ],
  }),
  component: Blog,
});

const posts = [
  { cat: "Web Design", title: "5 Reasons Your Website Is Losing Clients and How to Fix It", excerpt: "If your website looks great but isn't bringing in leads, these are the five culprits behind it." },
  { cat: "SEO", title: "How to Rank on Google in 2025 Without Spending on Ads", excerpt: "Modern SEO is about intent, speed and trust. Here's the playbook." },
  { cat: "Business", title: "Why Every Small Business Needs a Professional Website in 2025", excerpt: "Your website is your hardest-working employee. Here's why DIY isn't enough anymore." },
  { cat: "WhatsApp", title: "How WhatsApp Automation Can Double Your Restaurant Sales", excerpt: "Automated bookings, menus, and order confirmations turn chats into revenue." },
  { cat: "Design", title: "The Psychology of Color in Web Design and Why It Matters", excerpt: "Color choices influence trust, action and recall. Use them strategically." },
  { cat: "Ecommerce", title: "7 Things Your Online Store Must Have to Convert Visitors into Buyers", excerpt: "From trust badges to checkout speed — the essentials of a converting store." },
];

function Blog() {
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-pw relative text-center">
          <span className="label-accent">Blog</span>
          <h1 className="text-4xl md:text-6xl mt-3">Insights and Resources</h1>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">Tips, strategies and insights to help your business grow online.</p>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="container-pw grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 60}>
              <article className="bg-surface rounded-2xl border border-border overflow-hidden h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="h-44 bg-gradient-to-br from-navy to-[#2a3a5e] relative">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-gold text-white">{p.cat}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg text-navy leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                  <button className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-gold hover:gap-3 transition-all w-fit">Read More <ArrowRight size={16} /></button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-pw max-w-2xl text-center">
          <span className="label-accent">Newsletter</span>
          <h2 className="text-3xl md:text-4xl mt-3 text-navy">Get Weekly Tips Delivered to Your Inbox</h2>
          <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}>
            <input type="email" required placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:border-gold" />
            <button className="bg-gold text-white font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">Subscribe</button>
          </form>
        </div>
      </section>
      <CTASection />
    </>
  );
}
