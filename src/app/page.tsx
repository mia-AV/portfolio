import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyChooseMe from '@/components/sections/WhyChooseMe'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Commitments from '@/components/sections/Commitments'
import Testimonials from '@/components/sections/Testimonials'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Workspace from '@/components/sections/Workspace'
import Education from '@/components/sections/Education'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseMe />
      <Services />
      <Process />
      <Commitments />
      <Testimonials />
      <Skills />
      <Experience />
      <Workspace />
      <Education />
      <Faq />
      <Contact />
    </>
  )
}
