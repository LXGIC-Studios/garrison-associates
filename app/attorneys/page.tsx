import AttorneyProfile from "@/components/AttorneyProfile";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Attorneys | Garrison & Associates" };

const attorneys = [
  {
    name: "Robert Garrison",
    title: "Founding Partner",
    image: "/images/portrait-1.jpg",
    bio: "Robert Garrison founded the firm in 1999 with a singular mission: to provide world-class legal representation to individuals and businesses who deserve a powerful advocate in their corner. With over 25 years of experience in personal injury and business law, Robert has secured more than $50 million in verdicts and settlements for his clients. He is known for his meticulous preparation, commanding courtroom presence, and unwavering dedication to achieving justice. Robert is a Fellow of the Texas Bar Foundation and has been recognized by Super Lawyers every year since 2010.",
    education: "J.D., Vanderbilt University Law School; B.A., University of Texas at Austin",
    barAdmissions: ["State Bar of Texas", "U.S. District Court, Western District of Texas", "U.S. Fifth Circuit Court of Appeals"],
  },
  {
    name: "Sarah Chen",
    title: "Partner — Family Law & Estate Planning",
    image: "/images/portrait-2.jpg",
    bio: "Sarah Chen joined Garrison & Associates in 2005 and became partner in 2012. She leads the firm's family law and estate planning practice groups, bringing a rare combination of sharp legal acumen and genuine empathy to every case. Sarah has guided hundreds of families through complex divorces, custody disputes, and estate planning matters. Her clients consistently praise her ability to explain complicated legal concepts clearly and her commitment to achieving outcomes that protect their families' futures. She is a certified mediator and frequent speaker on family law topics.",
    education: "J.D., Georgetown University Law Center; B.A., Stanford University",
    barAdmissions: ["State Bar of Texas", "Certified Family Law Mediator"],
  },
  {
    name: "Marcus Williams",
    title: "Associate — Criminal Defense",
    image: "/images/portrait-3.jpg",
    bio: "Marcus Williams is a tenacious criminal defense attorney who brings passion and precision to every case. Before joining Garrison & Associates, Marcus served as a public defender in Travis County, where he handled over 500 cases and developed a deep understanding of the criminal justice system from the inside. His courtroom experience is extensive, and he is known for his thorough cross-examinations and persuasive closing arguments. Marcus is particularly dedicated to ensuring that every client receives a fair trial and vigorous defense, regardless of the charges they face.",
    education: "J.D., Howard University School of Law; B.S., Morehouse College",
    barAdmissions: ["State Bar of Texas", "U.S. District Court, Western District of Texas"],
  },
  {
    name: "Elena Vasquez",
    title: "Associate — Personal Injury & Civil Litigation",
    image: "/images/portrait-4.jpg",
    bio: "Elena Vasquez is a rising star in the firm's personal injury and civil litigation practice. A former judicial clerk for the Texas Court of Appeals, Elena brings exceptional legal research and writing skills to the team. She is a skilled negotiator who has secured favorable settlements in numerous complex personal injury cases, and she is equally comfortable in the courtroom. Elena is bilingual in English and Spanish, allowing her to serve the firm's diverse client base with ease. She is actively involved in the Austin Hispanic Bar Association and volunteers with local legal aid organizations.",
    education: "J.D., University of Texas School of Law; B.A., Rice University",
    barAdmissions: ["State Bar of Texas", "U.S. District Court, Western District of Texas"],
  },
];

export default function Attorneys() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 relative">
        <div className="absolute inset-0 texture-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Team</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">Our Attorneys</h1>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto leading-relaxed font-light">Experienced, dedicated, and results-driven — our team is committed to providing exceptional legal representation.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((a) => (
            <AttorneyProfile key={a.name} {...a} />
          ))}
        </div>
      </section>
    </>
  );
}
