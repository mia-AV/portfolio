'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { processSteps } from '@/data/content'
import { getIcon } from '@/lib/icons'

export default function Process() {
  return (
    <section id="collaboration" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-accent-100/30 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <SectionHeader
          eyebrow="Comment ça se passe"
          title="Comment se déroule une collaboration ?"
          subtitle="Un processus simple et transparent, pensé pour vous mettre en confiance dès le premier contact."
        />

        <div className="relative">
          {/* Ligne horizontale (desktop) */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent"
            aria-hidden="true"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = getIcon(step.iconName)
              return (
                <StaggerItem key={i}>
                  <div className="relative text-center lg:px-3">
                    {/* Pastille numérotée */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <span className="flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-2xl bg-white border border-slate-100 shadow-soft-md">
                        <Icon size={30} className="text-accent-600" aria-hidden="true" />
                      </span>
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-navy-900 text-white text-xs font-bold shadow-soft">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
