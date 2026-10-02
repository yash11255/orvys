'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, MapPin, Mail, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';

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

function ContactFormInner() {
  const searchParams = useSearchParams();
  const prefilledInterest = searchParams.get('interest');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    areaOfInterest: prefilledInterest || 'CSR Strategy & Ground Implementation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledInterest) {
      setFormData((prev) => ({ ...prev, areaOfInterest: prefilledInterest }));
    }
  }, [prefilledInterest]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      'https://script.google.com/macros/s/AKfycbwGqdhb74HwJrU1F2IKk6hx9gAwQaHc3XRijGxmp07mE3RGsoPJAbZTnzupX0WO9HSR_A/exec';

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

    const subject = encodeURIComponent(`Consulting Inquiry [${formData.areaOfInterest}] - ${formData.organization}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nDesignation: ${formData.designation}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.areaOfInterest}\n\nStrategic Mandate / Inquiry Details:\n${formData.message}`
    );
    const mailtoUrl = `mailto:coms@orvys.in?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Form */}
      <div className="lg:col-span-7 bg-surface border border-border-default p-8 sm:p-12 shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-12 h-12 bg-accent/20 border border-accent flex items-center justify-center mx-auto text-accent-dark">
              <CheckCircle2 className="w-6 h-6 text-accent-dark" />
            </div>
            <h3 className="font-serif text-3xl text-navy-900 font-normal">
              Consulting Inquiry Received
            </h3>
            <p className="text-sm text-charcoal-700 leading-relaxed font-sans max-w-md mx-auto">
              Thank you for initiating a conversation with ORVYS Consulting. A senior practice partner will review your program parameters and reach out within 24–48 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    organization: '',
                    designation: '',
                    email: '',
                    phone: '',
                    areaOfInterest: 'CSR Strategy & Ground Implementation',
                    message: '',
                  });
                }}
                className="text-xs font-mono uppercase tracking-wider text-accent-dark font-bold underline"
              >
                Submit Another Consultation Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-dark font-semibold block mb-1">
                Consulting Brief
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                Initiate a Strategic Dialogue
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default px-3.5 py-2.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                  Designation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Head of CSR / Secretary"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default px-3.5 py-2.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                  Organization / Department *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Foundation / State Agency"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default px-3.5 py-2.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default px-3.5 py-2.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default px-3.5 py-2.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                  Area of Interest *
                </label>
                <select
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full bg-surface-warm border border-border-default px-3.5 py-2.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
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
              <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 mb-1.5 font-semibold">
                Program Challenge / Strategic Scope *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your current program objective, target geography (e.g. Bihar / Eastern UP / National), institutional partners, or specific consulting mandate..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface-warm border border-border-default p-3.5 text-xs font-sans text-charcoal-900 focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-navy-800 hover:bg-navy-900 text-white text-xs uppercase tracking-widest font-bold py-4 px-6 transition-colors border border-navy-800 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Transmitting Inquiries...' : 'Start a Conversation'}</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </button>
              <p className="text-[10px] font-mono text-charcoal-500 mt-2 text-center">
                All inquiries handled under strict institutional confidentiality.
              </p>
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Institutional Coordinates */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-surface border border-border-default p-8 space-y-6">
          <div className="border-b border-border-light pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-dark font-semibold block mb-1">
              Geographic Scope
            </span>
            <h3 className="font-serif text-2xl text-navy-900 font-normal">
              India Practice Locations
            </h3>
          </div>

          <div className="space-y-4 text-xs font-sans text-charcoal-700">
            <div className="bg-surface-warm border border-border-light p-4">
              <div className="flex items-center gap-2 text-navy-900 font-semibold mb-1">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Bihar Operational Hub</span>
              </div>
              <p className="text-charcoal-600">
                State Secretariat, Department Liaison & District Coordination Network across North & South Bihar.
              </p>
              <span className="text-[10px] font-mono text-accent-dark uppercase font-semibold mt-1 block">
                Patna • Muzaffarpur • Bhagalpur • Gaya
              </span>
            </div>

            <div className="bg-surface-warm border border-border-light p-4">
              <div className="flex items-center gap-2 text-navy-900 font-semibold mb-1">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Purvanchal / Eastern UP Hub</span>
              </div>
              <p className="text-charcoal-600">
                University linkages, corporate CSR programs, and district administration coordination.
              </p>
              <span className="text-[10px] font-mono text-accent-dark uppercase font-semibold mt-1 block">
                Varanasi • Gorakhpur • Prayagraj
              </span>
            </div>

            <div className="bg-surface-warm border border-border-light p-4">
              <div className="flex items-center gap-2 text-navy-900 font-semibold mb-1">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Delhi NCR Coordination</span>
              </div>
              <p className="text-charcoal-600">
                Central ministries, enterprise CSR boards, and national industry consortiums.
              </p>
              <span className="text-[10px] font-mono text-accent-dark uppercase font-semibold mt-1 block">
                National Capital Region
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-border-light">
            <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block mb-1">
              Statutory Accuracy:
            </span>
            <p className="text-xs text-charcoal-500 font-sans leading-relaxed">
              * In compliance with professional standards, specific office addresses and direct partner numbers are provisioned directly upon execution of advisory non-disclosure agreements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consulting Inquiries"
        title="Let's build something that matters."
        description="Tell us about the challenge, opportunity or program you are working on. Our partners will examine your requirements and structure a preliminary consultation framework."
        badge="Direct Advisory Dialogue"
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <Suspense fallback={<div className="p-12 text-center font-mono text-xs">Loading inquiry form...</div>}>
            <ContactFormInner />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
