import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import { ResumeProvider } from './components/Resume'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import AIApproach from './sections/AIApproach'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Goals from './sections/Goals'
import Contact from './sections/Contact'

export default function App() {
  return (
    // reducedMotion="user" turns off movement for visitors who ask their OS for less motion.
    <MotionConfig reducedMotion="user">
      <ResumeProvider>
        <a
          href="#about"
          className="sr-only z-[80] rounded-lg bg-sky px-4 py-2 font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <AIApproach />
          <Experience />
          <Education />
          <Goals />
          <Contact />
        </main>
        <BackToTop />
      </ResumeProvider>
    </MotionConfig>
  )
}
