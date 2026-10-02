import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-navy-700">
      {/* Top Editorial Callout */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <span className="text-accent text-xs font-mono tracking-widest uppercase block mb-3">
                Strategic Partnerships & Programs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F5F0] leading-tight max-w-2xl font-normal">
                Ready to bridge policy and corporate strategy with ground-level execution?
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-accent text-navy-900 hover:bg-[#D4A84E] text-xs uppercase tracking-widest font-bold px-6 py-4 transition-colors"
              >
                <span>Initiate Advisory Dialogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt="ORVYS Consulting"
                width={200}
                height={58}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
            <p className="text-accent text-sm font-serif italic tracking-wide">
              Strategy. Impact. Transformation.
            </p>
            <p className="text-charcoal-400 text-xs leading-relaxed max-w-sm pt-2">
              ORVYS Consulting operates at the intersection of corporate strategy, public policy, institutional governance, and ground-level execution across Bihar, Purvanchal, and India.
            </p>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-mono text-charcoal-400 border-b border-navy-800 pb-2">
              Consulting Verticals
            </h3>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li>
                <Link href="/services#impact" className="hover:text-white transition-colors">
                  ORVYS Impact (CSR & Social Impact)
                </Link>
              </li>
              <li>
                <Link href="/services#esg" className="hover:text-white transition-colors">
                  ORVYS ESG & Sustainability
                </Link>
              </li>
              <li>
                <Link href="/services#advisory" className="hover:text-white transition-colors">
                  ORVYS Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#pmu" className="hover:text-white transition-colors">
                  ORVYS PMU & Governance
                </Link>
              </li>
              <li>
                <Link href="/services#digital" className="hover:text-white transition-colors">
                  ORVYS Digital & AI Systems
                </Link>
              </li>
              <li>
                <Link href="/services#learning" className="hover:text-white transition-colors">
                  ORVYS Learning & Skilling
                </Link>
              </li>
              <li>
                <Link href="/services#insights" className="hover:text-white transition-colors">
                  ORVYS Insights & M&E
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-mono text-charcoal-400 border-b border-navy-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-charcoal-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/bihar-csr" className="hover:text-accent font-semibold transition-colors">
                  Bihar CSR Gateway
                </Link>
              </li>
              <li>
                <Link href="/bihar-csr-projects" className="hover:text-white transition-colors">
                  Bihar CSR Projects
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Editorial Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About ORVYS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Presence */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-mono text-charcoal-400 border-b border-navy-800 pb-2">
              Regional Presence
            </h3>
            <div className="space-y-2 text-xs text-charcoal-400">
              <p className="text-white font-medium">India Practice Hubs</p>
              <p>Bihar: State Secretariat & District Network</p>
              <p>Purvanchal: Varanasi & Eastern UP Hub</p>
              <p>National Coordination: Delhi NCR</p>
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-white text-xs transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <p>© 2026 ORVYS Consulting. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-charcoal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-charcoal-400 transition-colors">
              Terms of Use
            </Link>
            <span className="text-charcoal-600">|</span>
            <span className="text-charcoal-400">From Strategy to Ground</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
