import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyChooseMe from '@/components/sections/WhyChooseMe'
import Commitments from '@/components/sections/Commitments'
import Testimonials from '@/components/sections/Testimonials'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Workspace from '@/components/sections/Workspace'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        {/* Parcours orienté conversion : problème → bénéfices → preuve → expertise → action */}
        <Hero />
        <About />
        <WhyChooseMe />
        <Commitments />
        <Testimonials />
        <Skills />
        <Experience />
        <Workspace />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
