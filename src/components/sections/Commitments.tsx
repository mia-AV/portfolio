'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { commitments } from '@/data/content'
import { getIcon } from '@/lib/icons'

export default function Commitments() {
  return (
    <section id="engagements" className="section-padding bg-white">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Ma façon de travailler"
          title="Des engagements concrets, pas des promesses"
          subtitle="Une collaboration repose sur la confiance. Voici ce sur quoi vous pouvez compter au quotidien."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {commitments.map((item, i) => {
            const Icon = getIcon(item.iconName)
            return (
              <StaggerItem key={i}>
                <div className="card-trust">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 icon-tile">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-accent-600/80">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
