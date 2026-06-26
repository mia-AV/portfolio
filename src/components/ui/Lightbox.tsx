'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

interface LightboxProps {
  items: Testimonial[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const isOpen = index !== null
  const current = isOpen ? items[index] : null

  const goPrev = useCallback(() => {
    if (index === null) return
    setZoomed(false)
    onNavigate((index - 1 + items.length) % items.length)
  }, [index, items.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    setZoomed(false)
    onNavigate((index + 1) % items.length)
  }, [index, items.length, onNavigate])

  // Navigation clavier + verrouillage du scroll
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose, goPrev, goNext])

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Témoignage ${index + 1} sur ${items.length}`}
          onClick={onClose}
        >
          {/* Fond */}
          <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm" aria-hidden="true" />

          {/* Barre d'actions */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z) }}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 transition-colors"
              aria-label={zoomed ? 'Dézoomer' : 'Zoomer'}
            >
              {zoomed ? <ZoomOut size={20} aria-hidden="true" /> : <ZoomIn size={20} aria-hidden="true" />}
            </button>
            <button
              ref={closeRef}
              onClick={(e) => { e.stopPropagation(); onClose() }}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 transition-colors"
              aria-label="Fermer"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Précédent / Suivant (desktop) */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="hidden sm:flex absolute left-4 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="hidden sm:flex absolute right-4 z-20 items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white border border-white/15 hover:bg-white/20 transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </>
          )}

          {/* Contenu : capture + légende */}
          <motion.div
            key={index}
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            drag={items.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onClick={(e) => e.stopPropagation()}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) goNext()
              else if (info.offset.x > 80) goPrev()
            }}
          >
            <motion.div
              className={`relative overflow-hidden rounded-[1.75rem] border-4 border-white/10 shadow-2xl bg-white ${
                zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              animate={{ scale: zoomed ? 1.35 : 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={() => setZoomed((z) => !z)}
              style={{ width: 'min(82vw, 22rem)' }}
            >
              <div className="relative w-full" style={{ aspectRatio: '9 / 19' }}>
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  className="object-cover select-none"
                  sizes="(max-width: 640px) 82vw, 22rem"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Légende */}
            <div className="mt-5 text-center text-white max-w-sm px-4">
              <p className="text-sm font-semibold">{current.client}</p>
              <p className="text-xs text-navy-300">
                {current.company}
                {current.company && current.date ? ' · ' : ''}
                {current.date}
              </p>
              {items.length > 1 && (
                <p className="mt-3 text-xs text-navy-400">
                  {index + 1} / {items.length}
                  <span className="sm:hidden"> · glissez pour naviguer</span>
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
