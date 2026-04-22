import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallBar from '@/components/StickyCallBar'

export const metadata: Metadata = {
  metadataBase: new URL('https://lamaisonducanal.be'),
  title: {
    default: 'La Maison du Canal | Restaurant à Leers-Nord, au bord du canal',
    template: '%s | La Maison du Canal'
  },
  description: 'Restaurant au bord du canal de l\'Espierre à Leers-Nord (Estaimpuis). Cuisine généreuse, ambiance chaleureuse, terrasse apaisante. Entre Belgique et France, une table qui rassemble.',
  keywords: ['restaurant Leers-Nord', 'restaurant Estaimpuis', 'restaurant canal Espierre', 'restaurant Tournai', 'restaurant Mouscron', 'restaurant Roubaix côté belge', 'restaurant Tourcoing frontière', 'estaminet Hainaut', 'terrasse canal bord de l\'eau', 'Canal Plage Estaimpuis', 'restaurant frontière franco-belge', 'brasserie Hainaut', 'RAVeL restaurant vélo', 'restaurant Templeuve', 'restaurant Pecq Hainaut'],
  authors: [{ name: 'La Maison du Canal' }],
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    alternateLocale: 'fr_FR',
    url: 'https://lamaisonducanal.be',
    siteName: 'La Maison du Canal',
    title: 'La Maison du Canal | Restaurant à Leers-Nord',
    description: 'Restaurant au bord du canal de l\'Espierre. Cuisine généreuse, ambiance chaleureuse, entre Belgique et France.',
    images: [
      {
        url: '/images/photos/facade.jpg',
        width: 1200,
        height: 630,
        alt: 'La Maison du Canal - Restaurant à Leers-Nord',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Maison du Canal | Restaurant à Leers-Nord',
    description: 'Restaurant au bord du canal de l\'Espierre. Cuisine généreuse, ambiance chaleureuse.',
    images: ['/images/photos/facade.jpg'],
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'La Maison du Canal',
  description: 'Restaurant au bord du canal de l\'Espierre à Leers-Nord. Cuisine généreuse, bières belges, terrasse apaisante. Entre Belgique et France.',
  url: 'https://lamaisonducanal.be',
  telephone: '+3256914285',
  servesCuisine: ['Belge', 'Brasserie'],
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue du Canal 6',
    addressLocality: 'Leers-Nord',
    postalCode: '7730',
    addressRegion: 'Hainaut',
    addressCountry: 'BE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.7167,
    longitude: 3.2833,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '11:00',
    closes: '21:00',
  },
  hasMap: 'https://maps.google.com/?q=Rue+du+Canal+6,+7730+Leers-Nord',
  image: 'https://lamaisonducanal.be/images/photos/facade.jpg',
  sameAs: [
    'https://www.facebook.com/lamaisonducanalbelgique',
    'https://www.instagram.com/lamaisonducanal',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preconnect pour les polices Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7P5BG3T2FH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7P5BG3T2FH');
          `}
        </Script>
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />

        {/* Barre d'appel sticky mobile */}
        <StickyCallBar />
      </body>
    </html>
  )
}
