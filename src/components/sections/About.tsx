'use client'
import { FadeInView, StaggerContainer, StaggerItem } from '@/lib/motion'
import { aboutHighlights, languages } from '@/data/content'
import { getIcon } from '@/lib/icons'

export default function About() {
  return (
    <section id="a-propos" className="section-padding bg-white">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Récit éditorial */}
          <FadeInView className="lg:col-span-7">
            <span className="section-eyebrow">À propos</span>
            <h2 className="section-title">Votre administratif, entre de bonnes mains</h2>
            <div className="space-y-5 mt-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Quand une activité se développe, l&apos;administratif finit souvent par déborder. Les contrats,
                les factures, les relances, les mails, les demandes clients… tout s&apos;accumule, et il ne reste
                plus de temps pour le reste.
              </p>
              <p className="text-lg font-semibold text-navy-800 leading-relaxed">
                C&apos;est exactement là que j&apos;interviens.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Assistante virtuelle et Customer Care, j&apos;accompagne les entreprises dans leur gestion
                administrative et le suivi de leurs clients. J&apos;ai commencé dans la relation client, puis je me
                suis tournée vers le recrutement et le suivi opérationnel.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Aujourd&apos;hui, je gère les contrats, la facturation, les relances, le suivi des demandes et la
                coordination administrative. En clair : tout ce qui permet à une activité de tourner correctement,
                pendant que vous vous concentrez sur l&apos;essentiel.
              </p>
            </div>

            <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xs font-semibold text-navy-800 uppercase tracking-widest mb-4">
                Langues
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${lang.strong ? 'bg-accent-600' : 'bg-navy-300'}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700">
                      {lang.name} —{' '}
                      {lang.strong ? <strong>{lang.level}</strong> : lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Atouts en colonne */}
          <StaggerContainer className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:mt-4">
            {aboutHighlights.map((item, i) => {
              const Icon = getIcon(item.iconName)
              return (
                <StaggerItem key={i}>
                  <div className="card-premium flex items-start gap-4 p-5">
                    <div className="flex-shrink-0 icon-tile w-11 h-11">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900 mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
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
