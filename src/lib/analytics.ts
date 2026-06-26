// Architecture analytics centralisée et réutilisable.
//
// Principe : tous les événements sont poussés dans le dataLayer de Google Tag
// Manager. GA4 est branché à l'intérieur de GTM (architecture GTM). Aucune
// donnée personnelle n'est transmise — uniquement le type d'action et sa source.
//
// Dégradation gracieuse : si GTM n'est pas chargé (variable manquante), les
// helpers ne font rien et ne lèvent aucune erreur.

type Primitive = string | number | boolean | undefined

declare global {
  interface Window {
    dataLayer?: Record<string, Primitive>[]
  }
}

// --- Configuration issue des variables d'environnement ---
export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? '',
} as const

export const isGtmEnabled = Boolean(analyticsConfig.gtmId)
export const isClarityEnabled = Boolean(analyticsConfig.clarityId)

/**
 * Pousse un événement dans le dataLayer GTM.
 * Sans effet côté serveur ou si GTM n'est pas configuré.
 */
export function pushEvent(event: string, params: Record<string, Primitive> = {}) {
  if (typeof window === 'undefined') return
  if (!isGtmEnabled) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

// --- Helpers d'événements (noms snake_case, compatibles GA4) ---

export const trackWhatsApp = (source: string) =>
  pushEvent('whatsapp_click', { contact_method: 'whatsapp', source })

export const trackEmail = (source: string) =>
  pushEvent('email_click', { contact_method: 'email', source })

export const trackPhone = (source: string) =>
  pushEvent('phone_click', { contact_method: 'phone', source })

export const trackLinkedIn = (source: string) =>
  pushEvent('linkedin_click', { contact_method: 'linkedin', source })

export const trackCvDownload = (source: string) =>
  pushEvent('cv_download', { source })

/** status : 'success' | 'error'. Aucune donnée personnelle n'est transmise. */
export const trackFormSubmit = (status: 'success' | 'error') =>
  pushEvent('form_submit', { status })

export const trackSectionView = (section: string) =>
  pushEvent('section_view', { section })

export const trackCTA = (label: string, source: string) =>
  pushEvent('cta_click', { cta_label: label, source })

export const trackBookCall = (source: string) =>
  pushEvent('book_call_click', { source })
