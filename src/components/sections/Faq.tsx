'use client'
import { FadeInView, StaggerContainer, StaggerItem } from '@/lib/motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { faqs } from '@/data/content'
import { whatsappUrl } from '@/data/site'
import { trackWhatsApp } from '@/lib/analytics'

export default function Faq() {
  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      {/* Fond subtil */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-navy-50/50 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Colonne gauche — en-tête éditorial collé */}
          <FadeInView className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title !mb-5">Questions fréquentes</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Les réponses aux interrogations les plus courantes avant de démarrer une collaboration.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('faq')}
              className="btn-whatsapp hidden lg:inline-flex"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Une autre question ?
            </a>
          </FadeInView>

          {/* Colonne droite — accordéon premium */}
          <div className="lg:col-span-8">
            <StaggerContainer className="space-y-3">
              {faqs.map((faq, i) => (
                <StaggerItem key={i}>
                  <details className="group rounded-2xl border border-slate-100/80 bg-white transition-all duration-300 open:border-accent-200 open:shadow-soft-md hover:border-slate-200">
                    <summary className="flex items-start gap-4 cursor-pointer list-none px-6 py-5 select-none [&::-webkit-details-marker]:hidden">
                      {/* Numéro */}
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-navy-50 text-navy-600 text-xs font-bold mt-0.5 transition-colors duration-300 group-open:bg-accent-500 group-open:text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="flex-grow text-[15px] font-semibold text-navy-900 leading-snug pt-1">
                        {faq.question}
                      </h3>
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-slate-200 text-slate-400 transition-all duration-300 mt-0.5 group-open:rotate-180 group-open:border-accent-300 group-open:text-accent-600 group-open:bg-accent-50">
                        <ChevronDown size={16} aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pl-[4.5rem]">
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA WhatsApp — visible uniquement sur mobile, après l'accordéon */}
            <div className="mt-8 text-center lg:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('faq')}
                className="btn-whatsapp"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Une autre question ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
