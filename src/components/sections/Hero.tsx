'use client'
import { motion } from 'framer-motion'
import { MapPin, Mail, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/data/site'
import { heroBadges } from '@/data/content'
import { getIcon } from '@/lib/icons'
import { trackCTA, trackCvDownload } from '@/lib/analytics'
import BookCallButton from '@/components/ui/BookCallButton'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Couches d'arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-navy-50/40 to-slate-100" />
      <div
        className="absolute inset-0 bg-grid-navy opacity-50"
        style={{
          backgroundSize: '38px 38px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 65% 35%, black, transparent)',
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-24 -right-24 w-[34rem] h-[34rem] bg-accent-200/25 rounded-full blur-[130px]" aria-hidden="true" />
      <div className="absolute bottom-[-10rem] left-[-6rem] w-[30rem] h-[30rem] bg-navy-200/40 rounded-full blur-[130px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-28 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-6 items-center">
          {/* --- Colonne éditoriale --- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="order-2 lg:order-1 lg:col-span-7 lg:pr-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-500 mb-7"
            >
              <span className="w-8 h-px bg-accent-500" aria-hidden="true" />
              Assistante virtuelle &amp; Customer Care
            </motion.p>

            <h1 className="text-display text-balance text-[2.7rem] sm:text-5xl lg:text-[4rem] font-bold text-navy-900 mb-7">
              Reprenez le contrôle de votre{' '}
              <span className="relative inline-block">
                <span className="accent-word text-accent-700">administratif</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7C40 3 160 2 198 6"
                    stroke="#93c5fd"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Je suis <span className="font-semibold text-navy-800">{siteConfig.shortName}</span>. J&apos;accompagne
              les entreprises francophones dans leur gestion administrative et le suivi de leurs clients — pour que
              vous vous concentriez sur l&apos;essentiel.
            </p>

            <div className="flex items-center gap-2 text-slate-500 mb-9">
              <MapPin size={16} className="text-accent-600" aria-hidden="true" />
              <span className="text-sm">{siteConfig.location} · Clientèle francophone</span>
            </div>

            {/* CTA — trois actions, hiérarchisées */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
              <a href="#contact" className="btn-primary group" onClick={() => trackCTA('discutons_projet', 'hero')}>
                <Mail size={16} aria-hidden="true" />
                Discutons de votre projet
                <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <BookCallButton source="hero" />
              <a href={siteConfig.cv} download className="btn-secondary" onClick={() => trackCvDownload('hero')}>
                <Download size={16} aria-hidden="true" />
                Mon CV
              </a>
            </div>

            {/* Bandeau d'atouts — rythme éditorial en ligne */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 border-t border-navy-100"
            >
              {heroBadges.map((badge, i) => {
                const Icon = getIcon(badge.iconName)
                return (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Icon size={15} className="text-accent-600" aria-hidden="true" />
                    {badge.label}
                  </li>
                )
              })}
            </motion.ul>
          </motion.div>

          {/* --- Colonne visuelle : mise en scène éditoriale de la photo --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9, ease: EASE }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Arc d'accent en fond */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent-200/30 via-transparent to-navy-200/30 blur-2xl" aria-hidden="true" />

              {/* Cadre décalé (profondeur) */}
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[2.25rem] border border-navy-200/60" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-tl-[2.25rem] border-t-2 border-l-2 border-accent-300/70" aria-hidden="true" />

              {/* Photo */}
              <div className="relative w-[17rem] h-[21rem] sm:w-80 sm:h-[24rem] lg:w-[23rem] lg:h-[28rem] rounded-[2.25rem] overflow-hidden ring-1 ring-navy-900/10 shadow-soft-xl">
                <Image
                  src="/images/photo-profil.jpg"
                  alt="Portrait de Mia Rasaholiarivelo, assistante virtuelle"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 272px, (max-width: 1024px) 320px, 368px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-navy-300/70 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 bg-navy-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
