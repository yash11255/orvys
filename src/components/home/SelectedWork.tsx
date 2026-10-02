import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { caseStudiesData } from '@/data/caseStudies';

export const SelectedWork: React.FC = () => {
  return (
    <section className="bg-surface-warm border-b border-border-default py-20 sm:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Case Studies & Impact"
            title="Featured Case Studies"
            subtitle="Turning complex policy mandates and CSR investments into measurable on-ground programs across Bihar and Eastern India."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-navy-800 hover:text-accent-dark transition-colors border-b border-navy-800 pb-1"
            >
              <span>Explore All Case Studies ({caseStudiesData.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </div>
        </div>

        {/* Case Studies Editorial Stack */}
        <div className="space-y-8">
          {caseStudiesData.slice(0, 4).map((study, index) => {
            const isAlternate = index % 2 === 1;

            return (
              <div
                key={study.id}
                className="bg-surface border border-border-default hover:border-accent transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-charcoal-800 ${
                      isAlternate ? 'lg:order-last' : ''
                    }`}
                  >
                    {study.featuredImage && (
                      <Image
                        src={study.featuredImage}
                        alt={study.title}
                        fill
                        className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-navy-900/20" />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-xs font-bold bg-navy-900 text-white px-3 py-1 border border-navy-700">
                        CASE STUDY {study.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge variant="accent">{study.primaryCategory}</Badge>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-500">
                          <MapPin className="w-3 h-3 text-accent" />
                          <span>{study.region}</span>
                        </div>
                        <span className="text-charcoal-400">•</span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-500">
                          <Calendar className="w-3 h-3 text-charcoal-400" />
                          <span>{study.year}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl text-navy-900 leading-tight font-normal mb-3">
                        <Link
                          href={`/work/${study.slug}`}
                          className="hover:text-accent-dark transition-colors"
                        >
                          {study.title}
                        </Link>
                      </h3>

                      <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500 mb-4">
                        Client / Ecosystem: {study.clientType}
                      </p>

                      <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-4">
                        {study.overview}
                      </p>

                      {/* ORVYS Point of View & Facilitation Callout */}
                      <div className="bg-surface-warm border-l-2 border-accent p-3.5 mb-6 text-xs">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-accent-dark font-bold mb-1">
                          ORVYS Perspective & Facilitation Role:
                        </div>
                        <p className="text-charcoal-800 font-serif italic leading-snug">
                          "{study.orvysPOV}"
                        </p>
                      </div>

                      {/* Metrics Showcase */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-border-light mb-6">
                        {study.outcomes.slice(0, 3).map((out, i) => (
                          <div key={i} className="bg-surface-warm p-2.5 border border-border-light">
                            <span className="block font-serif text-xl font-normal text-navy-900">
                              {out.metric}
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 block leading-tight">
                              {out.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="pt-2 flex items-center justify-between border-t border-border-light">
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-navy-800 hover:text-accent-dark transition-colors"
                      >
                        <span>Read Case Study Breakdown</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                      </Link>
                      <span className="text-[10px] font-mono text-charcoal-400">
                        {study.category.join(' / ')}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
