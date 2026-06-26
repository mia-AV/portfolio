'use client'
import { useState } from 'react'
import { FadeInView } from '@/lib/motion'
import {
  Mail, Phone, MapPin, Linkedin, MessageCircle, Send, CheckCircle, AlertCircle, Copy, Check,
} from 'lucide-react'
import { siteConfig, whatsappUrl } from '@/data/site'
import { useToast } from '@/components/ui/Toast'
import BookCallButton from '@/components/ui/BookCallButton'
import {
  trackEmail, trackPhone, trackLinkedIn, trackWhatsApp, trackFormSubmit, trackCTA,
} from '@/lib/analytics'

// Identifiant Formspree (surchargeable via variable d'environnement).
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? siteConfig.formspreeId
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const contactInfo = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, copy: siteConfig.email },
  { icon: Phone, label: 'Téléphone', value: siteConfig.phone, href: `tel:+${siteConfig.phoneRaw}`, copy: siteConfig.phone },
  { icon: MapPin, label: 'Localisation', value: siteConfig.location, href: null, copy: null },
  { icon: Linkedin, label: 'LinkedIn', value: siteConfig.linkedinLabel, href: siteConfig.linkedin, copy: null },
  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.phone, href: whatsappUrl, copy: null },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      trackCTA(`copy_${label.toLowerCase()}`, 'contact')
      toast(`${label} copié dans le presse-papiers`, 'success')
      setTimeout(() => setCopied(null), 2000)
    } catch {
      toast('Impossible de copier. Réessayez manuellement.', 'error')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject,
          _subject: `Portfolio — ${formData.subject || 'Nouveau message'}`,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        trackFormSubmit('success')
        toast('Message envoyé ! Je vous réponds très vite.', 'success')
      } else {
        const data = await res.json().catch(() => null)
        const msg =
          data?.errors?.map((er: { message: string }) => er.message).join(', ') ||
          'L\u2019envoi a échoué. Réessayez dans un instant.'
        setStatus('error')
        setErrorMsg(msg)
        trackFormSubmit('error')
        toast(msg, 'error')
      }
    } catch {
      const msg = 'Problème de connexion. Vérifiez votre réseau et réessayez.'
      setStatus('error')
      setErrorMsg(msg)
      trackFormSubmit('error')
      toast(msg, 'error')
    }
  }

  const isSubmitting = status === 'submitting'

  // Dispatche l'événement analytics adapté au canal de contact.
  const trackContactClick = (label: string) => {
    switch (label) {
      case 'Email':
        return trackEmail('contact')
      case 'Téléphone':
        return trackPhone('contact')
      case 'LinkedIn':
        return trackLinkedIn('contact')
      case 'WhatsApp':
        return trackWhatsApp('contact')
      default:
        return undefined
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-premium">
        <FadeInView>
          <div className="text-center mb-14 md:mb-16">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">Prêt à déléguer votre administratif ?</h2>
            <p className="section-subtitle mx-auto">
              Que vous ayez besoin d&apos;un coup de main ponctuel ou d&apos;un accompagnement régulier, je
              m&apos;adapte à vos besoins. Parlons de votre projet.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Carte coordonnées — fond navy pour contraste premium */}
          <FadeInView className="lg:col-span-2">
            <div className="relative h-full rounded-2xl p-7 md:p-8 overflow-hidden text-white shadow-soft-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" aria-hidden="true" />
              <div
                className="absolute inset-0 bg-grid-light opacity-40"
                style={{ backgroundSize: '28px 28px' }}
                aria-hidden="true"
              />
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-accent-500/20 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative">
                <h3 className="text-lg font-semibold text-white mb-1">Mes coordonnées</h3>
                <p className="text-sm text-navy-300 mb-7">Réponse sous 24h ouvrées.</p>
                <ul className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <info.icon size={18} className="text-accent-300" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-grow">
                        <p className="text-[11px] uppercase tracking-wide text-navy-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={() => trackContactClick(info.label)}
                            className="text-sm font-medium text-white hover:text-accent-300 transition-colors break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white">{info.value}</p>
                        )}
                      </div>
                      {info.copy && (
                        <button
                          type="button"
                          onClick={() => handleCopy(info.label, info.copy as string)}
                          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-navy-300 hover:bg-white/10 hover:text-white transition-colors"
                          aria-label={`Copier ${info.label.toLowerCase()}`}
                        >
                          {copied === info.label ? (
                            <Check size={15} className="text-green-400" aria-hidden="true" />
                          ) : (
                            <Copy size={15} aria-hidden="true" />
                          )}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <div>
                    <p className="text-sm text-white font-medium">{siteConfig.availability}</p>
                    <p className="text-xs text-navy-400 mt-0.5">Fuseau horaire : {siteConfig.timezone}</p>
                  </div>
                </div>

                <BookCallButton source="contact" className="btn-secondary w-full justify-center mt-4" />
              </div>
            </div>
          </FadeInView>

          <FadeInView className="lg:col-span-3" delay={0.15}>
            <div className="card-premium p-6 md:p-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Envoyez-moi un message</h3>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <CheckCircle size={36} className="text-green-500" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-2">Message envoyé !</h4>
                  <p className="text-sm text-slate-600 max-w-sm mb-6">
                    Merci pour votre message. Je vous réponds dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="field-label">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        disabled={isSubmitting}
                        className="field-input disabled:opacity-60"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="field-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        disabled={isSubmitting}
                        className="field-input disabled:opacity-60"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="field-label">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="field-input disabled:opacity-60"
                      placeholder="Objet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={isSubmitting}
                      className="field-input resize-none disabled:opacity-60"
                      placeholder="Décrivez votre besoin…"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="flex items-start gap-2 text-sm text-red-600" role="alert">
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>
                        {errorMsg || 'Une erreur est survenue.'} Vous pouvez aussi m&apos;écrire à{' '}
                        <a href={`mailto:${siteConfig.email}`} className="font-medium underline">
                          {siteConfig.email}
                        </a>
                        .
                      </span>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send size={16} aria-hidden="true" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
