'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useContactModal } from '@/context/ContactModalContext';

export const CTASection: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section className="bg-navy-900 text-white py-20 sm:py-24 border-b border-navy-700 relative overflow-hidden">
      <Container>
        <div className="bg-navy-800 border border-navy-700 p-8 sm:p-14 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-accent" />
                <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
                  Initiate Engagement
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                From strategy to ground. Let's design programs that endure.
              </h2>

              <p className="text-sm sm:text-base text-charcoal-300 font-sans leading-relaxed max-w-2xl">
                Whether you are formulating a state-wide skilling intervention, restructuring corporate CSR for measurable SROI, or embedding a PMU for district execution, ORVYS brings the consulting rigor and ground intelligence you need.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-navy-700">
                <div className="flex items-center gap-2 text-xs text-charcoal-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Statewide Implementation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Institutional Governance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Independent Evidence</span>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <button
                onClick={() => openModal()}
                className="w-full flex items-center justify-center gap-2.5 bg-accent hover:bg-[#D4A84E] text-navy-900 text-xs uppercase tracking-widest font-bold py-4 px-6 transition-all shadow-sm text-center hover:scale-[1.02]"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/services"
                className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-navy-900 text-white text-xs uppercase tracking-widest font-semibold py-3.5 px-6 border border-navy-700 hover:border-navy-600 transition-colors text-center"
              >
                <span>Explore All Capabilities</span>
              </Link>
              <p className="text-[11px] font-mono text-center text-charcoal-400 mt-1">
                Consulting inquiries sent to <strong className="text-accent">coms@orvys.in</strong>
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
