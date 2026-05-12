'clamp(2rem, 4vw, 3.8rem)',import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  imageSrc:        string
  imageAlt?:       string
  objectPosition?: string
  eyebrow?:        string
  headingLine1?:   string
  headingLine2?:   string
  headingLine3?:   string
  sub?:            string
  showCtas?:       boolean
}

export function Hero({
  imageSrc,
  imageAlt         = 'hālo skincare',
  objectPosition   = 'center 96%',
  eyebrow          = 'the art of radiance',
  headingLine1     = 'skincare that works.',
  headingLine2     = 'enhancing what is',
  headingLine3     = 'already yours.',
  sub              = 'Vegan  ·  Cruelty free  ·  Made sustainably in the UK',
  showCtas         = true,
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      style={{
        position:   'relative',
        width:      '100%',
        height:     height: '78svh',
        minHeight:  '520px',
        maxHeight:  '760px',
        display:    'flex',
        alignItems: 'flex-end',
        overflow:   'hidden',
      }}
    >
      {/* ── BACKGROUND IMAGE ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          userSelect:    'none',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit:      'cover',
            objectPosition: objectPosition,
            filter:         'sepia(0.7) brightness(0.30) contrast(1.05)',
            animation:      'kenBurns 22s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* ── GRADIENT OVERLAYS ──────────────────────────────────── */}
      {/* Bottom gradient — guarantees text legibility */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          background: [
            'linear-gradient(to right, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.6) 38%, rgba(10,8,6,0.08) 62%, transparent 100%)',
            'linear-gradient(to top, rgba(10,8,6,0.55) 0%, transparent 38%)',
          ].join(', '),
        }}
      />

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div
        style={{
          position:     'relative',
          zIndex:       2,
          width:        '100%',
          paddingLeft:  'clamp(1.5rem, 5vw, 5rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
        }}
      >
        <div style={{ maxWidth: '640px' }}>

          {/* Eyebrow */}
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.58rem',
              fontWeight:    300,
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.8)',
              marginBottom:  '1.5rem',
            }}
          >
            {eyebrow}
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    300,
              lineHeight:    1.02,
              letterSpacing: '-0.02em',
              fontSize:      'clamp(2.6rem, 5vw, 4.8rem)',
              marginBottom:  '1.4rem',
            }}
          >
            <span style={{ color: 'rgba(237, 232, 226, 0.95)', display: 'block' }}>
              {headingLine1}
            </span>
            <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.88)', display: 'block' }}>
              {headingLine2}
            </em>
            <em style={{ fontStyle: 'italic', color: 'rgba(201, 169, 110, 0.92)', display: 'block' }}>
              {headingLine3}
            </em>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.8rem',
              fontWeight:    300,
              letterSpacing: '0.12em',
              color:         'rgba(237, 232, 226, 0.5)',
              marginBottom:  showCtas ? '2.75rem' : 0,
              maxWidth:      '380px',
            }}
          >
            {sub}
          </p>

          {/* CTAs */}
          {showCtas && (
            <div
              style={{
                display:    'flex',
                flexWrap:   'wrap',
                gap:        '1rem',
                alignItems: 'center',
              }}
            >
              <Link href="/her" className="btn-primary">
                shop her
              </Link>
              <Link href="/him" className="btn-secondary">
                shop him
              </Link>
              <Link
                href="/story"
                className="btn-link"
              >
                <span aria-hidden="true" style={{ fontSize: '0.6rem' }}>▶</span>
                discover our story
              </Link>
            </div>
          )}
        </div>

        {/* Decorative vertical text — desktop only */}
        <div
          aria-hidden="true"
          style={{
            position:  'absolute',
            right:     'clamp(1.5rem, 5vw, 5rem)',
            bottom:    'clamp(3rem, 6vw, 5.5rem)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:      '0.52rem',
            fontWeight:    300,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color:         'rgba(237, 232, 226, 0.18)',
            userSelect:    'none',
          }}
          className="hidden lg:block"
        >
          the art of radiance · haloskincare.co.uk
        </div>
      </div>
    </section>
  )
}
