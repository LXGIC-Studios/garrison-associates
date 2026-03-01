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
          <div className="space-y-8">
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="font-serif text-lg text-navy mb-4">Office Information</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-navy">Address</p>
                  <p>123 Justice Avenue, Suite 400<br />Austin, TX 78701</p>
                </div>
                <div>
                  <p className="font-semibold text-navy">Phone</p>
                  <p><a href="tel:5559012345" className="text-gold hover:text-burgundy transition-colors">(555) 901-2345</a></p>
                </div>
                <div>
                  <p className="font-semibold text-navy">Email</p>
                  <p><a href="mailto:info@garrisonlaw.com" className="text-gold hover:text-burgundy transition-colors">info@garrisonlaw.com</a></p>
                </div>
                <div>
                  <p className="font-semibold text-navy">Office Hours</p>
                  <p>Monday – Friday: 8:30 AM – 5:30 PM<br />Saturday: By Appointment<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-64 flex items-center justify-center border border-gray-100">
              <div className="text-center text-gray-400">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p className="text-sm font-semibold">Map Placeholder</p>
                <p className="text-xs">123 Justice Ave, Austin TX</p>
              </div>
            </div>

            <div className="bg-navy-light p-8 text-white/70 text-xs leading-relaxed">
              <p className="font-semibold text-white text-sm mb-2">Disclaimer</p>
              <p>Contacting the firm does not establish an attorney-client relationship. Please do not send any confidential information until such time as an attorney-client relationship has been established.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
