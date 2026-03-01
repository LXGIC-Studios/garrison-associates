import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 border-t border-white/5">
      <div className="gold-divider max-w-6xl mx-auto" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl text-white mb-2"><span className="text-gold">Garrison</span> &amp; Associates</h3>
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-5">Attorneys at Law</p>
          <p className="text-sm leading-relaxed">Providing experienced legal representation for over 25 years. Your case matters to us.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-6">Practice Areas</h4>
          <ul className="space-y-3 text-sm">
            {["Personal Injury","Family Law","Criminal Defense","Business Law","Estate Planning"].map(a=>(
              <li key={a}><Link href="/practice-areas" className="hover:text-gold transition-colors duration-300">{a}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/attorneys" className="hover:text-gold transition-colors duration-300">Our Attorneys</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors duration-300">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors duration-300">Free Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-6">Contact</h4>
          <p className="text-sm leading-relaxed">123 Justice Avenue, Suite 400<br/>Austin, TX 78701</p>
          <p className="text-sm mt-4"><a href="tel:5559012345" className="text-gold hover:text-gold-light transition-colors duration-300 font-serif text-lg">(555) 901-2345</a></p>
          <p className="text-sm mt-3">Mon–Fri: 8:30 AM – 5:30 PM</p>
        </div>
      </div>
      <div className="gold-divider max-w-6xl mx-auto" />
      <div className="py-8 text-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Garrison &amp; Associates. All rights reserved.</p>
        <p className="mt-2">Built by <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors duration-300">LXGIC Studios</a></p>
        <p className="mt-2 text-xs text-white/20">This is a demo website. The firm, attorneys, and cases depicted are fictional.</p>
      </div>
    </footer>
  );
}
