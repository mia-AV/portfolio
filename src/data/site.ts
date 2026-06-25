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
  // Remplacer par l'URL de production réelle une fois le site déployé.
  url: 'https://mia-assistante.com',
  email: 'mrasaholiarivelo@gmail.com',
  phone: '+261 34 14 507 30',
  phoneRaw: '261341450730',
  linkedin: 'https://www.linkedin.com/in/rasaholiarivelo',
  linkedinLabel: 'linkedin.com/in/rasaholiarivelo',
  whatsapp: 'https://wa.me/261341450730',
  // Message WhatsApp pré-rempli (encodé à l'usage).
  whatsappMessage:
    "Bonjour Mia,\n\nJe souhaite échanger avec vous concernant une mission d'assistance administrative.",
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
  { label: 'Atouts', href: '#atouts' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Parcours', href: '#experiences' },
  { label: 'Contact', href: '#contact' },
] as const
