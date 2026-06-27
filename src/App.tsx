import { useState, useEffect, useCallback } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import TerminalPanel from './components/TerminalPanel'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const TYPING_TEXTS = ['Dukee', 'Dukee TheProgrammer']

function Typewriter() {
  const [display, setDisplay] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const target = TYPING_TEXTS[textIdx]

  const tick = useCallback(() => {
    if (deleting) {
      if (charIdx === 0) {
        setTextIdx((i) => (i + 1) % TYPING_TEXTS.length)
        setDeleting(false)
        return
      }
      setCharIdx((i) => i - 1)
    } else {
      if (charIdx === target.length) {
        setTimeout(() => setDeleting(true), 1500)
        return
      }
      setCharIdx((i) => i + 1)
    }
  }, [deleting, charIdx, target])

  useEffect(() => {
    const delay = deleting ? 50 : 80 + Math.random() * 40
    const id = setTimeout(tick, delay)
    return () => clearTimeout(id)
  }, [tick, deleting, charIdx])

  useEffect(() => {
    setDisplay(target.slice(0, charIdx))
  }, [charIdx, target])

  return (
    <span>
      &gt; {display}
      <span className="animate-[blink_1s_step-end_infinite]">_</span>
    </span>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#00ff41]/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm text-[#00ff41] font-bold"
          >
            <Typewriter />
          </a>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-gray-400 hover:text-[#00ff41] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pb-[240px]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Terminal panel — fixed at bottom */}
      <TerminalPanel />
    </div>
  )
}
