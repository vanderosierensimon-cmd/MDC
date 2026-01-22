import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export const metadata: Metadata = {
  title: 'Activités',
  description: 'Activités autour de La Maison du Canal : Canal Plage, pédalos, kayaks, balades à vélo sur le RAVeL, promenades nature le long du canal de l\'Espierre.',
  openGraph: {
    title: 'Activités | La Maison du Canal',
    description: 'Canal Plage, balades à vélo, promenades nature au bord du canal de l\'Espierre',
    images: ['/images/photos/canal-pedalos.jpg'],
  },
}

export default function ActivitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/canal-pedalos.jpg"
            alt="Pédalos sur le canal de l'Espierre"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canal-cream to-transparent" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Activités
          </h1>
          <p className="text-lg text-white/80">
            Le canal, bien plus qu'un décor
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-canal-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-canal-charcoal/80">
              Situé au bord du canal de l'Espierre, notre restaurant est le point de départ
              idéal pour profiter de la nature et des activités de plein air.
            </p>
          </div>
        </div>
      </section>

      {/* Canal Plage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-canal-navy mb-6">
                  L'été, le canal s'anime
                </h2>
                <div className="space-y-4 text-canal-charcoal/80 leading-relaxed">
                  <p>
                    De juin à septembre, la commune d'Estaimpuis installe Canal Plage à
                    quelques mètres du restaurant. Bateaux électriques, pédalos, kayaks...
                  </p>
                  <p>
                    Les activités nautiques sont gérées par la commune. Nous nous occupons de vous
                    restaurer et désaltérer avant, pendant ou après votre balade sur l'eau.
                  </p>

                  <div className="bg-canal-cream rounded-xl p-5 mt-6">
                    <h3 className="font-bold text-canal-navy mb-3">Activités nautiques :</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Bateaux électriques (sans permis)</li>
                      <li>Pédalos pour toute la famille</li>
                      <li>Kayaks</li>
                      <li>Espaces de détente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/photos/canal-nature.jpg"
                  alt="Le canal en été"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balades */}
      <section className="py-16 bg-canal-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden order-2 lg:order-1">
                <Image
                  src="/images/photos/canal-heron.jpg"
                  alt="Nature au bord du canal"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-canal-navy mb-6">
                  Balades à pied ou à vélo
                </h2>
                <div className="space-y-4 text-canal-charcoal/80 leading-relaxed">
                  <p>
                    Le chemin de halage qui longe le canal est parfait pour une promenade à pied
                    ou une sortie à vélo. Les itinéraires RAVeL passent devant notre porte.
                  </p>
                  <p>
                    La nature est généreuse ici : observez les oiseaux, respirez l'air pur,
                    laissez-vous porter par le calme de l'eau.
                  </p>

                  <div className="bg-white rounded-xl p-5 mt-6">
                    <h3 className="font-bold text-canal-navy mb-3">À découvrir :</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Itinéraires cyclables RAVeL balisés</li>
                      <li>Promenades familiales le long de l'eau</li>
                      <li>Observation de la faune et de la flore</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accès vélo */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-canal-navy mb-4">
              Vous venez à vélo ?
            </h3>
            <p className="text-canal-charcoal/80">
              Un espace est disponible pour garer les vélos à proximité du restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Section Avis */}
      <ReviewsCarousel />

      {/* CTA */}
      <section className="py-16 bg-canal-gold text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Envie de profiter du canal ?
            </h2>
            <p className="text-white/80 mb-6">
              Que vous veniez pour une activité nautique, une balade à vélo ou simplement
              pour vous détendre sur notre terrasse, nous vous accueillons tous les jours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+3256914285"
                className="bg-white text-canal-gold px-8 py-4 rounded-full font-semibold hover:bg-canal-cream transition-colors text-center"
              >
                Nous appeler
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Nous trouver
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
