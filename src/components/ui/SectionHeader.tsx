'use client'
import { FadeInView } from '@/lib/motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  dark?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const isCenter = align === 'center'
  return (
    <FadeInView>
      <div className={`mb-14 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2 className={dark ? 'text-3xl md:text-4xl font-bold tracking-tight text-white mb-4' : 'section-title'}>
          {title}
        </h2>
        {subtitle && (
          <p className={`section-subtitle ${isCenter ? 'mx-auto' : ''} ${dark ? 'text-navy-300' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeInView>
  )
}
