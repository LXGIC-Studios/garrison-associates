"use client";
import { useState } from "react";

const caseTypes = ["Personal Injury", "Family Law", "Criminal Defense", "Business Law", "Estate Planning", "Other"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white border border-gray-100 p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-navy mb-2">Thank You</h3>
        <p className="text-gray-600">We&apos;ve received your message and will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-white border border-gray-100 p-8 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Full Name *</label>
          <input required type="text" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">Phone Number *</label>
          <input required type="tel" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Email Address *</label>
        <input required type="email" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Case Type *</label>
        <select required className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white">
          <option value="">Select a case type</option>
          {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Brief Description of Your Case</label>
        <textarea rows={5} className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
      </div>
      <button type="submit" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors w-full">
        Submit Your Case for Review
      </button>
      <p className="text-xs text-gray-400 text-center">Contacting the firm does not establish an attorney-client relationship.</p>
    </form>
  );
}
