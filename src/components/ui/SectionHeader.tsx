'use client'
import { FadeInView } from '@/lib/motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  dark?: boolean
  /** Numéro d'index éditorial (ex : « 01 ») affiché en filigrane. */
  index?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  index,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <FadeInView>
      <div className={`mb-14 md:mb-16 ${isCenter ? 'text-center' : 'text-left max-w-2xl'}`}>
        <div className={`flex items-end gap-4 ${isCenter ? 'justify-center' : ''}`}>
          {index && !isCenter && (
            <span className={`section-index ${dark ? '!text-white/10' : ''}`} aria-hidden="true">
              {index}
            </span>
          )}
          <div className={index && !isCenter ? 'pb-2' : ''}>
            {eyebrow && (
              <span className={`section-eyebrow ${dark ? '!text-accent-300' : ''}`}>{eyebrow}</span>
            )}
            <h2 className={dark ? 'text-3xl md:text-[2.5rem] md:leading-[1.15] font-bold tracking-tight text-white mb-0' : 'section-title !mb-0'}>
              {title}
            </h2>
          </div>
        </div>
        {subtitle && (
          <p
            className={`section-subtitle mt-4 ${isCenter ? 'mx-auto' : ''} ${dark ? 'text-navy-300' : ''}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </FadeInView>
  )
}
