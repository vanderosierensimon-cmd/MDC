'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-canal-navy text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Logo et description */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="inline-block mb-4 focus-ring rounded-lg" aria-label="La Maison du Canal - Retour à l'accueil">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/images/logos/logo-blanc.png"
                  alt="La Maison du Canal"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </motion.div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Restaurant au bord du canal de l'Espierre à Leers-Nord.
              Entre Belgique et France.
            </p>

            <div className="flex gap-3 mt-5">
              <motion.a
                href="https://www.facebook.com/lamaisonducanalbelgique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-canal-gold transition-all duration-300 focus-ring"
                aria-label="Suivez-nous sur Facebook"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/lamaisonducanal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-canal-gold transition-all duration-300 focus-ring"
                aria-label="Suivez-nous sur Instagram"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav variants={itemVariants} aria-label="Navigation du pied de page">
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Notre Histoire', href: '/histoire' },
                { name: 'Activités', href: '/activites' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-canal-gold transition-colors text-sm link-ripple focus-ring rounded px-1 py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Horaires */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Horaires</h3>
            <motion.p
              className="text-white font-medium text-lg mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Tous les jours
            </motion.p>
            <motion.p
              className="text-2xl font-bold text-canal-gold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              11h - 21h
            </motion.p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm">
              <div>
                <a
                  href="https://maps.google.com/?q=Rue+du+Canal+6,+7730+Leers-Nord,+Belgique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors focus-ring rounded px-1 py-0.5"
                >
                  Rue du Canal 6<br />
                  7730 Leers-Nord<br />
                  Belgique
                </a>
              </div>
              <div>
                <a
                  href="tel:+3256914285"
                  className="text-white/70 hover:text-white transition-colors font-medium focus-ring rounded px-1 py-0.5"
                >
                  056 91 42 85
                </a>
              </div>
            </address>

            <motion.a
              href="tel:+3256914285"
              className="mt-4 inline-block btn-primary text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="py-5 border-t border-white/10 text-center"
        >
          <p className="text-white/50 text-sm">
            © {currentYear} La Maison du Canal. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
