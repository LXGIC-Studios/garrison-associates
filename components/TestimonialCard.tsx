export default function TestimonialCard({ quote, name, caseType }: { quote: string; name: string; caseType: string }) {
  return (
    <div className="bg-white border border-gray-100 p-8">
      <div className="text-gold text-4xl font-serif mb-4">&ldquo;</div>
      <p className="text-gray-700 leading-relaxed italic mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-gray-500">{caseType}</p>
      </div>
    </div>
  );
}
