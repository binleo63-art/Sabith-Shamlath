import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const QuranVerseSection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="prayer"
      className="section-burgundy"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
        textAlign: 'center',
        borderTop: '1px solid rgba(197, 164, 109, 0.25)',
        borderBottom: '1px solid rgba(197, 164, 109, 0.25)',
      }}
    >
      <div className="islamic-pattern-bg" style={{ opacity: 0.05 }} />

      <div ref={sectionRef} className="container-narrow reveal-on-scroll">
        {/* Subtle Section Eyebrow */}
        <span className="section-eyebrow">A SACRED COVENANT IN THE QUR&apos;AN</span>

        {/* Decorative Symmetrical Calligraphic Ornament */}
        <div style={{ margin: '1rem 0 2rem' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: '0 auto', display: 'block' }}>
            <circle cx="24" cy="24" r="22" stroke="var(--color-champagne-gold)" strokeWidth="0.75" strokeDasharray="3 3" />
            <polygon points="24,6 42,24 24,42 6,24" stroke="var(--color-champagne-gold)" strokeWidth="1" fill="none" />
            <circle cx="24" cy="24" r="5" fill="var(--color-champagne-gold)" />
          </svg>
        </div>

        {/* Arabic Verse with Almarai Font & RTL Alignment */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 2rem',
            padding: 'clamp(1.25rem, 3.5vw, 2.5rem) clamp(0.85rem, 2.5vw, 2rem)',
            backgroundColor: 'rgba(53, 16, 30, 0.55)',
            border: '1px solid rgba(197, 164, 109, 0.35)',
            boxShadow: '0 12px 32px -10px rgba(0,0,0,0.3)',
          }}
        >
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic-calligraphy"
            style={{
              fontSize: 'clamp(1.2rem, 3.2vw, 2rem)',
              color: 'var(--color-champagne-gold)',
              lineHeight: 2.2,
              fontWeight: 400,
              letterSpacing: 'normal',
              wordSpacing: '0.04em',
              textWrap: 'balance',
              textAlign: 'center',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            {WEDDING_DETAILS.quranVerse.arabic}
          </p>
        </div>

        {/* Fine Champagne Divider */}
        <div className="diamond-ornament" style={{ margin: '1.5rem 0' }}>
          <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
        </div>

        {/* English Translation */}
        <blockquote
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            lineHeight: 1.85,
            color: 'var(--color-ivory)',
            maxWidth: '720px',
            margin: '0 auto 1.5rem',
            fontStyle: 'italic',
            fontWeight: 400,
            opacity: 0.95,
          }}
        >
          &ldquo;{WEDDING_DETAILS.quranVerse.english}&rdquo;
        </blockquote>

        {/* Surah Reference */}
        <cite
          className="font-mono-meta"
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-soft-champagne)',
            letterSpacing: '0.2em',
            fontStyle: 'normal',
            display: 'block',
          }}
        >
          — {WEDDING_DETAILS.quranVerse.surah}
        </cite>
      </div>
    </section>
  );
};
