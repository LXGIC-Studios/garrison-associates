"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy/95 backdrop-blur-md shadow-2xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <Link href="/" className="font-serif text-2xl tracking-wide text-white">
          <span className="text-gold">Garrison</span> &amp; Associates
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[11px] text-white/70 uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold-glow bg-gold hover:bg-gold-light text-navy font-bold px-7 py-3 text-[11px] uppercase tracking-[0.15em] transition-all duration-300">
            Free Consultation
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md px-4 pb-6 space-y-3 border-t border-white/5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-[0.15em] text-white/70 hover:text-gold transition-colors duration-300 py-2">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block bg-gold text-navy font-bold px-5 py-3 text-sm uppercase tracking-[0.15em] text-center mt-4">
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
