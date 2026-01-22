'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Notre Histoire', href: '/histoire' },
    { name: 'Activités', href: '/activites' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Skip to content pour accessibilité */}
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-lg py-3'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent py-5'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navigation principale">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10 focus-ring rounded-lg" aria-label="La Maison du Canal - Accueil">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/logos/logo-blanc.png"
                  alt="La Maison du Canal"
                  width={120}
                  height={60}
                  className={`h-12 w-auto transition-all duration-500 ${
                    isScrolled ? 'brightness-0' : 'brightness-100'
                  }`}
                  priority
                />
              </motion.div>
            </Link>

            {/* Navigation desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 focus-ring rounded px-2 py-1 ${
                      isScrolled
                        ? 'text-canal-navy hover:text-canal-gold'
                        : 'text-white hover:text-canal-gold'
                    } ${isActive(item.href) ? 'font-bold' : ''}`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-canal-gold rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:+3256914285"
                className="btn-primary text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Réserver
              </motion.a>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 focus-ring rounded-lg"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-0.5 rounded-full origin-center ${
                    isScrolled ? 'bg-canal-navy' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scale: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`w-full h-0.5 rounded-full ${
                    isScrolled ? 'bg-canal-navy' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-0.5 rounded-full origin-center ${
                    isScrolled ? 'bg-canal-navy' : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Menu mobile avec animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-canal-navy"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center h-full gap-8 p-8"
            >
              <nav className="flex flex-col items-center gap-6" aria-label="Navigation mobile">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-white text-2xl font-semibold hover:text-canal-gold transition-colors focus-ring rounded-lg px-4 py-2 ${
                        isActive(item.href) ? 'text-canal-gold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.a
                href="tel:+3256914285"
                className="mt-4 btn-primary text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-8 text-center text-white/60 text-sm"
              >
                <p className="font-semibold text-white/80">056 91 42 85</p>
                <p className="mt-1">Rue du Canal 6, Leers-Nord</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
