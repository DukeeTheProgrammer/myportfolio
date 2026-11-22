import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [menuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent-glow">
            D
          </div>
          <span className="font-sans font-bold text-xl tracking-tight">DUKEE.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="lg:hidden text-muted hover:text-primary"
        >
          {menuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-surface border-b border-border px-4 pb-4"
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-secondary rounded-md hover:bg-surface-hover hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
