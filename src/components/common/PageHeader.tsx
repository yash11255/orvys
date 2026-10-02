import React from 'react';
import { Container } from '@/components/ui/Container';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  badge,
}) => {
  return (
    <section className="bg-surface-warm border-b border-border-default pt-16 pb-20 sm:pt-20 sm:pb-24">
      <Container>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-[2px] bg-accent inline-block" />
            <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold">
              {eyebrow}
            </span>
            {badge && (
              <span className="bg-[#EFECE4] text-charcoal-700 text-[10px] font-mono uppercase px-2 py-0.5 border border-border-default">
                {badge}
              </span>
            )}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-editorial font-normal tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-charcoal-700 leading-relaxed font-sans max-w-3xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
};
