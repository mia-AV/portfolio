'use client'

import { createContext, useContext, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

type ToastVariant = 'success' | 'error' | 'info'

interface ToastItem {
  id: number
  message: string
  variant: ToastVariant
}

interface ToastContextValue {
  toast: (message: string, variant?: ToastVariant) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast doit être utilisé dans un <ToastProvider>')
  return ctx
}

const variantConfig: Record<
  ToastVariant,
  { icon: typeof CheckCircle; accent: string; iconColor: string }
> = {
  success: { icon: CheckCircle, accent: 'border-l-green-500', iconColor: 'text-green-500' },
  error: { icon: AlertCircle, accent: 'border-l-red-500', iconColor: 'text-red-500' },
  info: { icon: Info, accent: 'border-l-accent-500', iconColor: 'text-accent-500' },
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    (message: string, variant: ToastVariant = 'info') => {
      const id = Date.now() + Math.random()
      setToasts((prev) => [...prev, { id, message, variant }])
      setTimeout(() => remove(id), 4000)
    },
    [remove],
  )

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Région de notifications accessible */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 z-[200] flex flex-col gap-2.5 w-[calc(100%-2rem)] sm:w-auto sm:max-w-sm pointer-events-none"
        role="region"
        aria-label="Notifications"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => {
            const { icon: Icon, accent, iconColor } = variantConfig[t.variant]
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.96 }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`pointer-events-auto flex items-start gap-3 bg-white border border-slate-100 border-l-4 ${accent} rounded-xl shadow-soft-lg px-4 py-3.5`}
                role="status"
                aria-live="polite"
              >
                <Icon size={18} className={`${iconColor} flex-shrink-0 mt-0.5`} aria-hidden="true" />
                <p className="text-sm text-navy-900 leading-snug flex-grow">{t.message}</p>
                <button
                  onClick={() => remove(t.id)}
                  className="flex-shrink-0 text-slate-400 hover:text-navy-700 transition-colors -mt-0.5 -mr-1 p-1 rounded-lg"
                  aria-label="Fermer la notification"
                >
                  <X size={15} aria-hidden="true" />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
