'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Mail, Send, ShieldCheck } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

const areasOfInterest = [
  'CSR Strategy & Ground Implementation',
  'ESG Architecture & BRSR Reporting',
  'Government Advisory & Public Policy',
  'Program Management Units (PMU)',
  'Digital Transformation & AI Systems',
  'Education, Skilling & Faculty Development',
  'Impact Measurement & Research (M&E)',
  'Institutional Partnership Inquiry',
  'General Strategic Dialogue',
];

export const ContactModal: React.FC = () => {
  const { isOpen, closeModal, defaultInterest } = useContactModal();

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    areaOfInterest: defaultInterest || 'CSR Strategy & Ground Implementation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultInterest) {
      setFormData((prev) => ({ ...prev, areaOfInterest: defaultInterest }));
    }
  }, [defaultInterest]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      'https://script.google.com/macros/s/AKfycbwGqdhb74HwJrU1F2IKk6hx9gAwQaHc3XRijGxmp07mE3RGsoPJAbZTnzupX0WO9HSR_A/exec';

    // 1. Submit to API route & Google Apps Script
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
    } catch (err) {
      console.warn('Submission error:', err);
    }

    // 2. Prepare mailto link target to coms@orvys.in
    const subject = encodeURIComponent(`Consulting Inquiry [${formData.areaOfInterest}] - ${formData.organization}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nDesignation: ${formData.designation}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.areaOfInterest}\n\nStrategic Mandate / Inquiry Details:\n${formData.message}`
    );
    const mailtoUrl = `mailto:coms@orvys.in?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      designation: '',
      email: '',
      phone: '',
      areaOfInterest: defaultInterest || 'CSR Strategy & Ground Implementation',
      message: '',
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-2xl bg-surface border border-border-default shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-serif text-lg font-normal tracking-wide">
              Start a Conversation
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-charcoal-400 border-l border-navy-700 pl-2.5">
              Target Email: <strong className="text-accent font-semibold">coms@orvys.in</strong>
            </span>
          </div>
          <button
            onClick={closeModal}
            className="p-1 hover:bg-navy-800 text-charcoal-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-accent/20 border border-accent flex items-center justify-center mx-auto text-accent-dark">
                <CheckCircle2 className="w-7 h-7 text-accent-dark" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                Consulting Brief Transmitted
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans max-w-md mx-auto">
                Thank you for initiating a dialogue with ORVYS Consulting. Your brief is routed directly to our executive team at <strong className="text-navy-950 font-semibold">coms@orvys.in</strong>. A practice partner will respond within 24–48 hours.
              </p>
              <div className="bg-surface-warm border border-border-default p-3 text-center text-xs font-mono text-charcoal-600">
                Direct Email: <a href="mailto:coms@orvys.in" className="text-accent-dark font-bold hover:underline">coms@orvys.in</a>
              </div>
              <div className="pt-4 flex items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="text-xs font-mono uppercase tracking-wider text-accent-dark font-bold underline"
                >
                  Send Another Brief
                </button>
                <button
                  onClick={closeModal}
                  className="bg-navy-800 text-white text-xs uppercase tracking-widest font-mono px-5 py-2 hover:bg-navy-900 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-border-light pb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-accent-dark font-semibold block mb-1">
                  Executive Consultation Brief
                </span>
                <p className="text-xs text-charcoal-600 font-sans">
                  Direct inquiry to practice leadership (<strong className="text-navy-900 font-mono">coms@orvys.in</strong>).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-warm border border-border-default px-3 py-2 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                    Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Head of CSR / Director"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-surface-warm border border-border-default px-3 py-2 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                    Organization / Department *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Corporate Foundation / State Nodal Body"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-surface-warm border border-border-default px-3 py-2 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-warm border border-border-default px-3 py-2 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-surface-warm border border-border-default px-3 py-2 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full bg-surface-warm border border-border-default px-3 py-2 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                  >
                    {areasOfInterest.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1 font-semibold">
                  Program Challenge / Strategic Scope *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current program objective, target geography (e.g. Bihar / Purvanchal / National), institutional partners, or specific consulting mandate..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default p-3 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-navy-800 hover:bg-navy-900 text-white text-xs uppercase tracking-widest font-bold py-3.5 px-6 transition-all border border-navy-800 shadow-sm disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-accent" />
                  <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Submit & Mail to coms@orvys.in'}</span>
                </button>
                <div className="flex items-center justify-between text-[10px] font-mono text-charcoal-500 mt-2">
                  <span>Confidentiality Guaranteed</span>
                  <span>Recipient: coms@orvys.in</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
