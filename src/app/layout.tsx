import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ParallaxManager from "@/components/ParallaxManager";

export const metadata: Metadata = {
  title: {
    default: "PUNE Training Company - Democratizing Corporate Training",
    template: "%s | PUNE Training Company"
  },
  description: "We partner with organizations to solve their training requirements and democratize the corporate training ecosystem through technology and innovation.",
  keywords: ["corporate training", "training partners", "pune", "professional development", "training solutions", "skill development"],
  authors: [{ name: "PUNE Training Company" }],
  creator: "PUNE Training Company",
  publisher: "PUNE Training Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://punetrainingcompany.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://punetrainingcompany.com',
    siteName: 'PUNE Training Company',
    title: 'PUNE Training Company - Democratizing Corporate Training',
    description: 'We partner with organizations to solve their training requirements and democratize the corporate training ecosystem through technology and innovation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PUNE Training Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUNE Training Company - Democratizing Corporate Training',
    description: 'We partner with organizations to solve their training requirements and democratize the corporate training ecosystem through technology and innovation.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://punetrainingcompany.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="service" />
        <ParallaxManager />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}