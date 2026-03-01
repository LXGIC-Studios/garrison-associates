import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Practice Areas | Garrison & Associates" };

const areas = [
  {
    id: "personal-injury",
    title: "Personal Injury",
    icon: "⚖️",
    description: [
      "When you or a loved one suffers an injury due to someone else's negligence, the consequences can be devastating — physically, emotionally, and financially. At Garrison & Associates, our personal injury attorneys have spent over two decades fighting for the rights of accident victims across Texas.",
      "We handle a wide range of personal injury cases, including motor vehicle accidents, truck accidents, slip and fall injuries, medical malpractice, workplace injuries, and wrongful death claims. Our team conducts thorough investigations, works with expert witnesses, and builds compelling cases designed to maximize your recovery.",
      "We operate on a contingency fee basis, meaning you pay nothing unless we win your case. Our track record includes over $50 million recovered for our clients, and we are committed to holding negligent parties accountable.",
    ],
    cases: ["Motor Vehicle Accidents", "Truck & Commercial Accidents", "Slip & Fall Injuries", "Medical Malpractice", "Workplace Injuries", "Wrongful Death", "Product Liability"],
    whoFor: "Individuals injured due to the negligence of others who need experienced legal representation to secure fair compensation.",
  },
  {
    id: "family-law",
    title: "Family Law",
    icon: "👨‍👩‍👧‍👦",
    description: [
      "Family law matters are deeply personal and can be among the most emotionally challenging experiences of your life. Our family law attorneys approach every case with both legal expertise and genuine compassion, understanding that your family's well-being is at stake.",
      "Whether you are navigating a complex divorce involving significant assets, fighting for custody of your children, or seeking to establish or modify support orders, we provide strategic counsel tailored to your unique circumstances. We are skilled negotiators who can resolve disputes efficiently, but we are also prepared to litigate aggressively when your interests demand it.",
      "Our goal is always to achieve the best possible outcome for you and your family while minimizing conflict and protecting your children from unnecessary stress.",
    ],
    cases: ["Divorce & Legal Separation", "Child Custody & Visitation", "Child Support", "Spousal Support / Alimony", "Property Division", "Prenuptial Agreements", "Adoption"],
    whoFor: "Individuals and families facing divorce, custody disputes, or other domestic relations matters who need dedicated legal guidance.",
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    icon: "🛡️",
    description: [
      "Being accused of a crime can be a frightening and overwhelming experience. The stakes are high — your freedom, your reputation, and your future are all on the line. At Garrison & Associates, our criminal defense attorneys are fierce advocates who will fight to protect your constitutional rights at every stage of the legal process.",
      "We represent clients facing a wide range of charges, from misdemeanors to serious felonies. Our defense strategies are built on meticulous investigation, thorough knowledge of criminal law and procedure, and years of courtroom experience. We challenge the prosecution's evidence, identify weaknesses in their case, and work tirelessly to achieve the best possible outcome.",
      "Every person accused of a crime deserves a vigorous defense. We treat every client with respect and dignity, providing honest counsel and relentless advocacy from the moment you contact our firm.",
    ],
    cases: ["DWI / DUI Defense", "Drug Offenses", "Assault & Violent Crimes", "Theft & Property Crimes", "White Collar Crimes", "Federal Offenses", "Juvenile Defense"],
    whoFor: "Individuals charged with criminal offenses who need an aggressive and experienced defense attorney to protect their rights and freedom.",
  },
  {
    id: "business-law",
    title: "Business Law",
    icon: "🏛️",
    description: [
      "In today's complex business environment, having trusted legal counsel is not a luxury — it's a necessity. Our business law attorneys serve as strategic partners to businesses of all sizes, from startups and small businesses to established corporations, providing practical legal solutions that support your growth and protect your interests.",
      "We assist with entity formation and structuring, contract drafting and negotiation, mergers and acquisitions, employment law compliance, intellectual property protection, and commercial litigation. Our proactive approach helps you identify and mitigate legal risks before they become costly disputes.",
      "When disputes do arise, we are experienced litigators who will advocate aggressively on your behalf in negotiations, mediation, arbitration, or the courtroom. Our goal is to resolve business disputes efficiently while protecting your bottom line and business relationships.",
    ],
    cases: ["Entity Formation & Structuring", "Contract Drafting & Negotiation", "Mergers & Acquisitions", "Employment Law", "Intellectual Property", "Commercial Litigation", "Regulatory Compliance"],
    whoFor: "Business owners, entrepreneurs, and executives who need strategic legal counsel to navigate complex business challenges and disputes.",
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    icon: "📜",
    description: [
      "Estate planning is one of the most important steps you can take to protect your family and ensure your wishes are honored. Without a proper estate plan, your assets may be distributed according to state law rather than your intentions, potentially creating hardship and conflict for your loved ones.",
      "Our estate planning attorneys work closely with you to understand your goals, family dynamics, and financial situation, then craft a comprehensive plan that addresses your unique needs. We prepare wills, revocable and irrevocable trusts, powers of attorney, healthcare directives, and other essential documents.",
      "We also assist with estate administration and probate, guiding executors and beneficiaries through the process with care and efficiency. Whether your estate is modest or complex, we provide the same level of attention and expertise to ensure your legacy is protected.",
    ],
    cases: ["Wills & Testaments", "Revocable Living Trusts", "Irrevocable Trusts", "Powers of Attorney", "Healthcare Directives", "Probate & Estate Administration", "Asset Protection"],
    whoFor: "Individuals and families who want to protect their assets, provide for their loved ones, and ensure their wishes are carried out.",
  },
];

export default function PracticeAreas() {
  return (
    <>
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />
          <h1 className="font-serif text-4xl sm:text-5xl text-white">Practice Areas</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Comprehensive legal services delivered with decades of experience and an unwavering commitment to our clients.</p>
        </div>
      </section>

      {areas.map((area, i) => (
        <section key={area.id} id={area.id} className={`py-20 ${i % 2 === 1 ? "bg-gray-50" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{area.icon}</span>
                  <h2 className="font-serif text-3xl text-navy">{area.title}</h2>
                </div>
                {area.description.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
                <p className="text-sm font-semibold text-navy mt-6"><strong>Who it&apos;s for:</strong> {area.whoFor}</p>
              </div>
              <div>
                <div className="bg-white border border-gray-100 p-8">
                  <h3 className="font-serif text-lg text-navy mb-4">Types of Cases We Handle</h3>
                  <ul className="space-y-2">
                    {area.cases.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-gold">→</span> {c}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-6 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors block text-center">
                    Discuss Your Case
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
