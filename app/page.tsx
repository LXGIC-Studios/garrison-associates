import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

const practiceAreas = [
  { title: "Personal Injury", description: "Aggressive representation for accident victims. We fight to secure the maximum compensation you deserve for medical bills, lost wages, and pain and suffering." },
  { title: "Family Law", description: "Compassionate guidance through divorce, custody disputes, and family matters. We protect your rights and your family's future." },
  { title: "Criminal Defense", description: "Skilled defense attorneys who protect your freedom and reputation. From misdemeanors to serious felonies, we build strong defense strategies." },
  { title: "Business Law", description: "Strategic counsel for businesses of all sizes. From formation and contracts to litigation and compliance, we safeguard your business interests." },
  { title: "Estate Planning", description: "Protect your legacy and provide for your loved ones. We craft comprehensive wills, trusts, and estate plans tailored to your needs." },
];

const testimonials = [
  { quote: "Garrison & Associates fought for us when no one else would. The settlement exceeded our expectations.", name: "Michael T.", caseType: "Personal Injury Client" },
  { quote: "Sarah Chen handled our custody case with compassion and tenacity. We got the outcome we needed.", name: "Jennifer R.", caseType: "Family Law Client" },
  { quote: "Professional, thorough, and aggressive when they needed to be. The best decision I ever made was calling this firm.", name: "David K.", caseType: "Criminal Defense Client" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatBar />

      {/* Practice Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">What We Do</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight">Our Practice Areas</h2>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-relaxed">Comprehensive legal services across a wide range of practice areas, delivering personalized attention to every case.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((pa) => (
              <PracticeAreaCard key={pa.title} {...pa} />
            ))}
          </div>
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">Testimonials</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy tracking-tight">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Credential Badges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-10">Recognized Excellence</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { label: "Super Lawyers", sub: "2010 - 2024" },
              { label: "Avvo 10.0", sub: "Superb Rating" },
              { label: "ABA Member", sub: "American Bar Assoc." },
              { label: "Best Lawyers", sub: "2024 Edition" },
            ].map((badge) => (
              <div key={badge.label} className="credential-badge flex items-center gap-4 min-w-[200px]">
                <svg className="w-10 h-10 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <div className="text-sm font-bold text-navy uppercase tracking-wider">{badge.label}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-[0.15em]">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
