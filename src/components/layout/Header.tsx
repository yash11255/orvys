'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import { useContactModal } from '@/context/ContactModalContext';

const navigationLinks = [
  { name: 'What We Do', href: '/services' },
  { name: 'Bihar CSR', href: '/bihar-csr' },
  { name: 'Case Studies', href: '/work' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#D5CFBF]/80 py-3.5 shadow-sm'
          : 'bg-[#F7F5F0] border-b border-[#E4DFD5] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center focus:outline-none py-1">
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="ORVYS Consulting"
                width={220}
                height={64}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-navy-800 font-semibold'
                      : 'text-charcoal-700 hover:text-navy-800'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-navy-800 text-white hover:bg-navy-900 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 transition-all duration-200 border border-navy-800 hover:border-navy-900 shadow-sm hover:scale-[1.02]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-800 hover:text-charcoal-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5F0] border-b border-border-default px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navigationLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium py-2 border-b border-border-light transition-colors ${
                    isActive ? 'text-navy-800 font-bold' : 'text-charcoal-700'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-navy-800 text-white text-xs uppercase tracking-wider font-semibold py-3 border border-navy-800"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
