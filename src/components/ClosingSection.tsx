import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Heart, MessageCircle, Phone } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 15, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ClosingSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <footer
      id="closing"
      className="section-burgundy"
      style={{
        padding: 'clamp(4.5rem, 10vw, 7.5rem) 1.25rem calc(clamp(6.5rem, 14vw, 9rem) + var(--safe-bottom))',
        position: 'relative',
        textAlign: 'center',
        borderTop: '2px solid var(--color-champagne-gold)',
      }}
    >
      <div className="islamic-pattern-bg" style={{ opacity: 0.05 }} />

      <div ref={sectionRef} className="container-narrow reveal-on-scroll">
        {/* Top Eyebrow */}
        <span
          className="font-mono-meta"
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-champagne-gold)',
            letterSpacing: '0.24em',
            display: 'block',
            marginBottom: '1.25rem',
          }}
        >
          AN ETERNAL BOND
        </span>

        {/* Lead Quote */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            color: 'var(--color-ivory)',
            lineHeight: 1.2,
            marginBottom: '1rem',
            fontWeight: 400,
          }}
        >
          We can’t wait to celebrate with you.
        </h2>

        {/* Islamic Marriage Blessing Dua (Almarai Font) */}
        <div style={{ margin: '1rem auto 1.75rem', maxWidth: '640px' }}>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic-calligraphy"
            style={{
              fontSize: 'clamp(1.15rem, 3vw, 1.8rem)',
              color: 'var(--color-champagne-gold)',
              lineHeight: 1.9,
              letterSpacing: 'normal',
              wordSpacing: '0.04em',
              textWrap: 'balance',
              textAlign: 'center',
            }}
          >
            بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.62rem, 1.2vw, 0.72rem)',
              color: 'var(--color-soft-champagne)',
              letterSpacing: '0.12em',
              marginTop: '0.45rem',
              opacity: 0.88,
            }}
          >
            &ldquo;May Allah bless you both and unite you in goodness.&rdquo;
          </p>
        </div>

        {/* Champagne Heart Accent */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-champagne-gold)',
            margin: '0.5rem 0 2rem',
          }}
        >
          <div style={{ width: 40, height: 1, backgroundColor: 'var(--color-champagne-gold)' }} />
          <Heart size={18} fill="var(--color-champagne-gold)" style={{ margin: '0 12px' }} />
          <div style={{ width: 40, height: 1, backgroundColor: 'var(--color-champagne-gold)' }} />
        </div>

        {/* Couple Names */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 6vw, 4.2rem)',
              color: 'var(--color-ivory)',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              fontWeight: 400,
              wordBreak: 'break-word',
            }}
          >
            {WEDDING_DETAILS.groom}
          </p>

          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              fontStyle: 'italic',
              color: 'var(--color-champagne-gold)',
              display: 'block',
              margin: '0.3rem 0',
            }}
          >
            &amp;
          </span>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 6vw, 4.2rem)',
              color: 'var(--color-ivory)',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              fontWeight: 400,
              wordBreak: 'break-word',
            }}
          >
            {WEDDING_DETAILS.bride}
          </p>
        </div>

        {/* Wedding Date */}
        <div
          style={{
            display: 'inline-block',
            padding: '0.4rem 1.5rem',
            borderTop: '1px solid rgba(197, 164, 109, 0.4)',
            borderBottom: '1px solid rgba(197, 164, 109, 0.4)',
            marginBottom: '2.5rem',
          }}
        >
          <p
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              color: 'var(--color-soft-champagne)',
              fontWeight: 700,
              letterSpacing: '0.18em',
            }}
          >
            {WEDDING_DETAILS.weddingDate.toUpperCase()}
          </p>
        </div>

        {/* With love and gratitude — Sabith & Shamlath Families */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--color-ivory)',
              marginBottom: '0.4rem',
            }}
          >
            With love and gratitude
          </p>
          <p
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: 'var(--color-champagne-gold)',
              letterSpacing: '0.16em',
              fontWeight: 700,
            }}
          >
            {WEDDING_DETAILS.familyName.toUpperCase()}
          </p>
        </div>

        {/* Decorative Bottom Diamond */}
        <div style={{ marginTop: '2.5rem' }}>
          <div style={{ width: 8, height: 8, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)', margin: '0 auto' }} />
        </div>

        {/* Crafted by: Sanu Frameart Credits */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(197, 164, 109, 0.22)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.85rem',
          }}
        >
          <span
            className="font-mono-meta"
            style={{
              fontSize: '0.72rem',
              color: 'var(--color-soft-champagne)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Crafted by <strong style={{ color: 'var(--color-champagne-gold)', fontWeight: 700 }}>Sanu Frameart</strong>
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.6rem, 2vw, 1rem)',
              flexWrap: 'wrap',
            }}
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/sanu_frameart"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sanu Frameart on Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--color-ivory)',
                textDecoration: 'none',
                fontSize: '0.78rem',
                padding: '0.45rem 0.9rem',
                backgroundColor: 'rgba(197, 164, 109, 0.12)',
                border: '1px solid rgba(197, 164, 109, 0.35)',
                borderRadius: '24px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.28)';
                e.currentTarget.style.borderColor = 'var(--color-champagne-gold)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(197, 164, 109, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <InstagramIcon size={14} color="var(--color-champagne-gold)" />
              <span>@sanu_frameart</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916235838332"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sanu Frameart on WhatsApp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--color-ivory)',
                textDecoration: 'none',
                fontSize: '0.78rem',
                padding: '0.45rem 0.9rem',
                backgroundColor: 'rgba(197, 164, 109, 0.12)',
                border: '1px solid rgba(197, 164, 109, 0.35)',
                borderRadius: '24px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.28)';
                e.currentTarget.style.borderColor = 'var(--color-champagne-gold)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(197, 164, 109, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={14} color="var(--color-champagne-gold)" />
              <span>+91 62358 38332</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+916235838332"
              aria-label="Call Sanu Frameart"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--color-ivory)',
                textDecoration: 'none',
                fontSize: '0.78rem',
                padding: '0.45rem 0.9rem',
                backgroundColor: 'rgba(197, 164, 109, 0.12)',
                border: '1px solid rgba(197, 164, 109, 0.35)',
                borderRadius: '24px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.28)';
                e.currentTarget.style.borderColor = 'var(--color-champagne-gold)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 164, 109, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(197, 164, 109, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Phone size={14} color="var(--color-champagne-gold)" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
