import { useState, useEffect, useRef } from 'react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="container h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-2.5 h-2.5 bg-violet block" />
          <span className="font-body font-semibold text-[17px] tracking-tight">dukee.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-wide text-muted hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="mailto:ujiroduke1@gmail.com" className="text-[13px] font-medium border-b border-violet text-paper pb-0.5 hover:text-violet transition-colors">
            Let&apos;s talk
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden font-mono text-[11px] tracking-wide text-muted"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {open && (
        <div ref={menuRef} className="md:hidden bg-ink border-t border-line">
          <div className="container py-6 flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-paper hover:text-violet transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="mailto:ujiroduke1@gmail.com" className="font-mono text-xs text-violet">
              ujiroduke1@gmail.com
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
