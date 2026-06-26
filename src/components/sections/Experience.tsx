'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { Briefcase, MapPin, Sparkles } from 'lucide-react'
import { experiences } from '@/data/content'

export default function Experience() {
  return (
    <section id="experiences" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-100/30 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <SectionHeader
          index="02"
          align="left"
          eyebrow="Mon parcours"
          title="Expériences professionnelles"
          subtitle="Quatre ans en assistanat, relation client et suivi opérationnel pour des comptes francophones."
        />

        <div className="relative">
          {/* Ligne de la timeline */}
          <div
            className="absolute left-[19px] md:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-300/60 via-navy-200 to-transparent"
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-6 md:space-y-8">
            {experiences.map((exp, i) => (
              <StaggerItem key={i}>
                <div className="relative pl-12 md:pl-20">
                  {/* Marqueur */}
                  <div
                    className="absolute left-0 top-1 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {exp.current && (
                      <span className="absolute w-10 h-10 rounded-full bg-accent-400/20 animate-ping-slow" />
                    )}
                    <span
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-soft ${
                        exp.current
                          ? 'bg-accent-500 text-white'
                          : 'bg-white border border-slate-200 text-accent-600'
                      }`}
                    >
                      <Briefcase size={16} aria-hidden="true" />
                    </span>
                  </div>

                  {/* Carte */}
                  <article
                    className={`card-premium p-6 md:p-7 ${
                      exp.current ? 'ring-1 ring-accent-200' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-[11px] font-semibold tracking-wide">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-[11px] font-semibold text-green-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                          En poste
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 tracking-tight">{exp.company}</h3>
                    <p className="text-sm font-medium text-accent-700 mb-2">{exp.role}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                      <MapPin size={13} aria-hidden="true" />
                      {exp.location}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>

                    {exp.result && (
                      <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-navy-50/70 border-l-2 border-accent-500">
                        <Sparkles size={16} className="mt-0.5 text-accent-600 flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm text-navy-800 leading-relaxed">
                          <span className="font-semibold">Résultat : </span>
                          {exp.result}
                        </p>
                      </div>
                    )}
                  </article>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
