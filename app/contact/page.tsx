import type { Metadata } from 'next'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez La Maison du Canal à Leers-Nord : ouvert tous les jours de 11h à 21h, téléphone 056 91 42 85, parking gratuit.',
  openGraph: {
    title: 'Contact | La Maison du Canal',
    description: 'Rue du Canal 6, 7730 Leers-Nord. Ouvert tous les jours 11h-21h.',
  },
}

const faq = [
  {
    question: "La Maison du Canal est-elle un restaurant ou un estaminet ?",
    answer: "Les deux ! La Maison du Canal est un restaurant apprécié pour sa cuisine généreuse et un estaminet dans l'esprit : un lieu où l'on se retrouve, où l'on prend le temps de vivre."
  },
  {
    question: "Peut-on venir après une balade ou une activité nautique ?",
    answer: "Absolument ! C'est même l'une de nos vocations. Que vous arriviez à pied, à vélo ou après une session de pédalo, vous êtes les bienvenus."
  },
  {
    question: "Y a-t-il du choix en bières ?",
    answer: "Oui, nous proposons un large choix de bières belges en pression et en bouteille."
  },
  {
    question: "Le parking est-il gratuit ?",
    answer: "Oui, un parking gratuit est disponible à proximité immédiate du restaurant."
  },
  {
    question: "Acceptez-vous les groupes ?",
    answer: "Oui, nous accueillons les groupes avec plaisir. Contactez-nous par téléphone pour organiser votre réservation."
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-canal-navy">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canal-cream to-transparent" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nous trouver
          </h1>
          <p className="text-lg text-white/80">
            Au bord du canal, entre Belgique et France
          </p>
        </div>
      </section>

      {/* Informations principales */}
      <section className="py-16 bg-canal-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Coordonnées */}
              <div>
                <h2 className="text-2xl font-bold text-canal-navy mb-8">
                  Informations pratiques
                </h2>

                <div className="space-y-6">
                  {/* Adresse */}
                  <div>
                    <h3 className="font-bold text-canal-navy mb-2">Adresse</h3>
                    <p className="text-canal-charcoal/80">
                      Rue du Canal 6<br />
                      7730 Leers-Nord<br />
                      Commune d'Estaimpuis<br />
                      Belgique
                    </p>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <h3 className="font-bold text-canal-navy mb-2">Téléphone</h3>
                    <a
                      href="tel:+3256914285"
                      className="text-2xl font-bold text-canal-gold hover:text-canal-gold-dark transition-colors"
                    >
                      056 91 42 85
                    </a>
                    <p className="text-canal-slate text-sm mt-1">
                      Depuis la France : +32 56 91 42 85
                    </p>
                  </div>

                  {/* Horaires */}
                  <div>
                    <h3 className="font-bold text-canal-navy mb-2">Horaires</h3>
                    <p className="text-canal-charcoal/80">
                      <span className="font-semibold">Tous les jours</span><br />
                      <span className="text-2xl font-bold text-canal-navy">11h - 21h</span>
                    </p>
                  </div>

                  {/* Réservation */}
                  <div className="bg-white rounded-xl p-5">
                    <h3 className="font-bold text-canal-navy mb-2">Réservations</h3>
                    <p className="text-canal-charcoal/70 text-sm mb-4">
                      Par téléphone uniquement.
                    </p>
                    <a
                      href="tel:+3256914285"
                      className="btn-primary w-full justify-center text-sm"
                    >
                      Nous appeler
                    </a>
                  </div>
                </div>
              </div>

              {/* Accès */}
              <div>
                <h2 className="text-2xl font-bold text-canal-navy mb-8">
                  Comment venir
                </h2>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5">
                    <h3 className="font-bold text-canal-navy mb-2">En voiture</h3>
                    <p className="text-canal-charcoal/70 text-sm">
                      Parking gratuit à proximité immédiate du restaurant.
                      Accès facile depuis Tournai, Mouscron, Lille et Roubaix.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-5">
                    <h3 className="font-bold text-canal-navy mb-2">À vélo</h3>
                    <p className="text-canal-charcoal/70 text-sm">
                      Directement accessible via les itinéraires RAVeL.
                      Un espace est disponible pour garer les vélos.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-5">
                    <h3 className="font-bold text-canal-navy mb-2">À pied</h3>
                    <p className="text-canal-charcoal/70 text-sm">
                      Le chemin de halage longe le canal et mène directement à notre terrasse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps pleine largeur */}
      <section className="h-80 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.7954288954287!2d3.2825634!3d50.7158333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329e8a8a8a8a8%3A0x1234567890abcdef!2sRue%20du%20Canal%206%2C%207730%20Leers-Nord!5e0!3m2!1sfr!2sbe!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de La Maison du Canal"
        />
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-canal-navy mb-8 text-center">
              Questions fréquentes
            </h2>
            <FAQAccordion items={faq} />
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
              On vous attend !
            </h2>
            <p className="text-white/70 mb-6">
              Venez profiter d'un moment de convivialité au bord du canal.
            </p>
            <a href="tel:+3256914285" className="btn-primary">
              056 91 42 85
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
