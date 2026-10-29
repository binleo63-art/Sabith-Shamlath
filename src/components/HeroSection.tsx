import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CalendarDropdown } from './CalendarDropdown';

export const HeroSection: React.FC = () => {
  const heroRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="section-burgundy"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(5rem, 12vh, 8rem) 1.25rem clamp(4rem, 8vh, 6rem)',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {/* Subtle Islamic Geometric Pattern */}
      <div className="islamic-pattern-bg" />

      {/* Decorative Outer Border Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(0.5rem, 2.5vw, 2.5rem)',
          border: '1px solid rgba(197, 164, 109, 0.25)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 'clamp(0.8rem, 3.2vw, 3rem)',
          border: '1px solid rgba(197, 164, 109, 0.12)',
          pointerEvents: 'none',
        }}
      />

      {/* Corner Ornaments */}
      <div style={{ position: 'absolute', top: 'clamp(0.5rem, 2.5vw, 2.5rem)', left: 'clamp(0.5rem, 2.5vw, 2.5rem)', width: 12, height: 12, borderTop: '2px solid var(--color-champagne-gold)', borderLeft: '2px solid var(--color-champagne-gold)' }} />
      <div style={{ position: 'absolute', top: 'clamp(0.5rem, 2.5vw, 2.5rem)', right: 'clamp(0.5rem, 2.5vw, 2.5rem)', width: 12, height: 12, borderTop: '2px solid var(--color-champagne-gold)', borderRight: '2px solid var(--color-champagne-gold)' }} />
      <div style={{ position: 'absolute', bottom: 'clamp(0.5rem, 2.5vw, 2.5rem)', left: 'clamp(0.5rem, 2.5vw, 2.5rem)', width: 12, height: 12, borderBottom: '2px solid var(--color-champagne-gold)', borderLeft: '2px solid var(--color-champagne-gold)' }} />
      <div style={{ position: 'absolute', bottom: 'clamp(0.5rem, 2.5vw, 2.5rem)', right: 'clamp(0.5rem, 2.5vw, 2.5rem)', width: 12, height: 12, borderBottom: '2px solid var(--color-champagne-gold)', borderRight: '2px solid var(--color-champagne-gold)' }} />

      <div ref={heroRef} className="container-narrow reveal-on-scroll">
        {/* Eight-pointed Islamic Star Medallion */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" stroke="var(--color-champagne-gold)" strokeWidth="1" strokeOpacity="0.8" />
            <rect x="12" y="12" width="24" height="24" stroke="var(--color-champagne-gold)" strokeWidth="1" strokeOpacity="0.8" />
            <circle cx="24" cy="24" r="5" fill="var(--color-champagne-gold)" fillOpacity="0.85" />
          </svg>
        </div>

        {/* Bismillah Calligraphy (Almarai Font, Google Fonts) */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic-calligraphy"
            style={{
              fontSize: 'clamp(1.35rem, 3.8vw, 2.3rem)',
              color: 'var(--color-champagne-gold)',
              lineHeight: 1.85,
              letterSpacing: 'normal',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            }}
          >
            {WEDDING_DETAILS.bismillahArabic}
          </p>
          <p
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.65rem, 1.3vw, 0.78rem)',
              color: 'var(--color-soft-champagne)',
              letterSpacing: '0.16em',
              marginTop: '0.5rem',
              opacity: 0.9,
            }}
          >
            {WEDDING_DETAILS.bismillahEnglish}
          </p>
        </div>

        {/* Delicate Diamond Divider */}
        <div className="diamond-ornament" style={{ margin: '1rem 0 2rem' }}>
          <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 8, height: 8, backgroundColor: 'var(--color-champagne-gold)' }} />
        </div>

        {/* Wedding Invitation Lead */}
        <p
          className="font-mono-meta"
          style={{
            fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
            letterSpacing: '0.24em',
            color: 'var(--color-champagne-gold)',
            marginBottom: '1rem',
          }}
        >
          THE WEDDING OF
        </p>

        {/* Couple Names — Gloock Typography */}
        <div style={{ margin: '0.5rem 0 1.5rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 7.5vw, 5.2rem)',
              lineHeight: 1.08,
              color: 'var(--color-ivory)',
              letterSpacing: '0.01em',
              fontWeight: 400,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.45)',
              wordBreak: 'break-word',
            }}
          >
            {WEDDING_DETAILS.groom}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.6rem, 2vw, 1.25rem)',
              margin: '0.5rem 0',
            }}
          >
            <div style={{ width: 'clamp(35px, 8vw, 60px)', height: 1, background: 'linear-gradient(90deg, transparent, var(--color-champagne-gold))' }} />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                fontStyle: 'italic',
                color: 'var(--color-champagne-gold)',
                lineHeight: 1,
              }}
            >
              &amp;
            </span>
            <div style={{ width: 'clamp(35px, 8vw, 60px)', height: 1, background: 'linear-gradient(90deg, var(--color-champagne-gold), transparent)' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 7.5vw, 5.2rem)',
              lineHeight: 1.08,
              color: 'var(--color-ivory)',
              letterSpacing: '0.01em',
              fontWeight: 400,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.45)',
              wordBreak: 'break-word',
            }}
          >
            {WEDDING_DETAILS.bride}
          </h2>
        </div>

        {/* Wedding Date & Day */}
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem clamp(1rem, 3vw, 1.75rem)',
            borderTop: '1px solid rgba(197, 164, 109, 0.4)',
            borderBottom: '1px solid rgba(197, 164, 109, 0.4)',
            margin: '1rem 0 1.75rem',
          }}
        >
          <p
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.78rem, 2.2vw, 1.05rem)',
              color: 'var(--color-soft-champagne)',
              fontWeight: 700,
              letterSpacing: '0.18em',
            }}
          >
            {WEDDING_DETAILS.weddingDate.toUpperCase()}
          </p>
        </div>

        {/* Heartfelt Invitation Message */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
            lineHeight: 1.8,
            color: 'var(--color-ivory)',
            maxWidth: '650px',
            margin: '0 auto 2.5rem',
            opacity: 0.92,
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
          }}
        >
          Together with our families, we joyously invite you to share in the blessings and honour of our wedding ceremony. Join us as we pray for Allah&apos;s grace upon our union and celebrate our new beginning.
        </p>

        {/* Action Buttons: Save the Date & Enter Story */}
        <div className="responsive-btn-group">
          <CalendarDropdown
            event={WEDDING_DETAILS.calendarDates}
            buttonLabel="SAVE THE DATE"
            variant="champagne"
          />

          <a
            href="#story"
            className="btn-gold-outline"
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '0px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span>ENTER OUR STORY</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
