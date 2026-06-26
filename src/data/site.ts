// Informations centrales du site — point unique de vérité pour les coordonnées,
// l'identité et les liens. Facilite la maintenance et évite la duplication.

export const siteConfig = {
  name: 'Mia Rasaholiarivelo',
  fullName: 'Tsanta Miarintsoa Rasaholiarivelo',
  shortName: 'Mia',
  role: 'Assistante virtuelle & Customer Care',
  location: 'Antananarivo, Madagascar',
  timezone: 'GMT+3 (Antananarivo)',
  availability: 'Disponible du lundi au vendredi',
  // URL de production (issue de NEXT_PUBLIC_SITE_URL, repli si absente).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-sigma-two-c8oa4be84r.vercel.app',
  email: 'mrasaholiarivelo@gmail.com',
  phone: '+261 34 14 507 30',
  phoneRaw: '261341450730',
  linkedin: 'https://www.linkedin.com/in/rasaholiarivelo',
  linkedinLabel: 'linkedin.com/in/rasaholiarivelo',
  whatsapp: 'https://wa.me/261341450730',
  // Message WhatsApp pré-rempli (encodé à l'usage).
  whatsappMessage:
    "Bonjour Mia,\n\nJe souhaite échanger avec vous concernant une mission d'assistance administrative.",
  // Lien Calendly pour réserver un appel découverte (surchargeable via env).
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/mrasaholiarivelo/30min',
  cv: '/docs/cv-mia.pdf',
  yearsOfExperience: 4,
  // Identifiant Formspree pour l'envoi du formulaire de contact.
  formspreeId: 'mpqgppjw',
} as const

// URL WhatsApp avec message pré-rempli, prête à l'emploi.
export const whatsappUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Services', href: '#services' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Parcours', href: '#experiences' },
  { label: 'Contact', href: '#contact' },
] as const
