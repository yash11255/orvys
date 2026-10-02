'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

import { useContactModal } from '@/context/ContactModalContext';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openModal } = useContactModal();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay failed:', err);
      });
    }
  }, []);

  return (
    <section className="relative bg-navy-950 text-white min-h-[85vh] flex items-center pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden border-b border-navy-800">
      {/* Ambient Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-125 transition-opacity duration-1000"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-nodes-connect-41525-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Layered Gradient & Texture Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/70" />
        <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-[1px]" />
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#C5A880 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Editorial Eyebrow */}
          <div className="inline-flex items-center gap-2.5 bg-navy-900/90 border border-accent/40 px-4 py-1.5 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Strategy • Impact • Transformation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] text-white leading-[1.08] font-normal tracking-tight drop-shadow-md">
            Strategy that moves ideas into action.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-charcoal-200 leading-relaxed font-sans max-w-3xl mx-auto font-light">
            ORVYS Consulting works with businesses, governments and institutions to design, manage and measure programs that create meaningful impact at scale.
          </p>

          {/* Secondary Regional Grounding & BEU MoA Gateway */}
          <div className="bg-navy-900/80 border-l-4 border-accent border border-navy-700/80 p-5 max-w-3xl mx-auto text-left backdrop-blur-md shadow-xl">
            <p className="text-sm sm:text-base text-charcoal-300 leading-relaxed italic font-serif mb-2">
              "With deep on-ground presence across Bihar and the Purvanchal region, we bring strategy closer to the communities, institutions and systems where change happens."
            </p>
            <div className="inline-flex flex-wrap items-center gap-2 bg-navy-950/90 px-3 py-1.5 border border-navy-700 text-xs font-mono text-charcoal-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-semibold text-accent">Institutional Gateway:</span>
              <span>Access across 38+ Bihar Engineering Colleges via Bihar Engineering University (BEU) network</span>
            </div>
          </div>

          {/* CTA Group */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-navy-950 text-xs uppercase tracking-widest font-bold px-8 py-4 transition-all duration-200 shadow-xl hover:scale-[1.02]"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-navy-950" />
            </Link>
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy-900/90 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 transition-all duration-200 border border-navy-700 hover:border-accent backdrop-blur-md hover:scale-[1.02]"
            >
              <span>Talk to ORVYS</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </button>
          </div>

          {/* Key Regional Indicators */}
          <div className="pt-8 border-t border-navy-800/80 grid grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            <div className="bg-navy-900/60 p-4 border border-navy-800 backdrop-blur-sm">
              <span className="block font-serif text-2xl sm:text-3xl font-normal text-accent">36+</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-charcoal-400">Districts Covered</span>
            </div>
            <div className="bg-navy-900/60 p-4 border border-navy-800 backdrop-blur-sm">
              <span className="block font-serif text-2xl sm:text-3xl font-normal text-accent">07</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-charcoal-400">Consulting Verticals</span>
            </div>
            <div className="bg-navy-900/60 p-4 border border-navy-800 backdrop-blur-sm">
              <span className="block font-serif text-2xl sm:text-3xl font-normal text-accent">100%</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-charcoal-400">Ground Alignment</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
