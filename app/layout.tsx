import type { Metadata } from 'next';
import { Cormorant_Garamond, Poppins, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deeksha Hemanth | PR & Events Executive',
  description: 'Deeksha - Strategic PR & Events Executive specializing in media relations and impactful storytelling',
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${manrope.variable}`}>
      <body className="font-manrope bg-white text-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
