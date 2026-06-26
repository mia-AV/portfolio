'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '@/data/site'
import { trackCTA } from '@/lib/analytics'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy : met en évidence la section visible dans la navigation.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    // Defer scroll to allow the mobile menu exit animation to complete
    // and the browser to release any overflow lock.
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(16,42,67,0.06),0_8px_30px_-16px_rgba(16,42,67,0.20)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#accueil"
            onClick={(e) => handleNavClick(e, '#accueil')}
            className="flex items-center gap-2.5 group"
            aria-label="Mia Rasaholiarivelo — retour à l'accueil"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-navy-900 text-white text-sm font-bold shadow-soft transition-transform duration-200 group-hover:scale-105">
              M
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-semibold text-navy-900">Mia Rasaholiarivelo</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Assistante Virtuelle</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? 'true' : undefined}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === link.href ? 'text-navy-900' : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-accent-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => { trackCTA('me_contacter', 'header'); handleNavClick(e, '#contact') }}
              className="btn-primary group !px-5 !py-2.5"
            >
              Me contacter
              <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-navy-900 bg-white/70 border border-slate-200/80 backdrop-blur-sm transition-colors hover:bg-white"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Navigation mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      activeSection === link.href
                        ? 'text-navy-900 bg-navy-50'
                        : 'text-slate-700 hover:text-navy-900 hover:bg-navy-50'
                    }`}
                  >
                    {link.label}
                    <ArrowRight size={16} className="text-slate-300" aria-hidden="true" />
                  </a>
                </motion.div>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={(e) => { trackCTA('me_contacter', 'header_mobile'); handleNavClick(e, '#contact') }}
                  className="btn-primary w-full justify-center"
                >
                  Me contacter
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
