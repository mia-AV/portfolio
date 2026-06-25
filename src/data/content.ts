// Contenu éditorial centralisé : bénéfices, compétences, expériences, formations,
// témoignages, résultats et environnement de travail.
// Les données placeholder honnêtes sont marquées avec `isPlaceholder` afin
// d'être facilement repérables et remplaçables par de vraies données.
//
// NOTE : les icônes ne sont pas importées ici pour éviter tout conflit
// Server/Client Component. Chaque composant UI importe ses propres icônes.

export interface Benefit {
  iconName: string
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    iconName: 'Clock',
    title: 'Vous regagnez du temps',
    description:
      "Je prends en charge les tâches administratives et répétitives qui vous accaparent, pour que vous reveniez à votre cœur de métier.",
  },
  {
    iconName: 'Shield',
    title: "Vous gardez l'esprit tranquille",
    description:
      'Vos dossiers sont suivis, vos clients sont relancés, vos échéances sont tenues. Rien ne passe entre les mailles du filet.',
  },
  {
    iconName: 'Heart',
    title: 'Vous gagnez une partenaire fiable',
    description:
      "Rigoureuse, organisée et proactive, je m'engage sur un travail soigné, livré dans les délais convenus.",
  },
]

export interface HeroBadge {
  iconName: string
  label: string
}

export const heroBadges: HeroBadge[] = [
  { iconName: 'Clock', label: "4 ans d'expérience" },
  { iconName: 'Wifi', label: 'Travail à distance' },
  { iconName: 'Globe', label: 'Clientèle francophone' },
  { iconName: 'Shield', label: 'Fiable & autonome' },
]

export interface AboutHighlight {
  iconName: string
  title: string
  description: string
}

export const aboutHighlights: AboutHighlight[] = [
  { iconName: 'Clock', title: "4 ans d'expérience", description: 'En administratif et relation client' },
  { iconName: 'Globe', title: 'Français courant', description: 'Communication fluide et professionnelle' },
  { iconName: 'Wifi', title: 'Travail à distance', description: 'Équipée et habituée au remote' },
  { iconName: 'Briefcase', title: 'Freelance flexible', description: 'Mission ponctuelle ou au long cours' },
]

export const languages = [
  { name: 'Français', level: 'Courant', strong: true },
  { name: 'Anglais', level: 'Intermédiaire', strong: false },
  { name: 'Malgache', level: 'Langue maternelle', strong: false },
]

export interface SkillCategory {
  iconName: string
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    iconName: 'FileText',
    title: 'Gestion administrative',
    skills: [
      'Rédaction et mise en forme de documents',
      'Gestion des contrats et de la facturation',
      'Suivi des relances et des échéances',
      'Organisation et classement de dossiers',
      'Saisie et traitement de données',
    ],
  },
  {
    iconName: 'Users',
    title: 'Relation client & Customer Care',
    skills: [
      'Accueil et prise en charge des demandes',
      'Suivi des réclamations et des tickets',
      'Relances clients et fidélisation',
      'Gestion des emails et messageries',
      'Coordination entre les équipes',
    ],
  },
]

export const tools = [
  'Google Workspace', 'Microsoft Office', 'Notion', 'Trello', 'Slack',
  'Zoom', 'HubSpot', 'Salesforce', 'Canva', 'WhatsApp Business',
]

