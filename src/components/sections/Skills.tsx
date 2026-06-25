'use client'
import { FadeInView, StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { Check, Wrench, Star } from 'lucide-react'
import { skillCategories, tools, qualities } from '@/data/content'
import { getIcon } from '@/lib/icons'

export default function Skills() {
  return (
    <section id="competences" className="section-padding bg-white">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Mon expertise"
          title="Compétences & outils"
          subtitle="Les domaines que je prends en charge et les outils que j'utilise au quotidien."
        />

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {skillCategories.map((category, i) => {
            const Icon = getIcon(category.iconName)
            return (
              <StaggerItem key={i}>
                <div className="card-premium p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 icon-tile">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check size={16} className="mt-0.5 text-accent-600 flex-shrink-0" aria-hidden="true" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <FadeInView>
            <div className="card-premium p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 icon-tile">
                  <Wrench size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">Outils maîtrisés</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <li
                    key={i}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          <FadeInView delay={0.15}>
            <div className="card-premium p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 icon-tile">
                  <Star size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">Qualités professionnelles</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {qualities.map((quality, i) => (
                  <li
                    key={i}
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-xl bg-navy-50/60 border border-navy-100"
                  >
                    <span className="text-sm font-semibold text-navy-900">{quality.label}</span>
                    <span className="text-xs text-accent-600 font-medium">{quality.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
