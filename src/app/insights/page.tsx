'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, BookOpen, Filter, Search } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { insightsData } from '@/data/insights';
import { CTASection } from '@/components/home/CTASection';

const categories = [
  'All',
  'Education & Skilling',
  'CSR & Social Impact',
  'Government Advisory',
  'Regional Intelligence',
  'Technology & AI',
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInsights = insightsData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="Editorial & Research"
        title="Ideas for a changing India."
        description="Rigorous policy perspectives, ground observations, and strategic frameworks on workforce development, corporate social responsibility, and regional economic transformation."
        badge={`${insightsData.length} Policy Briefs & Analyses`}
      />

      {/* Filter and Search Bar */}
      <section className="bg-surface-warm border-b border-border-default py-6 sticky top-[65px] z-30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Tabs */}
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

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                placeholder="Search policy papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border-default pl-8 pr-3 py-1.5 text-xs font-sans text-charcoal-800 focus:outline-none focus:border-accent"
              />
              <Search className="w-3.5 h-3.5 text-charcoal-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </Container>
      </section>

      {/* Insights Article List */}
      <section className="bg-background py-16 sm:py-24">
        <Container>
          {filteredInsights.length === 0 ? (
            <div className="bg-surface border border-border-default p-12 text-center max-w-xl mx-auto">
              <p className="font-serif text-xl text-navy-900">
                No policy briefs matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-mono uppercase tracking-wider text-accent-dark font-bold underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredInsights.map((article, index) => {
                const isFirst = index === 0 && selectedCategory === 'All' && searchQuery === '';

                return (
                  <article
                    key={article.id}
                    className={`bg-surface border border-border-default p-8 hover:border-accent transition-all duration-200 flex flex-col justify-between group ${
                      isFirst ? 'md:col-span-2 bg-surface-warm' : ''
                    }`}
                  >
                    <div>
                      {/* Meta */}
                      <div className="flex items-center justify-between border-b border-border-light pb-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="accent">{article.category}</Badge>
                          <span className="text-[11px] font-mono text-charcoal-400">
                            {article.publishedDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-400">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2
                        className={`font-serif text-navy-900 leading-snug group-hover:text-accent-dark transition-colors font-normal mb-3 ${
                          isFirst ? 'text-3xl sm:text-4xl' : 'text-2xl'
                        }`}
                      >
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      {/* Subtitle */}
                      <p className="text-xs font-mono uppercase tracking-wider text-charcoal-500 mb-4">
                        {article.subtitle}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                        {article.executiveSummary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {article.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-surface border border-border-light text-charcoal-500 px-2 py-0.5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-border-light flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block">
                          {article.author.role}
                        </span>
                        <span className="text-xs font-serif font-medium text-navy-900">
                          {article.author.name}
                        </span>
                      </div>
                      <Link
                        href={`/insights/${article.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-navy-800 group-hover:text-accent-dark transition-colors"
                      >
                        <span>Read Policy Brief</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
