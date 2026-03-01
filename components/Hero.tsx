import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center">
      <Image src="/images/hero.jpg" alt="" fill className="object-cover opacity-15" priority />
      <div className="absolute inset-0 texture-overlay" />
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="w-24 h-[2px] bg-gold mx-auto mb-10 opacity-60" />
        <p className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-6">Established 1999 · Austin, Texas</p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] max-w-5xl mx-auto tracking-tight">
          Relentless Advocacy<br />
          <span className="text-gold">When It Matters Most</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
          For over 25 years, Garrison &amp; Associates has provided tenacious, results-driven representation for individuals and businesses throughout Texas.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/contact" className="btn-gold-glow bg-gold hover:bg-gold-light text-navy font-bold px-10 py-5 text-sm uppercase tracking-[0.2em] inline-block">
            Schedule a Free Consultation
          </Link>
          <Link href="/practice-areas" className="border border-white/20 hover:border-gold text-white/80 hover:text-gold font-semibold px-10 py-5 text-sm uppercase tracking-[0.2em] transition-all duration-300 inline-block">
            Our Practice Areas
          </Link>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
