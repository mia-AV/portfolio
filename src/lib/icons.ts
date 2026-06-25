import {
  Clock, Shield, Heart, FileText, Users, Wrench, Briefcase, Globe, Wifi,
  GraduationCap, Monitor, Zap, ClipboardCheck, MailCheck, CalendarClock,
  Star, Award,
  type LucideIcon,
} from 'lucide-react'

// Carte de résolution d'icônes par nom de chaîne.
// Permet aux données (data/) de ne pas importer lucide-react directement.
const iconMap: Record<string, LucideIcon> = {
  Clock, Shield, Heart, FileText, Users, Wrench, Briefcase, Globe, Wifi,
  GraduationCap, Monitor, Zap, ClipboardCheck, MailCheck, CalendarClock,
  Star, Award,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Clock
}
