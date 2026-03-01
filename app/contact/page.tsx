import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us | Garrison & Associates" };

export default function Contact() {
  return (
    <>
      <section className="bg-navy pt-36 pb-20 relative">
        <div className="absolute inset-0 texture-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">Contact Us</h1>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto leading-relaxed font-light">Schedule your free consultation today. We&apos;re here to help you navigate your legal challenges.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-navy mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div className="space-y-6">
            {/* Free Consultation Badge */}
            <div className="bg-gold text-navy p-8 text-center">
              <svg className="w-12 h-12 mx-auto mb-3 text-navy/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="font-serif text-2xl font-bold">Free Consultation</p>
              <p className="text-sm mt-2 text-navy/70">No obligation. No fees unless we win.</p>
            </div>

            {/* Office Info - Dark Navy */}
            <div className="bg-navy p-8 text-white/70">
              <h3 className="font-serif text-lg text-white mb-6">Office Information</h3>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="font-semibold text-gold text-xs uppercase tracking-[0.15em] mb-1">Address</p>
                  <p>123 Justice Avenue, Suite 400<br />Austin, TX 78701</p>
                </div>
                <div>
                  <p className="font-semibold text-gold text-xs uppercase tracking-[0.15em] mb-1">Phone</p>
                  <p><a href="tel:5559012345" className="text-white hover:text-gold transition-colors font-serif text-lg">(555) 901-2345</a></p>
                </div>
                <div>
                  <p className="font-semibold text-gold text-xs uppercase tracking-[0.15em] mb-1">Email</p>
                  <p><a href="mailto:info@garrisonlaw.com" className="text-white/70 hover:text-gold transition-colors">info@garrisonlaw.com</a></p>
                </div>
                <div>
                  <p className="font-semibold text-gold text-xs uppercase tracking-[0.15em] mb-1">Office Hours</p>
                  <p>Monday - Friday: 8:30 AM - 5:30 PM<br />Saturday: By Appointment<br />Sunday: Closed</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-gold text-xs uppercase tracking-[0.15em] mb-1">Emergency Contact</p>
                  <p className="text-white font-serif text-lg"><a href="tel:5559019999" className="hover:text-gold transition-colors">(555) 901-9999</a></p>
                  <p className="text-xs text-white/40 mt-1">Available 24/7 for urgent legal matters</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-navy-light p-8 text-white/60 text-xs leading-relaxed border border-white/5">
              <p className="font-semibold text-white text-sm mb-2">Attorney-Client Privilege</p>
              <p>Contacting the firm does not establish an attorney-client relationship. Please do not send any confidential information until such time as an attorney-client relationship has been formally established. All consultations are kept strictly confidential.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
