import type { Metadata } from 'next'
import { Footer } from '@/components/ui/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'hālo — the art of radiance',
  description: 'Premium skincare for him & her. High-performance formulas, honestly made. Vegan, cruelty free, sustainably produced in the UK.',
}

export default function HomePage() {
  return (
    <>

      {/* ── HERO ─────────────────────────────────────────────────
          Two explicit columns. Image is clipped to right column only.
          No viewport-height. No fullscreen bleed.
          At 1440px: each column = 720px wide, 518px tall.
          Face (row 1044 of 1600px source) at 43% from top of column.
      ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          width:               '100%',
          overflow:            'hidden',
        }}
        className="grid-cols-1 md:grid-cols-2"
      >

        {/* Left: text column — solid dark background */}
        <div style={{
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'flex-end',
          padding:         'clamp(2rem, 4.5vw, 4.5rem)',
          paddingBottom:   'clamp(2.5rem, 5vw, 4.5rem)',
          backgroundColor: '#181513',
          minHeight:       'clamp(400px, 36vw, 560px)',
        }}>
          <p style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.57rem',
            fontWeight:    300,
            letterSpacing: '0.34em',
            textTransform: 'uppercase',
            color:         'rgba(212,170,122,0.8)',
            marginBottom:  '1.25rem',
          }}>
            the art of radiance
          </p>

          <h1 style={{
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontWeight:    300,
            lineHeight:    1.04,
            letterSpacing: '-0.02em',
            fontSize:      'clamp(1.9rem, 3.2vw, 3.8rem)',
            marginBottom:  '1.25rem',
          }}>
            <span style={{ color: 'rgba(237,232,226,0.95)', display: 'block' }}>
              skincare that works.
            </span>
            <em style={{ fontStyle: 'italic', color: 'rgba(237,232,226,0.82)', display: 'block' }}>
              enhancing what is
            </em>
            <em style={{ fontStyle: 'italic', color: 'rgba(201,169,110,0.92)', display: 'block' }}>
              already yours.
            </em>
          </h1>

          <p style={{
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.74rem',
            fontWeight:    300,
            letterSpacing: '0.06em',
            color:         'rgba(237,232,226,0.4)',
            marginBottom:  '2.25rem',
          }}>
            Vegan  ·  Cruelty free  ·  Made sustainably in the UK
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <Link href="/her" className="btn-primary">shop her</Link>
            <Link href="/him" className="btn-secondary">shop him</Link>
            <Link href="/story" className="btn-link" style={{ marginLeft: '0.5rem' }}>
              <span aria-hidden="true" style={{ fontSize: '0.5rem' }}>▶</span>
              discover our story
            </Link>
          </div>
        </div>

        {/* Right: portrait image — hard-clipped to this column
            Source: home_hero.webp 1200×1600
            Face at row 1044 (65%). Container ~518px tall.
            objectPosition center 76% → face lands at 43% from top. */}
        <div
          style={{
            position:        'relative',
            overflow:        'hidden',
            minHeight:       'clamp(400px, 36vw, 560px)',
            backgroundColor: '#0e0c0a',
          }}
          className="hidden md:block"
        >
          <Image
            src="/images/home_hero.webp"
            alt="hālo skincare — the art of radiance"
            fill
            priority
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 76%',
              filter:         'sepia(0.65) brightness(0.55) contrast(1.05)',
            }}
          />
          <div aria-hidden="true" style={{
            position:      'absolute',
            inset:         0,
            pointerEvents: 'none',
            background:    'linear-gradient(to right, rgba(24,21,19,0.22) 0%, transparent 25%)',
          }} />
        </div>
      </section>

      {/* ── PANELS ───────────────────────────────────────────────
          Two portrait image columns. Text anchored bottom-left.
          At 1440px: each column = 720px wide, 403px tall.
          No fullscreen bleed. Images clipped by overflow:hidden.
      ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Shop by category"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          width:               '100%',
        }}
        className="grid-cols-1 sm:grid-cols-2"
      >

        {/* HER
            Source: her_hero.jpg 1200×1920, face at row 936 (49%)
            Container 403px. objectPosition center 50% → face at 45% from top */}
        <Link
          href="/her"
          style={{
            position:        'relative',
            overflow:        'hidden',
            display:         'flex',
            flexDirection:   'column',
            justifyContent:  'flex-end',
            minHeight:       'clamp(300px, 28vw, 440px)',
            backgroundColor: '#0e0c0a',
            cursor:          'pointer',
          }}
          aria-label="Explore her collection"
        >
          <Image
            src="/images/her_hero.jpg"
            alt="hālo for her"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 50%',
              filter:         'sepia(0.75) brightness(0.52) contrast(1.02)',
              transition:     'transform 1.2s ease',
            }}
            className="panel-img"
          />
          <div aria-hidden="true" style={{
            position:      'absolute',
            inset:         0,
            pointerEvents: 'none',
            background:    'linear-gradient(to top, rgba(8,6,4,0.90) 0%, rgba(8,6,4,0.12) 45%, transparent 68%)',
          }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(1.25rem, 3vw, 2.75rem)', paddingBottom: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.6rem' }}>
              <span aria-hidden="true" style={{ display: 'block', width: '1.25rem', height: '1px', backgroundColor: 'rgba(201,169,110,0.65)', flexShrink: 0 }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.54rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.85)', fontWeight: 300 }}>for her</p>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)', lineHeight: 0.97, letterSpacing: '-0.02em', color: 'rgba(237,232,226,0.95)', display: 'block', marginBottom: '0.05rem' }}>
              her space.
            </h2>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)', lineHeight: 0.97, letterSpacing: '-0.02em', fontStyle: 'italic', color: 'rgba(201,169,110,0.9)', display: 'block', marginBottom: '0.8rem' }}>
              radiance, defined.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.53rem', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,232,226,0.4)', marginBottom: '0.9rem' }}>
              face · body · ritual
            </p>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.8)', borderBottom: '1px solid rgba(201,169,110,0.32)', paddingBottom: '2px' }}>
              explore her collection →
            </span>
          </div>
        </Link>

        {/* HIM
            Source: him_hero.jpg 1200×2133, face at row 444 (21%)
            Container 403px. objectPosition center 16% → face at 42% from top */}
        <Link
          href="/him"
          style={{
            position:        'relative',
            overflow:        'hidden',
            display:         'flex',
            flexDirection:   'column',
            justifyContent:  'flex-end',
            minHeight:       'clamp(300px, 28vw, 440px)',
            backgroundColor: '#0e0c0a',
            cursor:          'pointer',
            borderLeft:      '1px solid rgba(255,255,255,0.05)',
          }}
          aria-label="Explore him collection"
        >
          <Image
            src="/images/him_hero.jpg"
            alt="hālo for him"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 16%',
              filter:         'sepia(0.75) brightness(0.58) contrast(1.02)',
              transition:     'transform 1.2s ease',
            }}
            className="panel-img"
          />
          <div aria-hidden="true" style={{
            position:      'absolute',
            inset:         0,
            pointerEvents: 'none',
            background:    'linear-gradient(to top, rgba(8,6,4,0.90) 0%, rgba(8,6,4,0.12) 45%, transparent 68%)',
          }} />
          <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(1.25rem, 3vw, 2.75rem)', paddingBottom: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.6rem' }}>
              <span aria-hidden="true" style={{ display: 'block', width: '1.25rem', height: '1px', backgroundColor: 'rgba(201,169,110,0.65)', flexShrink: 0 }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.54rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.85)', fontWeight: 300 }}>for him</p>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)', lineHeight: 0.97, letterSpacing: '-0.02em', color: 'rgba(237,232,226,0.95)', display: 'block', marginBottom: '0.05rem' }}>
              his pace.
            </h2>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)', lineHeight: 0.97, letterSpacing: '-0.02em', fontStyle: 'italic', color: 'rgba(201,169,110,0.9)', display: 'block', marginBottom: '0.8rem' }}>
              confidence, refined.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.53rem', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,232,226,0.4)', marginBottom: '0.9rem' }}>
              face · body · performance
            </p>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.55rem', fontWeight: 400, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.8)', borderBottom: '1px solid rgba(201,169,110,0.32)', paddingBottom: '2px' }}>
              explore him collection →
            </span>
          </div>
        </Link>
      </section>

      <style>{`
        a:hover .panel-img { transform: scale(1.03); }
      `}</style>

      <Footer />
    </>
  )
}
