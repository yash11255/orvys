import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { caseStudiesData } from '@/data/caseStudies';
import { CTASection } from '@/components/home/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);
  if (!study) return { title: 'Case Study Not Found | ORVYS Consulting' };

  return {
    title: `${study.title} | ORVYS Case Study`,
    description: study.overview,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudiesData.findIndex((s) => s.slug === slug);
  const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];

  return (
    <>
      {/* Editorial Header */}
      <section className="bg-surface-warm border-b border-border-default pt-12 pb-16 sm:pt-16 sm:pb-20">
        <Container>
          <div className="mb-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal-600 hover:text-navy-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Selected Work</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
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

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy-900 leading-editorial font-normal">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
              {study.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Case Study Body */}
      <section className="bg-background py-16 sm:py-24 border-b border-border-default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Main Article Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Image */}
              {study.featuredImage && (
                <div className="relative h-[340px] sm:h-[420px] w-full border border-border-default bg-charcoal-800">
                  <Image
                    src={study.featuredImage}
                    alt={study.title}
                    fill
                    priority
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute bottom-3 right-3 bg-navy-900/90 text-white text-[10px] font-mono px-2 py-1">
                    FIELD DOCUMENTATION / {study.region}
                  </div>
                </div>
              )}

              {/* ORVYS Strategic Point of View & Institutional Facilitation Box */}
              <div className="bg-surface-warm border border-border-default p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-border-light pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold">
                    ORVYS Strategic Perspective & Facilitation Role
                  </span>
                  <span className="text-[10px] font-mono bg-accent/20 text-navy-900 px-2 py-0.5 font-bold uppercase">
                    Institutional Blueprint
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="bg-surface p-4 border border-border-light">
                    <span className="font-mono text-accent-dark uppercase font-bold text-[10px] block mb-1">
                      Ecosystem Benchmark:
                    </span>
                    <p className="text-charcoal-700 leading-relaxed">
                      {study.ecosystemBenchmark}
                    </p>
                  </div>

                  <div className="bg-surface p-4 border border-border-light">
                    <span className="font-mono text-accent-dark uppercase font-bold text-[10px] block mb-1">
                      ORVYS Facilitation Gateway:
                    </span>
                    <p className="text-charcoal-700 leading-relaxed">
                      {study.institutionalBridge}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <blockquote className="border-l-2 border-accent pl-4 font-serif italic text-base text-navy-900 leading-relaxed">
                    "{study.orvysPOV}"
                  </blockquote>
                </div>
              </div>

              {/* 1. Context & Challenge */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[1.5px] bg-accent inline-block" />
                  <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold">
                    01. Strategic Context & Challenge
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                  The Institutional Challenge
                </h2>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                  {study.challenge}
                </p>
              </div>

              {/* 2. Consulting & Strategic Approach */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[1.5px] bg-accent inline-block" />
                  <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold">
                    02. Intervention Design & Approach
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                  The Strategic Framework
                </h2>
                <div className="space-y-3">
                  {study.approach.map((item, idx) => (
                    <div key={idx} className="bg-surface border border-border-default p-4 flex items-start gap-3">
                      <span className="font-mono text-accent font-bold text-xs mt-0.5">
                        0{idx + 1}.
                      </span>
                      <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Implementation Phases */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[1.5px] bg-accent inline-block" />
                  <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold">
                    03. Phased Execution Architecture
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                  Ground Execution Roadmap
                </h2>
                <div className="space-y-4">
                  {study.implementation.map((phase, idx) => (
                    <div key={idx} className="bg-surface-warm border border-border-default p-5">
                      <div className="flex items-baseline justify-between border-b border-border-light pb-2 mb-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-navy-900 font-bold">
                          {phase.phase}
                        </span>
                        <span className="text-[10px] font-mono text-accent-dark uppercase">
                          Phase 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal-700 font-sans leading-relaxed mb-3">
                        {phase.description}
                      </p>
                      <div className="bg-surface p-2.5 border border-border-light text-[11px] font-mono text-charcoal-600">
                        <strong className="text-navy-900">Key Milestone:</strong> {phase.milestone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Outcomes & Deliverables */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[1.5px] bg-accent inline-block" />
                  <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold">
                    04. Measurable Outcomes & Evidence
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                  Program Outcomes & Metrics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.outcomes.map((out, idx) => (
                    <div key={idx} className="bg-surface border border-border-default p-5">
                      <span className="font-serif text-3xl font-normal text-navy-900 block mb-1">
                        {out.metric}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-accent-dark font-semibold block mb-2">
                        {out.label}
                      </span>
                      <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                        {out.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Metadata Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              <div className="bg-surface border border-border-default p-6 sm:p-8 space-y-5">
                <h3 className="text-xs font-mono uppercase tracking-widest text-navy-900 font-bold border-b border-border-default pb-3">
                  Case Study Dossier
                </h3>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                    Institutional Ecosystem
                  </span>
                  <span className="text-xs font-mono font-medium text-navy-900 block mt-0.5">
                    {study.clientType}
                  </span>
                </div>

                {study.clientUrl && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                      Client Portal / Partner Site
                    </span>
                    <a
                      href={study.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-accent-dark hover:underline mt-1"
                    >
                      <span>{study.clientName || study.clientUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                    Geographic Region
                  </span>
                  <span className="text-xs font-mono font-medium text-navy-900 block mt-0.5">
                    {study.region}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                    Execution Timeline
                  </span>
                  <span className="text-xs font-mono font-medium text-navy-900 block mt-0.5">
                    {study.year}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block mb-1">
                    Core Verticals
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {study.category.map((cat, i) => (
                      <Badge key={i} variant="outline">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-light space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                    Key Implementation Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-charcoal-700">
                    {study.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border-light">
                  <Link
                    href={`/contact?interest=${encodeURIComponent(`Case Study: ${study.title}`)}`}
                    className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-900 text-white text-xs uppercase tracking-widest font-semibold py-3 border border-navy-800 transition-colors"
                  >
                    <span>Request Technical Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                  </Link>
                </div>
              </div>

              {/* Next Case Study Navigation */}
              <div className="bg-surface-warm border border-border-default p-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 block mb-2">
                  Next Case Study
                </span>
                <Link
                  href={`/work/${nextStudy.slug}`}
                  className="group block"
                >
                  <h4 className="font-serif text-lg text-navy-900 group-hover:text-accent-dark transition-colors leading-snug">
                    {nextStudy.title}
                  </h4>
                  <span className="text-xs font-mono text-accent-dark mt-2 inline-flex items-center gap-1">
                    <span>View Record #{nextStudy.number}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>

            </div>

          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
