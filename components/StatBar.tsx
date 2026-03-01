const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1,000+", label: "Cases Won" },
  { value: "Free", label: "Consultations" },
  { value: "$50M+", label: "Recovered" },
];

export default function StatBar() {
  return (
    <section className="bg-navy-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-4xl lg:text-5xl text-gold">{s.value}</div>
            <div className="mt-2 text-white/70 text-sm uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
