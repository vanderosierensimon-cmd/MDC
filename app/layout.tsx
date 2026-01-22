import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://lamaisonducanal.be'),
  title: {
    default: 'La Maison du Canal | Restaurant à Leers-Nord, au bord du canal',
    template: '%s | La Maison du Canal'
  },
  description: 'Restaurant au bord du canal de l\'Espierre à Leers-Nord (Estaimpuis). Cuisine généreuse, ambiance chaleureuse, terrasse apaisante. Entre Belgique et France, une table qui rassemble.',
  keywords: ['restaurant Leers-Nord', 'restaurant Estaimpuis', 'restaurant canal Espierre', 'restaurant Tournai', 'restaurant Mouscron', 'estaminet', 'terrasse canal', 'Canal Plage', 'restaurant frontière belge', 'brasserie belgique'],
  authors: [{ name: 'La Maison du Canal' }],
  icons: {
    icon: [
      { url: '/images/logos/logo-bleu.jpg' },
      { url: '/images/logos/logo-bleu.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/logos/logo-bleu.jpg', sizes: '16x16', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/images/logos/logo-bleu.jpg', sizes: '180x180', type: 'image/jpeg' }
    ],
    shortcut: '/images/logos/logo-bleu.jpg'
  },
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
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
