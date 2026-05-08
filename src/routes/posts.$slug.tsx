import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Mail } from "lucide-react";
import { getPost, posts } from "@/data/posts";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Prime Wave Agency` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [{ title: "Post — Prime Wave Agency" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl text-navy">Post not found</h1>
        <Link to="/blog" className="text-gold mt-4 inline-block">Back to blog</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-navy">{error.message}</p>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <section className="bg-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-pw relative max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm mb-6">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className="label-accent">{post.cat}</span>
          <h1 className="text-3xl md:text-5xl mt-3 leading-tight">{post.title}</h1>
          <p className="mt-5 text-white/75">{post.excerpt}</p>
          <p className="mt-3 text-xs uppercase tracking-wider text-white/50">By Marcus Derrick · {post.readTime}</p>
        </div>
      </section>

      <article className="bg-white py-20">
        <div className="container-pw max-w-3xl">
          {post.body.map((s, i) => (
            <ScrollReveal key={s.heading} delay={i * 40}>
              <h2 className="text-2xl md:text-3xl text-navy mt-10 mb-4 font-display">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
            </ScrollReveal>
          ))}

          <div className="mt-14 p-8 md:p-10 rounded-2xl bg-navy text-white text-center border-2 border-gold/30">
            <span className="label-accent">Ready to Grow?</span>
            <h3 className="text-2xl md:text-3xl mt-3 font-display">Let Prime Wave Build It For You</h3>
            <p className="mt-3 text-white/75 max-w-xl mx-auto">
              Book a free strategy call with Marcus and get a tailored plan to turn your website into your best-performing sales channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-3 rounded-md hover:opacity-90 transition">
                <Mail size={18} /> Get In Touch
              </Link>
              <a href="https://wa.me/12268556194" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-md transition">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-surface py-20">
        <div className="container-pw">
          <h3 className="text-2xl text-navy font-display mb-8">Keep Reading</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to="/posts/$slug" params={{ slug: p.slug }} className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all block">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-gold">{p.cat}</span>
                <h4 className="text-lg text-navy mt-3 leading-snug">{p.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
