// Témoignages clients — captures d'écran réelles de recommandations reçues
// sur WhatsApp. Affichées dans un cadre premium avec zoom (lightbox).
//
// 📂 Captures dans : public/testimonials/
// ⚠️ N'ajoutez que de vrais témoignages, avec l'accord des personnes concernées.
// Tant que la liste est vide, la section Témoignages est entièrement masquée.

export interface Testimonial {
  /** Chemin de la capture depuis /public */
  image: string
  /** Texte alternatif accessible décrivant la capture */
  alt: string
  /** Nom (ou nom abrégé) de la personne */
  client: string
  /** Fonction / poste */
  role: string
  /** Ratio largeur/hauteur de la capture (toutes identiques : 1080×1490) */
  ratio?: number
}

export const testimonials: Testimonial[] = [
  {
    image: '/testimonials/temoignage-laura.jpg',
    alt: "Capture WhatsApp d'une recommandation de Laura B., Responsable Administratif : « investie, efficace et toujours prête à relever les défis ».",
    client: 'Laura B.',
    role: 'Responsable Administratif',
    ratio: 1080 / 1490,
  },
  {
    image: '/testimonials/temoignage-clara.jpg',
    alt: "Capture WhatsApp d'une recommandation de Clara R., Superviseur ADM : « une collaboratrice impliquée, sérieuse et investie ».",
    client: 'Clara R.',
    role: 'Superviseur ADM',
    ratio: 1080 / 1490,
  },
]
