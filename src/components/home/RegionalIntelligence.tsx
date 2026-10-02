'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Building, GraduationCap, Users, ShieldCheck, ChevronRight, Camera } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { biharDistricts, purvanchalDistricts, regionalCapabilities } from '@/data/regions';

export const RegionalIntelligence: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'bihar' | 'purvanchal'>('bihar');
  const [selectedDistrict, setSelectedDistrict] = useState(biharDistricts[0]);

  const activeDistrictList = activeRegion === 'bihar' ? biharDistricts : purvanchalDistricts;

  return (
    <section className="bg-navy-900 text-white py-20 sm:py-28 border-b border-navy-700 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#C89B3C 1px, transparent 1px), linear-gradient(90deg, #C89B3C 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Regional Intelligence"
          title="Built with regional intelligence."
          subtitle="Deep execution experience across Bihar and Eastern Uttar Pradesh (Purvanchal). We navigate Tier 2 & 3 institutional networks where standard playbooks fall short."
          dark
        />

        {/* Large Strategic Callout */}
        <div className="border-l-2 border-accent pl-6 py-2 mb-12 max-w-4xl">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
            Deep experience across Bihar and Purvanchal.
          </h3>
          <p className="text-sm sm:text-base text-charcoal-400 mt-2 font-sans leading-relaxed">
            Understanding the ground realities of implementing large-scale initiatives across district collectorates, state university campuses, engineering colleges, polytechnics, and block-level community centers.
          </p>
        </div>

        {/* Regional Intelligence Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive District & Territory Explorer */}
          <div className="lg:col-span-7 bg-navy-800 border border-navy-700 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-navy-700 pb-4 mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActiveRegion('bihar');
                    setSelectedDistrict(biharDistricts[0]);
                  }}
                  className={`text-xs uppercase font-mono tracking-wider px-4 py-2 transition-all ${
                    activeRegion === 'bihar'
                      ? 'bg-accent text-navy-900 font-bold'
                      : 'bg-navy-900 text-charcoal-400 hover:text-white border border-navy-700'
                  }`}
                >
                  Bihar (38 Districts)
                </button>
                <button
                  onClick={() => {
                    setActiveRegion('purvanchal');
                    setSelectedDistrict(purvanchalDistricts[0]);
                  }}
                  className={`text-xs uppercase font-mono tracking-wider px-4 py-2 transition-all ${
                    activeRegion === 'purvanchal'
                      ? 'bg-accent text-navy-900 font-bold'
                      : 'bg-navy-900 text-charcoal-400 hover:text-white border border-navy-700'
                  }`}
                >
                  Purvanchal / Eastern UP
                </button>
              </div>
              <span className="text-[10px] font-mono text-accent hidden sm:inline-block">
                INTERACTIVE EXPLORER
              </span>
            </div>

            {/* Selected District Deep-Dive Box */}
            <div className="bg-navy-900 border border-navy-700 p-5 mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <h4 className="font-serif text-xl text-white font-medium">
                      {selectedDistrict.name}
                    </h4>
                    <span className="text-[10px] font-mono text-accent uppercase px-2 py-0.5 bg-accent/10 border border-accent/20">
                      {selectedDistrict.state}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-400 mt-1 font-sans">
                    {selectedDistrict.institutionsReached || 'District Institutional & Skill Outreach Network'}
                  </p>
                </div>
                {selectedDistrict.isPriorityHub && (
                  <span className="text-[10px] font-mono uppercase bg-accent text-navy-900 font-bold px-2 py-1">
                    Priority Hub
                  </span>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-400 block mb-2">
                  Key Focus Areas & Ecosystem Touchpoints:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDistrict.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      className="text-xs font-sans bg-navy-800 text-charcoal-300 px-2.5 py-1 border border-navy-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* District Quick Select Grid */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[11px] font-mono text-charcoal-400 uppercase">
                <span>Select District to Inspect Ecosystem:</span>
                <span>{activeDistrictList.length} Network Nodes Listed</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-h-[220px] overflow-y-auto pr-1">
                {activeDistrictList.map((district) => (
                  <button
                    key={district.name}
                    onClick={() => setSelectedDistrict(district)}
                    className={`text-left text-xs p-2 transition-colors border ${
                      selectedDistrict.name === district.name
                        ? 'border-accent bg-accent/15 text-white font-semibold'
                        : 'border-navy-700 bg-navy-900/60 text-charcoal-400 hover:text-white hover:border-navy-600'
                    }`}
                  >
                    <div className="truncate">{district.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Execution Pillars & BEU Gateway */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* BEU Institutional Foothold Box */}
            <div className="bg-navy-800 border-2 border-accent p-6 sm:p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                  Institutional Foothold
                </span>
                <span className="text-[10px] font-mono bg-accent text-navy-900 font-bold px-2 py-0.5">
                  STATEWIDE GATEWAY
                </span>
              </div>
              <h4 className="font-serif text-xl text-white font-normal">
                How ORVYS Facilitates Access to All 38 Engineering Colleges
              </h4>
              <p className="text-xs text-charcoal-300 font-sans leading-relaxed">
                Through our collaborative alignment and <strong>Memorandum of Understanding (MoU) with Bihar Engineering University (BEU)</strong>, ORVYS acts as the exclusive on-ground implementation facilitator. We bridge corporate CSR leaders and technology giants directly into all <strong>38 Government Engineering Colleges (GECs)</strong> located across every single district of Bihar.
              </p>
              <div className="pt-2 border-t border-navy-700 grid grid-cols-2 gap-2 text-[11px] font-mono text-charcoal-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent" />
                  <span>38/38 District Colleges</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent" />
                  <span>45,000+ Undergraduates</span>
                </div>
              </div>
            </div>

            {/* Regional Execution Pillars */}
            <div className="bg-navy-800 border border-navy-700 p-6 sm:p-7 space-y-4">
              <h4 className="font-serif text-lg text-white font-normal border-b border-navy-700 pb-2.5 flex items-center justify-between">
                <span>Field Facilitation Capabilities</span>
                <ShieldCheck className="w-4 h-4 text-accent" />
              </h4>

              <div className="space-y-3.5">
                {regionalCapabilities.map((cap, idx) => (
                  <div key={idx} className="border-b border-navy-700/60 pb-2.5 last:border-b-0 last:pb-0">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                      {cap.title}
                    </h5>
                    <p className="text-xs text-charcoal-400 leading-relaxed mt-0.5 font-sans">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Metrics Block */}
            <div className="bg-navy-800 border border-navy-700 p-6">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="border border-navy-700 p-3 bg-navy-900/80">
                  <span className="block font-serif text-3xl text-accent font-normal">38 / 38</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-300 mt-1 block">
                    Districts with GECs
                  </span>
                </div>
                <div className="border border-navy-700 p-3 bg-navy-900/80">
                  <span className="block font-serif text-3xl text-white font-normal">38+</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-300 mt-1 block">
                    BEU Engg Campuses
                  </span>
                </div>
                <div className="border border-navy-700 p-3 bg-navy-900/80">
                  <span className="block font-serif text-3xl text-white font-normal">45K+</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-300 mt-1 block">
                    Engg Student Reach
                  </span>
                </div>
                <div className="border border-navy-700 p-3 bg-navy-900/80">
                  <span className="block font-serif text-3xl text-accent font-normal">01</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-300 mt-1 block">
                    Statewide BEU Gateway
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-navy-700 text-center">
                <p className="text-[10px] font-mono text-charcoal-400">
                  * Operational footprint accessible for Corporate CSR, Skilling & Government Advisory mandates.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Real Documentary Photo Gallery: Bihar & Purvanchal Ground Footprint */}
        <div className="mt-16 pt-12 border-t border-navy-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Camera className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Regional Visual Documentation
                </span>
              </div>
              <h4 className="font-serif text-2xl text-white font-normal">
                Authentic Field & Campus Environments
              </h4>
            </div>
            <span className="text-[11px] font-mono text-charcoal-400 hidden sm:inline-block">
              BIHAR • PURVANCHAL CORRIDOR
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Photo 1: Nalanda & Bihar Academic Cradle */}
            <div className="bg-navy-800 border border-navy-700 p-2 space-y-2 group">
              <div className="relative h-44 w-full overflow-hidden bg-charcoal-800">
                <Image
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
                  alt="Historic Indian higher education & architectural heritage"
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-2 left-2 bg-navy-900/90 text-accent text-[9px] font-mono px-2 py-0.5">
                  NALANDA • BIHAR
                </div>
              </div>
              <div className="px-1 py-1">
                <h5 className="text-xs font-serif text-white">Historical Academic Cradle</h5>
                <p className="text-[10px] text-charcoal-400 font-sans mt-0.5">
                  Ancient tradition of multidisciplinary scholarship bridging into modern engineering institutions.
                </p>
              </div>
            </div>

            {/* Photo 2: Engineering Campus & Computing Labs */}
            <div className="bg-navy-800 border border-navy-700 p-2 space-y-2 group">
              <div className="relative h-44 w-full overflow-hidden bg-charcoal-800">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                  alt="Engineering campus and student research"
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-2 left-2 bg-navy-900/90 text-accent text-[9px] font-mono px-2 py-0.5">
                  PATNA • BEU NETWORK
                </div>
              </div>
              <div className="px-1 py-1">
                <h5 className="text-xs font-serif text-white">Statewide GEC Network</h5>
                <p className="text-[10px] text-charcoal-400 font-sans mt-0.5">
                  Government Engineering Colleges across 38 districts modernizing technical and AI infrastructure.
                </p>
              </div>
            </div>

            {/* Photo 3: Varanasi & Purvanchal Corridor */}
            <div className="bg-navy-800 border border-navy-700 p-2 space-y-2 group">
              <div className="relative h-44 w-full overflow-hidden bg-charcoal-800">
                <Image
                  src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=800&q=80"
                  alt="Varanasi and Eastern UP institutional corridor"
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-2 left-2 bg-navy-900/90 text-accent text-[9px] font-mono px-2 py-0.5">
                  VARANASI • PURVANCHAL
                </div>
              </div>
              <div className="px-1 py-1">
                <h5 className="text-xs font-serif text-white">Purvanchal Higher Ed Hub</h5>
                <p className="text-[10px] text-charcoal-400 font-sans mt-0.5">
                  Apex university and industrial corridor linking Eastern UP with Bihar district ecosystems.
                </p>
              </div>
            </div>

            {/* Photo 4: Student Workshops & Hands-on Labs */}
            <div className="bg-navy-800 border border-navy-700 p-2 space-y-2 group">
              <div className="relative h-44 w-full overflow-hidden bg-charcoal-800">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating in modern technical labs"
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-2 left-2 bg-navy-900/90 text-accent text-[9px] font-mono px-2 py-0.5">
                  DISTRICT CAMPUS LABS
                </div>
              </div>
              <div className="px-1 py-1">
                <h5 className="text-xs font-serif text-white">Applied Technical Learning</h5>
                <p className="text-[10px] text-charcoal-400 font-sans mt-0.5">
                  Hands-on computing capstones and faculty-led laboratory sessions across regional colleges.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
