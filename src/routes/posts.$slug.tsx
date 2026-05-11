import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Mail } from "lucide-react";
import { getPost, posts, type Post } from "@/data/posts";
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
  const post = Route.useLoaderData() as Post;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://primewaveagency.org/posts/${post.slug}`;
  const wa = `https://wa.me/?text=${encodeURIComponent(post.title + " — " + shareUrl)}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const tw = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`;
  return (
    <>
      <section
        className="relative pt-36 pb-24 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(31,42,68,0.75), rgba(31,42,68,0.9)), url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-pw relative max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-gold text-sm mb-6">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className="label-accent">{post.cat}</span>
          <h1 className="text-3xl md:text-5xl mt-3 leading-tight drop-shadow-lg">{post.title}</h1>
          <p className="mt-5 text-white/85">{post.excerpt}</p>
          <p className="mt-3 text-xs uppercase tracking-wider text-white/60">By Marcus Derrick · {post.date} · {post.readTime}</p>
        </div>
      </section>

      {/* Author + share */}
      <section className="bg-white border-b border-border py-6">
        <div className="container-pw max-w-3xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center font-display font-bold text-gold">MD</div>
            <div>
              <p className="font-semibold text-navy text-sm">Marcus Derrick</p>
              <p className="text-xs text-muted-foreground">Founder · Prime Wave Agency · {post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground mr-1">Share:</span>
            <a href={wa} target="_blank" rel="noopener" aria-label="Share on WhatsApp" className="w-9 h-9 rounded-full bg-surface hover:bg-gold hover:text-white text-navy flex items-center justify-center transition"><MessageCircle size={16} /></a>
            <a href={fb} target="_blank" rel="noopener" aria-label="Share on Facebook" className="w-9 h-9 rounded-full bg-surface hover:bg-gold hover:text-white text-navy flex items-center justify-center transition font-bold text-sm">f</a>
            <a href={tw} target="_blank" rel="noopener" aria-label="Share on Twitter" className="w-9 h-9 rounded-full bg-surface hover:bg-gold hover:text-white text-navy flex items-center justify-center transition font-bold text-sm">𝕏</a>
          </div>
        </div>
      </section>

      <article className="bg-white py-16">
        <div className="container-pw" style={{ maxWidth: 780 }}>
          {post.body.map((s, i) => (
            <ScrollReveal key={s.heading} delay={i * 30}>
              <h2 className="text-2xl md:text-3xl text-navy mt-10 mb-4 font-display">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-foreground/85 mb-5" style={{ fontSize: "18px", lineHeight: 1.9 }}>{p}</p>
              ))}
              {i === Math.floor(post.body.length / 2) && (
                <img src={post.image} alt="" loading="lazy" className="my-10 rounded-2xl shadow-xl w-full" />
              )}
              {s.pullQuote && <p className="pull-quote">"{s.pullQuote}"</p>}
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
