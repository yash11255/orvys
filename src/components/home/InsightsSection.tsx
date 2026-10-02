import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { insightsData } from '@/data/insights';

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-surface-warm border-b border-border-default py-20 sm:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Thought Leadership & Research"
            title="Ideas for a changing India."
            subtitle="Policy analysis, field observations, and strategic frameworks on CSR, technical education, governance, and regional growth."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold text-navy-800 hover:text-accent-dark transition-colors border-b border-navy-800 pb-1"
            >
              <span>Browse All Editorial Briefs ({insightsData.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </div>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article, index) => (
            <article
              key={article.id}
              className="bg-surface border border-border-default hover:border-accent transition-all duration-200 flex flex-col justify-between p-8 group"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between border-b border-border-light pb-4 mb-4">
                  <Badge variant="accent">{article.category}</Badge>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-400">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-navy-900 leading-snug group-hover:text-accent-dark transition-colors font-normal mb-3">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Subtitle / Excerpt */}
                <p className="text-xs text-charcoal-600 leading-relaxed font-sans mb-6">
                  {article.subtitle}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-4 border-t border-border-light flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                    {article.author.role}
                  </span>
                  <span className="text-xs font-serif font-medium text-navy-800">
                    {article.author.name}
                  </span>
                </div>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider font-semibold text-navy-800 group-hover:text-accent-dark transition-colors"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
