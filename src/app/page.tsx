import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { AboutSplit } from '@/components/home/AboutSplit';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { RegionalIntelligence } from '@/components/home/RegionalIntelligence';
import { SelectedWork } from '@/components/home/SelectedWork';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { ImpactDashboard } from '@/components/home/ImpactDashboard';
import { WhyOrvys } from '@/components/home/WhyOrvys';
import { InsightsSection } from '@/components/home/InsightsSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSplit />
      <ServicesGrid />
      <RegionalIntelligence />
      <SelectedWork />
      <ProcessTimeline />
      <ImpactDashboard />
      <WhyOrvys />
      <InsightsSection />
      <CTASection />
    </>
  );
}
