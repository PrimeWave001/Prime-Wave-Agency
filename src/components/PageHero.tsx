import type { ReactNode } from "react";

export function PageHero({
  label,
  title,
  subtitle,
  image,
  children,
}: {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative text-white overflow-hidden parallax-bg"
      style={{ backgroundImage: `url(${image})`, paddingTop: "100px", paddingBottom: "80px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/90" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-pw relative text-center">
        <div className="w-16 h-[2px] bg-gold mx-auto mb-4" />
        <span className="label-accent">{label}</span>
        <h1 className="text-4xl md:text-6xl mt-3 drop-shadow-lg font-extrabold">{title}</h1>
        {subtitle && <p className="mt-4 text-white/85 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
