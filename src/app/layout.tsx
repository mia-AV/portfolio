import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/data/site'
import { ToastProvider } from '@/components/ui/Toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      'Mia Rasaholiarivelo — Assistante Virtuelle & Customer Care | Gestion Administrative à Distance',
    template: '%s | Mia Rasaholiarivelo',
  },
  description:
    'Assistante virtuelle freelance spécialisée en gestion administrative, customer care et suivi client pour PME, agences et organismes de formation francophones. Basée à Madagascar, disponible immédiatement.',
  keywords: [
    'assistante virtuelle',
    'assistante administrative',
    'customer care',
    'gestion administrative à distance',
    'relation client',
    'freelance administratif',
    'assistante virtuelle Madagascar',
    'back-office',
    'suivi client',
    'PME',
    'organismes de formation',
    'travail à distance',
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mia Rasaholiarivelo — Assistante Virtuelle & Customer Care',
    description:
      'Assistante virtuelle freelance pour entreprises francophones : gestion administrative, customer care et suivi client.',
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: 'Mia Rasaholiarivelo — Assistante Virtuelle',
    images: [
      {
        // Placeholder : remplacer par une image dédiée 1200x630 px
        // (ex : /images/og-image.jpg) pour un rendu optimal sur les réseaux.
        url: '/images/photo-profil.jpg',
        width: 1200,
        height: 630,
        alt: 'Mia Rasaholiarivelo — Assistante Virtuelle & Customer Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mia Rasaholiarivelo — Assistante Virtuelle & Customer Care',
    description:
      'Assistante virtuelle freelance pour entreprises francophones : gestion administrative, customer care et suivi client.',
    images: ['/images/photo-profil.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.fullName,
  alternateName: siteConfig.shortName,
  jobTitle: 'Assistante virtuelle & Customer Care',
  description:
    'Assistante virtuelle freelance spécialisée en gestion administrative, customer care et suivi client pour entreprises francophones.',
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antananarivo',
    addressCountry: 'MG',
  },
  sameAs: [siteConfig.linkedin],
  knowsLanguage: ['fr', 'en', 'mg'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu principal
        </a>
        <ToastProvider>{children}</ToastProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
