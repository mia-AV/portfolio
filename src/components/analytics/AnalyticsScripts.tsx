import Script from 'next/script'
import { analyticsConfig, isGtmEnabled, isClarityEnabled } from '@/lib/analytics'

/**
 * Charge GTM et Microsoft Clarity via la stratégie `afterInteractive` de
 * Next.js : les scripts ne bloquent pas le rendu initial.
 *
 * GA4 est configuré à l'intérieur du conteneur GTM (architecture GTM).
 * Chaque script ne s'affiche que si sa variable d'environnement est présente.
 */
export function AnalyticsScripts() {
  const { gtmId, clarityId } = analyticsConfig

  return (
    <>
      {isGtmEnabled && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}

      {isClarityEnabled && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      )}
    </>
  )
}

/**
 * Fallback `<noscript>` de GTM, à placer immédiatement après l'ouverture
 * de <body>. Sans effet si GTM n'est pas configuré.
 */
export function GtmNoScript() {
  if (!isGtmEnabled) return null
  const { gtmId } = analyticsConfig
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
