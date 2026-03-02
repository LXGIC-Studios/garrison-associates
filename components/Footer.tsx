import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Gold top divider */}
      <div className="h-[1px] bg-gold/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <h3 className="font-serif text-2xl text-gold">Garrison <span className="text-white">&amp;</span> Associates</h3>
          <p className="text-white text-xs uppercase tracking-[0.2em] mt-2">Attorneys at Law</p>
          <p className="text-white/40 text-sm mt-4 leading-relaxed">
            123 Justice Avenue, Suite 400<br />
            Austin, TX 78701
          </p>
        </div>

        {/* Right column */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-5">Practice Areas</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {["Personal Injury", "Family Law", "Criminal Defense", "Business Law", "Estate Planning"].map((a) => (
                <li key={a}><Link href="/practice-areas" className="hover:text-gold transition-colors duration-300">{a}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><Link href="/attorneys" className="hover:text-gold transition-colors duration-300">Our Attorneys</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors duration-300">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors duration-300">Free Consultation</Link></li>
            </ul>
            <p className="mt-5 text-sm">
              <a href="tel:5559012345" className="text-gold hover:text-gold-light transition-colors duration-300 font-serif text-lg">(555) 901-2345</a>
            </p>
            <p className="mt-2 text-sm text-white/50">
              <a href="mailto:info@garrisonlaw.com" className="hover:text-gold transition-colors duration-300">info@garrisonlaw.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-6 text-center">
        <p className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} Garrison &amp; Associates. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-white/40">
          Built by <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors duration-300">LXGIC Studios</a>
        </p>
        <p className="mt-2 text-[11px] text-white/20">This is a demo website. The firm, attorneys, and cases depicted are fictional.</p>
      </div>
    </footer>
  );
}
