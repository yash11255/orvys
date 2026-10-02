'use client';

import React, { useState } from 'react';
import { 
  Play, 
  X, 
  Tv, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Volume2, 
  Maximize2 
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';

interface VideoChapter {
  time: string;
  seconds: number;
  title: string;
  description: string;
}

interface VideoFeature {
  id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
  duration: string;
  region: string;
  category: string;
  overview: string;
  keyTakeaway: string;
  chapters: VideoChapter[];
}

const featuredVideos: VideoFeature[] = [
  {
    id: 'vid-1',
    title: 'Transforming Technical Education Across Bihar & Purvanchal',
    subtitle: 'A documentary perspective on bringing AI curricula and industry partnerships to regional engineering campuses.',
    // Curated high quality educational & institutional skilling documentary embed
    youtubeId: 'W-Q5n67m_pI',
    duration: '06:45',
    region: 'Bihar & Eastern UP',
    category: 'Institutional Skilling',
    overview: 'This briefing captures the ground-level mechanics of deploying Program Management Units (PMUs) across district colleges, training master faculty, and connecting undergraduates with enterprise computing tracks.',
    keyTakeaway: 'Sustainable institutional change requires embedding daily accountability within campus administrations rather than relying on one-off webinars.',
    chapters: [
      { time: '00:00', seconds: 0, title: 'Regional Context & Campus Infrastructure', description: 'Baseline diagnostic across Tier 2/3 engineering colleges in North & South Bihar.' },
      { time: '01:30', seconds: 90, title: 'Faculty Enablement & Master Bootcamps', description: 'Upskilling 120+ senior professors in applied AI and cloud architecture.' },
      { time: '03:15', seconds: 195, title: 'Student Onboarding & Lab Automation', description: 'Hands-on project sprints and real-time MIS milestone tracking.' },
      { time: '05:00', seconds: 300, title: 'Corporate Linkages & Measurable Outcomes', description: 'Connecting certified student cohorts with hiring corridors.' }
    ]
  },
  {
    id: 'vid-2',
    title: 'CSR Re-engineered: From Grant Spend to Systems Change',
    subtitle: 'How corporate social investments build durable community institutions across Eastern India.',
    youtubeId: 'bA45qVbUqZc',
    duration: '05:18',
    region: 'Purvanchal Corridor',
    category: 'CSR & Social Impact',
    overview: 'Examining the transition from annual budget exhaustion cycles to multi-year institutional operating models with geotagged field verification and SROI tracking.',
    keyTakeaway: 'True social return on investment is achieved when community institutions sustain the program independently beyond funding cycles.',
    chapters: [
      { time: '00:00', seconds: 0, title: 'The Problem with Transactional Grants', description: 'Why isolated grant disbursements fail to create lasting economic mobility.' },
      { time: '01:45', seconds: 105, title: 'District Field Telemetry & Verification', description: 'Deploying mobile-first data collection and third-party quality audits.' },
      { time: '03:40', seconds: 220, title: 'Long-Term Economic Linkages', description: 'Creating self-sustaining micro-enterprises and local employment hubs.' }
    ]
  },
  {
    id: 'vid-3',
    title: 'The Digital Backbone: Offline Telemetry in Remote Districts',
    subtitle: 'Architecting zero-data-loss telemetry systems for distributed social programs.',
    youtubeId: 'YQHsXMglC9A',
    duration: '04:32',
    region: 'Pan-India & Eastern Hubs',
    category: 'Digital & AI Systems',
    overview: 'A deep-dive into the technology architecture powering ORVYS field monitoring: offline-first synchronization, GPS validation, and executive decision dashboards.',
    keyTakeaway: 'Reliable data architecture eliminates reporting latency and prevents fraudulent reporting in remote operations.',
    chapters: [
      { time: '00:00', seconds: 0, title: 'Field Infrastructure Challenges', description: 'Operating under severe bandwidth constraints during adverse weather.' },
      { time: '01:50', seconds: 110, title: 'Differential Synchronization Engine', description: 'How lightweight mobile tools guarantee 100% data integrity.' },
      { time: '03:10', seconds: 190, title: 'Executive Dashboards for Decision Makers', description: 'Providing state leadership with near real-time district telemetry.' }
    ]
  }
];

export const FieldDocumentary: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [currentStartSeconds, setCurrentStartSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeVideo = featuredVideos[activeVideoIndex];

  const handleChapterClick = (seconds: number) => {
    setCurrentStartSeconds(seconds);
  };

  return (
    <section className="bg-surface border-b border-border-default py-20 sm:py-28 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="Interactive Field Intelligence"
            title="Ground execution in motion."
            subtitle="Explore documentary perspectives, field briefings, and operational methodologies captured across our regional deployments in Bihar and Purvanchal."
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-dark font-bold bg-surface-warm px-3 py-1.5 border border-border-default">
              Documentary Series (3 Briefings)
            </span>
          </div>
        </div>

        {/* Video Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-border-light">
          {featuredVideos.map((video, idx) => (
            <button
              key={video.id}
              onClick={() => {
                setActiveVideoIndex(idx);
                setCurrentStartSeconds(0);
              }}
              className={`text-xs font-mono uppercase tracking-wider px-4 py-2.5 transition-all whitespace-nowrap border ${
                activeVideoIndex === idx
                  ? 'bg-navy-800 text-white border-navy-800 font-bold shadow-sm'
                  : 'bg-surface-warm text-charcoal-700 border-border-default hover:border-accent'
              }`}
            >
              <span>Briefing 0{idx + 1}: {video.category}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Video Player & Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-surface-warm border border-border-default p-6 sm:p-10">
          
          {/* Left / Embedded YouTube Player with Chapter Sync */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video w-full bg-charcoal-900 border border-border-default shadow-md overflow-hidden group">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&start=${currentStartSeconds}&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Controls / Meta Bar */}
            <div className="flex items-center justify-between bg-surface p-3 border border-border-light text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-accent-dark font-bold flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5" />
                  <span>ORVYS FIELD TRANSMISSION</span>
                </span>
                <span className="text-charcoal-400">•</span>
                <span className="text-charcoal-600 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{activeVideo.duration}</span>
                </span>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1 text-navy-800 hover:text-accent-dark font-bold transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
                <span>Theater Mode</span>
              </button>
            </div>
          </div>

          {/* Right / Interactive Chapter Markers & Executive Notes */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent">{activeVideo.category}</Badge>
                <div className="flex items-center gap-1 text-[11px] font-mono text-charcoal-500">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span>{activeVideo.region}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl text-navy-900 font-normal leading-snug">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans mt-2">
                {activeVideo.overview}
              </p>
            </div>

            {/* Key Takeaway */}
            <div className="bg-surface border-l-2 border-accent p-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent-dark font-bold block mb-1">
                Field Principle:
              </span>
              <p className="text-xs font-serif italic text-navy-900 leading-snug">
                "{activeVideo.keyTakeaway}"
              </p>
            </div>

            {/* Interactive Chapter List */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-charcoal-500 font-semibold block">
                Select Chapter to Jump:
              </span>
              <div className="space-y-1.5">
                {activeVideo.chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChapterClick(ch.seconds)}
                    className={`w-full text-left p-2.5 transition-all border flex items-start justify-between gap-3 ${
                      currentStartSeconds === ch.seconds
                        ? 'bg-navy-800 text-white border-navy-800 font-medium'
                        : 'bg-surface hover:bg-surface-warm text-charcoal-800 border-border-light hover:border-accent'
                    }`}
                  >
                    <div className="text-xs">
                      <div className="font-medium">{ch.title}</div>
                      <div className={`text-[10px] line-clamp-1 mt-0.5 ${currentStartSeconds === ch.seconds ? 'text-charcoal-300' : 'text-charcoal-500'}`}>
                        {ch.description}
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono flex-shrink-0 px-1.5 py-0.5 border ${
                      currentStartSeconds === ch.seconds
                        ? 'bg-accent text-navy-900 border-accent font-bold'
                        : 'bg-surface-warm text-charcoal-600 border-border-light'
                    }`}>
                      {ch.time}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Optional Fullscreen Theater Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <div className="bg-navy-800 border border-navy-700 w-full max-w-5xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-navy-700 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-accent" />
                  <span className="font-serif text-lg">{activeVideo.title}</span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 hover:bg-navy-700 text-charcoal-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&start=${currentStartSeconds}&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 bg-navy-900 border-t border-navy-700 flex items-center justify-between text-xs font-mono text-charcoal-400">
                <span>ORVYS DOCUMENTARY REEL • {activeVideo.region}</span>
                <span className="text-accent">{activeVideo.category}</span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
