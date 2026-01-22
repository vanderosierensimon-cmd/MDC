'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'

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
    <div className="flex gap-0.5" role="img" aria-label="5 étoiles sur 5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-canal-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex-[0_0_320px] md:flex-[0_0_380px] mx-3"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 h-full border border-canal-sand/40 transition-all duration-500"
        style={{
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06), 0 12px 24px rgba(0, 0, 0, 0.08)'
        }}
      >
        <Stars />

        <blockquote className="text-canal-charcoal/80 leading-relaxed my-4 text-sm">
          "{review.text}"
        </blockquote>

        <div className="flex items-center gap-3 pt-3 border-t border-canal-sand/50">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-canal-gold to-canal-gold-dark flex items-center justify-center shadow-md"
          >
            <span className="text-white font-semibold text-xs">
              {review.author.split(' ').map(n => n[0]).join('')}
            </span>
          </motion.div>
          <span className="font-medium text-canal-navy text-sm">{review.author}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-12 bg-canal-mist overflow-hidden" aria-label="Avis de nos visiteurs">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-canal-navy mb-2">
            Ce que disent nos visiteurs
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-canal-gold to-canal-gold-dark mx-auto mt-4 rounded-full" />
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradients de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-canal-mist to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-canal-mist to-transparent z-10 pointer-events-none" />

        {/* Carrousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>

        {/* Contrôles */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-canal-navy hover:bg-canal-gold hover:text-white transition-all duration-300 focus-ring"
            aria-label="Avis précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Dots indicateurs */}
          <div className="flex gap-2" role="tablist" aria-label="Navigation des avis">
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full focus-ring ${
                  index === selectedIndex
                    ? 'w-8 h-2 bg-canal-gold'
                    : 'w-2 h-2 bg-canal-slate/30 hover:bg-canal-slate/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Aller à l'avis ${index + 1}`}
                role="tab"
                aria-selected={index === selectedIndex}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-canal-navy hover:bg-canal-gold hover:text-white transition-all duration-300 focus-ring"
            aria-label="Avis suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
