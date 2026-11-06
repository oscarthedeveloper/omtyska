import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/site.config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'tysk grammatik',
    'tyska',
    'grammatika',
    'kasus',
    'ackusativ',
    'dativ',
    'genitiv',
    'växelprepositioner',
    'verbböjning',
    'satsram',
    'V2',
    'bisatser',
    'svenska',
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.languageOfInstruction,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="sv"
      data-grammar-mode="lattsam"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('omtyska_grammar_mode');if(m==='rigoros'){document.documentElement.setAttribute('data-grammar-mode','rigoros');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a href="#innehall" className="skipLink">
          Hoppa till innehållet
        </a>
        <Navbar />
        <main id="innehall">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
