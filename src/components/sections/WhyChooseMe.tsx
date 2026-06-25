'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { benefits } from '@/data/content'
import { getIcon } from '@/lib/icons'

export default function WhyChooseMe() {
  return (
    <section id="atouts" className="section-padding bg-slate-50">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Pourquoi me confier votre administratif"
          title="Ce que vous y gagnez concrètement"
          subtitle="Déléguer ne se résume pas à libérer du temps. C'est retrouver de la sérénité et une organisation fiable."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = getIcon(benefit.iconName)
            return (
              <StaggerItem key={i}>
                <div className="card-feature h-full p-8">
                  <div className="w-14 h-14 mb-6 icon-tile">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
