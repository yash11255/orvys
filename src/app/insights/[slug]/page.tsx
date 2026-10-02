import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Share2, BookOpen, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { insightsData } from '@/data/insights';
import { CTASection } from '@/components/home/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((ins) => ({
    slug: ins.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) return { title: 'Insight Not Found | ORVYS Consulting' };

  return {
    title: `${article.title} | ORVYS Editorial Insights`,
    description: article.executiveSummary,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightsData
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <>
      {/* Editorial Header */}
      <section className="bg-surface-warm border-b border-border-default pt-12 pb-16 sm:pt-16 sm:pb-20">
        <Container size="narrow">
          <div className="mb-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal-600 hover:text-navy-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Editorial Insights</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="accent">{article.category}</Badge>
              <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-500">
                <Calendar className="w-3 h-3 text-charcoal-400" />
                <span>{article.publishedDate}</span>
              </div>
              <span className="text-charcoal-400">•</span>
              <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-500">
                <Clock className="w-3 h-3 text-charcoal-400" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-navy-900 leading-editorial font-normal">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
              {article.subtitle}
            </p>

            {/* Author Block */}
            <div className="pt-6 border-t border-border-light flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                  Authored By:
                </span>
                <span className="text-sm font-serif font-medium text-navy-900">
                  {article.author.name} • <span className="font-sans text-xs text-charcoal-600 font-normal">{article.author.role}</span>
                </span>
              </div>
              <span className="text-[11px] font-mono text-accent-dark font-semibold">
                ORVYS POLICY DOSSIER
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Article Content */}
      <section className="bg-background py-16 sm:py-24 border-b border-border-default">
        <Container size="narrow">
          <div className="space-y-12">
            
            {/* Executive Summary Box */}
            <div className="bg-surface border-l-4 border-accent p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold block mb-2">
                Executive Summary
              </span>
              <p className="font-serif text-lg text-navy-900 leading-relaxed italic">
                "{article.executiveSummary}"
              </p>
            </div>

            {/* Key Takeaways Card */}
            <div className="bg-surface-warm border border-border-default p-6 sm:p-8 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-navy-900 font-bold border-b border-border-default pb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Key Strategic Takeaways</span>
              </h3>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-800 font-sans">
                    <span className="font-mono text-accent font-bold text-xs mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-10 text-charcoal-800 text-base leading-relaxed font-sans">
              {article.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal pt-4">
                    {section.heading}
                  </h2>

                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {section.quote && (
                    <blockquote className="my-6 border-l-2 border-accent pl-5 py-2 font-serif italic text-lg sm:text-xl text-navy-900 bg-surface p-4">
                      "{section.quote}"
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Tags & Taxonomy */}
            <div className="pt-8 border-t border-border-default">
              <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-400 block mb-3">
                Article Taxonomy & Subject Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-surface border border-border-default text-charcoal-600 px-3 py-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Research */}
            <div className="pt-12 border-t border-border-default space-y-6">
              <h3 className="font-serif text-2xl text-navy-900 font-normal">
                Related Editorial Briefs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="bg-surface border border-border-default p-6 hover:border-accent transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-accent-dark uppercase block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-lg text-navy-900 font-medium mb-2">
                        <Link href={`/insights/${rel.slug}`} className="hover:text-accent-dark">
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-charcoal-600 line-clamp-2">
                        {rel.subtitle}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-border-light">
                      <Link
                        href={`/insights/${rel.slug}`}
                        className="text-xs font-mono uppercase tracking-wider text-navy-800 font-bold inline-flex items-center gap-1 hover:text-accent-dark"
                      >
                        <span>Read Paper</span>
                        <ArrowUpRight className="w-3 h-3 text-accent" />
                      </Link>
                    </div>
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
