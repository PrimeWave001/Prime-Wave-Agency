import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${transparent ? "bg-transparent" : "bg-white/95 backdrop-blur shadow-sm"}`}>
      <div className="container-pw flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prime Wave Agency" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-gold ${transparent ? "text-white/90" : "text-navy"}`}
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition shadow-md">
            Get a Free Proposal
          </Link>
        </nav>
        <button className={`lg:hidden ${transparent ? "text-white" : "text-navy"}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="container-pw flex flex-col py-4 gap-3">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-navy py-2 font-medium" activeProps={{ className: "text-gold" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-gold text-white text-center font-semibold px-5 py-3 rounded-md mt-2">
            Get a Free Proposal
          </Link>
        </div>
      </div>
    </header>
  );
}
