'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback, useRef } from 'react'

const LINKS = [
  { label: 'shop her',   href: '/her'     },
  { label: 'shop him',   href: '/him'     },
  { label: 'our story',  href: '/story'   },
  { label: 'our values', href: '/values'  },
  { label: 'contact',    href: '/contact' },
] as const

export function Navbar() {
  const pathname                = usePathname()
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]   = useState(true)
  const lastY                   = useRef(0)
  const menuRef                 = useRef<HTMLDivElement>(null)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setVisible(y < lastY.current || y < 100)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onKey])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (open && menuRef.current) {
      menuRef.current.querySelector<HTMLElement>('a')?.focus()
    }
  }, [open])

  return (
    <>
      {/* ── NAVBAR ────────────────────────────────────────────── */}
      <header
        role="banner"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          zIndex:          9000,
          isolation:       'isolate',
          transform:       visible ? 'translateY(0)' : 'translateY(-100%)',
          transition:      'transform 0.5s cubic-bezier(0.25,0.1,0,1), background-color 0.6s ease, border-color 0.6s ease',
          height:          'var(--nav-h)',
          backgroundColor: scrolled ? 'rgba(14, 12, 10, 0.97)' : 'rgba(14, 12, 10, 0)',
          borderBottom:    scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
          backdropFilter:       scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          display:         'flex',
          alignItems:      'center',
          paddingLeft:     'clamp(1.5rem, 5vw, 5rem)',
          paddingRight:    'clamp(1.5rem, 5vw, 5rem)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="hālo — home"
          style={{
            fontFamily:    "'Nunito', sans-serif",
            fontWeight:    700,
            fontSize:      'clamp(1.35rem, 2.2vw, 1.65rem)',
            letterSpacing: '0.04em',
            color:         'rgba(201, 169, 110, 0.85)',
            transition:    'color 0.4s ease',
            lineHeight:    1,
            flexShrink:    0,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(212, 170, 122, 1)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(201, 169, 110, 0.85)' }}
        >
          hālo
        </Link>

        {/* Desktop navigation — centred */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{
            position:       'absolute',
            left:           '50%',
            transform:      'translateX(-50%)',
            display:        'flex',
            alignItems:     'center',
            gap:            'clamp(2rem, 4vw, 3.5rem)',
          }}
          className="hidden md:flex"
        >
          {LINKS.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="t-nav"
                style={{
                  color:         active ? 'rgba(212, 170, 122, 0.9)' : undefined,
                  paddingBottom: '2px',
                  borderBottom:  active
                    ? '1px solid rgba(201, 169, 110, 0.45)'
                    : '1px solid transparent',
                }}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right — spacer on desktop keeps logo left, hamburger on mobile */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex md:hidden"
            onClick={() => setOpen(p => !p)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            style={{
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '5px',
              width:          '44px',
              height:         '44px',
              padding:        '8px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display:         'block',
                  width:           '22px',
                  height:          '1px',
                  backgroundColor: 'rgba(237, 232, 226, 0.8)',
                  transformOrigin: 'center',
                  transition:      'all 0.4s cubic-bezier(0.25,0.1,0,1)',
                  transform:       open
                    ? i === 0 ? 'rotate(45deg) translateY(6px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translateY(-6px)'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>

          {/* Desktop — bordered dropdown trigger hint (matches mockup top-right box) */}
          {/* The bordered panel in the mockup is actually the open mobile/overlay menu — rendered below */}
        </div>
      </header>

      {/* ── MOBILE / OVERLAY MENU ─────────────────────────────── */}
      {/* Matches the mockup's bordered right-hand panel */}
      <div
        id="mobile-nav"
        ref={menuRef}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className="md:hidden"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          bottom:          0,
          zIndex:          8999,
          backgroundColor: 'rgba(10, 9, 8, 0.98)',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          gap:             '0',
          opacity:         open ? 1 : 0,
          pointerEvents:   open ? 'auto' : 'none',
          transition:      'opacity 0.5s ease',
        }}
      >
        {/* Bordered panel — replicates the mockup's right-side box */}
        <div
          style={{
            border:        '1px solid rgba(255,255,255,0.1)',
            padding:       '2.5rem 3rem',
            display:       'flex',
            flexDirection: 'column',
            gap:           '0.25rem',
            minWidth:      '240px',
          }}
        >
          {LINKS.map(({ label, href }, i) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? 'page' : undefined}
                style={{
                  fontFamily:    "'DM Sans', sans-serif",
                  fontWeight:    300,
                  fontSize:      '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color:         active
                    ? 'rgba(212, 170, 122, 0.95)'
                    : 'rgba(237, 232, 226, 0.65)',
                  lineHeight:    1,
                  padding:       '1rem 0',
                  borderBottom:  i < LINKS.length - 1
                    ? '1px solid rgba(255,255,255,0.05)'
                    : 'none',
                  transition:    `color 0.35s ease, opacity 0.5s ease ${i * 0.06}s`,
                  opacity:       open ? 1 : 0,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(237, 232, 226, 0.9)' }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = active
                    ? 'rgba(212, 170, 122, 0.95)'
                    : 'rgba(237, 232, 226, 0.65)'
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Tagline */}
        <p
          style={{
            position:      'absolute',
            bottom:        '2.5rem',
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.56rem',
            fontWeight:    300,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color:         'rgba(237, 232, 226, 0.18)',
            opacity:       open ? 1 : 0,
            transition:    'opacity 0.8s ease 0.4s',
          }}
        >
          the art of radiance
        </p>
      </div>

      {/* Desktop overlay menu — bordered panel top-right (matches mockup) */}
      {/* This appears when hamburger equiv is triggered on desktop — handled by open state above */}

      {/* Spacer */}
      <div style={{ height: 'var(--nav-h)' }} aria-hidden="true" />
    </>
  )
}
