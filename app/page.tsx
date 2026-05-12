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
        objectPosition="center 22%"
        eyebrow="the art of radiance"
        headingLine1="skincare that works."
        headingLine2="enhancing what is"
        headingGold="already yours."
        sub="Vegan  ·  Cruelty free  ·  Made sustainably in the UK"
        showCtas
      />

      {/* ── SPLIT PANELS ──────────────────────────────────────── */}
      {/* Matches mockup: two equal panels, image fills each half,
          bottom-left text: label | headline | category tags | explore CTA */}
      <section
        aria-label="Shop by category"
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          height:              'clamp(440px, 56vw, 700px)',
        }}
        className="!grid-cols-1 sm:!grid-cols-2"
      >
        {/* ── FOR HER ── */}
        <Link
          href="/her"
          style={{
            position:   'relative',
            overflow:   'hidden',
            display:    'flex',
            alignItems: 'flex-end',
            cursor:     'pointer',
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
              objectPosition: 'center 18%',
              filter:         'brightness(0.5) contrast(1.02)',
              transition:     'filter 1s ease, transform 1.2s ease',
            }}
            className="panel-img"
          />

          {/* Bottom gradient */}
          <div
            aria-hidden="true"
            style={{
              position:      'absolute',
              inset:         0,
              pointerEvents: 'none',
              background:    'linear-gradient(to top, rgba(10,9,8,0.90) 0%, rgba(10,9,8,0.3) 45%, transparent 70%)',
            }}
          />

          {/* Text content — matches mockup panel layout */}
          <div
            style={{
              position:      'relative',
              zIndex:        2,
              padding:       'clamp(1.75rem, 4vw, 3.5rem)',
              paddingBottom: 'clamp(2.25rem, 5vw, 4rem)',
            }}
          >
            {/* Eyebrow with line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <span
                aria-hidden="true"
                style={{ display: 'block', width: '1.5rem', height: '1px', backgroundColor: 'rgba(212,170,122,0.6)' }}
              />
              <p style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.56rem',
                fontWeight:    300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'rgba(212, 170, 122, 0.75)',
              }}>
                for her
              </p>
            </div>

            {/* Headline */}
            <h2 style={{
              fontFamily:    "'Cormorant Garamond', serif",
              fontWeight:    300,
              fontSize:      'clamp(1.9rem, 3.5vw, 3.1rem)',
              lineHeight:    0.95,
              letterSpacing: '-0.025em',
              color:         'rgba(237, 232, 226, 0.95)',
              marginBottom:  '0.25rem',
            }}>
              her space.
            </h2>
            <h2 style={{
              fontFamily:    "'Cormorant Garamond', serif",
              fontWeight:    300,
              fontSize:      'clamp(1.9rem, 3.5vw, 3.1rem)',
              lineHeight:    0.95,
              letterSpacing: '-0.025em',
              fontStyle:     'italic',
              color:         'rgba(201, 169, 110, 0.85)',
              marginBottom:  '1.25rem',
            }}>
              radiance, defined.
            </h2>

            {/* Category tags */}
            <p style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'rgba(237, 232, 226, 0.4)',
              marginBottom:  '1.5rem',
            }}>
              face · body · ritual
            </p>

            {/* CTA */}
            <span style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.6rem',
              fontWeight:    400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'rgba(201, 169, 110, 0.75)',
              borderBottom:  '1px solid rgba(201,169,110,0.35)',
              paddingBottom: '2px',
              transition:    'color 0.4s ease, border-color 0.4s ease',
            }}>
              explore her collection →
            </span>
          </div>
        </Link>

        {/* ── FOR HIM ── */}
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
          aria-label="Explore him collection"
        >
          <Image
            src="/images/him_hero.jpg"
            alt="hālo for him"
            fill
            sizes="50vw"
            style={{
              objectFit:      'cover',
              objectPosition: 'center 14%',
              filter:         'brightness(0.5) contrast(1.02)',
              transition:     'filter 1s ease, transform 1.2s ease',
            }}
            className="panel-img"
          />

          {/* Bottom gradient */}
          <div
            aria-hidden="true"
            style={{
              position:      'absolute',
              inset:         0,
              pointerEvents: 'none',
              background:    'linear-gradient(to top, rgba(10,9,8,0.90) 0%, rgba(10,9,8,0.3) 45%, transparent 70%)',
            }}
          />

          {/* Text content */}
          <div
            style={{
              position:      'relative',
              zIndex:        2,
              padding:       'clamp(1.75rem, 4vw, 3.5rem)',
              paddingBottom: 'clamp(2.25rem, 5vw, 4rem)',
            }}
          >
            {/* Eyebrow with line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <span
                aria-hidden="true"
                style={{ display: 'block', width: '1.5rem', height: '1px', backgroundColor: 'rgba(212,170,122,0.6)' }}
              />
              <p style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      '0.56rem',
                fontWeight:    300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'rgba(212, 170, 122, 0.75)',
              }}>
                for him
              </p>
            </div>

            {/* Headline */}
            <h2 style={{
              fontFamily:    "'Cormorant Garamond', serif",
              fontWeight:    300,
              fontSize:      'clamp(1.9rem, 3.5vw, 3.1rem)',
              lineHeight:    0.95,
              letterSpacing: '-0.025em',
              color:         'rgba(237, 232, 226, 0.95)',
              marginBottom:  '0.25rem',
            }}>
              his pace.
            </h2>
            <h2 style={{
              fontFamily:    "'Cormorant Garamond', serif",
              fontWeight:    300,
              fontSize:      'clamp(1.9rem, 3.5vw, 3.1rem)',
              lineHeight:    0.95,
              letterSpacing: '-0.025em',
              fontStyle:     'italic',
              color:         'rgba(201, 169, 110, 0.85)',
              marginBottom:  '1.25rem',
            }}>
              confidence, refined.
            </h2>

            {/* Category tags */}
            <p style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'rgba(237, 232, 226, 0.4)',
              marginBottom:  '1.5rem',
            }}>
              face · body · performance
            </p>

            {/* CTA */}
            <span style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.6rem',
              fontWeight:    400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'rgba(201, 169, 110, 0.75)',
              borderBottom:  '1px solid rgba(201,169,110,0.35)',
              paddingBottom: '2px',
            }}>
              explore him collection →
            </span>
          </div>
        </Link>
      </section>

      {/* Footer — using existing Footer component (already matches mockup) */}
      <Footer />
    </>
  )
}
