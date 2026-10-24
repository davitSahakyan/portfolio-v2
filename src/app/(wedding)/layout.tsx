import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Noto_Serif_Armenian } from 'next/font/google';
import { SITE_URL, coupleNames, wedding } from './davittatevwedding/wedding.config';
import './wedding.css';

const serif = Noto_Serif_Armenian({
  subsets: ['armenian', 'latin'],
  variable: '--wd-font-serif',
  display: 'swap',
});

const latin = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--wd-font-latin',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${coupleNames} · Հարսանյաց հրավեր`,
  description: `${wedding.invitationText} ${wedding.date.long}`,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    type: 'website',
    locale: 'hy_AM',
    siteName: coupleNames,
  },
};

export const viewport: Viewport = {
  themeColor: '#f6ede3',
  colorScheme: 'only light',
};

// Without JS the intro overlay could never be dismissed, so show the content as-is
const noScriptStyles =
  '<style>.wd-intro{display:none}.wd-reveal,.wd-hero__content>*{opacity:1!important;transform:none!important}</style>';

export default function WeddingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // font variables go on <html> so the :root tokens in wedding.css can resolve them
    <html lang="hy" className={`${serif.variable} ${latin.variable}`}>
      <body>
        <noscript dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
        {children}
      </body>
    </html>
  );
}
