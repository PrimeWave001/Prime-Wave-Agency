import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { FIVERR_PROFILES } from "@/lib/site";

export function FiverrSection() {
  return (
    <section className="bg-[#070B1A] py-24 relative overflow-hidden">
      <div className="container-pw">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="label-accent">Hire Us on Fiverr</span>
            <h2 className="text-3xl md:text-5xl mt-3">Hire Us on Fiverr</h2>
            <p className="mt-4 text-[#8A93A6] max-w-2xl mx-auto">
              Secure payments and verified client reviews. Order through any of our team's Fiverr studios.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {FIVERR_PROFILES.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className="card-dark p-8 h-full flex flex-col lift-3d">
                <div className="text-2xl font-extrabold tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  fiverr<span className="text-[#1DBF73]">.</span>
                </div>
                <h3 className="text-xl font-bold mt-4">{p.name}</h3>
                {p.tag && <p className="text-sm text-[#8A93A6] mt-1">{p.tag}</p>}
                <p className="text-sm text-[#8A93A6] mt-3 leading-relaxed flex-1">{p.specialty}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 mt-6 font-semibold px-6 py-3 rounded-xl text-white transition hover:brightness-110"
                  style={{ background: "#1DBF73" }}
                >
                  See Reviews & Order <ArrowUpRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
