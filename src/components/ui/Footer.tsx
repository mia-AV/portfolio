'use client'
import { Mail, Phone, Linkedin, Heart, MessageCircle, ArrowUpRight } from 'lucide-react'
import { navLinks, siteConfig, whatsappUrl } from '@/data/site'

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Texture de fond discrète */}
      <div
        className="absolute inset-0 bg-grid-light opacity-30"
        style={{ backgroundSize: '32px 32px' }}
        aria-hidden="true"
      />
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Identité */}
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
            <p className="text-sm text-navy-300 leading-relaxed max-w-sm mb-5">
              Gestion administrative, suivi client et back-office pour les entreprises francophones.
              Fiable, organisée et disponible.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-accent-400/50 pb-0.5 hover:border-accent-400 transition-colors"
            >
              Démarrer une collaboration
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Navigation */}
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

          {/* Contact */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold text-navy-300 uppercase tracking-widest mb-4">
              Contact
            </h2>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-navy-400 hover:text-white transition-colors break-all group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <Mail size={15} aria-hidden="true" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
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
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-navy-300 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-navy-300 hover:bg-accent-600 hover:text-white hover:border-accent-600 transition-colors"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
