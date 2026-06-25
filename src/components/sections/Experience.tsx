'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { Briefcase, MapPin } from 'lucide-react'
import { experiences } from '@/data/content'

export default function Experience() {
  return (
    <section id="experiences" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Halo de profondeur discret */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-100/30 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <SectionHeader
          eyebrow="Mon parcours"
          title="Expériences professionnelles"
          subtitle="Quatre ans en assistanat, relation client et suivi opérationnel pour des comptes francophones."
        />

        <div className="relative">
          {/* Ligne de la timeline */}
          <div
            className="absolute left-[15px] md:left-1/2 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-navy-200 to-transparent md:-translate-x-px"
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-10 md:space-y-14">
            {experiences.map((exp, i) => {
              const leftSide = i % 2 === 0
              return (
                <StaggerItem key={i}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-6 ${
                      leftSide ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Marqueur */}
                    <div
                      className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 z-10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute w-8 h-8 rounded-full bg-accent-400/20 animate-ping-slow" />
                      <span className="relative w-8 h-8 rounded-full bg-white border border-slate-200 shadow-soft flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                      </span>
                    </div>

                    {/* Carte */}
                    <div className={`pl-12 md:pl-0 md:w-1/2 ${leftSide ? 'md:pr-14' : 'md:pl-14'}`}>
                      <div className="card-premium p-6">
                        {/* Période en pastille */}
                        <span className="inline-flex items-center px-2.5 py-1 mb-3 rounded-full bg-navy-50 border border-navy-100 text-[11px] font-semibold uppercase tracking-wide text-navy-600">
                          {exp.period}
                        </span>
                        <div className="flex items-start gap-3 mb-1">
                          <span className="flex-shrink-0 w-9 h-9 mt-0.5 icon-tile">
                            <Briefcase size={16} aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-navy-900 leading-tight">{exp.company}</h3>
                            <p className="text-sm font-medium text-accent-700">{exp.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-2 mb-3">
                          <MapPin size={12} aria-hidden="true" />
                          {exp.location}
                        </div>
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                        <ul className="space-y-2 pt-3 border-t border-slate-100">
                          {exp.tasks.map((task, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-xs text-slate-500">
                              <span
                                className="w-1.5 h-1.5 mt-1 rounded-full bg-accent-300 flex-shrink-0"
                                aria-hidden="true"
                              />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
