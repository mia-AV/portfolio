'use client'
import { motion } from 'framer-motion'
import { MapPin, Download, Mail, MessageCircle, Clock, Globe, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { siteConfig, whatsappUrl } from '@/data/site'
import { heroBadges } from '@/data/content'
import { getIcon } from '@/lib/icons'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Couches d'arrière-plan pour la profondeur */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-slate-100" />
      <div
        className="absolute inset-0 bg-grid-navy opacity-60"
        style={{ backgroundSize: '34px 34px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)' }}
        aria-hidden="true"
      />
      <div className="absolute -top-20 right-0 w-[32rem] h-[32rem] bg-accent-200/30 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 -left-20 w-[28rem] h-[28rem] bg-navy-200/40 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Colonne texte */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/70 backdrop-blur-sm border border-green-200/80 rounded-full text-sm text-green-700 font-medium mb-7 shadow-soft"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Disponible pour de nouvelles missions
            </motion.div>

            <h1 className="text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-6xl lg:leading-[1.04] font-bold text-navy-900 tracking-tightest mb-6">
              Reprenez le contrôle de votre{' '}
              <span className="relative whitespace-nowrap text-navy-900">
                administratif
                <span
                  className="absolute -bottom-1 left-0 h-3 w-full bg-accent-200/60 -z-10 rounded"
                  aria-hidden="true"
                />
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-7 max-w-xl">
              Je suis <span className="font-semibold text-navy-800">{siteConfig.shortName}</span>, assistante
              virtuelle &amp; Customer Care. J&apos;accompagne les entreprises francophones dans leur gestion
              administrative et le suivi de leurs clients — pour que vous vous concentriez sur l&apos;essentiel.
            </p>

            <div className="flex items-center gap-2 text-slate-500 mb-8">
              <MapPin size={16} className="text-accent-600" aria-hidden="true" />
              <span className="text-sm">{siteConfig.location} · Clientèle francophone</span>
            </div>

            {/* CTA hiérarchisés */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <a href="#contact" className="btn-primary group">
                <Mail size={16} aria-hidden="true" />
                Discutons de votre projet
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp
              </a>
              <a href={siteConfig.cv} download className="btn-secondary">
                <Download size={16} aria-hidden="true" />
                Mon CV
              </a>
            </div>

            {/* Bandeau d'atouts avec séparateurs */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              {heroBadges.map((badge, i) => {
                const Icon = getIcon(badge.iconName)
                return (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-slate-200 shadow-soft">
                      <Icon size={14} className="text-accent-600" aria-hidden="true" />
                    </span>
                    {badge.label}
                  </li>
                )
              })}
            </motion.ul>
          </motion.div>

          {/* Colonne visuelle : cadre photo en couches */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Halo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-accent-200/40 via-navy-100/30 to-transparent rounded-[2.5rem] blur-2xl" aria-hidden="true" />
              {/* Cadre décalé navy (profondeur) */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2rem] border border-navy-200/70 bg-navy-50/40" aria-hidden="true" />
              {/* Photo */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-[24rem] lg:w-[22rem] lg:h-[27rem] rounded-[2rem] overflow-hidden ring-1 ring-navy-900/10 shadow-soft-xl">
                <Image
                  src="/images/photo-profil.jpg"
                  alt="Portrait de Mia Rasaholiarivelo, assistante virtuelle"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 352px"
                />
                {/* Voile dégradé bas pour ancrer les cartes flottantes */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent" aria-hidden="true" />
              </div>

              {/* Cartes flottantes */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft-lg border border-white/60"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50">
                    <Clock size={16} className="text-accent-600" aria-hidden="true" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-navy-900">{siteConfig.yearsOfExperience} ans</p>
                    <p className="text-[11px] text-slate-500">d&apos;expérience</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute top-6 -right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft-lg border border-white/60"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50">
                    <Globe size={16} className="text-green-600" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-navy-900">Francophone</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-navy-300/70 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 bg-navy-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
