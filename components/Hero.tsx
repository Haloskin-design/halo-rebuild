import Image from 'next/image'
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
  imageLeft?:      boolean
}

export function Hero({
  imageSrc,
  imageAlt        = 'hālo skincare',
  objectPosition  = 'center 50%',
  eyebrow         = '',
  headingLine1    = '',
  headingLine2    = '',
  headingLine3    = '',
  sub             = '',
  showCtas        = false,
  imageLeft       = false,
}: HeroProps) {

  const textCol = (
    <div style={{
      display:         'flex',
      flexDirection:   'column',
      justifyContent:  'flex-end',
      padding:         'clamp(2rem, 4.5vw, 4.5rem)',
      paddingBottom:   'clamp(2.5rem, 5vw, 4.5rem)',
      backgroundColor: '#181513',
      minHeight:       'clamp(400px, 36vw, 560px)',
    }}>
      {eyebrow && (
        <p style={{
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.57rem',
          fontWeight:    300,
          letterSpacing: '0.34em',
          textTransform: 'uppercase',
          color:         'rgba(212,170,122,0.8)',
          marginBottom:  '1.25rem',
        }}>
          {eyebrow}
        </p>
      )}

      <h1 style={{
        fontFamily:    "'Cormorant Garamond', Georgia, serif",
        fontWeight:    300,
        lineHeight:    1.02,
        letterSpacing: '-0.02em',
        fontSize:      'clamp(1.9rem, 3.2vw, 3.8rem)',
        marginBottom:  sub ? '1.25rem' : 0,
      }}>
        {headingLine1 && (
          <span style={{ color: 'rgba(237,232,226,0.95)', display: 'block' }}>
            {headingLine1}
          </span>
        )}
        {headingLine2 && (
          <em style={{ fontStyle: 'italic', color: 'rgba(237,232,226,0.72)', display: 'block' }}>
            {headingLine2}
          </em>
        )}
        {headingLine3 && (
          <em style={{ fontStyle: 'italic', color: 'rgba(201,169,110,0.92)', display: 'block' }}>
            {headingLine3}
          </em>
        )}
      </h1>

      {sub && (
        <p style={{
          fontFamily:    "'DM Sans', sans-serif",
          fontSize:      '0.74rem',
          fontWeight:    300,
          letterSpacing: '0.06em',
          color:         'rgba(237,232,226,0.38)',
          marginBottom:  showCtas ? '2.25rem' : 0,
          marginTop:     headingLine1 ? '0.75rem' : 0,
        }}>
          {sub}
        </p>
      )}

      {showCtas && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          <Link href="/her" className="btn-primary">shop her</Link>
          <Link href="/him" className="btn-secondary">shop him</Link>
          <Link href="/story" className="btn-link">
            <span aria-hidden="true" style={{ fontSize: '0.5rem' }}>▶</span>
            discover our story
          </Link>
        </div>
      )}
    </div>
  )

  /* Image column — hard-clipped by overflow:hidden.
     Image fills its column container only. Cannot bleed to full screen.
     No viewport-height. Dimensions driven by minHeight of parent div. */
  const imageCol = (
    <div style={{
      position:        'relative',
      overflow:        'hidden',
      minHeight:       'clamp(400px, 36vw, 560px)',
      backgroundColor: '#0e0c0a',
    }}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="50vw"
        style={{
          objectFit:      'cover',
          objectPosition: objectPosition,
          filter:         'sepia(0.65) brightness(0.52) contrast(1.05)',
        }}
      />
      <div aria-hidden="true" style={{
        position:      'absolute',
        inset:         0,
        pointerEvents: 'none',
        background:    imageLeft
          ? 'linear-gradient(to left, rgba(24,21,19,0.22) 0%, transparent 25%)'
          : 'linear-gradient(to right, rgba(24,21,19,0.22) 0%, transparent 25%)',
      }} />
    </div>
  )

  return (
    <section
      aria-label={eyebrow || 'Hero'}
      style={{
        display:             'grid',
        gridTemplateColumns: '1fr 1fr',
        width:               '100%',
        overflow:            'hidden',
      }}
      className="grid-cols-1 md:grid-cols-2"
    >
      {imageLeft ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
    </section>
  )
}
