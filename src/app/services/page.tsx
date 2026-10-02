import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  HeartHandshake, 
  Leaf, 
  Building2, 
  Workflow, 
  Cpu, 
  GraduationCap, 
  BarChart3,
  CheckCircle2,
  FileCheck,
  Users
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { servicesData } from '@/data/services';
import { CTASection } from '@/components/home/CTASection';

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  Leaf,
  Building2,
  Workflow,
  Cpu,
  GraduationCap,
  BarChart3,
};

export const metadata: Metadata = {
  title: 'Consulting Verticals & Capabilities | ORVYS Consulting',
  description: 'Explore the 7 core consulting verticals of ORVYS: CSR Impact, ESG & Sustainability, Government Advisory, PMU, Digital Transformation, Learning & Skilling, and M&E Insights.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities Architecture"
        title="Consulting verticals built for complex, high-impact environments."
        description="From structuring corporate sustainability agendas to embedding district-level Program Management Units, ORVYS offers specialized consulting capabilities across seven focused practice areas."
        badge="7 Practice Areas"
      />

      {/* Quick Navigation Anchor Bar */}
      <div className="bg-surface-warm border-b border-border-default sticky top-[65px] z-40 hidden md:block">
        <Container>
          <div className="flex items-center justify-between py-3 overflow-x-auto text-xs font-mono">
            <span className="text-charcoal-400 uppercase tracking-widest mr-4">
              PRACTICES:
            </span>
            <div className="flex items-center space-x-6">
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-charcoal-700 hover:text-accent-dark font-medium transition-colors whitespace-nowrap"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Detailed Practice Verticals */}
      <section className="bg-background py-16 sm:py-24">
        <Container>
          <div className="space-y-16">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.iconName] || Building2;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-surface border border-border-default scroll-mt-28 p-8 sm:p-12 hover:border-accent transition-all duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Number, Title & Overview */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-base font-bold text-accent">
                          PRACTICE {service.number}
                        </span>
                        <div className="p-2 bg-surface-warm border border-border-light text-navy-800">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h2 className="font-serif text-3xl sm:text-4xl text-navy-900 font-normal">
                        {service.name}
                      </h2>

                      <p className="text-xs font-mono uppercase tracking-wider text-accent-dark font-semibold">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-charcoal-700 leading-relaxed font-sans pt-2">
                        {service.fullDescription}
                      </p>

                      {/* Target Stakeholders */}
                      <div className="pt-4 border-t border-border-light">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-500 block mb-2">
                          Primary Stakeholders Served:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.targetStakeholders.map((stakeholder, i) => (
                            <Badge key={i} variant="default">
                              {stakeholder}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          href={`/contact?interest=${encodeURIComponent(service.name)}`}
                          className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white text-xs uppercase tracking-widest font-semibold px-4 py-2.5 transition-colors"
                        >
                          <span>Consult on {service.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Capabilities & Concrete Deliverables */}
                    <div className="lg:col-span-7 bg-surface-warm border border-border-light p-6 sm:p-8 space-y-8">
                      
                      {/* Capabilities */}
                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-navy-900 font-bold border-b border-border-default pb-2 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span>Core Consulting Capabilities</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                              <span className="w-1.5 h-1.5 bg-accent mt-1 flex-shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-navy-900 font-bold border-b border-border-default pb-2 mb-4 flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-accent" />
                          <span>Key Work Products & Deliverables</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.deliverables.map((deliv, i) => (
                            <div key={i} className="bg-surface p-3 border border-border-light text-xs font-mono text-navy-900">
                              {deliv}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
