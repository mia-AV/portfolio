'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { workspaceItems } from '@/data/content'
import { getIcon } from '@/lib/icons'

export default function Workspace() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <SectionHeader
          dark
          eyebrow="Un remote sans compromis"
          title="Un environnement de travail fiable"
          subtitle="Équipée pour travailler efficacement et sans interruption, où que soient mes clients."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {workspaceItems.map((item, i) => {
            const Icon = getIcon(item.iconName)
            return (
              <StaggerItem key={i}>
                <div className="h-full p-8 rounded-2xl bg-navy-800/50 border border-navy-700/80 backdrop-blur-sm transition-all duration-300 hover:border-navy-600 hover:bg-navy-800/70">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-navy-700 flex items-center justify-center">
                    <Icon size={26} className="text-accent-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
