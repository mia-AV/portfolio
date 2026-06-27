'use client'
import { StaggerContainer, StaggerItem, RevealOnScroll } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { Check, ArrowRight, Star } from 'lucide-react'
import { services } from '@/data/content'
import { getIcon } from '@/lib/icons'
import { trackCTA } from '@/lib/analytics'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-premium">
        <SectionHeader
          index="01"
          align="left"
          eyebrow="Mes services"
          title="Ce que je peux gérer pour vous"
          subtitle="Des prestations concrètes, pensées pour libérer votre temps et fiabiliser votre organisation."
        />

        <RevealOnScroll width="full">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, i) => {
            const Icon = getIcon(service.iconName)
            return (
              <StaggerItem key={i}>
                <article className="card-feature h-full flex flex-col p-7 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-[3.25rem] h-[3.25rem] icon-tile flex-shrink-0">
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900">{service.title}</h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.description}</p>

                  {/* Missions incluses */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-400 mb-3">
                      Missions incluses
                    </p>
                    <ul className="space-y-2">
                      {service.missions.map((mission, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <Check size={15} className="mt-0.5 text-accent-600 flex-shrink-0" aria-hidden="true" />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outils utilisés */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-400 mb-3">
                      Outils utilisés
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.tools.map((tool, j) => (
                        <li
                          key={j}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bénéfice client */}
                  <div className="mt-auto flex items-start gap-3 p-4 rounded-xl bg-navy-50/70 border border-navy-100">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/10 flex items-center justify-center mt-0.5">
                      <Star size={13} className="text-accent-600" aria-hidden="true" />
                    </span>
                    <p className="text-sm text-navy-800 leading-relaxed">
                      <span className="font-semibold">Bénéfice : </span>
                      {service.benefit}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
        </RevealOnScroll>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            onClick={() => trackCTA('service_devis', 'services')}
            className="btn-primary group"
          >
            Discutons de vos besoins
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
