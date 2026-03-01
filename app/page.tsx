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
  { quote: "After my accident, I didn't know where to turn. Robert Garrison and his team fought relentlessly for me and secured a settlement that covered all my medical expenses and more. I can't recommend them enough.", name: "Michael T.", caseType: "Personal Injury Client" },
  { quote: "Sarah Chen handled my custody case with incredible compassion and professionalism. She made a difficult time much more manageable and achieved an outcome that was best for my children.", name: "Jennifer R.", caseType: "Family Law Client" },
  { quote: "When I was facing serious charges, Marcus Williams was the attorney I needed. His knowledge of criminal law and his courtroom presence were outstanding. The charges were reduced significantly.", name: "David K.", caseType: "Criminal Defense Client" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatBar />

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">Our Practice Areas</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We provide comprehensive legal services across a wide range of practice areas, delivering personalized attention to every case.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((pa) => (
              <PracticeAreaCard key={pa.title} {...pa} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-burgundy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-white/80 mb-8">Schedule a free, no-obligation consultation with one of our experienced attorneys today.</p>
          <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors inline-block">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl text-navy">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
            {["Super Lawyers", "Avvo 10.0 Rating", "ABA Member", "Texas Bar Association", "Best Lawyers 2024"].map((badge) => (
              <div key={badge} className="text-center">
                <div className="w-8 h-0.5 bg-gold mx-auto mb-2" />
                <div className="text-xs uppercase tracking-wider font-semibold">{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
