import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const processSteps = [
  {
    step: '01',
    name: 'Diagnose',
    tagline: 'Understand the challenge.',
    description: 'Deep baseline auditing, stakeholder interviews, policy context analysis, and district-level operational diagnostic.',
    deliverable: 'Diagnostic Synthesis & System Map'
  },
  {
    step: '02',
    name: 'Design',
    tagline: 'Build strategy and operating model.',
    description: 'Formulating modular program architecture, partnership agreements, resource allocation matrices, and risk registers.',
    deliverable: 'Program Blueprint & SOPs'
  },
  {
    step: '03',
    name: 'Align',
    tagline: 'Bring stakeholders together.',
    description: 'Facilitating cross-departmental consensus across corporate leadership, government nodal agencies, and academia.',
    deliverable: 'Tripartite MoUs & Governance Charter'
  },
  {
    step: '04',
    name: 'Implement',
    tagline: 'Execute through structured PMU.',
    description: 'Deploying on-ground program teams, digital MIS telemetry, master trainer bootcamps, and daily milestone tracking.',
    deliverable: 'Field Operations & Real-Time MIS'
  },
  {
    step: '05',
    name: 'Measure',
    tagline: 'Track outcomes and evidence.',
    description: 'Independent evaluation, social return on investment (SROI), statistical verification, and executive dashboard reviews.',
    deliverable: 'Impact Assessment Dossier'
  },
  {
    step: '06',
    name: 'Scale',
    tagline: 'Expand models sustainably.',
    description: 'Institutional handover, institutionalized curriculum embedding, and state-wide or multi-region replication playbooks.',
    deliverable: 'Scale Playbook & Institutionalization'
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="bg-surface border-b border-border-default py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Methodology & Governance"
          title="From intent to impact."
          subtitle="A disciplined six-stage engagement framework ensuring strategic objectives survive ground-level operational friction."
        />

        {/* 6-Step Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className="bg-surface-warm border border-border-default p-6 sm:p-8 hover:border-accent transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-light pb-4 mb-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-charcoal-400">
                    STAGE {item.step}
                  </span>
                  <span className="font-mono text-2xl font-bold text-accent">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-navy-900 mb-1 font-normal group-hover:text-accent-dark transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-charcoal-600 font-semibold mb-3">
                  {item.tagline}
                </p>
                <p className="text-xs text-charcoal-600 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border-light">
                <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-500 block">
                  Key Output:
                </span>
                <span className="text-xs font-mono font-medium text-navy-800 block mt-0.5">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
