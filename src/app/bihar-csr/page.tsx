import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  FileText, 
  TrendingUp, 
  Globe, 
  Layers,
  Search
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Bihar CSR Strategy & Execution Hub | CSR Box, Ansar Group & State PMU | ORVYS',
  description: 'Leading Bihar CSR advisory & ground implementation network. Structuring Section 135 CSR projects, CSR Box partnerships, Ansar Group initiatives, and Bihar Engineering University (BEU) campus CoEs across 38 districts.',
  keywords: [
    'Bihar CSR',
    'CSR Box Bihar',
    'Ansar Group CSR',
    'CSR Projects in Bihar',
    'Bihar CSR Strategy',
    'Section 135 CSR Patna',
    'BEU Bihar CSR Skilling',
    'Corporate Social Responsibility Bihar',
    'Bihar District PMU Operations',
    'Purvanchal CSR Advisory',
    'ORVYS Bihar CSR',
  ],
  openGraph: {
    title: 'Bihar CSR & Corporate Social Responsibility Ecosystem | ORVYS Consulting',
    description: 'Turnkey CSR strategy, ground delivery, and Section 135 compliance across all 38 districts of Bihar. Partnering with enterprise CSR foundations, CSR Box consortiums, and Ansar Group.',
    url: 'https://orvys.in/bihar-csr',
    siteName: 'ORVYS Consulting',
    type: 'website',
  },
};

const biharDistricts = [
  { name: 'Patna', type: 'State Capital & Executive Hub', focus: 'State Secretariat Liaison & BEU Gateway' },
  { name: 'Muzaffarpur', type: 'North Bihar Trade Cluster', focus: 'Technical Education & CSR Skilling' },
  { name: 'Bhagalpur', type: 'Silk City & Industrial Hub', focus: 'Textile CSR & Faculty Development' },
  { name: 'Gaya', type: 'South Bihar Knowledge Corridor', focus: 'Renewable Energy & Digital Labs' },
  { name: 'Darbhanga', type: 'Mithila Cultural & Tech Hub', focus: 'Higher Education & PMU Telemetry' },
  { name: 'Rohtas (Sasaram)', type: 'Industrial & Mining Zone', focus: 'Environmental ESG & Skill CoEs' },
  { name: 'Purnia', type: 'Seemanchal Regional Hub', focus: 'Rural Youth Livelihoods & CSR' },
  { name: 'Nalanda (Bihar Sharif)', type: 'Heritage & Academic Hub', focus: 'University Labs & Corporate CoEs' },
  { name: 'Begusarai', type: 'Industrial & Petrochemical Center', focus: 'Heavy Industry CSR & Safety PMU' },
  { name: 'Saran (Chhapra)', type: 'Purvanchal Gateway Hub', focus: 'District Field Operations & ToT' },
  { name: 'East Champaran (Motihari)', type: 'Border Trade & Agriculture', focus: 'Community Livelihood Projects' },
  { name: 'West Champaran (Bettiah)', type: 'Aspirational District', focus: 'Youth Skilling & Digital Telemetry' },
];

const csEcosystemFocus = [
  {
    title: 'Bihar Engineering University (BEU) Statewide CSR Gateway',
    description: 'Direct MoUs and operational access across 38+ Government Engineering Colleges in all Bihar districts, providing corporate foundations with instant campus infrastructure and verified undergraduate reach.',
    tag: 'Academic Infrastructure',
  },
  {
    title: 'CSR Box & Corporate Foundation Co-Delivery',
    description: 'Alignment with national CSR Box directories, enterprise foundations, and Schedule VII compliance frameworks to deploy scalable education, ESG, and technology labs in regional hubs.',
    tag: 'CSR Box Integration',
  },
  {
    title: 'Ansar Group & Industrial CSR Alliances',
    description: 'Facilitating strategic corporate social responsibility mandates with Ansar Group networks and major conglomerates to anchor multi-year social investments inside Bihar.',
    tag: 'Enterprise Alliance',
  },
  {
    title: 'Zero-Latency Field PMU & Digital Telemetry',
    description: 'Deploying GPS-tracked, offline-first mobile monitoring tools that eliminate reporting delays and verify daily beneficiary attendance across 36+ districts.',
    tag: 'PMU Telemetry',
  },
];

const biharCsrFaqs = [
  {
    question: 'How does ORVYS facilitate corporate CSR implementation in Bihar?',
    answer: 'ORVYS acts as the on-ground strategic facilitator and Program Management Unit (PMU). We bridge corporate CSR boards, CSR Box partners, and Ansar Group networks directly into Bihar state university campuses, district collectorates, and block community centers.',
  },
  {
    question: 'What is the Bihar Engineering University (BEU) institutional gateway?',
    answer: 'Through formal MoUs and administrative alignment with BEU Patna, ORVYS provides immediate turnkey access to set up CSR-funded Centers of Excellence (CoEs), AI laboratories, and credit-linked skilling programs across all 38 district engineering colleges.',
  },
  {
    question: 'How do you ensure Section 135 CSR compliance and SROI verification?',
    answer: 'Every Bihar CSR intervention delivered by ORVYS includes 100% geotagged digital telemetry, real-time student/beneficiary tracking, third-party impact audits, and statutory SROI reporting dossiers ready for board committees.',
  },
];

