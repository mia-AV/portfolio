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

// Outils maîtrisés, regroupés par catégorie (affichage section Compétences).
export interface ToolGroup {
  label: string
  items: string[]
}

export const toolGroups: ToolGroup[] = [
  { label: 'CRM', items: ['Salesforce', 'Pipedrive', 'Monday'] },
  { label: 'Facturation', items: ['Pennylane', 'PandaDoc'] },
  { label: 'Organisation', items: ['Notion', 'Trello', 'Google Agenda'] },
  { label: 'Communication', items: ['Slack', 'Teams', 'Discord', 'Telegram'] },
  { label: 'Téléphonie', items: ['Ringover', 'On-Off'] },
  { label: 'Bureautique', items: ['Google Workspace', 'Word', 'Excel', 'Zoom'] },
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
  result?: string
  current?: boolean
}

export const experiences: Experience[] = [
  {
    company: 'Mon Plan Immo',
    role: 'Assistante administrative & opérationnelle',
    period: 'Janvier 2026 — Juin 2026',
    location: 'À distance',
    description:
      'Je gère tout le back-office du quotidien : suivi des clients de la vente jusqu’à la fin de leur parcours, préparation et relance des contrats, création et suivi des factures, traitement des mails et des réclamations. Je centralise tous les documents pour que rien ne se perde, je coordonne les échanges avec les équipes et les prestataires, et j’ai mis en place mon propre système de relances pour ne jamais rien laisser passer.',
    result:
      'Un back-office qui tourne sans accroc, des délais respectés et une organisation que j’ai structurée moi-même au fil du temps.',
  },
  {
    company: 'Acumen Formation',
    role: 'Chargée de recrutement & relations entreprises',
    period: 'Mars 2025 — Juillet 2025',
    location: 'À distance',
    description:
      'Je recherchais et qualifiais des candidats, je menais les entretiens, et en parallèle je prospectais des entreprises pour comprendre leurs besoins en alternance. Mon rôle consistait à faire le lien entre les deux et à assurer le suivi jusqu’à la signature du contrat.',
    result:
      'Objectifs réguliers de 5 candidats qualifiés et 5 entreprises intéressées par jour, généralement atteints.',
  },
  {
    company: 'Eufonie Care',
    role: 'Téléprospectrice BtoB',
    period: 'Octobre 2024 — Février 2025',
    location: 'À distance',
    description:
      'Je réalisais jusqu’à 100 appels par jour auprès de responsables d’entreprises pour comprendre leurs besoins et présenter nos services. Je tenais aussi la base de données à jour et j’assurais le suivi des échanges — une expérience qui m’a appris à gérer un gros volume d’appels et à tenir le rythme.',
    result:
      'Une capacité confirmée à gérer un volume élevé d’appels quotidiens tout en maintenant un suivi rigoureux et une base de données fiable.',
  },
  {
    company: 'Intelcia / Adm Value',
    role: 'Conseillère clientèle & support',
    period: 'Janvier 2022 — Septembre 2024',
    location: 'Antananarivo, Madagascar',
    description:
      'Je répondais aux clients par téléphone, mail et chat — jusqu’à 50 appels par jour en période de forte affluence. Je gérais le service après-vente, les réclamations et le suivi des dossiers, tout en respectant des objectifs précis de satisfaction et de délais.',
    result:
      'Indicateurs de satisfaction maintenus, délais respectés (réponse chat en quelques secondes, mail sous 1h) et un vrai sens du client développé sur le terrain.',
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

// --- Services proposés (section orientée client) ---
export interface Service {
  iconName: string
  title: string
  description: string
  missions: string[]
  tools: string[]
  benefit: string
}

export const services: Service[] = [
  {
    iconName: 'FileText',
    title: 'Gestion administrative',
    description:
      'Je prends en charge la paperasse qui vous ralentit pour fluidifier votre quotidien.',
    missions: [
      'Rédaction et suivi des contrats',
      'Facturation et relances',
      'Organisation et classement de dossiers',
      'Saisie et traitement de données',
    ],
    tools: ['Google Workspace', 'Microsoft Office', 'Notion'],
    benefit: 'Vous regagnez des heures chaque semaine et gardez des dossiers toujours à jour.',
  },
  {
    iconName: 'Headset',
    title: 'Customer Care',
    description:
      'Vos clients sont accueillis, suivis et fidélisés avec attention et réactivité.',
    missions: [
      'Gestion des appels entrants',
      'Prise en charge des demandes clients',
      'Suivi des réclamations et des tickets',
      'Relances et fidélisation',
      'Gestion des emails et messageries',
    ],
    tools: ['HubSpot', 'Salesforce', 'Slack'],
    benefit: 'Une relation client soignée qui renforce votre image et réduit les insatisfactions.',
  },
  {
    iconName: 'Database',
    title: 'Back-office',
    description:
      'Je gère les tâches de fond qui font tourner votre activité en coulisses.',
    missions: [
      'Coordination administrative',
      'Suivi des échéances et reporting',
      'Mise à jour de bases de données',
      'Support opérationnel aux équipes',
    ],
    tools: ['Trello', 'Notion', 'Microsoft Office'],
    benefit: 'Une organisation fiable qui tourne en arrière-plan pendant que vous avancez.',
  },
]

// --- Étapes de collaboration (section rassurante) ---
export interface ProcessStep {
  iconName: string
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    iconName: 'MessageSquare',
    step: '01',
    title: 'Premier échange',
    description:
      'On fait connaissance lors d’un appel ou d’un message. Vous me présentez votre activité et vos besoins, sans engagement.',
  },
  {
    iconName: 'Search',
    step: '02',
    title: 'Analyse des besoins',
    description:
      'J’identifie précisément les tâches à déléguer, le volume et les priorités, puis je vous propose une organisation adaptée.',
  },
  {
    iconName: 'Rocket',
    step: '03',
    title: 'Prise en charge des missions',
    description:
      'Je m’approprie vos process et vos outils, puis je prends le relais sur les missions convenues, en toute autonomie.',
  },
  {
    iconName: 'RefreshCw',
    step: '04',
    title: 'Suivi régulier',
    description:
      'Points réguliers, reporting clair et communication proactive : vous gardez la visibilité, je m’occupe de l’exécution.',
  },
]

// --- FAQ (optimisée SEO via JSON-LD FAQPage) ---
export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'Travaillez-vous uniquement à distance ?',
    answer:
      'Oui, je travaille à 100 % à distance depuis Antananarivo, à Madagascar. Je suis équipée pour un remote fiable (connexion Starlink, générateur de secours) et j’accompagne mes clients où qu’ils se trouvent dans l’espace francophone.',
  },
  {
    question: 'Quels sont vos horaires ?',
    answer:
      'Je suis disponible du lundi au vendredi. Mon fuseau horaire est GMT+3 (Antananarivo), ce qui couvre largement les heures de bureau européennes. Les plages horaires précises sont définies ensemble selon vos besoins.',
  },
  {
    question: 'Travaillez-vous avec les PME ?',
    answer:
      'Absolument. J’accompagne principalement des PME, des agences, des indépendants et des organismes de formation francophones qui souhaitent déléguer leur gestion administrative et le suivi de leurs clients.',
  },
  {
    question: 'Comment démarre une collaboration ?',
    answer:
      'Tout commence par un premier échange gratuit et sans engagement. Nous analysons ensuite vos besoins, puis je prends en charge les missions convenues avec un suivi régulier. Vous pouvez me contacter par email ou directement sur WhatsApp.',
  },
  {
    question: 'Puis-je vous confier quelques heures seulement ?',
    answer:
      'Oui. Je m’adapte à votre rythme : une mission ponctuelle de quelques heures, un accompagnement régulier ou un engagement au long cours. La formule est définie selon votre charge réelle.',
  },
  {
    question: 'Quels outils utilisez-vous ?',
    answer:
      'Je maîtrise Google Workspace, Microsoft Office, Notion, Trello, Slack, Zoom, les CRM (HubSpot, Salesforce), Canva et WhatsApp Business. Je m’adapte aussi facilement aux outils que vous utilisez déjà.',
  },
  {
    question: 'Puis-je vous contacter sur WhatsApp ?',
    answer:
      'Oui, WhatsApp est l’un de mes canaux privilégiés pour échanger rapidement. Vous trouverez un bouton WhatsApp sur le site, avec un message pré-rempli pour démarrer la conversation en un clic.',
  },
]
