import Link from "next/link";

const icons: Record<string, string> = {
  "Personal Injury": "⚖️",
  "Family Law": "👨‍👩‍👧‍👦",
  "Criminal Defense": "🛡️",
  "Business Law": "🏛️",
  "Estate Planning": "📜",
};

export default function PracticeAreaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-100 p-8 hover:shadow-xl transition-shadow group">
      <div className="text-4xl mb-4">{icons[title] || "⚖️"}</div>
      <h3 className="font-serif text-xl text-navy mb-3 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <Link href="/practice-areas" className="text-gold text-sm font-semibold uppercase tracking-wider hover:text-burgundy transition-colors">
        Learn More →
      </Link>
    </div>
  );
}