export const qualities = [
  { label: 'Organisation', note: 'Expertise' },
  { label: 'Communication', note: 'Expertise' },
  { label: 'Autonomie', note: 'Expertise' },
  { label: 'Réactivité', note: 'Maîtrise confirmée' },
] as const

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  tasks: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Mon Plan Immo',
    role: 'Assistante administrative & Suivi client',
    period: '2023 — Présent',
    location: 'Remote (France)',
    description:
      'Gestion des contrats, facturation, relances clients, suivi des dossiers et coordination administrative au quotidien.',
    tasks: [
      'Rédaction et envoi des contrats',
      'Suivi de la facturation et des relances',
      'Gestion des demandes clients',
      'Coordination avec les équipes internes',
    ],
  },
  {
    company: 'Acumen',
    role: 'Chargée de recrutement & Suivi opérationnel',
    period: '2022 — 2023',
    location: 'Antananarivo, Madagascar',
    description:
      'Recrutement de profils francophones, gestion des candidatures et suivi des intégrations.',
    tasks: [
      'Sourcing et présélection de candidats',
      'Gestion des entretiens et plannings',
      'Suivi des intégrations',
      'Reporting et mise à jour des bases',
    ],
  },
  {
    company: 'Eufonie Care',
    role: 'Customer Care Specialist',
    period: '2021 — 2022',
    location: 'Antananarivo, Madagascar',
    description:
      'Prise en charge des demandes clients par téléphone et email, résolution de problèmes et suivi qualité.',
    tasks: [
      'Gestion des appels entrants et emails',
      'Résolution de réclamations',
      'Suivi de la satisfaction client',
      'Mise à jour CRM',
    ],
  },
  {
    company: 'Intelcia',
    role: 'Conseillère clientèle',
    period: '2020 — 2021',
    location: 'Antananarivo, Madagascar',
    description:
      'Relation client pour des comptes francophones, gestion des demandes et fidélisation.',
    tasks: [
      'Accueil téléphonique',
      'Traitement des demandes et réclamations',
      'Ventes additionnelles',
      'Suivi des indicateurs qualité',
    ],
  },
]

export interface Formation {
  title: string
  institution: string
  period: string
}

export const formations: Formation[] = [
  {
    title: 'Formation en assistanat virtuel',
    institution: 'Formation en ligne certifiante',
    period: '2022',
  },
  {
    title: 'Formation en télévente & relation client',
    institution: 'Intelcia Academy',
    period: '2020',
  },
]

export interface WorkspaceItem {
  iconName: string
  title: string
  description: string
}

export const workspaceItems: WorkspaceItem[] = [
  {
    iconName: 'Monitor',
    title: 'Poste double écran',
    description:
      'Un setup professionnel pensé pour le multitâche et une productivité soutenue tout au long de la journée.',
  },
  {
    iconName: 'Wifi',
    title: 'Connexion Starlink',
    description:
      'Internet haut débit fiable, pour une présence stable en visio et un travail à distance sans coupure.',
  },
  {
    iconName: 'Zap',
    title: 'Générateur de secours',
    description:
      'Une continuité de service garantie, même en cas de coupure de courant. Vos échéances sont tenues.',
  },
]

export interface Commitment {
  iconName: string
  title: string
  description: string
}

export const commitments: Commitment[] = [
  {
    iconName: 'CalendarClock',
    title: 'Échéances tenues',
    description:
      'Un système de suivi structuré pour que contrats, factures et relances soient traités dans les temps.',
  },
  {
    iconName: 'MailCheck',
    title: 'Réponses rapides',
    description:
      'Une communication proactive : vous savez toujours où en sont vos dossiers, sans avoir à relancer.',
  },
  {
    iconName: 'ClipboardCheck',
    title: 'Travail soigné',
    description:
      'Des documents propres, des données fiables et une organisation claire que vous pouvez reprendre à tout moment.',
  },
]

export interface Testimonial {
  name: string
  role: string
  content: string
  isPlaceholder?: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sophie M.',
    role: 'Directrice — Mon Plan Immo',
    content:
      "Mia est d'une efficacité remarquable. Depuis qu'elle gère notre administratif, je peux enfin me concentrer sur le développement de mon activité.",
    isPlaceholder: true,
  },
  {
    name: 'Marc D.',
    role: 'Fondateur — Startup SaaS',
    content:
      "Fiable, réactive et toujours de bonne humeur. Mia est exactement l'assistante dont tout entrepreneur a besoin pour ne plus se noyer dans la paperasse.",
    isPlaceholder: true,
  },
  {
    name: 'Claire L.',
    role: 'Consultante indépendante',
    content:
      "Je recommande Mia les yeux fermés. Elle a su s'adapter à mes process rapidement et gère tout de manière autonome. Un vrai gain de temps.",
    isPlaceholder: true,
  },
]
