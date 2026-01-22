import Image from 'next/image'
import Link from 'next/link'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/hero-canal.jpg"
            alt="Le canal de l'Espierre"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canal-cream to-transparent" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance">
            La Maison du Canal
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-3">
            Estaminet - Brasserie - Terrasse
          </p>
          <p className="text-base text-white/70 max-w-xl mx-auto mb-8">
            Au bord de l'eau, entre Belgique et France, une ancienne maison éclusière
            où l'on prend le temps de vivre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+3256914285" className="btn-primary">
              Réserver
            </a>
            <Link href="/contact" className="btn-secondary">
              Nous trouver
            </Link>
          </div>
        </div>

        <div className="absolute bottom-28 left-1/2 -translate-x-1/2">
          <svg className="w-5 h-5 text-white/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section L'esprit du lieu */}
      <section className="py-20 bg-canal-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-canal-navy mb-6">
                  L'esprit du lieu
                </h2>
                <div className="space-y-4 text-canal-charcoal/80 leading-relaxed">
                  <p>
                    À La Maison du Canal, pas de précipitation. On vient pour savourer un repas préparé avec soin,
                    partager une bière locale, profiter du calme du canal.
                  </p>
                  <p>
                    L'été, la terrasse s'anime doucement. Le reste de l'année, la chaleur de l'intérieur vous accueille.
                  </p>
                  <p>
                    Une adresse familiale, où petits et grands se sentent bien.
                    Un lieu où les habitués croisent les promeneurs.
                  </p>
                </div>

                <div className="mt-8 flex gap-8">
                  <div>
                    <p className="font-bold text-canal-navy">Ouvert</p>
                    <p className="text-sm text-canal-slate">Tous les jours</p>
                  </div>
                  <div>
                    <p className="font-bold text-canal-navy">11h - 21h</p>
                    <p className="text-sm text-canal-slate">Sans réservation possible</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/photos/facade.jpg"
                    alt="Façade de La Maison du Canal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden mt-8">
                  <Image
                    src="/images/photos/ambiance-interieur.jpg"
                    alt="Ambiance intérieure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/photos/canal-nature.jpg"
                    alt="Le canal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden mt-8">
                  <Image
                    src="/images/photos/hero-coucher-soleil.jpg"
                    alt="Coucher de soleil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Entre deux pays */}
      <section className="py-20 bg-canal-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entre deux pays, une même table
            </h2>
            <div className="w-16 h-1 bg-canal-gold mx-auto mb-8" />
            <div className="space-y-4 text-white/80">
              <p>
                Le canal trace la frontière, mais à La Maison du Canal, on l'efface naturellement.
                Nos clients viennent de Tournai, Mouscron, Estaimpuis, mais aussi de Lille, Roubaix ou Tourcoing.
              </p>
              <p>
                On parle français des deux côtés, on partage les mêmes plaisirs simples :
                une bonne table, une bière artisanale, le plaisir d'être ensemble.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Ce que nous proposons */}
      <section className="py-20 bg-canal-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-canal-navy mb-4">
              Ce que nous proposons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-canal-navy mb-3">Restauration</h3>
              <p className="text-canal-charcoal/70 text-sm">
                Cuisine de brasserie généreuse. Planches, viandes, plats du jour.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-canal-navy mb-3">Boissons</h3>
              <p className="text-canal-charcoal/70 text-sm">
                Large choix de bières belges, vins et softs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-canal-navy mb-3">Terrasse</h3>
              <p className="text-canal-charcoal/70 text-sm">
                Vue sur le canal, ambiance apaisante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avis */}
      <ReviewsCarousel />

      {/* Section Réseaux Sociaux */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-canal-navy mb-3">
              Suivez notre actualité
            </h2>
            <p className="text-canal-charcoal/70 text-sm mb-6">
              Retrouvez-nous sur les réseaux sociaux pour découvrir nos événements et notre quotidien.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/lamaisonducanalbelgique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-canal-navy text-white rounded-full font-medium hover:bg-canal-navy/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lamaisonducanal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-canal-gold text-white rounded-full font-medium hover:bg-canal-gold-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/hero-coucher-soleil.jpg"
            alt="Coucher de soleil sur le canal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-canal-navy/80" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Venez nous rendre visite
            </h2>
            <p className="text-white/80 mb-8">
              Réservez votre table par téléphone et venez profiter d'un moment de convivialité au bord du canal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+3256914285" className="btn-primary">
                056 91 42 85
              </a>
              <Link href="/contact" className="btn-secondary">
                Nous trouver
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-center gap-6 text-sm text-white/60">
              <span>Rue du Canal 6, 7730 Leers-Nord</span>
              <span>Ouvert tous les jours 11h - 21h</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
