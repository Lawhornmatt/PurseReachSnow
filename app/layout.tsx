export const metadata = {
  title: 'Matt Lawhorn Portfolio',
  description: "Matt Lawhorn's React application showcase built with Next.js",
  generator: 'Next.js',
  applicationName: 'PRS | Personal React Showcase',
  // referrer: 'origin-when-cross-origin', // Come back and set this when I am more educated about it
  keywords: ['Next.js', 'React', 'portfolio'],
  author: [{ name: 'Matty', url: 'https://lawhornmatt.com/' }],
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#c6ddca' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1e19' },
  ],
  creator: 'Matty Lawhorn',
  // publisher: 'Me',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Matt Lawhorn Portfolio',
    description: 'Matt Lawhorn React application showcase built with Next.js',
    url: 'https://lawhornmatt.com/',
    siteName: 'Lawhornmatt.com',
    author_name: 'Matty Lawhorn',
    /*images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],*/
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noarchive: true,
      noimageindex: true,
      'max-video-preview': 0,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  },
};

import './globals.css';
import Link from "next/link";

import MobileNav from '../components/navbar/mobileNav';

import { raleway } from './font';

import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className= {`${raleway.className} flex flex-col bg-mint text-cymru sm:text-2xl motion-safe:animate-fadeIn`}>
        <MobileNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
};