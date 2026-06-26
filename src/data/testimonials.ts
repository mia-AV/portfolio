// Témoignages clients sous forme de captures d'écran WhatsApp.
//
// 📂 Déposez vos captures dans : public/testimonials/
// puis ajoutez une entrée ci-dessous pour chaque image.
//
// Exemple :
// {
//   image: '/testimonials/whatsapp-1.jpg',
//   alt: 'Message de remerciement d’une cliente satisfaite',
//   client: 'Sophie M.',
//   company: 'Mon Plan Immo',
//   date: 'Mars 2024',
// }
//
// ⚠️ N'ajoutez que de vrais témoignages (avec l'accord des personnes concernées).
// Tant que cette liste est vide, des emplacements élégants « à venir » sont affichés.

export interface Testimonial {
  /** Chemin de l'image depuis /public (ex : /testimonials/whatsapp-1.jpg) */
  image: string
  /** Texte alternatif accessible décrivant la capture */
  alt: string
  /** Nom (ou initiale) du client */
  client: string
  /** Entreprise du client */
  company: string
  /** Date du témoignage (ex : « Mars 2024 ») */
  date: string
}

export const testimonials: Testimonial[] = [
  // Ajoutez vos vrais témoignages ici une fois les captures déposées.
]

/** Nombre d'emplacements premium affichés tant qu'aucune capture n'est fournie. */
export const PLACEHOLDER_COUNT = 3
