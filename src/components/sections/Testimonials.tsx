'use client'
import { useState } from 'react'
import Image from 'next/image'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Lightbox from '@/components/ui/Lightbox'
import { Check, Maximize2 } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Section masquée tant qu'aucun témoignage n'est renseigné.
  if (testimonials.length === 0) return null

  return (
    <section id="temoignages" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 w-80 h-80 bg-accent-100/30 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-navy-100/40 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <SectionHeader
          eyebrow="Ils m'ont fait confiance"
          title="Recommandations clients"
          subtitle="Des retours authentiques, reçus directement sur WhatsApp après nos collaborations. Cliquez pour agrandir."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="group">
                {/* Capture encadrée — clic pour agrandir */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="block w-full rounded-2xl overflow-hidden bg-white ring-1 ring-navy-900/10 shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-xl"
                  aria-label={`Agrandir la recommandation de ${t.client}`}
                >
                  <div className="relative w-full" style={{ aspectRatio: t.ratio ?? 1080 / 1490 }}>
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 360px"
                    />
                    {/* Overlay loupe au survol */}
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/15 transition-colors duration-300 flex items-center justify-center">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-navy-900 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <Maximize2 size={20} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>

                {/* Légende : auteur + origine */}
                <figcaption className="mt-4 flex items-center gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full text-white text-sm font-semibold"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                    aria-hidden="true"
                  >
                    {initials(t.client)}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-900">{t.client}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-[10.5px] font-semibold text-green-700">
                    <Check size={12} aria-hidden="true" />
                    WhatsApp
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <Lightbox
        items={testimonials}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  )
}
