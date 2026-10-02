import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MapPin, Target, Layers, Cpu, TrendingUp } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Regional Intelligence',
    subtitle: 'Deep understanding of Bihar and Purvanchal ecosystems.',
    description: 'We understand the socio-economic context, administrative protocols, and ground dynamics across district clusters, ensuring program design reflects operational reality.',
    icon: MapPin,
  },
  {
    number: '02',
    title: 'Strategy + Execution',
    subtitle: 'We work across both planning and implementation.',
    description: 'We do not stop at delivering advisory slide decks. We deploy on-ground Program Management Units and field coordinators to oversee implementation from start to completion.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Multi-Stakeholder Navigation',
    subtitle: 'Fluency across corporate, government, academic and civic ecosystems.',
    description: 'Experience bringing state secretariats, enterprise CSR boards, university vice-chancellors, and grassroots organizations into coordinated operational alignment.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Technology Enabled',
    subtitle: 'Data systems and digital workflows built for scale.',
    description: 'Utilizing telemetry portals, offline-first mobile data collection, and AI-enabled verification systems to provide transparent, verifiable program tracking.',
    icon: Cpu,
  },
  {
    number: '05',
    title: 'Built to Scale',
    subtitle: 'Designing repeatable institutional models rather than isolated interventions.',
    description: 'Our frameworks prioritize permanent institutional capacity—training faculty and establishing internal cells so outcomes endure independently after project handover.',
    icon: TrendingUp,
  },
];

export const WhyOrvys: React.FC = () => {
  return (
    <section className="bg-background border-b border-border-default py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Institutional Differentiation"
          title="Why organizations work with ORVYS"
          subtitle="Consulting discipline grounded in district-level execution capabilities across India's high-need regions."
        />

        {/* Five Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isWide = index === 0;

            return (
              <div
                key={pillar.number}
                className={`bg-surface border border-border-default p-8 hover:border-accent transition-all duration-200 flex flex-col justify-between ${
                  isWide ? 'md:col-span-2 bg-surface-warm' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border-light pb-4 mb-6">
                    <span className="font-mono text-sm font-bold text-accent">
                      {pillar.number}
                    </span>
                    <Icon className="w-4 h-4 text-navy-800" />
                  </div>

                  <h3 className="font-serif text-2xl text-navy-900 mb-1 font-normal">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-dark font-semibold mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border-light text-[11px] font-mono text-charcoal-400 uppercase tracking-wider">
                  ORVYS Execution Pillar {pillar.number}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
