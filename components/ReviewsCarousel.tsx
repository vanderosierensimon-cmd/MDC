'use client'

interface Review {
  id: number
  author: string
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Marie-Claire D.",
    text: "Un cadre enchanteur au bord du canal. La terrasse est un vrai havre de paix. Les planches sont généreuses et les bières bien fraîches. On reviendra !",
  },
  {
    id: 2,
    author: "Philippe L.",
    text: "Excellent accueil, cuisine savoureuse et ambiance chaleureuse. Le filet américain est un délice. L'endroit parfait après une balade à vélo sur le RAVeL.",
  },
  {
    id: 3,
    author: "Isabelle & Marc",
    text: "Notre restaurant préféré de la région ! Le cadre est magnifique, surtout au coucher du soleil. Service impeccable et plats toujours au top.",
  },
  {
    id: 4,
    author: "Jean-François B.",
    text: "Une vraie pépite cachée au bord de l'eau. La terrasse face au canal est un bonheur. Cuisine généreuse et authentique.",
  },
  {
    id: 5,
    author: "Catherine V.",
    text: "Ambiance conviviale, carte variée et prix raisonnables. Les enfants ont adoré les pédalos juste à côté. Un dimanche parfait en famille !",
  },
  {
    id: 6,
    author: "Laurent M.",
    text: "Le pavé de boeuf est excellent et la sélection de bières belges impressionnante. Le personnel est aux petits soins.",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-canal-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] mx-3">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-canal-sand/30 h-full">
        <Stars />

        <blockquote className="text-canal-charcoal/80 leading-relaxed my-4 text-sm">
          "{review.text}"
        </blockquote>

        <div className="flex items-center gap-3 pt-3 border-t border-canal-sand/50">
          <div className="w-9 h-9 rounded-full bg-canal-gold flex items-center justify-center">
            <span className="text-white font-semibold text-xs">
              {review.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <span className="font-medium text-canal-navy text-sm">{review.author}</span>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsCarousel() {
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="py-12 bg-canal-mist overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-canal-navy mb-2">
            Ce que disent nos visiteurs
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-canal-mist to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-canal-mist to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-scroll"
          style={{ width: 'max-content' }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
