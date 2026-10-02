import React from 'react';
import { Container } from '@/components/ui/Container';
import { ExternalLink, Globe } from 'lucide-react';

const ecosystemEntities = [
  { label: 'Corporate Foundations', category: 'CSR & ESG Leadership' },
  { label: 'BITO World', category: 'Global Trade & Investment', url: 'https://bitoworld.in/' },
  { label: 'Government Departments', category: 'State & Central Secretariats' },
  { label: 'Technical Universities', category: 'Engineering & Polytechnics' },
  { label: 'Development Agencies', category: 'Multilateral & Social Sector' },
  { label: 'Technology Providers', category: 'Cloud & AI Infrastructure' },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-surface border-b border-border-default py-10 sm:py-12">
      <Container>
        <div className="text-center mb-8">
          <span className="text-[11px] uppercase font-mono tracking-widest text-charcoal-500 font-semibold block">
            Working across the ecosystem of impact
          </span>
          <p className="text-xs text-charcoal-400 mt-1 font-sans">
            Institutional credibility through structured multi-stakeholder governance & strategic partnerships
          </p>
        </div>

        {/* Text-Based Credibility Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {ecosystemEntities.map((entity, index) => {
            if (entity.url) {
              return (
                <a
                  key={index}
                  href={entity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent/10 border border-accent/40 p-3.5 sm:p-4 text-center hover:bg-accent/20 transition-all duration-200 group relative block"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs font-serif font-medium text-navy-900 group-hover:text-accent-dark transition-colors">
                      {entity.label}
                    </span>
                    <ExternalLink className="w-3 h-3 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] font-mono text-accent-dark font-semibold mt-1 block">
                    {entity.category}
                  </span>
                </a>
              );
            }

            return (
              <div
                key={index}
                className="bg-surface-warm border border-border-light p-3.5 sm:p-4 text-center hover:border-accent transition-colors duration-200"
              >
                <span className="text-xs font-serif font-medium text-navy-900 block">
                  {entity.label}
                </span>
                <span className="text-[10px] font-mono text-charcoal-500 mt-1 block">
                  {entity.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Summary Line */}
        <div className="mt-6 pt-4 border-t border-border-light text-center flex items-center justify-center gap-3">
          <p className="text-xs font-mono text-charcoal-500 uppercase tracking-wider">
            Corporate <span className="text-accent">•</span> Government <span className="text-accent">•</span> Academic <span className="text-accent">•</span> Global Trade (BITO) <span className="text-accent">•</span> Technology
          </p>
        </div>
      </Container>
    </section>
  );
};