export default function BiharCsrPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Bihar CSR Strategy & Execution Hub | ORVYS Consulting',
    description: 'Leading Bihar CSR advisory and ground PMU execution network for corporate foundations, CSR Box partners, Ansar Group initiatives, and BEU university networks.',
    url: 'https://orvys.in/bihar-csr',
    publisher: {
      '@type': 'Organization',
      name: 'ORVYS Consulting',
      url: 'https://orvys.in',
      email: 'coms@orvys.in',
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: biharCsrFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Regional Impact Hub • Bihar & Purvanchal"
        title="Bihar CSR & Corporate Social Responsibility Gateway"
        description="Connecting enterprise CSR capital, CSR Box frameworks, Ansar Group initiatives, and university campuses into high-yield, measurable on-ground implementations across all 38 districts of Bihar."
        badge="Section 135 • BEU Gateway • District PMUs"
      />

      {/* Section 1: Foundational Bihar CSR Context */}
      <section className="bg-surface border-b border-border-default py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-accent-dark font-semibold block">
                Statewide Impact Footprint
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy-900 leading-tight font-normal">
                Why Bihar is India's most critical CSR & skilling frontier.
              </h2>
              <div className="w-16 h-[2px] bg-accent" />
              <p className="text-sm font-sans text-charcoal-700 leading-relaxed">
                With over 120 million residents and a youth demographic exceeding 60%, Bihar represents India's highest-potential regional ecosystem. However, traditional CSR disbursements often fail due to administrative friction and lack of permanent campus anchoring.
              </p>
              <p className="text-sm font-sans text-charcoal-700 leading-relaxed">
                ORVYS bridges this gap by offering corporate foundations, CSR Box partners, and Ansar Group networks direct operational access across Bihar's 38 district engineering institutions affiliated with Bihar Engineering University (BEU).
              </p>
            </div>

            <div className="lg:col-span-6 bg-surface-warm border border-border-default p-8 space-y-4">
              <h3 className="font-serif text-2xl text-navy-900 font-normal border-b border-border-light pb-3">
                Core Bihar CSR Pillars
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent font-bold mt-1">01.</span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 font-serif">Statewide BEU Engineering Access</h4>
                    <p className="text-xs text-charcoal-600 mt-0.5">Turnkey lab setups & AI skilling across 38 district Government Engineering Colleges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent font-bold mt-1">02.</span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 font-serif">CSR Box Directory & Compliance Alignment</h4>
                    <p className="text-xs text-charcoal-600 mt-0.5">Full integration with Schedule VII mandates and national CSR Box benchmarks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent font-bold mt-1">03.</span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 font-serif">Ansar Group & Enterprise Alliances</h4>
                    <p className="text-xs text-charcoal-600 mt-0.5">Structuring high-impact corporate partnerships for sustained regional growth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent font-bold mt-1">04.</span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900 font-serif">Geotagged Field PMU Telemetry</h4>
                    <p className="text-xs text-charcoal-600 mt-0.5">Zero reporting latency via offline-first mobile attendance and milestone tracking.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Section 2: Four Ecosystem Focus Areas */}
      <section className="bg-surface-warm border-b border-border-default py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Strategic Advisory & PMU Scope"
            title="Bihar CSR Implementation Framework"
            subtitle="Built to withstand regional operational friction and deliver verifiable social return on investment (SROI)."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {csEcosystemFocus.map((focus, index) => (
              <div
                key={index}
                className="bg-surface border border-border-default p-8 hover:border-accent transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <Badge variant="accent" className="mb-4">{focus.tag}</Badge>
                  <h3 className="font-serif text-2xl text-navy-900 font-normal mb-3">
                    {focus.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                    {focus.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-500">
                  <span>ORVYS PRACTICE UNIT</span>
                  <span className="text-accent-dark font-bold">VERIFIED DELIVERY</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Bihar District Footprint Grid */}
      <section className="bg-navy-900 text-white border-b border-navy-700 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold block mb-2">
              On-Ground Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Active Operations Across All 38 Bihar Districts
            </h2>
            <p className="text-sm text-charcoal-300 mt-2 font-sans">
              Our district coordination units navigate administrative collectorates, university deans, and block development centers in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {biharDistricts.map((dist, idx) => (
              <div key={idx} className="bg-navy-800 border border-navy-700 p-5 hover:border-accent transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-accent font-serif text-lg font-normal">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{dist.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-navy-900 text-accent px-2 py-0.5 border border-navy-700">
                    District Node
                  </span>
                </div>
                <p className="text-xs text-charcoal-300 font-mono mb-1">{dist.type}</p>
                <p className="text-xs text-charcoal-400 font-sans">{dist.focus}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Bihar CSR FAQ */}
      <section className="bg-surface border-b border-border-default py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Navigating CSR Investments in Bihar"
            subtitle="Common questions from corporate CSR boards, CSR Box directories, and foundation trustees."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {biharCsrFaqs.map((faq, index) => (
              <div key={index} className="bg-surface-warm border border-border-default p-6 sm:p-8">
                <h3 className="font-serif text-xl text-navy-900 font-normal mb-3 flex items-start gap-2">
                  <span className="font-mono text-accent font-bold text-base">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed font-sans pl-6 border-l-2 border-accent">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
