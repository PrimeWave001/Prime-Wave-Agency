import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/primewave-logo.png.asset.json";
const logo = logoAsset.url;

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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${transparent ? "bg-transparent" : "glass-nav"}`}
    >
      <div className="container-pw flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Prime Wave Agency" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors text-[#F5F7FA]/80 hover:text-[#38B6FF]`}
              activeProps={{ className: "text-[#38B6FF]" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm shadow-lg">
            Get a Free Proposal
          </Link>
        </nav>
        <button className={`lg:hidden text-[#F5F7FA]`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`lg:hidden bg-[#070B1A]/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="container-pw flex flex-col py-4 gap-3">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-[#F5F7FA] py-2 font-medium hover:text-[#38B6FF]" activeProps={{ className: "text-[#38B6FF]" }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-center mt-2">
            Get a Free Proposal
          </Link>
        </div>
      </div>
    </header>
  );
}
