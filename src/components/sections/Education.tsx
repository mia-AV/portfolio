'use client'
import { FadeInView } from '@/lib/motion'
import { GraduationCap } from 'lucide-react'
import { formations } from '@/data/content'

// Section secondaire et discrète : la formation appuie la crédibilité sans
// ralentir le parcours de conversion.
export default function Education() {
  return (
    <section className="px-5 sm:px-6 lg:px-8 py-14 bg-white border-t border-slate-100">
      <div className="container-premium">
        <FadeInView>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-1/4">
              <span className="section-eyebrow">Formation</span>
              <h2 className="text-xl font-bold text-navy-900">Mon parcours de formation</h2>
            </div>
            <ul className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formations.map((formation, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <div className="flex-shrink-0 w-9 h-9 icon-tile bg-white">
                    <GraduationCap size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 leading-snug">
                      {formation.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {formation.institution} · {formation.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
