'use client'
import { useState } from 'react'
import Image from 'next/image'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Lightbox from '@/components/ui/Lightbox'
import { Maximize2 } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

/** Cadre de téléphone premium réutilisable. */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[15rem]">
      <div className="relative rounded-[2.25rem] bg-navy-900 p-2.5 shadow-soft-xl ring-1 ring-navy-950/20">
        {/* Encoche */}
        <div
          className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-20 h-5 bg-navy-900 rounded-b-2xl"
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-100" style={{ aspectRatio: '9 / 19' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Si aucun témoignage n'est encore ajouté, la section est entièrement masquée.
  if (testimonials.length === 0) return null

  return (
    <section id="temoignages" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 w-80 h-80 bg-accent-100/30 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <SectionHeader
          align="left"
          eyebrow="Ils m'ont fait confiance"
          title="Ce qu'en disent mes clients"
          subtitle="Des retours authentiques, partagés directement par messagerie après nos collaborations."
        />

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((item, i) => (
                <StaggerItem key={i}>
                  <figure className="group">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(i)}
                      className="block w-full rounded-[2.25rem] transition-transform duration-300 hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
                      aria-label={`Agrandir le témoignage de ${item.client}`}
                    >
                      <PhoneFrame>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 320px"
                        />
                        {/* Overlay au survol */}
                        <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/25 transition-colors duration-300 flex items-center justify-center">
                          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-navy-900 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                            <Maximize2 size={18} aria-hidden="true" />
                          </span>
                        </div>
                      </PhoneFrame>
                    </button>
                    <figcaption className="mt-4 text-center">
                      <p className="text-sm font-semibold text-navy-900">{item.client}</p>
                      <p className="text-xs text-slate-500">
                        {item.company}
                        {item.company && item.date ? ' · ' : ''}
                        {item.date}
                      </p>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Lightbox
              items={testimonials}
              index={openIndex}
              onClose={() => setOpenIndex(null)}
              onNavigate={setOpenIndex}
            />
      </div>
    </section>
  )
}
