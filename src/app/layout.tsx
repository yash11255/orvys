import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactModalProvider } from '@/context/ContactModalContext';
import { ContactModal } from '@/components/common/ContactModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ORVYS Consulting | Strategy. Impact. Transformation.',
  description:
    'ORVYS is a strategy, impact and advisory consulting firm working at the intersection of CSR, ESG, Government Advisory, PMUs, Skilling, and Digital Transformation across Bihar, Purvanchal, and India.',
  keywords: [
    'ORVYS Consulting',
    'Strategy Consulting India',
    'CSR Impact Bihar',
    'ESG Advisory Eastern UP',
    'Purvanchal Consulting',
    'Program Management Units PMU',
    'Higher Education Skilling Bihar',
    'Government Advisory India',
  ],
  authors: [{ name: 'ORVYS Consulting' }],
  openGraph: {
    title: 'ORVYS Consulting | Strategy. Impact. Transformation.',
    description:
      'Connecting strategy, institutions, people, technology, and ground implementation for scalable social and economic transformation.',
    url: 'https://orvys.in',
    siteName: 'ORVYS Consulting',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-charcoal-900 selection:bg-accent selection:text-white font-sans">
        <ContactModalProvider>
          <Header />
          <main className="flex-grow pt-[65px]">{children}</main>
          <Footer />
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
