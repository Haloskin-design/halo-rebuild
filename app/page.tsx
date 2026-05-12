import type { Metadata } from 'next'
import { Hero } from '@/sections/Hero'
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
      <Hero
        imageSrc="/images/home_hero.webp"
        objectPosition="center 96%"
        eyebrow="the art of radiance"
        headingLine1="skincare that works."
        headingLine2="enhancing what is"
        headingLine3="already yours."
        sub="Vegan  ·  Cruelty free  ·  Made sustainably in the UK"
        
        showCtas
      />

      {/* ── SPLIT PANELS ──────────────────────────────────────── */}
      <section
        aria-label="Shop by category"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          height:              'clamp(420px, 55vw, 680px)',
        }}
        className="grid-cols-1 sm:!grid-cols-2"
      >
        {/* Her */}
        <Link
          href="/her"
          style={{
            position:   'relative',
            overflow:   'hidden',
            display:    'flex',
            alignItems: 'flex-end',
            cursor:     'pointer',
          }}
          aria-label="Shop her collection"
        >
          <Image
            src="/images/her_hero.jpg"
            alt="hālo for her"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition="center 78%"
              filter:         'sepia(0.85) brightness(0.55) contrast(1.0)',
              transition:     'filter 1s ease, transform 1.2s ease',
            }}
            className="panel-img"
          />
          <div
            style={{
              position:      'absolute',
              inset:         0,
              pointerEvents: 'none',
              background:    'linear-gradient(to top, rgba(8,6,4,0.85) 0%, rgba(8,6,4,0.18) 40%, transparent 62%)',
            }}
          />
          <div
            style={{
              position:     'relative',
              zIndex:       2,
              padding:      'clamp(1.5rem, 4vw, 3.5rem)',
              paddingBottom: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span aria-hidden="true" style={{ display: 'block', width: '1.5rem', height: '1px', backgroundColor: 'rgba(201,169,110,0.65)', flexShrink: 0 }} />
              <p style={{ fontFamily: "'DM Sans'", fontSize: '0.56rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.85)', fontWeight: 300 }}>for her</p>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.8rem, 3.2vw, 2.9rem)', lineHeight: 0.97, letterSpacing: '-0.02em', color: 'rgba(237,232,226,0.95)', display: 'block', marginBottom: '0.05rem' }}>
              her space.
            </h2>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.8rem, 3.2vw, 2.9rem)', lineHeight: 0.97, letterSpacing: '-0.02em', fontStyle: 'italic', color: 'rgba(201,169,110,0.9)', display: 'block', marginBottom: '1.1rem' }}>
              radiance, defined.
            </h2>
            <p style={{ fontFamily: "'DM Sans'", fontSize: '0.56rem', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,232,226,0.45)', marginBottom: '1.25rem' }}>
              face · body · ritual
            </p>
            <span style={{ fontFamily: "'DM Sans'", fontSize: '0.58rem', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.82)', borderBottom: '1px solid rgba(201,169,110,0.38)', paddingBottom: '2px' }}>
              explore her collection →
            </span>
          </div>
        </Link>

        {/* Him */}
        <Link
          href="/him"
          style={{
            position:   'relative',
            overflow:   'hidden',
            display:    'flex',
            alignItems: 'flex-end',
            cursor:     'pointer',
            borderLeft: '1px solid rgba(255,255,255,0.04)',
          }}
          aria-label="Shop him collection"
        >
          <Image
            src="/images/him_hero.jpg"
            alt="hālo for him"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition="center 38%"
              filter:         'sepia(0.85) brightness(0.65) contrast(1.0)',
              transition:     'filter 1s ease, transform 1.2s ease',
            }}
            className="panel-img"
          />
          <div
            style={{
              position:      'absolute',
              inset:         0,
              pointerEvents: 'none',
              background:    'linear-gradient(to top, rgba(8,6,4,0.85) 0%, rgba(8,6,4,0.18) 40%, transparent 62%)',
            }}
          />
          <div
            style={{
              position:     'relative',
              zIndex:       2,
              padding:      'clamp(1.5rem, 4vw, 3.5rem)',
              paddingBottom: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span aria-hidden="true" style={{ display: 'block', width: '1.5rem', height: '1px', backgroundColor: 'rgba(201,169,110,0.65)', flexShrink: 0 }} />
              <p style={{ fontFamily: "'DM Sans'", fontSize: '0.56rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.85)', fontWeight: 300 }}>for him</p>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.8rem, 3.2vw, 2.9rem)', lineHeight: 0.97, letterSpacing: '-0.02em', color: 'rgba(237,232,226,0.95)', display: 'block', marginBottom: '0.05rem' }}>
              his pace.
            </h2>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(1.8rem, 3.2vw, 2.9rem)', lineHeight: 0.97, letterSpacing: '-0.02em', fontStyle: 'italic', color: 'rgba(201,169,110,0.9)', display: 'block', marginBottom: '1.1rem' }}>
              confidence, refined.
            </h2>
            <p style={{ fontFamily: "'DM Sans'", fontSize: '0.56rem', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(237,232,226,0.45)', marginBottom: '1.25rem' }}>
              face · body · performance
            </p>
            <span style={{ fontFamily: "'DM Sans'", fontSize: '0.58rem', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.82)', borderBottom: '1px solid rgba(201,169,110,0.38)', paddingBottom: '2px' }}>
              explore him collection →
            </span>
          </div>
        </Link>
      </section>

      {/* Panel hover styles */}
      <style>{`
        a:hover .panel-img {
          filter: sepia(0.5) brightness(0.72) contrast(1.0) !important;
          transform: scale(1.03) !important;
        }
      `}</style>

      {/* ── BRAND STATEMENT ───────────────────────────────────── */}
      <section
        style={{
          paddingTop:    'clamp(5rem, 10vw, 10rem)',
          paddingBottom: 'clamp(5rem, 10vw, 10rem)',
          paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
          paddingRight:  'clamp(1.5rem, 5vw, 5rem)',
          maxWidth:      '1480px',
          margin:        '0 auto',
          display:       'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:           'clamp(3rem, 8vw, 8rem)',
          alignItems:    'center',
        }}
        className="grid-cols-1 md:!grid-cols-2"
      >
        <div>
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.65)',
              marginBottom:  '1.75rem',
            }}
          >
            the philosophy
          </p>
          <h2
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    200,
              fontSize:      'clamp(2.2rem, 4.5vw, 4.2rem)',
              lineHeight:    0.92,
              letterSpacing: '-0.03em',
              color:         'rgba(237, 232, 226, 0.9)',
            }}
          >
            every ingredient
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.38)' }}>
              earns its place.
            </em>
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize:   '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color:      'rgba(237, 232, 226, 0.48)',
              marginBottom: '2rem',
            }}
          >
            hālo formulas are built around high-quality, carefully sourced ingredients — selected for what they do, not how they sound. Vegan, cruelty free, and tested for real results.
          </p>
          <Link href="/story" className="btn-link">
            our story →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
