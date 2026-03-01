import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-xl text-white mb-4"><span className="text-gold">Garrison</span> & Associates</h3>
          <p className="text-sm leading-relaxed">Providing experienced legal representation for over 25 years. Your case matters to us.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase text-sm tracking-wider mb-4">Practice Areas</h4>
          <ul className="space-y-2 text-sm">
            {["Personal Injury","Family Law","Criminal Defense","Business Law","Estate Planning"].map(a=>(
              <li key={a}><Link href="/practice-areas" className="hover:text-gold transition-colors">{a}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase text-sm tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/attorneys" className="hover:text-gold transition-colors">Our Attorneys</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Free Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase text-sm tracking-wider mb-4">Contact</h4>
          <p className="text-sm">123 Justice Avenue, Suite 400<br/>Austin, TX 78701</p>
          <p className="text-sm mt-2"><a href="tel:5559012345" className="hover:text-gold transition-colors">(555) 901-2345</a></p>
          <p className="text-sm mt-2">Mon–Fri: 8:30 AM – 5:30 PM</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Garrison & Associates. All rights reserved.</p>
        <p className="mt-1">Built by <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">LXGIC Studios</a></p>
        <p className="mt-2 text-xs text-white/40">This is a demo website. The firm, attorneys, and cases depicted are fictional.</p>
      </div>
    </footer>
  );
}
