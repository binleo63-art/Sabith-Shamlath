import React, { useState, useEffect } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Maximize2, X } from 'lucide-react';

export const InvitationCardSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section
      id="invitation"
      className="section-ivory"
      style={{
        padding: 'clamp(5rem, 10vw, 7.5rem) 1.25rem',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="islamic-pattern-bg" style={{ opacity: 0.04 }} />

      <div ref={sectionRef} className="container-narrow reveal-on-scroll">
        <div className="section-header">
          <span className="section-eyebrow">FORMAL INVITATION</span>
          <h2 className="section-title dark">Our Wedding Invitation Card</h2>
          <p className="section-subtitle">
            An heirloom keepsake crafted in gold and burgundy. Tap the card to view it enlarged.
          </p>
          <div className="diamond-ornament" style={{ marginTop: '1rem' }}>
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
          </div>
        </div>

        {/* Interactive Digital Invitation Card */}
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsLightboxOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsLightboxOpen(true);
              }
            }}
            aria-label="Click to enlarge wedding invitation card"
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: 'var(--color-paper)',
              border: '2px solid var(--color-champagne-gold)',
              padding: 'clamp(2.5rem, 5vw, 3.8rem) clamp(1.8rem, 4vw, 3rem)',
              boxShadow: '0 25px 60px -15px rgba(56, 36, 42, 0.25), 0 0 0 8px rgba(246, 240, 229, 0.9), 0 10px 30px var(--gold-glow)',
              transform: 'rotate(-1.2deg)',
              transition: 'transform 0.4s var(--transition-smooth), box-shadow 0.4s var(--transition-smooth)',
              cursor: 'pointer',
              position: 'relative',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 32px 70px -15px rgba(56, 36, 42, 0.3), 0 0 0 8px rgba(246, 240, 229, 0.9), 0 15px 40px var(--gold-glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-1.2deg)';
              e.currentTarget.style.boxShadow = '0 25px 60px -15px rgba(56, 36, 42, 0.25), 0 0 0 8px rgba(246, 240, 229, 0.9), 0 10px 30px var(--gold-glow)';
            }}
          >
            {/* Fine Inner Gold Border Frame */}
            <div
              style={{
                position: 'absolute',
                inset: '14px',
                border: '1px solid rgba(197, 164, 109, 0.45)',
                pointerEvents: 'none',
              }}
            />

            {/* Corner diamond accents */}
            <div style={{ position: 'absolute', top: 9, left: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
            <div style={{ position: 'absolute', top: 9, right: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
            <div style={{ position: 'absolute', bottom: 9, left: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
            <div style={{ position: 'absolute', bottom: 9, right: 9, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />

            {/* Eyebrow & Bismillah in Almarai */}
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic-calligraphy"
              style={{
                fontSize: 'clamp(1.15rem, 3.2vw, 1.65rem)',
                color: 'var(--color-champagne-gold)',
                lineHeight: 1.8,
                marginBottom: '0.5rem',
                fontWeight: 400,
              }}
            >
              {WEDDING_DETAILS.bismillahArabic}
            </p>

            <span
              className="font-mono-meta"
              style={{
                fontSize: 'clamp(0.62rem, 1.4vw, 0.68rem)',
                color: 'var(--color-soft-wine)',
                letterSpacing: '0.2em',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              IN THE NAME OF ALLAH · THE MOST MERCIFUL
            </span>

            {/* Invitation Heading */}
            <p
              className="font-mono-meta"
              style={{
                fontSize: '0.72rem',
                color: 'var(--color-burgundy)',
                letterSpacing: '0.18em',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              TOGETHER WITH THEIR FAMILIES
            </p>

            {/* Couple Names */}
            <div style={{ margin: '1.25rem 0' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  color: 'var(--color-burgundy)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  wordBreak: 'break-word',
                }}
              >
                {WEDDING_DETAILS.groom}
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  margin: '0.6rem 0',
                }}
              >
                <div style={{ width: 45, height: 1, backgroundColor: 'var(--color-champagne-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontStyle: 'italic',
                    color: 'var(--color-champagne-gold)',
                  }}
                >
                  &amp;
                </span>
                <div style={{ width: 45, height: 1, backgroundColor: 'var(--color-champagne-gold)' }} />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  color: 'var(--color-burgundy)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  wordBreak: 'break-word',
                }}
              >
                {WEDDING_DETAILS.bride}
              </h3>
            </div>

            {/* Ornamental Divider */}
            <div className="diamond-ornament" style={{ margin: '1.5rem 0' }}>
              <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
            </div>

            {/* Date and Weekday */}
            <p
              className="font-mono-meta"
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-ink)',
                fontWeight: 700,
                letterSpacing: '0.16em',
                marginBottom: '0.4rem',
              }}
            >
              {WEDDING_DETAILS.weddingDate}
            </p>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-soft-wine)', fontStyle: 'italic' }}>
              Wedding: {WEDDING_DETAILS.events[0].venue} · {WEDDING_DETAILS.events[0].time}
            </p>

            {/* Tap to Enlarge Hint Badge */}
            <div
              style={{
                marginTop: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 1rem',
                backgroundColor: 'rgba(197, 164, 109, 0.15)',
                border: '1px solid rgba(197, 164, 109, 0.4)',
                color: 'var(--color-burgundy)',
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.12em',
              }}
            >
              <Maximize2 size={13} />
              <span>TAP TO ENLARGE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged Invitation Card Lightbox */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Wedding Invitation Card"
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            backgroundColor: 'var(--wine-overlay)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            animation: 'fadeIn 0.3s ease-out forwards',
          }}
        >
            {/* Lightbox Content Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '620px',
                maxHeight: '92vh',
                overflowY: 'auto',
                backgroundColor: 'var(--color-paper)',
                border: '2px solid var(--color-champagne-gold)',
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3.5rem)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 0 6px rgba(246, 240, 229, 0.95)',
                textAlign: 'center',
                color: 'var(--color-ink)',
              }}
            >
              {/* Close Button (Touch target optimized) */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close Lightbox"
                style={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-deep-wine)',
                  color: 'var(--color-ivory)',
                  border: '1px solid var(--color-champagne-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-burgundy)';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-deep-wine)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <X size={20} />
              </button>

              {/* Inner Border Frame */}
              <div
                style={{
                  position: 'absolute',
                  inset: 'clamp(8px, 2vw, 16px)',
                  border: '1px solid rgba(197, 164, 109, 0.4)',
                  pointerEvents: 'none',
                }}
              />

              {/* Bismillah in Almarai */}
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic-calligraphy"
                style={{
                  fontSize: 'clamp(1.25rem, 3.5vw, 1.85rem)',
                  color: 'var(--color-champagne-gold)',
                  lineHeight: 1.85,
                  marginBottom: '0.6rem',
                  fontWeight: 400,
                }}
              >
                {WEDDING_DETAILS.bismillahArabic}
              </p>

              {/* Lightbox Invitation Content */}
              <span
                className="font-mono-meta"
                style={{
                  fontSize: 'clamp(0.62rem, 1.4vw, 0.72rem)',
                  color: 'var(--color-soft-wine)',
                  letterSpacing: '0.2em',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                IN THE NAME OF ALLAH · THE MOST MERCIFUL
              </span>

            <p
              className="font-mono-meta"
              style={{
                fontSize: '0.76rem',
                color: 'var(--color-burgundy)',
                letterSpacing: '0.18em',
                fontWeight: 700,
                marginBottom: '1.5rem',
              }}
            >
              CORDIALLY INVITE YOU TO THE WEDDING CEREMONY OF
            </p>

            <div style={{ margin: '1.5rem 0' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 6.5vw, 3.8rem)',
                  color: 'var(--color-burgundy)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                {WEDDING_DETAILS.groom}
              </h2>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  margin: '0.8rem 0',
                }}
              >
                <div style={{ width: 60, height: 1, backgroundColor: 'var(--color-champagne-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem',
                    fontStyle: 'italic',
                    color: 'var(--color-champagne-gold)',
                  }}
                >
                  &amp;
                </span>
                <div style={{ width: 60, height: 1, backgroundColor: 'var(--color-champagne-gold)' }} />
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 6.5vw, 3.8rem)',
                  color: 'var(--color-burgundy)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                }}
              >
                {WEDDING_DETAILS.bride}
              </h2>
            </div>

            <div className="diamond-ornament" style={{ margin: '1.75rem 0' }}>
              <span style={{ transform: 'rotate(45deg)', display: 'inline-block', width: 6, height: 6, backgroundColor: 'var(--color-champagne-gold)' }} />
            </div>

            <p
              className="font-mono-meta"
              style={{
                fontSize: '1rem',
                color: 'var(--color-ink)',
                fontWeight: 700,
                letterSpacing: '0.18em',
                marginBottom: '0.5rem',
              }}
            >
              {WEDDING_DETAILS.weddingDate.toUpperCase()}
            </p>

            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.95rem' }}>
              <p>
                <strong>Time:</strong> {WEDDING_DETAILS.events[0].time} (6:30 PM Onwards)
              </p>
              <p>
                <strong>Venue:</strong> {WEDDING_DETAILS.events[0].venue}
              </p>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--color-soft-wine)',
                marginTop: '1.75rem',
                fontSize: '1.05rem',
              }}
            >
              Warmly hosted by the {WEDDING_DETAILS.familyName}
            </p>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="btn-burgundy"
              style={{ marginTop: '2rem' }}
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
