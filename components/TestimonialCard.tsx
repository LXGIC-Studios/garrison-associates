export default function TestimonialCard({ quote, name, caseType }: { quote: string; name: string; caseType: string }) {
  return (
    <div className="bg-white border border-gray-100 p-10 hover:shadow-xl transition-all duration-300 group">
      <div className="text-gold text-6xl font-serif leading-none mb-6 opacity-60">&ldquo;</div>
      <p className="text-gray-700 leading-relaxed text-base italic mb-8 font-serif">{quote}</p>
      <div className="pt-6 border-t border-gray-100">
        <p className="font-serif text-lg text-navy">{name}</p>
        <p className="text-xs text-gold uppercase tracking-[0.2em] mt-1 font-semibold">{caseType}</p>
      </div>
    </div>
  );
}
