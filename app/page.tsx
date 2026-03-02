import Hero from "@/components/Hero";
import PracticeAreaTabs from "@/components/PracticeAreaTabs";
import TestimonialRotator from "@/components/TestimonialRotator";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Practice Areas - Tabbed */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">What We Do</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight">Our Practice Areas</h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">Comprehensive legal services across a wide range of practice areas, delivering personalized attention to every case.</p>
          </div>
          <PracticeAreaTabs />
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0 texture-overlay" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">Ready to Discuss<br />Your Case?</h2>
          <p className="text-white/50 mb-10 text-lg font-light max-w-xl mx-auto">Schedule a free, no-obligation consultation with one of our experienced attorneys today.</p>
          <Link href="/contact" className="btn-gold-glow bg-gold hover:bg-gold-light text-navy font-bold px-12 py-5 text-sm uppercase tracking-[0.2em] inline-block">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialRotator />

      {/* Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">Awards &amp; Affiliations</p>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-navy tracking-tight mb-12">Recognized Excellence</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Super Lawyers", sub: "2010 - 2024" },
              { label: "Avvo 10.0", sub: "Superb Rating" },
              { label: "ABA Member", sub: "American Bar Assoc." },
              { label: "Best Lawyers", sub: "2024 Edition" },
            ].map((badge) => (
              <div key={badge.label} className="bg-white border border-gray-100 border-t-4 border-t-gold p-6 text-center">
                <div className="text-sm font-bold text-navy uppercase tracking-wider">{badge.label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.15em] mt-2">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Team</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy tracking-tight mb-14">Meet Our Attorneys</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-16">
            {[
              { src: "/images/portrait-1.jpg", name: "Robert Garrison", title: "Founding Partner" },
              { src: "/images/portrait-2.jpg", name: "Sarah Chen", title: "Partner" },
              { src: "/images/portrait-3.jpg", name: "Marcus Williams", title: "Associate" },
            ].map((attorney) => (
              <div key={attorney.name} className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-5">
                  <Image src={attorney.src} alt={attorney.name} fill className="object-cover object-top" />
                </div>
                <h3 className="font-serif text-xl text-navy">{attorney.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{attorney.title}</p>
              </div>
            ))}
          </div>
          <Link href="/attorneys" className="inline-block mt-12 text-gold hover:text-gold-light font-semibold text-sm uppercase tracking-[0.15em] transition-colors duration-300">
            Meet Our Attorneys →
          </Link>
        </div>
      </section>
    </>
  );
}
