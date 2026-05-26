"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClick = (href: string) => {
    setActive(href);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-sm shadow-black/5"
            : "bg-transparent"
        } rounded-2xl px-6 py-3 flex items-center gap-8 w-[min(92vw,860px)]`}
        style={{ maxWidth: 860 }}
      >
        {/* Logo */}
        <button
          onClick={() => navClick("#hero")}
          className="mr-auto text-lg font-bold text-[var(--fg)] tracking-tight shrink-0 focus:outline-none"
          aria-label="Go to top"
        >
          Areeba
          <span className="text-[var(--fg)] opacity-30 mx-2">/</span>
          <span className="text-sm font-normal text-[var(--fg2)] hidden sm:inline">
            Areeba Fatima
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => navClick(l.href)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 focus:outline-none group ${
                active === l.href
                  ? "text-[var(--fg)]"
                  : "text-[var(--fg2)] hover:text-[var(--fg)]"
              }`}
            >
              {l.label}
              <span
                className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[var(--fg)] transition-all duration-300 ${
                  active === l.href ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center ml-2">
          <button
            onClick={() => setOpen(!open)}
            className="glass w-9 h-9 rounded-xl flex items-center justify-center md:hidden text-[var(--fg2)] hover:text-[var(--fg)] transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[72px] left-1/2 -translate-x-1/2 z-50 w-[min(92vw,860px)] glass rounded-2xl overflow-hidden transition-all duration-300 md:hidden ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => navClick(l.href)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                active === l.href
                  ? "bg-[var(--pill)] text-[var(--fg)]"
                  : "text-[var(--fg2)] hover:bg-[var(--pill)] hover:text-[var(--fg)]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
