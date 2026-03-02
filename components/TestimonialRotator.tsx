"use client";

import { useState } from "react";

const testimonials = [
  { quote: "Garrison & Associates fought for us when no one else would. The settlement exceeded our expectations.", name: "Michael T.", caseType: "Personal Injury Client" },
  { quote: "Sarah Chen handled our custody case with compassion and tenacity. We got the outcome we needed.", name: "Jennifer R.", caseType: "Family Law Client" },
  { quote: "Professional, thorough, and aggressive when they needed to be. The best decision I ever made was calling this firm.", name: "David K.", caseType: "Criminal Defense Client" },
];

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-24 bg-[#060E1A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-10">Testimonials</p>
        {/* Decorative quote mark */}
        <div className="font-serif text-gold/20 text-[160px] leading-none select-none mb-[-60px]">&ldquo;</div>
        <blockquote className="font-serif text-white text-xl sm:text-2xl italic leading-relaxed max-w-3xl mx-auto">
          {current.quote}
        </blockquote>
        <p className="text-gold mt-8 font-semibold text-sm tracking-wide">
          . {current.name}, {current.caseType}
        </p>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button onClick={prev} aria-label="Previous testimonial" className="text-gold hover:text-gold-light transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next testimonial" className="text-gold hover:text-gold-light transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
