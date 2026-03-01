import Link from "next/link";

function PracticeIcon({ title }: { title: string }) {
  const paths: Record<string, React.ReactNode> = {
    "Personal Injury": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m0 14v2m-7-9H3m18 0h-2M7.05 7.05L5.636 5.636m12.728 12.728L16.95 16.95M7.05 16.95l-1.414 1.414M18.364 5.636L16.95 7.05M12 8a4 4 0 100 8 4 4 0 000-8z" />,
    "Family Law": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    "Criminal Defense": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    "Business Law": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    "Estate Planning": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  };
  return (
    <svg className="w-12 h-12 text-gold opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {paths[title] || paths["Personal Injury"]}
    </svg>
  );
}

export default function PracticeAreaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-100 p-10 hover:shadow-2xl hover:border-gold/20 transition-all duration-300 group">
      <div className="mb-6"><PracticeIcon title={title} /></div>
      <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      <div className="w-8 h-[1px] bg-gold/40 mb-6 group-hover:w-16 transition-all duration-500" />
      <Link href="/practice-areas" className="text-gold text-sm font-semibold uppercase tracking-[0.15em] hover:text-burgundy transition-colors duration-300">
        Learn More &rarr;
      </Link>
    </div>
  );
}
