import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReviewsCarousel from '@/components/ReviewsCarousel'

export const metadata: Metadata = {
  title: 'Notre Histoire',
  description: 'Découvrez l\'histoire de La Maison du Canal, ancienne maison éclusière devenue restaurant en 2008, au bord du canal de l\'Espierre à Leers-Nord.',
  openGraph: {
    title: 'Notre Histoire | La Maison du Canal',
    description: 'D\'une maison éclusière à un restaurant convivial au bord du canal',
    images: ['/images/photos/histoire-ancienne.jpg'],
  },
}

export default function HistoirePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/histoire-ancienne.jpg"
            alt="L'écluse du canal de l'Espierre - photo historique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canal-cream to-transparent" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Notre Histoire
          </h1>
          <p className="text-lg text-white/80">
            D'une maison éclusière à un lieu de partage
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-canal-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-canal-charcoal/80 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-canal-navy">
                D'une maison éclusière à un lieu de vie
              </h2>

              <p>
                Cette maison a une histoire. Celle de ces bâtiments témoins du temps où le canal
                était une artère vitale entre la Belgique et la France. Ici vivaient les éclusiers,
                gardiens du passage des péniches et du bon écoulement de l'eau.
              </p>

              <p>
                Le canal de l'Espierre reliait deux pays, deux économies.
                Les péniches transportaient marchandises et espoir. Les éclusiers veillaient au grain,
                jour et nuit, dans cette maison qui est aujourd'hui la nôtre.
              </p>

              <h3 className="text-xl font-bold text-canal-navy pt-4">
                2008 : Une nouvelle vie
              </h3>

              <p>
                En 2008, la maison change de vocation et devient restaurant.
                L'esprit reste le même : un endroit chaleureux où l'on se retrouve.
              </p>

              <p>
                Depuis, le bâtiment a été modernisé, la terrasse agrandie, mais le caractère authentique
                est préservé. Cette atmosphère familiale fait le charme du lieu.
              </p>

              <h3 className="text-xl font-bold text-canal-navy pt-4">
                Aujourd'hui
              </h3>

              <p>
                La Maison du Canal est devenue un repère pour les habitants de la région.
                Un lieu où l'on aime revenir, où l'on célèbre les moments simples de la vie.
                Le canal coule toujours au même rythme, et nous continuons d'accueillir ceux
                qui cherchent un moment de pause et de partage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image d'archive */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/photos/histoire-ancienne.jpg"
                alt="La maison éclusière au début du XXe siècle"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-canal-slate text-sm mt-4">
              La maison éclusière au début du XXe siècle
            </p>
          </div>
        </div>
      </section>

      {/* Section Avis */}
      <ReviewsCarousel />

      {/* CTA */}
      <section className="py-16 bg-canal-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Venez écrire la suite avec nous
            </h2>
            <p className="text-white/70 mb-6">
              Chaque jour, de nouvelles histoires s'écrivent à La Maison du Canal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+3256914285" className="btn-primary">
                Réserver
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
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
