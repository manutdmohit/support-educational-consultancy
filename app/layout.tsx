import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallButton from '@/components/CallButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Support Educational Consultancy',
  description: 'Expert educational consulting services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
