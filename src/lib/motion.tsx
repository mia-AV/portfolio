'use client'

import { motion, useInView, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.25, 0.46, 0.45, 0.94] as const
const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const

type Direction = 'up' | 'down' | 'left' | 'right'

// --- BASIC FADE IN (scroll-triggered) ---
export function FadeInView({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  }
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration: 0.7, delay, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  )
}

// --- STAGGER CONTAINER (children animate in sequence) ---
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
    >
      {children}
    </motion.div>
  )
}

// --- STAGGER ITEM ---
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_SMOOTH } },
      }}
    >
      {children}
    </motion.div>
  )
}

// --- REVEAL ON SCROLL (scale + fade, premium studio effect) ---
export function RevealOnScroll({
  children,
  className = '',
  width = 'fit',
}: {
  children: React.ReactNode
  className?: string
  width?: 'fit' | 'full'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      className={`${width === 'full' ? 'w-full' : ''} ${className}`}
      initial={{ opacity: 0, scale: 0.96, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 40 }}
      transition={{ duration: 0.8, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  )
}

// --- PARALLAX SECTION (subtle depth on scroll) ---
export function ParallaxSection({
  children,
  className = '',
  offset = 40,
}: {
  children: React.ReactNode
  className?: string
  offset?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

// --- SLIDE IN FROM SIDE (for split layouts) ---
export function SlideIn({
  children,
  className = '',
  from = 'left',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  from?: 'left' | 'right'
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const xOffset = from === 'left' ? -50 : 50
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ duration: 0.8, delay, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  )
}

// --- SCALE ON SCROLL (grows as user scrolls past — great for images) ---
export function ScaleOnScroll({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1])

  return (
    <motion.div ref={ref} className={className} style={{ scale, opacity }}>
      {children}
    </motion.div>
  )
}
