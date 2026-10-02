'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { impactMetrics } from '@/data/metrics';
import { FileText, AlertCircle } from 'lucide-react';

export const ImpactDashboard: React.FC = () => {
  return (
    <section className="bg-navy-900 text-white py-20 sm:py-28 border-b border-navy-700">
      <Container>
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[1.5px] bg-accent inline-block" />
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Telemetry & Evidence
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-editorial font-normal text-white">
            Impact, measured.
          </h2>
          <p className="mt-4 text-base text-charcoal-400 font-sans leading-relaxed">
            Rigorous data tracking designed after institutional consulting annual reports, reflecting multi-stakeholder reach across Eastern India and beyond.
          </p>
        </div>

        {/* Big Numerical Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {impactMetrics.map((item, index) => (
            <div
              key={index}
              className="bg-navy-800 border border-navy-700 p-6 flex flex-col justify-between hover:border-accent transition-colors duration-200"
            >
              <div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-4">
                  METRIC 0{index + 1}
                </span>
                <div className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight">
                  {item.value}
                </div>
                <h3 className="text-sm font-sans font-medium text-charcoal-200 mt-3 mb-2">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-charcoal-400 font-sans leading-relaxed pt-3 border-t border-navy-700/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mandatory Transparency Note */}
        <div className="mt-10 bg-navy-800/80 border border-navy-700 p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl">
          <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
          <p className="text-xs font-mono text-charcoal-300 leading-relaxed">
            <strong className="text-accent uppercase">Institutional Note:</strong> Engineering institution coverage (38/38 district colleges) grounded in formal collaborative alignment with Bihar Engineering University (BEU), Patna.
          </p>
        </div>
      </Container>
    </section>
  );
};
