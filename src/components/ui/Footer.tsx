'use client'
import { Mail, Phone, Linkedin, Heart, MessageCircle, ArrowUpRight } from 'lucide-react'
import { navLinks, siteConfig, whatsappUrl } from '@/data/site'
import { trackEmail, trackPhone, trackWhatsApp, trackLinkedIn, trackCTA } from '@/lib/analytics'
import BookCallButton from '@/components/ui/BookCallButton'

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Texture + profondeur */}
      <div
        className="absolute inset-0 bg-grid-light opacity-25"
        style={{ backgroundSize: '34px 34px' }}
        aria-hidden="true"
      />
      <div className="absolute -top-32 right-1/4 w-[32rem] h-[32rem] bg-accent-500/10 rounded-full blur-[130px]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* --- Bande d'appel : statement éditorial --- */}
        <div className="py-16 md:py-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300 mb-6">
                <span className="w-8 h-px bg-accent-400" aria-hidden="true" />
                Disponible pour de nouvelles missions
              </p>
              <h2 className="text-display text-balance text-4xl md:text-6xl font-bold tracking-tight">
                Concentrez-vous sur l&apos;essentiel.
                <span className="block text-navy-500">Je m&apos;occupe du reste.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a
                href="#contact"
                onClick={() => trackCTA('demarrer_collaboration', 'footer')}
                className="btn-primary group !bg-white !text-navy-900 hover:!bg-navy-100"
              >
                Démarrer une collaboration
                <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <BookCallButton
                source="footer"
                className="btn-secondary !bg-transparent !text-white !border-white/25 hover:!bg-white/10 hover:!border-white/40"
              />
            </div>
          </div>
        </div>

        {/* --- Colonnes d'information --- */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/10 text-white text-sm font-bold">
                M
              </span>
              <div className="leading-tight">
                <span className="block text-base font-bold">{siteConfig.fullName}</span>
                <span className="block text-xs text-navy-400">{siteConfig.role}</span>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed max-w-sm">
              Gestion administrative, suivi client et back-office pour les entreprises francophones.
              Fiable, organisée et disponible.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold text-navy-300 uppercase tracking-widest mb-4">
              Navigation
            </h2>
            <nav className="space-y-2.5" aria-label="Navigation du pied de page">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-navy-400 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold text-navy-300 uppercase tracking-widest mb-4">
              Contact
            </h2>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() => trackEmail('footer')}
                className="flex items-center gap-3 text-sm text-navy-400 hover:text-white transition-colors break-all group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail size={15} aria-hidden="true" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                onClick={() => trackPhone('footer')}
                className="flex items-center gap-3 text-sm text-navy-400 hover:text-white transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Phone size={15} aria-hidden="true" />
                </span>
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  onClick={() => trackWhatsApp('footer')}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-navy-300 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={() => trackLinkedIn('footer')}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-navy-300 hover:bg-accent-600 hover:text-white hover:border-accent-600 transition-colors"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 pt-2 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <p className="text-sm text-navy-500">
              &copy; {new Date().getFullYear()} {siteConfig.fullName}. Tous droits réservés.
            </p>
            <p className="text-sm text-navy-500 flex items-center gap-1.5">
              Fait avec <Heart size={13} className="text-red-400 fill-red-400" aria-hidden="true" /> depuis Antananarivo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
