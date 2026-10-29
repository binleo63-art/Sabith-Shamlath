import React, { useState, useEffect } from 'react';
import { WEDDING_DETAILS } from '../data/weddingDetails';

interface OpeningVeilProps {
  onOpen?: () => void;
}

export const OpeningVeil: React.FC<OpeningVeilProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) onOpen();

    // Remove from DOM tree or accessibility tree after 950ms fade
    const timer = setTimeout(() => {
      setIsRendered(false);
    }, 950);
    return () => clearTimeout(timer);
  };

  // Keyboard support: Enter or Space opens invitation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope Cover"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'var(--color-ivory)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        opacity: isOpen ? 0 : 1,
        pointerEvents: isOpen ? 'none' : 'auto',
        transform: isOpen ? 'scale(1.02)' : 'scale(1)',
        transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        overflow: 'hidden',
      }}
    >
      {/* Background subtle watermark & grain */}
      <div className="islamic-pattern-bg" style={{ opacity: 0.06 }} />

      {/* Luxury Stationery Card Envelope */}
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'auto',
          backgroundColor: 'var(--color-paper)',
          padding: 'clamp(1.75rem, 5vw, 3.25rem) clamp(1rem, 4vw, 2.75rem)',
          border: '1px solid var(--color-champagne-gold)',
          boxShadow: '0 24px 60px -15px rgba(56, 36, 42, 0.22), 0 0 0 5px rgba(246, 240, 229, 0.8), 0 0 0 6px var(--color-champagne-gold)',
          position: 'relative',
          textAlign: 'center',
          color: 'var(--color-ink)',
        }}
      >
        {/* Inner Corner Diamonds */}
        <div style={{ position: 'absolute', top: 10, left: 10, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
        <div style={{ position: 'absolute', top: 10, right: 10, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 10, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />
        <div style={{ position: 'absolute', bottom: 10, right: 10, width: 8, height: 8, transform: 'rotate(45deg)', border: '1px solid var(--color-champagne-gold)' }} />

        {/* Inner Border Frame */}
        <div
          style={{
            position: 'absolute',
            inset: 'clamp(8px, 2.5vw, 14px)',
            border: '1px solid rgba(197, 164, 109, 0.35)',
            pointerEvents: 'none',
          }}
        />

        {/* Small Eyebrow Text */}
        <span
          className="font-mono-meta"
          style={{
            fontSize: 'clamp(0.62rem, 1.4vw, 0.68rem)',
            color: 'var(--color-soft-wine)',
            display: 'block',
            marginBottom: '0.85rem',
            letterSpacing: '0.2em',
          }}
        >
          A PROMISE IN FAITH · FAMILY · LOVE
        </span>

        {/* Islamic Wedding Label */}
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.9rem',
            backgroundColor: 'rgba(197, 164, 109, 0.12)',
            border: '1px solid rgba(197, 164, 109, 0.35)',
            marginBottom: '1rem',
          }}
        >
          <span
            className="font-mono-meta"
            style={{
              fontSize: '0.65rem',
              color: 'var(--color-burgundy)',
              fontWeight: 700,
              letterSpacing: '0.2em',
            }}
          >
            ISLAMIC WEDDING
          </span>
        </div>

        {/* Bismillah in Almarai Font */}
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic-calligraphy"
          style={{
            fontSize: 'clamp(1.15rem, 3.2vw, 1.55rem)',
            color: 'var(--color-champagne-gold)',
            lineHeight: 1.8,
            marginBottom: '0.75rem',
            fontWeight: 400,
          }}
        >
          {WEDDING_DETAILS.bismillahArabic}
        </p>

        {/* Couple Names */}
        <div style={{ margin: '0.75rem 0 1.25rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.9rem, 6.5vw, 3.25rem)',
              color: 'var(--color-burgundy)',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              fontWeight: 400,
              wordBreak: 'break-word',
            }}
          >
            {WEDDING_DETAILS.groom}
          </h1>

          {/* Elegant Ampersand with Heart Accent */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              margin: '0.5rem 0',
            }}
          >
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-champagne-gold))' }} />
            
            {/* Refined champagne-gold heart ornament */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-champagne-gold)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontStyle: 'italic',
                  color: 'var(--color-champagne-gold)',
                  lineHeight: 1,
                }}
              >
                &amp;
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-champagne-gold)" stroke="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, var(--color-champagne-gold), transparent)' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.9rem, 6.5vw, 3.25rem)',
              color: 'var(--color-burgundy)',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              fontWeight: 400,
              wordBreak: 'break-word',
            }}
          >
            {WEDDING_DETAILS.bride}
          </h2>
        </div>

        {/* Date & Weekday */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            className="font-mono-meta"
            style={{
              fontSize: 'clamp(0.75rem, 2.4vw, 0.85rem)',
              color: 'var(--color-ink)',
              fontWeight: 700,
              letterSpacing: '0.16em',
            }}
          >
            {WEDDING_DETAILS.weekday.toUpperCase()} · {WEDDING_DETAILS.dateFormatted.toUpperCase()}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '0.5rem',
            }}
          >
            <span style={{ width: 4, height: 4, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)' }} />
            <span style={{ width: 6, height: 6, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)' }} />
            <span style={{ width: 4, height: 4, transform: 'rotate(45deg)', backgroundColor: 'var(--color-champagne-gold)' }} />
          </div>
        </div>

        {/* Prominent "OPEN INVITATION" button with breathing glow */}
        <div>
          <button
            type="button"
            onClick={handleOpen}
            className="btn-burgundy btn-breathing-glow"
            style={{
              fontSize: '0.85rem',
              padding: '0.95rem 2.25rem',
              cursor: 'pointer',
              minHeight: '48px',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <span>OPEN INVITATION</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Sub-note */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--color-soft-wine)',
            marginTop: '1.25rem',
            letterSpacing: '0.1em',
          }}
        >
          PRESS ENTER OR CLICK TO REVEAL
        </p>
      </div>
    </div>
  );
};
