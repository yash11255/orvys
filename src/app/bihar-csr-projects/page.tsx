import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  MapPin, 
  ArrowUpRight, 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  Award,
  Layers
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { caseStudiesData } from '@/data/caseStudies';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Bihar CSR Projects & Field Governance Directory | CSR Box & Ansar Group | ORVYS',
  description: 'Detailed directory of CSR projects in Bihar. Covering BEU university AI skilling labs, CSR Box partnerships, Ansar Group social initiatives, and district PMU operations across Patna, Muzaffarpur, Bhagalpur & 38 districts.',
  keywords: [
    'Bihar CSR Projects',
    'CSR Projects in Bihar',
    'CSR Box Projects Bihar',
    'Ansar Group CSR Projects',
    'BEU Bihar CSR Skilling',
    'Section 135 CSR Projects Patna',
    'ORVYS Bihar Case Studies',
    'CSR Field Governance Bihar',
    'Statewide CSR Implementation Bihar',
  ],
  openGraph: {
    title: 'Bihar CSR Projects Directory & Field Execution | ORVYS Consulting',
    description: 'Explore on-ground CSR project implementations across higher education, technical skilling, digital telemetry, and corporate partnerships in Bihar.',
    url: 'https://orvys.in/bihar-csr-projects',
    siteName: 'ORVYS Consulting',
    type: 'website',
  },
};

export default function BiharCsrProjectsPage() {
  const biharProjects = caseStudiesData.filter(
    (cs) => cs.region.toLowerCase().includes('bihar') || cs.category.includes('CSR')
  );

  return (
    <>
      <PageHeader
        eyebrow="District Project Registry • Bihar & Eastern Corridor"
        title="Bihar CSR Projects & Field Execution Directory"
        description="Comprehensive portfolio of active and deployable CSR projects across all 38 districts of Bihar. Partnering with enterprise foundations, CSR Box consortiums, Ansar Group, and Bihar Engineering University (BEU)."
        badge="Verified PMU Telemetry • Section 135 Compliance"
      />

      {/* Projects Directory Section */}
      <section className="bg-surface-warm border-b border-border-default py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Active Project Portfolio"
            title="Featured Bihar CSR Mandates & Frameworks"
            subtitle="Turning corporate social capital into permanent institutional assets across Bihar engineering colleges, polytechnics, and district centers."
          />

          <div className="space-y-8">
            {biharProjects.map((study, index) => (
              <div
                key={study.id}
                className="bg-surface border border-border-default p-8 hover:border-accent transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{study.primaryCategory}</Badge>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-500">
                        <MapPin className="w-3 h-3 text-accent" />
                        <span>{study.region}</span>
                      </div>
                      <span className="text-charcoal-400">•</span>
                      <span className="text-[11px] font-mono text-charcoal-500">{study.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-navy-900 font-normal">
                      <Link href={`/work/${study.slug}`} className="hover:text-accent-dark transition-colors">
                        {study.title}
                      </Link>
                    </h3>

                    <p className="text-xs font-mono uppercase text-accent-dark font-semibold">
                      Client / Ecosystem: {study.clientName ? `${study.clientName} (${study.clientType})` : study.clientType}
                    </p>

                    <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                      {study.overview}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-charcoal-600">
                      <div><strong className="text-navy-900">Institutional Gateway:</strong> {study.institutionalBridge}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-surface-warm border border-border-default p-6 space-y-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent-dark font-bold block">
                      Key Outcomes & Telemetry
                    </span>
                    <div className="space-y-3">
                      {study.outcomes.map((out, i) => (
                        <div key={i} className="border-b border-border-light pb-2 last:border-b-0">
                          <span className="font-serif text-xl font-normal text-navy-900 block">{out.metric}</span>
                          <span className="text-xs font-mono text-charcoal-600 font-semibold">{out.label}: </span>
                          <span className="text-xs text-charcoal-500">{out.detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${study.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-navy-800 text-white text-xs font-mono uppercase tracking-wider py-2.5 px-4 hover:bg-navy-900 transition-colors"
                      >
                        <span>View Project Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SEO Key Words Box Section */}
      <section className="bg-navy-900 text-white border-b border-navy-700 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block">
              Ecosystem Key Terms & Indexing Directory
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Statewide Coverage for Bihar CSR & Regional Development
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-charcoal-300">
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">Bihar CSR Strategy</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">CSR Box Bihar</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">Ansar Group CSR</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">Bihar Engineering University BEU</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">Section 135 Compliance Patna</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">Purvanchal CSR Advisory</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">District PMU Bihar</span>
              <span className="bg-navy-800 px-3 py-1.5 border border-navy-700">ORVYS Impact Governance</span>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
