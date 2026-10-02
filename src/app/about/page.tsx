import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, MapPin, ShieldCheck, Award } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { advisoryPillars } from '@/data/team';
import { trustEcosystems } from '@/data/metrics';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About ORVYS Consulting | Institutional Charter & Leadership',
  description: 'Learn about ORVYS Consulting: our foundation, consulting philosophy, regional execution intelligence across Bihar & Purvanchal, and leadership architecture.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Institutional Profile"
        title="Consulting with context."
        description="ORVYS Consulting was established on a fundamental recognition: India's most critical social, economic and institutional challenges cannot be solved with generic templates formulated thousands of miles from the point of impact."
        badge="Strategy • Impact • Transformation"
      />

      {/* Section 1: Who We Are & What We Believe */}
      <section className="bg-surface border-b border-border-default py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold block">
                Foundational Thesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy-900 leading-tight font-normal">
                Bridging policy vision and district operational reality.
              </h2>
              <div className="w-16 h-[2px] bg-accent my-4" />
              <p className="text-sm font-sans text-charcoal-700 leading-relaxed">
                We work with Fortune 500 corporate foundations, state government departments, central nodal agencies, and apex universities to design programs that actually function within the administrative, social, and logistical environments of regional India.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-charcoal-700 text-base leading-relaxed">
              <div className="bg-surface-warm border border-border-default p-8">
                <h3 className="font-serif text-2xl text-navy-900 mb-4 font-normal">
                  What We Believe
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-accent font-bold mt-0.5">01.</span>
                    <span><strong>Strategy without execution is an indulgence.</strong> High-level policy and strategy documents are worthless unless accompanied by ground-level SOPs, field oversight, and daily telemetry.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-accent font-bold mt-0.5">02.</span>
                    <span><strong>Regional nuance dictates outcomes.</strong> What succeeds in Bengaluru or Gurugram will collapse in Muzaffarpur or Gorakhpur if local institutional hierarchies and community dynamics are ignored.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-accent font-bold mt-0.5">03.</span>
                    <span><strong>Capacity must be institutionalized.</strong> We design every engagement to leave behind permanent faculty expertise, internal PMU tools, and independent monitoring capacity.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface p-6 border-l-4 border-accent border border-border-default space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-dark font-bold block">
                  Core Institutional Foothold
                </span>
                <h4 className="font-serif text-xl text-navy-900 font-normal">
                  Statewide Gateway with Bihar Engineering University (BEU)
                </h4>
                <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                  ORVYS maintains an active institutional Memorandum of Understanding (MoU) and direct collaborative alignment with Bihar Engineering University (BEU). This provides our corporate, CSR, and government partners with immediate, authenticated operational access across all affiliated government and private engineering institutions throughout Bihar's 38 districts.
                </p>
              </div>

              <p className="text-sm text-charcoal-600 font-sans">
                Our team blends the analytical rigor of global management consulting with the relentless persistence of grassroots program directors.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Section 2: Three Advisory Pillars */}
      <section className="bg-surface-warm border-b border-border-default py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Our Approach"
            title="The ORVYS Operating Model"
            subtitle="Built to withstand the operational friction of distributed state-wide implementations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryPillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border-default p-8 hover:border-accent transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent-dark font-bold block mb-3">
                  {item.pillar}
                </span>
                <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Regions We Work In */}
      <section className="bg-navy-900 text-white border-b border-navy-700 py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold block">
                Geographical Footprint
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                Regions We Work In
              </h2>
              <p className="text-sm text-charcoal-400 leading-relaxed font-sans">
                While maintaining full capabilities for pan-India program governance and national policy advisory, our deepest operational moat is established across the Hindi heartland.
              </p>
              <div className="pt-4 space-y-3">
                <div className="bg-navy-800 border border-navy-700 p-4">
                  <div className="flex items-center gap-2 text-accent font-serif text-lg">
                    <MapPin className="w-4 h-4" />
                    <span>Bihar (38 Districts)</span>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">
                    State Secretariat, Patna institutional cluster, North & South Bihar engineering and technical networks.
                  </p>
                </div>
                <div className="bg-navy-800 border border-navy-700 p-4">
                  <div className="flex items-center gap-2 text-accent font-serif text-lg">
                    <MapPin className="w-4 h-4" />
                    <span>Purvanchal / Eastern UP (10+ Districts)</span>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Varanasi, Gorakhpur, Prayagraj, and industrial-academic corridors bridging into Bihar.
                  </p>
                </div>
                <div className="bg-navy-800 border border-navy-700 p-4">
                  <div className="flex items-center gap-2 text-accent font-serif text-lg">
                    <MapPin className="w-4 h-4" />
                    <span>Delhi NCR & Pan-India</span>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1">
                    Central ministry liaison, enterprise CSR headquarters, and multilateral donor coordination.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-navy-800 border border-navy-700 p-8 sm:p-10 space-y-6">
              <h3 className="font-serif text-2xl text-white font-normal border-b border-navy-700 pb-4">
                Institutional Ecosystem Coverage
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed font-sans">
                ORVYS maintains active relationships across the full spectrum of stakeholders necessary to execute state-level programs:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {trustEcosystems.map((eco, i) => (
                  <div key={i} className="border border-navy-700 bg-navy-900/60 p-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-1">
                      {eco.category}
                    </h4>
                    <p className="text-xs text-charcoal-400">
                      {eco.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>


      <CTASection />
    </>
  );
}
