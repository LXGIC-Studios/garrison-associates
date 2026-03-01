import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy min-h-[600px] flex items-center">
      <Image src="/images/hero.jpg" alt="" fill className="object-cover opacity-20" priority />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="w-20 h-0.5 bg-gold mx-auto mb-8" />
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
          Experienced Legal Representation <span className="text-gold">When It Matters Most</span>
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          For over 25 years, Garrison & Associates has provided tenacious, results-driven advocacy for individuals and businesses throughout Texas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors inline-block">
            Schedule a Free Consultation
          </Link>
          <Link href="/practice-areas" className="border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors inline-block">
            Our Practice Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
