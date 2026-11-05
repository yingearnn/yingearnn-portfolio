import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-sky/10 bg-navy-950/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name} — back to top`}>
          <span className="grid size-9 place-items-center rounded-xl border border-sky/30 bg-navy-800 font-display text-sm font-bold text-sky transition-all duration-300 group-hover:border-sky group-hover:shadow-[0_0_18px_-4px_rgba(125,211,252,0.7)]">
            {profile.initials}
          </span>
          <span className="hidden font-display text-base font-semibold text-snow sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id ? 'text-sky' : 'text-snow/85 hover:text-sky'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-sky transition-transform duration-300 ${
                    active === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl border border-sky/50 px-4 py-2 text-sm font-semibold text-ice transition-all duration-300 hover:border-sky hover:bg-sky/10 hover:shadow-[0_0_20px_-6px_rgba(125,211,252,0.6)] lg:inline-flex"
        >
          Let's connect
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-sky/20 text-snow lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-t border-sky/10 bg-navy-950/95 backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto px-4 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-medium transition-colors ${
                      active === link.id ? 'bg-sky/10 text-sky' : 'text-snow hover:bg-sky/5 hover:text-sky'
                    }`}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-mist-dim">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
