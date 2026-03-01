const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "1,000+", label: "Cases Won" },
  { value: "Free", label: "Initial Consultations" },
  { value: "$50M+", label: "Recovered for Clients" },
];

export default function StatBar() {
  return (
    <section className="relative bg-navy py-20 border-t border-white/5">
      <div className="gold-divider max-w-4xl mx-auto mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gold tracking-tight">{s.value}</div>
            <div className="mt-3 text-white/50 text-xs uppercase tracking-[0.25em] font-light">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="gold-divider max-w-4xl mx-auto mt-16" />
    </section>
  );
}
