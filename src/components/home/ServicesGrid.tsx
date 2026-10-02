import React from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  HeartHandshake, 
  Leaf, 
  Building2, 
  Workflow, 
  Cpu, 
  GraduationCap, 
  BarChart3 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { servicesData } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  Leaf,
  Building2,
  Workflow,
  Cpu,
  GraduationCap,
  BarChart3,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-background border-b border-border-default py-20 sm:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Consulting Verticals"
            title="What we do"
            subtitle="Capabilities built for complex, high-impact environments across policy, capital, and regional execution."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-navy-800 hover:text-accent-dark transition-colors border-b border-navy-800 pb-1"
            >
              <span>View All Practice Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </div>
        </div>

        {/* Rectangular Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Building2;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                id={`vertical-${service.id}`}
                className={`group bg-surface border border-border-default p-8 hover:border-accent transition-all duration-200 flex flex-col justify-between relative ${
                  isFeatured ? 'lg:col-span-2 bg-gradient-to-br from-surface to-surface-warm' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between border-b border-border-light pb-4 mb-6">
                    <span className="font-mono text-sm font-bold text-accent">
                      {service.number}
                    </span>
                    <div className="p-2 bg-surface-warm border border-border-light text-navy-800 group-hover:border-accent group-hover:text-accent-dark transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Vertical Name & Tagline */}
                  <h3 className="font-serif text-2xl text-navy-900 group-hover:text-navy-700 transition-colors font-normal">
                    {service.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-accent-dark font-semibold mt-1 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                    {isFeatured ? service.fullDescription : service.shortDescription}
                  </p>

                  {/* Capabilities List for Featured */}
                  {isFeatured && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-border-light mb-6">
                      {service.capabilities.slice(0, 4).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-charcoal-600">
                          <span className="w-1.5 h-1.5 bg-accent rounded-none" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-border-light flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-navy-800 group-hover:text-accent-dark transition-colors"
                  >
                    <span>Practice Scope & Deliverables</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-charcoal-400 uppercase">
                    Practice {service.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
