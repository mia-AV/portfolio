'use client'
import { CalendarCheck } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { openCalendly } from '@/lib/calendly'
import { trackBookCall } from '@/lib/analytics'

interface BookCallButtonProps {
  /** Origine du clic, pour l'analytics (ex : 'hero', 'contact', 'footer'). */
  source: string
  /** Classe du bouton — par défaut le style secondaire, cohérent avec le reste. */
  className?: string
  /** Libellé personnalisable. */
  label?: string
}

export default function BookCallButton({
  source,
  className = 'btn-secondary',
  label = 'Réserver un appel découverte',
}: BookCallButtonProps) {
  const handleClick = () => {
    trackBookCall(source)
    openCalendly(siteConfig.calendly)
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      <CalendarCheck size={16} aria-hidden="true" />
      {label}
    </button>
  )
}
