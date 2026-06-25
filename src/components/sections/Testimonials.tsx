'use client'
import { StaggerContainer, StaggerItem } from '@/lib/motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/content'

// Génère les initiales pour l'avatar à partir du nom.
function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="section-padding bg-slate-50">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Ils m'ont fait confiance"
          title="Ce que disent les personnes avec qui j'ai travaillé"
          subtitle="Des retours d'expérience de dirigeants et indépendants que j'ai accompagnés."
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <figure className="card-testimonial">
                <span className="font-serif text-5xl leading-none text-accent-200 mb-3" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="text-[15px] text-slate-600 leading-relaxed flex-grow mb-6 -mt-4">
                  {testimonial.content}
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #334e68, #102a43)' }}
                    aria-hidden="true"
                  >
                    {initials(testimonial.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
