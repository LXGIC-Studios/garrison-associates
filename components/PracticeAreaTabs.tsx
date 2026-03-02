"use client";

import { useState } from "react";
import Link from "next/link";

const practiceAreas = [
  { title: "Personal Injury", description: "Aggressive representation for accident victims. We fight to secure the maximum compensation you deserve for medical bills, lost wages, and pain and suffering.", id: "personal-injury" },
  { title: "Family Law", description: "Compassionate guidance through divorce, custody disputes, and family matters. We protect your rights and your family's future.", id: "family-law" },
  { title: "Criminal Defense", description: "Skilled defense attorneys who protect your freedom and reputation. From misdemeanors to serious felonies, we build strong defense strategies.", id: "criminal-defense" },
  { title: "Business Law", description: "Strategic counsel for businesses of all sizes. From formation and contracts to litigation and compliance, we safeguard your business interests.", id: "business-law" },
  { title: "Estate Planning", description: "Protect your legacy and provide for your loved ones. We craft comprehensive wills, trusts, and estate plans tailored to your needs.", id: "estate-planning" },
];

export default function PracticeAreaTabs() {
  const [active, setActive] = useState(0);
  const current = practiceAreas[active];

  return (
    <div>
      {/* Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200 mb-10">
        {practiceAreas.map((pa, i) => (
          <button
            key={pa.id}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 px-6 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-colors duration-300 border-b-2 ${
              i === active
                ? "border-gold text-navy"
                : "border-transparent text-gray-400 hover:text-navy"
            }`}
          >
            {pa.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl">
        <h3 className="font-serif text-3xl sm:text-4xl text-navy tracking-tight mb-4">{current.title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">{current.description}</p>
        <Link
          href={`/practice-areas#${current.id}`}
          className="text-gold hover:text-gold-light font-semibold text-sm uppercase tracking-[0.15em] transition-colors duration-300"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
