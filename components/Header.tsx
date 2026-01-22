'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Notre Histoire', href: '/histoire' },
    { name: 'Activités', href: '/activites' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-gradient-to-b from-black/40 to-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logos/logo-blanc.png"
              alt="La Maison du Canal"
              width={120}
              height={60}
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'brightness-0' : 'brightness-100'
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-canal-navy hover:text-canal-gold'
                    : 'text-white hover:text-canal-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+3256914285"
              className="bg-canal-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-canal-gold-dark transition-colors"
            >
              Réserver
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-canal-navy' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-canal-navy' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-canal-navy' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 bg-canal-navy">
            <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-white"
                aria-label="Fermer"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col items-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-2xl font-semibold hover:text-canal-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <a
                href="tel:+3256914285"
                className="mt-4 bg-canal-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-canal-gold-dark transition-colors"
              >
                Réserver
              </a>

              <div className="absolute bottom-8 text-center text-white/60 text-sm">
                <p>056 91 42 85</p>
                <p className="mt-1">Rue du Canal 6, Leers-Nord</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
