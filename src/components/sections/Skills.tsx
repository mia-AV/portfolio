'use client'
import { FadeInView, StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { Check, Wrench, Star } from 'lucide-react'
import { skillCategories, toolGroups, qualities } from '@/data/content'
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Outils maîtrisés — regroupés par catégorie (sur 2 colonnes en desktop) */}
          <FadeInView className="lg:col-span-2">
            <div className="card-premium p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 icon-tile">
                  <Wrench size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">Outils maîtrisés</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {toolGroups.map((group, i) => (
                  <div key={i}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-400 mb-2.5">
                      {group.label}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <li
                          key={j}
                          className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Qualités professionnelles */}
          <FadeInView delay={0.15}>
            <div className="card-premium p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 icon-tile">
                  <Star size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">Qualités</h3>
              </div>
              <ul className="space-y-3">
                {qualities.map((quality, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-navy-50/60 border border-navy-100"
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
