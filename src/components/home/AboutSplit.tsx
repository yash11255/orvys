import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const principles = [
  {
    number: '01',
    title: 'Understand',
    summary: 'Understand the context, stakeholders and systems before designing interventions.',
    detail: 'We conduct rigorous ground-level baseline studies, administrative mapping, and stakeholder interviews to uncover latent structural dynamics.',
  },
  {
    number: '02',
    title: 'Build',
    summary: 'Design practical programs, partnerships and implementation models.',
    detail: 'We translate strategic policy mandates into operational toolkits, standard operating procedures (SOPs), and multi-agency governance protocols.',
  },
  {
    number: '03',
    title: 'Scale',
    summary: 'Build systems capable of delivering measurable outcomes across geographies.',
    detail: 'We engineer institutional continuity, digital MIS telemetry, and train-the-trainer capacity so interventions thrive beyond initial funding cycles.',
  },
];

export const AboutSplit: React.FC = () => {
  return (
    <section className="bg-surface-warm border-b border-border-default py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Foundation & Approach"
          title="We operate where strategy meets implementation."
          subtitle="ORVYS Consulting helps organizations navigate complex social, economic and institutional challenges — from strategy and program design to implementation, monitoring and impact measurement."
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6 pb-16 border-b border-border-default">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold block mb-2">
              The ORVYS Premise
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-navy-900 leading-tight font-normal">
              From boardrooms to the field.
            </h3>
            <div className="w-16 h-[2px] bg-accent mt-6 mb-6" />
            <p className="text-xs font-mono uppercase tracking-widest text-charcoal-500">
              Connecting High-Level Intent With District Reality
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-charcoal-700 leading-relaxed text-base sm:text-lg">
            <p>
              Most strategic initiatives encounter their sharpest friction when transitioning from conceptual whitepapers into physical implementation. In emerging regional ecosystems, standardized playbooks frequently disintegrate due to unexamined institutional hierarchies, infrastructural gaps, and misaligned incentives.
            </p>
            <p className="font-serif italic text-navy-800 text-lg border-l-2 border-accent pl-4">
              "Our approach combines consulting discipline with ground-level execution. We do not stop at delivering strategy documents; we embed ourselves within the operating environment to ensure outcomes are realized."
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-navy-800 hover:text-accent-dark transition-colors"
              >
                <span>Read Full Organizational Charter</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </Link>
            </div>
          </div>
        </div>

        {/* Three Core Principles */}
        <div className="pt-16">
          <div className="mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-charcoal-500 font-semibold">
              Three Execution Principles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((item) => (
              <div
                key={item.number}
                className="bg-surface border border-border-default p-8 hover:border-accent transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-border-light pb-4 mb-6">
                    <span className="font-mono text-2xl font-bold text-accent">
                      {item.number}
                    </span>
                    <span className="text-xs uppercase font-mono tracking-wider text-charcoal-400">
                      Phase
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl text-navy-900 mb-3 font-normal">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-charcoal-800 leading-snug mb-3">
                    {item.summary}
                  </p>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
