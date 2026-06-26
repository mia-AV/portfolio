// Intégration Calendly légère et centralisée.
//
// - Desktop : ouvre Calendly en popup (widget officiel chargé à la demande).
// - Mobile  : ouvre Calendly dans un nouvel onglet.
// - Repli   : si le widget ne se charge pas, ouverture dans un nouvel onglet.
//
// Les assets Calendly ne sont chargés qu'au premier clic → aucun impact sur
// les performances de chargement initial.

interface CalendlyGlobal {
  initPopupWidget?: (options: { url: string }) => void
}

declare global {
  interface Window {
    Calendly?: CalendlyGlobal
  }
}

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

let loadPromise: Promise<void> | null = null

/** Charge (une seule fois) le script et le style du widget Calendly. */
function loadCalendlyAssets(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('SSR'))
  if (window.Calendly?.initPopupWidget) return Promise.resolve()
  if (loadPromise) return loadPromise

  loadPromise = new Promise<void>((resolve, reject) => {
    if (!document.querySelector('link[data-calendly]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = WIDGET_CSS
      link.setAttribute('data-calendly', 'true')
      document.head.appendChild(link)
    }
    const script = document.createElement('script')
    script.src = WIDGET_JS
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Calendly load error'))
    document.body.appendChild(script)
  })

  return loadPromise
}

function openInNewTab(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Ouvre Calendly selon le contexte (popup desktop / nouvel onglet mobile).
 * Dégradation gracieuse en cas d'échec de chargement du widget.
 */
export function openCalendly(url: string) {
  if (typeof window === 'undefined') return

  const isMobile = window.matchMedia('(max-width: 767px)').matches
  if (isMobile) {
    openInNewTab(url)
    return
  }

  loadCalendlyAssets()
    .then(() => {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({ url })
      } else {
        openInNewTab(url)
      }
    })
    .catch(() => openInNewTab(url))
}
