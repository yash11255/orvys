'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Calendar, Filter } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { caseStudiesData } from '@/data/caseStudies';
import { CTASection } from '@/components/home/CTASection';

const categories = [
  'All',
  'Education',
  'Skilling',
  'Technology',
  'Government Advisory',
  'CSR',
  'Program Management',
  'Institutional Capacity',
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStudies = selectedCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((s) =>
        s.category.some((c) => c.toLowerCase() === selectedCategory.toLowerCase()) ||
        s.primaryCategory.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <>
      <PageHeader
        eyebrow="Case Studies & Program Records"
        title="Turning complex objectives into programs that work on the ground."
        description="Explore our portfolio of institutional implementations across higher education modernizations, CSR field redesigns, and government advisory units."
        badge={`${caseStudiesData.length} Selected Deployments`}
      />

      {/* Filter Tabs */}
      <section className="bg-surface-warm border-b border-border-default py-6 sticky top-[65px] z-30">
        <Container>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-charcoal-500 uppercase">
              <Filter className="w-3.5 h-3.5 text-accent" />
              <span>Filter by Practice:</span>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 transition-all border ${
                    selectedCategory === cat
                      ? 'bg-navy-800 text-white border-navy-800 font-semibold'
                      : 'bg-surface text-charcoal-600 border-border-default hover:border-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-background py-16 sm:py-24">
        <Container>
          {filteredStudies.length === 0 ? (
            <div className="bg-surface border border-border-default p-12 text-center max-w-xl mx-auto">
              <p className="font-serif text-xl text-navy-900">
                No case studies currently matched this filter.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-xs font-mono uppercase tracking-wider text-accent-dark font-bold underline"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredStudies.map((study) => (
                <article
                  key={study.id}
                  className="bg-surface border border-border-default hover:border-accent transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Visual */}
                    <div className="lg:col-span-4 relative min-h-[260px] bg-charcoal-800">
                      {study.featuredImage && (
                        <Image
                          src={study.featuredImage}
                          alt={study.title}
                          fill
                          className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                          sizes="(max-width: 1024px) 100vw, 35vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-navy-900/20" />
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-xs font-bold bg-navy-900 text-white px-3 py-1 border border-navy-700">
                          RECORD #{study.number}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
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

                        <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 leading-tight font-normal mb-2">
                          <Link
                            href={`/work/${study.slug}`}
                            className="hover:text-accent-dark transition-colors"
                          >
                            {study.title}
                          </Link>
                        </h2>

                        <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500 mb-3">
                          Stakeholders: {study.clientType}
                        </p>

                        <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-4">
                          {study.overview}
                        </p>

                        {/* ORVYS Perspective */}
                        <div className="bg-surface-warm border-l-2 border-accent p-3 mb-5 text-xs">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-accent-dark font-bold block mb-1">
                            ORVYS Point of View & Facilitation:
                          </span>
                          <p className="text-charcoal-800 font-serif italic">
                            "{study.orvysPOV}"
                          </p>
                        </div>

                        {/* Outcomes Snapshot */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-border-light mb-6">
                          {study.outcomes.map((out, i) => (
                            <div key={i} className="bg-surface-warm p-2.5 border border-border-light">
                              <span className="block font-serif text-lg font-normal text-navy-900">
                                {out.metric}
                              </span>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 block leading-tight">
                                {out.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-border-light">
                        <Link
                          href={`/work/${study.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-navy-800 hover:text-accent-dark transition-colors"
                        >
                          <span>Full Case Study & Implementation Framework</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                        </Link>
                        <span className="text-[10px] font-mono text-charcoal-400 hidden sm:inline-block">
                          {study.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
