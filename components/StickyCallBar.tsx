'use client'

import { usePathname } from 'next/navigation'

export default function StickyCallBar() {
  const pathname = usePathname()
  if (pathname === '/carte') return null

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/90 backdrop-blur-md border-t border-canal-sand/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href="tel:+3256914285"
        className="btn-primary w-full justify-center text-sm py-3"
        aria-label="Appeler La Maison du Canal : 056 91 42 85"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Appeler · 056 91 42 85
      </a>
    </div>
  )
}
