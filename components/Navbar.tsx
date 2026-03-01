"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-navy fixed top-0 left-0 right-0 z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <Link href="/" className="font-serif text-2xl tracking-wide text-white">
          <span className="text-gold">Garrison</span> &amp; Associates
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/90 uppercase tracking-widest hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors">
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
        <div className="md:hidden bg-navy-light px-4 pb-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-widest text-white/90 hover:text-gold transition-colors py-2">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block bg-gold text-navy font-semibold px-5 py-2.5 text-sm uppercase tracking-wider text-center">
            Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
