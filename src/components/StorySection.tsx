import React from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { Countdown } from './Countdown';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const StorySection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="story"
      className="section-burgundy"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
        borderTop: '1px solid rgba(197, 164, 109, 0.25)',
        borderBottom: '1px solid rgba(197, 164, 109, 0.25)',
      }}
    >
      <div className="islamic-pattern-bg" />

      <div ref={sectionRef} className="container reveal-on-scroll">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">OUR SACRED BEGINNING</span>
          <h2 className="section-title light">Two Lives, One Beautiful Intention.</h2>
          <div className="diamond-ornament">
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
          </div>
        </div>

        {/* Editorial Two-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(2rem, 4vw, 4rem)',
            alignItems: 'center',
            maxWidth: '1020px',
            margin: '0 auto',
          }}
        >
          {/* Column 1: Monogram Medallion & Wedding Details */}
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(53, 16, 30, 0.6)',
              padding: 'clamp(1.75rem, 4vw, 3.25rem) clamp(1.25rem, 3vw, 2rem)',
              border: '1px solid rgba(197, 164, 109, 0.35)',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
            }}
          >
            {/* Medallion Border Accent */}
            <div
              className="float-seal"
              style={{
                width: 'clamp(115px, 18vw, 140px)',
                height: 'clamp(115px, 18vw, 140px)',
                margin: '0 auto 1.5rem',
                border: '1px solid var(--color-champagne-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                backgroundColor: 'rgba(35, 10, 20, 0.8)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '5px',
                  border: '1px dashed rgba(197, 164, 109, 0.5)',
                }}
              />
              <span
                style={{
                  transform: 'rotate(-45deg)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.2rem',
                  color: 'var(--color-ivory)',
                  letterSpacing: '0.04em',
                }}
              >
                {WEDDING_DETAILS.monogram}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                color: 'var(--color-ivory)',
                marginBottom: '0.5rem',
              }}
            >
              {WEDDING_DETAILS.groom} &amp; {WEDDING_DETAILS.bride}
            </h3>

            <p
              className="font-mono-meta"
              style={{
                fontSize: '0.78rem',
                color: 'var(--color-champagne-gold)',
                letterSpacing: '0.18em',
              }}
            >
              WEDDING CELEBRATION: {WEDDING_DETAILS.events[0].time.toUpperCase()}
            </p>

            <div
              style={{
                marginTop: '1.25rem',
                display: 'inline-block',
                padding: '0.4rem 1.2rem',
                backgroundColor: 'rgba(197, 164, 109, 0.1)',
                border: '1px solid rgba(197, 164, 109, 0.25)',
              }}
            >
              <span
                className="font-mono-meta"
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--color-soft-champagne)',
                  letterSpacing: '0.14em',
                }}
              >
                {WEDDING_DETAILS.weddingDate}
              </span>
            </div>
          </div>

          {/* Column 2: Story Text & Countdown */}
          <div>
            <div style={{ marginBottom: '2.25rem' }}>
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                  lineHeight: 1.85,
                  color: 'var(--color-ivory)',
                  marginBottom: '1.25rem',
                  fontWeight: 300,
                }}
              >
                In the presence of our beloved families and under the blessings of Allah, we embark on a journey bound by faith, mutual respect, and lifelong companionship.
              </p>
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                  lineHeight: 1.8,
                  color: 'var(--color-soft-champagne)',
                  opacity: 0.9,
                }}
              >
                We pray that Allah blesses our union, fills our days with sakinah (tranquility), mawaddah (love), and rahmah (mercy), and unites our families in enduring happiness. We humbly request the honor of your presence and your heartfelt prayers as we take this blessed step together.
              </p>
            </div>

            {/* Live Countdown in Story Section */}
            <div style={{ marginTop: '2rem' }}>
              <span
                className="font-mono-meta"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--color-champagne-gold)',
                  letterSpacing: '0.2em',
                  display: 'block',
                  marginBottom: '0.85rem',
                  textAlign: 'center',
                }}
              >
                COUNTING DOWN TO OUR WEDDING
              </span>
              <Countdown lightBackground={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
