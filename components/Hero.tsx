import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  imageSrc:        string
  imageAlt?:       string
  objectPosition?: string
  eyebrow?:        string
  headingLine1?:   string
  headingLine2?:   string
  headingGold?:    string
  sub?:            string
  showCtas?:       boolean
}

export function Hero({
  imageSrc,
  imageAlt         = 'hālo skincare',
  objectPosition   = 'center 20%',
  eyebrow          = 'the art of radiance',
  headingLine1     = 'skincare that works.',
  headingLine2     = 'enhancing what is',
  headingGold      = 'already yours.',
  sub              = 'Vegan  ·  Cruelty free  ·  Made sustainably in the UK',
  showCtas         = true,
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      style={{
        position:  'relative',
        width:     '100%',
        height:    'calc(100svh - var(--nav-h))',
        minHeight: '520px',
        maxHeight: '920px',
        overflow:  'hidden',
        display:   'flex',
        alignItems: 'flex-end',
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
            /* Mockup image is full colour — no desaturation on hero */
            filter:         'brightness(0.72) contrast(1.04)',
            animation:      'kenBurns 22s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* ── GRADIENT OVERLAYS ──────────────────────────────────── */}
      {/* Strong left-to-right gradient so text sits clearly on dark background */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          background: [
            /* Left content area darkening */
            'linear-gradient(to right, rgba(14,12,10,0.92) 0%, rgba(14,12,10,0.7) 42%, rgba(14,12,10,0.15) 70%, transparent 100%)',
            /* Bottom lift for legibility */
            'linear-gradient(to top, rgba(14,12,10,0.65) 0%, transparent 40%)',
          ].join(', '),
        }}
      />

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div
        style={{
          position:      'relative',
          zIndex:        2,
          width:         '100%',
          paddingLeft:   'clamp(1.5rem, 5vw, 5rem)',
          paddingRight:  'clamp(1.5rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
        }}
      >
        <div style={{ maxWidth: '600px' }}>

          {/* Eyebrow */}
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.6rem',
              fontWeight:    300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color:         'rgba(212, 170, 122, 0.8)',
              marginBottom:  '1.5rem',
            }}
          >
            {eyebrow}
          </p>

          {/* Headline — matches mockup exactly:
              line 1: normal weight roman
              lines 2+3: italic, line 3 in gold  */}
          <h1
            style={{
              fontFamily:    "'Cormorant Garamond', Georgia, serif",
              fontWeight:    300,
              lineHeight:    1.0,
              letterSpacing: '-0.02em',
              fontSize:      'clamp(2.8rem, 5.5vw, 5rem)',
              color:         'rgba(237, 232, 226, 0.95)',
              marginBottom:  '1.5rem',
            }}
          >
            {headingLine1}
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(237, 232, 226, 0.9)' }}>
              {headingLine2}
            </em>
            <br />
            <em style={{ fontStyle: 'italic', color: 'rgba(201, 169, 110, 0.85)' }}>
              {headingGold}
            </em>
          </h1>

          {/* Sub — dot-separated badges, matches mockup */}
          <p
            style={{
              fontFamily:    "'DM Sans', sans-serif",
              fontSize:      '0.78rem',
              fontWeight:    300,
              letterSpacing: '0.08em',
              color:         'rgba(237, 232, 226, 0.55)',
              marginBottom:  showCtas ? '2.75rem' : 0,
            }}
          >
            {sub}
          </p>

          {/* CTAs — two outlined buttons + discover text link */}
          {showCtas && (
            <div
              style={{
                display:    'flex',
                flexWrap:   'wrap',
                gap:        '0.875rem',
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
                style={{ marginLeft: '0.5rem' }}
              >
                <span aria-hidden="true" style={{ fontSize: '0.55rem' }}>▶</span>
                discover our story
              </Link>
            </div>
          )}
        </div>

        {/* Decorative vertical text — desktop only */}
        <div
          aria-hidden="true"
          style={{
            position:        'absolute',
            right:           'clamp(1.5rem, 5vw, 5rem)',
            bottom:          'clamp(3rem, 6vw, 5.5rem)',
            writingMode:     'vertical-rl',
            textOrientation: 'mixed',
            fontFamily:      "'DM Sans', sans-serif",
            fontSize:        '0.5rem',
            fontWeight:      300,
            letterSpacing:   '0.28em',
            textTransform:   'uppercase',
            color:           'rgba(237, 232, 226, 0.15)',
            userSelect:      'none',
          }}
          className="hidden lg:block"
        >
          the art of radiance · haloskincare.co.uk
        </div>
      </div>
    </section>
  )
}
